import React from 'react'

function Service() {
    return (
        <section class="text-gray-600 body-font">
            <div class=" lg:px-12 px-5 lg:py-12 py-24 mx-auto">
                <div class="flex flex-col">
                    <div class="h-1 bg-gray-200 rounded overflow-hidden">
                        <div class="w-24 h-full bg-[#800000]/80"></div>
                    </div>
                    <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 class="sm:w-2/5 text-[#800000] font-medium title-font text-2xl mb-2 sm:mb-0">Explore Our Diverse Streams</h1>
                        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Dive into our comprehensive programs designed to cater to various fields of interest. Whether you're into engineering, arts, or pursuing a PhD, we have something for everyone.</p>
                    </div>
                </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div data-aos="fade-up" class="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div class="rounded-lg h-52 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src="https://cdn.mos.cms.futurecdn.net/HFUAjfbamNhbM8dsNSQW3D-970-80.jpg.webp" />
                        </div>
                        <h2 class="text-xl font-medium title-font text-[#800000] mt-5">Engineering Stream</h2>
                        <p class="text-base leading-relaxed mt-2">Join our Engineering stream to innovate and create solutions for real-world problems. Our curriculum is designed to provide hands-on experience and industry exposure.</p>
                        <a class="text-[#800000] inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" class="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src="https://images.squarespace-cdn.com/content/v1/61cc66f9e8f1cb7928c32c66/ec53e184-bc09-4bcb-b27d-4953ad6771a5/ARTS-SCIENCES.jpg" />
                        </div>
                        <h2 class="text-xl font-medium title-font text-[#800000] mt-5">Arts and Science Stream</h2>
                        <p class="text-base leading-relaxed mt-2">Our Arts and Science stream offers a blend of creativity and analytical thinking. Explore various disciplines and develop a well-rounded skill set.</p>
                        <a class="text-[#800000] inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" class="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div class="rounded-lg h-52 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src="https://images.moneycontrol.com/static-mcnews/2018/06/WHAT-A-PhD-IS-AND-WHAT-IT-IS-NOT-770x433.jpg" />
                        </div>
                        <h2 class="text-xl font-medium title-font text-[#800000] mt-5">PhD Stream</h2>
                        <p class="text-base leading-relaxed mt-2">Pursue your passion for research with our PhD stream. Work with experienced mentors and contribute to groundbreaking discoveries in your field of study.</p>
                        <a class="text-[#800000] inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service