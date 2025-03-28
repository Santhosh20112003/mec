import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Certifications() {
    // Certification names to display below each logo
    const certificationNames = [
        "Oracle", "Red Hat", "Amazon AWS", "Cisco", "VMware", 
        "Citrix", "PMI", "TOEFL", "GTE", "Jupiter", 
        "GMAT", "Fortnite", "CompTIA", "ISC²", "ITIL", 
        "SAFe", "Microsoft", "PMI"
    ];

    return (
        <section className="text-gray-900 body-font bg-gradient-to-b from-[#800000]/5 to-white py-16">
            <div className="container mx-auto max-w-7xl px-5 lg:px-12">
                <div className="flex flex-col text-center w-full mb-16">
                    <span className="text-sm text-[#800000] font-semibold tracking-wider uppercase mb-2">Professional Development</span>
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-6 text-[#800000]">What We Also Offer</h1>
                    <div className="h-1 w-20 bg-[#800000] rounded mx-auto mb-6"></div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
                        We offer more than 100+ industry-recognized certifications with comprehensive training to ensure your success in the first attempt.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center -m-4">
                    {[
                        "https://ik.imagekit.io/vituepzjm/MEC/oracle",
                        "https://ik.imagekit.io/vituepzjm/MEC/redhat",
                        "https://ik.imagekit.io/vituepzjm/MEC/amazon",
                        "https://ik.imagekit.io/vituepzjm/MEC/cisco",
                        "https://ik.imagekit.io/vituepzjm/MEC/vmware",
                        "https://ik.imagekit.io/vituepzjm/MEC/citrix",
                        "https://ik.imagekit.io/vituepzjm/MEC/pmi",
                        "https://ik.imagekit.io/vituepzjm/MEC/toefel",
                        "https://ik.imagekit.io/vituepzjm/MEC/gte",
                        "https://ik.imagekit.io/vituepzjm/MEC/jupiter",
                        "https://ik.imagekit.io/vituepzjm/MEC/gmat",
                        "https://ik.imagekit.io/vituepzjm/MEC/fortnite",
                        "https://ik.imagekit.io/vituepzjm/MEC/comptia",
                        "https://ik.imagekit.io/vituepzjm/MEC/isc",
                        "https://ik.imagekit.io/vituepzjm/MEC/itil",
                        "https://ik.imagekit.io/vituepzjm/MEC/safe",
                        "https://ik.imagekit.io/vituepzjm/MEC/certifications/microsoft?updatedAt=1743155852410",
                        "https://ik.imagekit.io/vituepzjm/MEC/pmi"
                    ].map((src, index) => (
                        <div key={index} className="p-4 bg-white lg:w-1/4 md:w-[30%] sm:w-1/2 w-full">
                            <div className="h-full flex flex-col items-center text-center bg-white p-5 rounded-xl border border-gray-100 
                                          shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-gray-50 
                                          hover:border-gray-200 transform hover:-translate-y-1 overflow-hidden">
                                <div className="w-full  flex items-center justify-center mb-3 bg-white rounded-lg">
                                    <img 
                                        alt={`${certificationNames[index] || "Certification"} logo`} 
                                        className="size-32 object-contain transition-all duration-300 filter hover:brightness-110" 
                                        src={src} 
                                    />
                                </div>
                                <p className="text-md font-semibold text-gray-800 mt-2">{certificationNames[index] || "Certification"}</p>
                                <span className="text-xs text-[#800000] mt-1">Get Certified</span>
                            </div>
                        </div>
                    ))}
                </div>

                <HashLink to="/list-of-degrees#search-degree" className="flex justify-center mt-16">
                    <button className="bg-[#800000] hover:bg-[#600000] text-white font-medium py-3 px-8 rounded-lg
                                     transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1
                                     flex items-center space-x-2">
                        <span>Explore All Certifications</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </HashLink>
            </div>
        </section>
    );
}

export default Certifications;