import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function EdgeButtons() {
  const [scroll, setScroll] = useState(true);

  const changeOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  window.addEventListener("scroll", changeOnScroll);

  return (
    <motion.main
      className={scroll ? "edge-buttons left-0" : "edge-buttons left-n90"}
    >
      <a href="#origin">
        <button className="brush-bk">origin</button>
      </a>
      <a href="#first-age">
        <button className="brush-bk">first age</button>
      </a>
      <a href="#second-age">
        <button className="brush-bk">second age</button>
      </a>
      <a href="#third-age">
        <button className="brush-bk">third age</button>
      </a>
      <NavLink to="/">
        <button className="brush-bk">go back</button>
      </NavLink>
    </motion.main>
  );
}

export default EdgeButtons;
