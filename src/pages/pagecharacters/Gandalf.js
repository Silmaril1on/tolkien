import React from "react";
import gandalf from "../../assets/gandalf-color.png";
import "./pageCharacters.scss";
import { forMask, headerZoom } from "../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import LightSmoke from "../../components/LightSmoke";
import EdgeButtons from "./EdgeButtons";
import Line from "../../components/Line";
import gandalf1 from "../../assets/gandalf1.webp";
import gandalf2 from "../../assets/gandalf2.jpg";
import gandalf3 from "../../assets/gandalf3.jpg";
import gandalf4 from "../../assets/gandalf4.jpeg";
import gandalf5 from "../../assets/gandalf5.jpg";
import gandalf6 from "../../assets/gandalf6.png";
import gandalf7 from "../../assets/gandalf7.jpg";

function Gandalf() {
  return (
    <main className="characters-bio-page h-full of-h bg-black pos-r p-1">
      <div className="pos-f top-0 left-0">
        <LightSmoke />
      </div>
      <section className="responsive-column-c pb-2">
        <article className="h-full info-section z-2 font-f-kelt display-f fd-c a-items-c color-white w-full pt-3">
          <h4 className="res-font font-w-300">Gandalf</h4>
          <h4 className="responsive-h font-w-300">guardian of the third age</h4>
          <h5 className="font-f-moria font-s-xl ls-xl pt-3 pb-2 lit-text">
            gedc
          </h5>
          <h4 className="desktop-size w-600 pt-3 pb-3 font-w-300 font-s-md color-l-grey">
            "He wore a tall pointed blue hat, a long grey cloak, and a silver
            scarf. He had a long white beard and bushy eyebrows that stuck out
            beyond the brim of his hat." <br />
            <br /> - The Fellowship of the Ring,
          </h4>
        </article>
        <motion.div
          variants={headerZoom}
          initial="hidden"
          animate="visible"
          className="gandalf-image-div"
        >
          <motion.img
            variants={forMask}
            src={gandalf}
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
        <p>
          Gandalf, known temporarily as the Grey and later the White, and
          originally named Olórin (Quenya), was an Istar (Wizard), dispatched to
          Middle-earth in the Third Age to combat the threat of Sauron. He
          joined Thorin II Oakenshield and his company to reclaim the Lonely
          Mountain from Smaug, helped form the Fellowship of the Ring to destroy
          the One Ring, and led the Free Peoples in the final campaign of the
          War of the Ring.
          <br />
          <br />
          Originally called Olórin, he was accounted as the wisest of the Maiar.
          He was created by Ilúvatar before the Music of the Ainur, and was at
          the beginning of Time amongst the Ainur who entered into Eä. In his
          "youth" he became one of the Maiar who served Manwë, Varda, Irmo, and
          Nienna. He was associated with light and fire, much like Varda, yet
          his ways often took him to Nienna, from whom he learned pity and
          patience. He loved the Elves, but walked unseen among them, or wore
          the guise of an Elf, and sent them fair visions in their hearts that
          made them wiser. Throughout his life he followed the example of
          Nienna, talking pity on the sorrows of the Children of Ilúvatar and
          drawing those who listened to him out of despair. <br />
          <br />
          When the Valar decided to send the Istari (also called Wizards) to
          Middle-earth to counsel and assist all those who opposed the Dark Lord
          Sauron, Manwë and Varda included Olórin among the five to be sent. At
          first, Olórin was nervous and described himself as too weak and afraid
          of Sauron. Manwë understood, and told Olórin that such was a reason
          why he should go, to overcome that fear. Furthermore, the One Ring,
          containing much of Sauron's power, presumably still existed somewhere.
          Thus, Manwë insisted that Olórin should go as the third, but Varda
          convinced him to send Olórin as the second instead. He agreed, and
          prepared for Olórin's departure from the Undying Lands with the other
          four, arriving about the same time that the Necromancer appeared in
          Mirkwood.
        </p>
        <motion.h1
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="third-age"
        >
          first age
        </motion.h1>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The Old Norse name "Gandalfr" appears in the list of Dwarves in the
          Völuspá of the Elder Edda; the name means "cane-elf," or "wand-elf."
          J.R.R. Tolkien took the name along with the Dwarves' names when he
          wrote The Hobbit in the 1930s. He came to regret the creation of this
          "rabble of eddaic-named Dwarves, invented in an idle hour" (The Return
          of the Shadow, pg. 452), since it forced him to come up with an
          explanation of why Old Norse names should be used in Third Age of
          Middle-earth. He solved the dilemma in 1942 by the explanation that
          Old Norse was a translation of the language of Dale. The figure of
          Gandalf has other influences from Germanic mythology, particularly
          Odin in his incarnation as "the Wanderer", an old man with one eye, a
          long white beard, a wide brimmed hat, and a staff. Tolkien states that
          he thinks of Gandalf as an "Odinic wanderer" in a letter of 1946.
          <br />
          <br />
          Gandalf is often described in The Lord of the Rings as quick to anger,
          and equally quick to laugh. His deep wisdom and compassion clearly
          derived from the patience he learned in Valinor, just as his care for
          all creatures of good will must have come from his strong sense of
          compassion for the weak. Both his patience and sense of kindness were
          revealed again and again, extending even to the servants of his
          enemies. Keen observers of Gandalf often detected a veiled power,
          usually revealed in his eyes, which appeared deep and wise. He was
          alternately affectionate and brusque; he often surprised others with
          his bluntness when time was of the essence. Gandalf consistently
          upbraided foolish behaviour, but also richly rewarded those who acted
          with good intentions.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={gandalf7}
            alt="saruman"
            className="h-auto w-300 bor-sm v-align-top"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          For all his power as Gandalf the White, he admitted that Sauron was
          far stronger and would win if they ever dueled and was unsure if he
          could defeat the Witch-king, once the latter had been empowered for
          the assault on Gondor. As his unrestricted form, Olórin, he likely had
          all his previous powers massively boosted, and the abilities to
          shapeshift and to travel at unfathomable speeds, among others.
          However, even this form seems to have restrictions, as the Ainur were
          said to have their power restricted upon descending to Earth.
        </motion.p>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Gandalf is described as an old man with a pointed blue hat, a long
          grey cloak, and a silver scarf. He had a long white beard and bushy
          eyebrows that stuck out beyond the brim of the hat. After he is
          resurrected, the change of his signature colour from grey to white is
          significant, for he was sent back to replace the corrupted head of the
          Order of Wizards and leader of the White Council Saruman as the Chief
          of the Order of Wizards. In the book, he says that he has himself
          become what Saruman should have been. Círdan the Shipwright seemed to
          have foreseen this, for he entrusted the care of Narya, the Ring of
          Fire (one of the Three Rings of the Elves) to Gandalf rather than
          Saruman.
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
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Gandalf was one of the wisest and most knowledgeable beings in
          Middle-earth, believed by Galadriel to be more worthy than Saruman in
          leading the White Council, though he was less mighty in magic, until
          his resurrection. He had extensive knowledge of many languages and
          writing systems used in Middle-earth, as well as in the history and
          customs of several of its peoples. He considered himself the greatest
          scholar of Hobbit traditions. His long journeys allowed him to meet
          many influential and powerful individuals and form lasting bonds with
          them. The Hobbits knew him as a masterful crafter of firecrackers.{" "}
          <br />
          <br />
          Outside of the Shire, however, Gandalf the Grey was revered as one of
          the most powerful and wisest beings to tread Middle-earth, although he
          was wary of confronting Saruman and Sauron directly as Gandalf the
          Grey, and admitted the latter was still more powerful after his
          rebirth. He was considered the most powerful member of the Fellowship
          of the Ring, as well as, according to Aragorn, its leader, not in
          small part thanks to his encyclopedic knowledge. His great
          intelligence allowed him to accurately guess the thoughts of others
          and made him perhaps the preeminent architect of Sauron's defeat.
          Moreover, Gandalf was skilled at telling men things that were true
          from a certain point of view, such as when he scammed Háma into
          allowing him to bring his staff before the king. <br />
          Armed with an Elven blade, Gandalf was as valiant a fighter as the
          other swordsmen in the Fellowship, in no way hindered by his elderly
          appearance when fighting or riding. Gandalf reaped Orcs and other
          servants of evil with his blade, and slew the Balrog in a duel, though
          he perished as well. He is rendered even more formidable by his magic.
          Gandalf killed a squad of Goblins with lightning during the quest to
          slay Smaug, then hurled lightning and fire at the Nazgûl when he was
          attacked on Weathertop--something noticed for miles around and that
          seared the battlefield. Gandalf described himself as "a servant of the
          Secret Fire, wielder of the flame of Anor". Coincidentally, many of
          his spells were based on light and fire. He was able to light a faggot
          of wet wood simply with a touch of his staff, which he considered
          distinctive enough that any onlooker would recognize his handiwork.
          Gandalf purged the room of the Great Goblin with blue glowing smoke
          which scattered piercing white sparks to kill the Orcs. He could cause
          the tip of his staff to glow with bright white light so as to see in
          the dark and increase the radiance at will, as demonstrated in Moria.
          Gandalf could conjure sparks, such as to light pinecones on fire, and
          could choose any color for his flames. When fighting a pack of wolves,
          he set fire to all treetops on a hill with a single blazing branch,
          and the air became so hot that an arrow burned mid-flight. At the cost
          of shattering his staff, he was able to conjure a sea of white flames
          that caused the bridge under the feet of Durin's Bane to crumble.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={gandalf3}
            alt="saruman"
            className="h-auto w-300 bor-sm"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Gandalf the Grey has command over a great array of spells for all
          situations, such as magically healing wounds (though he stated Elrond
          was a better healer), being able to enhance Elrond's flood spell by
          giving the water the appearance of galloping knights, and seal doors
          shut or open them, although it should be noted that he was unable to
          open the Doors of Durin prior to remembering the password. During the
          Battle of Five Armies, Gandalf amplified his voice to be heard by the
          armies of Men, Elves, and Dwarves. Gandalf could control the color and
          shape of smoke, such as to make a cloud of smoke float around himself.
          Moreover, Gandalf could manipulate the taste of beer, and he stated
          that Durin's Bane nearly overpowered him with its counterspell,
          forcing him to rely on a word of Command that resulted in a blast
          which caused the ceiling of the room beyond the door to collapse.
          Gandalf also could make illusions such as when he covered Bilbo's use
          of the One Ring at his party. Gandalf once had a comprehensive
          knowledge of Orc, Elf, and Manish magic, at least for the defending
          and locking of places, and while he had forgotten many of these spells
          by the time of the Great War of the Ring, he still had a firm grasp of
          many. <br />
          <br />
          Gandalf the White displayed these same powers, but more advanced and
          with a few more spells. When he first met Aragorn, Gimli, and Legolas
          in his new form, he shocked and quickly overpowered them with his
          agility and magic: he effortlessly disarmed the former two, one by
          causing his sword to burst into flames, the other by pulling the axe
          from his hands with a wave of his staff, and burnt the Elf's arrow
          into nothing when the latter loosed it. Shortly afterwards, he said
          that he had recently battled the Eye of Sauron to prevent him from
          locating Frodo, and although successful, the confrontation left him
          spent. Gandalf's mere presence was frightening to those who were about
          him if the White Wizard willed it and his voice could stun weaker
          beings or cause them to hesitate. Gandalf the White could force others
          to obey his orders, as he demonstrated against Gimli and Saruman. He
          also displayed the ability to communicate with horses and was able to
          reach Shadowfax with his mind. Gandalf's control over lighting and
          shadows increased after his return, as he was able to strike down
          Gríma Wormtongue without really harming the man, just after
          controlling the darkness in a whole room to remove the light as a show
          of power. He later displayed the ability to focus raw light (called
          the "white fire") into beams and blasts to drive off the Ringwraiths
          and these attacks were so powerful that only the Witch-king dared to
          duel Gandalf, using this spell caused Gandalf's eyes to glow. Gandalf
          also telekinetically disarmed Denethor and was able to increase his
          physical strength, without needing to speak spells. Finally, he also
          shattered Saruman’s staff, and thus stripped the rogue wizard of his
          divine/magical power, save the power of Saruman's voice.
        </motion.p>
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
          Olórin, like the other Wizards, took the shape of an old man. He was
          robed in grey and wandered about as a counsellor. At Mithlond he was
          welcomed by Glorfindel, his friend from Valinor (who had been sent
          earlier on a similar mission), and Círdan the shipwright who possessed
          Narya, one of the Three Elven Rings of Power. Círdan divined in Olórin
          a sense of strength and power despite his appearance as a bent and
          aged man. Círdan gave Narya to Olórin with a prediction of his future
          struggles with evil, and a promise that it would support and aid him
          in his labours. <br />
          <br />e then began his sojourn in Middle-earth and over many
          centuries, he walked among the Elves as a stranger, learning from them
          and teaching them. Unlike Saruman, Olórin never took up permanent
          residence, and never went to the east, apparently restricting his
          activities to the Westlands of Middle-earth, where the remnants of the
          Dúnedain and the Eldar remained to oppose Sauron. He was known by many
          names during the long years he wandered: Elves named him Mithrandir,
          the "Grey Pilgrim", while the Men of Arnor coined Gandalf, which
          became his most common name. He was also known as Incánus in the South
          and as Tharkûn to the Dwarves. He later revealed himself as one of the
          Istari, and eventually became known as not only the wisest but also
          the most powerful of them.
        </motion.p>

        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          A legend tells that Gandalf had been given by Yavanna the Elfstone of
          Eärendil, to bring to the peoples of Middle-earth as a token that the
          Valar had not forsook them. He gave this to Galadriel, bearer of one
          of the three Elven Rings and mighty among the Eldar, who prophesied
          that she would in turn pass it to one who would also be called
          Elessar.
          <br />
          <br />
        </motion.p>
        <h3>Reemergence of the Necromancer</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Around year TA 1100, the Istari and Eldar discovered that some evil
          entity resided in at Dol Guldur in Mirkwood; while some thought a
          Nazgûl had returned to torment the world, or some new evil was
          arising, Gandalf began to suspect that perhaps Sauron himself might
          have returned. As in the next two hundred years, evil continued to
          grow and spread, as well as the source directing it. Gandalf went to
          Dol Guldur in TA 2063 to discover its secret. However, the Necromancer
          fled upon Gandalf's arrival, preventing Gandalf from identifying him.
          After Gandalf's incursion, the evil there seemed to desist, and its
          absence allowed for some centuries of calmness. <br />
          <br />
          That peaceful period was known as the Watchful Peace and lasted for
          almost four hundred years, but the Nazgûl had used this period to
          prepare for Sauron's return, in TA 2460. Realising the returning evil,
          Galadriel formed and reunited the White Council three years later
          composed of four members: herself, Gandalf, Saruman, and Elrond the
          Half-elf (who was the bearer of another of the Three Rings). Galadriel
          wished Gandalf to be the chief of the Council, but he refused the
          position, wishing to set down no roots and to maintain his
          independence; Saruman took this place instead because of his vast
          knowledge and skill. However, he later grew jealous and afraid of
          Gandalf, which was one of the reasons for his future betrayal.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-auto mw-700"
            src={gandalf1}
            alt="nazguls"
          />
        </div>

        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          During his wanderings in Eriador, Gandalf met and befriended the
          isolated and secretive people of the Hobbits in their country, the
          Shire. During the Long Winter of TA 2758 Gandalf came to their aid. It
          was then when he witnessed and admired the pity and courage that the
          humble Hobbits reserved in their hearts. He then passed onward but
          nevertheless would return to visit the Shire occasionally and
          participate in the Midsummer-eve parties of the Old Took, where he
          impressed young Hobbits with his fireworks, and his stories about
          Dragons, Goblins and princesses. He was thus known to be "responsible
          for so many quiet lads and lasses going off into the Blue for mad
          adventures". He also met a relatively adventurous Hobbit named Bilbo
          Baggins, although he was in fact far from "adventuresome." <br />
          <br />
          When King Thráin II, a Dwarf of the royal line of Durin, disappeared
          on journey to Erebor, Gandalf looked for him. At some point after TA
          2845 he entered the abandoned city of Khazad-dûm during this search.
          After this proved to be in vain, the Wizard exited through the Doors
          of Durin; however this experience did not help him know how to open
          the doors from the outside. In TA 2850, his quest led him once more to
          Dol Guldur, this time in secrecy. He found Thráin in the dungeons, who
          gave the Wizard his last possessions, the map and key to Erebor. Most
          importantly, he found out that the Necromancer was not a Nazgûl – it
          was Sauron himself, and he had taken the last of the Seven Rings from
          the Dwarf King; Sauron was gathering the remaining Rings of Power and
          possibly searching for his lost One Ring.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Gandalf escaped Dol Guldur and returned to the White Council. After
          relating his discoveries, he urged the council to attack Sauron while
          the One Ring was still lost and while Sauron's power was not yet
          beginning to be restored . But Saruman said that it was better to
          watch and wait; that the One Ring had long ago rolled from Anduin to
          the Sea. The majority of the council agreed with Saruman. Elrond later
          privately told Gandalf he had a foreboding that the Ring would be
          found, and that the war to end the Age was coming. Indeed, Elrond
          added, he feared that it would end in darkness and despair. Gandalf
          encouraged him, saying there were many "strange chances," and that,
          "help oft shall come from the hands of the weak". Gandalf did not yet
          realize that Saruman now wanted the Ring for himself and was secretly
          searching for it along the banks of the River Anduin. <br />
          <br />
          As time went on, the wizard became increasingly troubled by his
          knowledge of Sauron's resurgent strength. He knew that Sauron was
          already plotting war from Dol Guldur, and that as soon as he felt
          strong enough, he would attack Rivendell. Unfortunately, the only
          power left besides Rivendell to resist an attempt from Mirkwood to
          regain the lands of Angmar were the isolated Dwarves of the Iron
          Hills.
        </motion.p>
        <br />
        <br />
        <h3>quest of erebor</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Over the years, Gandalf became concerned about the weak state of the
          North. Smaug the dragon had destroyed both the Kingdom under the
          Mountain and the town of Dale, and the wizard feared that Sauron might
          use the desolation around Erebor to regain the northern passes in the
          mountains and the old lands of Angmar. Gandalf knew that exiled Dwarf
          King of Durin's Folk, Thorin II Oakenshield, planned to battle against
          Smaug, but he knew that it would not be enough. In TA 2941, while
          staying the night in Bree, Gandalf happened across the Dwarf King.
          Thorin initiated conversation; he had been having a strange feeling
          urging him to seek Gandalf. The same was intrigued, for he had thought
          to seek Thorin as well. They found they were taking the same road for
          a while (Thorin passing through the Shire on his way to the Ered
          Luin), and they agreed to travel together. Thorin wanted advice, and
          Gandalf in turn wanted to discuss the dragon Smaug with Thorin.
          Ultimately, Gandalf concocted a plan wherein Thorin could destroy
          Smaug and recover his family fortune, albeit with a "burglar" of
          Gandalf's own choosing. <br />
          <br />
          Feeling that a Hobbit should be involved, Gandalf remembered Bilbo
          Baggins. At first he found only Holman Cotton as Bilbo had left on the
          occasion of the Elven new year, something that persuaded Gandalf that
          Bilbo was the right person for the job. He visited Bilbo later,
          bringing along the kinsmen of Thorin. In the end, Gandalf convinced
          the reluctant Baggins to become a burglar for Thorin. Gandalf then
          accompanied Thorin and Company to Rivendell. During the journey
          Gandalf was instrumental in saving the travellers' lives from several
          calamities. He saved them from a trio of Stone-trolls, and later
          obtained the legendary sword Glamdring from their Troll-hoard;
          <br />
          <br />
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-auto w-full mw-500 bor-sm"
            src={gandalf2}
            alt="downfall"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          He also helped Thorin and Company through the Misty Mountains; when
          unknowingly they camped in the Front Porch of the Goblin-town, the
          same captured the whole company except Gandalf, who surprised them
          much later, killing the Great Goblin and then leading the Dwarves to
          the Goblin-gate. It was during this time that Bilbo obtained a "magic
          ring". Bilbo initially claimed he "won" it from the creature "Gollum"
          while the company was under the Misty Mountains. The Ring conferred
          invisibility on Bilbo when he wore it, and he kept it secret from
          Gandalf for some time. On their escape out, the Company was saved by
          the Eagles of the Misty Mountains; Gandalf once had healed the Lord of
          the Eagles from an arrow-wound, and thenceforth they became friends.
          The Eagles picked them up from the Great Shelf, and the next day they
          dropped them off on the Carrock.
          <br />
          <br />
          Gandalf then sought the hospitality of Beorn, persuading him to
          welcome and host the whole Company in his hall. But then he left the
          quest prior to its completion; after leading the Company to the
          outskirts of the Forest Gate, he gave them some final advice before
          they entered Mirkwood, and went to attend other obligations. The White
          Council had met under the gravest of circumstances: Sauron's power was
          returning, even without his Ring. Gandalf at last convinced the
          Council to attack Dol Guldur, to which even Saruman agreed (as by now
          he feared Sauron as a rival, and wished to delay his search for the
          Ring). Gandalf joined his peers in assailing Dol Guldur, ridding
          Mirkwood of the Necromancer's presence, who fled to Mordor to his
          long-prepared stronghold of Barad-dûr. When he was about to finish his
          task, news about what happened to Thorin's Company in Mirkwood reached
          him, and realized that the instructions he gave did not help them;
          they had lost their way, and then vanished due to the encounter with
          the Wood-elves, who had captured them. He was anxious to get back to
          them as soon as possible.
        </motion.p>
        <h3>battle of the five armies</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Meanwhile Thorin's quest was successful: Erebor was retaken and Smaug
          was killed, but when Gandalf finally arrived to the area, he found the
          Dwarves of Erebor and the Iron Hills preparing for an attack by the
          Lake-men and the Elves of Mirkwood. He was with Bard and Thranduil and
          thus revealed his presence, trying to reason with Thorin. When the
          attack was beginning, Gandalf halted them, to warn that the Orcs and
          Wargs were coming to claim the treasure. He invited Dáin Ironfoot for
          council, and soon Dwarves, Elves and Men formed an alliance, and
          defeated the Orcs of the Misty Mountains in the Battle of Five Armies.{" "}
          <br />
          <br />
          King Thorin was mortally wounded and, after his funeral and the
          reestablishment of Erebor under Dáin, Bilbo and Gandalf followed their
          way back; they celebrated Yule at Beorn's, and then returned to
          Rivendell, where he discussed with Elrond the events of Dol Guldur and
          the Lonely Mountain. Gandalf had accomplished his immediate goal,
          which was to destroy Smaug, since he could have been used to
          disastrous effect by Sauron. A large number of Orcs and Wargs also
          were killed in the North, removing threats to Rivendell and
          Lothlórien. The two agreed that it would be better if the Necromancer
          were banished from the world altogether. <br />
          <br />
          As Gandalf and Bilbo passed by the site of their former encounter with
          the stone-trolls, they made sure to recover the gold of the
          troll-hoard they had buried before the Wizard left to perform other
          duties and Bilbo returned to the Shire. Gandalf, for his part, found
          himself amazed by the Hobbit; until then, the Wise had paid no
          attention to Hobbits and knew little of them. For the rest of his
          sojourn in Middle-earth, Gandalf took a special interest in Hobbits,
          and particularly in the Baggins family.
        </motion.p>
        <h3>return of the shadow</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Despite the Council's hopes, Sauron was not weakened by this attack.
          He had foreseen the move that drove him from Mirkwood, and his retreat
          was but a feint. Ten years after the attack, Sauron declared himself
          openly in Mordor in 2951 and rebuilt his fortress of Barad-dûr. The
          White Council met for one last time in 2953 to debate the fate of the
          Rings of Power. Saruman quieted his peers claiming to have the
          knowledge that the One Ring was lost in the Belegaer. After their
          meeting, Saruman, jealous and afraid of Gandalf, set spies to watch
          all his movements; this would affect the peaceful Hobbits, as Saruman
          thus discovered the existence and noted Gandalf's interest in the
          Shire, and started sending agents to Bree and the Southfarthing.{" "}
          <br />
          In 2956, Gandalf met Aragorn, the hidden Heir of Isildur, and soon
          became friends with him. From that point on Aragorn and Gandalf often
          worked together towards a common end - the defeat of Sauron.
        </motion.p>
        <h3>return to the shire</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          During this period Gandalf visited the Shire frequently, especially
          his friend Bilbo Baggins, and his younger nephew, Frodo. He noted
          Bilbo's unusual youthfulness, despite his advancing age; the
          suspicious "magic ring" that Bilbo had acquired during his adventure
          began to weigh on his mind. Gandalf recalled the deceit Bilbo used in
          originally claiming it for his own -- Bilbo had later admitted to
          stealing it from Gollum. Gandalf could see that Bilbo was now very
          preoccupied with the Ring and had begun to suspect that the same was
          indeed a ring of power. Such un-hobbitlike behaviour aroused his
          suspicions. <br />
          <br />
          In 3001, Bilbo planned what would become known as his Farewell
          Birthday Party, and at the culmination of the hobbit's speech, Bilbo
          put on the mysterious Ring and disappeared, as a joke on his
          neighbors. Later as he was bidding farewell to Gandalf, who had known
          about his plans to leave, Bilbo began to change his mind about leaving
          his Ring to Frodo, as he had earlier agreed. When Gandalf tried to
          persuade him to leave it, Bilbo became hostile and accused Gandalf of
          trying to steal the Ring for his own benefit, which he referred to as
          his "precious." Horrified by Bilbo's outburst, Gandalf stood to his
          full height and projected his power, frightening the hobbit. This
          brought Bilbo back to his senses; he apologized, admitted that the
          Ring had been troubling him lately, and left it behind. Bilbo and
          Gandalf bid each other goodbye before Bilbo left the Shire for his
          journey. Before leaving the Shire, he spoke with Frodo and
          emphatically warned Frodo not to use the Ring. <br />
          <br />
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-auto w-full mw-500 bor-sm"
            src={gandalf4}
            alt="downfall"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Keen now to find out more about Gollum, he sought Aragorn's help to
          capture him. Studying the records in Minas Tirith, he found the Scroll
          of Isildur and pieced together the missing history of the One Ring. In
          TA 3017 on his way back to the Shire he got word from the Galadhrim
          that Aragorn had finally captured Gollum and he went to Mirkwood to
          meet him. For days he interrogated him in order to verify what he
          already suspected. A great fear came over him when he learned that
          Gollum had been to the Tower of Barad-dûr. Sauron had tortured Gollum
          and learned not only of the "magic ring", but also the names "Shire"
          and "Baggins". Gandalf left Mirkwood soon after, and left Gollum with
          the Wood-elves of Northern Mirkwood. He now returned in haste to the
          Shire, certain that Frodo's ring was not simply a ring of power: it
          was the One Ruling Ring of Sauron.
        </motion.p>
        <h3>war of the ring</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Upon returning to the Shire, Gandalf immediately went to Frodo and
          confirmed his suspicions by throwing the Ring into Frodo's hearth
          fire, which revealed, in Black Speech, the inscription upon the Ring.
          Gandalf then told a dumbfounded Frodo about the One Ring and its
          history, and how Sauron would seek to regain it. Instructing Frodo to
          go to Rivendell with the Ring, Gandalf told him to make arrangements
          to leave the Shire quietly. <br />
          <br />
          While in the Shire, he had a sense of foreboding; in the aftermath of
          Sauron's assault on Osgiliath, Gandalf heard disturbing news about war
          in Gondor and a Black Shadow. He started wandering around Eriador,
          hearing news from the refugees who had a fear they could not speak
          about, until he met Radagast the Brown who brought a message from
          Saruman that he must seek him at once; and a warning that the
          Ringwraiths were looking for the Shire. He went to The Prancing Pony
          at Bree. Believing that he would not be able to return to Frodo in
          time, he wrote a letter, urging him to move as soon as possible for
          Rivendell, and seek a "Strider" whose real name was Aragorn, along
          with a riddle to identify him; Gandalf would then try to catch up with
          them when available. He also instructed Barliman Butterbur to send the
          letter to Hobbiton and to expect a Mr. Baggins that would come under
          the name of "Mr. Underhill". He left the inn, but Barliman would
          forget to send the letter. <br />
          <br />
          Soon thereafter Gandalf arrived at Isengard. At their meeting, Saruman
          finally exposed his own betrayal by revealing his desire for the One
          Ring. He offered to his "old friend and helper" that they take the
          Ring for themselves and seize power from Sauron. Gandalf rejected this
          with horror, and was imprisoned by Saruman on the pinnacle of Orthanc.
          Gwaihir the Windlord, soon arrived and helped Gandalf escape.
          Gwaihir's real purpose for visiting Orthanc was to report a sighting
          of the Nazgûl, as Radagast had appealed to him to do so earlier on.
          Gandalf knew he must return quickly to the Shire, as Frodo (and the
          Ring) were in grave danger from both Sauron's Nazgûl and now Saruman's
          treacherous desire for the Ring.
        </motion.p>
        <h3>journey to rivendell</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Gandalf hurriedly went to Rohan, desiring to find a strong steed;
          there he obtained Shadowfax from King Théoden, who later resented the
          gift. This mighty horse and Gandalf forged a special bond, and Gandalf
          made quick use of Shadowfax's incredible strength and endurance.
          Gandalf sped to the Shire. Fortunately, Frodo had already left the
          Shire without waiting for Gandalf, and was seeking the refuge of
          Rivendell. Upon arrival Gandalf learned that the Nazgûl, arrayed as
          Black Riders, had been searching the area. Dismayed, he set out for
          Bree; Barliman apologised to Gandalf for forgetting to send the
          letter, worried that the hobbits had left with Strider, the suspicious
          Ranger. But for Gandalf this was a hope which far exceeded his
          expectations. After congratulating a puzzled Barliman, and blessing
          his beer, Gandalf then made for Weathertop, a high point in the
          region, to observe the surrounding area. <br />
          <br /> There he was assaulted at night by the Nazgûl, but drove them
          off after a great battle of light and flame. These phenomena were seen
          by Aragorn and the hobbits from afar, without knowing it was Gandalf.
          Before leaving, he marked some stones with the cirth G for them to
          find, then fled east, drawing four of the Ringwraiths after him.{" "}
          <br />
          Several days later, Frodo, Aragorn, and company stayed at Weathertop
          and were confronted by the remaining five Nazgûl. Despite their
          escape, Frodo was stabbed in the process by the Lord of the Nazgûl
          with a Morgul-knife. Gandalf was able to evade the four Nazgûl and
          successfully reach Rivendell and was welcomed by Glorfindel. However,
          several days later, an injured Frodo arrived at the Ford of Bruinen,
          though the Nazgûl pursued him all the way there. Gandalf, along with
          Elrond, saved Frodo from the Nazgûl by enchanting the water and
          sweeping them away. <br />
          <br />
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-auto w-full mw-500 bor-sm"
            src={gandalf5}
            alt="downfall"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Elrond called a council after Frodo was healed to consider the
          momentous decision regarding the Ring. There Gandalf explained to the
          others how Saruman had imprisoned him and how the White Wizard was
          creating his own army of Orcs to rival Sauron's. By chance,
          representatives of most of the free peoples happened to be in
          Rivendell already for various reasons. Elrond and Gandalf advised that
          the Ring should be destroyed in the fires of Mount Doom, where it was
          made. Others dissented or objected, but eventually submitted to
          Gandalf's plan. Ultimately, Elrond appointed the Fellowship of the
          Ring as nine walkers, numerically set against Sauron's nine Nazgûl.
          The relatively small number reflected the realisation by Elrond and
          the other council members that the Quest of Mount Doom would not rely
          upon strength of arms, but on stealth and good fortune. Gandalf was
          chosen to lead the company, which included Aragorn, Boromir of Gondor,
          Legolas the Elf, Gimli the Dwarf, and the hobbits Frodo, Samwise
          Gamgee, Peregrin Took, and Meriadoc Brandybuck. <br />
          <br />
          Several obstacles stood in the company's way. The vast Misty Mountains
          had to be crossed, for Gandalf was determined not to lead the company
          near Isengard. Gandalf decided to take a southern route to the Redhorn
          Pass and there to cross the Misty Mountains, traversing the mountain
          range and avoiding Isengard. When this attempt failed due to a
          terrible storm he then decided to take the Fellowship through the
          ruins of Moria, where the remains of the great Dwarf city of
          Khazad-dûm was now a labyrinth of abandoned tunnels under the
          mountains. Others in the company were loathe enter the maze, as it was
          now the lair of Orcs and something known only as "Durin's Bane".
        </motion.p>
        <h3>fall in moria</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          At the Doors of Durin on the west side of the mountains, Gandalf,
          after some delay, spoke the password and led the company into the
          dark. Having been in Moria on an earlier perilous errand, he was
          somewhat familiar with the underground passages. Eventually the party
          came to the Chamber of Mazarbul, where Gandalf read the Book of
          Records, which revealed the fate of Balin, the leader of an ill-fated
          attempt to re-colonise Moria. Soon after, the party was attacked by
          Orcs, and forced to flee the chamber. By then Gandalf was well aware
          of their location, and he led the party quickly towards the eastern
          exit. <br />
          <br />
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-auto w-full mw-500 bor-sm"
            src={gandalf6}
            alt="downfall"
          />
        </div>
        <q>
          You cannot pass," he said. The Orcs stood still, and a dead silence
          fell. "I am a servant of the Secret Fire, wielder of the flame of
          Anor. You cannot pass. The dark fire will not avail you, flame of
          Udûn. Go back to the Shadow! You cannot pass.
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Unfortunately Durin's Bane caught up to the group at the Bridge of
          Khazad-dûm. Gandalf and Legolas immediately realised what it was: a
          Balrog of Morgoth, a servant of the first Dark Lord. In a spectacular
          display of bravery Gandalf faced the demon and broke the bridge both
          stood upon, leaving the beast to fall into a seemingly bottomless
          chasm. But the Balrog's whip lashed out, and grasped Gandalf by the
          knees, causing him to fall into the pit. While falling, Gandalf
          shouted "Fly, you fools" and vanished into the abyss. <br />
          <br />
          Yet Gandalf did not die; he and the Balrog fell for a long time, and
          the wizard was burned by the Balrog's fire. Then they plunged into a
          deep lake in the depths of the mountain, which Gandalf later said was
          cold as the tide of death and almost froze his heart. They fought in
          the water until finally the Balrog fled into dark tunnels, where the
          world was gnawed by nameless things, older even than Sauron. Gandalf
          pursued the creature until it led him to the spiralling Endless Stair,
          and they climbed it until they reached Durin's Tower in the living
          rock of Zirakzigil, the pinnacle of the Silvertine above the clouds.
          There they fought, until at last Gandalf threw down his enemy, and the
          Balrog broke the mountain-side as it fell. Then darkness took Gandalf,
          and he passed away. His body lay on the peak. The entire battle, from
          the confrontation on the Bridge of Khazad-dûm to the mutual demise of
          the Balrog and Gandalf, had taken ten days.
        </motion.p>
        <q>
          Then darkness took me, and I strayed out of thought and time, and I
          wandered far on roads that I will not tell... Naked I was sent back –
          for a brief time, until my task is done. And naked I lay upon the
          mountain-top. … There I lay staring upward, while the stars wheeled
          over, and each day was as long as a life-age of the earth.
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          But Gandalf's spirit did not depart Middle-earth forever at this time.
          As the only one of the five Istari to stay true to his errand,
          Olórin/Gandalf was sent back to mortal lands by Eru, and he became
          Gandalf once again. Yet, as he was now the sole emissary of the Valar
          to Middle-earth, he was granted the power to "reveal" more of his
          inner Maiar strength. This naked power that lay within him was seldom
          used during the remainder of his time in Middle-earth, as his mission
          was essentially the same: to support and succor those who opposed
          Sauron. Nevertheless, when Gandalf's wrath was kindled his "unveiled"
          strength was such that few of Sauron's servants could withstand him.{" "}
          <br />
          <br />
          Three days later he was found by the windlord Gwaihir, Lord of the
          Eagles, who had been sent by Galadriel to find him. Gandalf was
          carried to Caras Galadhon in Lothlórien, where he was healed, given a
          new staff, and clothed in white, and thus became Gandalf the White. He
          soon learned that Frodo and Sam had left the Fellowship and were
          attempting the quest of Mount Doom without the others, and was greatly
          gladdened to hear that Sam had accompanied Frodo.
        </motion.p>
      </motion.section>
    </main>
  );
}

export default Gandalf;
