import React from "react";
import video from "../../../assets/shadowClip.mp4";
import logo from "../../../assets/shadowofwar.png";
import ps4 from "../../../assets/ps4.png";
import xbox from "../../../assets/xbox.png";
import steam from "../../../assets/steam.png";

function Video() {
  return (
    <div className="w-auto mordor-video m-2 h-full">
      <div className="w-full rise-border h-full">
        <video
          className="w-full of-cover v-align-top h-full"
          autoPlay={true}
          muted
          loop={true}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="box-s-bb mt-2 p-2 color-white">
        <div className="w-full h-auto">
          <img className="w-full h-full" src={logo} alt="logo-mordor" />
        </div>
        <div className="row-sa mt-3">
          <img className="w-80 h-auto" src={xbox} alt="xbox" />
          <img className="w-80 h-auto" src={steam} alt="steam" />
          <img className="w-80 h-auto" src={ps4} alt="ps4" />
        </div>
        <div className="column-c p-3 font-f-primary">
          <h1>August 27, 2017</h1>
          <h5 className="color-l-grey">pre-order now</h5>
        </div>
      </div>
    </div>
  );
}

export default Video;
