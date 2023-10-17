import React from "react";
import "../../styles/index.scss";
import "./footer.scss";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

function SocialIcons() {
  return (
    <div className="row-c">
      <span className="footer-span">
        <BsFacebook />
      </span>
      <span className="footer-span">
        <BsTwitter />
      </span>
      <span className="footer-span">
        <BsInstagram />
      </span>
      <span className="footer-span">
        <BsYoutube />
      </span>
    </div>
  );
}

export default SocialIcons;
