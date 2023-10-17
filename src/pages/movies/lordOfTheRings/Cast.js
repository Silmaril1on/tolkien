import React from "react";
import line from "../../../assets/line2.png";
import { motion } from "framer-motion";
import { opacityIn } from "../../../framerAnimations/motionValues";
import SectionHeader from "../../../components/SectionHeader";
import movieData from "../../../database/moviesData";

function Cast() {
  return (
    <motion.div>
      {movieData.slice(0, 1).map((movie) => {
        return (
          <div className="column-c" key={movie.id}>
            {movie.child.slice(0, 1).map((fellow) => {
              return (
                <div className="column-c " key={fellow.id}>
                  <SectionHeader>cast</SectionHeader>
                  <img
                    className="desktop-size w-full of-cover m-3"
                    src={line}
                    alt="line"
                  />
                  {fellow.child.map((item) => {
                    return (
                      <motion.div
                        variants={opacityIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-auto p-3 m-3 mw-1200 row-se fw-w"
                        key={item.id}
                      >
                        {item.cast.map((cast, index) => {
                          return (
                            <motion.div
                              variants={opacityIn}
                              whileHover={{ scale: 1.1 }}
                              className="w-120
                               primary-image-border colum-c h-170 m-2 cursor-p "
                              key={index}
                            >
                              <div className="w-100 p-2 mt-1 h-100">
                                <img
                                  className="w-full bor-sm "
                                  src={cast.image}
                                  alt="actor"
                                />
                              </div>
                              <div className="w-full text-t-cap h-auto column-c">
                                <h1 className="font-s-sm color-l-grey font-f-secondary ls-xs t-align-c pt-1">
                                  {cast.name}
                                </h1>
                                <h2 className="font-s-md t-align-c font-f-kelt font-w-600 golden-text-style">
                                  {cast.subName}
                                </h2>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
}

export default Cast;
