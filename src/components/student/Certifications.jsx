import React from 'react';

function Certifications() {
    return (
        <section className="text-gray-600 body-font bg-[#800000]/5">
            <div className="container px-5 lg:px-12 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#800000]">What We Offer</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        We offer more than 100+ certifications to get cleared in the first attempt.
                    </p>
                </div>
                <div className="flex flex-wrap items-center -m-4">
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
                        "https://ik.imagekit.io/vituepzjm/MEC/logos",
                        "https://ik.imagekit.io/vituepzjm/MEC/pmi"
                    ].map((src, index) => (
                        <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex flex-col items-center text-center bg-white py-6 rounded-lg shadow-md">
                                <img alt="certification logo" className="w-32 h-32 object-contain" src={src} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;