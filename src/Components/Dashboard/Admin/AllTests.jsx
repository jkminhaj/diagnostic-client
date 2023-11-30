import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTests from "../../../Hooks/useTests";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import { Form } from "react-router-dom";

const AllTests = () => {
    const [tests, refetch, isLoading] = useTests();
    if (!tests) {
        return (
            <>
                <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </>
        )
    }


    const handleDelete = id => {
        axios.delete(`https://doctor-server-five.vercel.app/tests/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }

    // send updated value to the databse
    const handleSubmit = (id , e) => {
        e.preventDefault()
        const form = e.target;
        const NewTestName = form.NewTestName.value;
        const NewImageUrl = form.NewImageUrl.value;
        const NewDetails = form.NewDetails.value;
        const NewPrice = form.NewPrice.value;
        const NewDate = form.NewDate.value;
        const NewSlots = form.NewSlots.value;

        const updatedTestsInfo = { NewDate , NewDetails , NewTestName , NewSlots , NewPrice , NewImageUrl };

        axios.patch(`https://doctor-server-five.vercel.app/tests/${id}`, updatedTestsInfo)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully updated proflie',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })

    }





    return (
        <div className="flex-1">

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Banner
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Slots</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tests.map(u => <tr key={u._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-10 h-10">
                                                <img src={u.imageUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {u.testName}
                                </td>
                                <td className="text-red-500">
                                    $ {u.price}
                                </td>
                                <td>{u.date}</td>
                                <td>{u.slots}</td>
                                <td><button onClick={() => handleDelete(u._id)}><FontAwesomeIcon className="text-red-700" icon={faTrash}></FontAwesomeIcon></button></td>
                                <td>
                                    <p onClick={() => document.getElementById(`${u._id}`).showModal()} className="text-[#007BFF] text-center py-1  hover:bg-blue-400 hover:text-white rounded-full cursor-pointer">Update</p>
                                </td>
                                {/* modal */}
                                <dialog id={u._id} className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <div className="">
                                            <div className= " flex justify-center mb-5">
                                                <div className=" w-60">
                                                    <img className="rounded" src={u.imageUrl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <Form onSubmit={(e)=>handleSubmit(u._id, e)} className="flex flex-col justify-center   pl-5 ">
                                                <p>Test Name</p>
                                                <input defaultValue={u.testName} required type="text" className="w-full outline-none focus:border-blue-500 text-base border px-2 rounded" placeholder="test name" name="NewTestName" /><input className=""></input>

                                                <p>Image Link</p>
                                                <input defaultValue={u.imageUrl} required type="text" className="w-full outline-none focus:border-blue-500 text-base border px-2 rounded" placeholder="Image link" name="NewImageUrl" /><input className=""></input>

                                                <p>Details</p>
                                                <input defaultValue={u.details} required type="text" className="w-full outline-none focus:border-blue-500 text-base border px-2 rounded" placeholder="Details" name="NewDetails" /><input className=""></input>

                                                <p>Price</p>
                                                <input defaultValue={u.price} required type="number" className="w-full outline-none focus:border-blue-500 text-base border px-2 rounded" placeholder="price" name="NewPrice" /><input className=""></input>

                                                <p>Date</p>
                                                <input defaultValue={u.date} required type="text" className="w-full outline-none focus:border-blue-500 text-base border px-2 rounded" placeholder="dd mm yyyy" name="NewDate" /><input className=""></input>

                                                <p>Slots</p>
                                                <input defaultValue={u.slots} required type="number" className="w-full outline-none focus:border-blue-500 text-base border px-2 rounded" placeholder="Slots" name="NewSlots" /><input className=""></input>


                                                <button className="btn bg-blue-400 text-white">Update</button>
                                            </Form>
                                        </div>
                                    </div>
                                </dialog>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllTests;