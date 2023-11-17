import React from "react";
import { headerZoom } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";

function RegionInfo({ data, closeRegion }) {
  return (
    <div className="region-info">
      <section>
        {data.map((regInfo) => {
          const { flag, id, info, name, image } = regInfo;
          return (
            <div key={id} className="h-full row-c color-white ">
              <div className="regions-info-flag">
                <img src={flag} alt="flag" />
              </div>
              <div className="region-info-content">
                <div className="column-c">
                  <h1 className="golden-text-style pt-3 pb-3 font-f-kelt ls-md text-t-cap font-s-xl">
                    {name}
                  </h1>
                  <p className="color-l-grey t-align-c pt-1 pr-1 pb-3 font-f-secondary responsive-p">
                    {info}
                  </p>
                </div>
                <motion.div
                  variants={headerZoom}
                  initial="hidden"
                  animate="visible"
                  className="region-image"
                >
                  <img src={image} alt={name} />
                </motion.div>
              </div>
            </div>
          );
        })}
        <button
          onClick={closeRegion}
          className="close-button pos-a top-30 left-20"
        ></button>
      </section>
    </div>
  );
}

export default RegionInfo;
