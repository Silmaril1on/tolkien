import React from "react";
import star from "../assets/star.png";
import { headerZoom } from "../framerAnimations/motionValues";
import { motion } from "framer-motion";

function SectionHeader({ children }) {
  return (
    <motion.div
      variants={headerZoom}
      initial="hidden"
      whileInView="visible"
      className="jc-sa row-c"
    >
      <img className="p-2" src={star} alt="star" />
      <h1 className="font-f-kelt  text-t-cap ls-md pb-2 res-font golden-text-style">
        {children}
      </h1>
      <img className="p-2" src={star} alt="star" />
    </motion.div>
  );
}

export default SectionHeader;
