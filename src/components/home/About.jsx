import React from 'react';

function About() {
    return (
        <section className="text-gray-600 body-font bg-white">
            <div className="container mx-auto flex px-10 py-12 md:py-24 lg:py-12 md:flex-row flex-col items-center">
                <div data-aos="fade-right" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
                    <img className="object-cover object-center rounded-lg shadow-lg" alt="about" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col mt-4 md:text-left items-center text-center">
                    {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#800000]">About MEC</h1> */}
                    <p className="mb-4 leading-relaxed text-gray-700">
                        Welcome to MEC, your trusted partner in educational excellence. We are dedicated to providing comprehensive guidance and support to students aspiring to study at top universities in India and around the world. Our mission is to empower students with the knowledge and resources they need to achieve their academic and career goals.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-700">
                        At MEC, we believe in the power of education to transform lives. Our team of experienced counselors and educators is committed to helping you navigate the complex process of college admissions, course selection, and career planning. We offer personalized counseling sessions, detailed information about universities and courses, and ongoing support throughout your educational journey.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-700">
                        Join us at MEC and take the first step towards a brighter future. Whether you are a high school student looking to pursue higher education or a working professional seeking to enhance your skills, we are here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;