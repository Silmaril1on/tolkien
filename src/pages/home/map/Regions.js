import React, { useState } from "react";
import middleEarth from "../../../database/middleEarthData";
import { opacityIn } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import RegionInfo from "./RegionInfo";

function Regions() {
  const [regionInfo, setRegionInfo] = useState(false);

  const openRegionInfo = (id) => {
    if (id === regionInfo) {
      setRegionInfo(null);
      return;
    }
    setRegionInfo(id);
  };

  const closeRegion = () => {
    setRegionInfo(true);
  };

  return (
    <motion.div
      variants={opacityIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="regions"
    >
      {middleEarth.map((region) => {
        return (
          <motion.div
            variants={opacityIn}
            key={region.id}
            className="lotr-regions"
          >
            <img
              className="icon"
              onClick={() => openRegionInfo(region.child)}
              src={region.icon}
              alt="icon"
            />
            <img className="region" src={region.region} alt="region" />
            {regionInfo === region.child && (
              <RegionInfo data={region.child} closeRegion={closeRegion} />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Regions;
