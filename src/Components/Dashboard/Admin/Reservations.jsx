import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Reservations = () => {
    // use setrefetching when you wanna  refetch
    let [reFetching , setReFetching] = useState(1)
    const [allReservations, setAllReservations] = useState([]);
    // loadall reservations
    useEffect(() => {
        axios.get('http://localhost:3000/reservations')
            .then(res => {
                setAllReservations(res.data);
            })
    }, [reFetching])
    
    // search 
    const [searchEmail, setSearchEmail] = useState('');
    useEffect(() => {
        fetch(`http://localhost:3000/reservations?email=${searchEmail}`)
            .then(res => res.json())
            .then(data => setAllReservations(data))
    }, [searchEmail])
    const handleSearch = e => {
        e.preventDefault()
        const form = e.target;
        const search = form.search.value;
        setSearchEmail(search);
    }

    const handleSubmit = id =>{
        axios.patch(`http://localhost:3000/reservations/delivered/${id}`)
        .then(res=>{
            console.log(res.data)
        })
    }

    const handleCancel = id =>{
        axios.delete(`http://localhost:3000/reservations/cancel/${id}`)
        .then(res=>{
            if(res.data.deletedCount){
                window.location.reload()
            }
        })
    }

    return (
        <div className="flex-1  p-4">
            
            {/* search */}
            <div className="flex justify-center mt-2">
                <form onSubmit={handleSearch} className="flex items-center">
                    <input type="text" name="search" className="border md:w-96 shadow-xs outline-none px-4 border-r-0 rounded-r-none py-2 rounded-xl" placeholder="Search with email" />
                    <button className="border px-3 py-2 rounded-r-xl hover:bg-blue-400 bg-blue-500">
                        <FontAwesomeIcon color="white" icon={faSearch} />
                    </button>
                </form>
            </div>
            {/* reservations */}
            <div className="grid grid-cols-4 gap-4 mt-5">
                {allReservations.map(reservation => <div className="card card-compact  bg-base-100 border">
                    <figure><img src={reservation.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{reservation.testName}</h2>
                        <p className="font-semibold">{reservation.date}</p>
                        <p className="font-semibold">{reservation.email}</p>
                        <div className="flex justify-between">
                            <button onClick={()=>handleCancel(reservation._id)} className="px-3 py-1 rounded hover:bg-red-600 bg-red-500 text-white">Cancel</button>
                            <button onClick={()=>handleSubmit(reservation._id)} className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white">Submit</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Reservations;