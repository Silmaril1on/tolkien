import React from "react";

function RopFactList({ data }) {
  return (
    <div className="h-full w-full pos-a top-0 left-0 z-0 color-white">
      {data.map((item) => {
        return (
          <div className="h-full w-full" key={item.id}>
            <div className="w-full h-full">
              <img
                className="w-full o-fit-cover h-full"
                src={item.image}
                alt="lore"
              />
            </div>
            <div className="pos-a display-f a-items-c jc-fs fact-info h-full top-0 left-0 w-full">
              <div className="font-f-primary mw-40 m-2 p-3">
                <h1 className="text-t-up responsive-h">{item.name}</h1>
                <p className="font-s-sm responsive-p">{item.info}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RopFactList;
