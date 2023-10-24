import React from "react";
import logo from "../../../assets/rop-icon.png";
import prime from "../../../assets/prime.png";
import {
  AiOutlineLike,
  AiOutlinePlayCircle,
  AiOutlinePlus,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiFillStar,
} from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";

function RopHeader() {
  return (
    <header
      id="top"
      className="background of-h font-f-primary text-t-cap fd-c jc-c display-f a-items-fs"
    >
      <div className="color-white w-full mw-1000 mt-5">
        <h4 className="m-2 text-t-up responsive-p ls-sm ws-md">
          amazon original
        </h4>
        <div className="w-50 m-2 p-2">
          <img className="w-full h-full" src={logo} alt="rop-logo" />
        </div>
        <h3 className="m-2">season 1</h3>
        <p className="m-2 responsive-p w-6 font-f-secondary">
          Set thousands of years before the events of J.R.R. Tolkien's The Lord
          of the Rings, this epic drama follows an ensemble cast of characters,
          both familiar and new, as they confront the long-feared re-emergence
          of evil to Middle-earth.
        </p>
        <div className="display-f fd-r jc-fs w-full">
          <h1 className="responsive-p m-2 text-d-underline">drama</h1>
          <h1 className="responsive-p m-2 text-d-underline">fantasy</h1>
          <h1 className="responsive-p m-2 text-d-underline">adventure</h1>
          <h1 className="responsive-p m-2 text-d-underline">action</h1>
        </div>
        <div className="m-2 rop-info row-sa mw-600">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <span className="color-l-grey">32,193</span>
          <span className="color-l-grey">IMDB 7.0</span>
          <span className="color-l-grey">2022</span>
          <span className="color-l-grey">8 episodes</span>
          <div className="marks row-sa text-t-up">
            <span>x-ray</span>
            <span>hdr</span>
            <span>uhd</span>
            <span>tv-14</span>
          </div>
        </div>
        <div className="rop-icons pt-2 pb-2 w-full display-f a-items-c jc-fs pl-2">
          <h1 className="cursor-p h-auto font-s-sm t-align-c b-xs bor-sm bg-white color-black">
            join prime watch now
          </h1>
          <span>
            <AiOutlinePlayCircle />
          </span>
          <span>
            <AiOutlinePlus />
          </span>
          <span>
            <AiOutlineLike />
          </span>
          <span>
            <AiOutlineDislike />
          </span>
          <span>
            <GiPartyPopper />
          </span>
          <span>
            <AiOutlineShareAlt />
          </span>
        </div>
        <div className="h-auto mr-2 ml-2 mb-3 mt-3 w-full column-c">
          <div className="w-full">
            <img src={prime} alt="prime" />
          </div>
          <h1 className="font-s-md w-full">PRIMETIME EMMYS® 6X nominee</h1>
        </div>
      </div>
    </header>
  );
}

export default RopHeader;
