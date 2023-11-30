import React, { useEffect, useState } from 'react';
import useTests from '../Hooks/useTests'
import { Link } from 'react-router-dom';
const AllTestsPublic = () => {
    // const [tests, refetch, isLoading] = useTests();
    // if (!tests) {
    //     return (
    //         <>
    //             <div className="flex flex-col gap-4 w-52">
    //                 <div className="skeleton h-32 w-full"></div>
    //                 <div className="skeleton h-4 w-28"></div>
    //                 <div className="skeleton h-4 w-full"></div>
    //                 <div className="skeleton h-4 w-full"></div>
    //             </div>
    //         </>
    //     )
    // }

    // paginaions part start

    const [tests, setTests] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [count, setCount] = useState(0)


    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch('https://doctor-server-five.vercel.app/TestsCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])

    useEffect(() => {
        // https://doctor-server-five.vercel.app/testsPagination?page=2&&size=3
        fetch(`https://doctor-server-five.vercel.app/testsPagination?page=${currentPage}&&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setTests(data))
    }, [currentPage, itemsPerPage]);



    // actions
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }
    // paginations part end

    return (
        <div className='w-11/12 mx-auto mt-4'>
            {/* data */}
            <div className='grid grid-cols-4 gap-5 '>
                {
                    tests.map(test => <div className="card card-compact bg-base-100 border">
                        <figure><img className='h-52 w-full' src={test.imageUrl} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{test.testName}</h2>
                            <p>{test.details}</p>
                            <p className='text-lg'>{test.date}</p>
                            <p>Remianing Slots: {test.slots}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detailtest/${test._id}`} ><button className="btn bg-blue-400 text-white">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='pagination flex items-center justify-center space-x-4 mt-16'>
                {/* <p className="text-gray-600">Current page: {currentPage}</p> */}
                <button
                    className="px-4 py-2 bg-blue-400 text-white rounded focus:outline-none hover:bg-blue-600"
                    onClick={handlePrevPage}
                >
                    Prev
                </button>
                {pages.map(page => (
                    <button
                        className={`px-4 py-2 focus:outline-none rounded ${currentPage === page ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >
                        {page+1}
                    </button>
                ))}
                <button
                    className="px-4 py-2 bg-blue-400 text-white rounded focus:outline-none hover:bg-blue-600"
                    onClick={handleNextPage}
                >
                    Next
                </button>
                <select
                    value={itemsPerPage}
                    onChange={handleItemsPerPage}
                    className="px-2 py-1 border border-gray-300 rounded focus:outline-none"
                >
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="50">50</option>
                </select>
            </div>

        </div>
    );
};

export default AllTestsPublic;