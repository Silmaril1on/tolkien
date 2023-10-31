import React from "react";
import middleEarth from "../../../assets/middle-earth-map.png";
import { motion } from "framer-motion";
import {
  slideLeft,
  lightsVariant,
} from "../../../framerAnimations/motionValues";
import light from "../../../assets/lights.png";
import Regions from "./Regions";

function MiddleEarth() {
  return (
    <section id="map" className="middle-earth of-h w-full pos-r row-c box-s-bb">
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate="visible"
        className="brush pos-a z-2 left-0 top-60 text-t-cap font-f-kelt w-auto"
      >
        <motion.div variants={slideLeft} className="brush-bk mb-2">
          <h3 className="bw-text-style p-1">explore</h3>
        </motion.div>
        <motion.div
          variants={slideLeft}
          className="brush-bk w-auto h-auto mb-2"
        >
          <h1 className="golden-text-style p-1 w-auto">middle-earth's</h1>
        </motion.div>
        <motion.div variants={slideLeft} className="brush-bk mb-2">
          <h3 className="bw-text-style p-1">regions and races</h3>
        </motion.div>
      </motion.div>
      <div className="w-full pos-a top-0 h-full">
        <motion.img
          variants={lightsVariant}
          animate="visible"
          className="w-full h-full"
          src={light}
          alt="light"
        />
      </div>
      <div className="map-content-container h-250 column-c pos-r w-auto">
        <img
          className="w-full h-full pos-a w-auto"
          src={middleEarth}
          alt="map"
        />
        <Regions />
      </div>
    </section>
  );
}

export default MiddleEarth;
