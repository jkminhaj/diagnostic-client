import { faAdd, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import Swal from "sweetalert2";

const AddATest = () => {
    const [testDate, setTestDate] = useState(null);
    const handleAddTest = e => {
        e.preventDefault();
        const form = e.target;
        const testName = form.name.value ;
        const imageUrl = form.image.value ;
        const details = form.details.value ;
        const price = form.price.value ;
        const slots = form.slots.value ;
        const date = format(testDate, 'dd-MM-yyyy');
        const newTest = {testName,imageUrl,details,price,slots,date};
        console.log(newTest)
        // add a tost for adding
        axios.post('https://doctor-server-five.vercel.app/tests',newTest)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully added test',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTestDate(null)
                form.reset()
            }
        })
    }
    return (
        <div className="flex-1">
            <div className=" mt-32">
                <form onSubmit={handleAddTest} className='w-1/2 m-auto rounded-lg p-8 border '>
                    <h1 className="text-3xl text-blue-500 font-semibold text-center mb-4">Add A Test</h1>
                    <div className="grid gap-2 md:grid-cols-2 ">
                        {/* name */}
                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="name" placeholder="Test Name" />

                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="image" placeholder="Image URL" />

                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="details" placeholder="Test Details" />

                        <input required type="number" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="price" placeholder="Price" />

                        <input required type="number" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="slots" placeholder="Total Slots" />

                        <DatePicker required placeholderText='Test Date' className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" selected={testDate} onChange={(date) => setTestDate(date)} />
                    </div>

                    <button className="mt-5 w-full mb-2 border rounded-full py-3 bg-blue-400 text-white font-semibold hover:bg-blue-600">Add Test</button>
                </form>
            </div>
        </div>
    );
};

export default AddATest;
