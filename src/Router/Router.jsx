import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import Login from "../Components/Auth/Login";
import Join from "../Components/Auth/Join";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddABanner from "../Components/Dashboard/Admin/AddABanner";
import AddATest from "../Components/Dashboard/Admin/AddATest";
import AllBanners from "../Components/Dashboard/Admin/AllBanners";
import AllTests from "../Components/Dashboard/Admin/AllTests";
import AllUsers from "../Components/Dashboard/Admin/AllUsers";
import Reservations from "../Components/Dashboard/Admin/Reservations";
import MyProfile from "../Components/Dashboard/User/MyProfile";
import TestResults from "../Components/Dashboard/User/TestResults";
import UpcomingAppointments from "../Components/Dashboard/User/UpcomingAppointments";
import AllTestsPublic from "../Pages/AllTestsPublic";
import DetailTest from "../Pages/DetailTest";
import PrivateRoute from "./Private/PrivateRoute";
import AdminRoute from "./Admin/AdminRoute";
import CheckActive from "./Private/CheckActive";
import Blogs from "../Pages/Blogs";
import OurTeam from "../Pages/OurTeam";
import ContactUs from "../Pages/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/ourteam',
          element:<OurTeam></OurTeam>
        },
        {
          path:'/contactus',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/alltestspublic',
          element:<AllTestsPublic></AllTestsPublic>
        },
        // detailed test will be private
        {
          path:`/detailtest/:id`,
          element:<PrivateRoute><DetailTest></DetailTest></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:3000/tests/${params.id}`)
        }
      ]
    },
    // login
    {
        path:'/login',
        element:<Login></Login>
    },
    // join
    {
        path:'/join',
        element:<Join></Join>
    },
    // Dashboard
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'/dashboard',
          element:<div><p>hi</p></div>
        },
        // user dashboard routes
        {
          path:'myprofile',
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path:'testresults',
          element:<PrivateRoute><TestResults></TestResults></PrivateRoute>
        },
        {
          path:'upcomingappointments',
          element:<PrivateRoute><UpcomingAppointments></UpcomingAppointments></PrivateRoute>
        },
        // // admin dashboard routes
        {
          path:'addabanner',
          element:<AdminRoute><AddABanner></AddABanner></AdminRoute>
        },
        {
          path:'addatest',
          element:<AdminRoute><AddATest></AddATest></AdminRoute>
        },
        {
          path:'allbanners',
          element:<AdminRoute><AllBanners></AllBanners></AdminRoute>
        },
        {
          path:'alltests',
          element:<AdminRoute><AllTests></AllTests></AdminRoute>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'reservations',
          element:<AdminRoute><Reservations></Reservations></AdminRoute>
        }
      ]
    }
  ]);