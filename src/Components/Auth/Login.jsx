import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast, Toaster } from "react-hot-toast";
import Swal from 'sweetalert2'
import { faHome, faHomeAlt, faHomeLg, faHospital, faL } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
    const [visibility, setVisibility] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        testing,
        loading,
        setLoading,
        loginUser,
        connectGoogle } = useContext(AuthContext);
    // sweet toast
    const errorNotify = (e) => toast(e,
        {
            icon: '',
            style: {
                borderRadius: '50px',
                background: 'white',
                color: 'red',
            },
        });
    

    // Sign in button fuctions
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        loginUser(email, password).then(res => {
            console.log('logged in successfull', res.user)
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Successfully logged in',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(location?.state ? location.state : '/dashboard');
            //   setTimeout(() => { window.location.reload() }, 1000)
        }).catch(err => {
            setLoading(false)
            if (err.message === 'Firebase: Error (auth/invalid-email).') {
                errorNotify('invalid email')
            } else if (err.message === 'Firebase: Error (auth/invalid-login-credentials).') {
                errorNotify('Invalid login information')
            }
            console.error(err.message)
        })

    }
    return (
        <div className="flex flex-col
         justify-center items-center gap-6 md:gap-10 mt-24">
            <div className="md:border rounded md:shadow pt-8 pb-8 px-5 md:w-96">
                <h1 className="text-3xl mb-2 font-medium">Sign in</h1>
                <p className="text-sm mb-5">Get best treatment here</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 mb-3">
                        <input type="email" name="email" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Email or Phone" />
                        <div className="relative">
                            <input name="password" className="w-full focus:border-blue-500  text-base outline-none border p-3 rounded" type={visibility ? 'text' : 'password'} placeholder="Password" />
                            <p onClick={() => setVisibility(!visibility)} className="absolute cursor-pointer font-semibold hover:text-blue-300 text-blue-500 right-5  bottom-3">{visibility ? 'hide' : 'show'}</p>
                        </div>

                    </div>
                    <p className="font-semibold text-blue-400">Forgot password?</p>
                    <button className="mt-5 w-full mb-2 border rounded-full py-3 bg-blue-400 text-white font-semibold hover:bg-blue-600">{loading ? <span className="loading loading-ball loading-xs"></span> : 'Sign in'}</button>
                </form>
                <div className="flex items-center py-1 justify-between mb-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-600">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <p className="text-xs mb-3">By clicking Continue, you agree to Diagonist <span className="font-semibold text-blue-400">User  Agreement</span>, <span className="font-semibold text-blue-400">Privacy Policy</span>, and <span className="font-semibold text-blue-400">Cookie Policy</span>.</p>
                <button onClick={() => { connectGoogle().then(() => { navigate(location?.state ? location.state : '/'); }) }} className="w-full font-medium border py-3 rounded-full flex hover:bg-slate-50 justify-center items-center gap-3"> <FontAwesomeIcon color="#0080FF" icon={faGoogle} /> <p>Continue with Google</p></button>
            </div>
            <div>
                <p>New to Diagonist? <Link to='/join'><span className="text-blue-500 cursor-pointer font-semibold">Join now</span></Link></p>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;