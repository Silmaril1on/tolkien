import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { lightsVariant } from "../../../framerAnimations/motionValues";
import { headerZoom } from "../../../framerAnimations/motionValues";
import light from "../../../assets/lights.png";
import hobbitLogo from "../../../assets/hobbit-logo.png";
import jackson from "../../../assets/peter-jackson.jpg";

function LotrHeader() {
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="lotr-header pb-3 pos-r of-h column-c"
    >
      <div className="pos-a">
        <motion.img
          variants={lightsVariant}
          animate="visible"
          src={light}
          alt="light"
        />
      </div>
      <motion.img
        variants={headerZoom}
        initial="hidden"
        animate="visible"
        src={hobbitLogo}
        alt="hobbit"
        className="w-full p-3 mt-4 mw-600"
      />
      <p className="color-l-grey lh-30 font-w-600 p-2 mw-500 t-align-c font-f-secondary">
        The Hobbit is a series of three epic high fantasy adventure films
        directed by Peter Jackson. The films are subtitled An Unexpected
        Journey, The Desolation of Smaug, and The Battle of the Five Armies. The
        films are based on the 1937 novel The Hobbit by J. R. R.
      </p>
      <div className="primary-image-border p-1 m-2 h-auto column-c color-white font-f-kelt text-t-cap w-auto">
        <img
          className="w-150 bor-sm m-2 h-auto"
          src={jackson}
          alt="peter-jackson"
        />
        <span className="color-goldenrod font-s-lg">director</span>
        <h1 className="font-s-md">peter jackson</h1>
      </div>
    </motion.div>
  );
}

export default LotrHeader;
