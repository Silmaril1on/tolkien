import React from "react";
import Line from "../../../components/Line";
import { motion } from "framer-motion";
import { headerZoom } from "../../../framerAnimations/motionValues";

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
        <div>
          <h1>Rings Of Power: Season 2</h1>
          <p className="color-l-grey">
            New Geostrategic Mobile Game based on Middle-earth coming to players
            in Europe, the Americas, Oceania and Southeast Asia
          </p>
          <span>details</span>
        </div>
        <div>
          <h1>LOTR: The War of the Rohirrim</h1>
          <p className="color-l-grey">
            Tolkien Fans in Europe, the Americas, Oceania and Southeast Asia Can
            Pre-register for the Highly Anticipated Fantasy Strategy Game and
            Receive a Post-Release Gift Pack GUANGZHOU and CHINA.
          </p>
          <span>details</span>
        </div>
        <div>
          <h1>Mines of Moria: Episode 5</h1>
          <p className="color-l-grey">
            New Geostrategic Mobile Game based on Middle-earth coming to players
            in Europe, the Americas, Oceania and Southeast Asia
          </p>
          <span>details</span>
        </div>
        <div>
          <h1>LOTR: Comic Con</h1>
          <p className="color-l-grey">
            New Geostrategic Mobile Game based on Middle-earth coming to players
            in Europe, the Americas, Oceania and Southeast Asia
          </p>
          <span>details</span>
        </div>
      </motion.article>
    </section>
  );
}

export default NewsContent;
