import React from "react";
import "./lotr.scss";
import LotrHeader from "./LotrHeader";
import CharactersSlider from "./CharactersSlider";
import MobileSlider from "./MobileSlider";
import Cast from "./Cast";
import LotrMovies from "./LotrMovies";

function Lotr() {
  return (
    <main className="lotr-container display-f fd-c pos-r">
      <LotrHeader />
      <section className="mt-4 column-c">
        <LotrMovies />
        <Cast />
      </section>
      <CharactersSlider />
      <MobileSlider />
    </main>
  );
}

export default Lotr;
