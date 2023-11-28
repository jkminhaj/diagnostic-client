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
          path:'/alltestspublic',
          element:<AllTestsPublic></AllTestsPublic>
        },
        // detailed test will be private
        {
          path:`/detailtest/:id`,
          element:<DetailTest></DetailTest>,
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
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard',
          element:<div><p>hi</p></div>
        },
        // user dashboard routes
        {
          path:'myprofile',
          element:<MyProfile></MyProfile>
        },
        {
          path:'testresults',
          element:<TestResults></TestResults>
        },
        {
          path:'upcomingappointments',
          element:<UpcomingAppointments></UpcomingAppointments>
        },
        // // admin dashboard routes
        {
          path:'addabanner',
          element:<AddABanner></AddABanner>
        },
        {
          path:'addatest',
          element:<AddATest></AddATest>
        },
        {
          path:'allbanners',
          element:<AllBanners></AllBanners>
        },
        {
          path:'alltests',
          element:<AllTests></AllTests>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'reservations',
          element:<Reservations></Reservations>
        }
      ]
    }
  ]);