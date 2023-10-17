import React, { useEffect, useState } from "react";
import characters from "../../../database/characters";
import line from "../../../assets/line2.png";
import SectionHeader from "../../../components/SectionHeader";
import { lightsVariant } from "../../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import light from "../../../assets/lights.png";

function CharactersSlider() {
  const arr = characters.slice(0, 1).map((item) => item.heroes);
  const heroesArray = arr[0];

  const [people, setPeople] = useState(heroesArray);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <section className="slider-wrapper of-h desktop-size column-c pos-r p-1">
      <div className="w-full pos-a top-0 h-full">
        <motion.img
          variants={lightsVariant}
          animate="visible"
          className="w-full h-full"
          src={light}
          alt="light"
        />
      </div>
      <div className="mt-2">
        <SectionHeader>characters</SectionHeader>
      </div>
      <img className="desktop-size w-full of-cover m-5" src={line} alt="line" />
      <div className="slider-container">
        {people.map((heroes, personIndex) => {
          const { image, name, info, quote, id } = heroes;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <section className="pos-r p-2 h-9 row-sa w-auto">
                <div className="image w-auto h-400">
                  <img className="h-full w-auto pl-5" src={image} alt={name} />
                </div>
                <div className="content w-500 column-sa h-full">
                  <h1 className="font-f-aniron p-2 font-s-md golden-text-style">
                    {name}
                  </h1>
                  <h4 className="font-f-secondary p-2 font-w-400">{info}</h4>
                  <h3 className="font-f-kelt p-2 lh-25 font-s-i color-white">
                    {quote}
                  </h3>
                </div>
              </section>
            </article>
          );
        })}
        <div className="pos-a t-100 z-10 w-7 row-sb">
          <button
            className="left-button"
            onClick={() => setIndex(index - 1)}
          ></button>
          <button
            className="right-button"
            onClick={() => setIndex(index + 1)}
          ></button>
        </div>
      </div>
      <div className="dots row-sa m-2 p-2">
        {people.map((item) => {
          return (
            <div key={item.id}>
              <div
                className={index === item.id ? "dot-active" : "dot"}
                onClick={() => goToSlide(item.id)}
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CharactersSlider;
