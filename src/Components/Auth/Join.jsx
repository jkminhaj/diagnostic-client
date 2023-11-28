import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { updateProfile } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Swal from 'sweetalert2'
import axios from "axios";
import UpazilaOption from "../Data/UpazilaOption";
import DistrictOption from "../Data/DistrictOption";
import { AuthContext } from "../../Context/AuthProvider";
import { faL } from "@fortawesome/free-solid-svg-icons";

// const apiKey = 23255cbd1487870b7fe3fe227a71663b;
const Join = () => {
    const {
        loading,
        auth,
        createUser,
        setLoading,
    } = useContext(AuthContext)
    const [visibility, setVisibility] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Sign Up button fuctions
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log('1')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const upazila = form.upazila.value;
        const district = form.district.value;
        const blood = form.blood.value;
        // by default it's active , admin can block it later if he wants
        const status = 'active'
        console.log('2')
        const errorNotify = (e) => toast(e,
            {
                icon: '',
                style: {
                    // borderRadius: '5px',
                    background: 'white',
                    // border:'1px solid',
                    // borderLeft:'1px solid red',
                    color: 'red',
                    // marginTop:'10px',
                    boxShadow: 'none',
                    // fontSize:'larger'
                },
            });

        // password validation
        if (password !== confirmPassword) {
            errorNotify("Password doesn't match")
            setLoading(false)
            return
        }
        if (password.length < 5) {
            setLoading(false)
            errorNotify('Password is less than 6 characters')
            return
        } else if (!/[A-Z]/.test(password)) {
            setLoading(false)
            errorNotify('Password should have at least 1 capital letter');
            return
        } else if (!/[^A-Za-z0-9]/.test(password)) {
            setLoading(false)
            errorNotify('Password should have at least 1 special character');
            return
        }
        console.log('3')
        // Getting image link through Image BB
        const avatar = form.avatar;
        const apiKey = '23255cbd1487870b7fe3fe227a71663b';
        const imageFile = avatar.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('key', apiKey);
        console.log('4')
        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(data => {
                const image = data.data.url;
                const userData = { email, name, avatar: image, blood_group: blood, upazila, district, status, role: 'user' };
                console.log('5')
                // now let's connect to firebase
                // Connect to firebase
                console.log('7')
                // axios
                axios.post('http://localhost:3000/users', userData)
                    .then(res => {
                        console.log('6')
                        console.log(res.data)
                        // if user post to mongodb successfully
                        if (res.data.insertedId) {
                            // if image is done then we will do validation
                            console.log('user Data', userData)
                            createUser(email, password)
                                .then(res => {
                                    updateProfile(auth.currentUser, {
                                        displayName: name, photoURL: image
                                    }).then(() => {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Successfully signed in',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })

                                        navigate(location?.state ? location.state : '/');
                                        // setTimeout(() => { window.location.reload() }, 1000)
                                    })
                                })
                                .catch(err => {
                                    setLoading(false)
                                    console.log(err)
                                    if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
                                        errorNotify('Email already in use')
                                    } else if (err.message === 'Firebase: Error (auth/invalid-email).') {
                                        errorNotify('Invalid email')
                                    }
                                })

                        }
                    })
                    .catch(err => {
                        setLoading(false)
                        
                        errorNotify('Image server error!')
                        console.log(err)
                    })
                // axios

                // if we dont get image then .
            })
            .catch(error => {
                setLoading(false)
                errorNotify('Error uploading image')
                console.error('Error uploading image:', error);
            });
    }
    return (
        <div className="flex flex-col
         justify-center items-center gap-6 md:gap-10 mt-9">

            <div className="md:border rounded md:shadow pt-8 md:pt-8 md:px-8 pb-8 px-5">
                <h1 className="text-3xl text-center mb-2 font-medium">Sign Up</h1>
                <p className="text-sm mb-5 text-center text-blue-500">Join the Community of Professionals</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:my-9 gap-2 mb-3">
                        {/* name and email */}
                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Full Name" name="name" />
                        <input required type="email" name='email' className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Email or Phone" />
                        {/* file */}
                        <input required type="file" name='avatar' className="file-input file-input-bordered w-full max-w-xs outline-none focus:border-blue-500 text-base text-gray-400  rounded" placeholder="Email or Phone" />
                        {/* select blood group */}
                        <select required type="text" className="w-full text-gray-400 outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Full Name" name="blood">
                            <option>blood group</option>
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
                        <DistrictOption></DistrictOption>
                        {/* select upazilas */}
                        <UpazilaOption></UpazilaOption>
                        {/* password */}
                        <input required type="password" name="password" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="password" />
                        <div className="relative">
                            <input required name="confirmPassword" className="w-full focus:border-blue-500  text-base outline-none border p-3 rounded" type={visibility ? 'text' : 'password'} placeholder="confirm password" />
                            <p onClick={() => setVisibility(!visibility)} className="absolute cursor-pointer font-semibold hover:text-blue-300 text-blue-500 right-5  bottom-3">{visibility ? 'hide' : 'show'}</p>
                        </div>
                    </div>
                    <p className="text-xs mb-1 mt-5 text-center">By clicking agree and join , you agree to Remoto’s <span className="font-semibold text-blue-400">User  Agreement</span>, <span className="font-semibold text-blue-400">Privacy Policy</span>, and <span className="font-semibold text-blue-400">Cookie Policy</span>.</p>
                    <button className="mt-5 w-full mb-2 border rounded-full py-3 bg-blue-400 text-white font-semibold hover:bg-blue-600">{loading ? <span className="loading loading-ball loading-xs"></span> : 'Agree & Join'}</button>
                </form>
                <div className="flex items-center py-1 justify-between mb-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-600">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button className="w-full font-medium border py-3 rounded-full flex hover:bg-slate-50 justify-center items-center gap-3"> <FontAwesomeIcon color="#0080FF" icon={faGoogle} /> <p>Continue with Google</p></button>
                <p className="text-center mt-6">Already on Remoto? <Link to='/login'><span className="text-blue-500 cursor-pointer font-semibold">Sign in</span></Link></p>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Join;

