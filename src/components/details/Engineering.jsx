import React, { useState } from "react";
import { motion } from "framer-motion";

function Engineering() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#9f0712]/40"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 text-center leading-tight"
          >
            Engineering Education in India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl text-center font-light"
          >
            Discover world-class opportunities in one of the global hubs for
            technical education
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <button
              onClick={() => {
                document
                  .getElementById("main-content")
                  .scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-[#9f0712] hover:bg-[#9f0712]/90 text-white rounded-full flex items-center font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Explore Engineering Pathways
                <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
                </svg>
              </button>
              </motion.div>
            </div>
            </div>

            <div className="relative z-10 -mt-10 md:-mt-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                <div className="p-6 text-center">
                <p className="text-4xl font-bold text-[#9f0712]">5,000+</p>
                <p className="text-gray-600 mt-1">Engineering Institutions</p>
                <p className="text-xs text-[#9f0712] mt-1">
                  250+ with international accreditation
                </p>
                </div>
                <div className="p-6 text-center">
                <p className="text-4xl font-bold text-[#9f0712]">1/5</p>
                <p className="text-gray-600 mt-1">
                  Cost vs. Western Engineering Degrees
                </p>
                <p className="text-xs text-[#9f0712] mt-1">
                  Superior ROI for technical education
                </p>
                </div>
                <div className="p-6 text-center">
                <p className="text-4xl font-bold text-[#9f0712]">120+</p>
                <p className="text-gray-600 mt-1">Engineering Specializations</p>
                <p className="text-xs text-[#9f0712] mt-1">
                  All with English instruction
                </p>
                </div>
                <div className="p-6 text-center">
                <p className="text-4xl font-bold text-[#9f0712]">98%</p>
                <p className="text-gray-600 mt-1">
                  Graduate Employment Rate
                </p>
                <p className="text-xs text-[#9f0712] mt-1">
                  For top-tier engineering schools
                </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div id="main-content" className="container mx-auto px-3 py-4 md:px-4 md:py-8">
        <div className="flex justify-start md:justify-center overflow-x-auto space-x-1 sm:space-x-2 md:space-x-4 mb-12 pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveTab("intro")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "intro"
                  ? "bg-[#9f0712] text-white shadow-md"
                  : "bg-white text-[#9f0712] border border-[#9f0712]/20 hover:bg-[#9f0712]/5"
              }`}
          >
            Introduction
          </button>
          <button
            onClick={() => setActiveTab("accreditation")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "accreditation"
                  ? "bg-[#9f0712] text-white shadow-md"
                  : "bg-white text-[#9f0712] border border-[#9f0712]/20 hover:bg-[#9f0712]/5"
              }`}
          >
            Accreditation
          </button>
          <button
            onClick={() => setActiveTab("market")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "market"
                  ? "bg-[#9f0712] text-white shadow-md"
                  : "bg-white text-[#9f0712] border border-[#9f0712]/20 hover:bg-[#9f0712]/5"
              }`}
          >
            Market
          </button>
          <button
            onClick={() => setActiveTab("laboratory")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "laboratory"
                  ? "bg-[#9f0712] text-white shadow-md"
                  : "bg-white text-[#9f0712] border border-[#9f0712]/20 hover:bg-[#9f0712]/5"
              }`}
          >
            Labs
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "experience"
                  ? "bg-[#9f0712] text-white shadow-md"
                  : "bg-white text-[#9f0712] border border-[#9f0712]/20 hover:bg-[#9f0712]/5"
              }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "skills"
                  ? "bg-[#9f0712] text-white shadow-md"
                  : "bg-white text-[#9f0712] border border-[#9f0712]/20 hover:bg-[#9f0712]/5"
              }`}
          >
            Skills
          </button>
        </div>
        <div className="bg-white rounded-xl md:border border-[#9f0712] p-3 sm:p-4 md:p-6">
          {activeTab === "intro" && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-[#9f0712] bg-white w-fit  md:mb-6 mx-auto mb-6 rounded-xl">
                Introduction
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 leading-relaxed mb-4 md:mb-6 p-4 ">
                Engineering is one of the most sought-after career paths in
                India, offering diverse opportunities in fields like Computer
                Science, Mechanical, Civil, Electrical, and more. With over
                6,000 engineering colleges and a growing demand for skilled
                professionals, India is a global hub for engineering education.
                Explore our website to learn about top colleges, entrance exams,
                scholarships, and career guidance.
              </p>
            </div>
          )}

          {activeTab === "accreditation" && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-[#9f0712] bg-white w-fit  md:mb-6 mx-auto mb-6 rounded-xl">
                Accreditation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 leading-relaxed mb-4 md:mb-6 ">
                The quality of these institutions is ensured through rigorous
                accreditation processes by bodies like the{" "}
                <strong className="text-[#9f0712]">
                  National Assessment and Accreditation Council (NAAC) and the
                  All India Council for Technical Education (AICTE)
                </strong>
                . NAAC evaluates colleges based on parameters such as
                curriculum, infrastructure, research, and student outcomes,
                while AICTE regulates and maintains the standards of technical
                education in India. These accreditations ensure that students
                receive a world-class education, equipping them with the skills
                needed to excel in a competitive global market.
              </p>
            </div>
          )}

          {activeTab === "market" && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-[#9f0712] bg-white w-fit  md:mb-6 mx-auto mb-6 rounded-xl">
                Market Position
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 leading-relaxed mb-4 md:mb-6 ">
                Engineering education in India holds a prominent position in the
                global academic landscape, producing over 1.5 million engineers
                annually and contributing significantly to the country's
                technical workforce. India is home to some of the world's most
                prestigious engineering institutions, including the Indian
                Institutes of Technology (IITs), National Institutes of
                Technology (NITs), and Birla Institute of Technology and Science
                (BITS Pilani). These institutions are recognized for their
                rigorous academic programs, cutting-edge research, and strong
                industry connections. The engineering education sector in India
                is regulated by bodies like the All India Council for Technical
                Education (AICTE) and accredited by the National Assessment and
                Accreditation Council (NAAC), ensuring high standards of quality
                and relevance.
              </p>
            </div>
          )}

          {activeTab === "laboratory" && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-[#9f0712] bg-white w-fit md:mb-12 mx-auto mb-6 rounded-xl">
                Laboratory Facilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[minmax(120px,auto)]">
                <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 overflow-hidden rounded-lg border border-gray-100 group relative">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/lab-4.jpg?updatedAt=1740599308427"
                    alt="Advanced Computer Lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white bg-opacity-90 absolute bottom-0 left-0 right-0">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Advanced Programming Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      High-performance computing environment for software
                      development
                    </p>
                  </div>
                </div>

                {/* Regular items */}
                <div className="sm:col-span-2 lg:col-span-3 overflow-hidden rounded-lg border border-gray-100 group relative">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/lab-10.jpg?updatedAt=1740599297168"
                    alt="Physics Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Physics & Optics Laboratory
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Precision equipment for optical experiments
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-2 lg:col-span-3 overflow-hidden rounded-lg border border-gray-100 group relative">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/Chem1.jpg?updatedAt=1740599276685"
                    alt="Chemistry Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Analytical Chemistry Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      State-of-the-art chemical analysis equipment
                    </p>
                  </div>
                </div>

                {/* Medium item spanning 2 columns on larger screens */}
                <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/3-crore-worth-iMac-lab-opened-in-SRMIST-1.jpg?updatedAt=1740599292554"
                    alt="iMac Design Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      iMac Design Studio
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      High-end graphic design and CAD facility
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/Lab-photo-1-resized-scaled.jpg?updatedAt=1740599311036"
                    alt="Biomedical Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Biomedical Engineering Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Advanced diagnostic and biomedical equipment
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/3-crore-worth-iMac-lab-opened-in-SRMIST-4.jpg?updatedAt=1740599275817"
                    alt="Apple Computing Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Apple Computing Center
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      iOS and macOS development environment
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-2 lg:col-span-4 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/research-center-header.webp?updatedAt=1740599313769"
                    alt="Research Center"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Advanced Research Center
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Cutting-edge facilities for academic research
                    </p>
                  </div>
                </div>

                {/* Tall item spanning 2 rows on larger screens */}
                <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/img-19.jpg?updatedAt=1740599305795"
                    alt="Robotics Laboratory"
                    className="w-full h-full max-h-[470px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Robotics & Automation Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Industrial-grade robotics and automation systems
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-2 lg:col-span-4 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/Chem3.jpg?updatedAt=1740599279592"
                    alt="Chemical Engineering Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Chemical Process Laboratory
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Industrial chemical processing and analysis setup
                    </p>
                  </div>
                </div>

                {/* Full width item */}
                <div className="sm:col-span-2 lg:col-span-6 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/Phy1.jpg?updatedAt=1740599311882"
                    alt="Physics Research Center"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Applied Physics Research Facility
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Advanced equipment for theoretical and applied physics
                      research
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-1 md:col-span-1 lg:col-span-3 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/ECE2.jpg?updatedAt=1740599301466"
                    alt="Electronics Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Electronics & Communication Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Circuit design and testing equipment
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 overflow-hidden rounded-lg border border-gray-100 group relative">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/srmist-lab-9.jpg?updatedAt=1740599316304"
                    alt="Modern Computing Lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white bg-opacity-90 absolute bottom-0 left-0 right-0">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Modern Computing Facility
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Cloud computing and big data analytics center
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-1 md:col-span-1 lg:col-span-3 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/EEE4.jpg?updatedAt=1740599299352"
                    alt="Electrical Engineering Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Electrical Systems Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Power systems and electrical engineering equipment
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/db6479551754db9b12e7c60975a94cfde15a60195894271dd39273c9466c544a_FABRICATION%20LAB_DAP_%2002.jpeg?updatedAt=1740599282165"
                    alt="Fabrication Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Digital Fabrication Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      3D printing and CNC machining facility
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/Ship-in-campus-1-1.jpg?updatedAt=1740599316011"
                    alt="Marine Engineering Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Marine Engineering Facility
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Ship modeling and naval architecture setup
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 overflow-hidden rounded-lg border border-gray-100 group">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Engineering%20/lab-10.jpg?updatedAt=1740599297168"
                    alt="Physics Measurement Lab"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 sm:p-3 bg-white">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                      Physics Measurement Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Precision measurement and instrumentation facility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="mx-auto">
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-[#9f0712] bg-white w-fit md:mb-10 mb-6 mx-auto rounded-xl">
                Experience
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                <div className="bg-[#9f0712]/5 p-3 sm:p-4 md:p-5 rounded-lg border border-[#9f0712]/20">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#9f0712]">
                    Academic Environment
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Indian engineering universities are known for their
                    challenging coursework, especially in fields like Computer
                    Science, Mechanical Engineering, and Electrical Engineering.
                    Many students note that Indian universities emphasize
                    theoretical knowledge, which can be both a strength and a
                    challenge for those used to more practical, hands-on
                    learning. The academic environment is highly competitive,
                    with a strong focus on exams and grades.
                  </p>
                </div>
                <div className="bg-[#9f0712]/5 p-3 sm:p-4 md:p-5 rounded-lg border border-[#9f0712]/20">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#9f0712]">
                    Personal Growth
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Living in a new country helps students develop
                    problem-solving skills and adaptability. Foreign students
                    often build a diverse network of friends and professional
                    contacts from India and other countries.
                  </p>
                </div>
                <div className="bg-[#9f0712]/5 p-3 sm:p-4 md:p-5 rounded-lg border border-[#9f0712]/20">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#9f0712]">
                    Career Opportunities
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Many foreign students take advantage of internship
                    opportunities and campus placements in Indian companies.
                    Degrees from top Indian engineering universities like IITs,
                    NITs, and BITS Pilani are well-respected globally.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="mx-auto">
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-[#9f0712] bg-white w-fit  md:mb-12 mx-auto mb-6 rounded-xl">
                Engineering Disciplines
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#9f0712]">
                    Aeronautical Engineering
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    This dynamic field focuses on the design, development, and
                    maintenance of aircraft and spacecraft. Students learn about
                    aerodynamics, propulsion systems, flight mechanics, and
                    avionics, gaining the skills to design cutting-edge
                    aerospace technologies.
                  </p>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#9f0712]">
                    Electronics and Communication Engineering (ECE)
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    This field drives advancements in communication systems,
                    embedded technologies, and electronic devices. ECE graduates
                    work in telecommunications, robotics, and consumer
                    electronics.
                  </p>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#9f0712]">
                    Electrical and Electronics Engineering (EEE)
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    This discipline combines electrical systems and electronics
                    to design, develop, and maintain power grids, renewable
                    energy systems, and electronic devices.
                  </p>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#9f0712]">
                    Mechanical Engineering
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    This broad field focuses on the design, analysis,
                    manufacturing, and maintenance of mechanical systems.
                    Mechanical engineers work on diverse projects, from
                    energy-efficient HVAC systems to advanced automotive
                    components.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Engineering;
