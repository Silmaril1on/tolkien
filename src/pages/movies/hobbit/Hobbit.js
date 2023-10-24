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
      <HobbitMovies />
      <CharactersSlider />
      <MobileSlider />
      <Cast />
    </main>
  );
}

export default Hobbit;
