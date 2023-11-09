'use client'
import React from "react";
import { GridText } from "@/common/constant/GridText";
import { motion } from "framer-motion";
const Grid2 = () => {
  return (
    <div className="md:w-[25%] w-[40%] max-md:mt-[190px] max-sm:top-[150px] relative z-[9]">
      {GridText.map((item, index) => (
        <motion.div className="flex relative mb-10 px-2 flex-col" key={index}
        initial={{opacity:0, scale: 0.70}}
        animate={{opacity:1, scale: 1, transition: {type: 'spring', duration:2, delay: index * 0.3}}}
        >
          <h1 className="text-xl font-bold">{item.head}</h1>
          <h2 className="text-xs mt-5 line-clamp-3">{item.body}</h2>
          <div className="absolute left-0 top-[5px] h-[90px] w-[1px] bg-white"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Grid2;
