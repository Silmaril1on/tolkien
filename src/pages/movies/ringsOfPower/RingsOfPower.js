import React from "react";
import "../../../styles/index.scss";
import RopRaces from "./ropRaces/RopRaces";
import RopHeader from "./RopHeader";
import RopLinks from "./RopLinks";
import RopCast from "./ropCast/RopCast";
import RopFacts from "./ropFacts/RopFacts";

function RingsOfPower() {
  return (
    <main className="pos-r box-s-bb mt-n2 bg-black column-c h-full">
      <RopHeader />
      <RopLinks />
      <RopRaces />
      <div className="w-full pl-4 box-s-bb">
        <h1 className="font-f-primary text-t-cap responsive-h pt-2 font-w-n color-white w-full t-align-l">
          meet the cast
        </h1>
      </div>
      <RopCast />
      <div className="w-full pl-4 pb-4 box-s-bb">
        <h1 className="font-f-primary text-t-cap responsive-h pt-2 font-w-n color-white w-full t-align-l">
          facts
        </h1>
      </div>
      <RopFacts />
    </main>
  );
}

export default RingsOfPower;
