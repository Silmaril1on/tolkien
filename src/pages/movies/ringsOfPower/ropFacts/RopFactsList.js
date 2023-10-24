import React, { useState } from "react";
import ringsOfPowerFacts from "../../../../database/ringsOfPowerFacts";
import RopFactList from "./RopFactList";

function RopFactsList() {
  const factChild = ringsOfPowerFacts.map((item) => item.child);

  const [facts, setFacts] = useState(0);

  const openFact = (index) => {
    setFacts(index);
  };

  return (
    <section className="h-full w-full column-sb of-h pos-r">
      <div className="pos-r w-full z-2 color-white display-f a-items-c jc-fs ml-6 mt-6">
        {ringsOfPowerFacts.map((fact, index) => {
          return (
            <div className="m-2" onClick={() => openFact(index)} key={fact.id}>
              <h1 className="rop-btn font-w-n">{fact.name}</h1>
            </div>
          );
        })}
      </div>
      <RopFactChild data={factChild[facts]} />
    </section>
  );
}

function RopFactChild({ data }) {
  const [list, setList] = useState(0);
  const [active, setActive] = useState(0);

  const openList = (index) => {
    setList(index);
    setActive(index);
  };

  return (
    <section className="w-full h-full display-f a-items-fe pos-a top-0">
      <div className="w-full b-xs display-f m-3 fd-r jc-fs">
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => openList(index)}
              className={
                active === index ? "fact-icons inactive" : " fact-icons"
              }
            >
              <img className="w-full h-full" src={item.image} alt="lore" />
            </div>
          );
        })}
      </div>
      <RopFactList data={data[list].child} />
    </section>
  );
}

export default RopFactsList;
