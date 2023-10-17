import React, { useContext } from "react";
import { slideLeft } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import close from "../../../assets/close.png";
import "../navigation.scss";
import "../../../styles/index.scss";
import navlinksData from "../../../database/navlinksData";
import { NavLinksContext } from "../../../context/NavContext";
import SideSubLinks from "./SideSubLinks";
import star from "../../../assets/star.png";
import SocialIcons from "../../footer/SocialIcons";
import SideBarQuote from "./SideBarQuote";

function SideBar() {
  const { isOpen, openBar } = useContext(NavLinksContext);

  return (
    <div className="color-white mobile-size">
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={openBar}
        className="menu-button column-c w-auto h-auto m-1 cursor-p"
      >
        <div></div>
        <div></div>
        <div></div>
      </motion.div>
      {isOpen && <SideMenu openBar={openBar} />}
    </div>
  );
}

function SideMenu() {
  const { openBar, dropDownMenu, subMenu } = useContext(NavLinksContext);
  return (
    <motion.aside
      variants={slideLeft}
      animate="visible"
      initial="hidden"
      className="pos-f z-5 column-c of-h w-full h-auto bg-black top-0 l-0 side-bar"
    >
      <div className="w-full display-f jc-c">
        <button
          onClick={openBar}
          className="bg-transparent cursor-p m-3 b-none a-items-c display-f"
        >
          <motion.img
            whileHover={{ scale: 1.3 }}
            className="w-20 h20"
            src={close}
            alt="close"
          />
        </button>
      </div>
      <div className=" column-c">
        {navlinksData.map((sideLink) => {
          return (
            <div className="m-2 of-h w-300 column-c" key={sideLink.id}>
              <h1
                onClick={() => dropDownMenu(sideLink.child)}
                className="font-s-lg display-f cursor-p pl-7 p-1 jc-fs a-items-c w-250 font-f-kelt text-t-up golden-text-style"
              >
                <img className="pr-2 w-30 h-30" src={star} alt="star" />
                {sideLink.name}
              </h1>
              {subMenu === sideLink.child && (
                <SideSubLinks openBar={openBar} data={sideLink.child} />
              )}
            </div>
          );
        })}
      </div>
      <SideBarQuote />
      <SocialIcons />
      <h4 className="font-f-kelt font-s-md m-1">all right's reserved</h4>
    </motion.aside>
  );
}

export default SideBar;
