import React, { useState } from "react";
import moviesData from "../../../database/moviesData";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import line from "../../../assets/line2.png";

function LotrMovies() {
  const arr = moviesData.slice(1, 2).map((item) => item.child);
  const movies = arr[0];
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map(
        (prevIndexes) => (prevIndexes + 1) % 3
      );
      return updateIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndexes) => (prevIndexes + 1) % 3
      );
      return updatedIndexes;
    });
  };

  const positions = ["left", "center", "right"];

  const imageVariants = {
    left: {
      x: "-70%",
      scale: 0.7,
      zIndex: 2,
      transition: {
        duration: 0.5,
      },
    },
    center: {
      x: "0%",
      scale: 1,
      zIndex: 4,
      transition: {
        duration: 0.5,
      },
    },
    right: {
      x: "70%",
      scale: 0.7,
      zIndex: 2,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="h-750 pos-r of-h mb-4 box-s-bb w-full pb-3 column-c">
      <div className="mt-3">
        <SectionHeader>movies</SectionHeader>
      </div>
      <img className="w-full" src={line} alt="line" />
      <div className="row-c pt-3 pb-3 pos-r h-full w-full">
        {movies.map((movie, index) => {
          return (
            <motion.div
              variants={imageVariants}
              initial="center"
              animate={positions[positionIndexes[index]]}
              className="w-300 m-1 pos-a w-300"
              key={movie.id}
            >
              <img className="w-full" src={movie.image} alt={movie.name} />
            </motion.div>
          );
        })}
      </div>
      <div className="row-sa w-200 mb-1 p-2">
        <button onClick={handleBack} className="left-button"></button>
        <button onClick={handleNext} className="right-button"></button>
      </div>
    </div>
  );
}

export default LotrMovies;
