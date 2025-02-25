import React, { useState } from 'react';

function ForeignStudents() {
    const [activeStep, setActiveStep] = useState(1);

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    return (
        <section className="text-gray-900 body-font bg-white">
            <div className=" py-12 ">
                <div className="flex flex-col text-center px-5 w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#800000]">Guide for Foreign Students</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Study from anywhere in the world with our comprehensive guidance and support. We help you navigate the process of studying in India with ease.
                    </p>
                </div>
                <div className="flex flex-wrap mb-12 md:px-12 px-5">
                    <div className="mb-10 lg:w-1/2 md:w-full px-8 py-4 border-l-2 border-[#800000] border-opacity-60">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-[#800000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z" />
                            </svg>
                            <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font">Academic Counselling</h2>
                        </div>
                        <p className="leading-relaxed text-base">
                            We provide academic counselling based on your current education level and aspirations.
                        </p>
                    </div>
                    <div className="mb-10 lg:w-1/2 md:w-full px-8 py-4 border-l-2 border-[#800000] border-opacity-60">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-[#800000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z" />
                            </svg>
                            <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font">Course Selection Guidance</h2>
                        </div>
                        <p className="leading-relaxed text-base">
                            We present a variety of course options and guide you to select the best one for your goals.
                        </p>
                    </div>
                    <div className="mb-10 lg:w-1/2 md:w-full px-8 py-4 border-l-2 border-[#800000] border-opacity-60">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-[#800000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z" />
                            </svg>
                            <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font">College Admissions Support</h2>
                        </div>
                        <p className="leading-relaxed text-base">
                            We offer full end-to-end guidance for college admissions, from choosing the university to graduation.
                        </p>
                    </div>
                    <div className="mb-10 lg:w-1/2 md:w-full px-8 py-4 border-l-2 border-[#800000] border-opacity-60">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-[#800000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z" />
                            </svg>
                            <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font">Visa and Travel Support</h2>
                        </div>
                        <p className="leading-relaxed text-base">
                            We provide support for Indian Visa, travel to India, food and accommodation, and visit to colleges for admission processes.
                        </p>
                    </div>
                    <div className="mb-10 lg:w-1/2 md:w-full px-8 py-4 border-l-2 border-[#800000] border-opacity-60">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-[#800000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z" />
                            </svg>
                            <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font">Special Course Guidance</h2>
                        </div>
                        <p className="leading-relaxed text-base">
                            We guide you to special courses that do not require you to visit and stay at the college location.
                        </p>
                    </div>
                    <div className="mb-10 lg:w-1/2 md:w-full px-8 py-4 border-l-2 border-[#800000] border-opacity-60">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-[#800000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z" />
                            </svg>
                            <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font">Online Course Guidance</h2>
                        </div>
                        <p className="leading-relaxed text-base">
                            We provide guidance for online courses that help you enrich your knowledge and gain certification.
                        </p>
                    </div>
                </div>
                <div className="px-6 bg-[#800000]/5 md:px-12 py-12">
                    <h2 className="text-[#800000] text-center capitalize text-3xl font-semibold leading-normal lg:text-start mb-6 md:mb-10">
                        College Admission Flow
                    </h2>
                    <ol className="items-center lg:flex">
                        <li className="relative mb-10 lg:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-10 h-10 md:w-8 md:h-8 bg-[#800000]/10 rounded-full ring-0 ring-white shrink-0">
                                    <svg
                                        className="md:w-3 md:h-3 w-4 h-4 text-[#800000]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden lg:flex w-full bg-[#800000]/10 h-0.5"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-[#800000]">
                                    Step 1: Choose the university
                                </h3>
                                <p className="text-base font-normal break-words text-gray-900">
                                    Select the university that best fits your academic and career goals.
                                </p>
                            </div>
                        </li>
                        <li className="relative mb-6 lg:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-10 h-10 md:w-8 md:h-8 bg-[#800000]/10 rounded-full ring-0 ring-white shrink-0">
                                    <svg
                                        className="md:w-3 md:h-3 w-4 h-4 text-[#800000]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden lg:flex w-full bg-[#800000]/10 h-0.5"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-[#800000]">Step 2: Submit application</h3>
                                <p className="text-base font-normal text-gray-900">
                                    Complete and submit your application to the university.
                                </p>
                            </div>
                        </li>
                        <li className="relative mb-6 lg:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-10 h-10 md:w-8 md:h-8 bg-[#800000]/10 rounded-full ring-0 ring-white shrink-0">
                                    <svg
                                        className="md:w-3 md:h-3 w-4 h-4 text-[#800000]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden lg:flex w-full bg-[#800000]/10 h-0.5"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-[#800000]">
                                    Step 3: University interview
                                </h3>
                                <p className=" md:text-base font-normal text-gray-900">
                                    Attend the university interview and entrance exam if required.
                                </p>
                            </div>
                        </li>
                        <li className="relative mb-6 lg:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-10 h-10 md:w-8 md:h-8 bg-[#800000]/10 rounded-full ring-0 ring-white shrink-0">
                                    <svg
                                        className="md:w-3 md:h-3 w-4 h-4 text-[#800000]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden lg:flex w-full bg-[#800000]/10 h-0.5"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-[#800000]">
                                    Step 4: College enrolment
                                </h3>
                                <p className=" md:text-base font-normal text-gray-900">
                                    Complete the enrolment process and start your education journey.
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default ForeignStudents;