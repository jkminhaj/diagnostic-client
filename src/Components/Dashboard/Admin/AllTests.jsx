import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTests from "../../../Hooks/useTests";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    const handleDelete = id =>{

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
                               <td><button onClick={()=>handleDelete()}><FontAwesomeIcon className="text-red-700" icon={faTrash}></FontAwesomeIcon></button></td>
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
                                        <div className="flex gap-5">
                                            <div className=" w-40 h-40 ">
                                                <img className="rounded-xl" src={u.avatar} alt="Avatar Tailwind CSS Component" />
                                                <p className="text-center font-semibold mt-1">{u.name}</p>
                                            </div>
                                            <div className="flex flex-col justify-center gap-2 border-l-2 pl-5 ">
                                                <p>Email: {u.email}</p>
                                                <p>ID: {u._id}</p>
                                                <p>Blood Group: {u.blood_group}</p>
                                                <p>District: {u.district}</p>
                                                <p>Upazila: {u.upazila}</p>

                                            </div>
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