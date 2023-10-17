import React, { useState } from "react";
import characters from "../../../../database/characters";
import RopRace from "./RopRace";

function RopRaces() {
  const arr = characters.slice(2, 3).map((item) => item.races);
  const newArr = arr[0];
  const races = newArr.map((item) => item);
  const [powerRace, setPowerRace] = useState(races[0].child);

  const specificRace = (id) => {
    if (id === powerRace) {
      setPowerRace(null);
    }
    setPowerRace(id);
  };

  return (
    <div className="rop-container p-2 pos-r box-s-bb w-full bg-black">
      <section className="color-white mt-4 h-auto w-full mw-900 row-se">
        {races.map((item) => {
          return (
            <div key={item.id}>
              <h1
                onClick={() => specificRace(item.child)}
                className="rop-races-btn  hover-rop pos-r z-5 cursor-p font-f-secondary font-w-400 text-t-cap bg-rop-blue bor-lg"
              >
                {item.name}
              </h1>
              {powerRace === item.child && <RopRace data={item.child} />}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default RopRaces;
