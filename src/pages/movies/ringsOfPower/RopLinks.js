import React, { useState } from "react";

function RopLinks() {
  const [btnState, setBtnState] = useState(false);

  const toggleClass = (index) => {
    setBtnState(index);
  };

  return (
    <div className="sticky box-s-bb column-c">
      <article className="rop-links bor-lg text-t-cap font-f-secondary p-2 ls-xs color-white">
        <a
          className={btnState === 2 ? "active" : ""}
          onClick={() => toggleClass(2)}
          href="#characters"
        >
          Characters
        </a>
        <a
          className={btnState === 1 ? "active" : ""}
          onClick={() => toggleClass(1)}
          href="#cast"
        >
          Cast
        </a>
        <a
          className={btnState === 3 ? "active" : ""}
          onClick={() => toggleClass(3)}
          href="#facts"
        >
          Facts
        </a>
        <a
          className={btnState === 4 ? "active" : ""}
          onClick={() => toggleClass(4)}
          href="#episodes"
        >
          Episodes
        </a>
      </article>
    </div>
  );
}

export default RopLinks;
