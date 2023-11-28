import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useBanners from '../Hooks/useBanners';
import Swal from 'sweetalert2';

const DetailTest = () => {
    const { imageUrl: image, testName, _id, details, price, date, slots } = useLoaderData()
    const [bookingPrice, setBookingPrice] = useState(price);
    // current banner info
    const [banners] = useBanners()
    if (!banners) {
        return <>Loading</>
    }
    const banner = banners.find(banner => banner.isActive === true);
    const { coupon_rate, coupon_code } = banner;

    const handleBook = () => {
        console.log('booked')
        if(slots<1){
            return
        }
    }
    const handleCoupon = e => {
        e.preventDefault();
        const form = e.target;
        const couponCode = form.couponCode.value;
        if (couponCode === coupon_code) {
            setBookingPrice(bookingPrice - coupon_rate);
            form.reset()
        } else {
            form.reset()
            return
        }
    }
    return (
        <div className='mt-7 w-11/12 mx-auto'>
            <div className='flex gap-12'>
                <div className='flex-1'>
                    <img src={image} alt="" />
                </div>
                <div className='flex-1'>
                    <p className='text-4xl text-blue-500 font-semibold'>{testName}</p>
                    <div className='mt-5'>
                        <p className='my-6'>{date}</p>
                        <p className='text-xl'>Details : </p>
                        <p className=' mt-2'>{details}</p>
                        <p className='mt-2'>Price : $ {price}</p>
                        <p className='mt-3 text-xl'>Available Slots : {slots}</p>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-blue-500 text-white text-xl mt-10 hover:bg-blue-900" onClick={() => document.getElementById(`${_id}`).showModal()}>Book Now</button>
                        <dialog id={_id} className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{testName}</h3>
                                <p className='py-2'>Available Slots : <span className='text-red-600'>{slots}</span></p>


                                <div className='border p-3 my-2 rounded max-w-min'>
                                    <form onSubmit={handleCoupon}>
                                        <p className='text-2xl mb-1'>Use Coupon Code</p>
                                        <div className='justify-center items-center flex'>
                                            <input name='couponCode' type="text" className='outline-none border mt-1 ' placeholder=' coupon code' />
                                            <button className='rounded-r-full bg-blue-500 text-white pr-2 py-0 mt-1 px-1'>Use</button>
                                        </div>
                                    </form>
                                    <p className='text-gray-300 mt-2'>Coupon Code : {coupon_code} </p>
                                    <p className='text-gray-300 '>Get ${coupon_rate} off</p>
                                </div>
                                <p className='text-3xl mb-1 font-semibold'>Price : $ {bookingPrice}</p>
                                <div className="modal-action">
                                    <form method="dialog">

                                        {/* if there is a button in form, it will close the modal */}
                                        <button onClick={handleBook} className="btn">Book</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTest;