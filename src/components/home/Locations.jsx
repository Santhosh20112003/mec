import React from 'react';

function Locations() {
    return (
        <div className="py-12 px-5 lg:px-12 bg-[#800000]/5">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-[#800000] mb-4">Explore and Study at Prestigious Indian Universities</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">Discover the excellence and diversity of Indian universities. Each image captures the essence of our vibrant academic communities and the superiority of Indian engineers.</p>
            </div>
            <section className="bg-white rounded-md mb-6">
                <div className="py-6 lg:py-12 px-5 lg:px-12">
                    <div className="lg:flex justify-between gap-6 lg:items-center">
                        <div className="grid w-full grid-cols-1 gap-6 lg:w-[70%] md:grid-cols-2">
                            <div className="space-y-3">
                                <span className="inline-block p-3 text-[#800000] bg-[#800000]/10 rounded-xl">
                                    {/* <svg stroke="currentColor" className='size-6' fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg> */}
                                    <svg stroke="currentColor" className='size-6' fill="currentColor" stroke-width="0" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize">World-Class Education</h1>

                                <p className="text-gray-500">
                                    Indian universities offer world-class education with a focus on innovation and research. Our engineers are known for their problem-solving skills and technical expertise.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <span className="inline-block p-3 text-[#800000] bg-[#800000]/10 rounded-xl">
                                    {/* <svg stroke="currentColor" className='size-6' fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M14.942 12.57l-4.942-8.235v-3.335h0.5c0.275 0 0.5-0.225 0.5-0.5s-0.225-0.5-0.5-0.5h-5c-0.275 0-0.5 0.225-0.5 0.5s0.225 0.5 0.5 0.5h0.5v3.335l-4.942 8.235c-1.132 1.886-0.258 3.43 1.942 3.43h10c2.2 0 3.074-1.543 1.942-3.43zM3.766 10l3.234-5.39v-3.61h2v3.61l3.234 5.39h-8.468z"></path></svg> */}
                                    {/* <svg stroke="currentColor" className='size-6' fill="none" stroke-width="0" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" fill="currentColor"></path></svg> */}
                                    <svg stroke="currentColor" className='size-6' fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg>
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize">Innovative Research</h1>

                                <p className="text-gray-500">
                                    Indian universities are at the forefront of innovative research, contributing to advancements in technology, medicine, and engineering. Join us to be a part of this exciting journey.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="hidden lg:flex  lg:justify-center">
                            <img className="w-[24rem] h-[18rem] shadow-md hover:brightness-100 brightness-90 transition-all flex-shrink-0 object-cover rounded-4xl" src="https://media.istockphoto.com/id/512185437/photo/indias-flag-close-up.jpg?s=612x612&w=0&k=20&c=ndMmdJY9qsL4f_dJBSDbPjD213GD5s_YcZAJK8z2uTQ=" alt="Indian University" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white rounded-md">
                <div className="py-6 lg:py-12 px-5 lg:px-12">
                    <div className="lg:flex justify-between gap-10 lg:items-center">
                        <div data-aos="fade-up" className="hidden lg:flex  lg:justify-start">
                            <img className="w-[24rem] h-[18rem]  shadow-md hover:brightness-100 brightness-90 transition-all flex-shrink-0 object-cover rounded-4xl" src="https://media.licdn.com/dms/image/v2/C4D1BAQH0_UeKoteJyA/company-background_10000/company-background_10000/0/1583221367975?e=2147483647&v=beta&t=KQigaftmL6HB9UnpqDg84muDKht9JV3XEw9vHodQiv8" alt="Indian University" />
                        </div>
                        <div className="grid w-full grid-cols-1 gap-6 lg:w-[70%] md:grid-cols-2">
                            <div className="space-y-3">
                                <span className="inline-block p-3 text-[#800000] bg-[#800000]/10 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize">Global Recognition</h1>

                                <p className="text-gray-500">
                                    Degrees from Indian universities are globally recognized, opening doors to opportunities worldwide. Our alumni are leaders in their fields, making significant contributions globally.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <span className="inline-block p-3 text-[#800000] bg-[#800000]/10 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize">Cutting-Edge Facilities</h1>

                                <p className="text-gray-500">
                                    Indian universities are equipped with cutting-edge facilities and state-of-the-art laboratories, providing students with the best environment to learn and innovate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Locations;