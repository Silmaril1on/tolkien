import React from "react";
import { headerZoom } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";

function RegionInfo({ data, closeRegion }) {
  console.log(data);
  return (
    <div className="region-info">
      <section>
        {data.map((regInfo) => {
          const { flag, id, info, name, image } = regInfo;
          return (
            <div key={id} className="h-full row-c color-white ">
              <div className="h-full mr-5 w-auto">
                <img className="h-full w-auto" src={flag} alt="" />
              </div>
              <div className="h-full ml-4 w-700">
                <h1 className="golden-text-style pt-3 pb-3  font-f-kelt ls-md text-t-cap font-s-xl">
                  {name}
                </h1>
                <p className="color-l-grey pt-1 pb-3 font-f-secondary responsive-p">
                  {info}
                </p>
                <motion.div
                  variants={headerZoom}
                  initial="hidden"
                  animate="visible"
                  className="w-auto of-h column-c h-250"
                >
                  <img className="surati h-full pb-3" src={image} alt={name} />
                </motion.div>
              </div>
            </div>
          );
        })}
        <button
          onClick={closeRegion}
          className="close-button pos-a top-30 right-50"
        ></button>
      </section>
    </div>
  );
}

export default RegionInfo;
