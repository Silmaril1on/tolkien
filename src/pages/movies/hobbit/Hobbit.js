import React from "react";
import "../lordOfTheRings/lotr.scss";
import HobbitHeader from "./HobbitHeader";
import CharactersSlider from "./CharactersSlider";
import MobileSlider from "./MobileSlider";
import Cast from "./Cast";
import HobbitMovies from "./HobbitMovies";

function Hobbit() {
  return (
    <main className="lotr-container display-f fd-c pos-r">
      <HobbitHeader />
      <section className="mt-4 column-c">
        <HobbitMovies />
        <Cast />
      </section>
      <CharactersSlider />
      <MobileSlider />
    </main>
  );
}

export default Hobbit;
