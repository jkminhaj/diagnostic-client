import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBanners from "../../../Hooks/useBanners";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";

const AllBanners = () => {
    const [banners ,refetch] = useBanners();
    // const banners = []
    console.log('banners ' , banners)
    if (!banners) {
        // You can return a loading indicator or handle the loading state as needed
        return <p>Loading...</p>;
    }
    const handleDelete = id =>{
        axios.delete(`http://localhost:3000/banners/${id}`)
        .then(res=>{
            if(res.data){
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: 'Banner Deleted Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            }

        })
    };
    const handleTurnOnBanner = id =>{
        axios.patch(`http://localhost:3000/banners/select/${id}`)
        .then(res=>{
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Banner Updated Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            refetch()
        })
    }
 
    return (
        <div className="flex-1 ml-2">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Banner
                            </th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Cupon Code </th>
                            <th>Cupon Rate</th>
                            <th>Set Banner</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            banners.map(u => <tr key={u._id}>

                                <td>
                                    <div className="flex items-center">
                                        <div className="avatar">
                                            <div className="w-20 h-10">
                                                <img src={u.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {u.name}
                                </td>
                                <td className="text-blue-500">
                                    {u.title}
                                </td>
                                <td>{u.description}</td>
                                <td>{u.coupon_code}</td>
                                <td>$ {u.coupon_rate}</td>
                                <td  onClick={()=>{handleTurnOnBanner(u._id)}}><p  className='text-blue-500 hover:text-green-600 cursor-pointer'>{u.isActive?'Selected':'Select'}</p></td>
                                <td>
                                    <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" onClick={()=>{handleDelete(u._id)}} icon={faDeleteLeft}></FontAwesomeIcon>
                                </td>
                                
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllBanners;