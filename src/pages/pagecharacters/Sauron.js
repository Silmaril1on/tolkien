import React from "react";
import sauron from "../../assets/sauron.png";
import "./pageCharacters.scss";
import { forMask, headerZoom } from "../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import LightSmoke from "../../components/LightSmoke";
import EdgeButtons from "./EdgeButtons";
import Line from "../../components/Line";
import oneRing from "../../assets/oneRing.webp";
import anatar1 from "../../assets/anatar.jpg";
import sauron11 from "../../assets/sauron11.jpg";
import wraith from "../../assets/wraith.webp";
import downfall from "../../assets/downfall.jpg";

function Sauron() {
  return (
    <main className="characters-bio-page h-full of-h bg-black pos-r p-1">
      <div className="pos-f top-0 left-0">
        <LightSmoke />
      </div>
      <section className="responsive-column-c pb-2">
        <article className="h-full info-section z-2  font-f-kelt display-f fd-c a-items-c color-white w-full pt-3">
          <h4 className="res-font font-w-300">Sauron</h4>
          <h4 className="responsive-h font-w-300">the dark lord</h4>
          <h4 className="desktop-size w-600 pt-3 pb-3 font-w-300 font-s-md color-l-grey">
            "Now Sauron's lust and pride increased, until he knew no bounds, and
            he determined to make himself master of all things in Middle-earth,
            and to destroy the Elves, and to compass if he might, the downfall
            of Númenor. He brooked no freedom nor any rivalry, and he named
            himself Lord of the Earth. A mask he still could wear so that if he
            wished he might deceive the eyes of Men, seeming to them wise and
            fair. But he ruled rather by force and fear, if they might avail;
            and those who perceived his shadow spreading over the world called
            him the Dark Lord and named him the Enemy; and he gathered under his
            government all the evil things of the days of Morgoth that remained
            on earth or beneath it, and the Orcs were at his command and
            multiplied like flies. <br />
            <br /> - The Silmarilion, Akallabeth"
          </h4>
        </article>
        <motion.div
          variants={headerZoom}
          initial="hidden"
          animate="visible"
          className="sauron-image-div"
        >
          <motion.img
            variants={forMask}
            src={sauron}
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
          Sauron (Quenya; saʊron or θaʊron), the eponymous Lord of the Rings,
          was the greatest subversive Maia, maker of the One Ring, renowned
          disciple of the Vala Aulë, and chief agent of Morgoth in the Elder
          Days. After Morgoth's ousting by the Valar, Sauron became the second
          Dark Lord and sought to conquer Middle-earth, and even Númenor,
          through guileful trickery, with the Rings of Power or with
          overwhelming legions. At the end of the Second Age, Sauron caused the
          Downfall of Númenor, and was then defeated in Mordor in the War of the
          Last Alliance of Elves and Men united under Gil-galad and Elendil. In
          the final battle, Isildur managed to cut the One Ring from him,
          dismantling his corporeal form and robbing him of much of his power.
          After centuries lying dormant, rebuilding strength and stirring awake
          evil things, Sauron returned to power late in the Third Age, but was
          vanquished at the destruction of his Ring in Mount Doom, by Frodo
          Baggins. <br />
          <br />
          To the Sindar of Beleriand, Sauron was known as Gorthaur in the First
          Age. <br />
          <br /> Sauron's original name was Mairon. He was the mightiest Maia of
          the Vala Aulë the Smith, and learned much from Aulë of smithing and
          handiwork, becoming a great craftsman and "mighty in the lore of"
          Aulë's people. He was among the most powerful Maiar. In the Days
          before days, Mairon was as Eru had created him: good and uncorrupted.
          His greatest virtue was his love of order and perfection, and dislike
          of anything wasteful. However, this would also prove to be the cause
          of his downfall, as Mairon saw in Melkor the will and power that would
          help him achieve his personal ends quicker than if he pursued them
          alone. However, while Melkor wanted to either control or destroy
          Middle-earth itself, Mairon's desire was to dominate the minds and
          wills of its creatures for what he perceived to be their own benefit.
          To see his marvelous designs through, Mairon sought to increase his
          innate power and this power in time became the end in itself; so he
          joined with Melkor, soon becoming his chief agent. <br />
          <br />
          After allying with Melkor, Mairon maintained apparent fidelity to the
          Valar, but secretly informed his master of his dealings with them.
          When Melkor established his strongholds in Middle-earth, Mairon left
          Valinor and openly declared his allegiance, becoming a recognised foe
          of the Valar.As Melkor's lieutenant, Sauron commanded the fortress of
          Angband. It was with Sauron's aid that Melkor was able to breed Orcs,
          in mockery of the Children of Ilúvatar. At the beginning of the Battle
          of the Powers, Sauron feigned a resistance against the Valar at
          Angband, allowing Melkor to muster forces at Utumno unnoticed. After
          both Angband and Utumno were sacked and Melkor captured, Sauron was
          not found; in their haste to both capture the Dark Lord and remove him
          from Middle-earth, the Valar overlooked Sauron's escape. <br />
          <br />
          Sauron "controlled things" in Melkor's absence. Angband's
          reconstruction began, and the Orcs there multiplied under his command.
          Possibly aware of the Great March, Sauron may have harried the Elves
          on their journey, directing Melkor's servants abroad or affecting the
          weather.. The Sindar Elves in Beleriand called him Gorthaur, meaning
          "dread abomination", while others of the Eldar had named him Sauron,
          meaning "the abhorred" or "the abominable" (a mockery of his original
          name). Under Sauron's regency, Angband was almost ready by YT 1495,
          with Orc armies already prepared by him when Morgoth (Melkor)
          returned.
        </p>
        <motion.h1
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="first-age"
        >
          first age
        </motion.h1>
        <Line />
        <q>
          "In all the deeds of Melkor the Morgoth upon Arda, in his vast works
          and in the deceits of his cunning, Sauron had a part, and was only
          less evil than his master in that for long he served another and not
          himself."
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          In the First Age, the Ñoldor Elves left the Blessed Realm of Valinor
          in the Utter West (against the counsel of the Valar) in order to wage
          war on Morgoth following his theft of the Silmarils of Fëanor,
          enchanted gems that glowed with light from the now-destroyed Trees of
          Valinor. In that war, Sauron was counted as the "greatest of
          [Morgoth's] servants that have names" and was soon feared as a lord of
          phantoms and dreadful beasts, a shape-shifter and sorcerer. When
          Morgoth left Angband much later to corrupt the newly awakened Atani
          (Men), Sauron directed the war against the Elves. He conquered the
          Elvish isle of Tol Sirion, so that it became known as Tol-in-Gaurhoth,
          the Isle of Werewolves. There he established himself as the Lord of
          the Werewolves, with Draugluin, sire of the Werewolves, and
          Thuringwethil, a Vampire herald, at his side. <br />
          <br />
          After the Dagor Bragollach in FA 456, Sauron was bidden by Morgoth to
          destroy Barahir, ally of Finrod, King of Nargothrond; Sauron ensnared
          Gorlim, who was captured by his hunters, and interrogated him about
          the outlaw-lord's location. Gorlim refused to tell them anything, even
          under torture, until Sauron himself came forth and bartered with the
          man. Gorlim asked for his wife Eilinel, whom he thought captured.
          Thus, Sauron agreed and Gorlim yielded the information. However,
          Morgoth's vassal revealed that Eilinel was dead, and he put Gorlim to
          death afterward. Sauron then sent Gorgol the Butcher's horde to slay
          Barahir and his company. Barahir's son, Beren, evaded this fate and
          after news of his deeds reached Morgoth, Sauron at the helm of an army
          of Orcs, Werewolves and other fell beasts started hunting him. <br />
          <br />
          During the Quest for the Silmaril, Beren and Finrod were captured by
          Sauron, who defeated Finrod in a duel with songs of power. He stripped
          them of their Orc disguises and cast them into the dark pits where
          Werewolves devoured their companions; Morgoth's vassal hoped to
          terrify them into revealing their quest. When one of Sauron's
          Werewolves came to attack Beren, Finrod wrestled with and killed it,
          but died soon after of his injuries. Soon afterward, Lúthien and Huan
          the wolfhound arrived at the bridge of Tol-in-Gaurhoth. Sauron sent
          his servants to capture Lúthien, but all were slain by Huan. One of
          them was Draugluin, but he fled and told his master that Huan was
          there. Therefore, Sauron took the form of a Werewolf and leaped to
          attack Lúthien, only to be intercepted and subdued by Huan. He yielded
          the tower to Lúthien and escaped in the form of a "vampire". <br />
          <br />
          After his defeat by Lúthien, Sauron played little part in the events
          of the First Age (possibly hiding from Morgoth's scorn or wrath).
          After his former master was defeated and taken to Valinor in chains,
          Sauron seemed to repent and plead Eönwë and the victorious Host of the
          West for mercy, although he may have only been daunted by their
          triumph. At the same time, Sauron was unwilling to return to the Utter
          West for judgment out of pride, and instead fled and hid somewhere in
          Middle-earth.
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
        <q>
          "A new shadow arises in the East. It is no tyranny of evil Men, as
          your son believes; but a servant of Morgoth is stirring, and evil
          things wake again. Each year it gains in strength, for most Men are
          ripe to its purpose." - Gil-galad
        </q>
        <motion.img
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-auto w-full mw-600 pt-2"
          src={anatar1}
          alt="anatar"
        />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          After remaining hidden and dormant for five centuries, Sauron began
          revealing himself once more, and by SA 1000 had gathered power and
          established himself in the land of Mordor, in eastern Middle-earth,
          and began building the dreaded Barad-dûr near Mount Doom. Soon he
          gathered under his government of Orcs, Trolls, and other creatures
          from the days of Morgoth; and Sauron corrupted certain peoples of Men
          such as the Easterlings and Haradrim with delusions of power and
          wealth. His passion for order had led him to desire to be a god-king,
          wielding "absolute temporal power over the whole world". Although
          Sauron knew that Men were easier to sway, he sought to bring the Elves
          into his service, as they were far more powerful. By about SA 1500,
          Sauron put on a fair visage and called himself Annatar, the "Lord of
          Gifts". The Unfinished Tales tells that Annatar assumed the guise of
          an emissary of the Valar "anticipating the Istari".
          <br />
          <br />
          He befriended the Elf smiths of Eregion, including Celebrimbor
          (greatest of craftsmen, as he was descended from Fëanor), and
          counselled them in arts and magic. Not all the Elves trusted him,
          particularly Lady Galadriel, Elrond, and Gil-galad, High King of the
          Ñoldor. Some accounts say that he befriended the Elven smiths of
          Gwaith-i-Mírdain without the knowledge of Galadriel and Celeborn. In
          one version of the story, Sauron developed a strong hold over
          Gwaith-i-Mírdain that he persuaded them to rebel against Galadriel and
          Celeborn which drove them to leave Eregion so he could work unopposed.
        </motion.p>
        <q>
          This is the Master-ring, the One Ring to rule them all. This is the
          One Ring that he lost many ages ago, to the great weakening of his
          power. He greatly desires it – but he must not get it.
        </q>
        <motion.img
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-150 w-auto"
          src={oneRing}
          alt="ring"
        />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Eventually, Sauron gave the Elven smiths he worked with knowledge and
          encouragement to forge magic Rings, which he infused with potent
          spells without their knowledge. These included the great Rings of
          Power while he forged the One Ring in secret, to rule the Elvish
          rings. Upon that ring Sauron wrote in Tengwar the Black Speech
          inscription, Ash nazg durbatulûk, ash nazg gimbatul, ash nazg
          thrakatulûk, agh burzum-ishi krimpatul. This translates as: One ring
          to rule them all, one ring to find them, one ring to bring them all,
          and in the darkness bind them. <br />
          <br />
          However, as soon as he put on his Ring the Elves sensed his treachery,
          and removed their Rings and hid them. Having raised the fortress of
          Barad-dûr in Mordor in SA 1600, Sauron then prepared ninety years for
          open war; his gathering of armies was opposed by the two "powerful
          enemies behind his back" in the East and South. The Elves managed to
          hide the three greatest of the Rings from him, but the other sixteen
          Rings of Power were either captured by Sauron, destroyed, or lost. To
          the Dwarves he had given Seven, but to Men he had given Nine, knowing
          that they would be the easiest to corrupt. The Dwarf-lords who
          received the Rings proved to be very resistant to their power, and
          neither "faded" nor became enslaved to Sauron's will. The Rings,
          however, created in them an insatiable lust for gold, which ultimately
          caused a great deal of grief for the Dwarves. <br />
          <br />
          As Sauron predicted, the nine Men were all corrupted by their Rings
          and became the Nazgûl, Sauron's deadliest servants. Had the Elves not
          recognised Sauron's treachery and forsaken the power of their rings,
          the results would have been catastrophic. It seems that most of the
          native Men of Middle-earth succumbed to the power of the Ring once the
          Nazgûl were created, and if the Elves had been captured in this
          fashion, they would have become the slaves of Sauron. Thus
          Celebrimbor's resistance was of immense importance in the history of
          Middle-earth. <br />
          <br />
          Having grown "'greater', effectively" than Morgoth at the end [18],
          Sauron conquered nearly all of Middle-earth, with only Gil-galad's
          realm of Lindon being safe from his grasp. At his height during the
          Accursed Years, became known as the Dark Lord to the Free Peoples.
          However, he had not expected the intervention of the Númenóreans,
          scions of the Edain (and partial descendants through Elros, of Beren
          and Lúthien). Themotion. armies of the King of Númenor, Tar-Minastir,
          defeated Sauron's forces in the Battle of the Gwathló in SA 1700.
          Beaten but not wholly vanquished, Sauron fled back to Mordor with only
          his bodyguard and began rebuilding his strength over the next
          centuries. Towards the end of the Second Age, he was once again
          powerful enough to raise large armies to attempt to conquer
          Middle-earth. By this time, he assumed the titles of "Lord of the
          Earth" and "King of Men", angering the proud Kings of Númenor; the
          last ruler, Ar-Pharazôn, sought to compete with Sauron for the
          kingship of Arda.
        </motion.p>
        <h3>life in numenor</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          On the island of Númenor in the sea between Middle-earth and Valinor,
          Ar-Pharazôn mustered an astounding Númenórean army that rivalled
          Sauron's own. In SA 3261, the King landed in Umbar in Middle-earth
          with his troops and demanded that the Dark Lord bend the knee. Sauron
          could see clearly that even his most potent servants could withstand
          the Númenóreans, and so came from Barad-dûr without any offer of
          battle. He assumed a fair form and flattered the King, but Ar-Pharazôn
          demanded that Sauron come back to Númenor as a hostage. <br />
          <br />
          Sauron feigned unhappiness at this development but was secretly
          delighted, for this presented him with an opportunity to destroy the
          Númenóreans from within. After only a few short years in Númenor he
          grew from captive to the King's most trusted adviser, and nearly all
          the King's court fawned upon him. Drawing on their fear of death, he
          converted many Númenóreans to the worship of Morgoth, saying that
          Morgoth had the power to save them from mortality. As his power and
          influence reached its peak, he raised a great Temple for Morgoth in
          which he performed human sacrifices to the Dark Lord. Finally, he
          convinced Ar-Pharazôn to rebel against the Valar and attack Valinor
          itself and claim it for himself. <br />
          <br />
          But here, Sauron's cunning overreached itself, for Eru then directly
          intervened—Númenor was drowned under the sea, and the great navy of
          Númenor was destroyed and the army that reached Aman was buried under
          mountains of falling rock and said to be imprisoned in the Caves of
          the Forgotten. The world was bent, so that thereafter, only
          Elven-Ships could sail into the Utter West. Sauron's body was
          destroyed, but his spirit was not diminished, and he fled back to
          Mordor bearing the Ring, where he slowly rebuilt a new body and
          strength. Hereafter, he lost the ability to assume a fair shape, and
          ruled now through terror and force. A few faithful Númenóreans led by
          Elendil were saved from the flood, and they founded two Realms in
          Exile, Arnor and Gondor, in Middle-earth.
        </motion.p>
        <motion.img
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-auto w-300 p-2"
          src={sauron11}
          alt=""
        />
        <h3>loss of the ring</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          After learning that Elendil, whom he especially hated, had survived
          and was ordering a realm on his borders, Sauron made war on Arnor and
          Gondor. He struck too soon, however, and had not restored most of his
          strength, whereas the Elven-king, Gil-galad, had increased his power
          in his absence. Therefore, Gil-galad allied with Elendil to create the
          Last Alliance of Elves and Men, and together they marched across
          Middle-earth to attack Sauron. They defeated his armies in the Battle
          of Dagorlad, and then invaded Mordor and laid siege to Barad-dûr for
          seven years. Finally, Sauron himself came forth and dueled with both
          Elendil and Gil-galad, slaying them both single-handedly; however, he
          himself was overthrown in the process. Then Isildur, son of Elendil,
          took up his father's broken sword, Narsil, and used it to cut the One
          Ring from Sauron's finger. While Sauron's physical body was destroyed,
          his spirit endured and fled. But his campaign to defeat the free
          peoples had seemingly failed, with his greatest weapon having been
          taken from him. <br />
          <br />
          But while Isildur had taken the Ring, he could not bring himself to
          destroy it in the fires of Mount Doom where it was forged, but kept it
          for himself. He was eventually betrayed by it a few years later, and
          slain by Orcs at the Gladden Fields. The Ring fell into the Gladden
          Fields, and was lost for over two millennia.
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
          Despite this defeat, Sauron still was not vanquished totally. Though
          greatly weakened, and in non-corporeal form, he still existed due to
          having poured most of his native power, strength, and will into the
          One Ring. Thus, as long as the Ring remained, so would Sauron, and in
          the first millennium of the Third Age he lay in hiding, slowly
          recovering strength until he securely regained some extent of a
          physical form. <br />
          <br />
          In TA 1000, Sauron began to act in the world again, occupying the
          stronghold of Dol Guldur, the Hill of Sorcery, in southern Mirkwood in
          TA 1050, and working in secret. There, he used the guise of a dreaded
          sorcerer, called "the Necromancer", and the Elves did not yet discern
          that he was the Dark Lord. Around the same time, the Valar sent the
          five Wizards, or Istari, to rally the Free Peoples of Middle-earth in
          countering his potential re-emergence. Though Sauron dismissed their
          presence "as a mere effort of defeated imperialists" (seemingly
          justified in the case of their chief, Saruman), Gandalf arose among
          them as his chief enemy.
        </motion.p>
        <q>
          Before you could get round in the South, you would get into the land
          of the Necromancer, and even you, Bilbo, won't need me to tell you
          tales of that black sorcerer. I don't advise you to go anywhere near
          the places overlooked by his dark tower!" - Gandalf
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          While the Dark Lord continued to scheme and gather strength, the Nine
          reappeared in TA 1300, and began steadily assaulting the Númenórean
          kingdoms in exile on his behalf, ultimately destroying the
          North-kingdom of Arnor and gravely weakening the South-kingdom of
          Gondor. In the same period, foul things that still walked the earth or
          beneath it were stirred: the Orcs of the Misty Mountains grew bolder
          in their incursions, while secretly raising strongholds and barring
          the passes between Eriador and the Vales of Anduin "according to the
          plan of their master in Dol Guldur"; the Dragons laid waste to the
          Dwarven mansions, consuming three of the Seven Dwarf-rings and
          claiming the treasure hoards. Guided by the emissaries of the Dark
          Lord, the Easterlings also renewed their bitter feud with the
          Gondorians and Northmen, launching fresh attacks on the western lands.{" "}
          <br />
          <br />
          uspecting that Sauron had indeed returned and that his hand
          coordinated the steady resurgence of evil, such as the actions of the
          Nazgûl, Gandalf infiltrated Dol Guldur in TA 2063 to confirm his
          suspicion, but the Dark Lord fled eastwards to conceal his identity.
          This marked the beginning of the Watchful Peace, which ended with
          Sauron's return to Dol Guldur in TA 2460 with renewed strength. In the
          same year, the One Ring was finally discovered by the Stoor Sméagol
          and his friend, Déagol. Sméagol murdered Déagol and took the Ring for
          himself. Sméagol was eventually so changed by the Ring's corruption he
          was given the name Gollum, ostracized from his people, and dwelt
          secluded, deep within the Misty Mountains. With Durin's Folk driven
          out from Khazad-dûm by Durin's Bane, Sauron began "to people Moria
          with his creatures" around TA 2480. <br />
          <br />
          Following the sack of Erebor, Gandalf felt that Sauron would take
          advantage of Middle-earth's weakened state and attack Rivendell and
          Lothlórien or try regain Angmar; he also feared that Sauron "might
          use" Smaug "with terrible effect". In TA 2850, Gandalf entered Dol
          Guldur again and finally discovered that the Necromancer was indeed
          the Dark Lord. Eventually, the White Council put forth their might
          and, with Saruman's approval, attacked Dol Guldur in TA 2941, while
          Sauron and Smaug could not "help one another". Without the One Ring in
          his possession and facing the combined power of the Three Elven Rings
          and skill of the White Wizard, the Dark Lord could draw on only the
          smallest fraction of his strength, such that his adversaries were able
          to drive him from the fortress with relative ease. However, having had
          ample time to prepare, Sauron abandoned Dol Guldur willingly, and
          returned secretly to Mordor, where he would openly declare himself in
          TA 2951, and began preparations for his final war to dominate
          Middle-earth.
        </motion.p>
        <h3>War of the Ring</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Sauron bred immense armies of Orcs and enslaved Men from the east and
          south. He gathered his most terrifying servants, the Nazgûl, or
          Ringwraiths, each wearing one of the nine rings designed for mortal
          men. He adopted the symbol of a lidless eye, and as he exerted his
          will over Middle-earth, the Eye of Sauron became a symbol of power and
          fear. Using the Palantír of Minas Ithil, Sauron communed with Saruman,
          who held the Orthanc-stone. The Dark Lord soon lured the White Wizard
          into his service with promises of power, intending to use him as an
          instrument to subjugate Rohan and form a second pincer to crush
          Gondor. <br />
          <br />
          After Gollum was captured, Sauron had him tortured and learned that he
          once had a magic ring, and, from him, he heard the words Shire and
          Baggins. He deduced that Gollum's ring was the One Ring, and in TA
          3017 he sent the dreaded Nazgûl, to find Shire and search for Baggins,
          so that the One Ring might be found and returned to him.
        </motion.p>
        <motion.img
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-auto mw-700"
          src={wraith}
          alt="nazguls"
        />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Meanwhile, Saruman, having "cheated his master" by trying to seize the
          Ring first, intensified his attacks against Théoden in hopes of
          delivering Rohan to Sauron and regaining favor. The White Wizard was
          defeated by the Rohirrim and Ents however, costing the Dark Lord one
          of his most powerful vassals, as well the large Uruk-hai army. <br />
          Shortly after Saruman's defeat, Peregrin Took looked into the
          Orthanc-stone and accidentally communicated with Sauron, who believed
          that his treacherous servant had captured either the Halflings bearing
          the Ring, or some who might know of it. But shortly thereafter Aragorn
          took the palantír and revealed himself to Sauron, and seeing Aragorn,
          the Dark Lord concluded that his puppet had fallen and that the heir
          of Isildur possessed the One Ring. Fearing that his enemies would use
          the Ring against him, Sauron sped up his plans and attacked the city
          of Minas Tirith in Gondor sooner than he had planned, seeking to raze
          the city and crush the last human resistance to his rule before his
          enemies could fortify it, and to prevent the Men of the West uniting
          under one king. <br />
          <br /> Due to the combined efforts of Gondor, Rohan, and the Dúnedain
          of Arnor, Sauron's army was defeated. Despite still possessing more
          than enough military strength to destroy Minas Tirith and easily
          conquer Middle-earth once Gondor fell, doubt began to grow in Sauron.
          As such, he watched and waited, hoping for a period of strife between
          Aragorn and other potential Ringlords in which he could move out and
          take the Ring for himself.
        </motion.p>
        <h3>downfall</h3>
        <q>
          "If it [the Ring] is destroyed, then he will fall, and his fall will
          be so low that none can foresee his arising ever again. For he will
          lose the best part of the strength that was native to him in his
          beginning, and all that was made or begun with that power will
          crumble, and he will be maimed for ever, becoming a mere spirit of
          malice that gnaws itself in the shadows, but cannot again grow or take
          shape. And so a great evil of this world will be removed."
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Despite their successful repulse of Sauron's armies at Minas Tirith,
          Gandalf and Aragorn knew that the bulk of Sauron's forces remained in
          Mordor, readying themselves for another, deadlier strike against the
          city. Filled as Mordor was with Sauron's troops, Frodo Baggins stood
          almost no chance of reaching Mount Doom undetected. In light of the
          situation, Aragorn called for a council consisting of the major
          commanders of all the forces present in Minas Tirith, and appointed
          Gandalf to be their commander until the crisis had passed. Gandalf
          made it clear to all those present that, despite their great victory,
          they ultimately could not hope to defeat Sauron's armies by force.
          Therefore, they had two options available. They could station their
          remaining force, considerably greater than it had been before the
          battle due to the reinforcements from Rohan and southern Gondor, at
          Minas Tirith and hope to endure Sauron's next attack. Or, they could
          take a force to the Black Gate and attempt to challenge Sauron
          directly. <br />
          <br />
          This force, as Gandalf suggested, would only need to be great enough
          to offer battle, and the rest of their forces could remain behind to
          garrison Minas Tirith. This option, though suicidal for those
          involved, would serve to distract Sauron from gazing into his own
          land, through which the Ring Bearer would be traveling. Furthermore,
          Gandalf theorised that, once Sauron learned that a force too small to
          pose any real threat to him was on its way to the Black Gate to
          directly assault Mordor, he would likely believe that the leader of
          the attacking force would have the One Ring in their possession.
          Sauron would assume that the Ring itself would influence its wielder,
          who, in his pride and overconfidence in his newfound power, might be
          foolish enough to challenge Sauron's might with a force too small to
          assault Mordor in earnest.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Their plot worked, as Sauron marshaled most of his remaining forces
          and marched them towards Udûn to crush the Men of the West and regain
          his prize. This action left the Plains of Gorgoroth largely unguarded,
          allowing Frodo and Sam to reach Mount Doom with far less difficulty
          than otherwise. However, once Frodo reached the Cracks of Doom, he
          finally succumbed to the power of the Ring, and put it on.
          Immediately, Sauron became aware of the halfling, and turned his gaze
          towards the mountain. He frantically sent the Ringwraiths to retrieve
          the Ring, but was too late, as Gollum, after taking the Ring from
          Frodo, slipped and fell to his death into the Cracks of Doom. The Ring
          was unmade. The earth shook as a great shock wave rippled across
          Mordor, and the foundations of Barad-dûr were finally destroyed,
          causing the great fortress to fall into ruin once and for all. The
          cone of Mount Doom burst apart in a cataclysmic eruption that consumed
          the eight remaining Nazgûl. <br />
          <br />
        </motion.p>
        <motion.img
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-auto w-full mw-500"
          src={downfall}
          alt="downfall"
        />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          With his source of power gone, Sauron was utterly defeated and his
          armies were destroyed or scattered, bereft of the driving will behind
          their conquest. With the Ring's destruction, Sauron was permanently
          robbed of his physical form, reducing him to a malevolent spirit that
          hovered above Mordor as a "huge shape of shadow, impenetrable,
          lightning-crowned, ...terrible but impotent," only to be blown away by
          a great wind, he had ended on the same path as his old master,
          Morgoth, and was condemned to a sleepless impotent malice that feeds
          on itself.With the destruction of the Ring, the vast majority of
          Sauron's being and his power was forever lost. With that, Sauron's
          spirit no longer had the power to create a new body. Though his
          indestructible mind and being were bound forever to Eä, Sauron had
          lost all power to effect his will upon the world and could never again
          grow in strength.
        </motion.p>
      </motion.section>
    </main>
  );
}

export default Sauron;
