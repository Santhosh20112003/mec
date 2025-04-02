import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { HashLink } from "react-router-hash-link";

function ArtsAndScience() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section content
  const sections = [
    {
      id: "intro",
      title: "Introduction",
      icon: "📚",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "accreditation",
      title: "Accreditation",
      icon: "🏅",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "market",
      title: "Market",
      icon: "📈",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "facilities",
      title: "Facilities",
      icon: "🏛️",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "experience",
      title: "Experience",
      icon: "👨‍🎓",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "skills",
      title: "Skills",
      icon: "🛠️",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
    {
      id: "disciplines",
      title: "Disciplines",
      icon: "🔍",
      color: "bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80",
      textColor: "text-[#9f0712]",
      borderColor: "border-[#9f0712]",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Arts and Science Education in India | MEC Education</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Experience world-class Arts and Science education in India with rich cultural immersion at a fraction of Western costs. MEC Education guides international students to premier Indian institutions."
        />
        <link rel="canonical" href="https://www.mayilon.org/arts-and-science" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Arts and Science Education in India | MEC Education"
        />
        <meta
          property="og:description"
          content="Experience world-class Arts and Science education in India with rich cultural immersion at affordable costs."
        />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="Arts education India, Science education India, study in India, international students, MEC education, humanities, social sciences"
        />
      </Helmet>
      <div className="relative h-[60vh] lg:h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            Arts and Science Education in India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl text-center font-light"
          >
            Experience world-class education with rich cultural immersion at a
            fraction of Western costs
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl text-center"
          >
            Join 50,000+ international students pursuing globally recognized
            degrees across premier Indian institutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3"
          >
            <HashLink
              to="/list-of-degrees#search-degree"
              className="px-6 py-3 bg-[#9f0712] hover:bg-[#9f0712]/90 text-white rounded-full flex items-center font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Discover Your Path
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
            </HashLink>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 -mt-10 md:-mt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              <div className="p-6 text-center">
                <p className="text-4xl font-bold text-[#9f0712]">8,000+</p>
                <p className="text-gray-600 mt-1">Colleges Nationwide</p>
                <p className="text-xs text-[#9f0712] mt-1">
                  250+ accepting international students
                </p>
              </div>
              <div className="p-6 text-center">
                <p className="text-4xl font-bold text-[#9f0712]">1/5</p>
                <p className="text-gray-600 mt-1">
                  The Cost of Western Education
                </p>
                <p className="text-xs text-[#9f0712] mt-1">
                  Outstanding value for global education
                </p>
              </div>
              <div className="p-6 text-center">
                <p className="text-4xl font-bold text-[#9f0712]">100+</p>
                <p className="text-gray-600 mt-1">Fields of Study</p>
                <p className="text-xs text-[#9f0712] mt-1">
                  All with English instruction
                </p>
              </div>
              <div className="p-6 text-center">
                <p className="text-4xl font-bold text-[#9f0712]">95%</p>
                <p className="text-gray-600 mt-1">
                  International Student Satisfaction
                </p>
                <p className="text-xs text-[#9f0712] mt-1">
                  Based on ICCR Annual Survey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="main-content" className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`${
              isScrolled
                ? "sticky top-0 z-30 py-2 backdrop-blur-sm transition-all duration:300"
                : "relative z-20 py-0"
            }`}
          >
            <div className="flex overflow-x-auto hide-scrollbar py-2">
              <div className="flex space-x-1 sm:space-x-2 mx-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-3 sm:px-4 py-2 rounded-full flex items-center whitespace-nowrap transition-all ${
                      activeSection === section.id
                        ? `${section.color} text-white `
                        : `bg-white ${section.textColor} hover:bg-gray-100 border ${section.borderColor}`
                    }`}
                  >
                    <span className="mr-1.5">{section.icon}</span>
                    <span className="font-medium text-sm sm:text-base">
                      {section.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

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
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    className="w-full h-full object-cover"
                    alt="Arts and Science Education"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 sm:p-8 md:p-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Arts & Science Education in INDIA
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
                        Indian Arts and Science degrees are recognized
                        worldwide, with graduates continuing their education at
                        prestigious universities like Oxford, MIT, Stanford and
                        others. Major international employers actively recruit
                        from top Indian colleges due to their strong academic
                        reputation and rigorous standards.
                      </p>
                    </div>

                    <blockquote className="italic border-l-4 border-[#9f0712] pl-4 py-2 text-lg text-gray-700">
                      "Arts and Science education in India provides an
                      exceptional combination of ancient cultural wisdom and
                      modern academic excellence, offering international
                      students a unique perspective that enriches their global
                      understanding."
                    </blockquote>

                    <p className="text-gray-700 my-6">
                      Arts and Science education in India offers a comprehensive
                      foundation across humanities, social sciences, and natural
                      sciences. With over 8,000 colleges offering diverse
                      programs in Literature, History, Economics, Physics,
                      Chemistry, Biology, and more, India boasts a rich
                      tradition of liberal arts education that blends thousands
                      of years of cultural heritage with contemporary global
                      perspectives.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                      <div className="bg-red-50 rounded-xl p-5 border-t-4 border-[#9f0712]">
                        <h3 className="text-[#9f0712] font-semibold text-xl mb-2">
                          International Environment
                        </h3>
                        <p className="text-gray-700">
                          Join a diverse community of students from 85+
                          countries, creating a truly global learning
                          environment with multicultural perspectives.
                        </p>
                      </div>

                      <div className="bg-red-50 rounded-xl p-5 border-t-4 border-[#9f0712]">
                        <h3 className="text-[#9f0712] font-semibold text-xl mb-2">
                          English Instruction
                        </h3>
                        <p className="text-gray-700">
                          All programs offered in English, eliminating language
                          barriers while providing opportunities to learn local
                          languages as valuable additions to your skill set.
                        </p>
                      </div>

                      <div className="bg-red-50 rounded-xl p-5 border-t-4 border-[#9f0712]">
                        <h3 className="text-[#9f0712] font-semibold text-xl mb-2">
                          Affordability
                        </h3>
                        <p className="text-gray-700">
                          World-class education at a fraction of Western costs,
                          with tuition typically 70-80% lower than comparable
                          US, UK, or Australian programs.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700">
                      For international students, studying Arts and Science in
                      India offers a unique combination of academic excellence,
                      cultural immersion, and cost-effectiveness. The country's
                      English-language instruction, combined with exposure to
                      one of the world's oldest and most diverse civilizations,
                      provides an educational experience that builds both career
                      skills and global perspective.
                    </p>

                    <div className="my-8 bg-[#9f0712] text-white p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-2">
                        International Student Support
                      </h3>
                      <p className="mb-4">
                        Top Indian institutions offer comprehensive support
                        services for international students including:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Dedicated international student offices with
                          multilingual staff
                        </li>
                        <li>
                          Assistance with visa processes, accommodation, and
                          cultural adjustment
                        </li>
                        <li>
                          Special orientation programs and cultural immersion
                          activities
                        </li>
                        <li>
                          International student scholarships and financial aid
                          opportunities
                        </li>
                        <li>Healthcare services and insurance guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "accreditation" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 sm:p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-[#9f0712] mb-6">
                      Accreditation Standards
                    </h2>

                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Quality assurance in Arts and Science education is
                        maintained through rigorous accreditation processes by
                        bodies like the{" "}
                        <strong className="text-[#9f0712]">
                          National Assessment and Accreditation Council (NAAC)
                        </strong>{" "}
                        and the{" "}
                        <strong className="text-[#9f0712]">
                          University Grants Commission (UGC)
                        </strong>
                        .
                      </p>

                      <div className="bg-red-50 rounded-xl p-5">
                        <h3 className="text-[#9f0712] font-semibold text-xl mb-3">
                          Accreditation Process
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>
                            Self-assessment report submission by the institution
                          </li>
                          <li>
                            Peer review by expert committee through site visits
                          </li>
                          <li>
                            Assessment of curriculum, faculty, infrastructure,
                            research output
                          </li>
                          <li>
                            Evaluation of teaching methods and learning outcomes
                          </li>
                          <li>
                            Review of student support services and governance
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-50 rounded-xl p-5">
                        <h3 className="text-[#9f0712] font-semibold text-xl mb-3">
                          Rating System
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                            <div className="text-[#9f0712] font-bold text-xl">
                              A++
                            </div>
                            <div className="text-gray-600 text-sm">
                              3.51-4.00
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                            <div className="text-[#9f0712] font-bold text-xl">
                              A+
                            </div>
                            <div className="text-gray-600 text-sm">
                              3.26-3.50
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                            <div className="text-[#9f0712] font-bold text-xl">
                              A
                            </div>
                            <div className="text-gray-600 text-sm">
                              3.01-3.25
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                            <div className="text-[#9f0712] font-bold text-xl">
                              B++
                            </div>
                            <div className="text-gray-600 text-sm">
                              2.76-3.00
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                            <div className="text-[#9f0712] font-bold text-xl">
                              B+
                            </div>
                            <div className="text-gray-600 text-sm">
                              2.51-2.75
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                            <div className="text-[#9f0712] font-bold text-xl">
                              B
                            </div>
                            <div className="text-gray-600 text-sm">
                              2.01-2.50
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#9f0712] text-white p-6 sm:p-8 md:p-10">
                    <h3 className="text-2xl font-bold mb-6">
                      Benefits of Accreditation
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#9f0712]/80 p-2 rounded-full mr-4 mt-1">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Global Recognition
                          </h4>
                          <p className="text-white/80">
                            Ensures degrees are recognized by international
                            universities and employers
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#9f0712]/80 p-2 rounded-full mr-4 mt-1">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Government Funding
                          </h4>
                          <p className="text-white/80">
                            Access to grants, scholarships, and research funding
                            from government bodies
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#9f0712]/80 p-2 rounded-full mr-4 mt-1">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Enhanced Employability
                          </h4>
                          <p className="text-white/80">
                            Graduates from accredited institutions have better
                            job prospects
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#9f0712]/80 p-2 rounded-full mr-4 mt-1">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Collaboration Opportunities
                          </h4>
                          <p className="text-white/80">
                            Access to international partnerships, exchange
                            programs, and joint research
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#9f0712]/80 p-2 rounded-full mr-4 mt-1">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Quality Improvement
                          </h4>
                          <p className="text-white/80">
                            Continuous improvement through regular reviews and
                            feedback
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "market" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 md:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    className="w-full h-full object-cover"
                    alt="Arts and Science Market Position"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 sm:p-8 md:p-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Global Market Position
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6">
                      Indian Arts and Science institutions are rapidly advancing
                      in global academic rankings, with several programs now
                      ranked among the top 200 worldwide. International
                      recognition has grown substantially, with prestigious
                      universities in North America, Europe, and Australia now
                      offering direct pathways for graduates of leading Indian
                      programs.
                    </p>

                    <div className="bg-red-50 border-l-4 border-[#9f0712] p-5 my-8 rounded-r-lg">
                      <h3 className="text-[#9f0712] font-semibold text-xl mb-3">
                        International Student Growth
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-semibold text-[#9f0712]">
                            300% Increase
                          </h4>
                          <p className="text-gray-700 text-sm">
                            Foreign student enrollment in Indian Arts & Science
                            programs has tripled over the past decade, with
                            students from 85+ countries now represented.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-semibold text-[#9f0712]">
                            Strategic Focus
                          </h4>
                          <p className="text-gray-700 text-sm">
                            India's National Education Policy 2020 prioritizes
                            internationalization, with special visa provisions,
                            scholarship programs, and support services for
                            foreign students.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="my-8">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4">
                        Internationally Recognized Institutions
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {[
                          { name: "Delhi University", rank: "Top 500 Global" },
                          { name: "JNU", rank: "Political Science Top 100" },
                          {
                            name: "St. Stephen's College",
                            rank: "Liberal Arts Excellence",
                          },
                          {
                            name: "Loyola College",
                            rank: "5-Star NAAC Rating",
                          },
                          {
                            name: "Christ University",
                            rank: "Top Private Institution",
                          },
                          {
                            name: "Lady Shri Ram College",
                            rank: "Women's Education Leader",
                          },
                          {
                            name: "Presidency University",
                            rank: "Historic Excellence",
                          },
                          {
                            name: "Madras Christian College",
                            rank: "Heritage Institution",
                          },
                          {
                            name: "Fergusson College",
                            rank: "Research Excellence",
                          },
                          {
                            name: "Xavier's College Mumbai",
                            rank: "Global Alumni Network",
                          },
                        ].map((college, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-3 rounded text-center shadow-sm border border-red-100"
                          >
                            <p className="font-semibold text-[#9f0712] text-sm">
                              {college.name}
                            </p>
                            <p className="text-xs text-gray-600">
                              {college.rank}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-[#9f0712] mb-3">
                          Global Recognition
                        </h3>
                        <p className="text-gray-700">
                          Indian Arts and Science degrees enjoy strong
                          international recognition, with graduates pursuing
                          advanced studies at world-leading universities. The QS
                          World University Rankings now include multiple Indian
                          institutions for humanities and sciences, reflecting
                          their growing global reputation for academic
                          excellence and research output.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#9f0712] mb-3">
                          Unparalleled Value
                        </h3>
                        <p className="text-gray-700">
                          International students receive world-class education
                          at approximately 20% of Western costs. For example, a
                          full 3-year Bachelor's program at a top Indian
                          university typically costs less than a single semester
                          at comparable US institutions, while maintaining
                          excellent academic standards and English-language
                          instruction.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                      <div className="px-6 py-4 bg-red-50">
                        <h3 className="text-lg font-semibold text-[#9f0712]">
                          International Student Advantages
                        </h3>
                      </div>
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex">
                          <div className="mr-3 text-[#9f0712]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Cost-Effectiveness</h4>
                            <p className="text-sm text-gray-600">
                              Lower tuition compared to Western institutions
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-3 text-[#9f0712]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">English Medium</h4>
                            <p className="text-sm text-gray-600">
                              Instruction in globally recognized language
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-3 text-[#9f0712]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Cultural Diversity</h4>
                            <p className="text-sm text-gray-600">
                              Exposure to rich cultural heritage
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-3 text-[#9f0712]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Alumni Network</h4>
                            <p className="text-sm text-gray-600">
                              Strong connections across industries
                            </p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="mr-3 text-[#9f0712]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Healthcare Access</h4>
                            <p className="text-sm text-gray-600">
                              Quality healthcare at affordable rates for
                              international students
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-3 text-[#9f0712]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Career Opportunities
                            </h4>
                            <p className="text-sm text-gray-600">
                              Growing internship and work opportunities with
                              multinational corporations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "facilities" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 md:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    className="w-full h-full object-cover"
                    alt="Academic Facilities"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 sm:p-8 md:p-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Academic Facilities
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Arts and Science colleges across India offer
                      state-of-the-art facilities designed to provide students
                      with the best learning environment and resources for
                      academic excellence. These facilities enhance the
                      educational experience and prepare students for future
                      research and professional opportunities.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                      <div className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img
                          src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Arts/IMG_9402.jpg?updatedAt=1742806152397"
                          alt="Library Resources"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-lg font-semibold">
                            Library Resources
                          </h3>
                          <p className="text-sm text-white/90">
                            Extensive collections of books, journals, and
                            digital resources
                          </p>
                        </div>
                      </div>

                      <div className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img
                          src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                          alt="Language Labs"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-lg font-semibold">
                            Language Labs
                          </h3>
                          <p className="text-sm text-white/90">
                            Audio-visual equipment for language learning and
                            phonetics
                          </p>
                        </div>
                      </div>

                      <div className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img
                          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                          alt="Art Studios"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-lg font-semibold">Art Studios</h3>
                          <p className="text-sm text-white/90">
                            Creative spaces for visual arts, painting, and
                            sculpture
                          </p>
                        </div>
                      </div>

                      <div className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img
                          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                          alt="Psychology Laboratory"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-lg font-semibold">
                            Psychology Laboratory
                          </h3>
                          <p className="text-sm text-white/90">
                            Equipment for psychological experiments and
                            assessments
                          </p>
                        </div>
                      </div>

                      <div className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img
                          src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                          alt="Digital Media Center"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-lg font-semibold">
                            Digital Media Center
                          </h3>
                          <p className="text-sm text-white/90">
                            Advanced equipment for media production and
                            journalism
                          </p>
                        </div>
                      </div>

                      <div className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img
                          src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Arts/11.png?updatedAt=1742806149653"
                          alt="Science Labs"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-lg font-semibold">
                            Science Labs
                          </h3>
                          <p className="text-sm text-white/90">
                            Well-equipped labs for physics, chemistry, and
                            biology
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6 mb-8">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4">
                        Facility Highlights
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-[#9f0712] mb-1">
                            Modern Libraries
                          </h4>
                          <p className="text-sm text-gray-700">
                            State-of-the-art libraries with extensive physical
                            and digital collections, research spaces, and
                            specialized archives for various disciplines.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-[#9f0712] mb-1">
                            Research Infrastructure
                          </h4>
                          <p className="text-sm text-gray-700">
                            Dedicated research centers with advanced equipment
                            and resources for faculty and student research
                            across disciplines.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-[#9f0712] mb-1">
                            Technology Integration
                          </h4>
                          <p className="text-sm text-gray-700">
                            Smart classrooms, digital resources, and online
                            learning platforms to enhance educational
                            experiences and accessibility.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-[#9f0712] mb-1">
                            Cultural Spaces
                          </h4>
                          <p className="text-sm text-gray-700">
                            Auditoriums, galleries, and performance spaces for
                            cultural activities, exhibitions, and artistic
                            expression.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                      <div className="md:w-1/3">
                        <img
                          src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                          alt="Cultural Auditorium"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-semibold text-[#9f0712] mb-2">
                          Cultural Auditorium
                        </h3>
                        <p className="text-gray-700">
                          State-of-the-art venues for performances, seminars,
                          and cultural events are a central feature of Arts and
                          Science colleges in India. These spaces host academic
                          conferences, cultural festivals, theatrical
                          productions, and guest lectures, enriching the
                          educational experience beyond the classroom. Most top
                          colleges feature auditoriums with professional
                          acoustics and lighting systems to support a wide range
                          of performances and events.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "experience" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 md:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    className="w-full h-full object-cover"
                    alt="Student Experience"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 sm:p-8 md:p-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        International Student Experience
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6">
                      International students in India's Arts and Science
                      programs enjoy a uniquely enriching experience that blends
                      academic excellence with cultural immersion. Beyond the
                      classroom, students discover India's incredible diversity
                      through festivals, traditions, cuisines, and landscapes,
                      creating memories and connections that last a lifetime.
                    </p>

                    <div className="bg-red-50 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4 text-center">
                        International Voices
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#9f0712] mr-3 font-bold">
                              K
                            </div>
                            <div>
                              <p className="font-medium">Kumaresan Ramasamy</p>
                              <p className="text-xs text-gray-500">
                                Research scholar
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 italic">
                            "I joined my PhD through Mayilon consultants guide,
                            They are professional in guiding and providing full
                            support till University admission. I got through
                            various stages of admission process and all taken
                            with smooth guidance, Even efter a long , I could
                            get guidance whenever needed."
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#9f0712] mr-3 font-bold">
                              S
                            </div>
                            <div>
                              <p className="font-medium">Santhosh </p>
                              <p className="text-xs text-gray-500">Student</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 italic">
                            "Mayilon educational consultants helped me to join
                            my Part time Course in B.E Mechanical Engineering. I
                            had varities of college options and claritz in
                            choosing mz desired college. They are professionals
                            in guiding based on our situation and needs."
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#9f0712] mr-3 font-bold">
                              J
                            </div>
                            <div>
                              <p className="font-medium">Juhanitha Saaini</p>
                              <p className="text-xs text-gray-500">
                                Bio tech student
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 italic">
                            "Myself and my friend together got admissions in
                            same college, Mayilon keep their promises, We just
                            got exam dates and all the admission dates as
                            promised. Everytime we are getting direct
                            information and clear guidance. No false promises
                            and possibility scenarios are the speciality of
                            these consultants. "
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                        <div className="md:flex">
                          <div className="md:shrink-0 md:w-1/3">
                            <img
                              className="h-48 w-full object-cover md:h-full"
                              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                              alt="Academic Environment"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="uppercase tracking-wide text-sm text-[#9f0712] font-bold mb-1">
                              Academic Experience
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Global Perspective in Education
                            </h3>
                            <p className="text-gray-700">
                              International students benefit from India's unique
                              approach to education that combines Western
                              academic rigor with Eastern philosophical
                              traditions. Classes often incorporate global case
                              studies while providing distinctive Indian
                              perspectives on world issues. The faculty at top
                              institutions includes professors with
                              international degrees and research experience,
                              ensuring education meets global standards while
                              offering unique cultural insights.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                        <div className="md:flex">
                          <div className="md:shrink-0 md:w-1/3">
                            <img
                              className="h-48 w-full object-cover md:h-full"
                              src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                              alt="Cultural Immersion"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="uppercase tracking-wide text-sm text-[#9f0712] font-bold mb-1">
                              Cultural Immersion
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Experiencing India's Living Heritage
                            </h3>
                            <p className="text-gray-700">
                              Studying in India offers unparalleled cultural
                              immersion opportunities. International students
                              participate in traditional festivals, cultural
                              workshops, and heritage tours organized
                              specifically for foreign students. Many
                              universities pair international students with
                              local buddies to help navigate cultural nuances
                              and provide authentic local experiences. This
                              cultural exposure becomes a valuable
                              differentiator in global career markets,
                              demonstrating adaptability and cross-cultural
                              competence.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                        <div className="md:flex">
                          <div className="md:shrink-0 md:w-1/3">
                            <img
                              className="h-48 w-full object-cover md:h-full"
                              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                              alt="Career Advantages"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="uppercase tracking-wide text-sm text-[#9f0712] font-bold mb-1">
                              Global Career Advantages
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Standout Credentials in a Global Market
                            </h3>
                            <p className="text-gray-700">
                              International graduates from Indian institutions
                              stand out to global employers seeking diversity of
                              thought and experience. As multinational
                              corporations expand operations in India and across
                              Asia, graduates with firsthand understanding of
                              Indian business culture and society are
                              increasingly valued. Many programs include
                              internships with international companies operating
                              in India, providing practical experience in one of
                              the world's fastest-growing major economies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 border-l-4 border-[#9f0712] bg-red-50">
                      <h3 className="text-[#9f0712] font-semibold mb-2">
                        Safety and Support for International Students
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Leading Indian institutions prioritize the safety and
                        wellbeing of international students with dedicated
                        international student offices, 24/7 support services,
                        secure campus environments, and special orientation
                        programs addressing practical aspects of living in
                        India. Many universities offer international student
                        housing with enhanced security and amenities catering to
                        foreign students' needs.
                      </p>
                      <p className="text-gray-700">
                        The Indian government has simplified visa processes for
                        international students and introduced special provisions
                        allowing part-time work opportunities during studies.
                        Comprehensive health insurance packages are available
                        specifically designed for international students,
                        ensuring access to quality healthcare throughout their
                        stay.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "skills" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 md:h-72">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/MEC/photo-1628440501245-393606514a9e_q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1743412185948"
                    className="w-full h-full object-cover"
                    alt="Skills through Arts and Science Education"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 sm:p-8 md:p-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Skills Earned through Arts and Science Education
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Arts and Science education in India equips students with a
                      diverse set of skills that are highly valued across
                      industries and professions. These skills foster
                      intellectual growth, creativity, and practical expertise,
                      preparing students for global opportunities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-[#9f0712] mb-3">
                              Critical Thinking
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Develop the ability to analyze complex problems,
                              evaluate evidence, and make informed decisions
                              through rigorous academic training.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-[#9f0712] mb-3">
                              Communication Skills
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Enhance written and verbal communication skills,
                              enabling effective expression of ideas and
                              collaboration in diverse settings.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-[#9f0712] mb-3">
                              Research and Analytical Skills
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Gain expertise in conducting research, analyzing
                              data, and interpreting findings across various
                              disciplines.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-[#9f0712] mb-3">
                              Creativity and Innovation
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Foster creativity and innovative thinking through
                              exposure to diverse perspectives and
                              problem-solving approaches.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4">
                        Additional Skills
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded shadow">
                          <h4 className="font-medium text-[#9f0712] mb-2">
                            Leadership
                          </h4>
                          <p className="text-sm text-gray-700">
                            Build leadership qualities through group projects,
                            extracurricular activities, and community
                            engagement.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                          <h4 className="font-medium text-[#9f0712] mb-2">
                            Cultural Competence
                          </h4>
                          <p className="text-sm text-gray-700">
                            Develop an understanding of diverse cultures and
                            global perspectives, enhancing adaptability in
                            international environments.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                          <h4 className="font-medium text-[#9f0712] mb-2">
                            Technical Proficiency
                          </h4>
                          <p className="text-sm text-gray-700">
                            Acquire technical skills in specialized fields such
                            as data analysis, laboratory techniques, and digital
                            tools.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                          <h4 className="font-medium text-[#9f0712] mb-2">
                            Ethical Awareness
                          </h4>
                          <p className="text-sm text-gray-700">
                            Learn to approach challenges with integrity and
                            ethical considerations, fostering responsible
                            decision-making.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "disciplines" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 md:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    className="w-full h-full object-cover"
                    alt="Arts and Science Disciplines"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 sm:p-8 md:p-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Major Disciplines
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Arts and Science education in India encompasses a diverse
                      range of disciplines that offer students pathways to
                      explore various aspects of human knowledge, expression,
                      and understanding of the natural world. These disciplines
                      are often interconnected, providing students with
                      opportunities for interdisciplinary learning and research.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="h-48 overflow-hidden">
                            <img
                              src="https://ik.imagekit.io/vituepzjm/MEC/Streams/Arts/photo-1522543558187-768b6df7c25c_q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1743138433396"
                              alt="Humanities"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-[#9f0712] mb-3">
                              Humanities
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Humanities programs in India offer comprehensive
                              study of literature, history, philosophy,
                              languages, and cultural studies. These courses
                              develop critical thinking, analytical writing, and
                              deep understanding of human experiences.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Literature",
                                "History",
                                "Philosophy",
                                "Languages",
                                "Cultural Studies",
                              ].map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-red-50 text-[#9f0712] text-xs rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="h-48 overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                              alt="Humanities"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-[#9f0712] mb-3">
                              Social Sciences
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Social Science programs cover disciplines like
                              economics, political science, sociology,
                              psychology, and anthropology. These fields examine
                              human behavior, social structures, and
                              institutions through scientific methodologies.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Economics",
                                "Political Science",
                                "Sociology",
                                "Psychology",
                                "Anthropology",
                              ].map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-red-50 text-[#9f0712] text-xs rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="h-48 overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                              alt="Natural Sciences"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-[#9f0712] mb-3">
                              Natural Sciences
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Natural Science programs offer rigorous training
                              in physics, chemistry, biology, mathematics, and
                              environmental sciences. These courses combine
                              theoretical knowledge with laboratory experiments
                              and field work.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Physics",
                                "Chemistry",
                                "Biology",
                                "Mathematics",
                                "Environmental Sciences",
                              ].map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-red-50 text-[#9f0712] text-xs rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9f0712] to-[#9f0712]/80 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="h-48 overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                              alt="Fine Arts"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-[#9f0712] mb-3">
                              Fine Arts
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Fine Arts programs encompass visual arts, music,
                              dance, theater, and other performing arts. These
                              programs blend traditional Indian art forms with
                              contemporary global practices.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Visual Arts",
                                "Music",
                                "Dance",
                                "Theater",
                                "Design",
                              ].map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-red-50 text-[#9f0712] text-xs rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-[#9f0712] mb-4">
                        Career Pathways
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded shadow">
                          <h4 className="font-medium text-[#9f0712] mb-2">
                            Humanities Careers
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Publishing and Media</li>
                            <li>• Education and Research</li>
                            <li>• Cultural Heritage Management</li>
                            <li>• Public Relations</li>
                            <li>• Civil Services</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                          <h4 className="font-medium text-[#9f0712] mb-2">
                            Social Sciences Careers
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Market Research</li>
                            <li>• Policy Analysis</li>
                            <li>• Social Work</li>
                            <li>• Human Resources</li>
                            <li>• International Relations</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                          <h4 className="font-medium text-[#9f0712] mb-2">
                            Science Careers
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Research and Development</li>
                            <li>• Healthcare Support</li>
                            <li>• Environmental Consulting</li>
                            <li>• Data Analysis</li>
                            <li>• Quality Control</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                          <h4 className="font-medium text-[#9f0712] mb-2">
                            Fine Arts Careers
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Professional Practice</li>
                            <li>• Art Education</li>
                            <li>• Museum Curation</li>
                            <li>• Performance</li>
                            <li>• Creative Direction</li>
                          </ul>
                        </div>
                      </div>
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

export default ArtsAndScience;
