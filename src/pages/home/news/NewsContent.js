import React from "react";
import Line from "../../../components/Line";
import { motion } from "framer-motion";
import { headerZoom } from "../../../framerAnimations/motionValues";
import { NavLink } from "react-router-dom";

function NewsContent() {
  return (
    <section className="w-8 column-c font-f-primary">
      <div className="w-auto display-f fd-r a-items-fs p-2">
        <h3 className="bw-text-style text-t-up pl-3 m-2">news</h3>
        <h3 className="bw-text-style text-t-up pl-3 m-2">notice</h3>
        <h3 className="bw-text-style text-t-up pl-3 m-2">explore</h3>
      </div>
      <Line />
      <motion.article
        variants={headerZoom}
        initial="hidden"
        whileInView="visible"
        className="news-feed p-3 display-f jc-c fd-r fw-w color-white"
      >
        <NavLink to="/ringsofpower">
          <div>
            <h1>Rings Of Power: Summary</h1>
            <p className="color-l-grey">
              Check out and explore everything about amazon prime's tv show,
              Rings of Power. Meet cast, Characters, realms, artifacts and many
              other information about it.
            </p>
            <span>details</span>
          </div>
        </NavLink>
        <NavLink to="/lotr">
          <div>
            <h1>LOTR: Trilogy</h1>
            <p className="color-l-grey">
              Peter Jacksons legendarium trilogy, 17 academy award winner which
              remains cinematography classic after 2 decades and more. With it's
              brilliant cast and characters
            </p>
            <span>details</span>
          </div>
        </NavLink>
        <NavLink to="/tolkien">
          <div>
            <h1>J.R.R Tolkiens Life</h1>
            <p className="color-l-grey">
              One of the most iconic writters of the late history, who made
              impeccable fantasy novel that unites it's readers and fans.
              Explore Tolkiens lifetime and creation of everything.
            </p>
            <span>details</span>
          </div>
        </NavLink>
        <NavLink to="/creatures">
          <div>
            <h1>Creatures of the middle earth</h1>
            <p className="color-l-grey">
              Various and malevolent creatures from all three ages of the middle
              earth with nice arts. Get knowledge of them, where they lived and
              who they served.
            </p>
            <span>details</span>
          </div>
        </NavLink>
      </motion.article>
    </section>
  );
}

export default NewsContent;
