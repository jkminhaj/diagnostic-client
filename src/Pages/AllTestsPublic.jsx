import React, { useState } from 'react';
import useTests from '../Hooks/useTests'
import { Link } from 'react-router-dom';
const AllTestsPublic = () => {
    const [tests, refetch, isLoading] = useTests();
    if (!tests) {
        return (
            <>
                <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </>
        )
    }
    console.log(tests)
    return (
        <div className='w-11/12 mx-auto mt-4'>
            {/* data */}
            <div className='grid grid-cols-4 gap-5 '>
                {
                    tests.map(test => <div className="card card-compact bg-base-100 border">
                        <figure><img className='h-52' src={test.imageUrl} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{test.testName}</h2>
                            <p>{test.details}</p>
                            <p className='text-lg'>{test.date}</p>
                            <p>Remianing Slots: {test.slots}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detailtest/${test._id}`} ><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTestsPublic;