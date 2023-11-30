import { useContext, useEffect, useState } from "react";
import useReservations from "../../../Hooks/useReservations";
import { AuthContext } from '../../../Context/AuthProvider'
import AuthProvider from "../../../Context/AuthProvider";
import axios from "axios";
const UpcomingAppointments = () => {
    const { user, loading } = useContext(AuthContext);

    const [allReservations, setAllReservations] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/reservations?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAllReservations(data))
    }, [])

    const handleCancel = id =>{
        axios.delete(`http://localhost:3000/reservations/cancel/${id}`)
        .then(res=>{
            if(res.data.deletedCount){
                window.location.reload()
            }
        })
    }

    return (
        <div className="flex-1 ml-2">
            <h1 className="text-center mt-3 text-3xl font-semibold">My Appointments</h1>
            {/* table */}
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Banner
                                </th>
                                <th>Test Name</th>
                                <th>Date</th>
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allReservations.map(u => <tr key={u._id}>

                                    <td>
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="w-20 h-10">
                                                    <img src={u.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {u.testName}
                                    </td>
                                    
                                    <td>{u.date}</td>
                                    <td><button className="bg-red-400 px-2 py-1 text-white rounded" onClick={()=>handleCancel(u._id)}>Cancel</button></td>
                                </tr>)
                            }
                            {/* row 1 */}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default UpcomingAppointments;