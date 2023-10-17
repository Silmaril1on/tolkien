import angmarIcon from "../assets/angmar-icon.png";
import angmarReg from "../assets/angmar-reg.png";
import ereborIcon from "../assets/erebor-icon.png";
import ereborReg from "../assets/erebor-reg.png";
import rhunIcon from "../assets/rhun-icon.png";
import rhunReg from "../assets/rhun-reg.png";
import lindonIcon from "../assets/lindon-icon.png";
import lindonReg from "../assets/lindon-reg.png";
import mordorIcon from "../assets/mordor-icon.png";
import mordorReg from "../assets/mordor-reg.png";
import gondorIcon from "../assets/gondor-icon.png";
import gondorReg from "../assets/gondor-reg.png";
import rohanIcon from "../assets/rohan-icon.png";
import rohanReg from "../assets/rohan-reg.png";
import isengardIcon from "../assets/isengard-icon.png";
import isengardReg from "../assets/isengard-reg.png";
import arnorIcon from "../assets/arnor-icon.png";
import arnorReg from "../assets/arnor-reg.png";
import lothlorienIcon from "../assets/lothlorien-icon.png";
import lothlorienReg from "../assets/lothlorien-reg.png";
import angmarFlag from "../assets/angmar-flag.png";
import ereborFlag from "../assets/erebor-flag.png";
import rhunFlag from "../assets/rhun-flag.png";
import lindonFlag from "../assets/lindon-flag.png";
import mordorFlag from "../assets/mordor-flag.png";
import gondorFlag from "../assets/gondor-flag.png";
import rohanFlag from "../assets/rohan-flag.png";
import isengardFlag from "../assets/isengard-flag.png";
import arnorFlag from "../assets/arnor-flag.png";
import lothlorienFlag from "../assets/lothlorien-flag.png";
import rohanImg from "../assets/rohan-image.png";
import lothlorienImg from "../assets/lothlorien-image.png";
import mordorImg from "../assets/mordor-image.png";
import angmarImg from "../assets/angmar-image.png";
import lindonImg from "../assets/lindon-image.png";
import gondorImg from "../assets/gondor-image.png";
import ereborImg from "../assets/erebor-image.png";
import arnorImg from "../assets/arnor-image.png";
import isengardImg from "../assets/isengard-image.png";
import rhunImg from "../assets/rhun-image.png";

const middleEarth = [
  {
    id: 0,
    name: "angmar",
    icon: angmarIcon,
    region: angmarReg,
    child: [
      {
        id: 0,
        name: "angmar",
        info: "Angmar, also known as the Witch-realm of Angmar and the Land of Angmar, was a kingdom established around TA 1300 by the Lord of the Nazgûl later titled the 'Witch-king of Angmar', located in a vale south of the Mountains of Angmar and founded with the sole purpose of destroying the successor kingdoms of Arnor. The land was known in part for its cold and snowy weather.",
        flag: angmarFlag,
        image: angmarImg,
      },
    ],
  },
  {
    id: 1,
    name: "erebor",
    icon: ereborIcon,
    region: ereborReg,
    child: [
      {
        id: 0,
        name: "erebor",
        info: "The Lonely Mountain, known in Sindarin as Erebor, referred to both a mountain in northern Rhovanion and the subterranean Dwarven city contained within it. In the latter half of the Third Age, it became the greatest Dwarvern city in Middle-earth.It was located northeast of Mirkwood, near the Grey Mountains, and was the source of the River Running.",
        flag: ereborFlag,
        image: ereborImg,
      },
    ],
  },
  {
    id: 2,
    name: "rhun",
    icon: rhunIcon,
    region: rhunReg,
    child: [
      {
        id: 0,
        name: "rhun",
        info: "Rhûn, also called The East and Eastlands in the Westron tongue, was a large region in far-eastern Middle-earth. It was the home of the Easterlings in the Second and Third Ages. It had many different groups who often fought each other but who were united by Sauron in hatred of the West, and served him in the War of the Rings.",
        flag: rhunFlag,
        image: rhunImg,
      },
    ],
  },
  {
    id: 3,
    name: "mordor",
    icon: mordorIcon,
    region: mordorReg,
    child: [
      {
        id: 0,
        name: "mordor",
        info: "Mordor was a black, volcanic plain in the southeast of Middle-earth to the east of Gondor, Ithilien, and the great river Anduin. Mordor was chosen by Sauron as his realm because of the mountain ranges surrounding it on three sides, creating a natural fortress against his enemies preventing them from easily invading it.",
        flag: mordorFlag,
        image: mordorImg,
      },
    ],
  },
  {
    id: 4,
    name: "lindon",
    icon: lindonIcon,
    region: lindonReg,
    child: [
      {
        id: 0,
        name: "lindon",
        info: "Lindon was a region of western Middle-earth. Initially populated by Laiquendi, in the following Ages it became an important Elven realm, known for its harbors and ships that would embark unto the Uttermost West.",
        flag: lindonFlag,
        image: lindonImg,
      },
    ],
  },
  {
    id: 5,
    name: "lothlorien",
    icon: lothlorienIcon,
    region: lothlorienReg,
    child: [
      {
        id: 0,
        name: "lothlorien",
        info: "Lothlórien, also known as Lórien, was the vast woodland realm of the Galadhrim elves located near the lower Misty Mountains in northern Middle-earth. It was first settled by the Nandor, but they were later joined by a small number of Ñoldor and Sindar under Celeborn of Doriath and Galadriel, daughter of Finarfin. It was located on the River Celebrant, southeast of Khazad-dûm, and was the only place in Middle-earth where the golden Mallorn trees grew.",
        flag: lothlorienFlag,
        image: lothlorienImg,
      },
    ],
  },
  {
    id: 6,
    name: "gondor",
    icon: gondorIcon,
    region: gondorReg,
    child: [
      {
        id: 0,
        name: "gondor",
        info: "Gondor was the most prominent kingdom of Men in Middle-earth, bordered by Rohan to the north, Harad to the south, the Cape of Andrast and the Sea to the west, and Mordor to the east. Its first capital was Osgiliath, moved to Minas Anor in TA 1640. This city, later renamed Minas Tirith, remained the capital of Gondor for the rest of the Third Age and into the Fourth Age; other major fortresses included Pelargir, Dol Amroth in Belfalas and Minas Ithil.",
        flag: gondorFlag,
        image: gondorImg,
      },
    ],
  },
  {
    id: 7,
    name: "rohan",
    icon: rohanIcon,
    region: rohanReg,
    child: [
      {
        id: 0,
        name: "rohan",
        info: "The Kingdom of Rohan,or the Riddermark, was a great kingdom of Men located in the land once known as Calenardhon, situated in the plains between the Misty Mountains and the White Mountains. The land of Rohan extended from the banks of the River Isen in the west, up to the East Wall of Rohan and shores of the River Anduin in the east. The forest of Fangorn lay on its border, and the Elven forest of Lothlórien lay north of the River Limlight.",
        flag: rohanFlag,
        image: rohanImg,
      },
    ],
  },
  {
    id: 8,
    name: "isengard",
    icon: isengardIcon,
    region: isengardReg,
    child: [
      {
        id: 0,
        name: "isengard",
        info: "Isengard, also known as Angrenost 'Iron Fortress' in Sindarin, was one of the three major fortresses of Gondor, and held within it one of the realm's palantíri.However, in the latter half of the Third Age, the stronghold came into the possession of the Wizard Saruman, becoming his home and seat of power until his defeat in the War of the Ring.",
        flag: isengardFlag,
        image: isengardImg,
      },
    ],
  },
  {
    id: 9,
    name: "arnor",
    icon: arnorIcon,
    region: arnorReg,
    child: [
      {
        id: 0,
        name: "arnor",
        info: "Arnor, also known as the Northern Kingdom, was a kingdom of Men located in the land of Eriador in Middle-earth. Arnor was founded in SA 3320 by Elendil, the sister kingdom to the southern realm of Gondor founded by his sons. The history of the two kingdoms are intertwined; both kingdoms are known as the Realms of the Dúnedain in Exile.",
        flag: arnorFlag,
        image: arnorImg,
      },
    ],
  },
];

export default middleEarth;
