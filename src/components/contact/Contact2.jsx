import React from 'react';

function Contact2() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
                    <div className="md:mb-0 mb-4">
                        <h2 className="text-[#800000] font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">Get In Touch</h2>
                        <p className="text-gray-700 text-lg font-normal leading-7 mb-7 md:text-left text-center">Whether you have a question, feedback, or just want to say hi, we're here to connect with you and assist in any way we can.</p>
                        <div className="flex md:items-center md:justify-start justify-center">
                            {/* <button className="w-36 h-12 rounded-full bg-[#800000] transition-all duration-700 hover:bg-[#600000] shadow text-white text-center text-base font-semibold leading-6">Contact Us</button> */}
                        </div>
                    </div>
                    <div className="border-l-2 lg:flex lg:items-center gap-12 md:border-[#800000] border-white px-10 py-6">
                        <div className="mb-8 lg:mb-0">
                            <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Email Address</h6>
                            <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">mec.2025@gmail.com</h3>
                        </div>
                        <div>
                            <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Phone Number</h6>
                            <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">9866656566</h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    <div className="h-96 rounded-3xl relative flex justify-center">
                        <div className="w-full h-full absolute bg-gradient-to-tr rounded-3xl from-black via-black/5 to-transparent"></div>
                        <img src="https://ik.imagekit.io/vituepzjm/MEC/chennai?updatedAt=1740241476589" alt="Chennai image" className="w-full h-full rounded-3xl object-cover object-right" />
                        <div className="absolute rounded-3xl left-0 bottom-0 mb-6 text-left px-6">
                            <h5 className="text-white text-3xl font-semibold leading-7 mb-2">Chennai</h5>
                            <p className="text-white text-xl font-medium leading-6 ms-1">Tamilnadu, India</p>
                        </div>
                    </div>
                    {/* <div className="h-96 relative flex justify-center">
                        <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                        <img src="https://pagedone.io/asset/uploads/1696246522.png" alt="Germany image" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 mb-6 text-center px-6">
                            <h5 className="text-white text-lg font-semibold leading-7 mb-2">Germany</h5>
                            <p className="text-white text-base font-medium leading-6">101 Unter den Linden, Mitte <br />District, Berlin</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Contact2;