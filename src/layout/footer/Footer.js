import React from "react";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="column-c color-white font-f-primary">
      <h5 className="pt-2 ls-sm">Tolkien world</h5>
      <SocialIcons />
      <p className="font-s-sm t-align-c p-2">
        ©2023 Middle-earth Enterprises. All rights reserved. "Middle-Earth" and
        "The Lord of the Rings" and the names of the characters, events, items,
      </p>
      <ul className="row-sa w-full mw-500 text-t-cap m-2 lst-none">
        <h6 className="cursor-p rop-btn font-s-xs">privacy</h6>
        <h6 className="cursor-p rop-btn font-s-xs">support</h6>
        <h6 className="cursor-p rop-btn font-s-xs">contact us</h6>
      </ul>
    </footer>
  );
}

export default Footer;
