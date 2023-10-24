import React from "react";
import { motion } from "framer-motion";
import {
  lightsVariant,
  slideLeft,
} from "../../../framerAnimations/motionValues";
import lotrLogo from "../../../assets/lotr-logo.png";
import light from "../../../assets/lights.png";
import {
  AiOutlineLike,
  AiOutlinePlayCircle,
  AiOutlinePlus,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";

function LotrHeader() {
  return (
    <main className="lotr-header of-h pos-r">
      <div className="pos-a w-full h-full top-0 left-0">
        <motion.img
          variants={lightsVariant}
          initial="hidden"
          animate="visible"
          className="w-full h-full"
          src={light}
          alt="lights"
        />
      </div>
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate="visible"
        className="pt-3 w-full h-full color-white font-f-primary text-t-cap"
      >
        <h3 className="mt-3 p-2">new line cinema trilogy</h3>
        <div className="w-6 mw-400">
          <img className="w-full h-full" src={lotrLogo} alt="lotr" />
        </div>
        <p className="w-full p-2 box-s-bb mw-500">
          The Lord of the Rings is a series of three epic fantasy adventure
          films directed by Peter Jackson, based on the novel The Lord of the
          Rings by British author J. R. R. Tolkien. The films are subtitled The
          Fellowship of the Ring, The Two Towers, and The Return of the King.
        </p>
        <div className="genre row-sb p-2 w-full mw-300">
          <h5>drama</h5>
          <h5>adventure</h5>
          <h5>fantasy</h5>
        </div>
        <div className="dir color-white text-t-cap w-full mw-600">
          <h3>
            <span className="gold">director: </span> peter jackson
          </h3>
          <h3>
            <span className="gold">composer: </span> howard shore
          </h3>
          <h3>
            <span className="gold">writers: </span> J.R.R Tolkien / fran walsh /
            phillipa boyens
          </h3>
        </div>
        <div className="movie-icons w-300 row-sa pt-2 pb-2">
          <span>
            <AiOutlinePlayCircle />
          </span>
          <span>
            <AiOutlinePlus />
          </span>
          <span>
            <AiOutlineLike />
          </span>
          <span>
            <AiOutlineDislike />
          </span>
          <span>
            <AiOutlineShareAlt />
          </span>
        </div>
      </motion.div>
    </main>
  );
}

export default LotrHeader;
