import { faAdd, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

{/* <div>
<div className='mb-5 flex justify-center'>
                        <div className='flex items-center gap-4'>
                            <p className='text-2xl text-center text-blue-400 font-semibold'>
                                Add A Test
                            </p>
                            <FontAwesomeIcon color="#0080FF" className='text-2xl' icon={faAdd} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:my-9 gap-2 mb-3">
                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="name" defaultValue={user?.displayName} placeholder="Name" />
                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="title" placeholder="Job title" />
                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="banner" placeholder="Job banner url" />
                        <div className='relative'>
                            <input required type="number" defaultValue='0' className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="applicants" />
                            <p className='absolute text-xs right-9 text-gray-300 top-4'>Applicants</p>
                        </div>
                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="description" placeholder="Description" />
                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="salary" placeholder="Salary Range  ex: 99-99" />
                        <select required name="category" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded">
                            <option value='Remote'>Category</option>
                            <option value="Remote">Remote Jobs</option>
                            <option value="Hybrid">Hybrid Jobs</option>
                            <option value="Part-Time">Part Time Jobs</option>
                            <option value="On-Site">On Site Jobs</option>
                        </select>
                        <ReactDatePicker required placeholderText='Deadline' className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" selected={deadline} onChange={(date) => setDeadline(date)} />
                        <ReactDatePicker required placeholderText='Posting Date' className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" selected={postingDate} onChange={(date) => setPostingDate(date)} />
                        
                    </div>
                    <p className="text-xs mb-1 mt-5 text-center">By posting this job , you agree to Remoto’s <span className="font-semibold text-blue-400">Terms of service</span>, <span className="font-semibold text-blue-400">Privacy Policy</span>, and <span className="font-semibold text-blue-400">Cookie Policy</span>.</p>
</div> */}