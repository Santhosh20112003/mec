import React, { useState, useEffect } from "react";
import { AiOutlineForm, AiOutlineGlobal } from "react-icons/ai";
import { FaSearch, FaPassport, FaGraduationCap, FaUserTie } from "react-icons/fa";
import { IoBookSharp, IoSchool } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

function ForeignStudents() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalTime = 3000; // 3 seconds

  useEffect(() => {
    let interval;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prevStep) => {
          // When we reach the end (step 4), jump back to start (step 1)
          if (prevStep === 4) {
            return 1;
          }
          // Otherwise just move to the next step
          return prevStep + 1;
        });
      }, intervalTime);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStepClick = (step) => {
    setActiveStep(step);
    // Reset auto-cycling when user manually selects a step
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="text-gray-900 body-font bg-white">
      <div className="py-12"> 
        {/* Header with gradient background */}
        <div className="flex flex-col text-center px-5 w-full mb-16 py-12 bg-gradient-to-r from-[#800000]/10 to-[#800000]/5 rounded-lg">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-6 text-[#800000]">
            Guide for Foreign Students
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            Study from anywhere in the world with our comprehensive guidance and
            support. We help you navigate the process of studying in India with
            ease.
          </p>
        </div>
        
        {/* Services Section with Cards */}
        <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-5">
          {/* Service Card 1 */}
          <div className="p-6 border border-[#800000]/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#800000]/60 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#800000]/10 text-[#800000] mb-4">
                <FaUserTie className="w-6 h-6" />
              </div>
              <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font ml-3">
                Academic Counselling
              </h2>
            </div>
            <p className="leading-relaxed text-base">
              We provide academic counselling based on your current education
              level and aspirations.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="p-6 border border-[#800000]/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#800000]/60 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#800000]/10 text-[#800000] mb-4">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font ml-3">
                Course Selection Guidance
              </h2>
            </div>
            <p className="leading-relaxed text-base">
              We present a variety of course options and guide you to select the
              best one for your goals.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="p-6 border border-[#800000]/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#800000]/60 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#800000]/10 text-[#800000] mb-4">
                <IoSchool className="w-6 h-6" />
              </div>
              <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font ml-3">
                College Admissions Support
              </h2>
            </div>
            <p className="leading-relaxed text-base">
              We offer full end-to-end guidance for college admissions, from
              choosing the university to graduation.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="p-6 border border-[#800000]/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#800000]/60 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#800000]/10 text-[#800000] mb-4">
                <FaPassport className="w-6 h-6" />
              </div>
              <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font ml-3">
                Visa and Travel Support
              </h2>
            </div>
            <p className="leading-relaxed text-base">
              We provide support for Indian Visa, travel to India, food and
              accommodation, and visit to colleges for admission processes.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="p-6 border border-[#800000]/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#800000]/60 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#800000]/10 text-[#800000] mb-4">
                <AiOutlineGlobal className="w-6 h-6" />
              </div>
              <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font ml-3">
                Special Course Guidance
              </h2>
            </div>
            <p className="leading-relaxed text-base">
              We guide you to special courses that do not require you to visit
              and stay at the college location.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="p-6 border border-[#800000]/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#800000]/60 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#800000]/10 text-[#800000] mb-4">
                <MdOutlineOnlinePrediction className="w-6 h-6" />
              </div>
              <h2 className="text-lg sm:text-xl text-[#800000] font-medium title-font ml-3">
                Online Course Guidance
              </h2>
            </div>
            <p className="leading-relaxed text-base">
              We provide guidance for online courses that help you enrich your
              knowledge and gain certification.
            </p>
          </div>
        </div>
        
        {/* Interactive College Admission Flow */}
        <div className="px-12 bg-gradient-to-br from-[#800000]/10 to-white md:px-12 py-12 rounded-lg shadow-sm">
          <h2 className="text-[#800000] text-center capitalize text-3xl font-semibold leading-normal mb-8">
            College Admission Flow
          </h2>
          {/* <div className="flex flex-wrap justify-center mb-8">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => handleStepClick(step)}
                className={`mx-2 mb-4 px-4 py-2 rounded-full transition-all ${
                  activeStep === step
                    ? "bg-[#800000] text-white"
                    : "bg-[#800000]/10 text-[#800000] hover:bg-[#800000]/20"
                }`}
              >
                Step {step}
              </button>
            ))}
            <button 
              onClick={togglePlayPause} 
              className="ml-4 mb-4 px-4 py-2 rounded-full bg-[#800000] text-white hover:bg-[#800000]/80 transition-all flex items-center"
            >
              {isPlaying ? <BsPauseFill className="mr-1" /> : <BsPlayFill className="mr-1" />}
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div> */}
          <ol className="items-center mx-auto max-w-7xl lg:flex">
            <li className={`relative mb-10 lg:mb-0 ${activeStep === 1 ? "scale-105 opacity-100" : "opacity-60"} transition-all duration-300`}>
              <div className="flex items-center">
                <div className={`z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ring-0 ring-white shrink-0 ${activeStep === 1 ? "bg-[#800000] text-white" : "bg-[#800000]/10 text-[#800000]"}`}>
                  <FaSearch className="size-4" />
                </div>
                <div className="hidden lg:flex w-full bg-[#800000]/10 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-[#800000]">
                  Step 1: Choose the university
                </h3>
                <p className="text-base font-normal break-words text-gray-900">
                  Select the university that best fits your academic and career
                  goals.
                </p>
              </div>
            </li>
            <li className={`relative mb-6 lg:mb-0 ${activeStep === 2 ? "scale-105 opacity-100" : "opacity-60"} transition-all duration-300`}>
              <div className="flex items-center">
                <div className={`z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ring-0 ring-white shrink-0 ${activeStep === 2 ? "bg-[#800000] text-white" : "bg-[#800000]/10 text-[#800000]"}`}>
                  <AiOutlineForm className="size-4" />
                </div>
                <div className="hidden lg:flex w-full bg-[#800000]/10 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-[#800000]">
                  Step 2: Submit application
                </h3>
                <p className="text-base font-normal text-gray-900">
                  Complete and submit your application to the university.
                </p>
              </div>
            </li>
            <li className={`relative mb-6 lg:mb-0 ${activeStep === 3 ? "scale-105 opacity-100" : "opacity-60"} transition-all duration-300`}>
              <div className="flex items-center">
                <div className={`z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ring-0 ring-white shrink-0 ${activeStep === 3 ? "bg-[#800000] text-white" : "bg-[#800000]/10 text-[#800000]"}`}>
                  <IoBookSharp className="size-4" />
                </div>
                <div className="hidden lg:flex w-full bg-[#800000]/10 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-[#800000]">
                  Step 3: University interview
                </h3>
                <p className="md:text-base font-normal text-gray-900">
                  Attend the university interview and entrance exam if required.
                </p>
              </div>
            </li>
            <li className={`relative mb-6 lg:mb-0 ${activeStep === 4 ? "scale-105 opacity-100" : "opacity-60"} transition-all duration-300`}>
              <div className="flex items-center">
                <div className={`z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ring-0 ring-white shrink-0 ${activeStep === 4 ? "bg-[#800000] text-white" : "bg-[#800000]/10 text-[#800000]"}`}>
                  <TiTick className="size-5" />
                </div>
                <div className="hidden lg:flex w-full bg-[#800000]/10 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-[#800000]">
                  Step 4: College enrolment
                </h3>
                <p className="md:text-base font-normal text-gray-900">
                  Complete the enrolment process and start your education
                  journey.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ForeignStudents;
