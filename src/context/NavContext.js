import React, { useState } from "react";
import SideBar from "../layout/navigation/sideBar/SideBar";
import Navlinks from "../layout/navigation/desktopNavBar/Navlinks";

export const NavLinksContext = React.createContext();

function NavContext() {
  const [subMenu, setSubMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const dropDownMenu = (id) => {
    if (id === subMenu) {
      setSubMenu(null);
      return;
    }
    setSubMenu(id);
  };

  const openBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavLinksContext.Provider
      value={{ subMenu, isOpen, dropDownMenu, setSubMenu, openBar }}
    >
      <SideBar />
      <Navlinks />
    </NavLinksContext.Provider>
  );
}

export default NavContext;
