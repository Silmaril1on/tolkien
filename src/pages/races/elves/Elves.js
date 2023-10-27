import React, { useState } from "react";
import "../../tolkien.scss";
import HeadlineHeader from "../../../components/HeadlineHeader";
import ContentHeader from "../../../components/ContentHeader";
import SideLinks from "./SideLinks";
import elf1 from "../../../assets/mask-elves1.png";
import elf2 from "../../../assets/elf2.png";
import elf3 from "../../../assets/elf3.png";
import elf4 from "../../../assets/elf4.jpg";
import elf5 from "../../../assets/elf5.webp";
import elf6 from "../../../assets/elf6.png";
import elf7 from "../../../assets/elf7.webp";
import elf8 from "../../../assets/elf8.jpg";
import elf9 from "../../../assets/elf9.webp";
import elf10 from "../../../assets/elf10.jpg";
import ElfTree from "./ElfTree";

function Elves() {
  const [openTree, setOpenTree] = useState(false);

  const tree = () => {
    setOpenTree(!openTree);
  };

  return (
    <main className="race-elves box-s-bb w-full font-f-primary display-f fd-r jc-c color-white mt-n1 pt-3 h-full">
      <article className="column-c bg-black color-l-grey w-full p-1 m-2">
        <section id="elves" className="responsive-p w-full">
          <HeadlineHeader>elves</HeadlineHeader>
          <div className="float-right">
            <img className="img-150 masky" src={elf1} alt="elves" />
            <h6>art by Araniart on DeviantArt</h6>
          </div>
          The Elves were the first and eldest <b>Children of Ilúvatar</b>,
          considered the fairest and wisest of the earthly race of <b>Arda</b>.
          They called themselves the Quendi (Quenya: "the Speakers"; singular
          Quendë), referring to how at their creation, they were the only living
          things they knew of that spoke. <br />
          <br />
          <b>Oromë</b> referred to the Elves that chose to follow him during the
          Great Journey as <b>Eldar</b> (Q.: "People of the Stars"), because
          when they awoke the stars were the only lights in the sky. Some, known
          afterwards as the <b>Calaquendi</b> (Elves of the Light), were brought
          by the <b>Valar</b> from Middle-earth to <b>Valinor</b> across the
          Sea, where they were taught by the
          <b>Ainur</b>. But after the <b>Silmarils</b> were stolen by{" "}
          <b>Melkor</b>, some of the Elves returned to Middle-earth, where they
          remained until the end of the Third Age. <br />
          <br />
          Elves were immune to illness and not subject to age after reaching
          their prime. They could be killed only in violence or by extreme
          despair.
        </section>
        <section id="creation" className="responsive-p">
          <ContentHeader>Creation & awakening</ContentHeader>
          The Firstborn, the Elder Children of Ilúvatar, were conceived by{" "}
          <b>Eru Ilúvatar</b> alone in the third theme of <b>Ainulindalë</b>.
          They are the eldest and noblest of the speaking races of Middle-earth.
          They awoke at
          <b>Cuiviénen</b>, the Water of Awakening, in the far east of{" "}
          <b>Middle-earth</b>, in the starlight of the <b>Sleep of Yavanna</b>,
          as the <b>Sun</b> and <b>Moon</b> had yet to be created. The first
          Elves to awake were three pairs: Imin ("First") and his wife Iminyë,{" "}
          <b>Tata</b> ("Second") and <b>Tatië</b>, and <b>Enel</b> ("Third") and
          Enelyë.
          <div className="float-left">
            <img className="img-150 masky" src={elf2} alt="elf" />
            <h6>the first children of iluvatar art by alan lee</h6>
          </div>
          <br />
          <br />
          According to legend, Imin, Tata, and Enel, and their wives joined up
          and walked through the forests. They came across six, nine, and twelve
          pairs of Elves, and each "patriarch" claimed the pairs as his folk in
          order. The now sixty Elves dwelt by the rivers, and they invented
          poetry and music in <b>Middle-earth</b>. Journeying further, they come
          across a band of Elves watching the stars, which Tata claimed as his.
          These were tall and dark-haired, the fathers of most of the{" "}
          <b>Ñoldor</b>. The ninety-six Elves now invented many new words.
          Continuing their journey, they found twenty-four pairs of Elves,
          singing without language, and Enel added them to his people. These
          were the ancestors of most of the Lindar or "singers", later called{" "}
          <b>Teleri</b>. They found no more Elves; Imin's people, the smallest
          group, were the ancestors of the <b>Vanyar</b>. All in all they
          numbered 144. Because all Elves had been found in groups of twelve,
          twelve became their base number and 144 their highest number (for a
          long time). None of the later <b>Elvish languages</b> had a common
          name for a greater number. <br />
          <br />
          At first the Elves sang with grace and merriment without speech but
          soon they developed speech and spoke with words, so their first name
          for themselves was Quendi (The Ones Who Speak With Voices).
        </section>
        <section id="discovery" className="responsive-p">
          <ContentHeader>Discovery & sundering</ContentHeader>
          The Elves were content and dwelt long under the <b>stars</b> in woods
          near Cuiviénen. However, <b>Melkor</b>, the <b>Dark Lord</b>, became
          aware of them and their location before the <b>Valar</b>, and sent
          evil spirits to spy on and afflict them. Many spirits that harassed
          the Elves came in the form of great horsemen for the purpose of
          causing the Elves to fear the Vala
          <b>Oromë</b>, whom Melkor knew would likely be the first Vala to
          discover them. And so it was that, on one of his many journeys in the
          wilds of Middle-earth, Oromë came upon the Elves. Due to Melkor's
          foresight and malice, some Elves were afraid. Hiding and fleeing, some
          of these early Elves were taken by Melkor or his agents. These Elves
          were never seen again and were taken to <b>Utumno</b>, and were
          believed to be twisted and mutilated into the first <b>Orcs</b>.
          However, the Elves who stayed quickly learned that Oromë was far
          different from the evils that had been pursuing them. Oromë quickly
          came to love the Elves, and them and gave them the name Eldar (People
          of the Stars).
          <div className="float-right">
            <img className="masky" src={elf3} alt="elf" />
            <h6>utumno fortress</h6>
          </div>
          <br />
          <br />
          Oromë spent some time with them and then returned to <b>Valinor</b> to
          tell
          <b>Manwë</b> of his discovery. He then returned to live with Elves for
          a time, learning about them. Not long after, the Valar decided that,
          for the good of the Elves, that Melkor needed to be overthrown. The
          Valar made <b>war</b> upon Melkor and set a guard on Cuiviénen. The
          Elves knew nothing of the war save that the earth shook and thunderous
          lightning was seen in the north. After a long, grievous war, the Valar
          were triumphant, and Melkor was imprisoned. Oromë then returned to the
          Elves with a summons of the Valar to <b>Aman</b>. However, many of the
          Elves were afraid, as they felt and had seen rumor of the terrible
          power of the Valar as they made war against Melkor. As such, the it
          was decided by the Elves to choose ambassadors one from each kindred
          to go to Valinor and report back to their kindred what they saw. The
          names of these representatives were <b>Ingwë</b>, <b>Finwë</b>, and{" "}
          <b>Elwë</b>. <br />
          <br />
          <div className="float-left">
            <img className="img-150" src={elf4} alt="elf" />
            <h6>beleriand by manzara art</h6>
          </div>
          When the three returned, they spoke to their people of the beauty and
          bliss of what they had seen and urged them to travel to Valinor and
          abide there. Thus began the <b>Great Journey</b>, also known as the
          Sundering of the Elves. All of the Elves agreed, save for the{" "}
          <b>Avari</b>, who chose to remain in Middle-earth. Led by Oromë, the
          Elven kindreds marched out of Cuiviénen but as they moved out of the
          forest area and saw the black clouds surrounding the north where
          Melkor had once lived, some grew afraid and turned back to Cuiviénen.
          The rest continued, albeit slowly, often stopping until Oromë
          returned, but were curious about what they saw. <br />
          <br />
          The Vanyar and the Ñoldor, who were most eager to reach Valinor
          pressed on with the greatest speed and were the first to reach the
          coasts and to be taken to Valinor on an <b>island</b> that the Vala{" "}
          <b>Ulmo</b>
          guided across the <b>Belegaer</b>. The <b>Teleri</b> were the slowest
          of the groups as they were drawn to the forests and rivers they
          encountered in the western and southern parts of Middle-earth. This
          caused them to separate into several different groups, such as the{" "}
          <b>Nandor</b> who became Wood-elves of <b>Wilderland</b> and later{" "}
          <b>Beleriand</b>. Some of the Teleri who did not like the sea and,
          partly due to the disappearance of Elwë in Nan Elmoth for a time, drew
          back and settled in the wooded areas of Region and Neldoreth that
          later became Doriath. The Teleri that were drawn to the sea settled
          along the western shores later becoming the
          <b>Falathrim</b> ruled by <b>Círdan</b>, who founded the coastal
          cities of <b>Eglarest</b>
          and <b>Brithombar</b>. Eventually, most of the Teleri went into the
          west on Tol Eressëa, led by Olwë.
        </section>
        <section id="life" className="responsive-p">
          <ContentHeader>life in aman</ContentHeader>
          The Elves that came to <b>Aman</b> were enriched by the knowledge of
          the Valar and the bliss of their lands, and the three Elven clans
          developed their own cultures. The former ambassadors <b>Ingwë</b> of
          the Vanyar and <b>Finwë</b> of the Ñoldor became kings of their people
          and, as Elwë never returned to Valinor, his brother Olwë became King
          of the Teleri. The Vanyar were drawn to the Valar and the full light
          of the
          <b>Two Trees of Valinor</b> and settled at the foot of{" "}
          <b>Taniquetil</b> with their king Ingwë, who became{" "}
          <b>High King of the Elves</b>, revered by all Elves living in the
          mountain below Manwë. The Ñoldor, beloved by <b>Aulë</b> the Smith for
          their love of arts and crafts, built the great city of Tirion on Túna
          where Finwë, the <b>High King of the Ñoldor</b>, lived. The Teleri
          were drawn to the sea and some never left the island ferry of Tol
          Eressëa until Olwë their lord later built <b>Alqualondë</b>, with the
          help of the Ñoldor. <br />
          <br />
          <div className="float-left">
            <img className="img-100" src={elf5} alt="elf" />
            <h6>The Drawing of the Sword, by Jenny Dolfen</h6>
          </div>
          They devised writing scripts and developed arts of building,
          metallurgy, and shipbuilding, and poetry and music became common and
          lasting practices of all Elven kindreds. For three ages, the Elves
          lived in total peace and bliss, wandering and enhancing the lands.
          After these three ages, Melkor completed his sentence. He feigned
          rehabilitation, and convinced Manwë that he was no longer a threat.
          However, his stay in prison had only increased his malice, and,
          remembering that it was for the sake of the Elves that he had been
          overthrown, he sought to poison the peace of Valinor and bring ruin to
          the Elves. Adopting a fair and wise form, he began to cultivate the
          trust of those living in Valinor. Of the three Elven clans, Melkor saw
          the Teleri as rather useless to him, and the Vanyar would have nothing
          to do with him, being content in their development. But the Ñoldor,
          desiring more knowledge than other clans, were willing to listen to
          him, and Melkor saw that, due to their creative skill, they were more
          potentially useful than the Teleri. And so Melkor began to teach them,
          and for a long while none of his evil was made manifest, for any who
          sought his aid and counsel benefited greatly from it. But with his
          genuine teachings came half-truths and disguised lies regarding the
          intentions of the Valar. Most harmful among these was the knowledge
          that <b>Men</b>, the Second Children of Illuvatar, would one day
          appear in Middle-earth. The Valar had not revealed this to the Elves,
          and after a time, rumors began to circulate amongst the Ñoldor that
          the Valar had brought them to Aman so that Men might inherit
          Middle-earth and usurp the glory that might have belonged to the
          Elves. Chief amongst these discontented Elves was Fëanor, the
          firstborn son of Finwë, King of the Ño{" "}
          <div className="float-right ">
            <img className="img-150" src={elf6} alt="elf" />
            <h6>the two trees of valinor</h6>
          </div>
          ldor.
          <b>Fëanor</b> was gifted beyond virtually all of his peers in terms of
          beauty, skill, subtlety, and craftsmanship. It was he who had
          developed, amongst many other wonders, the system of letters used by
          the Ñoldor. But his greatest creation had been the <b>Silmarils</b>,
          three diamond-like gems in which the intermingled light of the Two{" "}
          <b>Trees of Valinor</b> had been captured. <br />
          <br />
          However, despite Fëanor's capabilities (or perhaps because of them),
          he was exceedingly arrogant, and his actions were often rashly
          conducted. He hated and feared Melkor, but unwittingly provided his
          lies with their most prominent voice. Eventually, Melkor's lies and
          Fëanor's own vanity resulted in him drawing his sword against his
          half-brother <b>Fingolfin</b>. Erstwhile the Valar had been troubled
          by the unrest of the Ñoldor, but had simply watched and waited. Now
          however, with the peace of Valinor violated, they could no longer
          ignore the issue. Fëanor was brought to <b>Máhanaxar</b> and told to
          explain himself. With this, the lies of Melkor were at last laid bare,
          and he fled before the Valar could recapture him. However, for his
          actions, Fëanor was banished from <b>Tirion</b> for a time. Twelve
          years later, Manwë sought to heal the wounds between the Ñoldor at a
          festival held in <b>Valmar</b>, but Melkor and the{" "}
          <b>Great Spider Ungoliant</b> destroyed the Two Trees,
          <b>darkening Valinor</b>, killing Finwë, stealing the three Silmarils
          of Fëanor, and fleeing to Middle-earth. <br />
          <div className="float-left">
            <img className="img-150" src={elf7} alt="elf" />
            <h6>
              Fëanor and his sons swear their Oath beneath the tower of the
              Mindon Eldaliéva in Tirion
            </h6>
          </div>
          When the tragic death of his father became known, the wrath of Fëanor
          could no longer be contained. He gathered all the Ñoldor in Tirion and
          beneath the <b>Mindon Eldaliéva</b> he urged the Ñoldor to return to
          Middle-earth in pursuit of Melkor and the Silmarils swearing an{" "}
          <b>oath</b>
          to war with Melkor, now known as Morgoth. After being banned by the
          Valar for the rebellion and the violent deeds of the{" "}
          <b>House of Fëanor</b>, the Ñoldor returned to Middle-earth as exiles
          to battle Morgoth, and to establish and rule realms of their own.
        </section>
        <section id="war" className="responsive-p">
          <ContentHeader>War of the Jewels</ContentHeader>
          The crimes of Melkor in Aman and the subsequent rebellion of the
          Ñoldor started a centuries-long war that would come to involve all the
          Elven kindreds of Middle-earth, as well as other races, directly or
          indirectly. During this time, five great battles were fought against
          Morgoth and although many were victorious for the Elves and their
          allies, the ultimate result was disastrous. Additionally, the doom
          that followed the Ñoldor as a result of the{" "}
          <b>Kinslaying at Alqualondë</b>
          was discovered by <b>Thingol</b>, the <b>King of Doriath</b>. This
          discovery all but destroyed the relationship between the <b>Sindar</b>{" "}
          and the <b>Ñoldor</b>. There were also other Elves and races such as
          the Petty-dwarves that resented the exiled Ñoldor for usurping their
          rightful place in Middle-earth. <br />
          <br />
          <div className="float-right">
            <img className="img-150" src={elf8} alt="elf" />
          </div>
          Though for hundreds of years, the Ñoldor Elves fought and endured the
          forces of Morgoth with little military aid from the other Elven
          kindreds, a common fear and a common foe allowed for the Elves
          (especially the Ñoldor) to mingle with mortal Men, who had recently
          come into Beleriand from the east. The first of these were the Three
          <b>Houses of the Edain</b>. They were followed by the{" "}
          <b>Easterlings</b>, some of whom served Morgoth. At first, only the
          Ñoldor had dealings with Men, as the other Elves feared them, but over
          the generations, Men served the Ñoldor and gained their respect. After
          the <b>Quest for the Silmaril</b>, the blood of the Eldar and the
          Edain mingled with each other, first through the marriage of{" "}
          <b>Beren</b> and <b>Lúthien</b>, and then through <b>Tuor</b> and
          <b>Idril</b>. This union would create a bond that would enrich and
          ennoble both kindreds from then to later ages. <br />
          <br />
          <div className="float-left">
            <img className="img-150" src={elf9} alt="elf" />
            <h6>Elves, by Firat Solhan, fighting in the War of Wrath</h6>
          </div>
          The terrible <b>Oath of Fëanor</b> created strife between the Elven
          kindreds, as even those not bound were drawn into it over the Silmaril
          recovered by Beren and Lúthien. The two brothers <b>Celegorm</b> and{" "}
          <b>Curufin</b> attempted to usurp the throne of <b>Nargothrond</b>{" "}
          after the loss of <b>Finrod</b> in the Quest for the Silmaril, but
          were thwarted by the hound <b>Huan</b> and
          <b>Orodreth</b> and expelled. It was because of this deed that the
          Ñoldor of Nargothrond lent little aid to the <b>Union of Maedhros</b>{" "}
          during the Nírnaeth Arnoediad. Twice in the latter half of the{" "}
          <b>First Age</b>, the Sons tried to take the Silmaril from those who
          inherited it. These acts of cruelty and violence against their Elven
          kin caused great loss of life and resulted in the deaths of all of
          them except <b>Maglor</b>, who forever wanders the coasts of
          Middle-earth singing about the suffering of the Ñoldor.
        </section>
        <section id="later" className="responsive-p">
          <ContentHeader>Later days and decline</ContentHeader>
          After the destruction of Beleriand in the <b>War of Wrath</b>, the
          remaining Ñoldor repented of their rebellion and many returned to
          Eldamar along with some of the Sindar. The Elves that chose to remain
          in Middle-earth founded new realms. Most of the Ñoldor lived in{" "}
          <b>Lindon</b>
          with <b>Gil-galad</b>, the <b>High King of the Ñoldor</b>. Hundreds of
          years later
          <b>Celebrimbor</b>, the last of the <b>House of Fëanor</b>, founded a
          new Ñoldorin realm called <b>Eregion</b>. The Sindar joined also with
          Gil-galad in Lindon and few went beyond the Misty Mountains into
          Wilderland, becoming leaders of the <b>Silvan Elves</b> in places such
          as <b>Lothlórien</b> and <b>Greenwood the Great</b>. <br />
          <br />
          The Elven realms flourished for over one thousand years until{" "}
          <b>SA 1200</b>
          when <b>Sauron</b>, under the guise of a messenger from the Valar
          named Annatar, appeared out of the east to offer knowledge to the
          Elves. Gil-galad mistrusted him and barred him from his kingdom.
          Sauron then approached Celebrimbor and the Elves of Eregion, and
          against Gil-galad's advice they accepted him and his knowledge. <br />
          <br />
          <div className="float-right">
            <img src={elf10} alt="elf" className="img-150 masky" />
            <h6>the one ring</h6>
          </div>
          With Annatar's help, Celebrimbor forged the <b>Rings of Power</b>, but
          Three Rings alone were made in secret by Celebrimbor and were not
          directly touched by Sauron's power. Then, Sauron forged the{" "}
          <b>One Ring</b> in order to control the others. The Elves discovered
          Sauron's plan and took off their rings. Celebrimbor sent the ring{" "}
          <b>Nenya</b> to <b>Galadriel</b> and sent
          <b>Vilya</b> and <b>Narya</b> to Gil-galad in Lindon. <br />
          <br />
          Furious that the Elves had foiled his plans for domination, Sauron
          demanded the return of the rings and when they refused he prepared for
          war. For eight years, Sauron laid waste to Middle-earth in his war
          against the Elves, destroying Eregion and killing Celebrimbor.
          Eventually, with help of the <b>Númenóreans</b>, Gil-galad was able to
          lead the Elves to victory. Gil-galad then decided to abandon Eregion
          in favor of the new refuge of <b>Rivendell</b>, formed at the
          foothills of the Misty Mountains and he made his herald, <b>Elrond</b>
          , the Lord of Rivendell and his representative in <b>Eriador</b>.
          Lindon survived still as the greatest kingdom of Elves in
          Middle-earth. The rest of the Elves of Middle-earth who survived
          either moved to Lindon, sailed for the West, or continued to live in
          their lands under caution due to the continued
          <b> threat from Sauron.</b> <br />
          By the latter half of the Second Age, Men continued to spread and grow
          in Middle-earth. The <b>Faithful</b> from the{" "}
          <b>Downfall of Númenór</b> founded the great kingdoms of <b>Arnor</b>{" "}
          and <b>Gondor</b>. Though Men were set to supplant them in
          Middle-earth, the Elves were powerful and numerous enough to join with
          Men one last time to defeat Sauron. Gil-galad led the second greatest
          host of Elves ever seen in Arda and formed the{" "}
          <b>Last Alliance of Elves and Men</b> with <b>Elendil</b>, High King
          of all <b>Dúnedain</b>, and vanquished Sauron in <b>SA 3441</b>.{" "}
          <br />
          <br />
          With the dominion of <b>Men</b> at hand, the Elves became less
          numerous and more secluded with many becoming wearier of the now
          mortal lands. Only the realms of Lindon, <b>Lothlórien</b>, and
          Rivendell survived as havens of Elven bliss. High Elves continued to
          live in Lindon but most sailed into the West after their king's death
          along with many Sindar. The last of the High Elves left Middle-earth
          after the final defeat of Sauron in the <b>War of the Ring</b>. <br />
          Elves living in Aman, including those who returned from Middle-earth
          in the <b>Third</b> and <b>Fourth</b> Ages, lived in a state of
          blissful happiness as they did before the Revolt of the Ñoldor. Elves
          that never chose to sail into the Utter West, instead choosing to
          remain in Middle-earth in places such as the <b>Woodland Realm</b> in
          the former <b>Mirkwood</b>, would probably become more and more
          secretive, less numerous, and hidden. Eventually, these lingerers
          would fade away entirely as their bodies were consumed by the power of
          their spirits.
        </section>
        <div className="w-full column-c mt-5 p-3 box-s-bb">
          <button onClick={tree} className="rop-btn m-3 color-white">
            house of finwe
          </button>
          {openTree && <ElfTree />}
        </div>
      </article>
      <SideLinks />
    </main>
  );
}

export default Elves;
