import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="text-gray-900 body-font">
            <div className="px-5 py-8 bg-[#800000]/5 mx-auto">
                <div className="flex flex-wrap md:text-left mx-auto max-w-7xl text-center">
                    <div className="lg:w-1/5  w-full px-4">
                        <h2 className="title-font text-[#800000] tracking-widest text-sm font-bold mb-3">
                            LINKS
                        </h2>
                        <nav className="list-none mb-5">
                            <li>
                                <Link onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} to="/home" className="text-[#800000]/80 hover:text-[#800000]">Home</Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} to="/list-of-degrees" className="text-[#800000]/80 hover:text-[#800000]">List of Degrees</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5  w-full px-4">
                        <h2 className="title-font font-bold text-[#800000] tracking-widest text-sm mb-3">
                            LINKS
                        </h2>
                        <nav className="list-none mb-5 ">
                            <li>
                                <Link onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} to="/students" className="text-[#800000]/80 lg:hover:text-[#800000]">Students</Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} to="/contact" className="text-[#800000]/80 hover:text-[#800000]">Contact</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-3/5  w-full px-4">
                        <h2 className="title-font font-bold  text-[#800000] tracking-widest text-sm mb-3">
                            SUBSCRIBE
                        </h2>
                        <form
                            action="https://formsubmit.co/30f486bf619cbff7a82c8cb2155ed865 "
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
                                className="w-full bg-[#800000]/5 bg-opacity-50 rounded border border-[#800000] focus:bg-transparent focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000]/80 text-base outline-none text-gray-900 placeholder:text-[#800000] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
            <footer class="text-gray-900 mx-auto max-w-7xl bg-white">
                <div class="p-5 flex items-center sm:flex-row flex-col">
                    <span onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} className="flex title-font cursor-pointer font-medium items-center justify-center text-[#800000]">
                        <img src="https://ik.imagekit.io/vituepzjm/MEC/MEC.png?updatedAt=1739385234767" alt="" className="w-fit h-12" />
                    </span>
                    <p class="text-sm text-[#800000] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> © 2024 Mayilon Educational Consultant —
                        <a href="https://santechh.online" class="font-medium ml-1" rel="noopener noreferrer" target="_blank">@SanTech</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link target='_blank' to="" class="text-[#800000]">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link target='_blank' to="https://x.com/MayilonC23520" class="ml-3 text-[#800000]">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </Link>
                        <Link target='_blank' to="https://www.instagram.com/mayiloneducationalconsultant/" class="ml-3 text-[#800000]">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link target='_blank' to="" class="ml-3 text-[#800000] -mt-[1px]">
                            <i className="fa-brands text-xl fa-linkedin"></i>
                        </Link>
                    </span>
                </div>
            </footer>
        </footer>
    )
}

export default Footer