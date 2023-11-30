import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/users');
            return res.data;
        }
    })
    const handleMakeAdmin = u =>{
        axios.patch(`http://localhost:3000/users/admin/${u._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${u.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeBlock = u =>{
        axios.patch(`http://localhost:3000/users/block/${u._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${u.name} is Blocked Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div className="flex-1 ml-2">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                User
                            </th>
                            <th>Email</th>
                            <th>Blood Group</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(u => <tr key={u._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-10 h-10">
                                                <img src={u.avatar} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{u.name}</div>
                                            <div className="text-sm opacity-50">{u.district} , {u.upazila}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {u.email}
                                </td>
                                <td className="text-red-500">
                                    {u.blood_group}
                                </td>
                                <td  onClick={()=>{handleMakeAdmin(u)}}><p title="make admin" className='text-blue-500 hover:text-green-600 cursor-pointer'>{u.role}</p></td>
                                <td  onClick={()=>{handleMakeBlock(u)}}><p title="block user" className='hover:text-red-600 cursor-pointer'>{u.status}</p></td>
                                <td>
                                    <p onClick={() => document.getElementById(`${u._id}`).showModal()} className="text-[#007BFF] text-center py-1  hover:bg-blue-400 hover:text-white rounded-full cursor-pointer">see info</p>
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

export default AllUsers;