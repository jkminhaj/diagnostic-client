import React from 'react';

const OurTeam = () => {
    return (
        <div>

            {/* start */}
            <div>
                <div className="w-11/12 mx-auto mb-16 mt-12">
                    <p className="text-5xl text-center font-semibold">Meet Our Medical Team</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6 mt-16">
                        {/* Doctor 1 */}
                        <div className="card bg-base-100 border shadow-sm">
                            <figure className="px-10 pt-10">
                                <img src="https://www.ccny.cuny.edu/sites/default/files/2023-06/jacek_headshot_2023_square.jpg" alt="Doctor" className="rounded-full w-52 h-52 border-gray-900 border" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Dr. John Smith</h2>
                                <p>Dr. John is our experienced medical professional specializing in internal medicine. With a wealth of knowledge and a commitment to patient care, he ensures the well-being of our patients with precision and expertise.</p>
                                <div className="card-actions">
                                    <button className="bg-slate-700 text-white px-3 mt-3 py-1 rounded-xl">Internal Medicine Specialist</button>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 2 */}
                        <div className="card bg-base-100 border shadow-sm">
                            <figure className="px-10 pt-10">
                                <img src="https://www.gsma.com/esim/wp-content/uploads/2022/12/Mikkel-Escartin-Square-picture-e1671529840776.jpg" alt="Doctor" className=" w-52 h-52 border-gray-900 border rounded-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Dr. Michael Johnson</h2>
                                <p>Dr. Michael is our dedicated surgeon with a passion for transformative surgeries. His commitment to patient well-being and innovative surgical techniques make him a valued member of our medical team.</p>
                                <div className="card-actions">
                                    <button className="bg-slate-700 text-white px-3 mt-3 py-1 rounded-xl">Surgeon</button>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 3 */}
                        <div className="card bg-base-100 border shadow-sm">
                            <figure className="px-10 pt-10">
                                <img src="https://foxswibel.com/wp-content/uploads/2023/03/SWK-headshot-square-white-500px.png" alt="Doctor" className="rounded-full w-52 h-52 border-gray-900 border" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Dr. Robert White</h2>
                                <p>Dr. Robert is our esteemed diagnostic expert, specializing in interpreting complex medical tests. His proficiency in analyzing results ensures accurate diagnoses and effective treatment plans for our patients.</p>
                                <div className="card-actions">
                                    <button className="bg-slate-700 text-white px-3 mt-3 py-1 rounded-xl">Diagnostic Specialist</button>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 4 */}
                        <div className="card bg-base-100 border shadow-sm">
                            <figure className="px-10 pt-10">
                                <img src="https://orthosports.net/wp-content/uploads/2023/05/Eric-Giang-Full-Headshot-Square.jpg" alt="Doctor" className="rounded-full w-52 h-52 border-gray-900 border" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Dr. William Davis</h2>
                                <p>Dr. William is our compassionate family medicine specialist. His dedication to building strong doctor-patient relationships and providing comprehensive care makes him an integral part of our medical community.</p>
                                <div className="card-actions">
                                    <button className="bg-slate-700 text-white px-3 mt-3 py-1 rounded-xl">Family Medicine Specialist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end */}

        </div>
    );
};

export default OurTeam;