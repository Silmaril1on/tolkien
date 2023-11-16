import React from "react";
import homeHeroes from "../../../database/homeHeroesData";
import { NavLink } from "react-router-dom";
import { headerZoom } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";

function LightHeroes() {
  return (
    <section className="home-heroes-container display-f jc-c fd-r fw-w w-full h-full">
      {homeHeroes.map((hero) => {
        return (
          <NavLink to={hero.link} key={hero.id}>
            <motion.div
              variants={headerZoom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="home-heroes-card m-1 h-300 w-170"
            >
              <div className="h-full w-full img-div">
                <img
                  className="w-full h-full o-fit-cover"
                  src={hero.image}
                  alt="hero"
                />
              </div>
              <div className="pos-a w-full hero-icon row-c bottom-10">
                <img className="h-40 w-auto" src={hero.icon} alt="icon" />
                <h4 className="font-f-primary w-100 t-align-c color-goldenrod text-t-cap ls-xs">
                  {hero.text}
                </h4>
              </div>
            </motion.div>
          </NavLink>
        );
      })}
    </section>
  );
}

export default LightHeroes;
