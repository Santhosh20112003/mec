import React from 'react';

function About() {
    return (
        <section className="text-gray-600 body-font bg-white">
            <div className=" flex px-10 py-12 md:py-24 lg:py-12 md:flex-row flex-col items-center">
                <div data-aos="fade-right" className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
                    <img className="object-cover object-center rounded-lg" alt="about" src="https://ik.imagekit.io/vituepzjm/MEC/convocation?updatedAt=1740326225680" />
                </div>
                <div className="lg:flex-grow md:w-1/2 text-sm md:pl-16 flex flex-col mt-4 md:text-left items-center text-center">
                    <h2 className="lg:text-3xl text-lg break-words lg:text-start text-center w-full mb-4 font-medium text-[#800000]">Mayilon Educational Consultancy</h2>
                    <p className="mb-4 leading-relaxed text-gray-900">
                        Welcome to MEC, your trusted partner in educational excellence. We are dedicated to providing comprehensive guidance and support to students aspiring to study at top universities in India and around the world. Our mission is to empower students with the knowledge and resources they need to achieve their academic and career goals.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-900">
                        At MEC, we believe in the power of education to transform lives. Our team of experienced counselors and educators is committed to helping you navigate the complex process of college admissions, course selection, and career planning. We offer personalized counseling sessions, detailed information about universities and courses, and ongoing support throughout your educational journey.
                    </p>
                    {/* <p className="mb-4 leading-relaxed text-gray-700">
                        Join us at MEC and take the first step towards a brighter future. Whether you are a high school student looking to pursue higher education or a working professional seeking to enhance your skills, we are here to guide you every step of the way.
                    </p> */}
                </div>
            </div>
        </section>
    );
}

export default About;