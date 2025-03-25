import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Intro({
  title = "Explore Indian University Degrees",
  description = "Discover comprehensive degree programs offered by top universities across India to advance your education and career prospects.",
  highlights = [
    "Bachelor's, Master's and Doctoral programs",
    "Professional and technical courses",
    "Traditional and emerging fields of study",
  ],
  imageUrl = "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
}) {
  return (
    <section
      className="relative flex items-center justify-center py-20 px-4 min-h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#600000]/30 via-[#600000]/20 to-transparent"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md"
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          <HashLink
            to="#search-degree"
            className="px-8 py-3 bg-[#600000] text-white font-medium rounded-md shadow-lg inline-block"
          >
            Find Your Degree
          </HashLink>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;
