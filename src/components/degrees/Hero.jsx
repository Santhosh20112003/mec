import React from 'react';

function Hero() {
    return (
        <section className="text-gray-600 body-font">
            <div className=" flex px-5 md:px-12 md:py-24 py-12 md:flex-row flex-col items-center">
                <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="degree architecture" src="https://ik.imagekit.io/vituepzjm/MEC/4.png" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#800000]">Study Your Degree Abroad</h1>
                    <p className="mb-8 leading-relaxed text-gray-700 text-justify">
                        Embark on a journey to study architecture abroad and gain a global perspective on design and construction. Our programs offer unique opportunities to learn from renowned architects and experience diverse architectural styles. Enhance your skills and broaden your horizons with our comprehensive degree programs.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-[#800000] border-0 py-2 px-6 focus:outline-none hover:bg-[#600000] rounded text-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;