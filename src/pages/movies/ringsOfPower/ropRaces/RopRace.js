import React, { useState } from "react";
import "../ringofpower.scss";
import { motion } from "framer-motion";
import { headerZoom } from "../../../../framerAnimations/motionValues";
import { slideRight } from "../../../../framerAnimations/motionValues";

function RopRace({ data }) {
  const [character, setCharacter] = useState(data[0].child);
  const openHero = (id) => {
    if (id === character) {
      setCharacter(null);
    }
    setCharacter(id);
  };

  return (
    <div className="pos-a rop-race-background display-f a-items-fe left-0 top-0 h-full w-full">
      <section className="h-auto display-f mw-700 a-items-fe m-3 ">
        {data.map((item) => {
          return (
            <motion.div
              variants={headerZoom}
              initial="hidden"
              animate="visible"
              onClick={() => openHero(item.child)}
              key={item.id}
              className="h-auto w-auto mw-80 m-1"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className=" pos-r cursor-p of-cover z-5 h-full w-full"
                src={item.elfIcon}
                alt={item.name}
              />
              {character === item.child && <Hero data={item.child} />}
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}

function Hero({ data }) {
  return (
    <div className="pos-a top-0 left-0 h-full w-full of-h">
      {data.map((item) => {
        return (
          <div className="row-c h-full" key={item.id}>
            <div className="w-full h-full rop-character-info column-c">
              <h1 className="font-f-primary w-full t-align-c p-2 text-t-up">
                {item.name}
              </h1>
              <p className="font-f-primary p-4">{item.info}</p>
            </div>
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="w-full h-full"
            >
              <img className="w-full of-cover h-full" src={item.image} alt="" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default RopRace;
