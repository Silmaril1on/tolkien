import React from "react";
import "./heroes.scss";
import LightHeroes from "./LightHeroes";

function Heroes() {
  return (
    <main
      className="heroes-main-container color-white p-1 w-full box-s-bb column-c h-auto"
      id="heroes"
    >
      <LightHeroes />
    </main>
  );
}

export default Heroes;
