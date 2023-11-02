import React from "react";
import smoke from "../assets/lights.png";
import { motion } from "framer-motion";
import { lightsVariant } from "../framerAnimations/motionValues";

function LightSmoke() {
  return (
    <div className="w-full h-full top-0 left-0 pos-a z-0">
      <motion.img
        variants={lightsVariant}
        animate="visible"
        src={smoke}
        alt="smoke"
      />
    </div>
  );
}

export default LightSmoke;
