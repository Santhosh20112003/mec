import React from "react";
import { HashLink } from "react-router-hash-link";

function Hero() {
  return (
    <section className="text-gray-900 body-font">
      <div className=" flex px-5 md:px-12 md:py-24 py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="degree architecture"
            src="https://ik.imagekit.io/vituepzjm/MEC/Insight%20(2).png?updatedAt=1740333925497"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-[#800000]">
            Pursue Your Degree Internationally
          </h1>
          <p className="mb-6 leading-relaxed text-center">
            Transform your educational experience by studying architecture in
            world-renowned institutions abroad. Immerse yourself in diverse
            cultural perspectives on design, learn from master architects, and
            explore iconic architectural landmarks firsthand. Our international
            degree programs empower you with global skills and connections that
            will distinguish your portfolio and advance your career in
            architecture.
          </p>
          <div className="flex gap-3 w-full justify-center">
            <HashLink
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/engineering"
              className="inline-flex text-white bg-[#800000] border-0 py-2 px-6 focus:outline-none hover:bg-[#600000] rounded-full text-lg"
            >
              Engineering
            </HashLink>
            <HashLink
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/arts-and-science"
              className="inline-flex text-white bg-[#800000] border-0 py-2 px-6 focus:outline-none hover:bg-[#600000] rounded-full text-lg"
            >
              Arts and Science
            </HashLink>
            <HashLink
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/medical"
              className="inline-flex text-white bg-[#800000] border-0 py-2 px-6 focus:outline-none hover:bg-[#600000] rounded-full text-lg"
            >
              Medical
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
