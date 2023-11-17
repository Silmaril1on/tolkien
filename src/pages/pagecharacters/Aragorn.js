import React from "react";
import aragorn from "../../assets/aragorn-color.png";
import "./pageCharacters.scss";
import { forMask, headerZoom } from "../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import LightSmoke from "../../components/LightSmoke";
import EdgeButtons from "./EdgeButtons";
import Line from "../../components/Line";
import aragorn1 from "../../assets/aragorn1.jpg";
import aragorn2 from "../../assets/aragorn2.jpg";
import aragorn3 from "../../assets/aragorn3.jpg";
import aragorn4 from "../../assets/aragorn4.jpg";
import aragorn5 from "../../assets/aragorn5.jpg";
import aragorn6 from "../../assets/aragorn6.jpg";

function Gandalf() {
  return (
    <main className="characters-bio-page h-full of-h bg-black pos-r p-1">
      <div className="pos-f top-0 left-0">
        <LightSmoke />
      </div>
      <section className="responsive-column-c pb-2">
        <article className="h-full info-section z-2 font-f-kelt display-f fd-c a-items-c color-white w-full pt-3">
          <h4 className="res-font font-w-300">Aragorn II</h4>
          <h4 className="responsive-h font-w-300">Heir of Isildur</h4>

          <h4 className="desktop-size w-600 pt-3 pb-3 font-w-300 font-s-md color-l-grey">
            ""I am Aragorn son of Arathorn, and am called Elessar, the Elfstone,
            Dúnadan, the heir of Isildur Elendil's son of Gondor. Here is the
            sword that was broken and is forged again!" <br />
            <br /> - Aragorn
          </h4>
        </article>
        <motion.div
          variants={headerZoom}
          initial="hidden"
          animate="visible"
          className="aragorn-image-div"
        >
          <motion.img
            variants={forMask}
            src={aragorn}
            alt="sauron"
            className="masky-one o-fit-cover w-full h-full"
          />
        </motion.div>
      </section>
      <EdgeButtons />
      <motion.section
        variants={headerZoom}
        initial="hidden"
        whileInView="visible"
        className="character-origin mt-7 pos-r z-2"
      >
        <h1 id="origin">origin</h1>
        <Line />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Aragorn II, son of Arathorn II and Gilraen, also known as Strider and
          Elessar, was the 16th and last Chieftain of the Dúnedain of the North;
          later crowned King Elessar Telcontar (March 1, 2931 - FO 120), the
          26th King of Arnor, 35th King of Gondor and first High King of Gondor
          and Arnor since the short reign of Isildur. He was a great ranger and
          warrior, and bore, as Isildur's heir, the shards of Narsil, reforged
          and renamed Andúril ("Flame of the West") in the War of the Ring.
        </motion.p>
        <q>
          He was Aragorn son of Arathorn, the nine and thirtieth heir in the
          right line from Isildur, and yet more like Elendil than any before
          him.
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Aragorn was a descendant of Elros Tar-Minyatur through the line of the
          Lords of Andúnië to Elendil, High King of Arnor and Gondor. Like all
          of the kings before him, he was related to Elrond through the House of
          Elros. His ancestor Arvedui was wedded to Fíriel, descended from
          Anárion, who bore their son Aranarth, making Aragorn the last
          descendant of both Isildur and Anárion.When he was only two years old,
          his father Arathorn was killed while pursuing Orcs. Aragorn was
          afterwards fostered in Rivendell by Elrond. At the request of his
          mother, his lineage was kept secret, as she feared he would be killed
          like his father and grandfather if his true identity as the descendant
          of Elendil and Heir of Isildur became known. Aragorn was renamed
          "Estel" and was not told about his heritage until 2951. <br />
          <br />
          Elrond revealed to "Estel" his true name and ancestry when he was
          twenty, and gave to him the Ring of Barahir and the Shards of Narsil.
          Elrond withheld the Sceptre of Annúminas from Aragorn until he "came
          of the right" to possess the item. It was also around this time that
          Aragorn met and fell in love with Arwen, Elrond's daughter, newly
          returned from her mother's homeland of Lothlórien where she had been
          visiting her grandmother Galadriel. <br />
          <br />
          Aragorn thereafter assumed his proper role as the sixteenth Chieftain
          of the Dúnedain and left the comforts of Rivendell for the wild, where
          he lived with the remainder of his people, the Rangers of the North,
          whose kingdom had been destroyed through division and the Angmar Wars
          centuries before. Aragorn met Gandalf the Grey in 2956 and they became
          close friends. Heeding Gandalf's advice, Aragorn and the Rangers began
          to guard a small land known as the Shire inhabited by the diminutive
          and agrarian Hobbits, and he became known among the peoples just
          outside the Shire's borders as Strider.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={aragorn1}
            className="h-auto w-full mw-400 bor-sm"
            alt="aragorn"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          From TA 2957 to TA 2980, Aragorn undertook great journeys, serving in
          the armies of King Thengel of Rohan, and Steward Ecthelion II of
          Gondor. Many of his tasks helped to raise morale in the West and
          counter the growing threat of Sauron and his allies, and he earned
          priceless experience which he would later put to use in the War of the
          Ring. Aragorn served these lords in disguise and his name in Gondor
          and Rohan during that time was Thorongil ("Eagle of the Star"). With a
          small squadron of ships from Gondor, he led an assault on the
          long-standing Corsair city of Umbar in 2980, burning many of the
          Corsairs' ships and personally slaying their lord during the battle.
          After the victory at Umbar, "Thorongil" left Gondor and, to the dismay
          of his men, went east.
        </motion.p>
        <motion.h1
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="third-age"
        >
          first age
        </motion.h1>
        <Line />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Later in 2980, he visited Lothlórien, and there once again met Arwen.
          He gave her the heirloom of his House, the Ring of Barahir, and, on
          the hill of Cerin Amroth, Arwen pledged her hand to him in marriage,
          renouncing her Elvish lineage and accepting the Gift of Men; death.
          Elrond withheld from Aragorn permission to marry his daughter until
          such a time as his foster son should be king of "both" Gondor and
          Arnor. As both Elrond and Aragorn knew, to marry a mortal, Arwen would
          be required to choose mortality, and thus deprive the deathless Elrond
          of his daughter while the world lasted. Elrond was also concerned for
          Arwen's own happiness, fearing that in the end she might find death
          (her own and that of her beloved) too difficult to bear. <br />
          <br />
          Before the events of The Lord of the Rings properly take place,
          Aragorn traveled widely through Middle-earth, entering the Dwarven
          mines of Moria via the East-gate of Moria but exiting the same way. He
          also journeyed to Harad, where (in his own words) "the stars are
          strange". Tolkien indicated that these travels occurred after TA 2980,
          but does not indicate what happened during Aragorn's visits. In TA
          3009, Gandalf grew suspicious of the origin of the Ring belonging to
          the Hobbit Bilbo Baggins, which later turned out to be the One Ring,
          the key to the Dark Lord Sauron's power. Setting a guard of Rangers on
          the Shire, Aragorn went at Gandalf's request into Rhovanion in search
          of Gollum, who had once possessed the Ring. He caught the creature in
          the Dead Marshes near Mordor, and brought him as a captive to
          Thranduil's Halls in Mirkwood, where Gandalf questioned him. Gollum,
          however, escaped some time later with the aid of Sauron's Orcs.
        </motion.p>
        <motion.h1
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="second-age"
        >
          second age
        </motion.h1>
        <Line />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Aragorn returned with Gandalf in the spring of TA 3018, and then went
          away on his own journey, and was not able to help when Gandalf
          discovered the Nazgûl were seeking for Frodo and the Ring in the
          Shire. After Frodo left Hobbiton, Gildor Inglorion informed Aragorn
          that the Nine were looking for him and Gandalf was missing. Aragorn
          continued to watch the Great East Road until Tom Bombadil and the four
          hobbits came from the Barrow-downs. Following them to Bree, he met
          Frodo at the Inn of the Prancing Pony under the name "Strider," as the
          Men of Bree called him. Though originally the hobbits were suspicious
          of him, Barliman Butterbur brought a letter from Gandalf that made
          them trust him. Aragorn was aged 87 at that time, nearing the prime of
          life for one of royal Númenórean descent. <br />
          <br />
          After the raid on Bree, Aragorn led the Hobbits out of Bree-land and
          through the Midgewater Marshes. While there, he saw Gandalf's battle
          with the Nazgûl on Weathertop from a distance. When they themselves
          came to Weathertop, they discovered five of the Nazgûl had followed
          them, and during the later attack he fought off the Ringwraiths. After
          attempting to heal Frodo with athelas, he led them across the
          Lone-lands towards the Trollshaws. They met with the Elf-lord
          Glorfindel who led them to the Ford of Bruinen. When the Nazgûl caught
          up with them and Elrond released a flood, Aragorn and the Hobbits
          kindled fire and flushed out those Nazgûl that had remained on the
          western bank. He then accompanied Frodo to Rivendell.
        </motion.p>
        <q>
          What his right name is I've never heard: but he's known round here as
          Strider.
        </q>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={aragorn2}
            className="h-auto w-full mw-300 bor-sm"
            alt="aragorn"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          During the feast of victory, Aragorn was gathering news from Elladan
          and Elrohir, and later helped his friend Bilbo compose his Lay of
          Eärendil. During the Council of Elrond, he revealed himself to Boromir
          as the heir of Isildur and described his capture of Gollum. After
          Elrond decided that the Ring must be destroyed in Mordor, Frodo took
          the burden upon himself. There, Aragorn chose to join Frodo, thus
          forming the Fellowship of the Ring, tasked with accompanying Frodo in
          destroying the Ring in the fires of Mount Doom. Besides Aragorn,
          Gandalf, and Frodo, the company included Frodo's cousins Pippin and
          Merry, his best friend Samwise Gamgee, Legolas the Elf, Gimli the
          Dwarf, and Boromir of Gondor.
        </motion.p>
        <q>
          All that is gold does not glitter, Not all those who wander are lost;
          The old that is strong does not wither, Deep roots are not reached by
          the frost. From the ashes a fire shall be woken, A light from the
          shadows shall spring; Renewed shall be Blade that was Broken, The
          crownless again shall be king. - Bilbos Poem
        </q>
        <motion.h1
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="third-age"
        >
          third age
        </motion.h1>
        <Line />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Aragorn and Gandalf had been planning their journey to Mordor for
          weeks. He and Gandalf guided the Fellowship south along the line of
          the Misty Mountains. When they came to Hollin, Aragorn grew suspicious
          due to the lack of any sound he heard and spotted the Crebain who were
          spying out the land for Saruman. He then convinced Gandalf to try the
          pass over Caradhras. However, while they were still far down the
          mountain, they were caught in a freak storm brought on by Sauron, and
          were forced to retreat. Aragorn, together with Boromir, made a path
          through the snow for the Fellowship to escape. <br />
          <br />
          fter it was proposed to go through Moria, Aragorn reluctantly agreed
          to go and helped fight off the Wargs that attacked them during the
          night. Helping to rescue Frodo from the Watcher in the Water, once the
          company entered Moria, Aragorn remained at the back and noticed Gollum
          beginning to follow them. After they were attacked in the Chamber of
          Mazarbul, Aragorn fought off the attackers and killed the
          Orc-Chieftain, (or Cave-troll in the movies) that had seemingly killed
          Frodo. During Gandalf's battle with the Balrog on the Bridge of
          Khazad-dûm, Aragorn ran to his side and became the Fellowship's leader
          after Gandalf fell, presumed dead. Aragorn then led the company to
          Lothlórien, where he visited Cerin Amroth for the last time. At their
          parting, Lady Galadriel gave him the Elfstone. <br />
          After Lórien, Aragorn and the Fellowship sailed down the River Anduin
          to the Falls of Rauros. Aragorn attempted to catch Gollum several
          times. Though his original plan was to set out for Gondor and aid its
          people in the war, he felt responsible for Frodo after the loss of
          Gandalf and was conflicted about what path to take.
        </motion.p>
        <q>
          Fear not! he said. "Long have I desired to look upon the likenesses of
          Isildur and Anarion, my sires of old. Under their shadow Elessar, the
          Elfstone son of Arathorn of the House of Valandil Isildur's son heir
          of Elendil, has naught to dread!
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          After passing the Argonath, the Fellowship camped at Parth Galen.
          Frodo saw that Boromir had been driven mad by the influence of the One
          Ring, trying to take it. Frodo put the Ring on, rendering him
          invisible, and ran away from Boromir. Frodo climbed to the high seat
          on Amon Hen; from there he could see Sauron's eye looking for him. The
          Hobbit felt the eye but the Dark Lord was distracted by Gandalf the
          White. <br />
          <br />
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={aragorn3}
            className="h-auto w-full mw-300 bor-sm"
            alt="aragorn"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          At this same time, the others were attacked by Saruman's Uruk-hai and
          a battle ensued. During the ensuing battle, Boromir was killed
          defending Merry and Pippin, expressing his remorse privately to
          Aragorn for trying to take the Ring. After discovering that Frodo had
          left, Aragorn and the others decided that they would leave Frodo and
          Sam to rescue Merry and Pippin. Legolas, Gimli, and Aragorn put
          Boromir's body and war gear in one of the Elven boats as a funeral
          boat and tribute to Boromir for his bravery and courage. His body
          would be sent over the Falls of Rauros. <br />
          <br />
          While Frodo continued his quest with Samwise Gamgee, Aragorn, Legolas
          and Gimli went to Rohan to free Merry and Pippin, who had been
          captured by the Uruk-hai in Saruman's service.
        </motion.p>
        <h3>the three hunters</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Aragorn ran from Parth Galen across the width of Rohan in just four
          days. As they approached Fangorn Forest, the "Three Hunters" Aragorn,
          Legolas, and Gimli encountered Éomer, who had recently pursued and
          routed an Orc-band in the area. From Éomer, Aragorn learned that the
          Orcs who had kidnapped Merry and Pippin had been destroyed and that
          the Hobbits had not been found. Dejected, he led Legolas and Gimli to
          the site of the battle. Clues led Aragorn to believe that the Hobbits
          might still be alive, and he led the Three Hunters into Fangorn
          Forest. They did not find the Hobbits, but they did find Gandalf the
          White, sent back to continue his struggle against Sauron. Gandalf told
          the Three Hunters that the Hobbits were safe with the Ents of Fangorn.
        </motion.p>
        <q>
          Where now are the Dunedain, Elessar, Elessar? Where do thy kinsfolk
          wander afar? Near is the hour when the lost should come forth, And the
          Grey Company ride from the North. But dark is the path appointed to
          thee: The Dead watch the road that leads to the Sea.
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Together, Gandalf and the Three Hunters travelled to Edoras, where
          Gandalf freed Théoden from Saruman's enchantment and helped him
          organize the Rohirrim against Saruman. He allied with Théoden and led
          the refugees to Helm's Deep. <br />
          <br />
          Aragorn, Legolas and Gimli then helped the people of Rohan in the
          Battle of the Hornburg, in which they conclusively defeated Saruman's
          army. Afterward Aragorn went with Gandalf to Isengard, only to find it
          in ruins by the work of the Ents. Aragorn, being present with Gandalf,
          Théoden, Éomer, Legolas and Gimli, negotiated in a final parley with
          Saruman. Saruman attempted to bend Théoden to his will, and at first
          the king was almost swayed, but mastering his will he refused to join
          with Saruman. Saruman also attempted to sway Gandalf, but failed in
          this also, and even so Gandalf offered his counterpart the opportunity
          for forgiveness. Saruman refused to repent out of pride and to avoid
          seeming a rebel to Sauron, and thus Gandalf broke Saruman's staff and
          banished him from the Order of Wizards and the White Council. After
          Saruman crawled away, Gríma Wormtongue threw the palantír of Orthanc
          at Gandalf as he and the others were leaving. He missed, however,
          unable to decide if he hated Saruman or Gandalf more, and thus ended
          the Battle of the Hornburg and the Battle of Isengard. After Pippin
          revealed himself to Sauron in the stone, Gandalf gave the palantír
          back to Aragorn.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={aragorn4}
            className="h-auto w-full mw-500 bor-sm"
            alt="aragorn"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Not long after the Grey Company of Rangers arrived from the north,
          dispatched by Galadriel. With them rode Elladan and Elrohir and
          Halbarad, bearing a standard made for him by Arwen. When Aragorn
          returned to Helms Deep, he decided to draw Sauron out and used the
          palantír to show himself and Andúril to the Dark Lord, wrenching the
          Stone to his will after a long struggle with the Dark Lord. However,
          this led Sauron to swiftly send out the forces he had long prepared to
          attack Minas Tirith. <br />
          <br /> In order to defend the city, Aragorn travelled the Paths of the
          Dead, and summoned the Dead Men of Dunharrow who owed allegiance to
          the Heir of Isildur. It had been prophesied by Isildur and Malbeth the
          Seer that the Dead would be summoned once more to pay their debt for
          betraying Gondor an age before. With their aid the Corsairs of Umbar
          were defeated at the Battle of Pelargir. Aragorn, a small force of
          Rangers, and a large contingent of men and soldiers from the southern
          regions then sailed up the Anduin to Minas Tirith. When they arrived
          at the Battle of the Pelennor Fields, Aragorn unfurled a standard that
          Arwen had made for him which showed both the White Tree of Gondor
          along with the jeweled crown and seven stars of the House of Elendil.
          With the help of the southern forces the armies of Gondor and Rohan
          rallied together and defeated Sauron's army. <br />
          <br /> The Steward Denethor II declared that he would not bow to a
          descendant of Isildur (years before, he had seen "Thorongil" as a
          rival to his father's favor and soon discovered his true identity) and
          burned himself to death during the battle, despairing of final
          victory. Aragorn healed Faramir, Denethor's last heir, Éowyn and
          Merry, who together slew the Witch-king as well as many others. This
          won him the immediate recognition of Faramir as rightful heir to the
          throne; his humility and self-sacrifice gained him the hearts of the
          inhabitants of Gondor's capital city. Aragorn's healing abilities,
          moreover, were a sign to the people of Gondor of the identity of their
          true king; as Ioreth said, "The hands of the King are the hands of a
          healer, and so shall the rightful king be known." The people hailed
          him as King that same evening. <br />
          <br />
          Despite his immediate success and popularity, however, and despite his
          claim to the throne through raising the royal banner, Aragorn decided
          to lay aside his claim for the time being. He knew that if he
          aggressively promoted his claim, rival claimants or debates as to his
          legitimacy were not out of the question, and this could be a fatal
          distraction for Gondor at a time when the West needed to be united
          against Sauron. So, to avoid conflict, after he had healed people
          during the following nights of March 15–16, he left Minas Tirith and
          symbolically refused to enter it again until he was crowned King on
          May 1.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={aragorn5}
            className="h-auto w-full mw-400 bor-sm"
            alt="aragorn"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Aragorn possessed Elven wisdom due to his childhood in Rivendell with
          Elrond and the foresight of the Dúnedain. He was also a skilled
          healer, notably with the plant Athelas (also known as Kingsfoil). He
          was also a mighty warrior and an unmatched commander; after the Battle
          of the Pelennor Fields, he, Éomer, and Imrahil were said to be left
          unscathed, even though they had been in the thick of the fighting.
        </motion.p>
        <h3>captain of the west</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Aragorn then led the Army of the West to Mordor as per the advice of
          Gandalf and Elrond, to divert Sauron's attention from Frodo and Sam.
          They marched over the Anduin river and came to Minas Morgul, and set
          fire to the fields there. Leaving a guard at the Cross-roads, they
          began to march north through Ithilien, and Aragorn won a skirmish
          against some Orcs and Easterlings that tried to ambush them. They then
          reached the desert before Mordor, and Aragorn allowed those who were
          afraid to depart to retake Cair Andros. The Army of the West then
          reached the Black Gate, and Aragorn along with Gandalf, Éomer,
          Imrahil, Pippin, Legolas and Gimli rode up to it and called for Sauron
          to come forth. He then watched as the Mouth of Sauron revealed Sauron
          knew about Frodo and Sam, and saw Gandalf's rejection of Sauron's
          terms. The Host of the West was then encircled by Sauron's forces, a
          vast army of Orcs and Men. Aragorn then arranged the Army of the West
          defensively on two Slag Hills and the Battle of the Black Gate began.
          After the destruction of the Ring and the defeat of Sauron, Aragorn
          presided over the clearing out of the final Orcs in Mordor, the
          freeing of the slaves of Núrn and the healing of the Host. <br />
          <br />
        </motion.p>
        <q>
          Men of Gondor, hear now the Steward of this Realm! Behold! One has
          come to claim the kingship again at last. Here is Aragorn, son of
          Arathorn, chieftain of the Dúnedain of Arnor, Captain of the Host of
          the West, bearer of the Star of the North, wielder of the Sword
          Reforged, victorious in battle, whose hands bring healing, the
          Elfstone, Elessar of the line of Valandil, Isildur's son, Elendil's
          son of Númenor. Shall he be king and enter into the City and dwell
          there?" And all the host and all the people cried yea with one voice.
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Upon Sauron's defeat, Aragorn was crowned as King Elessar, a name
          given to him by Galadriel and adopted by the people of Gondor because
          of the Elfstone he wore. He became the twenty-sixth King of Arnor,
          thirty-fifth King of Gondor, and the first High King of the Reunited
          Kingdom, though it would be several years before his authority was
          firmly re-established in Arnor. His line was referred to as the House
          of Telcontar (Telcontar being Quenya for "Strider"). Aragorn married
          Arwen shortly afterwards, and ruled the Kingdom of Gondor and Arnor
          until 120 of the Fourth Age. His reign was marked by great harmony and
          prosperity within Gondor and Arnor, and by a great renewal of
          cooperation and communication among Men, Elves, and Dwarves, fostered
          by his vigorous rebuilding campaign following the war. Aragorn led the
          forces of the Reunited Kingdom on military campaigns against some
          Easterlings and Haradrim, re-establishing rule over all the territory
          that Gondor had lost in previous centuries. During his coronation,
          Aragorn spoke Elendil's Oath: "Et Eärello Endorenna utúlien. Sinome
          maruvan ar Hildinyar tenn' Ambar-metta!" ("Out of the Great Sea to
          Middle-earth I am come. In this place, I will abide, and my heirs,
          unto the ending of the world.") <br />
          <br />
          When in the year 120 of the Fourth Age, King Elessar realised his days
          were at an end, he went to the House of the Kings in the Silent
          Street. He said farewell to his son Eldarion and his daughters and
          gave Eldarion his crown and sceptre. Arwen remained at Aragorn's side
          until he died. A year after Aragorn's death, Arwen died in Lothlórien
          of a broken heart. Eldarion began his reign as the second King of the
          Reunited Kingdom after his father's death.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={aragorn6}
            className="h-auto w-full mw-400 bor-sm"
            alt="aragorn"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Though there is no indication of his ever doubting his role and
          destiny as the future king of the Reunited Kingdom and one of the
          leaders of the war against Sauron (as he did in Peter Jackson's film),
          he was not immune to self-doubt, as he doubted the wisdom of his
          decisions while leading the Fellowship after the loss of Gandalf in
          Moria, and blamed himself for many of their subsequent misfortunes. On
          one occasion his reverential pride for his heritage as caused
          complications as he refused to disarm and leave his sword Andúril at
          the door of Edoras as Théoden had required. Aragorn even vocally
          questioned how the authority of Théoden could supersede his own
          lineage from that of Elendil. Aragron only acquiesced after Gandalf
          called out his hubris as only benefiting their enemies well as
          highlighting that he would surrender his own sword if it meant meeting
          Théoden. Even so, Aragorn swore that death would come somehow to
          anyone else that touched it.
        </motion.p>
      </motion.section>
    </main>
  );
}

export default Gandalf;
