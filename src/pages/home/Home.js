import React from "react";
import MiddleEarth from "./map/MiddleEarth";
import "./home.scss";

function Home() {
  return (
    <main className="home-page-container column-c w-full bg-black">
      <div className=" p-6">
        <h1 className="golden-text-style font-size-lg">home page </h1>
      </div>
      <MiddleEarth />
    </main>
  );
}

export default Home;
