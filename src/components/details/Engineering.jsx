import React, { useState } from "react";

function Engineering() {
  const [activeTab, setActiveTab] = useState("intro");
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
          className="w-full h-[250px] md:h-[400px] object-cover brightness-75"
          alt="Engineering Education in India"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">
            Engineering Education in India
          </h1>
          <p className="text-base md:text-xl text-white max-w-2xl text-center drop-shadow-md">
            Discover world-class opportunities in one of the global hubs for technical education
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto space-x-2 md:space-x-4 mb-8 pb-2 scrollbar-hide">
          <button 
            onClick={() => setActiveTab("intro")}
            className={`px-4 md:px-6 py-2 md:py-3 font-medium text-sm md:text-lg rounded-lg transition whitespace-nowrap
              ${activeTab === "intro" 
                ? "bg-red-800 text-white shadow-md" 
                : "bg-white text-red-800 hover:bg-red-50"}`}>
            Introduction
          </button>
          <button 
            onClick={() => setActiveTab("accreditation")}
            className={`px-4 md:px-6 py-2 md:py-3 font-medium text-sm md:text-lg rounded-lg transition whitespace-nowrap
              ${activeTab === "accreditation" 
                ? "bg-red-800 text-white shadow-md" 
                : "bg-white text-red-800 hover:bg-red-50"}`}>
            Accreditation
          </button>
          <button 
            onClick={() => setActiveTab("market")}
            className={`px-4 md:px-6 py-2 md:py-3 font-medium text-sm md:text-lg rounded-lg transition whitespace-nowrap
              ${activeTab === "market" 
                ? "bg-red-800 text-white shadow-md" 
                : "bg-white text-red-800 hover:bg-red-50"}`}>
            Market
          </button>
          <button 
            onClick={() => setActiveTab("laboratory")}
            className={`px-4 md:px-6 py-2 md:py-3 font-medium text-sm md:text-lg rounded-lg transition whitespace-nowrap
              ${activeTab === "laboratory" 
                ? "bg-red-800 text-white shadow-md" 
                : "bg-white text-red-800 hover:bg-red-50"}`}>
            Labs
          </button>
          <button 
            onClick={() => setActiveTab("experience")}
            className={`px-4 md:px-6 py-2 md:py-3 font-medium text-sm md:text-lg rounded-lg transition whitespace-nowrap
              ${activeTab === "experience" 
                ? "bg-red-800 text-white shadow-md" 
                : "bg-white text-red-800 hover:bg-red-50"}`}>
            Experience
          </button>
          <button 
            onClick={() => setActiveTab("skills")}
            className={`px-4 md:px-6 py-2 md:py-3 font-medium text-sm md:text-lg rounded-lg transition whitespace-nowrap
              ${activeTab === "skills" 
                ? "bg-red-800 text-white shadow-md" 
                : "bg-white text-red-800 hover:bg-red-50"}`}>
            Skills
          </button>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
          {activeTab === "intro" && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Welcome to Engineering in India</h2>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Engineering is one of the most sought-after career paths in India,
                    offering diverse opportunities in fields like Computer Science,
                    Mechanical, Civil, Electrical, and more. With over 6,000 engineering
                    colleges and a growing demand for skilled professionals, India is a
                    global hub for engineering education.
                  </p>
                  
                  <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-800">
                    <h3 className="font-semibold text-lg text-red-800">Why Choose India?</h3>
                    <ul className="list-disc ml-5 mt-2 text-gray-700">
                      <li>World-class institutions with affordable education</li>
                      <li>Diverse specializations and research opportunities</li>
                      <li>Strong industry connections and placement records</li>
                      <li>Rich cultural experience during your studies</li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Indian Engineering Campus" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  
                  <p className="mt-4 text-center text-sm text-gray-500 italic">
                    Modern engineering campus in India featuring cutting-edge facilities
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "accreditation" && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Accreditation & Quality Assurance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-800">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-red-800">National Assessment and Accreditation Council (NAAC)</h3>
                  <p className="text-gray-700 text-base relative z-10">
                    NAAC evaluates colleges based on parameters such as curriculum, infrastructure, research, and student outcomes.
                    The grading system ranges from A++ to C, with A++ indicating the highest level of quality. NAAC accreditation
                    ensures that institutions maintain high academic standards and continuously improve their educational offerings.
                  </p>
                  
                  <div className="mt-4 flex items-center justify-center">
                    <span className="inline-block px-3 py-1 bg-red-800 text-white rounded text-sm mr-2">Grade A++</span>
                    <span className="inline-block px-3 py-1 bg-red-700 text-white rounded text-sm mr-2">Grade A+</span>
                    <span className="inline-block px-3 py-1 bg-red-600 text-white rounded text-sm mr-2">Grade A</span>
                    <span className="inline-block px-3 py-1 bg-red-500 text-white rounded text-sm">Grade B++</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-800">
                      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-red-800">All India Council for Technical Education (AICTE)</h3>
                  <p className="text-gray-700 text-base relative z-10">
                    AICTE regulates and maintains the standards of technical education in India. It approves new institutions,
                    sets curriculum standards, and ensures that engineering colleges have adequate infrastructure, faculty, and resources.
                    AICTE approval is mandatory for all technical institutions in India offering courses in engineering, technology, 
                    architecture, pharmacy, and management.
                  </p>
                  
                  <div className="mt-4 text-center">
                    <span className="inline-block px-4 py-2 bg-red-800 text-white rounded-lg text-sm font-medium">
                      AICTE Approved Institution
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-lg text-gray-700">
                These accreditations ensure that students receive a world-class education,
                equipping them with the skills needed to excel in a competitive global market.
              </p>
            </div>
          )}

          {activeTab === "market" && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Market Position</h2>
              
              <div className="bg-white rounded-lg overflow-hidden mb-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 bg-red-800 text-white p-6">
                    <h3 className="text-xl font-bold mb-4">Key Statistics</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-red-800 flex items-center justify-center font-bold text-xl mr-4">
                          1.5M+
                        </div>
                        <div>Engineers produced annually</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-red-800 flex items-center justify-center font-bold text-xl mr-4">
                          6K+
                        </div>
                        <div>Engineering institutions</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-red-800 flex items-center justify-center font-bold text-xl mr-4">
                          23
                        </div>
                        <div>IITs nationwide</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-red-800 flex items-center justify-center font-bold text-xl mr-4">
                          31
                        </div>
                        <div>NITs across India</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-6">
                    <p className="text-gray-700 text-lg mb-4">
                      Engineering education in India holds a prominent position in the global academic landscape, contributing 
                      significantly to the country's technical workforce. India is home to some of the world's most prestigious
                      engineering institutions.
                    </p>
                    
                    <h4 className="font-semibold text-red-800 mb-2">Top Institutions:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                      <li>Indian Institutes of Technology (IITs)</li>
                      <li>National Institutes of Technology (NITs)</li>
                      <li>Birla Institute of Technology and Science (BITS Pilani)</li>
                      <li>Indian Institute of Science (IISc), Bangalore</li>
                      <li>Delhi Technological University (DTU)</li>
                    </ul>
                    
                    <p className="text-gray-700">
                      These institutions are recognized for their rigorous academic programs, cutting-edge research, and strong 
                      industry connections, ensuring high standards of quality and relevance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "laboratory" && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6 text-center">State-of-the-Art Laboratory Facilities</h2>
              
              <p className="text-center text-lg text-gray-700 mb-8">
                Indian engineering institutions pride themselves on offering world-class laboratory facilities across various disciplines.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                <div className="overflow-hidden rounded-lg border border-gray-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="AI Laboratory" 
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-red-800">AI & ML Laboratory</h3>
                    <p className="text-gray-600">Advanced computational infrastructure for artificial intelligence research</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg border border-gray-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1581093804475-577d72e35323?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Physics Lab" 
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-red-800">Physics Laboratory</h3>
                    <p className="text-gray-600">Advanced equipment for experiments and material testing</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg border border-gray-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Electronics Lab" 
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-red-800">Electronics Laboratory</h3>
                    <p className="text-gray-600">Modern electronic testing and circuit design facilities</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg border border-gray-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Mechanical Lab" 
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-red-800">Mechanical Workshop</h3>
                    <p className="text-gray-600">Industry-standard tools and machinery for practical training</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg border border-gray-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Research Center" 
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-red-800">Research Center</h3>
                    <p className="text-gray-600">Cutting-edge facilities for interdisciplinary research</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg border border-gray-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1581093458791-9d9fd5727d7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Robotics Lab" 
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-red-800">Robotics Laboratory</h3>
                    <p className="text-gray-600">Advanced robotics and automation technology center</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-50 rounded-lg text-center">
                <p className="text-red-800 font-medium">
                  Most engineering institutions in India invest heavily in laboratory infrastructure to provide students 
                  with hands-on experience using industry-standard equipment.
                </p>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6 text-center">Student Experience</h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Students in campus" 
                    className="rounded-lg w-full h-auto object-cover mb-4"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-800 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                          <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-800">Academic Environment</h3>
                        <p className="text-gray-700 text-sm">
                          Challenging coursework with emphasis on both theoretical knowledge and practical applications.
                          Competitive environment that pushes students to excel.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-800 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-800">Cultural Diversity</h3>
                        <p className="text-gray-700 text-sm">
                          Exposure to India's rich cultural heritage and diverse student population from around the world,
                          creating a global learning environment.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-800 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                          <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                          <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-800">Extracurricular Activities</h3>
                        <p className="text-gray-700 text-sm">
                          Vibrant campus life with technical festivals, cultural events, sports competitions,
                          and numerous student-led clubs and organizations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-800 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-800">Career Opportunities</h3>
                        <p className="text-gray-700 text-sm">
                          Robust placement cells connecting students with top employers.
                          Internship programs providing real-world experience and industry exposure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-800 to-red-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Alumni Success Stories</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <blockquote className="italic mb-4">
                      "The rigorous curriculum and research opportunities at IIT Delhi prepared me exceptionally well for my career in AI research at Google."
                    </blockquote>
                    <div className="font-semibold">- Priya Sharma, Google AI</div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <blockquote className="italic mb-4">
                      "My engineering education in India provided me with both technical skills and the adaptability to succeed in global markets."
                    </blockquote>
                    <div className="font-semibold">- Rahul Patel, Microsoft</div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <blockquote className="italic mb-4">
                      "The entrepreneurial ecosystem at my engineering college gave me the foundation to launch my own successful tech startup."
                    </blockquote>
                    <div className="font-semibold">- Amit Kumar, TechInnovate</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6 text-center" id="sector">Engineering Disciplines</h2>
              
              <p className="text-center text-lg text-gray-700 mb-8">
                Indian engineering institutions offer specialized education across numerous disciplines, 
                each preparing students for different career paths.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-800">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-red-800 mb-2">Aeronautical Engineering</h3>
                    <p className="text-gray-700">
                      This dynamic field focuses on the design, development, and maintenance of aircraft and
                      spacecraft. Students learn about aerodynamics, propulsion systems, flight mechanics, 
                      and avionics, gaining the skills to design cutting-edge aerospace technologies.
                    </p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Aircraft Design</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Propulsion Systems</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Aerodynamics</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-800">
                        <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-red-800 mb-2">Computer Science & Engineering</h3>
                    <p className="text-gray-700">
                      One of India's most sought-after disciplines, focusing on programming, algorithm design,
                      artificial intelligence, data science, and software development. Graduates work in
                      diverse sectors from tech giants to startups.
                    </p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">AI/ML</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Web Development</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Data Science</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-800">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-red-800 mb-2">Electronics & Communication Engineering</h3>
                    <p className="text-gray-700">
                      This field drives advancements in communication systems, embedded technologies, and electronic devices. 
                      ECE graduates work in telecommunications, robotics, consumer electronics, and semiconductor industries.
                    </p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Embedded Systems</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">VLSI Design</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Signal Processing</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-800">
                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-red-800 mb-2">Mechanical Engineering</h3>
                    <p className="text-gray-700">
                      This broad field focuses on the design, analysis, manufacturing, and maintenance of mechanical systems. 
                      Mechanical engineers work on diverse projects, from energy-efficient HVAC systems to advanced automotive components.
                    </p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">CAD/CAM</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Thermodynamics</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Robotics</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-red-800 mb-4">Other Popular Engineering Specializations</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-3 py-2 bg-red-800 text-white rounded-full">Civil Engineering</span>
                  <span className="px-3 py-2 bg-red-800 text-white rounded-full">Chemical Engineering</span>
                  <span className="px-3 py-2 bg-red-800 text-white rounded-full">Biotechnology</span>
                  <span className="px-3 py-2 bg-red-800 text-white rounded-full">Electrical Engineering</span>
                  <span className="px-3 py-2 bg-red-800 text-white rounded-full">Petroleum Engineering</span>
                  <span className="px-3 py-2 bg-red-800 text-white rounded-full">Nuclear Engineering</span>
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
