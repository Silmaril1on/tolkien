import galadriel from "../assets/hero-galadriel.png";
import aragorn from "../assets/hero-aragorn.png";
import gandalf from "../assets/hero-gandalf.png";
import saruman from "../assets/hero-saruman.png";
import sauron from "../assets/hero-sauron.png";
import angmar from "../assets/hero-angmar.png";
import wisdom from "../assets/icon-wisdom.png";
import knowledge from "../assets/icon-knowledge.png";
import courage from "../assets/icon-courage.png";
import inspiration from "../assets/icon-inspiration.png";
import welfare from "../assets/icon-welfare.png";

const homeHeroes = [
  {
    id: 0,
    name: "galadriel",
    image: galadriel,
    icon: welfare,
    text: "prosperity & peace",
    link: "galadriel",
  },
  {
    id: 1,
    name: "aragorn",
    image: aragorn,
    icon: courage,
    text: "courage & inspiration",
    link: "aragorn",
  },
  {
    id: 2,
    name: "sauron",
    image: sauron,
    icon: knowledge,
    text: "devious beauty",
    link: "sauron",
  },
  {
    id: 3,
    name: "gandalf",
    image: gandalf,
    icon: wisdom,
    text: "wisdom & knowledge",
    link: "gandalf",
  },
  {
    id: 4,
    name: "angmar",
    image: angmar,
    icon: inspiration,
    text: "malevolence spirit",
    link: "angmar",
  },
  {
    id: 5,
    name: "saruman",
    image: saruman,
    icon: wisdom,
    text: "wisdom & knowledge",
    link: "saruman",
  },
];

export default homeHeroes;
