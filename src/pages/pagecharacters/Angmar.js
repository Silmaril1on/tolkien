import React from "react";
import { glowingText } from "../../framerAnimations/motionValues";
import { motion } from "framer-motion";

function Angmar() {
  return (
    <div>
      <motion.h1
        variants={glowingText}
        initial="hidden"
        animate="visible"
        className="color-white pos-a top-200 left-200 font-f-aniron"
      >
        hello angmar
      </motion.h1>
    </div>
  );
}

export default Angmar;
