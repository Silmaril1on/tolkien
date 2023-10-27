import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideRight } from "../../../framerAnimations/motionValues";

const linksData = [
  {
    name: "elves",
    link: "#elves",
  },
  {
    name: "creation and awakening",
    link: "#creation",
  },
  {
    name: "Discovery & sundering",
    link: "#discovery",
  },
  {
    name: "life in aman",
    link: "#life",
  },
  {
    name: "war of jewels",
    link: "#war",
  },
  {
    name: "Later days and decline",
    link: "#later",
  },
  {
    name: "house of finwe",
    link: "#tree",
  },
];

function SideLinks() {
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

export default SideLinks;
