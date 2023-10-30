import React from "react";
import { headerZoom } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";

function Creature({ data }) {
  return (
    <div className="creature-wrapper m-1 h-auto pos-r z-5 w-auto">
      {data.map((creature) => {
        const { info, image, name, id, quote } = creature;
        return (
          <div className="responsive-column-c h-full" key={id}>
            <div className="w-auto mw-500 h-auto">
              <img src={image} className="w-full h-full masky" alt="creatire" />
            </div>
            <motion.div
              variants={headerZoom}
              initial="hidden"
              animate="visible"
              className="w-full p-2 column-c h-full"
            >
              <h1 className="text-t-up responsive-h ls-sm golden-text-style p-2 font-f-kelt">
                {name}
              </h1>
              <p className="color-l-grey responsive-p p-2">{info}</p>
              <p className="responsive-p font-s-i mw-700 p-3">{quote}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default Creature;
