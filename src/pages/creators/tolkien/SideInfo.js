import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideRight } from "../../../framerAnimations/motionValues";

const linksData = [
  {
    name: "tolkien",
    link: "#tolkien",
  },
  {
    name: "childhood",
    link: "#childhood",
  },
  {
    name: "youth",
    link: "#youth",
  },
  {
    name: "leeds and oxford",
    link: "#leeds",
  },
  {
    name: "lord of the rings",
    link: "#lotr",
  },
  {
    name: "Later Life And Recognition",
    link: "#later",
  },
  {
    name: "writing",
    link: "#writing",
  },
];

function SideInfo() {
  const [active, setActive] = useState(0);

  const activeLink = (index) => {
    setActive(index);
  };

  return (
    <div className="side-links of-h pos-s top-20 h-full w-15 mt-2 desktop-size">
      <motion.ul
        variants={slideRight}
        initial="hidden"
        animate="visible"
        className="lst-none p-2 display-f fd-c text-t-cap font-s-sm"
      >
        {linksData.map((link, index) => {
          return (
            <a
              className={active === index ? "inactive-link" : "active-link"}
              onClick={() => activeLink(index)}
              key={index}
              href={link.link}
            >
              {link.name}
            </a>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default SideInfo;
