import React, { useContext } from "react";
import { slideDown } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import "../navigation.scss";
import "../../../styles/index.scss";
import navlinksData from "../../../database/navlinksData";
import { NavLinksContext } from "../../../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import homeLogo from "../../../assets/lotr-logo1.png";

function Navlinks() {
  const { dropDownMenu, setSubMenu, subMenu } = useContext(NavLinksContext);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <section className="desktop-size h-100 row-sa w-full">
      <div
        onClick={goHome}
        className="home-logo h-90 cursor-p m-1 w-auto color-white"
      >
        <img className="w-full h-full" src={homeLogo} alt="home" />
      </div>
      <div className="pos-r h-100 row-c w-full">
        {navlinksData.map((link) => {
          return (
            <h1
              onMouseEnter={() => dropDownMenu(link.id)}
              onMouseLeave={() => setSubMenu(null)}
              className="primary-text-style m-4 font-f-kelt font-s-lg h-100 column-c"
              key={link.id}
            >
              {link.name}
              {subMenu === link.id && <Sublinks data={link.child} />}
            </h1>
          );
        })}
      </div>
    </section>
  );
}

function Sublinks({ data }) {
  return (
    <>
      {data ? (
        <motion.div
          variants={slideDown}
          initial="hidden"
          animate="visible"
          className="column-c p-1 pt-7 pos-a top-50 z-n2 w-500 bg-black left-n180"
        >
          {data.map((sublinks) => {
            return (
              <Link
                to={sublinks.link}
                variants={slideDown}
                className="font-f-secondary text-d-none hover-black w-500 cursor-p color-white t-align-c  p-1 m-1 text-t-cap font-s-md"
                key={sublinks.id}
              >
                {sublinks.name}
              </Link>
            );
          })}
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navlinks;
