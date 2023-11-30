import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faAdd, faBookDead, faFileImage, faHome, faImage, faImagePortrait, faImages, faKitMedical, faListCheck, faTowerObservation, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";
import './Dashboard.css'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { faCalendarCheck, faUser } from "@fortawesome/free-regular-svg-icons";
import useAdmin from "../../Hooks/useAdmin";
import useStatus from "../../Hooks/useStatus";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    
    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    const [isBlocked] = useStatus();
    console.log(isBlocked)
    return (
        <div className="flex ">
            {/* navigation seciotn */}
            <section className="dashboard w-2/12 nav bg-slate-50  h-screen pl-3 pt-5 md:pl-8 space-y-4">

                <NavLink to='/' className='flex items-center gap-4 text-gray-500'>
                    <FontAwesomeIcon className="text-xs" icon={faHome}></FontAwesomeIcon>
                    Home
                </NavLink>
                {/* dashboard user */}
                {
                    !isAdmin && user && !isBlocked &&
                    <>
                        <NavLink to='/dashboard/myprofile' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-xs" icon={faUser}></FontAwesomeIcon>
                            My Profile
                        </NavLink>
                        <NavLink to='/dashboard/upcomingappointments' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-sm" beat icon={faCalendarCheck}></FontAwesomeIcon>
                            Upcoming Appointments
                        </NavLink>
                        <NavLink to='/dashboard/testresults' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-xs" icon={faListCheck}></FontAwesomeIcon>
                            Test Results
                        </NavLink>
                    </>
                }
                {/* dashboard admin */}
                {
                    user && isAdmin &&
                    <>
                        <NavLink to='/dashboard/alltests' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-xs" icon={faKitMedical}></FontAwesomeIcon>
                            All Tests
                        </NavLink>
                        <NavLink to='/dashboard/addatest' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-xs" icon={faAdd}></FontAwesomeIcon>
                            Add A Test
                        </NavLink>
                        <NavLink to='/dashboard/allusers' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-xs" icon={faUsers}></FontAwesomeIcon>
                            All Users
                        </NavLink>
                        <NavLink to='/dashboard/reservations' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-xs" icon={faBookDead}></FontAwesomeIcon>
                            Reservation
                        </NavLink>
                        <NavLink to='/dashboard/allbanners' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-xs" icon={faImages}></FontAwesomeIcon>
                            All Banners
                        </NavLink>
                        <NavLink to='/dashboard/addabanner' className='flex items-center gap-4 text-gray-500'>
                            <FontAwesomeIcon className="text-xs" icon={faImage}></FontAwesomeIcon>
                            Add Banner
                        </NavLink>
                    </>
                }
            </section>
            {/* dynamic part */}
            <Outlet className='w-10/12'></Outlet>
        </div>
    );
};

export default Dashboard;