import React, { useState } from "react";
import moviesData from "../../../database/moviesData";
import { slideLeft } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import ChapterList from "./ChapterList";

function HobbitMovies() {
  const lotrData = moviesData.slice(1, 2).map((item) => item.chapters);
  const array = lotrData.flat();

  const [movie, setMovie] = useState(0);
  const [active, setActive] = useState(0);

  const renderMovie = (index) => {
    setMovie(index);
    setActive(index);
  };

  return (
    <>
      <div className="mt-4">
        <SectionHeader>movies</SectionHeader>
      </div>
      <section className="h-400 chapters w-auto pos-r display-f a-items-fe color-white">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          className="row-c m-1 pos-r z-2 mw-300"
        >
          {array.map((icon, index) => {
            return (
              <motion.div
                variants={slideLeft}
                onClick={() => renderMovie(index)}
                className={
                  active === index ? "active-chapter" : "inactive-chapter"
                }
                key={icon.id}
              >
                <img
                  className="w-full cursor-p v-align-top h-full"
                  src={icon.image}
                  alt="posters"
                />
              </motion.div>
            );
          })}
        </motion.div>
        <ChapterList data={array[movie].chapter} />
      </section>
    </>
  );
}

export default HobbitMovies;
