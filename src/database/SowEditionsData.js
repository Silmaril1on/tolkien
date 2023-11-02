import goldEdition from "../assets/GoldEdition.png";
import silverEdition from "../assets/SilverEdition.png";
import standartEdition from "../assets/StandartEdition.png";
import bundleEdition from "../assets/BundleEdition.png";
import expEdition from "../assets/ExpEdition.png";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import standart from "../assets/standart.png";

const editions = [
  {
    id: 0,
    nameImage: gold,
    image: goldEdition,
    edition: "edition",
  },
  {
    id: 1,
    nameImage: silver,
    image: silverEdition,
    edition: "edition",
  },
  {
    id: 2,
    nameImage: standart,
    image: standartEdition,
    edition: "edition",
  },
  {
    id: 3,
    name: "shadow of war expansion pass",
    image: expEdition,
  },
  {
    id: 4,
    name: "xbox one shadow of war bundle",
    image: bundleEdition,
  },
];

export default editions;
