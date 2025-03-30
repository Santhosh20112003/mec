import React from "react";
import { Link } from "react-router-dom";

function Contact2() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex gap-x-16 clear-left md:mb-16 mb-10">
          <div className="md:mb-0 mb-4">
            <h2 className="text-[#800000] font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
              Get In Touch
            </h2>
            <p className="text-gray-900 text-lg font-normal leading-7 mb-7 md:text-left text-center">
              Whether you have a question, feedback, or just want to say hi,
              we're here to connect with you and assist in any way we can.
            </p>
            <div className="flex md:items-center md:justify-start justify-center">
              <Link
                to="https://www.facebook.com/mayiloneducation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800000] text-2xl font-semibold leading-8 me-6"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link
                to="https://x.com/MayilonC23520"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800000] text-2xl font-semibold leading-8 me-6"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link
                to="https://www.instagram.com/mayiloneducationalconsultant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800000] text-2xl font-semibold leading-8 me-6"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/company/mayiloneducation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800000] text-2xl font-semibold leading-8 me-6"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
          <div className="border-l-2 lg:flex lg:items-center gap-12 md:border-[#800000] border-white px-10 py-6">
            <div className="mb-8 lg:mb-0">
              <h6 className="text-gray-900 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                Email Address
              </h6>
              <a
                href="mailto:mayiloneducation@gmail.com"
                className="text-black text-xl font-semibold leading-8 md:text-start text-center"
              >
                mayiloneducation@gmail.com
              </a>
            </div>
            <div>
              <h6 className="text-gray-900 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                Phone Number
              </h6>
              <a
                href="tel:9884666652"
                className="text-black text-xl font-semibold leading-8 md:text-start text-center"
              >
                9884666652
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="h-96 rounded-3xl relative flex justify-center">
            <div className="w-full h-full absolute bg-gradient-to-tr rounded-3xl from-black via-black/5 to-transparent"></div>
            <img
              src="https://ik.imagekit.io/vituepzjm/MEC/chennai?updatedAt=1740241476589"
              alt="Chennai image"
              className="w-full h-full rounded-3xl object-cover object-right"
            />
            <div className="absolute rounded-3xl left-0 bottom-0 mb-6 text-left px-6">
              <h5 className="text-white text-3xl font-semibold leading-7 mb-2">
                Chennai
              </h5>
              <p className="text-white text-xl font-medium leading-6 ms-1">
                Tamilnadu, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact2;
