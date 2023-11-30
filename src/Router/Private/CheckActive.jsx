import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import useStatus from "../../Hooks/useStatus";

const CheckActive = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBlocked, isBlockedLoading] = useStatus();
    if (loading || isBlockedLoading) {
        return <div className="flex justify-center mt-16"><span className="loading loading-bars loading-lg mt-28 text-center"></span></div>
    }

    if (user && !isBlocked) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default CheckActive;
