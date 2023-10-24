import React from "react";
import { motion } from "framer-motion";
import { slideLeft } from "../framerAnimations/motionValues";

function HeadlineHeader({ children }) {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <h1 className="bb-green color-white text-t-up ls-sm pb-2 font-s-lg pl-2 m-3">
        {children}
      </h1>
    </motion.div>
  );
}

export default HeadlineHeader;
