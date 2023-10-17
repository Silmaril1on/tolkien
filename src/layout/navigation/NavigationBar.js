import React from "react";
import "./navigation.scss";
import NavContext from "../../context/NavContext";

function NavigationBar() {
  return (
    <>
      <nav className="pos-r h-90 row-sb z-10">
        <div className="navigation-bar"></div>
        <NavContext />
      </nav>
    </>
  );
}

export default NavigationBar;
