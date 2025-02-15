import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const autoSlide = true;
  const autoSlideInterval = 3000;
  const slides = [
    {
      image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/283/wide_fullhd_webp_hungary-budapest.webp",
      heading: "Explore Top Universities",
      paragraph: "Discover the best universities around the world and find the perfect fit for your education.",
      link: "/universities"
    },
    {
      image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/355/wide_fullhd_cecilia_larsson_lantz-students-2622.jpg",
      heading: "Personalized Guidance",
      paragraph: "Get expert advice and personalized guidance to help you achieve your study abroad dreams.",
      link: "/guidance"
    },
    {
      image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/304/wide_fullhd_united-kingdom.jpg",
      heading: "Scholarship Opportunities",
      paragraph: "Learn about various scholarship opportunities to fund your education abroad.",
      link: "/scholarships"
    }
  ];  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setDirection('right');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, slides.length]);

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden relative h-[70vh] w-full">
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
              <p className="mt-4 text-lg md:text-xl">{slide.paragraph}</p>
              <Link to={slide.link} className="mt-6 bg-[#800000] hover:bg-[#a00000] text-white font-semibold py-3 px-6 rounded-lg">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 cursor-pointer left-4 transform -translate-y-1/2 bg-[#212121] hover:bg-[#212121]/80 text-white p-3 rounded-full"
        onClick={prevSlide}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 cursor-pointer right-4 transform -translate-y-1/2 bg-[#212121] hover:bg-[#212121]/80 text-white p-3 rounded-full"
        onClick={nextSlide}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;

