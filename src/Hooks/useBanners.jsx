import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useBanners = () => {
    const {user , loading} = useContext(AuthContext);
    const {data:banners , refetch } = useQuery({
        queryKey : ['banners'],
        queryFn: async () =>{
            const res = await axios.get('https://doctor-server-five.vercel.app/banners');
            return res.data ;
        }
    })
    return [banners , refetch ]
};

export default useBanners;