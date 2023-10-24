import React from "react";
import { motion } from "framer-motion";
import { slideLeft } from "../framerAnimations/motionValues";

function ContentHeader({ children }) {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full"
    >
      <h3 className="bb-l-green color-white text-t-cap ls-xs pb-2 pl-2 m-3">
        {children}
      </h3>
    </motion.div>
  );
}

export default ContentHeader;
