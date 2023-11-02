import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideShow } from "../../../framerAnimations/motionValues";
import newsSliderData from "../../../database/newsSlideShow";

function NewsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(-1);
    setIndex(index === 0 ? newsSliderData.length - 1 : index - 1);
  };
  const right = () => {
    setDirection(1);
    setIndex(index === newsSliderData.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="slider-container m-1 w-full column-c">
      <div className="column-c">
        <div className="rise-border m-1">
          <div className="pos-r news-slider of-h bor-sm h-200 w-300">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                variants={slideShow}
                initial="hidden"
                animate="visible"
                className="pos-a w-full h-full"
                key={newsSliderData[index].image}
                exit="exit"
                custom={direction}
              >
                <img
                  className="w-full h-full"
                  src={newsSliderData[index].image}
                  alt="news"
                />
                <a
                  className="pos-a bottom-20 left-20 z-5 td-none font-s-md font-f-kelt font-w-600 text-t-cap bw-text-style"
                  href={newsSliderData[index].link}
                >
                  {newsSliderData[index].name}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="m-2 w-200 p-2 row-sa">
          <button onClick={left} className="left-button"></button>
          <button onClick={right} className="right-button"></button>
        </div>
      </div>
    </section>
  );
}

export default NewsSlider;
