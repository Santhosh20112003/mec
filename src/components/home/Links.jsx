import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
    return (
        <section class="text-gray-300 bg-[#800000]">
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col text-center items-center justify-center w-full">
                    <h1 className="px-8 py-3 mb-5 bg-white rounded-full text-sm font-bold text-[#800000]">Feel Free to Consultation</h1>
                    <h1 class="sm:text-4xl text-2xl lg:font-semibold font-bold title-font mb-4 text-white break-words">Need Assistance? Feel Free to Contact Us!</h1>
                    <p class="lg:w-2/3 mx-auto text-white leading-relaxed lg:text-xl">Our team is here to help you with any questions or concerns. Reach out to us for a consultation and we'll get back to you as soon as possible.</p>
                    <Link to='/contact' class="flex mt-10 justify-center items-center bg-white ps-5 pe-3 py-3 rounded-md gap-5">
                        <span class="text-[#800000] font-semibold">Contact Us</span>
                        <i className="fas fa-arrow-right bg-[#800000] text-white p-2 rounded-md"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Links