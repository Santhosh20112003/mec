import React, { useState } from "react";
import { motion } from "framer-motion";

function Banner() {
  const [close, setClose] = useState(false);
  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };
  return (
    <motion.div className="text-center block break-words px-5 py-2 bg-[#800000] text-white ">
      <h1 className="text-sm">
        🚀 Study at India's top universities with expert faculty, world-class
        infrastructure, and career support—access quality education from
        anywhere! 🌍📚
      </h1>
    </motion.div>
  );
}

export default Banner;
