import elijah from "../assets/elijah.jpg";
import orlando from "../assets/orlando.jpg";
import lawrence from "../assets/lawrence.jpg";
import craig from "../assets/craig.jpg";
import sala from "../assets/sala.jpg";
import martin from "../assets/martin.jpg";
import noble from "../assets/noble.jpg";
import lilly from "../assets/lilly.jpg";
import hugo from "../assets/hugo.jpg";
import karl from "../assets/karl.jpg";
import ianholm from "../assets/ian-holm.jpg";
import lee from "../assets/lee.jpg";
import billy from "../assets/billy.jpg";
import davies from "../assets/davies.jpg";
import seanbean from "../assets/sean-bean.jpg";
import dominic from "../assets/dominic.jpg";
import seanaustin from "../assets/sean-austin.jpg";
import andy from "../assets/andy.jpg";
import cate from "../assets/cate.jpg";
import liv from "../assets/liv.jpg";
import viggo from "../assets/viggo.jpg";
import ian from "../assets/ian.jpg";
import bernard from "../assets/bernard.jpg";
import brad from "../assets/brad.jpg";
import faramir from "../assets/faramir.jpg";
import miranda from "../assets/miranda.jpg";
import lotr1 from "../assets/lotr1poster.jpg";
import lotr2 from "../assets/lotr2poster.jpg";
import lotr3 from "../assets/lotr3poster.jpg";
import hobbit1 from "../assets/hobbit1poster.jpg";
import hobbit2 from "../assets/hobbit2poster.jpg";
import hobbit3 from "../assets/hobbit3poster.jpg";
import oin from "../assets/oin.jpg";
import nori from "../assets/nori.jpg";
import ori from "../assets/ori.jpg";
import dori from "../assets/dori.jpg";
import bifur from "../assets/bifur.jpg";
import gloin from "../assets/gloin.jpg";
import azog from "../assets/azog.jpg";
import beom from "../assets/beom.jpg";
import fili from "../assets/fili.jpg";
import bofur from "../assets/bofur.jpg";
import thranduil from "../assets/thranduil.jpg";
import benedict from "../assets/benedict.jpg";
import craham from "../assets/craham.jpg";
import richard from "../assets/richard.jpg";
import luke from "../assets/luke.jpg";
import kili from "../assets/kili.jpg";

const movies = [
  {
    id: 0,
    name: "the lord of the rings",
    child: [
      {
        id: 0,
        name: "the fellowship of the ring",
        image: lotr1,
        child: [
          {
            id: 0,
            cast: [
              {
                name: "elijah wood",
                image: elijah,
                subName: "frodo baggins",
              },
              {
                name: "orlando bloom",
                image: orlando,
                subName: "legolas",
              },
              {
                name: "ian McKellen",
                image: ian,
                subName: "gandalf",
              },
              {
                name: "viggo mortensen",
                image: viggo,
                subName: "aragorn",
              },
              {
                name: "liv tyler",
                image: liv,
                subName: "arwen",
              },
              {
                name: "cate blanchett",
                image: cate,
                subName: "galadriel",
              },
              {
                name: "andy serkis",
                image: andy,
                subName: "gollum",
              },
              {
                name: "sean austin",
                image: seanaustin,
                subName: "samwise gamgee",
              },
              {
                name: "dominic monaghan",
                image: dominic,
                subName: "merry",
              },
              {
                name: "sean bean",
                image: seanbean,
                subName: "boromir",
              },
              {
                name: "john rhys-davies",
                image: davies,
                subName: "gimli",
              },
              {
                name: "billy boyd",
                image: billy,
                subName: "pippin took",
              },
              {
                name: "christopher lee",
                image: lee,
                subName: "saruman",
              },
              {
                name: "ian holm",
                image: ianholm,
                subName: "bilbo baggins",
              },
              {
                name: "hugo weaving",
                image: hugo,
                subName: "elrond",
              },
              {
                name: "sala baker",
                image: sala,
                subName: "sauron",
              },
              {
                name: "miranda otto",
                image: miranda,
                subName: "eowyn",
              },
              {
                name: "bernard hill",
                image: bernard,
                subName: "theoden",
              },
              {
                name: "karl urban",
                image: karl,
                subName: "eomer",
              },
              {
                name: "David Wenham",
                image: faramir,
                subName: "faramir",
              },
              {
                name: "lawrence makoare",
                image: lawrence,
                subName: "witch king",
              },
              {
                name: "craig parker",
                image: craig,
                subName: "haldir",
              },
              {
                name: "brad dourif",
                image: brad,
                subName: "grima",
              },
              {
                name: "john noble",
                image: noble,
                subName: "denethor II",
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "the two tower",
        image: lotr2,
      },
      {
        id: 2,
        name: "the return of the king",
        image: lotr3,
      },
    ],
  },
  {
    id: 1,
    name: "the hobbit",
    link: "hobbit",
    child: [
      {
        id: 0,
        name: "An Unexpected Journey",
        image: hobbit1,
        child: [
          {
            id: 0,
            cast: [
              {
                name: "martin freeman",
                image: martin,
                subName: "bilbo baggins",
              },
              {
                name: "orlando bloom",
                image: orlando,
                subName: "legolas",
              },
              {
                name: "ian McKellen",
                image: ian,
                subName: "gandalf",
              },
              {
                name: "evangeline lilly",
                image: lilly,
                subName: "tauriel",
              },
              {
                name: "john callen",
                image: oin,
                subName: "oin",
              },
              {
                name: "cate blanchett",
                image: cate,
                subName: "galadriel",
              },
              {
                name: "andy serkis",
                image: andy,
                subName: "gollum",
              },
              {
                name: "jed brophy",
                image: nori,
                subName: "nori",
              },
              {
                name: "adam brown",
                image: ori,
                subName: "ori",
              },
              {
                name: "mark hadlow",
                image: dori,
                subName: "dori",
              },
              {
                name: "william kircher",
                image: bifur,
                subName: "bifur",
              },
              {
                name: "peter hambleton",
                image: gloin,
                subName: "gloin",
              },
              {
                name: "christopher lee",
                image: lee,
                subName: "saruman",
              },
              {
                name: "lee pace",
                image: thranduil,
                subName: "thranduil",
              },
              {
                name: "hugo weaving",
                image: hugo,
                subName: "elrond",
              },

              {
                name: "manu bannet",
                image: azog,
                subName: "azog",
              },
              {
                name: "richard armitage",
                image: richard,
                subName: "thorin",
              },
              {
                name: "luke evans",
                image: luke,
                subName: "bard",
              },
              {
                name: "ben cumberbatch",
                image: benedict,
                subName: "smaug",
              },
              {
                name: "mikael persbrandt",
                image: beom,
                subName: "beom",
              },
              {
                name: "dean o'gorman",
                image: fili,
                subName: "fili",
              },
              {
                name: "graham McTavish",
                image: craham,
                subName: "dwalin",
              },
              {
                name: "james nesbitt",
                image: bofur,
                subName: "bofur",
              },
              {
                name: "aidan turner",
                image: kili,
                subName: "kili",
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "The Desolation of Smaug",
        image: hobbit2,
      },
      {
        id: 2,
        name: "The Battle of the Five Armies",
        image: hobbit3,
      },
    ],
  },
  {
    id: 2,
    name: "rings of Power",
    link: "ringsofpower",
  },
];

export default movies;
