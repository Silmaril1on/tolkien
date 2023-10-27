import React from "react";
import photo from "../../../assets/elvish-tree.jpg";

function ElfTree() {
  return (
    <div className="column-c p-2 h-full w-full color-white">
      <div className="w-full mw-800 h-auto">
        <img className="gen-tree masky" src={photo} alt="gen-tree" />
      </div>
    </div>
  );
}

export default ElfTree;
