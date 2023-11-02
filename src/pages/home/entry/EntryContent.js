import React from "react";
import shelob from "../../../assets/shelob.jpg";
import { motion } from "framer-motion";
import { forMask } from "../../../framerAnimations/motionValues";

function EntryContent() {
  return (
    <div className="w-full box-s-bb m-2">
      <div className="shelob-bw">
        <motion.img
          variants={forMask}
          initial="hidden"
          animate="visible"
          className="w-full h-full"
          src={shelob}
          alt="shelob"
        />
      </div>
    </div>
  );
}

export default EntryContent;
