import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Medical() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation sections
  const sections = [
    {
      id: "intro",
      title: "Introduction",
      icon: "👨‍⚕️",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "programs",
      title: "Programs",
      icon: "🎓",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      icon: "🏥",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "clinical",
      title: "Clinical Training",
      icon: "💉",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "research",
      title: "Research",
      icon: "🔬",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Statistics data
  const stats = [
    { number: "600+", label: "Medical Colleges", subtext: "MBBS & Specialty" },
    {
      number: "90,000+",
      label: "Annual Graduates",
      subtext: "Medical Professionals",
    },
    {
      number: "250K+",
      label: "Hospital Beds",
      subtext: "For Clinical Training",
    },
    { number: "100%", label: "Global Recognition", subtext: "WHO Accredited" },
  ];

  // Hero video fallback image
  const heroImage =
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Introduction section images
  const introImages = {
    main: "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/DSC01505.jpeg?updatedAt=1741279310442",
    who: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    clinical:
      "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/maxresdefault.jpg?updatedAt=1741279323640",
    research:
      "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/Wetlab-2.jpg?updatedAt=1741279316353",
  };

  // Infrastructure section images
  const infrastructureImages = {
    lab1: "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/IMG_6523-scaled.jpg?updatedAt=1741279307063",
    lab2: "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/IMG_6530-scaled.jpg?updatedAt=1741279312325",
    lab3: "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/IMG_6546-scaled.jpg?updatedAt=1741279314519",
    lab4: "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/IMG_6543-scaled.jpg?updatedAt=1741279318793",
  };

  // Clinical training images
  const clinicalImages = {
    rural:
      "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/udhi-eye-hospitals-alwarpet-chennai-eye-hospitals-akkox2886a.avif?updatedAt=1741279322353",
    patient:
      "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/IMG_1213.jpg?updatedAt=1741279309020",
    skills:
      "https://ik.imagekit.io/vituepzjm/MEC/Streams/Medical%20/saveetha4141+(1).jpeg?updatedAt=1741279320713",
  };

  // Research images
  const researchImages = {
    lab: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    collab:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2068",
  };

  // Programs images
  const programImages = {
    mbbs: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2074",
    pg: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2073",
    specialty:
      "https://images.unsplash.com/photo-1559757175-7b21e5afae2a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2073",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Image Background */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Medical education hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#9f0712]/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Medical Education in India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-8"
          >
            World-class medical education combining ancient wisdom with modern
            healthcare excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <button
              onClick={() => {
                document
                  .getElementById("main-content")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-[#9f0712] text-white rounded-full hover:bg-[#9f0712]/90 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Programs
            </button>
            {/* <button className="px-8 py-3 bg-white text-[#9f0712] rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Watch Video
            </button> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce mx-auto"></div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative z-20 -mt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#9f0712] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="main-content" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Tabs */}
          <div
            className={`${
              isScrolled
                ? "sticky top-0 z-30 py-4 backdrop-blur-sm transition-all duration-300"
                : "relative z-20"
            }`}
          >
            <div className="flex overflow-x-auto hide-scrollbar">
              <div className="flex space-x-2 mx-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-6 py-3 rounded-full flex items-center whitespace-nowrap transition-all
                      ${
                        activeSection === section.id
                          ? `${section.color} text-white shadow-lg`
                          : `bg-white ${section.textColor} hover:bg-gray-100 border ${section.borderColor}`
                      }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Panels */}
          <div className="mt-8">
            {activeSection === "intro" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 md:h-80">
                  <img
                    src={introImages.main}
                    className="w-full h-full object-cover"
                    alt="Medical Education"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 sm:p-8 md:p-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Excellence in Medical Education
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none">
                    <div className="bg-red-50 rounded-xl p-5 border-l-4 border-[#9f0712] mb-6">
                      <h3 className="text-[#9f0712] font-semibold text-lg mb-2">
                        Global Recognition
                      </h3>
                      <p className="text-gray-700">
                        Indian medical education is recognized worldwide, with
                        graduates practicing in prestigious institutions across
                        the globe. The curriculum follows international
                        standards while incorporating India's rich medical
                        heritage through AYUSH integration.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                      <div className="bg-red-50 rounded-xl p-5 border-t-4 border-[#9f0712]">
                        <div className="mb-3 h-40 overflow-hidden rounded-lg">
                          <img
                            src={introImages.who}
                            alt="WHO Recognition"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-[#9f0712] font-semibold text-xl mb-2">
                          WHO Recognition
                        </h3>
                        <p className="text-gray-700">
                          All major medical colleges are recognized by the World
                          Health Organization and listed in the World Directory
                          of Medical Schools.
                        </p>
                      </div>

                      <div className="bg-red-50 rounded-xl p-5 border-t-4 border-[#9f0712]">
                        <div className="mb-3 h-40 overflow-hidden rounded-lg">
                          <img
                            src={introImages.clinical}
                            alt="Clinical Exposure"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-[#9f0712] font-semibold text-xl mb-2">
                          Clinical Exposure
                        </h3>
                        <p className="text-gray-700">
                          Students gain extensive hands-on experience through
                          exposure to diverse patient cases and advanced medical
                          conditions.
                        </p>
                      </div>

                      <div className="bg-red-50 rounded-xl p-5 border-t-4 border-[#9f0712]">
                        <div className="mb-3 h-40 overflow-hidden rounded-lg">
                          <img
                            src={introImages.research}
                            alt="Research Focus"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-[#9f0712] font-semibold text-xl mb-2">
                          Research Focus
                        </h3>
                        <p className="text-gray-700">
                          Strong emphasis on research with collaborations with
                          international institutions and pharmaceutical
                          companies.
                        </p>
                      </div>
                    </div>

                    <div className="my-8 bg-[#9f0712] text-white p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-2">Key Advantages</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Comprehensive curriculum following global standards
                        </li>
                        <li>
                          Integration of traditional medicine with modern
                          practices
                        </li>
                        <li>
                          Extensive clinical exposure in diverse healthcare
                          settings
                        </li>
                        <li>Cost-effective world-class medical education</li>
                        <li>Strong focus on practical training and research</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "programs" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-[#9f0712] mb-6">
                    Medical Programs
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4">
                        Undergraduate Programs
                      </h3>
                      <ul className="space-y-3">
                        <li className="text-gray-800 flex items-start">
                          <span className="text-[#9f0712] mr-2">•</span>
                          <div>
                            <strong>MBBS (5.5 years)</strong>
                            <p className="text-sm text-gray-600">
                              Bachelor of Medicine and Bachelor of Surgery
                            </p>
                          </div>
                        </li>
                        <li className="text-gray-800 flex items-start">
                          <span className="text-[#9f0712] mr-2">•</span>
                          <div>
                            <strong>BDS (5 years)</strong>
                            <p className="text-sm text-gray-600">
                              Bachelor of Dental Surgery
                            </p>
                          </div>
                        </li>
                        <li className="text-gray-800 flex items-start">
                          <span className="text-[#9f0712] mr-2">•</span>
                          <div>
                            <strong>BAMS (5.5 years)</strong>
                            <p className="text-sm text-gray-600">
                              Bachelor of Ayurvedic Medicine and Surgery
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4">
                        Postgraduate Programs
                      </h3>
                      <ul className="space-y-3">
                        <li className="text-gray-800 flex items-start">
                          <span className="text-[#9f0712] mr-2">•</span>
                          <div>
                            <strong>MD/MS (3 years)</strong>
                            <p className="text-sm text-gray-600">
                              Specialization in various medical fields
                            </p>
                          </div>
                        </li>
                        <li className="text-gray-800 flex items-start">
                          <span className="text-[#9f0712] mr-2">•</span>
                          <div>
                            <strong>DM/MCh (3 years)</strong>
                            <p className="text-sm text-gray-600">
                              Super-specialization programs
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "infrastructure" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 items-end md:grid-cols-2 gap-6 p-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#9f0712]">
                      World-Class Infrastructure
                    </h2>

                    <div className="bg-red-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-[#9f0712] mb-2">
                        Hospital Facilities
                      </h3>
                      <ul className="space-y-2">
                        <li>• State-of-the-art teaching hospitals</li>
                        <li>• Advanced diagnostic centers</li>
                        <li>• Modern operation theaters</li>
                        <li>• Specialized care units</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-[#9f0712] mb-2">
                        Research Facilities
                      </h3>
                      <ul className="space-y-2">
                        <li>• Research laboratories</li>
                        <li>• Clinical trial centers</li>
                        <li>• Biomedical research units</li>
                        <li>• Collaboration centers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src={infrastructureImages.lab1}
                      alt="Anatomy Lab"
                      className="rounded-lg h-48 w-full object-cover"
                    />
                    <img
                      src={infrastructureImages.lab2}
                      alt="Simulation Center"
                      className="rounded-lg h-48 w-full object-cover"
                    />
                    <img
                      src={infrastructureImages.lab3}
                      alt="Operation Theater"
                      className="rounded-lg h-48 w-full object-cover"
                    />
                    <img
                      src={infrastructureImages.lab4}
                      alt="Medical Library"
                      className="rounded-lg h-48 w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "clinical" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#9f0712] mb-6">
                    Clinical Training Excellence
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="mb-3 h-36 overflow-hidden rounded-lg">
                        <img
                          src={clinicalImages.patient}
                          alt="Patient Care Training"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#9f0712] mb-2">
                        Patient Exposure
                      </h3>
                      <p className="text-gray-700">
                        Students gain experience with diverse patient cases,
                        from common ailments to rare conditions, in both urban
                        and rural healthcare settings.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="mb-3 h-36 overflow-hidden rounded-lg">
                        <img
                          src={clinicalImages.skills}
                          alt="Practical Skills Lab"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#9f0712] mb-2">
                        Practical Skills
                      </h3>
                      <p className="text-gray-700">
                        Hands-on training in diagnostic procedures, surgical
                        techniques, and patient care under expert supervision.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="mb-3 h-36 overflow-hidden rounded-lg">
                        <img
                          src={clinicalImages.rural}
                          alt="Rural Healthcare"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#9f0712] mb-2">
                        Rural Healthcare
                      </h3>
                      <p className="text-gray-700">
                        Mandatory rural postings provide unique exposure to
                        primary healthcare challenges and community medicine.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "research" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#9f0712] mb-6">
                    Research and Innovation
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4">
                        Research Areas
                      </h3>
                      <ul className="space-y-2">
                        <li>• Tropical Medicine and Infectious Diseases</li>
                        <li>• Cancer Research and Therapy</li>
                        <li>• Cardiovascular Research</li>
                        <li>• Neuroscience and Mental Health</li>
                        <li>• Traditional Medicine Integration</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4">
                        Collaborations
                      </h3>
                      <ul className="space-y-2">
                        <li>• International Research Partnerships</li>
                        <li>• Industry-Academia Projects</li>
                        <li>• Government Research Grants</li>
                        <li>• Clinical Trial Centers</li>
                        <li>• Global Health Initiatives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medical;
