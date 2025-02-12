import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="px-5 py-8 bg-[#800000]/5 mx-auto">
                <div className="flex flex-wrap md:text-left text-center">
                    <div className="lg:w-1/5  w-full px-4">
                        <h2 className="title-font text-[#800000] tracking-widest text-sm font-bold mb-3">
                            LINKS
                        </h2>
                        <nav className="list-none mb-5">
                            <li>
                                <Link to="/home" className="text-[#800000]/80 hover:text-[#800000]">Home</Link>
                            </li>
                            <li>
                                <Link to="/list-of-degrees" className="text-[#800000]/80 hover:text-[#800000]">List of Degrees</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5  w-full px-4">
                        <h2 className="title-font font-bold text-[#800000] tracking-widest text-sm mb-3">
                            LINKS
                        </h2>
                        <nav className="list-none mb-5 ">
                            <li>
                                <Link to="/students" className="text-[#800000]/80 lg:hover:text-[#800000]">Students</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-[#800000]/80 hover:text-[#800000]">Contact</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-3/5  w-full px-4">
                        <h2 className="title-font font-bold  text-[#800000] tracking-widest text-sm mb-3">
                            SUBSCRIBE
                        </h2>
                        <form
                            action="https://formsubmit.co/santhoshtechnologies22@gmail.com"
                            method="POST"
                            className="flex flex-col md:flex-row gap-3 justify-center items-center lg:items-end"
                        >
                            <input
                                type="text"
                                id="footer-field"
                                name="footer-field"
                                required
                                autoComplete={"email"}
                                placeholder="Your Email"
                                className="w-full bg-[#800000]/5 bg-opacity-50 rounded border border-[#800000] focus:bg-transparent focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000]/80 text-base outline-none text-gray-700 placeholder:text-[#800000] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            <button className="w-full sm:w-auto text-white bg-[#800000] border-0 py-2 px-4 lg:px-6 focus:outline-none hover:bg-[#800000]/80 cursor-pointer rounded">
                                Send&nbsp;Message
                            </button>
                        </form>
                        <p className="text-[#800000]/80  text-sm mt-2  font-medium ">
                            * All details are required for communication.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="px-5 py-6 mx-auto flex flex-col items-center sm:flex-row">
                    <span onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} className="flex title-font cursor-pointer font-medium items-center justify-center text-[#800000]">
                        <img src="https://ik.imagekit.io/vituepzjm/MEC/MEC.png?updatedAt=1739385234767" alt="" className="w-fit h-12" />
                    </span>
                    <p className="text-sm text-[#800000] mt-4 sm:ml-6 sm:mt-0 font-medium ">
                        © 2024 Mayilon Educational Consultancy —
                        <Link
                            to='https://santechh.vercel.app'
                            rel="noopener noreferrer"
                            className="text-[#800000]/70 font-bold ml-1"
                            target="_blank"
                        >
                            @SanTech
                        </Link>
                    </p>

                </div>
            </div>
        </footer>
    )
}

export default Footer