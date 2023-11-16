import React, { useState } from "react";
import SowEditionsData from "../../../database/SowEditionsData";
import { motion } from "framer-motion";
import { opacityIn } from "../../../framerAnimations/motionValues";

function ShadowContent() {
  const [active, setActive] = useState(0);

  const activeEdition = (index) => {
    setActive(index);
  };

  return (
    <div className="color-white pos-r z-2 column-c box-s-bb w-full">
      <motion.div
        variants={opacityIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="display-f fd-r fw-w jc-se  w-full mw-1100"
      >
        {SowEditionsData.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              variants={opacityIn}
              className={
                active === index
                  ? "m-1 bb-l-grey p-1 time-sm cursor-p font-f-primary text-t-up column-se w-150 h-200"
                  : " m-1 p-1 cursor-p time-sm font-f-primary text-t-up column-se w-150 h-200 filter-br-medium inactive-coll"
              }
              onClick={() => activeEdition(index)}
            >
              <div className="w-110 mb-3 h-auto">
                <img className="w-full h-full" src={item.image} alt="bundle" />
              </div>
              {item.nameImage ? (
                <img className="w-auto h-20" src={item.nameImage} alt="name" />
              ) : (
                ""
              )}
              <h5 className="t-align-c">{item.name}</h5>
              {item.edition ? <h5 className="ls-sm">{item.edition}</h5> : ""}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default ShadowContent;
