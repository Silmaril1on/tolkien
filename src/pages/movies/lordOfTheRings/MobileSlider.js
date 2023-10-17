import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideShow } from "../../../framerAnimations/motionValues";
import characters from "../../../database/characters";
import SectionHeader from "../../../components/SectionHeader";

function MobileSlider() {
  const arr = characters.slice(0, 1).map((item) => item.heroes);
  const heroesArray = arr[0];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(-1);
    setIndex(index === 0 ? heroesArray.length - 1 : index - 1);
  };

  const right = () => {
    setDirection(1);
    setIndex(index === heroesArray.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="char-slideshow mobile-size p-2 h-full column-c w-auto">
      <SectionHeader>characters</SectionHeader>
      <div className="pos-r of-h p-1 m-2 w-full h-400 column-c wrapper">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={slideShow}
            initial="hidden"
            animate="visible"
            key={heroesArray[index].image}
            exit="exit"
            custom={direction}
            className="pos-a h-400 w-300 primary-image-border column-c"
          >
            <img
              className="w-auto of-auto h-9"
              src={heroesArray[index].image}
              alt="creed-hero"
            />
            <h3 className="font-f-aniron font-s-sm pos-a bottom-20 bw-text-style">
              {heroesArray[index].name}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>
      <div>
        <button onClick={left} className="left-button"></button>
        <button onClick={right} className="right-button"></button>
      </div>
      <h3 className="golden-text-style font-f-kelt m-1 font-f-q">
        {index + 1} / {heroesArray.length}
      </h3>
    </div>
  );
}

export default MobileSlider;
