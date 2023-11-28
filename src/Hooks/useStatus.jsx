import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";




const useStatus = () => {
    const { user, loading } = useContext(AuthContext);
    const { data: isBlocked, isPending: isBlockedLoading } = useQuery({
        queryKey: [user?.email, 'isBlocked'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking if user is blockd or not', user)
            const res = await axios.get(`http://localhost:3000/users/block/${user.email}`);
            // console.log(res.data);
            return res.data?.blocked;
        }
    })
    return [isBlocked, isBlockedLoading]
};

export default useStatus;