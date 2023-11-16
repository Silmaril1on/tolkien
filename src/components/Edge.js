import React, { useState } from "react";
import edge from "../assets/edge.png";
import ring from "../assets/ring-quote.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { slideRight } from "../framerAnimations/motionValues";

function Edge() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  let rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <main className="pos-f z-5 desktop-size right-0 bottom-50 h-300">
      <motion.div
        variants={slideRight}
        initial="hidden"
        animate="visible"
        className="h-full pos-r"
      >
        <img className="h-full" src={edge} alt="edge" />
        <div className="h-300 pos-a top-0 left-0">
          <motion.img
            style={{ rotate }}
            className="h-full"
            src={ring}
            alt="ring"
          />
        </div>
      </motion.div>
      <HomeLinks />
    </main>
  );
}

const links = [
  {
    name: "home",
    link: "#entry",
  },
  {
    name: "news",
    link: "#news",
  },
  {
    name: "middle earth",
    link: "#map",
  },
  {
    name: "heroes",
    link: "#heroes",
  },
  {
    name: "header",
    link: "#header",
  },
];

function HomeLinks() {
  const positions = ["top1", "top", "center", "bottom", "bottom1"];
  const [positionIndexes] = useState([0, 1, 2, 3, 4]);

  const linkVariants = {
    top1: { y: "-120px", x: "50px", scale: 0.5 },
    top: { y: "-70px", x: "30px", scale: 0.8 },
    center: { y: "0", x: "-40px", scale: 1 },
    bottom: { y: "70px", x: "30px", scale: 0.8 },
    bottom1: { y: "120px", x: "50px", scale: 0.5 },
  };

  return (
    <div className="w-full pos-a h-full top-0 w-200 right-50">
      <div className="home-links h-full w-full pos-r row-c">
        {links.map((item, index) => {
          return (
            <motion.a
              key={index}
              animate={positions[positionIndexes[index]]}
              variants={linkVariants}
              initial="center"
              href={item.link}
              //   onClick={handleNext}
              className="pos-a golden-text-style font-f-kelt font-w-600 text-t-cap font-s-lg h-40"
            >
              {item.name}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default Edge;
