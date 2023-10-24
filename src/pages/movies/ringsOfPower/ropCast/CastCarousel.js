import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  headerZoom,
  slideLeft,
} from "../../../../framerAnimations/motionValues";
import characters from "../../../../database/characters";

function CastCarousel() {
  const arr = characters.slice(2, 3).map((item) => item.cast);
  const cast = arr[0];
  const [castImage, setCastImage] = useState(cast[0].child);

  const handleCast = (id) => {
    if (castImage === id) {
      setCastImage(null);
    }
    setCastImage(id);
  };

  return (
    <div className="pos-a display-f box-s-bb a-items-fe jc-c h-full top-0 left-0 w-full">
      <div className="m-5 of-h">
        <section className="display-f fw-w w-full m-1">
          {cast.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => handleCast(item.child)}
                className="thumbImage"
              >
                <img
                  className="w-full cursor-p pos-r z-5 h-full"
                  src={item.image}
                  alt="cast"
                />
                {castImage === item.child && <Cast data={item.child} />}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

function Cast({ data }) {
  return (
    <div className="pos-a w-full box-s-bb h-full left-0 top-0">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="top-0 column-c pos-r left-0 w-full h-full color-white"
          >
            <div className="w-9 h-9 column-c">
              <motion.img
                variants={headerZoom}
                initial="hidden"
                animate="visible"
                className="cast-image w-full h-full o-fit-cover"
                src={item.image}
                alt="cast"
              />
            </div>
            <motion.h1
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              className="pos-a top-200 left-5 font-f-primary font-w-n text-t-cap font-s-md font-s-lg"
            >
              {item.name}
            </motion.h1>
          </div>
        );
      })}
    </div>
  );
}

export default CastCarousel;
