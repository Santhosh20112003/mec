import React, { useState } from "react";

function Engineering() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
          className="w-full h-[40vh] sm:h-[250px] md:h-[350px] object-cover brightness-75"
          alt="Engineering Education in India"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col px-3 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 text-center drop-shadow-lg">
            Engineering Education in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl text-center drop-shadow-md">
            Discover world-class opportunities in one of the global hubs for
            technical education
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 py-4 md:px-4 md:py-8">
        <div className="flex justify-start md:justify-center overflow-x-auto space-x-1 sm:space-x-2 md:space-x-4 mb-12 pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveTab("intro")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "intro"
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-white text-red-800 border border-red-100 hover:bg-red-50"
              }`}
          >
            Introduction
          </button>
          <button
            onClick={() => setActiveTab("accreditation")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "accreditation"
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-white text-red-800 border border-red-100 hover:bg-red-50"
              }`}
          >
            Accreditation
          </button>
          <button
            onClick={() => setActiveTab("market")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "market"
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-white text-red-800 border border-red-100 hover:bg-red-50"
              }`}
          >
            Market
          </button>
          <button
            onClick={() => setActiveTab("laboratory")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "laboratory"
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-white text-red-800 border border-red-100 hover:bg-red-50"
              }`}
          >
            Labs
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "experience"
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-white text-red-800 border border-red-100 hover:bg-red-50"
              }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-3 py-1.5 sm:px-4 md:px-5 sm:py-2 font-medium text-xs sm:text-sm md:text-base rounded-lg transition whitespace-nowrap
              ${
                activeTab === "skills"
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-white text-red-800 border border-red-100 hover:bg-red-50"
              }`}
          >
            Skills
          </button>
        </div>
        <div className="bg-white rounded-xl md:border border-[#9f0712] p-3 sm:p-4 md:p-6">
          {activeTab === "intro" && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-red-800 bg-white w-fit  md:mb-12 mx-auto mb-6 rounded-xl">
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
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-red-800 bg-white w-fit  md:mb-12 mx-auto mb-6 rounded-xl">
                Accreditation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 leading-relaxed mb-4 md:mb-6 ">
                The quality of these institutions is ensured through rigorous
                accreditation processes by bodies like the{" "}
                <strong className="text-red-800">
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
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-red-800 bg-white w-fit  md:mb-12 mx-auto mb-6 rounded-xl">
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
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-red-800 bg-white w-fit  md:mb-12 mx-auto mb-6 rounded-xl">
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
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-red-800 bg-white w-fit md:mb-6 mb-6 mx-auto rounded-xl">
                Experience
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                <div className="bg-red-50 p-3 sm:p-4 md:p-5 rounded-lg border border-red-100">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-800">
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
                <div className="bg-red-50 p-3 sm:p-4 md:p-5 rounded-lg border border-red-100">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-800">
                    Personal Growth
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Living in a new country helps students develop
                    problem-solving skills and adaptability. Foreign students
                    often build a diverse network of friends and professional
                    contacts from India and other countries.
                  </p>
                </div>
                <div className="bg-red-50 p-3 sm:p-4 md:p-5 rounded-lg border border-red-100">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-800">
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
              <h2 className="text-xl text-center -mt-11 uppercase px-2 sm:text-2xl md:text-3xl font-bold text-red-800 bg-white w-fit  md:mb-12 mx-auto mb-6 rounded-xl">
                Engineering Disciplines
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-800">
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
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-800">
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
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-800">
                    Electrical and Electronics Engineering (EEE)
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    This discipline combines electrical systems and electronics
                    to design, develop, and maintain power grids, renewable
                    energy systems, and electronic devices.
                  </p>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-800">
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
