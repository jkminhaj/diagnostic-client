import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useReservations = () => {
    const {data:reservations , refetch ,isFetching:reservationsLoading} = useQuery({
        queryKey : ['reservations'],
        queryFn: async () =>{
            const res = await axios.get('https://doctor-server-five.vercel.app/reservations');
            return res.data ;
        }
    })
    return [reservations , refetch , reservationsLoading ];
};

export default useReservations;