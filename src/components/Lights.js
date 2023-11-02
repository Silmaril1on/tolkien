import React from "react";
import lights from "../assets/lights.webm";

function Lights() {
  return (
    <div className="w-full h-full top-0 left-0 pos-a z-0">
      <video autoPlay={true} loop={true} muted>
        <source src={lights} type="video/webm" />
      </video>
    </div>
  );
}

export default Lights;
