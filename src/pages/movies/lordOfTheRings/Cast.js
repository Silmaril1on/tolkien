import React from "react";
import line from "../../../assets/line2.png";
import { motion } from "framer-motion";
import { opacityIn } from "../../../framerAnimations/motionValues";
import SectionHeader from "../../../components/SectionHeader";
import movieData from "../../../database/moviesData";
import Lights from "../../../components/Lights";

function Cast() {
  const arr = movieData.slice(0, 1).map((item) => item.cast);
  const movieCast = arr.flat();

  return (
    <section className="h-fulls column-c p-2 w-auto">
      <SectionHeader>cast</SectionHeader>
      <img className="w-full mt-3" src={line} alt="line" />
      <div className="w-full h-full of-h column-c pt-3 pb-3 pos-r">
        <Lights />
        <motion.div
          variants={opacityIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="color-white z-2 cast-section display-f jc-sa fw-w"
        >
          {movieCast.map((item, index) => {
            return (
              <motion.div
                variants={opacityIn}
                className="m-2 cast-card column-c w-130"
                key={index}
              >
                <div className="w-130  h-130">
                  <img
                    className="w-full bor-sm h-full"
                    src={item.image}
                    alt="cast"
                  />
                </div>
                <div className="column-c h-full t-align-c text-t-cap ls-xs">
                  <h5 className="font-f-primary">{item.name}</h5>
                  <h6 className="golden-text-style font-f-aniron">
                    {item.subName}
                  </h6>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Cast;
