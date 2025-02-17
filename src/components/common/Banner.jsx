import React, { useState } from "react";
import { motion } from 'framer-motion';

function Banner() {
    const [close, setClose] = useState(false);
    const show = {
        opacity: 1,
        display: "block"
    };

    const hide = {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };
    return (
        <motion.div onClick={() => { setClose(!close) }} animate={close ? hide : show} className="text-center block break-words cursor-pointer px-5 py-2 bg-[#800000] text-white ">
            <h1 className="text-sm">
                🌐 Explore our educational services, connect with expert counselors, and stay updated with the latest trends in education asks, and schedule all in one place.
            </h1>
        </motion.div>
    );
}

export default Banner;