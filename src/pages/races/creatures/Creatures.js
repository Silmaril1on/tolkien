import React from "react";
import CreaturesList from "./CreaturesList";
import LightSmoke from "../../../components/LightSmoke";

function Creatures() {
  return (
    <main className="creatures-container mt-n1 of-h pt-3 pos-r font-f-primary w-full box-s-bb color-white column-c">
      <LightSmoke />
      <CreaturesList />
    </main>
  );
}

export default Creatures;
