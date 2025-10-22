import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function async(req, res) {
    let book = {};
    let chapter = {};


/*
    book = {
        id: "yahawzhowaa-book-6-en",
        title: "Mountains of the Turtle",
        subTitle: "The Mountains of the Turtle",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-six-171x214.jpg",
        thumbnailTitle: "Mountains of the Turtle",
        Description: "",
        priceText: "Subscription",
        price: 9.99,
        isParent: true,
        hasChildBooks: false,
        order: 8,
        parent: "",
        visible: true,
        language: "en",
        category: "quetzal-condor",
        discountCode: "",
        discountPrice: "1000",
        discountPriceText: "Subscription"
    }
    removeBook(book);
    addBook(book);
   
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

   chapter = {
        id: "yahawzhowaa-book-6-chapter-1-en",
        title: "Chapter 1",
        subTitle: "Aganabish declareth his stewardship",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-1-en",
        title: "Chapter 1",
        subTitle: "Aganabish declareth his stewardship",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-5-chapter-2-en",
        content: [
"I Aganabish, keeper of the Sacred Record, make known the matter of the Red Tablets, which were old when my grandfather’s grandfather was young.",
"2 These were delivered unto me by hands trembling for reverence, even from those that received them in secret caves of Siipisiing, beneath roots of cedar that drink the snow.",
"3 The tablets are of stone like unto iron when cold, yet warm when held in prayer; and their writing burneth faintly as embers under ash.",
"4 My fathers called them the First Songs, for they carry a voice that is older than our tongues.",
"5 They speak of a garden not as our mothers told us, yet true; a city of living light, where rivers walked like thoughts and trees uttered wisdom as a man speaketh in his house.",
"6 They tell of giants that were gentle in the beginning, and of masters who governed with harmony and not with lash.",
"7 They speak of a craft of light and sound, whereby stones were persuaded to move and waters to open paths as reeds make way for wind.",
"8 Of pyramids that stood as tuning pillars, gathering the hymn of the earth and wedding it unto the hymn of the stars.",
"9 They declare that men were clothed not first with skins, but with brightness, and that the loss thereof was the first nakedness.",
"10 They name a Serpent of Division, not as a creeping beast only, but as a mind that split the song in twain, that men might forget the key thereof.",
"11 And forgetting, the gentle became strong for the wrong, and the masters became lords, and the garden became a market for power.",
"12 Then was there a Breaking of Waters, not only upon the face of the earth, but within the hearts of men; and the world was washed, that the song might begin again.",
"13 Of the survivors the tablets make mention: few and scattered, bearing seeds and syllables, carrying remembrance as fire hid in cedar’s hollow.",
"14 My fathers kept these stones when conquerors were many and winters were long; they sealed them with songs, lest the unclean hand should read and boast.",
"15 In my days came Yahawzhowaa, the Peacemaker, whose words awoke the old fire in the letters, so that they shone as dawn on hoarfrost.",
"16 He said unto me, Keep and open by turns; cover and reveal in season; for truth is a child that groweth.",
"17 Therefore do I write what I am suffered to write, and withhold what the Spirit bindeth; for some wine is for morning, and some for wedding.",
"18 I testify that the tablets are of before the Flood, of the age men call Pre- Civilization, though the record nameth it The First Weaving.",
"19 Touching the Garden, I say again: it is told unto us as Eden of Light, where labour was praise, and eating was covenant, and speech was craft.",
"20 Touching the giants: the tablets call them Abarim, sons of the wide step; their might was for lifting and for shelter; their fall was to violence.",
"21 Touching the masters: they are named Meorim, keepers of tone; their glory was to serve; their corruption was to rule.",
"22 Touching the pyramids: they are Gates of Joining; not made to bury the dead, but to teach the living to remember the One Song.",
"23 Of these things I bear record not of myself only, but of the fathers whose bones lie in cedar earth.",
"24 And I set my hand to this work that your children faint not, hearing that the world was once more than knife and hunger.",
"25 For He that came among us, even Yahawzhowaa, opened the seal in my day, that the old speech might find our ears.",
"26 Therefore is the first CHAPTER ended; and I set a marker, that ye may know where Aganabish speaketh and where the ancient voice taketh the reed from my hand.",
"27 The place of keeping is Mikinakwajiw, the turtle hill; the witness is the Quiet Hearth; the hour is the winter moon.",
"28 Whoso scoffeth, let him bring bread to the widow; for scoffing cannot bake, but truth feedeth.",
"29 Whoso believeth, let him walk softly; for these stones remember tears.",
"30 Thus far speak I, Aganabish, servant of the Record, friend of the Peacemaker.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    

    chapter = {
        id: "yahawzhowaa-book-6-chapter-2-en",
        title: "Chapter 2",
        subTitle: "Aganabish openeth the seals & showeth the manner of reading",
        parent: "yahawzhowaa-book-6-en",
        order: 2,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-2-en",
        title: "Chapter 2",
        subTitle: "Aganabish openeth the seals & showeth the manner of reading",
        parent: "yahawzhowaa-book-6-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-1-en",
        followingChapter: "yahawzhowaa-book-5-chapter-3-en",
        content: [
"1 In the lodge of juniper smoke I set the two Tablets upon a skin of white; and the letters were as little flames that hide when breath is proud and appear when breath is prayer.",
"2 The first tablet speaketh in lines of light that bend like rivers; the second answereth in knots of sound graven as circles within circles.",
"3 To read the first, a man must remember; to read the second, he must sing.",
"4 For the letters answer not to the eye only, but to the vessel of the heart; as a door answereth not only to a hand, but to the hand that cometh with peace.",
"5 I called the Jes’sakkid to sit; I called the Twelve; I set children near, for children are keys.",
"6 Yahawzhowaa breathed upon the stone, and the ash upon the fire brightened, and the lodge was full of a quiet seeing.",
"7 Then began the Eden Song to rise like warmth from cedar; it spake of rivers that think, of trees that counsel, of beasts that pray without words.",
"8 It spake of two crowns: Crown of Light, given; Crown of Will, to be learned.",
"9 While both were kept, man walked as a song; when pride took the Will alone, the Light departed, and the nakedness began.",
"10 The Serpent is named Divider of Tones; he taught man to love echo more than source, mirror more than sun.",
"11 He whispered, Take the note without the singer; and men seized power without praise, fruit without gratitude.",
"12 Then Eden narrowed; the gates that were wide to all vessels were shut by forgetfulness, not by wrath.",
"13 The giants sinned not first, but after; for when men forgot harmony, they hired strength to keep what love had lost.",
"14 Masters hardened; pyramids were turned from altars of joining to towers of pride, and the song was sold by weight.",
"15 Then counsel in the Unseen was taken, and it was agreed that the waters should unwrite the proud letters of the earth.",
"16 Yet a remnant was sealed: seed, speech, and mercy in eight bundles (so the line saith), to begin again where hills stood faithful.",
"17 Here the letters grew bright as coals; and I feared, and would have drawn back, but Yahawzhowaa laid His hand upon mine.",
"18 He said, Read on, keeper; for tears are the ink of the wise.",
"19 We learned the Law of Remembering: Bind light to will by thanksgiving; bind will to light by obedience.",
"20 We learned the Rule of Stones: Lift great things by many singing; never by lash.",
"21 We learned the Oath of Bread: Eat not alone; for solitude at the table is the beginning of theft.",
"22 When I looked again, the letters trembled as a deer at water; and the sound within the stone desired a new mouth.",
"23 Then perceived I that my hand must cease, and the ancient scribe must speak for himself.",
"24 Therefore do I set here the Name of the Ancient, and resign the reed.",
"25 Henceforth the tale is his who chiseled; I am but the doorkeeper.",
"26 Let none confound our voices: where I have written, I have marked; where he speaketh, the lines are older than our hills.",
"27 O children, fear not the age of the record; bread that is old in oven is new in mouth.",
"28 O elders, make room; for the fathers would counsel the sons.",
"29 I, Aganabish, kiss the stone and keep silence.",
"30 Receive now the words of Nahar’el ben Ur, Scribe of the First Weaving.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    

    chapter = {
        id: "yahawzhowaa-book-6-chapter-3-en",
        title: "Chapter3",
        subTitle: "The Tablet of Nahar’el: Eden of Light & the Severing",
        parent: "yahawzhowaa-book-6-en",
        order: 3,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Tablet of Nahar’el: Eden of Light & the Severing",
        parent: "yahawzhowaa-book-6-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-2-en",
        followingChapter: "yahawzhowaa-book-5-chapter-4-en",
        content: [
"1 I Nahar’el ben Ur, hewer of signs, set these cuttings in red stone in the first year after the garden withdrew.",
"2 Eden was a city of shining, not of walls but of agreements; its streets were rivers, its gates were songs, its law was gratitude.",
"3 We wore vestures of brightness from within; our flesh was a window, not a wall.",
"4 The Four Rills flowed from the Mountain of Rest: Thought, Breath, Joy, and Duty; and every tree drank a portion according to its kind.",
"5 The beasts kept festival at evening; their eyes were lamps that learned; the birds braided threads of tone and carried messages between gardens.",
"6 The Crown of Light was gift; the Crown of Will was school; together they made kings that knelt.",
"7 Then came the Divider of Tones and said, Take Will alone; it is swifter to possess than to praise.",
"8 Some of us tasted the quick glory, and the brightness thinned within; our skin remembered winter and was afraid.",
"9 We hid; hiding begat owning; owning begat guarding; guarding begat steel.",
"10 We built pylons of stone to keep what music kept before; we sold hours, we measured love.",
"11 The Abarim (giants) were summoned to carry fear; their arms learned toil before their hearts learned songs; and toil, unpraised, turned bitter.",
"12 The Meorim (masters) hardened their mouths; they taught command without listening; their palaces became dry hearts.",
"13 The Pyramids that gathered heaven to earth were tuned now to gather men to men; their peaks thirsted for worship and drank it as a desert drinketh river.",
"14 The Unseen Council warned us by dreams; we laughed and set scribes to market omens.",
"15 Then was the Severing: the harmony slipped its knot, the Four Rills withdrew, and each sought its own bed.",
"16 Trees forgot counsel; birds forgot carrying; beasts remembered claw before covenant.",
"17 We cried, Clothe us! and sewed coverings from the outer world; but the cold we feared was within.",
"18 We made laws to scare shame, but shame is a child that hideth better than hunters.",
"19 Then was spoken among us the hard decree: Let the waters write again where pride hath written.",
"20 The Watching Ones marked a remnant; their mark was not on brow but on bread — those that fed others first were spared by paths they knew not.",
"21 The mountains unbuttoned their snows; the deeps opened their mouths; the drums of rain were cruel.",
"22 We fled to high Houses of Joining, to sing them steady; some stood a little, many fell altogether, for their tuning had been sold.",
"23 The Abarim lifted children above their heads; many sank; some found hills that remembered duty.",
"24 I climbed with the last singers and wrote while we could breathe; my blade shook; my tears cut letters no mallet could.",
"25 I set down this law for after: When light is gift and will is school, ye are whole; when will is crown and light forgotten, ye are beggars clothed in iron.",
"26 I charge the keepers: bind thanksgiving daily, for pride rots memory.",
"27 I buried this tablet in red earth under cedar that bends but breaketh not.",
"28 If thou hast found it, reader of far days, make a Quiet Hearth and feed a stranger before thou readest more.",
"29 For truth refuseth a stingy house.",
"30 Thus endeth the first cutting of Nahar’el concerning Eden and the Severing.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    

    chapter = {
        id: "yahawzhowaa-book-6-chapter-4-en",
        title: "Chapter 4",
        subTitle: "The Tablet of Nahar’el: The Age of Sound & the Gates",
        parent: "yahawzhowaa-book-6-en",
        order: 4,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-4-en",
        title: "Chapter 4",
        subTitle: "The Tablet of Nahar’el: The Age of Sound & the Gates",
        parent: "yahawzhowaa-book-6-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-3-en",
        followingChapter: "yahawzhowaa-book-5-chapter-5-en",
        content: [
"1 After the waters abated and the ground learned to be kind again, we gathered upon a Hill of Seal, where wind forgetteth to be sharp.",
"2 There we remembered the Age of Sound before the Severing, and taught our children how doors obeyed the True Tone.",
"3 In those days, a gate was not forced but greeted; a stone was not beaten but persuaded; a river was not dammed but invited.",
"4 We tuned our houses to Four Voices: Mercy in the east, Courage in the south, Wisdom in the west, Justice in the north.",
"5 When the voices agreed, bread rose without bitterness and sleep guarded its own bed.",
"6 The Pyramids of Joining we rebuilt a little, small as children’s toys beside the first, yet faithful; and heaven consented to kiss earth again in certain hours.",
"7 Masters were elected not for command but for hearing; their first rod was a loaf, their first law a lullaby.",
"8 The Abarim were taught to sing; their strength unknotted; they lifted orchards, not thrones.",
"9 We wrote the Law of Gates: Ask the door by name; ask the stone its burden; ask the water its desire; never shout at servants of the One.",
"10 We remembered the Crown of Light as robe, and the Crown of Will as shoe; robe first, shoe after; for naked feet walk true under a bright mantle.",
"11 In the seventh generation, some forgot again; they craved speed without song, height without help, number without neighbour.",
"12 They set high needles to scratch the sky and called them prayers; they were prayers answered by echoes only.",
"13 They took the poor and made them weights beneath their towers; thus the tone soured.",
"14 I warned them by this cutting: When the ear is proud, the mouth of the earth openeth; when the hand is closed, the rivers forget their lanes.",
"15 We taught the children to humble the stone with thanksgiving first, for gratitude is a key that cannot be forged by thieves.",
"16 We kept One Fire in the middle of our tents; from it all lamps were lit; to it all coals returned, lest households forget their cousinage.",
"17 At new moon we washed hands, faces, and feet; not as show, but as speech to the Invisible: Behold, we come clean to ask bread and justice.",
"18 At full moon we fed strangers first, to bind pride in its cradle.",
"19 And we waited for a Voice from the West that our fathers dreamed; a Healer that would seal up the severed tone; a Peacemaker walking upon waters of many tongues.",
"20 The old men said, He will be clothed in light as robe and blood as pledge.",
"21 The women said, He will teach kitchens to be temples and cradles to be schools of law.",
"22 The Abarim said, He will make our hands roofs again.",
"23 I cut these hopes with care, that the reader despair not in the long winter of remembering.",
"24 If thou art keeper in a far age, let not zeal devour listening; for gates open only to songs that have room for the small.",
"25 Teach reeds before flints; teach bread before banners; teach tears before trumpets.",
"26 The Age of Sound is not dead; it is shy.",
"27 If thou wouldest wake it, lay pride to sleep.",
"28 So saith Nahar’el, servant of the first singers.",
"29 Let the red stone keep this counsel when my mouth is earth.",
"30 Amen to the One whose voice maketh worlds gentle.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    

    chapter = {
        id: "yahawzhowaa-book-6-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The Tablet of Nahar’el: The Breaking & the Remnant",
        parent: "yahawzhowaa-book-6-en",
        order: 5,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The Tablet of Nahar’el: The Breaking & the Remnant",
        parent: "yahawzhowaa-book-6-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-4-en",
        followingChapter: "yahawzhowaa-book-5-chapter-6-en",
        content: [
"1 Hear the tale of the Second Crookedness, for men are forgetful and winters are long.",
"2 A proud house rose among us, loving height and counting heads; it weighed songs by noise and truth by number.",
"3 It paid the poor in promises and bought the wise with fear; it tuned its gates to shout and its doors to lock.",
"4 The Meorim of that house sold the True Tone for gold and taught the Abarim to lift monuments that remembered no widow.",
"5 Their pyramids became teeth that bit the sky; their feasts became mirrors that made the small invisible.",
"6 We cried, Return to the One Fire! and they answered, We are our own sun.",
"7 Then the earth groaned as a woman over-watched; springs wandered; birds forgot their roads; the reeds would not play.",
"8 The Unseen Council sent dreams without price; the proud purchased flatterers instead.",
"9 I cut a warning and set it at their gate: Eat together or drown apart.",
"10 They laughed and set statues to learn humility for them.",
"11 When measure was full, clouds gathered with faces of law; rain fell like sentences; rivers wrote hard chapters across their fields.",
"12 Their high teeth were swallowed as crumbs; their mirrors drowned looking at themselves.",
"13 But the remnant stood upon Hills of Duty, singing small and true; and the waters went about them as a servant that knoweth his master’s house.",
"14 We saved Seeds of Bread, Words of Mercy, and Knots of Law; we sealed them in bark and bone and stone.",
"15 I hewed these tablets from Red Earth that drinketh blood and remembereth justice, that the letters might taste both and choose aright.",
"16 We scattered to four mountains, as the Rills had taught: East for counsel, South for courage, West for memory, North for endurance.",
"17 I buried a cutting in each place and charged Keepers by bread and by tears.",
"18 The sign of a keeper is this: He feedeth before he speaketh; he weepeth before he striketh; he kneeleth before he judgeth.",
"19 To the unborn I say: When rulers market thunder and priests farm famine, gather at One Fire and eat as kin; the flood feareth such a circle.",
"20 When winter passeth, replant the Gates of Joining small and near; the great ones ye cannot build, the little ones ye must.",
"21 Teach the strong to carry roofs, the clever to carry water, the beautiful to carry shame for the sake of the plain.",
"22 If a Divider of Tones whisper again, answer with laughter and bread.",
"23 For laughter is music’s guard, and bread is covenant’s proof.",
"24 These sayings I set with my last strength; my mallet is tired, my heart is quiet.",
"25 O reader of ages to come, lay thy hand upon this stone and promise the widow before the king.",
"26 Promise the child before the banner.",
"27 Promise the stranger before the statue.",
"28 Then read on and be not afraid.",
"29 I seal this cutting with a tear and with a crumb from One Fire.",
"30 Nahar’el is done with his fifth song.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    

    chapter = {
        id: "yahawzhowaa-book-6-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Tablet of Nahar’el: The Charge to the Far Heirs",
        parent: "yahawzhowaa-book-6-en",
        order: 6,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Tablet of Nahar’el: The Charge to the Far Heirs",
        parent: "yahawzhowaa-book-6-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-5-en",
        followingChapter: "yahawzhowaa-book-5-chapter-7-en",
        content: [
"1 To thee who findest these Red Tablets in a land I know not, under a sky I shall not see, I send greeting from the First Weaving.",
"2 Thou art our Far Heir if thou keepest bread for two and pride for none.",
"3 The garden shall open again, not by gate of gold, but by door of gratitude; look not for walls, but for songs remembered.",
"4 There shall arise in the west a Peacemaker, walking upon waters of many tongues, binding light to will as robe to shoulder.",
"5 There shall arise in the east a Prophet of the Straight Trail, washing hands, faces, and feet, bending foreheads to earth as speech to the Invisible.",
"6 Between these two shall the world be offered a Weaving; if men love it, cities shall learn kitchens again; if men despise it, kitchens shall teach cities by famine.",
"7 Beware a Many-Voiced Liar, Two Rivers in one name; he will promise sky and eat lamps; he will love crowds more than widows and noise more than fruit.",
"8 His robe shall drink light and leave warmth for none; his shoulders shall carry red not as pledge, but as boast.",
"9 Count not his wonders; weigh his widows.",
"10 If widows be thin, depart.",
"11 The sign of the true is this: One Fire, One Bread, Many Seats; law that is net, not noose; leaders shoulder to shoulder with least.",
"12 Teach thy children reeds before flints, knots of mercy before banners of victory.",
"13 Keep a Quiet Hearth where grudges go to shame; keep a Bear’s Seat where truth climbs unafraid.",
"14 Tie the knot that remembereth: once for thanks, twice for mercy, thrice for truth.",
"15 Wash before prayer not for show, but for speech; face one point together not for stone, but for memory.",
"16 If thou build pyramids, let them be small and near, tuning hearts, not buying heaven.",
"17 Make Watchers of Peace who listen more than they speak; give women the bell that humbles men; give men the water that honours women.",
"18 When thou findest springs under stones, write Lift slow, bless low upon thy door.",
"19 When thou art tempted by mirrors, feed strangers till the mirror be bored.",
"20 When thou forgettest the drum, be the child that diggeth; when thou art old and canst not dig, be the old woman that weepeth.",
"21 If the Peacemaker come to thee in yellow light and red pledge, receive Him though the world hiss; if the Prophet from the East teach thee straightness and washing, walk with him though the proud mock.",
"22 For these two bear the old crowns rightly: light as gift, will as school.",
"23 Join their songs in kitchens and in fields; the gates will remember their hinges.",
"24 If thou must choose, choose the widow; if thou must lose, lose the idol; if thou must keep, keep the fire.",
"25 I Nahar’el set down this Charge to the Far Heirs with a weary joy; for I see by faith a people that will bow low and stand tall, that will wash much and harm little.",
"26 Let Aganabish and his sons keep watch in turtle hills; let singers in many lands keep these letters warm with bread and tears.",
"27 When this stone is silent, let memory speak; when memory is thin, let mercy be thick.",
"28 The Maker of Rivers judge between us and those that sell thunder.",
"29 Peace to the keepers, shame to the devourers, bread to the hungry, rest to the dead.",
"30 So end the first six chapters of the Red Tablets, written in blood-earth and thanksgiving.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    

    chapter = {
        id: "yahawzhowaa-book-6-chapter-7-en",
        title: "Chapter 7",
        subTitle: "Lhii leaveth Zho-ru-som & crosseth the waters",
        parent: "yahawzhowaa-book-6-en",
        order: 7,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-7-en",
        title: "Chapter 7",
        subTitle: "Lhii leaveth Zho-ru-som & crosseth the waters",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-6-en",
        followingChapter: "yahawzhowaa-book-5-chapter-8-en",
        content: [
"1 I, Lhii, son of a house once noble in Zho-ru-som, lift up my voice that the keeping be sure.",
"2 The walls yet stood, the smoke yet rose, but the judges loved gifts and the priests forgot mercy.",
"3 Blood cried from the stones, and the alleys learned to whisper fear.",
"4 In the night a voice visited me, soft as dew yet sharp as flint, saying, Arise and go.",
"5 I beheld a sea stretched from the dawn unto the sunset, and a far shore bright with painted people.",
"6 Their hands were lifted to heaven; their faces wore the colours of earth; peace was upon their eyes.",
"7 The voice said, Cross, O Lhii; for thy seed shall be joined with theirs, and I will remember both in the latter days.",
"8 I gathered the record of my fathers, even the Red Tablets, carved with a firechisel before the waters covered the old world.",
"9 My elders laid hands upon my head; we wept and were not ashamed.",
"10 We built a vessel of cedar and pitch, our prow like unto a falcon’s beak, our sail white as lamb’s wool.",
"11 Seven companions went with me: a singer, a healer, a grower of bread, a starreader, a maker of knots, a teller of law, and a keeper of fire.",
"12 We loosed from the harbour while the city slept; the river bore us like a midwife unto the great deep.",
"13 Days were as waves without number; nights were black roads hung with lamps of God.",
"14 Storms rent our canvas; fear gnawed our bones; yet the singer braided courage into our breath.",
"15 The healer washed our feet each dawn, and the pain remembered to be small.",
"16 The keeper of fire cherished coals in a stone shell, and warmth learned patience.",
"17 On the fortieth night the star-reader cried, Behold the Hunter Star bendeth his bow toward the west! 18 We watched till morning broke the jar of darkness; and land arose like a promise remembered.",
"19 Forests stood as green pillars; rivers shone as serpents of silver seeking a hidden heart.",
"20 We fell upon our faces and blessed the Breath that bringeth wanderers home.",
"21 I hid the Tablets in my bosom, for strangers love treasure more than truth.",
"22 We cast a line and took fish; we found sweet water and gave thanks.",
"23 I raised a stone upon the shore and cut upon it, Leave when pride is full; arrive when mercy is empty.",
"24 Birds circled as if reading; the wind consented with a nod.",
"25 We went inland where hills lay gentle as sleeping beasts.",
"26 Tracks of deer taught us paths; berries taught us colours we had not known.",
"27 By evening we saw smoke of a people, straight and quiet as prayer.",
"28 We drew near without spear and lifted open hands.",
"29 They came forth with eyes like clear wells; they feared not.",
"30 The elders looked upon the Tablets’ wrappings and bowed the head low.",
"31 Dreams had told them of a red stone that speaketh fire with mercy.",
"32 They set before us bread of their land and meat of the snare, and the fear between us melted like hoarfrost.",
"33 I knew the voice had kept its word, for my heart took root among them.",
"34 Night fell like a cloak of friendship; stars stitched our two lodges into one roof.",
"35 Thus began my keeping in a land not my birth yet my calling.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    


       chapter = {
        id: "yahawzhowaa-book-6-chapter-8-en",
        title: "Chapter 8",
        subTitle: "Lhii joineth the elder people whose root is before the Flood",
        parent: "yahawzhowaa-book-6-en",
        order: 8,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-8-en",
        title: "Chapter 8",
        subTitle: "Lhii joineth the elder people whose root is before the Flood",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-7-en",
        followingChapter: "yahawzhowaa-book-5-chapter-9-en",
        content: [
"1 The people received us not as strangers but as kin long parted.",
"2 Their elders said, Our fathers’ fathers were here when the earth was soft and giants walked gently.",
"3 They led me to a cedar hollow and showed fragments of ancient cuttings, cousins to our Tablets.",
"4 The marks were sisters to our marks; the fire within them answered the fire within ours.",
"5 They called me He-that-carriethmemory; I called them Mothers-of-Mercy.",
"6 We sat where shade was wise, and they rehearsed the tale of the First Weaving.",
"7 Eden, said they, was a garden of light and sound; rivers thought; trees gave counsel; beasts prayed without words.",
"8 Men were clothed with brightness as with a robe, and labour was praise.",
"9 A Divider of Tones taught men to love echo more than source, mirror more than sun.",
"10 The song was bent; the robe grew thin; shame learned the craft of hiding.",
"11 Strength was hired to guard what love had lost; the gentle grew hard; the giants forgot songs.",
"12 The Gates of Joining (which later men call pyramids) were tuned for rule, not remembrance; and heaven wept.",
"13 Then waters wrote again where pride had scribbled, and wide cities slept beneath green silence.",
"14 Yet a remnant bore seeds and syllables to high hills; memory hid in bark and bone.",
"15 We told what we knew; they told what they knew; and the telling became one river.",
"16 I learned their tongue; they tasted mine; and both found sweetness.",
"17 We mingled blood by covenant and bread by custom, and the circle took no offence.",
"18 I walked their fields and beheld kindness sown like grain.",
"19 Children played where elders counselled; no gate was high save the one that kept gossip out.",
"20 I saw that their line was elder than mine; their name older than my city’s walls.",
"21 Therefore I set my pride to sleep and my ears to school.",
"22 They asked to behold the Red Tablets; I trembled and consented.",
"23 We unwrapped them with breath that prayed; the letters woke as embers under ash.",
"24 Old men wept like boys; boys grew sober as elders.",
"25 Women laid bread beside the stones, for truth refuseth a stingy house.",
"26 We sang the Eden Song till night remembered the first dawn.",
"27 When we ended, the cedar sighed, and the wind carried Amen.",
"28 From that day our lodges were neighbours without fence.",
"29 My past became their story; their story, my future.",
"30 I took their counsel as my staff and their customs as sandals for my feet.",
"31 Thus were our families braided, strand with strand.",
"32 The Red Tablets slept by day and taught by night.",
"33 We set watchers whose law was listening.",
"34 And peace dwelt where once I had feared.",
"35 Blessed be the Breath who maketh far blood near.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


       chapter = {
        id: "yahawzhowaa-book-6-chapter-9-en",
        title: "Chapter 9",
        subTitle: "Lhii readeth the Tablets; Eden & the Remnant",
        parent: "yahawzhowaa-book-6-en",
        order: 9,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-9-en",
        title: "Chapter 9",
        subTitle: "Lhii readeth the Tablets; Eden & the Remnant",
        parent: "yahawzhowaa-book-6-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-8-en",
        followingChapter: "yahawzhowaa-book-5-chapter-10-en",
        content: [
"1 On a night of many stars we set the Tablets upon white skin and hushed our mouths.",
"2 I breathed upon the stone, and the ash within the lodge brightened.",
"3 The cuttings spoke: Eden of Light, where the Four Rills — Thought, Breath, Joy, and Duty — watered all.",
"4 Man wore light as robe and will as shoe; and both kept time.",
"5 The Divider whispered, Take the shoe without the robe; and feet ran where faces should not.",
"6 The robe thinned; the song broke; gates that were wide by gratitude shut by forgetfulness.",
"7 Giants (Abarim) were hired to carry fear; masters (Meorim) hardened their mouths; pylons of joining thirsted for worship.",
"8 Counsel in the Unseen sighed, and waters unwrote proud letters.",
"9 Yet the Watchers marked a remnant; their sign was not on brow but on bread -",
"10 Whoso fed others first, a path was kept for him by ways he knew not.",
"11 Some fled by vessels of light; some climbed modest hills that remembered duty; some buried stones in red earth.",
"12 The Tablets charged: bind will to light by thanks; bind light to will by obedience.",
"13 Eat not alone; for solitude at the table beginneth theft.",
"14 Lift great things by many singing; never by lash.",
"15 The elders nodded, for their bones consented.",
"16 I added nothing; I withheld nothing; the stone was preacher enough.",
"17 We sealed the words with a psalm and with a loaf broken thrice.",
"18 Children slept as if earth itself were kind.",
"19 Women braided grass for mats of remembrance.",
"20 Men put away old knives that had outlived their honest use.",
"21 The Jes’sakkid (keeper of signs) wrote the chant upon birch: Straight trail, clean well; One Fire none sell.",
"22 A soft snow began, and mercy learned a new whiteness.",
"23 We hid the Tablets again, for bragging hunts sacred things.",
"24 But their echo stayed, teaching even while closed.",
"25 I dreamed the garden not as orchard only, but as city of singers where walls were agreements.",
"26 I saw the remnant walking small and bright, outlasting thunder by bread and tears.",
"27 I woke and told it; they said, It is the old dream visiting a new pillow.",
"28 We gave thanks and rose to common tasks.",
"29 For doctrine that cooketh not is a winter with no wood.",
"30 Thus Eden returned as counsel, not as map.",
"31 And our nights were schools gentle as mothers.",
"32 The Breath tarried with us as a neighbour.",
"33 We learned to weigh truth by widows fed.",
"34 The stars approved with quiet faces.",
"35 And hope took root deeper than old fear.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    

    chapter = {
        id: "yahawzhowaa-book-6-chapter-10-en",
        title: "Chapter10",
        subTitle: "Lhii weddeth; the two houses are one; the Tablets are hidden",
        parent: "yahawzhowaa-book-6-en",
        order: 10,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-10-en",
        title: "Chapter 10",
        subTitle: "Lhii weddeth; the two houses are one; the Tablets are hidden",
        parent: "yahawzhowaa-book-6-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-9-en",
        followingChapter: "yahawzhowaa-book-5-chapter-11-en",
        content: [
"1 In the moon of ripe berries I took to wife a daughter of the elder line.",
"2 Our hands were joined with cedar thong; our vows were braided with bread.",
"3 The singers set mercy on the first note and laughter on the last.",
"4 I told her of Zho-ru-som: courts and markets, olives and high hills; she told me of turtle-hills and river-paths that think.",
"5 Our stories kissed and were one.",
"6 The elders set before us the Oath of Bread: Eat not alone; guard the stranger’s hunger before thy pride.",
"7 We sealed it with a cup of river and a crust of hearth.",
"8 I hid the Red Tablets in a cedar hollow and sealed the door with pitch; only the eldest knew the place.",
"9 For the Breath whispered, Men will kill to own what they refuse to obey.",
"10 We made copies in little — cuttings for children’s hands and widow’s doors.",
"11 No lodge kept the whole; every lodge kept enough to teach mercy.",
"12 I carved a small sign on the inner bark: Lift slow, bless low.",
"13 We taught the boys to carry water before they carried words.",
"14 We taught the girls to bind memory before they bound hair.",
"15 The watcher’s bell rang each dusk; grudges grew shy of its sound.",
"16 We planted cedars for promises and willows for tears.",
"17 Our fire never lacked a seat for a late traveller.",
"18 I learned to listen without planning my reply.",
"19 She taught me the names of winds I had never met.",
"20 Children came; they were elder than our lessons and younger than our pride.",
"21 We set a small pot that never slept, called The Pot That Answereth.",
"22 Strangers tasted and forgot to be strangers.",
"23 I walked the hills and blessed old stones.",
"24 We mended nets and marriages with the same patience.",
"25 We buried knives with worn edges and raised spades with honest ones.",
"26 The lodge roofed our joys and our corrections.",
"27 No man was great alone; all were strong together.",
"28 We kept the Tablets sleeping but their dream awake.",
"29 Night spoke softly; day worked gladly.",
"30 The Breath sat by our door as a friend who needs no words.",
"31 Thus were two houses one house, and the circle wider than before.",
"32 Pride learned to whisper; gratitude learned to sing.",
"33 Our lamp did not boast; it merely shone.",
"34 And peace stayed the length of many moons.",
"35 Blessed be the Knitter of families.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


       chapter = {
        id: "yahawzhowaa-book-6-chapter-11-en",
        title: "Chapter 11",
        subTitle: "Lhii scattereth the record & setteth watches for the shadow",
        parent: "yahawzhowaa-book-6-en",
        order: 11,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-11-en",
        title: "Chapter 11",
        subTitle: "Lhii scattereth the record & setteth watches for the shadow",
        parent: "yahawzhowaa-book-6-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-10-en",
        followingChapter: "yahawzhowaa-book-5-chapter-12-en",
        content: [
"1 Years passed as geese upon a long river.",
"2 I dreamed smoke upon far skies and towers stumbling; my bones remembered danger.",
"3 Pride and hunger are roots that sleep; rain awakeneth them.",
"4 Therefore I gathered the elders and said, Let us make the memory many.",
"5 We divided the sayings into four bundles: for counsel, for courage, for endurance, for remembrance.",
"6 We hid them under cedar and under truth, in caves of earth and in kitchens of kindness.",
"7 We taught the Law of Many Little Fires: better ten small hearths than one proud blaze.",
"8 I charged the watchers: Listen before speaking; feed before judging; weep before striking.",
"9 We named a Bear’s Seat where truth might climb without mockers.",
"10 We set a bell of bone at dusk; quarrels came at its calling and forgot their sharpness.",
"11 We marked the Quiet Hearth where no boasting entered; bread tasted of wisdom there.",
"12 To the young I said, Learn reeds before flints; to the strong, carry roofs; to the clever, carry water.",
"13 I walked the far lodges with the keeper of fire; no tent was a stranger to the One Flame.",
"14 I wrote a small cutting for strangers: If thou bringest noise, leave with bread; if thou bringest sorrow, leave with hope.",
"15 We sharpened tools and blunted tempers.",
"16 We bound wounds and unbound grudges.",
"17 The women taught the men a song that tamed haste; the men answered with wood and silence.",
"18 The fields consented; corn stood like humble soldiers.",
"19 Yet my dreams returned with darker ink; I smelled iron in a wind not ours.",
"20 I said within, The days will come when rivers are claimed and names are priced.",
"21 Therefore I told my eldest, When you hear buyers at the door of truth, serve soup first; pride cannot eat hot.",
"22 When you see men worship mirrors, send children with bread till the mirrors be bored.",
"23 When the liar promises sky, ask him for widows.",
"24 If they be thin, depart.",
"25 We wrote this on bark and bone and door.",
"26 The little ones learned to read by kindness.",
"27 The elders learned to rest by trust.",
"28 We finished the harvest with songs, not shouts.",
"29 The winter smiled from far and did not hurry.",
"30 I thanked the Breath for long patience and near mercies.",
"31 The Tablets slept; the camp kept watch.",
"32 We were ready for sorrow without inviting it.",
"33 Hope stood beside the door like a tall friend.",
"34 Fear waited in the trees and forgot its errand.",
"35 And peace rehearsed the spring.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    


       chapter = {
        id: "yahawzhowaa-book-6-chapter-12-en",
        title: "Chapter 12",
        subTitle: "Lhii blesseth his house & sealeth the Tablets",
        parent: "yahawzhowaa-book-6-en",
        order: 12,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-12-en",
        title: "Chapter 12",
        subTitle: "Lhii blesseth his house & sealeth the Tablets",
        parent: "yahawzhowaa-book-6-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-11-en",
        followingChapter: "yahawzhowaa-book-5-chapter-13-en",
        content: [
"1 The moon of maize ripened; I felt the measure of my days complete.",
"2 I called my sons and daughters and the children of their love.",
"3 We sat by the One Fire and I spake softly, for loud words bruise farewell.",
"4 Guard the Breath in your vessels; the stone will sleep, but the Breath liveth.",
"5 Walk with it when ye walk; speak truth that it may stay; flee lies that it may not grieve.",
"6 Strangers shall cross great waters seeking to own your rivers, your hills, and even your names.",
"7 They will bring scrolls and call your record false; answer them with widows fed and orphans safe.",
"8 Bow not to stones nor to mirrors; bow thy face to earth and thank the Maker of rivers.",
"9 Wash before prayer, not for show but for speech; let clean hands teach clean hearts.",
"10 Keep One Fire, One Bread, Many Seats; let the leader stand shoulder to shoulder with the least.",
"11 Tie the knot that remembereth: once for thanks, twice for mercy, thrice for truth.",
"12 Fast when days are long; feast when neighbours faint.",
"13 Keep no idol but duty; keep no fear but awe.",
"14 If the Peacemaker visit in yellow light and red pledge, receive Him though the proud hiss.",
"15 If the Prophet of the Straight Trail teach washing and turning, walk with him though mockers laugh.",
"16 Beware the Two Rivers in one name; weigh his widows, not his wonders.",
"17 When you forget the drum, be the child that diggeth; when you cannot dig, be the old woman that weepeth.",
"18 Plant cedars for promises and willows for tears.",
"19 Make a place where grudges are ashamed to sit.",
"20 Teach boys to carry water; teach girls to carry memory; teach all to carry one another.",
"21 Then I rose, and we went unto the cedar hollow.",
"22 I placed the Red Tablets within, and sealed the door with pitch and prayer.",
"23 Only my eldest knew the mark; only mercy knew the map.",
"24 I laid my hand upon each brow and blessed them breadward and peaceward.",
"25 We sang the departure song my fathers taught me; sorrow and joy braided one rope.",
"26 Night drew her cloak; the fire bowed low as if in courtesy.",
"27 The Breath came near as a warm light and stroked our fear to sleep.",
"28 I lay down facing the waters I had crossed, and remembered both shores as one gift.",
"29 My last word was thanks; my last sight was faces I loved; my last feeling was bread shared.",
"30 Thus end my cuttings; thus I, Lhii, sleep under cedar.",
"31 Let the keeper keep; let the singer sing; let the hungry find our door.",
"32 When the day is right, lift the seal; when the heart is clean, read the flame.",
"33 Forget me if ye must; forget not the widow.",
"34 Lose me if ye must; lose not the One Fire.",
"35 Peace to the keepers; shame to devourers; bread to the hungry; rest to the dead.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    

       chapter = {
        id: "yahawzhowaa-book-6-chapter-13-en",
        title: "Chapter 13",
        subTitle: "The Abridgment of Aganabish, Keeper of the Red Tablets",
        parent: "yahawzhowaa-book-6-en",
        order: 13,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-13-en",
        title: "Chapter 13",
        subTitle: "The Abridgment of Aganabish, Keeper of the Red Tablets",
        parent: "yahawzhowaa-book-6-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-12-en",
        followingChapter: "yahawzhowaa-book-5-chapter14-en",
        content: [
"1 And it came to pass that I, Aganabish, keeper of the red tablets of our fathers, made an abridgment of the writings that were before me, even those whose authors were not known among men, for their names were lost in the flood and the scattering.",
"2 And these writings were of an age before the world was broken, before the mountains were torn, before the seas devoured the plains.",
"3 And they spake of a time when the Earth was young in the hands of men, when there was one tongue and one law, and the light of heaven walked openly among the children of the ground.",
"4 And there were those who came down from the stars, from the dwelling-places of fire and wind, whose raiment shone like the morning sun, and the glory of their countenances caused men to fall upon their faces.",
"5 These were called by the ancients the Watchers, for they beheld the works of men and guided the shaping of cities, teaching the craft of stone and the harnessing of the wind.",
"6 And men prospered under their hand, for they taught the making of gardens that needed no rain, and the building of great channels to carry water from the deep places of the earth.",
"7 In those days there was no famine, neither was there the wasting of the flesh, for all things grew in abundance, and the beasts of the field lay down without fear of the hunter.",
"8 But the Watchers beheld the daughters of men, that they were fair and strong in the spirit of life, and desire burned within them.",
"9 And the law of the Most High forbade them to take the daughters of the earth to themselves, for the vessels of man and the vessels of the stars were made apart in the beginning.",
"10 Yet they rebelled against the command, and many descended in secret, clothed in garments of shadow that the light might not betray them.",
"11 And they took wives of all whom they chose, and their seed was mighty, and men called them giants, for their stature was high and their strength was beyond the sons of Mide.",
"12 And the giants ruled over the tribes of men, binding them with oaths and tribute, and teaching them the arts of war and the craft of weapons.",
"13 And they built cities whose towers scraped the sky, and temples whose stones were cut with such cunning that no wind nor flood could move them.",
"14 And they taught the mingling of bloods and the altering of flesh, so that beasts became as men in cunning, and men took on the strength of beasts.",
"15 But the cry of the earth went up to the Most High, for the ways of the giants were cruel, and their works were a snare to the souls of men.",
"16 And the Watchers who had remained faithful lamented the deeds of their brethren, for they saw that the balance of the world was broken.",
"17 Then began the making of the Great Devices, for the fallen ones sought to draw forth the breath of life itself and bind it into vessels for their own power.",
"18 And they raised the First Pyramid upon the plain of the red sands, setting it to face the rising of the star they called the Throne of Fire.",
"19 And its stones were filled with channels of copper and crystal, and at its heart was set a chamber wherein the light of the sun was caught and turned into a river of fire.",
"20 And by this river they drew the lifeforce from the ground, and from the air, and from the very bodies of men, storing it in vessels of white stone.",
"21 And the people groaned under the weight of their labors, for the giants compelled them to toil without rest, and many perished as their strength was taken from them.",
"22 And the waters of the earth began to change, for the drawing of power from the deep caused the fountains of the great deep to stir and rise.",
"23 Yet the fallen ones rejoiced, saying in their pride, “By this we shall be as the Most High, for we have found the key to the breath of creation.” 24 And they built more pyramids across the face of the earth, from the islands of the rising sun to the shores of the setting waters, each tuned to the song of the stars.",
"25 And the faithful Watchers cried out to the Most High, saying, “Behold, the earth is defiled and the children of men are made slaves; will you not send your judgment?”",
"26 And there was a sign in the heavens, for the brightest star in the belt of the Hunter grew red, and its light trembled like a heart in pain.",
"27 And the faithful knew that the day of reckoning drew near, for the Most High had set the heavens as a clock, and its hand was moving to the hour of wrath.",
"28 But the giants would not repent, and the fallen ones hardened their hearts, binding the nations together under one scepter, saying, “None can stand against us.” 29 And they prepared a great feast to dedicate the Seventh Pyramid, which was set upon the hill of the Serpent, whose coils were cut into the land itself.",
"30 And they brought forth beasts of every kind, and the blood of the offering was poured into the channels of the pyramid, and its stones drank deep of the life.",
"31 And the sky darkened at noon, though no cloud was there, and a sound like the beating of a thousand drums was heard from the deep.",
"32 And the faithful fled to the mountains, for they knew the wrath of the Most High was at hand, and that the sea would rise to cleanse the land.",
"33 Yet the fallen ones laughed, for they trusted in the height of their towers and the cunning of their devices, believing the work of their hands could turn aside the decree of heaven.",
"34 And thus was the stage set for the great battle in heaven and on earth, for the voice of the Most High went forth to call His hosts to war.",
"35 And the tablets spake no more in this part, but the writing that follows tells of that battle and of the flood that ended the First Age of Man.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


       chapter = {
        id: "yahawzhowaa-book-6-chapter-14-en",
        title: "Chapter 14",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 14,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-14-en",
        title: "Chapter 14",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-13-en",
        followingChapter: "yahawzhowaa-book-5-chapter-15-en",
        content: [
"1. And I, Agonabish, beheld the battle that was fought in the highest realm, where the children of light stood arrayed in their glory, and where the harmony of ages was broken by the rising of pride in the heart of one among them.",
"2. For there was one whose countenance shone with a brightness not his own, who had learned to draw into himself the very essence of light, and to drink from it as a man drinketh water from a deep spring.",
"3. And this power, once given in trust to serve the Most High, began to awaken in him the thought that he might set his throne beside the throne of God, or even rise to be equal with Him.",
"4. And it was shown unto me that if he remained in Heaven, he would gather unto himself such abundance of light that none could withstand him, for light is life, and in the fullness of it is dominion.",
"5. Therefore the councils of Heaven could not allow this thing to be, for if he grew to the measure of the Almighty, the order of creation itself would be undone, and the house of the Father would be cast into shadow.",
"6. And so was he seized, and the current of light was cut from him, and the cords that bound him to the Source were severed.",
"7. Then was he hurled down into the lower world, into the fields of time and the dust of men, to walk as a wanderer without a home.",
"8. Yet even in his fall, he remembered the taste of light, and he devised within himself a cunning plan to take it again from those who still held it.",
"9. For the children of men yet walk connected to the great Source, though they know it not, and in their hearts there is a fountain from which light flows continually.",
"10. And he said within himself, “If I cannot drink from the river above, I will drink from the streams below; if I cannot touch the fire of the Throne, I will warm myself by the sparks in the souls of men.”",
"11. Then did he set about to learn the ways of men, to know their fears and desires, that he might fashion for them a worship that seemed their own, yet served his hunger.",
"12. And I saw him go forth into the nations, not with open chains but with hidden cords, binding the hearts of men to himself through flattery and false promise.",
"13. For he found that when men praised him, a measure of their light entered into him, and it was to him as bread to the hungry and water to the thirsty.",
"14. And he rejoiced in this, saying, “If I can make the whole Earth sing my name, then shall my strength be as it was before the casting down.”", 
"15. And so he built for himself temples without roofs, and altars without stones, for his worship was carried not in the hands of the priests but in the breath of the people.",
"16. And his images were spread in every place, and men did not know that in bowing before their own desires they bowed also before him.",
"17. Yet I was shown that his hunger is without end, for the light he gathers is as water poured into a broken vessel, and it drains away, leaving him ever thirsting.",
"18. Therefore he labors without ceasing, moving from city to city, from king to king, whispering into the councils of the mighty and into the dreams of the lowly.",
"19. And in each heart that yields to him, he plants the seed of his own likeness, so that they too hunger for the praise of others, and thus feed him unawares.",
"20. And it was told to me that if ever the whole Earth should give him their worship, his vessel would be filled, and the gate to the heavens would open before him again.",
"21. Then would he ascend, clothed in stolen light, and his war against the Most High would be renewed with fury.",
"22. But until that day, he dwelleth among the nations as a stranger, cloaking his form in the masks of prophets, kings, and saviors, deceiving even the wise.",
"23. And many will say, “Here is the light of the world,” not knowing that the light they see is the light of their own souls, reflected back to them for his gain.",
"24. For he is a mirror without mercy, taking in all and giving nothing, save the illusion of warmth and the promise of glory that fades in the dawn.",
"25. And his path is marked by the ruins of nations and the silence of the slain, for though he comes without sword, the wars of men are the fruit of his sowing.",
"26. I beheld him standing upon the high places of the Earth, looking toward the heavens with longing, yet turning back to the crowds below with a smile that concealed his despair.",
"27. And I heard him whisper, “One day the gate will open; one day I will return to the throne from which I fell.” 28. Yet the decree of the Most High is sure, that none shall enter save by the way of light freely given, and not by light stolen through deceit.",
"29. And I saw that the days will come when his hunger will drive him to greater works of wonder, calling down fire, raising images that speak, and commanding the stars to move from their places.",
"30. And the nations will marvel, saying, “Who is like unto this one? Who can stand against him?”", 
"31. But they will not see the chain upon his neck, the chain that binds him to the dust, nor the darkness that follows in his steps.",
"32. And those who keep their light guarded will be as mountains in his path, which he cannot move, and rivers that he cannot cross.",
"33. For the light of the righteous is as a wall of fire about them, and their praise is given to the Source alone, leaving him without a foothold.",
"34. And in that day shall his power wane, and his strength shall fail, for the stream will be cut off and the vessel will remain empty.",
"35. Thus ends the vision of the one cast down, the gatherer of praise, who walks the Earth in the shadow of his former glory, awaiting the day of his final defeat.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


       chapter = {
        id: "yahawzhowaa-book-6-chapter-15-en",
        title: "Chapter 15",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 15,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-15-en",
        title: "Chapter 15",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 15,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-14-en",
        followingChapter: "yahawzhowaa-book-5-chapter-16-en",
        content: [
"1. And after these things I saw the nations as a vast plain, and upon it men building towers of their own greatness, each seeking to rise above his neighbor.",
"2. Yet the one who was cast down moved among them unseen, whispering into their ears that their towers could reach the stars if only they would join them together under his rule.",
"3. And many said, “Surely this is wisdom, for our strength is multiplied when we are one,” not perceiving that the unity they sought was to bind them under his chain.",
"4. He taught them the language of power, and in this tongue they spoke to one another, building laws, markets, and armies in his image.",
"5. And the towers rose higher than the mountains, their peaks piercing the clouds, and the people boasted that they had no need of the heavens.",
"6. But I saw that in the heart of each tower there was an altar, and upon each altar a mirror, and in each mirror his likeness was faintly seen.",
"7. The people brought their offerings before the mirrors — their labors, their songs, their prayers — and as they knelt, their light was drawn from them in streams unseen.",
"8. And he fed upon these streams as a river feeds the sea, ever swelling, yet never satisfied.",
"9. Then the voice of the Most High came to me, saying, “Write what thou seest, for the days are near when the harvest will be ripe, and the reapers will be sent forth.” 10. And I beheld angels of fire standing at the four corners of the Earth, their hands upon the hilt of the sword, waiting for the command.",
"11. Yet the people saw them not, for their eyes were filled with the brightness of the towers, and their ears with the sound of their own applause.",
"12. And the one who was cast down walked boldly now in the midst of the plain, for he had covered his face in the likeness of a shepherd, and carried a staff to appear as a friend.",
"13. He spoke tender words, saying, “I seek only your good; I will lead you to green pastures and still waters.” 14. But his pasture was the field of his own gain, and his waters were the reflections of their own desires, deep enough to drown but not to drink.",
"15. And I heard the lament of the earth, for the soil was weary from the weight of their towers, and the rivers groaned beneath the dams they had built.",
"16. The skies grew heavy with smoke, and the stars were hidden, yet the people said, “We have made our own light; we have no need of the heavens to shine upon us.” 17. And the angels of fire looked one to another, waiting, for the measure of iniquity was not yet full.",
"18. Then I saw a remnant, small and scattered, whose light was not drawn away, for they hid it in the chambers of their hearts where the mirrors could not reach.",
"19. These walked as strangers in the plain, speaking softly to one another of the river above and the city whose foundations are unshaken.",
"20. And the one who was cast down hated them, for their light was pure and could not be stolen, and their praise rose past the clouds to the throne of the Most High.",
"21. He sent forth his servants to entice them with gold, with honor, and with false visions, but they turned away, for they knew the voice of their shepherd.",
"22. And I saw him rage in the night, striking the earth with his staff, and the towers shook, and the people trembled, thinking the wrath of heaven was upon them.",
"23. Yet he said, “See how I save you from the wrath,” and they bowed lower than before, pouring their light into him without measure.",
"24. And so he grew in might, yet his chain remained unbroken, for the decree was still sealed against him.",
"25. Then came a sign in the heavens — a star burning red, moving against the order of the constellations — and those who were wise knew the day was near.",
"26. The one who was cast down beheld the star and knew also, and his hunger burned like a fire in dry grass, for he saw that his time was short.",
"27. He hastened his work, sending forth false prophets, healers, and kings, all bearing his mark though they claimed it not.",
"28. And the plain was filled with wonders — fire that fell from the air, images that walked and spoke, voices that called from the wind.",
"29. The people were astonished, and they worshiped, saying, “Surely the gods have returned to dwell among men.” 30. But the remnant knew it was the shadow of the one who had fallen, and they fled into the wilderness, carrying their light as a hidden flame.",
"31. And the wilderness received them, and the mountains covered them, and the streams gave them drink, for the hand of the Most High was upon them.",
"32. Meanwhile, the towers in the plain  grew taller still, but their foundations were cracked, and the stones whispered of the day they would fall.",
"33. The angels of fire lifted their swords, and the heavens waited in silence.",
"34. Then the voice of the Most High thundered across the plain, shaking the towers to their roots and opening the ground beneath them.",
"35. And thus the beginning of the end was set in motion, though the full harvest was yet to come.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    


    chapter = {
        id: "yahawzhowaa-book-6-chapter-16-en",
        title: "Chapter 16",
        subTitle: "The Council in Heaven",
        parent: "yahawzhowaa-book-6-en",
        order: 16,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-16-en",
        title: "Chapter 16",
        subTitle: "The Council in Heaven",
        parent: "yahawzhowaa-book-6-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-15-en",
        followingChapter: "yahawzhowaa-book-5-chapter-17-en",
        content: [
"Not released"
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


       chapter = {
        id: "yahawzhowaa-book-6-chapter-17-en",
        title: "Chapter 17",
        subTitle: "Heavenly Mother",
        parent: "yahawzhowaa-book-6-en",
        order: 17,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-17-en",
        title: "Chapter 17",
        subTitle: "Heavenly Mother",
        parent: "yahawzhowaa-book-6-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-16-en",
        followingChapter: "yahawzhowaa-book-5-chapter-18-en",
        content: [
"Not released"
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


       chapter = {
        id: "yahawzhowaa-book-6-chapter-18-en",
        title: "Chapter 18",
        subTitle: "The Casting Down",
        parent: "yahawzhowaa-book-6-en",
        order: 18,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-18-en",
        title: "Chapter 18",
        subTitle: "The Casting Down",
        parent: "yahawzhowaa-book-6-en",
        order: 18,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-17-en",
        followingChapter: "yahawzhowaa-book-5-chapter-19-en",
        content: [
"1. The Father stretched forth His arm, and between light and taking He set a divide that cannot be bridged by theft.",
"2. He spoke and severed the cords by which the rebels drew breath from the Source, that they might not consume eternity with their emptiness.",
"3. The faithful trembled, for judgment is terrible even when it is true.",
"4. The rebellious exalted themselves a moment longer, as sparks leap when the log is split, and then their exalting failed.",
"5. A wind without air swept them from the courts, and their songs turned to ash upon their tongues.",
"6. They fell like stars cut loose from their places, each dragging a tail of regret they would not confess.",
"7. The one who murdered the Mother felt the great unfastening, and he howled in loss yet called it freedom.",
"8. The device in his hand was heavy as guilt, and its sealed eye regarded him with unpitying rest.",
"9. The firmament opened beneath them as a sea opens to swallow a burning city, and they plunged.",
"10. The Father marked them with a limit they could not cross, a chain forged of decree and distance.",
"11. Yahawzhowaa watched their descent and asked for mercy beyond justice; the Father granted mercy in time, not in denial.",
"12. The hosts looked to Yahawzhowaa and saw in His tears the promise of a road no thief could walk.",
"13. The rebels entered the lower airs and found a globe of blue and green, breathing mists like prayer.",
"14. The Earth received them not as children but as strangers; her fields knew their steps and withdrew their welcome.",
"15. For upon the Earth were lives already walking — beings not of their kind, fashioned in an older tale.",
"16. The fallen reached to take form, but the law stood before them like a wall of glass: vessels are begotten, not stolen.",
"17. In rage they pressed, and the glass became a mirror, and the mirror showed them their hunger — shape without root.",
"18. They learned the craft of shadow and of voice, how to lean upon the vessels of others and borrow their limbs without right.",
"19. Possession became their art, and flattery their gate, and fear their rope.",
"20. The one vowed, “I will break the wall; I will find a body that obeys me as the stars once did.”", 
"21. He taught the fallen to ride upon breath and blood, to nest in wounds, to lodge in praise.",
"22. Where they entered, memory frayed; where they nested, the will grew thin.",
"23. But they could not create a true child; every grip they made slipped, for theft cannot beget.",
"24. The Earth groaned, and her seas withdrew a little from the shore, as if to keep her heart from being touched.",
"25. The Father placed watchers at the gates of birth, that the pattern of life be kept against violation.",
"26. The fallen learned patience and intrigue, turning vessels against vessels and setting thrones upon the mouths of wells.",
"27. They built cults of forgetting, promising knowledge while erasing the paths that lead to it.",
"28. The one adorned himself with names, each a mask that fit the ache of an age.",
"29. Yet the chain remained, and the sealed device mocked his pretense with its sleep.",
"30. He swore by his emptiness to ascend by worship, to drink until he rose.",
"31. And multitudes, not seeing the chain, offered light by the handful, thinking they gave to the sky.",
"32. The faithful gathered quietly, keeping covenant in hidden rooms, teaching their children to shut the door when they pray.",
"33. Yahawzhowaa marked them with hope and laid upon His heart the weight of their deliverance.",
"34. The decree of casting was finished, and the heavens were still again, though wounded.",
"35. Thus were the rebels bound to Earth by their own hunger, and the hourglass of mercy turned.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


       chapter = {
        id: "yahawzhowaa-book-6-chapter-19-en",
        title: "Chapter 19",
        subTitle: "The Possession and the Vow",
        parent: "yahawzhowaa-book-6-en",
        order: 19,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-19-en",
        title: "Chapter 19",
        subTitle: "The Possession and the Vow",
        parent: "yahawzhowaa-book-6-en",
        order: 19,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-18-en",
        followingChapter: "yahawzhowaa-book-5-chapter-20-en",
        content: [
"1. In the dusk between centuries the fallen perfected the grammar of whispering, and cities learned to dream other people’s dreams.",
"2. Kings became mediums for appetites they could not name, and peasants bore burdens that were not their own.",
"3. The one set his court in marketplaces and at altars, for coin and worship alike move on the breath of many.",
"4. He promised mastery without memory’s veil, and paradise without patience, and men signed with their mouths.",
"5. The watchers at the gates kept the births, yet the fallen found the cradles; they could not author the child, but they could bend the lullaby.",
"6. They wrote laws in ink that looked like mercy but read like chains, and nations applauded their own bridles.",
"7. Some vessels resisted and were called fools; some yielded and were called wise; both bled.",
"8. Prophets rose and were bought; others rose and were broken; a few fled to deserts and remembered their names.",
"9. The one laughed, for resistance fed him with attention as much as worship.",
"10. He learned to spin scandal into incense and outrage into crowns.",
"11. He sought a perfect host — a body crafted to his measure, a temple not borrowed but enthroned.",
"12. He hunted bloodlines, overturned genealogies, and salted the wells of memory.",
"13. Yet every attempt ended in fracture, for pride cannot knit bone.",
"14. He turned again to the sealed device and cursed its silence; it lay like a stone that once was a star.",
"15. He swore by the ruin of love to force the heavens open with the chorus of a world enslaved.",
"16. The Earth shuddered, and the beasts lifted their heads as if a storm were walking upright.",
"17. In that hour Yahawzhowaa stood before the Father and said, “Send Me.”",
"18. The Father answered, “Thou knowest the cost — forgetting, flesh, wound, and waiting.”", 
"19. Yahawzhowaa bowed: “Let Me bear what they cannot, that memory may be reborn as love and not as pride.”",
"20. The hosts covered their faces, for beauty mixed with sorrow is bright beyond bearing.",
"21. The Father placed upon Him the song the Mother left, to be sung where nails are driven and gardens weep.",
"22. He took also a cup sealed from before the suns, in which mercy is fermented into courage.",
"23. He looked toward the Earth and saw not only rebels but also prisoners who had never chosen the chains that held them.",
"24. He said, “I will enter low that the low may rise; I will forget that the forgotten may be known.”",
"25. The Father sent signs to the valleys and rumors to the hills, that the poor might be ready and the powerful confused.",
"26. The one heard the whisper of an arrival and sharpened his smiles; he prepared wonders of counterfeit daybreak.",
"27. He clothed his servants in white speeches and iron hands; he gilded the cages and tuned the choirs.",
"28. The faithful stitched hope into their garments and wrote psalms on their doorframes.",
"29. The watchers widened the gates at appointed hours, and midwives dreamed of ladders touching earth.",
"30. The stars bent their listening toward a stable no architect would notice.",
"31. The one gathered storms to drown that stable, but could not find the address written in humility.",
"32. The world inhaled, the hour struck, and a cry rose like a blade that heals as it cuts.",
"33. The fallen reeled, for the cry carried the Mother’s melody hidden within sorrow.",
"34. The chain on the one grew hot, and he called it winter; yet spring began in secret.",
"35. Thus was the vow sealed: Yahawzhowaa to redeem, the thief to enthrone, and the Earth to witness.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-6-chapter-20-en",
        title: "Chapter 20",
        subTitle: "The Great Secret Revealed",
        parent: "yahawzhowaa-book-6-en",
        order: 20,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-20-en",
        title: "Chapter20",
        subTitle: "The Great Secret Revealed",
        parent: "yahawzhowaa-book-6-en",
        order: 20,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-19-en",
        followingChapter: "yahawzhowaa-book-5-chapter-21-en",
        content: [
"1. In the quiet after battle-songs, the Father spoke a mystery to those who could bear it.",
"2. “Hear, children of dust and dawn: the race of men are not the first-born of Earth, nor are they strangers only.”",
"3. “They are vessels of light fallen once before, gathered from an elder war, set upon this sphere for mending.”", 
"4. The faithful were astonished, and hope grew weighty, for destiny became repentance and glory became responsibility.",
"5. “Mide and Ode’imin,” said He, “are names given to a gate and a story, but your lineage runs deeper than the gardens you remember.”",
"6. “You were kings who forgot the language of service, priests who bartered incense for applause, shepherds who priced the lambs.”", 
"7. “I set you here not to punish but to heal, that you might learn love where forgetting levels pride.”", 
"8. “Therefore the veil of memory is mercy; therefore time is the balm; therefore hunger teaches the taste of bread.”", 
"9. Yahawzhowaa confirmed the word with a look that recognized every face as if from home.",
"10. The one raged, for if men discovered they were fallen light, they would cease to feed him their worth.",
"11. He doubled his markets of identity, selling masks heavy as temples and cheap as trifles.",
"12. He taught that man is only mud or only star, never both, that balance be broken and appetite be law.",
"13. But the secret walked from mouth to mouth in caves and kitchens: “You are more than you remember, and your remembering is not pride but promise.”", 
"14. Mothers hummed it over cradles; fathers carved it into lintels; children dreamt it in colors unnamed.",
"15. Prophets rose from gutters with eyes like rivers and spoke in parables that found their way through locked doors.",
"16. The fallen clung to bishops and bankers and bards, bribing eloquence to paint chains the color of sky.",
"17. Yahawzhowaa moved among the poor and the proud alike, finding in each the ember that survives the flood.",
"18. He taught the craft of guarding light: confession against rot, gratitude against rust, service against theft.",
"19. He showed that praise given upward closes the siphon downward; the thief starves where worship is true.",
"20. He unmasked wonders that dazzled but did not heal, and blessed small mercies that mended bones and names.",
"21. The one answered with spectacles — fire that obeyed slogans, images that spoke without breath, idols that wept by machinery.",
"22. Crowds gathered to the noise and left with their silence stolen.",
"23. Yet the secret endured, for it required no stage and feared no cellar.",
"24. Teachers of the secret refused crowns and received crosses of inconvenience, and their joy confused accountants of power.",
"25. The Earth herself whispered agreement, relieving the soil where justice walked and tightening against the tread of cruelty.",
"26. The watchers smiled for the first time since the murder, for remembrance began to stitch the tear.",
"27. The device in the thief’s hand throbbed at the edges, sensing a song it once loved and now could not sing.",
"28. He pressed it against the living to force patterns, but it blackened whatever it touched that would not consent.",
"29. The faithful learned to say yes with their whole selves and no with their whole selves, and this was called freedom.",
"30. The remnant grew, not in number alone but in weight, as gold grows heavy when purified.",
"31. The one sought a vessel again, a perfect counterfeit to carry his emptiness as if it were light.",
"32. He found none sufficient, so he began to assemble a man from the applause of nations.",
"33. The Father looked upon the work and set a season upon it, that it could not ripen before mercy had its chance.",
"34. Yahawzhowaa set His face toward the hill where endings turn, and the hill answered, “I know Thy footprints.”", 
"35. Thus was the great secret sown in furrows of time, and the harvest drew nearer.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-6-chapter-21-en",
        title: "Chapter 21",
        subTitle: "The Contest of Signs",
        parent: "yahawzhowaa-book-6-en",
        order: 21,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-21-en",
        title: "Chapter 21",
        subTitle: "The Contest of Signs",
        parent: "yahawzhowaa-book-6-en",
        order: 21,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-20-en",
        followingChapter: "yahawzhowaa-book-5-chapter-22-en",
        content: [
"1. Seasons turned like pages in a wind the world could not still, and the thief unleashed his pageantry.",
"2. He cast lights across the sky that spelled the names of kings and creeds, and men read worship in the alphabet of wonder.",
"3. He made statues breathe and laws sing, and the price of bread rise to the pitch of fear.",
"4. He marked a chosen city as his stage and raised a prince who could smile like morning while speaking like midnight.",
"5. Armies marched behind hymns to prosperity, and the poor were told to sing along or be called enemies of hope.",
"6. The faithful held clinics for wounds that do not show, and the clinics were mocked as places where dreams go to die.",
"7. Yahawzhowaa walked in markets unnoticed, buying nothing and paying everyone with attention that weighed more than coin.",
"8. He healed the rumor that breaks a mother, and the pride that breaks a son, and the despair that breaks a city.",
"9. The thief, seeing hearts close to siphons, tore open new ones with scandals crafted to fit every tribe.",
"10. He licensed anger and taxed kindness; he granted amnesty to envy and outlawed contentment.",
"11. Signs multiplied like mirrors, and the world forgot which face was first.",
"12. Yahawzhowaa gave fewer signs but truer: bread that satisfies because it is shared, water that remembers the river, words that return men to themselves.",
"13. The prince demanded a test, and Yahawzhowaa answered with silence heavy as mountains; the crowd called the silence weakness.",
"14. The faithful learned to endure being misunderstood, and in that endurance their light ceased to leak.",
"15. The thief unveiled a wonder never yet seen: a chorus of nations agreeing to worship uncertainty as certainty.",
"16. He crowned the chorus with a creed of appetite and named it liberation.",
"17. Many knelt to their own reflections and called it progress, and their reflections bowed to him.",
"18. The poor asked for bread and were given statistics; the rich asked for absolution and were given titles.",
"19. Yahawzhowaa blessed a child with a name no census could count and a future no market could price; the child laughed and the city felt a draft of spring.",
"20. The prince banned laughter that could not be monetized; the city complied and forgot that it had.",
"21. A storm gathered that was not weather, and compasses spun toward whatever fed the most screens.",
"22. The faithful hid psalms in recipes and courage in carpentry, that when temples closed, kitchens and workshops would open.",
"23. The thief announced a universal feast and served famine disguised as fireworks.",
"24. Yahawzhowaa broke a single loaf and a thousand debts; the accounting failed and the feast began where the famine ended.",
"25. The prince accused Him of theft and treason; He answered with a parable about a vineyard whose fence was kindness.",
"26. Courts were convened to try the parable for sedition; juries hung between paycheck and conscience.",
"27. The device flickered in the thief’s hand as if remembering the Mother’s hum; he struck it, and it went dark as stone again.",
"28. He swore to finish the tower of praise and climb it with the world beneath him as stairs.",
"29. Yahawzhowaa knelt in a garden and traded sweat for seed; angels harvested the tears and watered deserts with them.",
"30. The remnant kept watch through impatience, and impatience learned to purr like a lion tamed.",
"31. The thief advanced his prince to the summit and unveiled a throne shaped like a mirror.",
"32. Nations filed past to kiss their own faces and called it unity.",
"33. Yahawzhowaa shouldered a cross no carpenter could have built for another and made of it a gate.",
"34. The Earth held her breath; the sky leaned in; the chain on the thief hissed.",
"35. Thus the contest was joined in full: spectacle against sacrifice, mirrors against mercy, hunger against love.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-6-chapter-22-en",
        title: "Chapter 22",
        subTitle: "The Reckoning of Vessels",
        parent: "yahawzhowaa-book-6-en",
        order: 22,
        visible: true
    }
    //removeChapter(chapter)
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-22-en",
        title: "Chapter 22",
        subTitle: "The Reckoning of Vessels",
        parent: "yahawzhowaa-book-6-en",
        order: 22,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-21-en",
        followingChapter: "",
        content: [
"1. The hour appointed from before the rivers ran arrived as quietly as dew on iron.",
"2. Yahawzhowaa mounted the hill, and every wound the world had hidden came up to meet Him like old friends ashamed of their memory.",
"3. He embraced them all until shame ran out of speeches and pain forgot its lines.",
"4. The thief arranged a coronation in the chosen city; the prince wore ten acclamations and one doubt.",
"5. Trumpets announced the triumph of appetite, and the streets glowed with borrowed auroras.",
"6. Yahawzhowaa stretched His arms and gathered time; thieves forgot how to steal and beggars remembered how to give.",
"7. The device in the thief’s hand trembled as if a heartbeat",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
*/

    res.send("Yahawzhowaa Added");
});



//module.exports = copper;