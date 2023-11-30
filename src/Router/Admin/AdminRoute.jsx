import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
const AdminRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return  <div className="flex justify-center mt-16"><span className="loading loading-bars loading-lg mt-28 text-center"></span></div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;