import React from "react";
import imdb from "../../../assets/imdb.png";

function ChapterList({ data }) {
  return (
    <div className="pos-a  w-full h-full top-0 left-0">
      {data.map((item) => {
        return (
          <section className="pos-r w-full h-full" key={item.id}>
            <div className="pos-a linear w-full h-full top-0 left-0">
              <div className="m-2 font-f-kelt text-t-cap">
                <h4 className="responsive-h p-2">{item.name}</h4>
                <p className="w-auto responsive-p mw-400 p-2 font-f-primary color-l-grey">
                  {item.info}
                </p>
                <div className="row-se p-1 w-130">
                  <img className="w-80 h-auto" src={imdb} alt="imdb" />
                  <h3>{item.rating}</h3>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <img
                className="w-full o-fit-cover h-full"
                src={item.image}
                alt="wallpaper"
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ChapterList;
