import React from "react";
import MiddleEarth from "./map/MiddleEarth";
import "./home.scss";
import News from "./news/News";
import Edge from "../../components/Edge";
import Entry from "./entry/Entry";

function Home() {
  return (
    <main className="home-page-container column-c w-full bg-black">
      <Entry />
      <News />
      <MiddleEarth />
      <Edge />
    </main>
  );
}

export default Home;
