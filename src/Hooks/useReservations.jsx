import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useReservations = () => {
    const {data:reservations , refetch ,isFetching:reservationsLoading} = useQuery({
        queryKey : ['reservations'],
        queryFn: async () =>{
            const res = await axios.get('http://localhost:3000/reservations');
            return res.data ;
        }
    })
    return [reservations , refetch , reservationsLoading ];
};

export default useReservations;