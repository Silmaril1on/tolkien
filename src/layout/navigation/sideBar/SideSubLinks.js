import React from "react";
import "../../../styles/index.scss";
import { motion } from "framer-motion";
import { slideLeft } from "../../../framerAnimations/motionValues";
import { Link } from "react-router-dom";

function SideSubLinks({ data, openBar }) {
  return (
    <>
      {data ? (
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          className="m-1 column-c font-f-secondary p-1 w-auto"
        >
          {data.map((sublink) => {
            return (
              <motion.h3 className="m-1" variants={slideLeft} key={sublink.id}>
                <Link
                  onClick={openBar}
                  className="text-d-none color-white p-1 text-t-cap hover-black cursor-p"
                  to={sublink.link}
                >
                  {sublink.name}
                </Link>
              </motion.h3>
            );
          })}
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default SideSubLinks;
