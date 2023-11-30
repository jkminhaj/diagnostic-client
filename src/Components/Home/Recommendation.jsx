import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Recommendation = () => {
    const [recc, setRecc] = useState([]);
    useEffect(() => {
        axios.get('https://doctor-server-five.vercel.app/recommendations')
            .then(res => setRecc(res.data));
    }, [])
    return (
        <div className="my-9">
            <p className="my-5 text-center text-3xl text-blue-400">Recommendation</p>
            {/* slider */}
            <div className="carousel w-full">
                {
                    recc.map(recc =>
                        <div id={recc._id}  style={{ backgroundImage: `url(${recc.imageUrl})` ,backgroundSize: 'cover', backgroundPosition: 'center'}} className="relative carousel-item h-96 w-full">
                            {/* <img  src={recc.imageUrl} className="w-full" /> */}
                            <div class="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white md:px-16">
                                <p className="text-6xl font-bold mb-4 text-blue-300">{recc.title}</p>
                                <p className="text-xl">{recc.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {/* <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a> */}
                {
                    recc.map((recc,index)=>
                        <a href={`#${recc._id}`} className="btn btn-xs">{index+1}</a>
                    )
                }
            </div>
        </div>
    );
};

export default Recommendation;