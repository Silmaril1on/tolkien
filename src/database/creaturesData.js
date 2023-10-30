import ent from "../assets/ent.png";
import ungoliant from "../assets/ungoliant.png";
import smaug from "../assets/smaug.png";
import shelob from "../assets/shelob.png";
import balrog from "../assets/balrog.png";
import ancalagon from "../assets/ancalagon.png";
import wargs from "../assets/wargs.png";
import eagle from "../assets/eagle.png";
import fellbeast from "../assets/fellbeast.png";
import gollum from "../assets/gollum.png";
import glaurung from "../assets/glaurung.png";

const creatures = [
  {
    id: 0,
    name: "balrogs",
    child: [
      {
        id: 0,
        name: "balrogs",
        image: balrog,
        info: "The Balrogs, or Valaraukar, were a group of three to seven Maiar who were seduced and corrupted by Melkor into his service. Originally, in unrecorded ancient times, the Balrogs were a group of three to seven Maiar that were persuaded by Melkor's might and splendor to join his cause. Their first dwelling was in Utumno, the great fortress of the Iron Mountains, but after their master's defeat during the Battle of the Powers, the Balrogs and other creatures in Melkor's service escaped to Angband and hibernated there. In FA 510, on the day of the Fall of Gondolin, the Balrogs rode upon the backs of dragons to reach the hidden city. The Lord of the House of the Fountain, Ecthelion, managed to kill Gothmog at the cost of his own life. While attempting to escape the burning city, Glorfindel and his companions were blocked by a Balrog, which may have been Lungorthin. To save Tuor, Idril and their young son Eärendil, Glorfindel fought the Balrog on a cliff and cast it down, but he was pulled down with it to their deaths.",
        quote:
          '"Then something came into the chamber - I felt it through the door, and the Orcs themselves were afraid and fell silent. It laid hold of the iron ring, and then it perceived me and my spell."',
      },
    ],
  },
  {
    id: 1,
    name: "ancalagon",
    child: [
      {
        id: 1,
        name: "ancalagon the black",
        image: ancalagon,
        info: "Ancalagon, often titled 'The Black', was the greatest of all winged dragons. He was bred by Morgoth during the First Age and was the largest dragon to have ever existed in Middle-earth. His appearance in history was restricted to the War of Wrath. After Eärendil made his journey to Valinor to convince the Valar to overthrow Morgoth and rescue the overmatched and defeated Elves and Edain, the Host of Valinor made war upon Morgoth and destroyed his armies. Facing final defeat, Morgoth unleashed his last and greatest weapon; a fleet of winged fire drakes, led by Ancalagon. So terrible was their onslaught that the armies of the Valar were driven back from the gates of Angband, and their coming was said to have been accompanied by great thunder, lightning, and a tempest of fire. But Eärendil came out of the West in his blessed ship Vingilot, accompanied by a myriad of the Eagles of Manwë led by Thorondor. The Eagles and Eärendil dueled with Ancalagon and the other dragons for a day. Eventually, Eärendil was victorious, casting Ancalagon down upon Thangorodrim, destroying the volcanic mountains in his fall. The death of Ancalagon marked the end of Morgoth's final resistance.",
        quote:
          ' "It has been said that dragon-fire could melt and consume the Rings of Power, but there is not now any dragon left on earth in which the old fire is hot enough; nor was there ever any dragon, not even Ancalagon the Black, who could have harmed the One Ring, the Ruling Ring, for that was made by Sauron himself."',
      },
    ],
  },
  {
    id: 2,
    name: "smaug",
    child: [
      {
        id: 2,
        name: "smaug",
        image: smaug,
        info: "Smaug was a fire-drake of the Third Age, considered to be the last 'great ' dragon of Middle-earth. He was drawn to the enormous wealth amassed by the Dwarves of the Lonely Mountain during King Thrór's reign. He laid waste to the nearby city of Dale and captured the Lonely Mountain, driving the surviving Dwarves into exile. For 171 years, Smaug hoarded the Lonely Mountain's treasures to himself, staying within the mountain, until a company of Dwarves managed to enter the Lonely Mountain and awaken him from hibernation. Correctly believing that the Dwarves had received assistance from the men of Lake-town in entering the Lonely Mountain, Smaug left the mountain to wreak destruction upon Lake-town, nearly destroying it before being slain by Bard the Bowman.",
        quote:
          '"My armour is like tenfold shields, my teeth are swords, my claws spears, the shock of my tail is a thunderbolt, my wings a hurricane, and my breath death!"',
      },
    ],
  },
  {
    id: 3,
    name: "shelob",
    child: [
      {
        id: 3,
        name: "shelob",
        image: shelob,
        info: "Shelob was a great Spider and the greatest offspring of Ungoliant, the primordial spider. In the Third Age she lived on the borders of Mordor and was known to feed indiscriminately, preying on the inhabitants. She was encountered by Frodo Baggins and Samwise Gamgee in their quest to destroy the One Ring. Sauron was aware of Shelob's presence in the mountains and allowed her to dwell there, for she made an excellent, if incidental, guard for the pass of Cirith Ungol. Sauron was known to be somewhat fond of her, and in a rare show of humor, was even known to refer to her as his cat. Sauron would sometimes give her food in the form of prisoners for which he had no more use, or servants who had displeased him. Reports of the massacre made by Shelob would be carried back to Barad-dûr to further please the Dark Lord's humor. She would also sometimes eat Orcs that manned the Tower of Cirith Ungol. However, as she was a more effective guard for the pass than they, Sauron never made any serious attempt to stop her (though Orcs would occasionally try to barricade her lair with stones).",
        quote:
          '"But still, she was there, who was there before Sauron, and before the first stone of Barad-dûr; and she served none but herself, drinking the blood of Elves and Men, bloated and grown fat with endless brooding on her feasts, weaving webs of shadow; for all living things were her food, and her vomit darkness."',
      },
    ],
  },
  {
    id: 4,
    name: "wargs",
    child: [
      {
        id: 4,
        name: "wargs",
        image: wargs,
        info: "Wargs were a breed of wolves in the Dark Lord Sauron's service, commonly living in the Misty Mountains. They were used as mounts by the Orcs of Isengard and Mordor, and others had an alliance with the northern Goblins. They appear first in The Hobbit, attacking Thorin and Company as they traveled east from the Misty Mountains. In Théoden's retreat to Helm's Deep from the threat of Isengard in TA 3019, a scout reported that wolf-riders were abroad in the valley, but Wargs were not specifically mentioned. In TA 2941, a group of Wargs planned to meet the Orcs of Goblin-town and organize a raid on several nearby villages, to expel the Woodmen and capture some slaves. As the pack approached the meeting-place east of the mountains, they happened upon Thorin's Company along with Gandalf and Bilbo Baggins, who had just escaped from the same goblins. The Wizard had anticipated this, suggesting the Company climb up a nearby stand of trees. This was done, and Dori helped Bilbo out of the Wargs' reach just in time.",
        quote:
          '"Wargs are described as being giant, intelligent, and malevolent wolves."',
      },
    ],
  },
  {
    id: 5,
    name: "eagles",
    child: [
      {
        id: 5,
        name: "great eagles",
        image: eagle,
        info: "The Great Eagles were beings of Arda said to have been 'devised' by Manwë Súlimo, leader of the Valar, and were often called the Eagles of Manwë. They were sent from Valinor to Middle-earth to keep an eye on the exiled Ñoldor, and also upon their foe the evil Vala Morgoth, and later upon Sauron. The Great Eagles were the messengers and spies of Manwë, and possessed the ability to see through all physical matter, except for the blackness of Morgoth's evil pits. Morgoth first discovered the limits of their sight prior to the fall of the great stronghold of Utumno. For a time, the King of the Eagles, Thorondor, kept his eyries at the top of Thangorodrim, the three mighty peaks that Morgoth raised from the Iron Mountains above the gates of Angband. While they lived there, Thorondor helped Fingon rescue Maedhros from one of the sides of Thangorodrim. Thorondor's folk later removed their eyries to the Crissaegrim, part of the Echoriad encircling the secret location of Gondolin. There they were friends of King Turgon, and kept any spies away from the mountains.",
        quote:
          '"The Great Eagles fought alongside the host of Elves, the Valar, and Edain in the War of Wrath at the end of the First Age, intervening decisively with Eärendil in a fight with Ancalagon."',
      },
    ],
  },
  {
    id: 6,
    name: "fellbeasts",
    child: [
      {
        id: 6,
        name: "fellbeasts",
        image: fellbeast,
        info: "The Black Wings, also referred to as Nazgûl-birds, also referred to as hell-hawks and 'fell beasts', were the flying creatures of Mordor ridden by the Nazgûl after their black horses were lost in the Ford of Bruinen in October of TA 3018. The Black Wings were described as great winged beasts, wielding beaks and talons into battle. Though these creatures were bird-like in form, they were larger and more monstrous than any bird. Their bodies were pitch black in color and naked, lacking quills or feathers. These creatures had long serpentine necks and pinions in between their horned fingers, forming bat-like wings. They also gave off a foul stench and made loud terrible noises. It is possible that the Black Wings came from an older world, being survivors of early geological eras. The dark lord Sauron bred them, later giving them to the Nine as mounts. When the Fellowship of the Ring had left Lothlórien and were camped on the western shore of the Anduin, they saw a great winged creature, blacker than the pits in the night. When Legolas raised the great bow of Lórien and shot it with an arrow, it gave a harsh croaking scream and vanished into the gloom of the Eastern shore.",
        quote:
          '"There is a common misconception that the Black Wings are the Nazgûl themselves."',
      },
    ],
  },
  {
    id: 7,
    name: "ungoliant",
    child: [
      {
        id: 7,
        name: "ungoliant",
        image: ungoliant,
        info: "Ungoliant was a primordial taking the shape of a gigantic spider. She was initially an ally of Melkor in Aman, and for a short time in Middle-earth as well. She was a distant mother of Shelob, and the oldest and first giant spider of Arda. The true origin of Ungoliant was unknown, even to the Valar. It is said that she came from the Darkness itself that lay about Arda and was once an ally of Melkor when he looked down upon the world with envy. Considering that the Ainur passed through the Void while venturing from the Timeless Halls to Arda, it is possible she was simply a powerful Maia in the form of a spider, or a being from the Void itself.",
        quote:
          '"Though she was tempted greatly by Melkors plan for her to drink the light of the Two Trees of Valinor, she feared the power of the Valar and was hesitant to accompany him"',
      },
    ],
  },
  {
    id: 8,
    name: "ents",
    child: [
      {
        id: 8,
        name: "ents",
        image: ent,
        info: "Ents, also known as Onodrim (Tree-host) by the Elves, were a very old race of Middle-earth. They were apparently created at the behest of Yavanna after she learned of Aulë's children, the Dwarves, knowing that they would want to fell trees. Becoming 'shephers' of the trees, they protected certain forests from Orcs and other perils. The Elves had tales of teaching the trees and the Ents to talk: although the Ents were sentient beings at the time, they did not know how to speak until the Elves taught them. Treebeard spoke of the Elves curing the Ents of their dumbness, an unforgettable gift.",
        quote: '"We must not be hasty."',
      },
    ],
  },
  {
    id: 9,
    name: "gollum",
    child: [
      {
        id: 9,
        name: "gollum",
        image: gollum,
        info: "Gollum, originally named Sméagol (or Trahald), was a Stoor, one of the three early Hobbit-types in the Third Age. By possessing the One Ring, his life extended centuries beyond his nature, and he became deformed and twisted in body and mind by the corruption of the Ring. He pursued the Ring for many years after Bilbo Baggins found it in Gollum's cave, within the Misty Mountains, and took it away. Inadvertently, Gollum would play a vital role in the ultimate Quest of the Ring. The name Gollum was derived from the sound of his gurgling, choking cough. He lived in the Misty Mountains for over four hundred years, living on raw blind fish (which he caught from his small boat), bats, and occasionally, stray Orcs. Gollum even made a song about raw fish, which is The rocks and stones! They're like old bones all bare of meat! that he used as a riddle to Bilbo, and would much later sing to Frodo Baggins in a longer version. He found Hobbit and Elven food repulsive.",
        quote:
          '"He will never be rid of his need for it. He hates and loves the Ring, as he hates and loves himself. Sméagols life is a sad story. Yes, Sméagol he was once called. Before the Ring found him. Before it drove him mad."',
      },
    ],
  },
  {
    id: 10,
    name: "glaurung",
    child: [
      {
        id: 9,
        name: "glaurung",
        image: glaurung,
        info: "Glaurung was the first terrestrial, fire-breathing dragon in Middle-earth, bred by Morgoth himself in the depths of Angband. He was known as the Father of Dragons and so possibly was the progenitor of the dragons. After suffering several defeats at the hands of the Ñoldor in Beleriand, Morgoth realized that his Orcs were no match for the Ñoldor unaided. As such, he began considering deadlier forces to deploy. After a century of brooding and growing in the dark pits of Angband, the dragon Glaurung emerged in FA 260, and attacked the Elves maintaining the Siege of Angband. Though Glaurung was not of the winged race that would later arise, he was the greatest terror of his time. He burned and ravaged Ard-Galen and the outlying settlements of Hithlum and Dorthonion. However, he was not yet at his full strength, thus being driven back by Fingon ‒ the prince of Hithlum at that time ‒ and his archers. Morgoth was displeased with Glaurung for revealing himself before he had grown to full strength, but this did not significantly disrupt the Dark Lord's plans.",
        quote:
          '"Evil have been all thy ways, son of Húrin. Thankless fosterling, outlaw, slayer of thy friend, thief of love, usurper of Nargothrond, captain foolhardy, and deserter of thy kin."',
      },
    ],
  },
];

export default creatures;
