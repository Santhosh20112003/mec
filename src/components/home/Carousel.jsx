import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const slides = [
    {
      image:
        "https://ik.imagekit.io/vituepzjm/MEC/photo-1523050854058-8df90110c9f1_ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D&auto=format&fit=crop&w=1740&q=80?updatedAt=1743143209071",
      heading: "Global Education Solutions",
      buttonName: "Explore Degrees Offered",
      paragraph:
        "Connect with Top Indian Universities and programs tailored to your career goals.",
      link: "/list-of-degrees",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      heading: "Expert Academic Counseling",
      buttonName: "Get Academic Assistance",
      paragraph:
        "Our advisors provide step-by-step guidance through the entire application process.",
      link: "/contact",
    },
    {
      image:
        "https://ik.imagekit.io/vituepzjm/MEC/photo-1554224155-6726b3ff858f_ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D&auto=format&fit=crop&w=1742&q=80?updatedAt=1743143275336",
      heading: "Financial Aid Resources",
      buttonName: "Hear Students Stories",
      paragraph:
        "Discover grants, scholarships and funding options to support your international education.",
      link: "/students",
    },
    {
      image:
        "https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Post-Arrival Registration",
      buttonName: "Consult with Us",
      paragraph:
        "Important information about FRRO registration and compliance with local regulations after arriving in India.",
      link: `/contact/${btoa("Post-Arrival Registration & Visa process")}`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Transportation & Accommodation Services",
      buttonName: "View Service Packages",
      paragraph:
        "Convenient transportation and comfortable accommodation arrangements available for foreign students in India on a pay-per-use basis.",
      link: `/contact/${btoa("Transportation & Accommodation Services")}`,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isPlaying, setIsPlaying] = useState(true);
  const slideRef = useRef();

  // Animation variants for slides - pure sliding animation
  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction === "right" ? "100%" : "-100%",
        zIndex: 0,
      };
    },
    center: {
      x: 0,
      zIndex: 1,
    },
    exit: (direction) => {
      return {
        x: direction === "right" ? "-100%" : "100%",
        zIndex: 0,
      };
    },
  };

  // Animation variants for content - adjusted for slide effect
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    if (isPlaying) {
      const slideInterval = setInterval(() => {
        setDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    slideRef.current = touchStartX;
  };

  const handleTouchMove = (e) => {
    if (!slideRef.current) return;
    const touchEndX = e.touches[0].clientX;
    const touchDiff = slideRef.current - touchEndX;

    if (touchDiff > 50) {
      nextSlide();
      slideRef.current = null;
    } else if (touchDiff < -50) {
      prevSlide();
      slideRef.current = null;
    }
  };

  return (
    <div
      className="relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="overflow-hidden relative h-[50vh] md:h-[75vh] w-full">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "tween",
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex}`}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-2xl text-center md:text-5xl font-bold"
                variants={textItemVariants}
              >
                {slides[currentIndex].heading}
              </motion.h2>

              <motion.p
                className="mt-4 break-words lg:mx-24 text-base md:text-xl text-center"
                variants={textItemVariants}
              >
                {slides[currentIndex].paragraph}
              </motion.p>

              <motion.div
                variants={textItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={slides[currentIndex].link}
                  className="mt-6 inline-block bg-[#800000] hover:bg-[#a00000] text-white font-semibold py-3 px-6 rounded-xl"
                >
                  {slides[currentIndex].buttonName}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 hidden md:flex cursor-pointer left-4 transform -translate-y-1/2 bg-[#212121]/80 hover:bg-[#212121]/90 active:scale-95 text-white p-3 rounded-full z-10"
        onClick={prevSlide}
      >
        <FaArrowLeft size={20} />
      </button>

      <button
        className="absolute top-1/2 hidden md:flex cursor-pointer right-4 transform -translate-y-1/2 bg-[#212121]/80 hover:bg-[#212121]/90 active:scale-95 text-white p-3 rounded-full z-10"
        onClick={nextSlide}
      >
        <FaArrowRight size={20} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/50 scale-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        className="absolute bottom-4 left-4 bg-[#212121]/80 hover:bg-[#212121]/90 active:scale-95 text-white p-3 rounded-full z-10"
        onClick={togglePlayPause}
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
      </button>
    </div>
  );
};

export default Carousel;
