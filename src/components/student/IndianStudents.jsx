import React from 'react';

function IndianStudents() {
    return (
        <section className="text-gray-900 mx-auto max-w-7xl body-font py-6">
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-6 text-[#800000]">Guide for Indian Students</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
                        New students out of school or bachelor's degree graduates can opt for our admission counselling in various universities and right courses to pursue. Our team will guide you as per your aspirations and help you achieve your dreams.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 -mx-4 -mb-10">
                    {/* College Admissions Card */}
                    <div className="w-full px-4 mb-10">
                        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-[#800000]">
                            <div className="inline-flex items-center justify-center rounded-full bg-[#800000]/10 p-3 mb-5">
                                <svg className="w-7 h-7 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-[#800000] mb-3">College Admissions Support</h2>
                            <p className="leading-relaxed text-base">
                                We offer full support for college admissions and guaranteed enrolment in courses of your choice.
                            </p>
                        </div>
                    </div>
                    
                    {/* Certification Courses Card */}
                    <div className="w-full px-4 mb-10">
                        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-[#800000]">
                            <div className="inline-flex items-center justify-center rounded-full bg-[#800000]/10 p-3 mb-5">
                                <svg className="w-7 h-7 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-[#800000] mb-3">Certification Courses Guidance</h2>
                            <p className="leading-relaxed text-base">
                                We provide full guidance for additional certification courses parallel to your academic courses.
                            </p>
                        </div>
                    </div>
                    
                    {/* Internship Card */}
                    <div className="w-full px-4 mb-10">
                        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-[#800000]">
                            <div className="inline-flex items-center justify-center rounded-full bg-[#800000]/10 p-3 mb-5">
                                <svg className="w-7 h-7 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-[#800000] mb-3">Internship and Profile Creation</h2>
                            <p className="leading-relaxed text-base">
                                We offer internship guidance and profile creation services to help you in your employment search.
                            </p>
                        </div>
                    </div>
                    
                    {/* Working Professionals Card */}
                    <div className="w-full px-4 mb-10">
                        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-[#800000]">
                            <div className="inline-flex items-center justify-center rounded-full bg-[#800000]/10 p-3 mb-5">
                                <svg className="w-7 h-7 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-[#800000] mb-3">Support for Working Professionals</h2>
                            <p className="leading-relaxed text-base">
                                We support working professionals who want to pursue further education from UG to PhD.
                            </p>
                        </div>
                    </div>
                    
                    {/* Part-Time Education Card */}
                    <div className="w-full px-4 mb-10">
                        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-[#800000]">
                            <div className="inline-flex items-center justify-center rounded-full bg-[#800000]/10 p-3 mb-5">
                                <svg className="w-7 h-7 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-[#800000] mb-3">Part-Time Education Support</h2>
                            <p className="leading-relaxed text-base">
                                We provide full end-to-end admission support for part-time education.
                            </p>
                        </div>
                    </div>
                    
                    {/* NRI Support Card */}
                    <div className="w-full px-4 mb-10">
                        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-[#800000]">
                            <div className="inline-flex items-center justify-center rounded-full bg-[#800000]/10 p-3 mb-5">
                                <svg className="w-7 h-7 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-[#800000] mb-3">Support for Non-Resident Indians</h2>
                            <p className="leading-relaxed text-base">
                                We offer guidance and support to non-resident Indians who wish to pursue their education.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default IndianStudents;
