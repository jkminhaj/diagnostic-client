import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const CheckActive = ({ children }) => {
    const [active, setActive] = useState(false);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        useEffect(() => {
            const fetchUserData = async () => {
                if (user) {
                    try {
                        const response = await axios.get(`http://localhost:3000/users?email=${user.email}`);
                        setActive(response.data.length > 0 && response.data[0].status !== 'blocked');
                    } catch (error) {
                        console.error('Error fetching user data:', error);
                        setActive(false);
                    }
                }
            };
        
            fetchUserData();
        }, [user]);
        
    }, [user]);

    if (loading) {
        return <div className="flex justify-center mt-16"><span className="loading loading-bars loading-lg mt-28 text-center"></span></div>
    }

    if (active) {
        return children;
    } else {
        return <Navigate to='/'></Navigate>;
    }
};

export default CheckActive;
