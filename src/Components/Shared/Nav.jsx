import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import './Nav.css'

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const links =
        <>
            <NavLink className='nav' to='/'><li>Home</li></NavLink>

            <NavLink className='nav' to='/blogs'><li>Blogs</li></NavLink>
            <NavLink className='nav' to='/ourteam'><li>Our Team</li></NavLink>
            <NavLink className='nav' to='/contactus'><li>Contact Us</li></NavLink>
            <NavLink className='nav' to='/alltestspublic'><li>All Tests</li></NavLink>

            {user ?
                <>
                    <NavLink className='nav' to='/dashboard'><li>Dashboard</li></NavLink>
                </> :
                <>
                    <NavLink className='nav' to='/login'><li>Sign In</li></NavLink>
                    <NavLink className='nav' to='join' ><li>Sign Up</li></NavLink>
                </>
            }
        </>
        
    return (
        // change the gap setting 
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="h-14" src='https://www.statnews.com/wp-content/uploads/2023/06/DC-Diagnosis-Sign-up-logo.png' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3  font-normal">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="md:w-10 w-7 rounded-full">
                                        <img title={user.displayName} src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName}
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><Link to='/dashboard/myprofile'>Proflie</Link></li>
                                    <li><a onClick={() => { logOut() }}>Logout</a></li>
                                </ul>
                            </div>

                        </> : <>
                            {/* If there is no user */}
                            <div className="font-semibold flex  gap-1 md:gap-2">
                                <NavLink to='/join'><button className="text-xs md:text-base  md:py-3 md:px-5 hover:bg-gray-100 rounded-full">Join Now</button></NavLink>
                                <NavLink to='/login'><button className="md:py-3 text-xs md:px-5 border border-blue-400 text-blue-400 md:text-base px-1 hover:bg-blue-50 rounded-full">Sign In</button></NavLink>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Nav;