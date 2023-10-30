import React, { useState } from "react";
import creatures from "../../../database/creaturesData";
import Creature from "./Creature";

function CreaturesList() {
  const [isCreature, setIsCreature] = useState(0);
  const [active, setActive] = useState(0);

  const renderCreature = (index) => {
    setActive(index);
    setIsCreature(index);
  };

  return (
    <section className="creatures w-full box-s-bb">
      <div className="m-1 display-f w-auto jc-c fd-r fw-w">
        {creatures.map((item, index) => {
          return (
            <h6
              onClick={() => renderCreature(index)}
              className={
                active === index
                  ? "color-white font-f-secondary text-t-cap m-1 responsive-p cursor-p"
                  : "bw-text-style text-t-cap font-f-secondary responsive-p m-1"
              }
              key={item.id}
            >
              {item.name}
            </h6>
          );
        })}
      </div>
      <Creature data={creatures[isCreature].child} />
    </section>
  );
}

export default CreaturesList;
