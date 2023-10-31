import React from "react";
import NewsSlider from "./NewsSlider";
import NewsContent from "./NewsContent";

function News() {
  return (
    <main
      id="news"
      className="news w-full box-s-bb pt-4 h-full color-white column-c"
    >
      <NewsSlider />
      <NewsContent />
    </main>
  );
}

export default News;
