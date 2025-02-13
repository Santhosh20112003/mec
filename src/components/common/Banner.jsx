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
                🌐 Welcome to our website! Discover amazing content, connect with others, and stay updated with the latest trends.
            </h1>
        </motion.div>
    );
}

export default Banner;