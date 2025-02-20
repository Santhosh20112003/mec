import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const slides = [
    {
      image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/283/wide_fullhd_webp_hungary-budapest.webp",
      heading: "Explore Top Universities",
      paragraph: "Discover the best universities around the world and find the perfect fit for your education.",
      link: "/list-of-degrees"
    },
    {
      image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/355/wide_fullhd_cecilia_larsson_lantz-students-2622.jpg",
      heading: "Personalized Guidance",
      paragraph: "Get expert advice and personalized guidance to help you achieve your study abroad dreams.",
      link: "/contact"
    },
    {
      image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/304/wide_fullhd_united-kingdom.jpg",
      heading: "Scholarship Opportunities",
      paragraph: "Learn about various scholarship opportunities to fund your education abroad.",
      link: "/students"
    }
  ];  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isPlaying, setIsPlaying] = useState(true);
  const slideRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      const slideInterval = setInterval(() => {
        setDirection('right');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
      return () => clearInterval(slideInterval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
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
    <div className="relative w-full" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className="overflow-hidden relative h-[80vh] lg:h-[75vh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform duration-700 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : direction === 'right' ? 'translate-x-full' : '-translate-x-full'
            } ${index === (currentIndex - 1 + slides.length) % slides.length && direction === 'right' ? '-translate-x-full' : ''}`}
          >
            <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 pt-12 bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.heading}</h2>
              <p className="mt-4 text-lg md:text-xl text-center">{slide.paragraph}</p>
              <Link to={slide.link} className="mt-6 bg-[#800000] hover:bg-[#a00000] text-white font-semibold py-3 px-6 rounded-lg">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 hidden md:block cursor-pointer left-4 transform -translate-y-1/2 bg-[#212121]/80 active:scale-95 hover:bg-[#212121]/80 text-white p-3 rounded-full"
        onClick={prevSlide}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 hidden md:block cursor-pointer right-4 transform -translate-y-1/2 bg-[#212121]/80 active:scale-95 hover:bg-[#212121]/80 text-white p-3 rounded-full"
        onClick={nextSlide}
      >
        <FaArrowRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#800000]' : 'bg-[#800000]/5'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button
        className="absolute bottom-4 left-4 bg-[#212121]/80 active:scale-95 hover:bg-[#212121]/80 text-white p-3 rounded-full"
        onClick={togglePlayPause}
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
      </button>
    </div>
  );
};

export default Carousel;

