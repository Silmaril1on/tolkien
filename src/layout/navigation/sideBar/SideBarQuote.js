import React from "react";
import "../../../styles/index.scss";
import "../navigation.scss";
import quote from "../../../assets/ring-quote.png";
import { circleRotate } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";

function SideBarQuote() {
  return (
    <div className="w-full  column-c">
      <div className="w-300 of-h h-auto">
        <motion.img
          variants={circleRotate}
          animate="visible"
          className="w-full h-full"
          src={quote}
          alt="quote"
        />
      </div>
    </div>
  );
}

export default SideBarQuote;
