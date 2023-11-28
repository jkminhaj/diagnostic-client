import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const AddABanner = () => {
    const handleAddBanner = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value ;
        const image = form.image.value ;
        const title = form.title.value ;
        const description = form.description.value ;
        const coupon_code = form.coupon_code.value ;
        const coupon_rate = form.coupon_rate.value ;
        let isActive = false;

        // optional add toast
        const newBanner = {name , title , image , description , coupon_code , coupon_rate  ,isActive}
        console.log(newBanner)
        axios.post('http://localhost:3000/banners',newBanner)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: 'Banner Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();
            }
        })
    }
    return (
        <div className="flex-1">
            <div className=" mt-32">
                <form onSubmit={handleAddBanner} className='w-1/2 m-auto rounded-lg p-8 border '>
                    <h1 className="text-3xl text-blue-500 font-semibold text-center mb-4">Add A Banner</h1>
                    <div className="grid gap-2 md:grid-cols-2 ">
                        {/* name */}
                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="title" placeholder="Banner Title" />

                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="name" placeholder="Banner Name" />

                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="image" placeholder="Image URL" />

                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="description" placeholder="description" />

                        <input required type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="coupon_code" placeholder="coupon code" />

                        <input required type="number" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" name="coupon_rate" placeholder="coupon rate" />

                        
                    </div>

                    <button className="mt-5 w-full mb-2 border rounded-full py-3 bg-blue-400 text-white font-semibold hover:bg-blue-600">Add Banner</button>
                </form>
            </div>
        </div>
    );
};

export default AddABanner;