import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPdf from "./PDF";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import PDF from "./PDF";

const TestResults = () => {
    const { user } = useContext(AuthContext);
    const [delivered, setDelivered] = useState([]);
    useEffect(() => {
        fetch(`https://doctor-server-five.vercel.app/reservations?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(reserevation => reserevation.report_status === 'delivered')
                setDelivered(filter)
            })
    }, [])
    console.log(delivered)

    const handleCancel = id =>{
        axios.delete(`https://doctor-server-five.vercel.app/reservations/cancel/${id}`)
        .then(res=>{
            if(res.data.deletedCount){
                window.location.reload()
            }
        })
    }
    return (
        <div className="flex-1">
            {/* table */}
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Banner
                                </th>
                                <th>Test Name</th>
                                <th>Date</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                delivered.map(u => <tr key={u._id}>

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
                                        {u.testName}
                                    </td>

                                    <td>{u.date}</td>
                                    <td><button className="bg-red-400 px-2 py-1 text-white rounded" onClick={() => handleCancel(u._id)}>delete</button></td>

                                    <td>
                                    <PDFDownloadLink document={<PDF name={user.displayName} testName={u.testName} date={u.date} report_status={u.report_status} ></PDF>} fileName="DC Diagonist.pdf">
                                <button title="Download  Summery"><FontAwesomeIcon className="text-blue-500 hover:text-blue-700" icon={faFileDownload}></FontAwesomeIcon></button>
                            </PDFDownloadLink>
                                    </td>
                                </tr>)
                            }
                            {/* row 1 */}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default TestResults;