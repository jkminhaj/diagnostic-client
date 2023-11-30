import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider"
import axios from "axios";
import UpazilaOption from "../../Data/UpazilaOption";
import DistrictOption from "../../Data/DistrictOption";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../Config/firebase.config";

const MyProfile = () => {
    const [userData, setUserData] = useState(null)
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`https://doctor-server-five.vercel.app/users?email=${user.email}`)
            .then(res => {
                setUserData(res.data[0])
            })
    }, []);
    if (!userData) {
        return <div>Loading...</div>;
    }

    // send updated value to the databse
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target ;
        const NewName = form.name.value;
        const NewAvatar = form.avatar.value;
        const NewBlood = form.blood.value;
        const NewUpazila = form.upazila.value;
        const NewDistrict = form.district.value;
        const updatedProfileInfo = {NewAvatar,NewBlood,NewDistrict,NewUpazila,NewName};
        
        axios.patch(`https://doctor-server-five.vercel.app/users/${user?.email}` ,updatedProfileInfo)
        .then(res=>{
            if(res.data.acknowledged){
                updateProfile(auth.currentUser,{
                    displayName:NewName , photoURL:NewAvatar
                }).then(()=>{
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully updated proflie',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            }
        })

    }

    // alert(userData.blood_group)
    return (
        <div className="flex-1">

            <div className="flex justify-center mt-6">
                <img className="w-80  rounded-full" src={userData.avatar} alt="" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center" >
                    <div className="grid grid-cols-1 md:grid-cols-2 md:my-9 gap-2 mb-3">
                        {/* name and email */}
                        <input defaultValue={userData.name} required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Full Name" name="name" />
                        <input disabled defaultValue={userData.email} required type="email" name='email' className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Email or Phone" />
                        {/* file */}
                        <input defaultValue={userData.avatar} required type="text" name='avatar' className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="image link" />
                        {/* select blood group */}
                        <select defaultValue={userData?.blood_group || ''} required type="text" className="w-full text-gray-400 outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Full Name" name="blood">
                            <option value='' disabled >Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        {/* select district */}
                        <DistrictOption defaultValue={userData.district}></DistrictOption>
                        {/* select upazilas */}
                        <UpazilaOption defaultValue={userData.upazila}></UpazilaOption>
                <button className="btn col-span-2 bg-blue-500 text-white">Update</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default MyProfile;