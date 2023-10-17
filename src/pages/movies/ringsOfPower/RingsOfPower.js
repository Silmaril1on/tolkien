import React from "react";
import "../../../styles/index.scss";
import RopRaces from "./ropRaces/RopRaces";
import RopHeader from "./RopHeader";

function RingsOfPower() {
  return (
    <main className="pos-r mt-n2 bg-rop-blue column-c h-full">
      <RopHeader />
      <RopRaces />
    </main>
  );
}

export default RingsOfPower;
