import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function (req, res) {
    let book = {};
    let chapter = {};

    book = {
        id: "yahawzhowaa-book-6-en",
        title: "BOOK SIX",
        subTitle: "The Mountains of the Turtle",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-six-171x214.jpg",
        thumbnailTitle: "Mountains of the Turtle",
        Description: "",
        priceText: "Subscription",
        price: 9.99,
        isParent: true,
        hasChildBooks: false,
        order: 6,
        parent: "",
        visible: true,
        language: "en",
        category: "quetzal-condor",
        discountCode: "",
        discountPrice: "1000",
        discountPriceText: "Subscription"
    }
    //removeBook(book);
    addBook(book);
    
    chapter = {
        id: "yahawzhowaa-book-6-chapter- -en",
        title: "Chapter ",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter- -en",
        title: "Chapter ",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter- -en",
        followingChapter: "yahawzhowaa-book-5-chapter- -en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

   chapter = {
        id: "yahawzhowaa-book-6-chapter-1-en",
        title: "Chapter 1",
        subTitle: "Aganabish declareth his stewardship",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true
    }
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
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 2,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-2-en",
        title: "Chapter 2",
        subTitle: "",
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
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 3,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-3-en",
        title: "Chapter 3",
        subTitle: "",
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
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 4,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-4-en",
        title: "Chapter 4",
        subTitle: "",
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
        title: "Chapter5",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 5,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-5-en",
        title: "Chapter 5",
        subTitle: "",
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
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 6,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-6-en",
        title: "Chapter 6",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-5-en",
        followingChapter: "yahawzhowaa-book-5-chapter-7-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-7-en",
        title: "Chapter 7",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 7,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-7-en",
        title: "Chapter 7",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-6-en",
        followingChapter: "yahawzhowaa-book-5-chapter-8-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-8-en",
        title: "Chapter 8",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 8,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-8-en",
        title: "Chapter 8",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-7-en",
        followingChapter: "yahawzhowaa-book-5-chapter-9-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-9-en",
        title: "Chapter 9",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 9,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-9-en",
        title: "Chapter 9",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-8-en",
        followingChapter: "yahawzhowaa-book-5-chapter-10-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-10-en",
        title: "Chapter10",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 10,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-10-en",
        title: "Chapter 10",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-9-en",
        followingChapter: "yahawzhowaa-book-5-chapter-11-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-11-en",
        title: "Chapter 11",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 11,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-11-en",
        title: "Chapter 11",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-10-en",
        followingChapter: "yahawzhowaa-book-5-chapter-12-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-12-en",
        title: "Chapter 12",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 12,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-12-en",
        title: "Chapter 12",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-11-en",
        followingChapter: "yahawzhowaa-book-5-chapter-13-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-13-en",
        title: "Chapter 13",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 13,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-13-en",
        title: "Chapter 13",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-12-en",
        followingChapter: "yahawzhowaa-book-5-chapter14-en",
        content: [

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

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-16-en",
        title: "Chapter 16",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 16,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-16-en",
        title: "Chapter 16",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-15-en",
        followingChapter: "yahawzhowaa-book-5-chapter-17-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-17-en",
        title: "Chapter 17",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 17,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-17-en",
        title: "Chapter 17",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-16-en",
        followingChapter: "yahawzhowaa-book-5-chapter-18-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-18-en",
        title: "Chapter 18",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 18,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-18-en",
        title: "Chapter 18",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 18,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-17-en",
        followingChapter: "yahawzhowaa-book-5-chapter-19-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-19-en",
        title: "Chapter 19",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 19,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-19 -en",
        title: "Chapter 19",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 19,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-18-en",
        followingChapter: "yahawzhowaa-book-5-chapter-20-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-20-en",
        title: "Chapter 20",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 20,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-20-en",
        title: "Chapter20",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 20,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-19-en",
        followingChapter: "yahawzhowaa-book-5-chapter-21-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-21-en",
        title: "Chapter 21",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 21,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-21-en",
        title: "Chapter 21",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 21,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-20-en",
        followingChapter: "yahawzhowaa-book-5-chapter-22-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-22-en",
        title: "Chapter 22",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 22,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-22-en",
        title: "Chapter 22",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 22,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-21-en",
        followingChapter: "",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    res.send("Yahawzhowaa Added");
});


//module.exports = copper;