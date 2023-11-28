import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useTests = () => {
    const {data:tests , refetch ,isLoading } = useQuery({
        queryKey : ['tests'],
        queryFn: async () =>{
            const res = await axios.get('http://localhost:3000/tests');
            return res.data ;
        }
    })
    return [tests , refetch , isLoading ];
};

export default useTests;