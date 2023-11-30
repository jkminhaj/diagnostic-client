import { Link } from "react-router-dom";
import useTests from "../../Hooks/useTests";
import useReservations from "../../Hooks/useReservations";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const FeaturedTest = () => {
    const { user } = useContext(AuthContext);
    const [tests, isLoading] = useTests();
    const [myTestIds, setMyTestIds] = useState([]);

    const promotions = [
        {
            "title": "Winter Wellness Special",
            "description": "Stay healthy this winter with our special wellness package.",
            "couponCode": "WINTERWELL",
            "discountRate": 10,
            "image": "https://img.freepik.com/free-vector/winter-sale-background-special-offer-banner-background_8829-2569.jpg?w=996&t=st=1701281491~exp=1701282091~hmac=0e2fab627fb797b569015e05b0607d7d49b59e3758f88056df94e626027628f0"
        },
        {
            "title": "New User Discount",
            "description": "First-time users get an exclusive discount on their first test.",
            "couponCode": "NEWUSER15",
            "discountRate": 15,
            "image": "https://img.freepik.com/premium-photo/handsome-man-with-black-copy-space-discount-sign-isolated-blue_97712-4068.jpg?w=900"
        },
        {
            "title": "Family Health Bundle",
            "description": "Discounted rates for families booking multiple tests together.",
            "couponCode": "FAMILYBUNDLE",
            "discountRate": 20,
            "image": "https://img.freepik.com/free-photo/top-view-world-heart-day-concept-with-stethoscope_23-2148630985.jpg?w=900&t=st=1701281610~exp=1701282210~hmac=e4abee9fc7ba184728c42f2d5dbd8acdd67acc3827252b20f7c054df9e2eb39d"
        },
        {
            "title": "Spring Wellness Promo",
            "description": "Celebrate spring with our exclusive wellness promotion.",
            "couponCode": "SPRINGWELL",
            "discountRate": 12,
            "image": "https://img.freepik.com/free-psd/spring-concept-special-sale-social-media-banner-template_47987-15104.jpg?w=1060&t=st=1701281657~exp=1701282257~hmac=e62c28e1d974ea90f4ec9fcebcede545881e06b1a5eeb178902b54aeffa2613f"
        }
    ]


    useEffect(() => {
        fetch(`http://localhost:3000/reservations?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                const ids = data.map(test => test.testId);
                setMyTestIds(ids);

            });
    }, [user]);
    if (!tests) {
        return <p>Loading</p>
    }
    const myTests = tests.filter(test => myTestIds.includes(test._id)).slice(0, 4) || null;
    return (
        <div className="md:mx-5">
            <p className="text-4xl text-center my-9 text-blue-400">Featured test</p>

            {/* data */}
            <div className='grid grid-cols-4 gap-5 '>
                {/* if my test availabe */}
                {
                    myTests &&
                    <>
                        {
                            myTests.map(test => <div className="card card-compact bg-base-100 border">
                                <figure><img className='h-52 w-full' src={test.imageUrl} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{test.testName}</h2>
                                    <p>{test.details}</p>
                                    <p className='text-lg'>{test.date}</p>
                                    <p>Remianing Slots: {test.slots}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/detailtest/${test._id}`} ><button className="btn  bg-blue-400 text-white">Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </>
                }


                {
                    promotions.map(p => <div className="card card-compact bg-base-100 border">
                        <figure><img className='h-52 w-full' src={p.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{p.title}</h2>
                            <p>{p.description}</p>
                            <p>Coupon Code :  {p.couponCode}</p>
                            <p className='text-lg'>Discount Rate : $ {p.discountRate}</p>
                            <div className="card-actions justify-end">
                                <Link ><button className="btn  bg-blue-400 text-white">Ads</button></Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default FeaturedTest;