import React from "react";
import saruman from "../../assets/saruman-color.png";
import "./pageCharacters.scss";
import { forMask, headerZoom } from "../../framerAnimations/motionValues";
import { motion } from "framer-motion";
import LightSmoke from "../../components/LightSmoke";
import EdgeButtons from "./EdgeButtons";
import Line from "../../components/Line";
import saruman1 from "../../assets/saruman1.jpg";
import saruman2 from "../../assets/saruman2.jpg";
import saruman3 from "../../assets/saruman3.jpg";

function Saruman() {
  return (
    <main className="characters-bio-page h-full of-h bg-black pos-r p-1">
      <div className="pos-f top-0 left-0">
        <LightSmoke />
      </div>
      <section className="responsive-column-c pb-2">
        <article className="h-full info-section z-2  font-f-kelt display-f fd-c a-items-c color-white w-full pt-3">
          <h4 className="res-font font-w-300">Saruman</h4>
          <h4 className="responsive-h font-w-300">the white wizard</h4>
          <h4 className="desktop-size w-600 pt-3 pb-3 font-w-300 font-s-md color-l-grey">
            "Once he was as great as his fame made him. His knowledge was deep,
            his thought was subtle, and his hands marvelously skilled; and he
            had a power over the minds of others. The wise he could persuade,
            and the smaller folk he could daunt. That power he certainly still
            keeps. There are not many in Middle-earth that I should say were
            safe, if they were left alone to talk with him, even now when he has
            suffered a defeat. Gandalf, Elrond, and Galadriel, perhaps, now that
            his wickedness has been laid bare, but very few others." <br />
            <br /> - —Aragorn II Elessar, The Two Towers,
          </h4>
        </article>
        <motion.div
          variants={headerZoom}
          initial="hidden"
          animate="visible"
          className="saruman-image-div"
        >
          <motion.img
            variants={forMask}
            src={saruman}
            alt="sauron"
            className="masky-one o-fit-cover w-auto h-full"
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
          Saruman, also known as Saruman the White, was first of the Istari
          (Wizards), the emissaries of the Valar sent to Middle-earth in the
          Third Age to help in countering the returned Sauron. He was originally
          the order's chief, and was head of the White Council that for a time
          opposed the Dark Lord. But, in time, Saruman was overcome by lust for
          power and swore fealty to Sauron, becoming his puppet. Having betrayed
          the Council and Free Peoples, the corrupted Wizard hoped to either
          rule Middle-earth together with his new master, or supplant him to
          rule all himself. During the War of the Ring, Saruman marshalled an
          army at Isengard to both conquer Rohan on Sauron's behalf and try to
          seize the One Ring without his knowledge.
          <br />
          <br /> After Sauron's downfall, Saruman journeyed to the Shire,
          dragging Gríma Wormtongue along, and imposed a terror regime with him
          as the petty thug-lord. However, the oppressed Hobbits rallied against
          him and overthrew the wizard. Realizing he had been defeated, the
          Wizard proceeded to leave, but not before mocking and abusing
          Wormtongue. Being pushed over the edge by Saruman, Wormtongue
          furiously killed Saruman by stabbing him in the back over. His
          houseless spirit was denied passage into the West. <br />
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
          Saruman's status as both the original greatest Istari and follower of
          Sauron gave him arsenal to a variety of powers. Though he would
          eventually be defeated by Gandalf the White, Saruman was very mighty
          indeed at the peak of his power and he managed to imprison Gandalf the
          Grey. Gandalf described Saruman as an individual of great knowledge,
          cunning, and skill. Like his master, he was capable of breeding his
          own Uruk-hai and Half-orcs, and had many spies, be they walking on two
          legs or birds, that evaded detection. He was extremely learned in
          Ring-lore and the devices of Sauron, and this knowledge enabled him to
          create great forges and explosives that could breach the walls of
          Helm's Deep and burn an Ent to death. Unfortunately, it was his
          extensive knowledge of the Enemy's devices that was one of the reason
          leading to his downfall: enamored by the power exemplified by the
          Great Rings - particularly the One Ring - he fell into mimicry of
          Sauron and became his puppet. Based on either teachings imparted by
          his master or his own studies, he seemingly forged a lesser Ring; this
          led to Saruman styling himself as a "Ring-maker". <br />
          <br />
          He was well-versed in magic, one spell he displayed giving speed and
          strength to the Orcs who had kidnapped Merry and Pippin while
          obstructing Aragorn, Legolas and Gimli. By far, Saruman's greatest
          power (and the only one he could retain after the downfall of
          Isengard), however, was speech. He seemed to have had the ability to
          bend any but the absolute strongest minds to his will, simply by
          speaking to them. Even with Isengard broken and Saruman's treachery
          revealed, Gandalf had to be very careful, as Saruman could ensnare
          almost anyone with the power of his voice, few could contend with his
          will. Gandalf was not drawn into this power when he confronted
          Saruman; in trying to enchant some in the company, he left others out
          of his designs, and thus could not ensnare everyone at once. However,
          even in this situation, it is said that only Gandalf himself remained
          totally unmoved. Aragorn stated during this time that few other than
          Gandalf, Elrond, and Galadriel could resist his voice, even at this
          point. Saruman later used his persuasive power to escape Orthanc,
          convincing Treebeard to let him go.
        </motion.p>
        <q>
          "You did not seriously think that a hobbit could contend with the will
          of Sauron? There are none who can. Against the power of Mordor there
          can be no victory. We must join with him, Gandalf. We must join with
          Sauron. It would be wise, my friend." "Tell me, 'friend', when did
          Saruman the wise abandon reason for madness?!"
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          By the beginning of The Fellowship of the Ring, the White Wizard had
          betrayed the White Council and become the Dark Lord's vassal, or
          puppet. After Gandalf rides to Isengard to seek his counsel, Saruman
          announces his designs and urges him to join with Sauron. When Gandalf
          refuses, Saruman imprisons him atop Orthanc. He later uses his Seeing
          Stone to receive his master's instructions. Ordered to build "an army
          worthy of Mordor", Saruman calls his Orcs of the Misty Mountains, and
          openly begins preparations for war: the concealed network of forges,
          furnaces and palisades is revealed, trees are cut for fuel and
          Uruk-hai are bred in the caverns. Saruman confronts Gandalf once more
          atop Orthanc, trying to coerce him into submitting to Sauron or
          revealing the One Ring's location to him instead. The Grey Pilgrim
          dismisses the corrupted Wizard's delusions of grandeur: neither will
          he be his master's right-hand nor will he become the new Lord of the
          Rings. To Saruman's surprise, Gandalf then flees on Gwaihir's back,
          leaving him empty-handed. Saruman tracks the Fellowship using Crebain
          and summons massive snow avalanches and rock-slides to try and hinder
          the heroes at Caradhras. Still trying to seize the Ring before Sauron,
          Saruman keeps the first hundred Uruk-hai for his own elite fighting
          force and learns through the Palantír that the Fellowship is in
          Lothlórien. He then sends his loyal minion, Lurtz, to capture the
          Ring-bearer; Saruman's Uruk-hai troop attacks the company, slaying
          Boromir and capturing Merry and Pippin.
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
          Sir Christopher Lee reprised the role in Peter Jackson's live action
          The Hobbit trilogy. He originally expressed interest in voicing the
          Dragon Smaug, but the role ended up going to Benedict Cumberbatch.
          Christopher Lee also managed to humor Peter Jackson by asking him "Am
          I still in the movie?" This refers to when Christopher Lee's
          (Saruman's) death scene was cut from the theatrical version of The
          Return of the King and he had a falling out with Peter Jackson a
          decade before. Deriving from his actions' description in The
          Silmarillion, Saruman is depicted as frequently opposing Gandalf,
          hindering his efforts out of spite while maintaining the facade of an
          "old friend" as head of the White Council . Certain scenes also imply
          his vast knowledge of Sauron's devices, implying he has secretly grown
          enamored of his ways and power. <br />
          <br />
          In The Hobbit: An Unexpected Journey, he arrives in Rivendell for a
          meeting of the White Council. Irked by what he perceives as Gandalf's
          contesting of his authority, Saruman expressing his disapproval
          concerning the quest to reclaim the Erebor and belittles Gandalf for
          'looking for trouble where none exists'. He questions his fear of a
          potential alliance between the Dragon Smaug and a returned Sauron,
          while also claiming that the vanishing Dwarven Rings were of no value
          to the Enemy without the lost Ruling Ring. The White Wizard also
          appears to be skeptical of the information the Grey Pilgrim provides
          on the Necromancer and he further dismisses the information when he
          learns it came from the Brown Wizard, who he believes is a fool and an
          embarrassment on their order due to his consumption of mushrooms. When
          presented with the Morgul blade, Saruman states there is no proof that
          it belonged to the Witch-king of Angmar. The White Wizard sums up all
          of the Grey Pilgrim's concerns as nothing to worry about but, as final
          slight, he states that he feels he cannot condone the quest of the
          Dwarves to reclaim the Lonely Mountain. However, Gandalf had foreseen
          Saruman's pettiness and had beforehand bid Thorin Oakenshield's
          company leave Rivendell without him.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={saruman3}
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
          In The Hobbit: The Battle of the Five Armies, Saruman arrives at Dol
          Guldur along with Elrond, after being summoned there by Galadriel, to
          rescue Gandalf. Saruman appears as Galadriel and Gandalf are
          surrounded by the Nazgûl and offers his assistance. At this, two of
          the Nine turn towards him and both he and the Elf-lord begin to battle
          with the Ringwraiths. Saruman duels several of the Nazgûl, appearing
          to be able to handle up to two at a time. In the end, they overpower
          the Nine, who retreat momentarily. After Gandalf is taken away by
          Radagast, Sauron appears before the remainder of the White Council
          along with the returning Nazgûl. The White Wizard readies himself for
          further battle but appears to be paralyzed with awe of the Dark Lord's
          power. Galadriel rises in a terrifying ethereal form and begins a
          battle of wills with Sauron. The Wizard barely seems to notice this,
          still stunned in amazement and dread of the Enemy. Galadriel
          eventually gains the upper hand and banishes Sauron from Dol Guldur.
          After recovering from his shock, Saruman notes that while Galadriel
          has banished Sauron, it took nearly all of her power to do it and
          tells Elrond to take her back to Lothlórien, When the Elf argues that
          the One Enemy must be found and permanently destroyed, the Wizardd
          replies that without the One Ring, the Dark Lord will never regain his
          full strength. He then tells them to go and 'leave Sauron to me.' This
          is most likely the point, where Saruman embraces the path that would
          see him in thrall to Sauron. <br />
          <br />
          By the beginning of the animated film, the Wizard had sworn fealty to
          the Dark Lord, hoping to rule at his victorious master's side or
          supplant him. When Gandalf arrives at Isengard to ask his counsel,
          Saruman reveals his true intentions and urges Gandalf to join with
          Sauron or help him get the Ring for himself. After the Grey Pilgrim
          refuses both choices, the corrupted Wizard imprisons him atop his
          tower, confident that he'll either claim the Ring or, at least, be
          counted among his master's "good servants"; soon after, Gandalf
          escapes his clutches with the help of Gwaihir. Around the time the
          Fellowship escapes Moria, Saruman sends an Orc warband to hunt the
          Fellowship and capture the Ring-bearer; these warriors slay Boromir
          and take Merry and Pippin captive. Nonetheless, inner conflict between
          the Orcs of Isengard and those of Mordor as well as an attack by the
          Rohirrim foil his attempted second betrayal. Further, Gandalf reveals
          that the royal counselor of Rohan, Gríma, is Saruman's agent and so
          frees Théoden from his influence. At Isengard, Saruman has mustered an
          Orc army to crush the people of Rohan at Helm's Deep, intent on then
          joining Sauron in conquering the rest of Middle-earth. During the
          battle, Saruman sends a swirling stream of magical fire to blow apart
          the ramparts and walls of the Hornburg, allowing his servants to
          overrun the defenders. Nonetheless, the tide turns in the favor of
          Théoden's allies and Saruman's army is defeated.
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
          Saruman was originally one of the powerful Maiar of Aulë the Smith
          named Curumo (later in Sindarin, Curunír). As Tarindor, Saruman was
          among the Five Guardians who were sent to reinforce Melian and the
          already active Guardians in protecting the newly-awakened Elves from
          the evils of Melkor.
          <br />
          <br />
          In Valinor, the land of the Valar, a council was called by Manwë,
          Eru's regent, shortly after Sauron's defeat by the Last Alliance of
          Elves and Men. Though the Dark Lord was overthrown, he had not been
          effectively vanquished and his Shadow began to fall upon Middle-earth
          a second time. It was decided to send five emissaries to Middle-earth.
          These should be "mighty, peers of Sauron, yet forgo might, and clothe
          themselves in flesh," as they were intended to help Men and Elves
          unite against Sauron. The Wizards were forbidden, however, from
          matching the Dark Lord in power and fear.
        </motion.p>
        <q>
          A new power is rising. Against it the old allies and policies will not
          avail us at all. There is no hope left in Elves or dying Númenor. This
          then is one choice before you, before us. We may join with that Power.
          It would be wise, Gandalf. There is hope that way. Its victory is at
          hand; and there will be rich reward for those that aided it.
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Curumo was one of those who volunteered, whereas the last one, Olórin,
          (later known as "Gandalf") was commanded by Manwë to go too. It was
          from this point that Curumo began to be jealous of Olórin, due to
          Varda's decision to send Olórin not as the third Istari, but as the
          second. He also was charged to take Aiwendil (later called "Radagast")
          to please Yavanna, which Curumo did not wish to do, and this led to
          contempt for the latter Wizard. The others who were chosen were Alatar
          and Pallando (the Blue Wizards). Curumo then was appointed overall
          leader of the group.
          <br />
          <br />
        </motion.p>
        <h3>arrival in middle earth</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The five wizards arrived separately at the Grey Havens in the west of
          Eriador around the year TA 1000. Only the keeper of the havens, Círdan
          the Shipwright, knew Saruman's identity and origin. Saruman would
          later discover that Círdan had given Narya, the Red Ring, to Gandalf
          upon their first landing in Middle-earth. Even though Saruman was
          immediately considered the head of the order while Gandalf was not,
          Círdan had divined Gandalf as the wisest and greatest of the wizards.
          Saruman's jealousy of Gandalf grew from these events, perhaps because
          he feared that he would eventually supplant him as chief of the
          wizards. The White Messenger and the two Blue Wizards went into the
          east of Middle-earth. After one and a half millennia, Saruman returned
          to the west, just as Sauron's power was growing again in Dol Guldur.
        </motion.p>
        <div className="rise-border">
          <motion.img
            variants={headerZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-auto mw-700"
            src={saruman1}
            alt="nazguls"
          />
        </div>
        <h3>the white councel</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          When the White Council was formed around the year 2463 of the Third
          Age in order to counter Sauron, Saruman was appointed its leader,
          though Galadriel wanted Gandalf in this position. Saruman refused to
          step down due to his pride, while Gandalf had declined; the White
          Messenger, though, continued to resent the Grey Pilgrim.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          At this point Saruman had begun to sense the resurgence of Sauron. His
          extensive research, especially into Ring-lore, had led him to admire
          the Dark Lord and covet his power. This was also the same year that
          Sauron's One Ring was taken by the Stoor Sméagol (later called
          Gollum), who disappeared with it into the Misty Mountains for hundreds
          of years. It was during the meetings of the Council that Saruman first
          noted Gandalf's interest in Hobbits and the Shire, and believing that
          all his deeds related to some as yet undisclosed plan of his for
          self-enhancement, the White Wizard himself began keeping a closer
          watch on the Grey Pilgrim and sent spies to the Shire to report on all
          his movements. At first, he himself visited it secretly but stopped
          when he realized that its inhabitants had noticed him. Amongst the
          purposes of his visits was to procure some of the halflings'
          Pipe-weed, since in secret imitation of Gandalf (and for which he
          publicly belittled him) Saruman had begun to smoke.
          <br />
          <br />
          In the year TA 2759, Saruman settled in Isengard with the permission
          of the Steward of Gondor, Beren, although he settled only as Warden of
          the Tower and representative of Minas Tirith (the stronghold had by
          then been abandoned by Gondor). There he became important in the
          informal alliance defending the west of Middle-earth. In the Tower of
          Orthanc in Isengard, he also found one of the remaining palantíri, and
          used it, betraying the White Council's trust.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          In TA 2850, Gandalf entered Dol Guldur and confirmed that the evil
          presence was indeed Sauron. On Saruman's advice, the White Council
          decided against attacking Dol Guldur. The Grey Pilgrim would later
          remark that it was at this council meeting that he first began to
          suspect that the White Wizard desired to attain the One Ring.
          Saruman's real intention was to allow Sauron to build up his strength,
          so that the Ring would reveal itself and he could claim it first. He
          later found that the Enemy had more knowledge of the possible location
          of the One Ring than he expected. Therefore, in TA 2941, Saruman
          finally agreed to attack Dol Guldur. The attack was successful, and by
          the devices of the White Wizard, the Dark Lord was driven from the
          fortress.
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
            src={saruman2}
            alt="downfall"
          />
        </div>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ten years after Sauron abandoned Mirkwood, he returned to Mordor and
          declared himself openly. He established contact with Saruman through
          the palantír captured from Minas Ithil, which had since become known
          as Minas Morgul. Saruman was ensnared by Sauron, who made him his
          vassal, or puppet, leading to Saruman betraying the Council and his
          people. Now desiring, or no longer opposing his victory, the corrupted
          Wizard's endgame maintained two-fold plan: rule Middle-earth at the
          side of his new master, or usurp him as Ringlord and rule all himself.
          Taking Isengard for his own in TA 2953, Saruman began to fortify it.
          Having recruited the Orcs of the Misty Mountains into his service and
          allied with the Dunlendings, he began to trouble the borders of
          Rohirrim, whilst concealing any evidence of his defection to Sauron's
          service. He had also bought Gríma Wormtongue, Théoden's counselor, and
          used him as a mole the Edoras court to sap the ailing king's strength
          with deceitful advice and subtle poisons. In preparation for the
          upcoming war, Saruman began breeding Orcs within Isengard; by some
          foul craft learned from Sauron or rediscovered, he made his own
          Uruk-hai and Half-orcs. <br />
          <br />
          Using the kind-hearted Radagast as an unwitting pawn, Saruman summoned
          Gandalf to Isengard; so it was that upon Gandalf's arrival, Saruman
          revealed his betrayal and true nature, shedding the title of "the
          White" in favour of Saruman of Many Colours. Saruman announced his
          intention to become the ruler of Middle-earth at Sauron's side or in
          his place; he then demanded that the Grey Pilgrim submit to him or to
          his master. Gandalf refused both choices and denied him the Ring's
          whereabouts, for which Saruman imprisoned him atop Orthanc. Gandalf
          later escaped with help from Gwaihir the Windlord, one of
          Middle-earth's Great Eagles, and made Saruman's treachery known to the
          rest of the Free Peoples.
        </motion.p>
        <h3>begginning of the end</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          By one account, the Nazgûl came two days after Gandalf's escape and
          Saruman used his voice to persuade the Lord of the Nazgûl that he did
          not know the Ring's location but that Gandalf did and they should seek
          him nearby. After the Nazgûl heard this they went back on the main
          road rode along and instead found Gríma - who was on his way to tell
          Saruman that Gandalf had been to Edoras. Fearing for his life,
          Wormtongue revealed that that the corrupted Wizard was withholding
          information from his own master and told the Ringwraiths how to reach
          the Shire. <br />
          By another account, Saruman only discovered that Gandalf had escaped
          when the Nazgûl arrived. Daunted by what service to Sauron entailed,
          he had been about to beg Gandalf for forgiveness and help, only to
          find him gone. To evade the danger at hand, he pretended that the Grey
          Pilgrim was still there and had just given up the location of the
          Shire; he believed he could still play the double-game with his
          master. The Nazgûl later learned that Saruman knew far more than he
          had shared with them. On their way to the Shire, the Nazgûl met one of
          Saruman's agents in Eriador, from whom they got detailed maps of the
          Shire. They sent the spy back to the Shire after warning him that he
          was now in the service of Mordor not Isengard; the spy in question was
          the ill-favored Dunlending at the The Prancing Pony. <br />
          <br />
          At Sauron's command, Saruman moved against Théoden, using Gríma to sap
          his strength and sending raiding parties to wreak havoc in the
          Westfold of Rohan. Concurrently, the corrupted Wizard attempted a
          second betrayal on his master: he sent trusted warbands to hunt down
          the Fellowship and capture the Ring-bearer. An Uruk-hai horde led by
          Uglúk ambushed the company at Amon Hen, where they took Pippin and
          Merry captive, while also shooting Boromir "with many black-feathered
          arrows" when he tried to defend the Hobbits. Slowed on their way back
          to Isengard by conflict with Sauron's faithful Mordor Orcs, the Uruks
          were slain on the eaves of Fangorn by Rohirrim. Gimli believed he had
          glimpsed Saruman, or his projection, at the site of the skirmish,
          presumably having hastened to claim the Ring from the Hobbits. <br />
          <br />
          Driven by fear of ruin, Saruman intensified his efforts against
          Théoden on Sauron's behalf, hoping to gain his cheated master's
          clemency. The corrupted Wizard tasked his servants to slay the king's
          heir at all costs. Per this special order, the army of Isengard
          engaged the defenders of Rohan at the Fords of Isen; the First Battle
          at the Fords of Isen ended in the death of Théoden's son, Théodred,
          followed by the retreat of Saruman's hordes. With Rohan weakened,
          Saruman marshalled his full might and sent the Uruk-hai legions to
          destroy the Rohirrim people at Helm's Deep. Though it initially held
          the upper hand, Saruman's army was vanquished in the Battle of the
          Hornburg, its ranks broken by Gandalf's reinforcements. Meanwhile, the
          Wizard also found himself under assault. The Ents led by Treebeard
          besieged Isengard, seeking vengeance for incursions by Orc axemen into
          Fangorn. These two confrontations led to the end Saruman's reign of
          terror in the west, while also costing Sauron a valuable, albeit
          duplicitous, vassal. <br />
        </motion.p>
        <q>
          You have become a fool, Saruman, and yet pitiable. You might still
          have turned away from folly and evil, and have been of service. But
          you choose to stay and gnaw the ends of your old plots. Stay then! But
          I warn you, you will not easily come out again. Not unless the dark
          hands of the east stretch out to take you! - Gandalf The White
        </q>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Following the Ents' destruction of Isengard, Saruman found himself
          confined to Orthanc and his servants scattered or killed. After the
          arrival of Théoden, Gandalf, Aragorn, and the remaining members of the
          Fellowship, Saruman made one final unsuccessful attempt to bring
          Théoden under his sway; recognizing the claw of Mordor through the
          extended hand of Isengard, the king of Rohan refused. Gandalf offered
          Saruman a chance for redemption, which involved surrendering his staff
          and the Key of Orthanc as a pledge, in exchange for freedom to head
          wherever he pleased - even to Sauron in Mordor. Saruman had a moment
          of doubt but in the end pride, anger, envy, fear and hate won over and
          he refused the chance of redemption. <br />
          Gandalf, who had returned from death to accomplish the mission Saruman
          did not, expelled the turncoat from the order and broke his staff.
          Saruman also lost the palantír of Orthanc when Gríma Wormtongue threw
          it off a balcony, undecided about which he hated more, Saruman or
          Gandalf, and hitting neither.
        </motion.p>
        <h3>the final</h3>
        <motion.p
          variants={headerZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Left out of the final stages of the War of the Ring, Saruman
          eventually managed to persuade the Ents holding him captive to let him
          leave Isengard after he handed to them the Key of Orthanc. He went
          thence to the Shire, which his ally Lotho Sackville-Baggins had
          brought under control. He spent his final days as a criminal master in
          Hobbiton known as Sharkey (from the Orkish sharkû, meaning "old man"),
          until he was overthrown in the Battle of Bywater. In the aftermath of
          that battle Frodo confronted Saruman and exiled him from the Shire.
          Saruman agreed to leave. However, when Frodo attempted to convince
          Gríma Wormtongue that he no longer needed to serve Saruman, Saruman
          exposes Grima's actions, such as murdering the Lotho
          Sackville-Baggins. Gríma argued that Saruman made him to that, but
          Saruman mocks him and kicks him in the face. As Saruman begins
          walking, he is attacked from behind by a furious Wormtongue, who takes
          revenge for Saruman's abuse by slitting his throat with a dagger on
          the very doorstep of Bag End, ultimately leading to the death of the
          evil and traitorous wizard. <br />
          <br />
          After his departure from Orthanc, King Elessar entered the tower with
          the intent of re-ordering it. Inside, Elessar's men found many
          treasures that Saruman had conned off of the late Théoden. There was a
          secret closet that could only be found with the aid of Gimli; it
          contained the original Elendilmir, which had presumed to be lost
          forever when Isildur perished in the Gladden Fields, as well as a
          golden chain presumed to have once borne the One Ring. Being a Maia
          like his fallen master, he did not truly die. Saruman's spirit
          separated from his body much like Sauron's after the Downfall of
          Númenor. As an incorporeal spirit, he should have been called to the
          Halls of Mandos, but the tale implies that he was barred from
          returning. Tolkien indicated that his spirit was left naked, powerless
          and wandering, never to return to Middle-earth:
        </motion.p>
        <q>
          Whereas Curunir was cast down, and utterly humbled, and perished at
          last by the hand of an oppressed slave; and his spirit went
          whither-soever it was doomed to go, and to Middle-earth, whether naked
          or embodied, came never back. - Saruman's fate
        </q>
      </motion.section>
    </main>
  );
}

export default Saruman;
