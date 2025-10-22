import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function async(req, res) {
    let book = {};
    let chapter = {};

/*
    book = {
        id: "yahawzhowaa-book-7-en",
        title: "The Record of the City of the Gods",
        subTitle: "Brought upon Copper Tablets from the South to Agonabish, After the Great Destruction",
        image: "",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-seven-171x214.jpg",  
        thumbnailTitle: "City of the Gods",
        Description: "",
        priceText: "Subscription",
        price: 9.95,
        isParent: false,
        hasChildBooks: false,
        order: 8,
        parent: "yahawzhowaa-en",
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
        id: "yahawzhowaa-book-7-chapter-1-en",
        title: "Chapter 1",
        subTitle: "",
        parent: "yahawzhowaa-book-7-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-1-en",
        title: "Chapter 1",
        subTitle: "",
        parent: "yahawzhowaa-book-7-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-7-chapter-2-en",
        content: [
"*And it came to pass, after the days when the North American continent was shaken, and cities fell to the earth and were swallowed, and the seas came upon the land, that a man of the Dine (Modern Navajo Nation) came to Agonabish. And his hands bore the weight of copper tablets, upon which was graven the account of a great confrontation in the City of the Gods. And these tablets he delivered into the keeping of the Mid ē´wiwin, to be read in the appointed time.*",
"1. And it came to pass, in the days when the land groaned and the waters lifted their voice, that the mountains were shaken from their ancient rest, and the plains were broken, and the cities of men were bowed to the dust.",
"2. For a great destruction had moved across the face of the North American continent, and there was no place where its shadow had not passed, neither the valleys nor the high places, neither the forests nor the rivers, neither the dwellings of the many nor the lodges of the few.",
"3. Some cities were swallowed by the earth, and their towers sank into the darkness, and the cries of the people were stilled beneath the weight of stone and soil.",
"4. And some were burned by fire that fell from the heavens, and the smoke thereof covered the sun, and the day was as night.",
"5. And some were drowned by waters that came in from the seas, and the waves carried away their walls and their marketplaces, and there was no remembrance of their former beauty save in the minds of those who escaped.",
"6. And the hearts of men failed them, for they beheld the power that was loosed, and they could not contend with it, neither could they hide from it.",
"7. In those days there arose a man from among the Diné, from the clans of the south and the west, whose name in his tongue was Naashá, which is to say, He Who Walks.",
"8. And this man had in his keeping certain tablets of copper, upon which was engraved the record of a great sign and a great contention that had taken place in the City of the Gods, far to the south, in the lands between the mountains and the great waters.",
"9. And the engraving upon the copper was deep, that the words might not be lost, and the marks thereof shone in the light like the color of the setting sun upon the canyon walls.",
"10. And Naashá had received these tablets from the hand of the elders of his people, and they had received them from the hand of others, until their beginning was hidden in the mists of time.",
"11. But it was told among them that the first engraving had been made by those who beheld the matter with their own eyes, and whose hands were steady in the craft, that their testimony might endure beyond the days of their breath.",
"12. And the elders charged Naashá, saying: Go northward, beyond the rivers that divide the lands, until you come to the people who guard the bundles of the ancient medicine, for they are keepers of the songs and the sayings that were from the first.",
"13. And it was told to him that among them there was one named Agonabish, a scribe and a seer, who preserved in order the records that had come to him from many generations, and who would join this testimony to the others, that nothing be lost.",
"14. Therefore Naashá set his face toward the north, and he went alone, for the way was perilous, and the land was filled with ruin, and the air carried the scent of burning and the taste of salt.",
"15. And he passed through valleys where the rivers had left their beds and wandered in the fields, and through forests where the trees lay as if a mighty wind had pressed them down to drink the earth.",
"16. And he saw the bones of cities, where the stones were blackened and the metal was twisted, and where no voice was heard but the whisper of the wind among the ruins.",
"17. And it came to pass that after many days and nights, he came to the land of the Great Lakes, where the waters are like the face of the sky, and the forests stand as guardians of the shore.",
"18. And there he found the lodge of the Midē´wiwin, the keepers of the medicine and the watchers of the fire, and they received him with honor, for they saw that he carried a burden of great worth.",
"19. And Naashá spoke to them, saying: I have come from the south, bearing the testimony of a great matter, engraved upon copper, which was delivered to me by the elders of my people, and they by those before them.",
"20. And it tells of a day when the heavens and the earth contended, and when two beings met in the City of the Gods — one clothed in the name of holiness but filled with the hunger of the pit, and one who came from the South in silence, whose steps were as the wind among the reeds.",
"21. And the Midē´wiwin called for Agonabish, and when he came, they placed the tablets in his hands, and he looked upon them and beheld the engraving, and the light of the fire shone upon the copper, and the letters danced like living things.",
"22. And he knew that this was a true record, for the spirit of truth rested upon him, and his heart was moved within him to preserve it and to add it to the tablets of the north.",
"23. And the elders of the lodge made a feast, and they sang the songs of the four winds, and they blessed Naashá, and they blessed the tablets, and they blessed the work that was to come.",
"24. And Agonabish took the tablets into the lodge of records, and he sat before them in silence, and the fire beside him burned low, and the night passed, and the dawn came, and he did not move.",
"25. For he read the words engraved thereon, and in the reading his spirit traveled to the place of which they spoke, and he beheld with the eyes of the heart the City of the Gods, and the meeting of the two.",
"26. And he began to set the words in order, to be read by those who would come after, and to be joined to the great record of the deeds of the earth and the heavens.",
"27. And this is the beginning of that record, which was brought from the south upon copper, and delivered into the hands of Agonabish after the great destruction.",
"28. Let him who reads understand, for these are the words of witness and of warning, and they speak of light and of darkness, of pride and of humility, of the power that destroys and the power that redeems.",
"29. And behold, this is the record of the City of the Gods.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-7-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The City of the Gods & the Fear of the People",
        parent: "yahawzhowaa-book-7-en",
        order: 2,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The City of the Gods & the Fear of the People",
        parent: "yahawzhowaa-book-7-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-1-en",
        followingChapter: "yahawzhowaa-book-7-chapter-3-en",
        content: [
"1. And it came to pass that in the southlands there rose a city of stair and stone, whose terraces were as the ribs of a mountain, and whose plazas drank the light of the sun from dawn to dusk; and men called it the City of the Gods, for the works of many ages poured into its walls.",
"2. And a being came and stood upon the summit-temple, and his garments flashed as lightning on white water; yet in his eyes there was a depth that swallowed light, and the breath of those who beheld him grew thin.",
"3. And he stretched out his hands, and the air whirled into many pillars, so that the voice of the wind became a ring of lions about the city; and the people cried out, for they felt themselves as grass before the storm.",
"4. And he spoke loudly, saying, Bow yourselves before me, and make haste to repent, for I hold the reins of storm and the bit of the trembling earth; and who shall stand when I am angry?",
"5. And the stones underfoot shook at his word, and mothers took their children beneath their cloaks, and old men leaned upon their staves as reeds bend before a river in flood.",
"6. Then the governors of the city gathered, both from the canals and from the hill-palaces, and they spoke one to another with hurried speech; yet their words had no root, for fear had eaten the wisdom of council.",
"7. And there was among them a Maya lord, named Hun B’alam Ajaw — which is, One Jaguar, Sacred Lord — of a lineage from the eastward forests, and he said, Le t’an in Ajawil, u k’áat chi’ob le u nojoch k’uhul — Behold my lordship, yet I ask the counsel of the Holy.",
"8. And there was also a Mexica ruler, a Tlatoani of the valley peoples, called Cuāuhtli Teuctli — which is, Eagle Lord — and he said, Nicmaca in tlatolli, notoca Cuāuhtli Teuctli; īn teōtl ītech nimitstlatlauhtia — I give my word; my name is Eagle Lord; of the divine matter I plead with you.",
"9. But the being upon the temple heard none of their pleading, for he loved only the sound that returned to him when men spoke his praise; and the circle of wind drew nearer, as if to lick salt from the faces of the fearful.",
"10. And among the multitudes there ran a whisper: that Yahawzhowaa, who had walked among the southern coasts and mountain paths, was coming northward, barefoot and cloaked in purple, and a purple wampum shell shone upon his breast as the dawn upon still water.",
"11. And some said, Behold the bringer of light; and others said, Can one without army stand against the chariot of the whirlwind?",
"12. Then the being lifted his arm, and the pillars of wind leaned toward the market-quarter; and the roofs of reed and the stalls of salt-fish groaned and scattered as chaff before threshing.",
"13. And a mother cried, K’inam! K’inam! — Pain! Pain! — and gathered her little ones; and an elder of the calmecac — school of counsel — spoke to the youths, saying, Tlazohcamati in tonalli, xiquitztin, xiquimottilican — Be thankful for the day; stand up; be watchful.",
"14. But fear ran swifter than counsel, and men fell upon their knees to the dust and struck their foreheads upon the stone; and those who stood grew few.",
"15. And Hun B’alam Ajaw said to the governors, Ma’ u p’u’uxtik; k’a’abet u etelil t’aan — Do not be scattered; we need a single word.",
"16. And Cuāuhtli Teuctli answered, In titlatocān, timotlatlauhtia in moyōllōtl — āxcān, ma xiquitztin — As the ruling house, we entreat your hearts — now, stand.",
"17. But their words blew away, for the whirlwind loved to carry away counsel; and the being upon the height smiled as a jaguar smiles with the meat between its teeth.",
"18. Then a runner came from the south gate, breath like a bellows, feet bleeding, saying, Behold, the man of peace approaches; his steps are as the turnings of the seasons, and he does not hasten and does not delay.",
"19. And the people murmured, and hope pressed against fear like a sprout against stone; and some lifted their faces from the dust.",
"20. But the being cried aloud, saying, Who shall stand before me when I am angered? and he stamped with his heel, and the courtyard trembled so that the carvings upon the balustrades shed dust as snow from a cedar bough.",
"21. And he named himself lord of repentance, demanding knees, demanding faces to the ground, demanding the river of praise to flow into his thirst; for he drank light as a man in drought drinks from a cracked jar, never full.",
"22. Then a company of priests from faroff lakes came with painted faces and hands of incense, and they looked to the wind, and their incense fled as birds from a field newly hunted.",
"23. And a child cried, Where is the one who heals without threat? and her grandmother answered, Hush, for the storm eats questions.",
"24. And it came to pass that the day bent toward its middle, and heat rode the wind like a horse without bridle; and sweat became the river of the poor.",
"25. And the being lifted both hands, and the pillars of wind bowed toward him as dogs to a master; and he laughed, yet his laughter had no water in it.",
"26. Then a silence moved at the edge of the crowd, as when a deer steps from the shade and all leaves forget to stir; and men turned to see who came without herald and without weapon.",
"27. And Yahawzhowaa entered the plaza, barefoot upon the warmed stone, purple upon his shoulders, purple shell upon his breast; and the sun blinked, as if to measure him.",
"28. And he spoke not; and the hush that followed him was as the hush between wave and wave; and those whose hearts remembered mercy remembered also to breathe.",
"29. And the being upon the temple leaned forward as a hawk stoops upon a field mouse, saying, At last; and he sharpened his voice as a knife upon whetstone.",
"30. And thus were the two set in sight of all: the one who drew breath from fear, and the one whose breath steadied storms; and the city became a scale to weigh glory and hunger.",
"31. And the elders of counsel, Maya and Mexica, stood together upon the stair and said within themselves, K’uhul, kenam? — Holy One, how shall it be? — and Ometeōtl, quenamiquīz? — Two-in- Divine, how will it be accomplished?",
"32. And the hearts of the people were as birds between snares and sky, waiting for the hand that chooses freedom.",

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-7-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Approach of Yahawzhowaa & the Words of Challenge",
        parent: "yahawzhowaa-book-7-en",
        order: 3,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Approach of Yahawzhowaa & the Words of Challenge",
        parent: "yahawzhowaa-book-7-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-2-en",
        followingChapter: "yahawzhowaa-book-7-chapter-4-en",
        content: [
"1. And it came to pass that the being upon the height cried with a voice like bronze struck, saying, Who comes before me without bending the knee?",
"2. But Yahawzhowaa answered him not; and his gaze was as one who looks beyond hill to the dawn behind the hill.",
"3. And the being spoke again, Let the market fall silent; let the singers unstring their harps; let all tongues pour honor into my vessel; else I will yoke the wind and plow you under.",
"4. Then Hun B’alam Ajaw stepped forward with the staff of his house and spoke, In k’aaba’ Hun B’alam Ajaw; t’an in wíinikob’ — ma’ tu’ux puksi’ik’al u paktik ti’ p’uusil — My name is One Jaguar, Lord; I speak as a man — there is no place where the heart is made whole by fear.",
"5. And Cuāuhtli Teuctli lifted his hand and said, Nehua in Tlatoani, Cuāuhtli Teuctli; in tlatolli cualli, in yōllōtl mācualli; īn axcan xiquimmati — I am the Speaker, Eagle Lord; let the word be good, the heart be good; know this now.",
"6. But the being mocked them, saying, Lords of leaves and dust, who taught you to plant without rain and reap without storm? Be wise and bow.",
"7. And the crowd wavered, for the pillars of wind pressed inward like ringed wolves; and a woman cried, Na’atik — ma’ — I understand — not; and clutched her infant tight.",
"8. Then Yahawzhowaa raised his hand no higher than the height of a child’s ear, and he said nothing; and at his stillness the pillars untwisted as threads cut from a loom.",
"9. And the wind fell flat upon the plaza, and dust dropped like forgotten birds from the sky; and the people drew breath as divers returning from the deep.",
"10. And the being’s face altered as a mask altered by fire; and he cried, Who has loosened the cords of my strength?",
"11. And Yahawzhowaa spoke not, for his word in that hour was silence; and silence became the first teaching.",
"12. Then the being stamped with his heel, and the earth shook as when a great tree is felled; and the carvings upon the stair sang a stone-song and cracked a little at their edges.",
"13. And Yahawzhowaa lifted the same hand, and the trembling ceased as a harpstring ceases when the finger rests upon it; and a coolness moved across the faces of the weary.",
"14. And Hun B’alam Ajaw whispered to his captains, Táan u chi’bal u tuukul — u t’anilil le nojoch wíinik — Behold the thinking — it is the speech of the great man.",
"15. And Cuāuhtli Teuctli said to the nobles, Āmo titlahuel, āmo titlatlac; xiquitta — notza in tlamantli — We are not accursed, we are not at fault; look — he calls a different thing.",
"16. Then the being rose into the air, and the fear of the many rose with him as smoke rises when green wood burns; and he drew upon their trembling as a leech draws upon blood.",
"17. And men’s knees watered, and their hands trembled, and the old forgot the names of their grandchildren; and the being smiled, for his hunger felt for a moment like fullness.",
"18. But Yahawzhowaa stretched forth his hand across the space between terror and hope, and the cords that had no color yet bound many hearts were cut as if by a blade that cannot be seen.",
"19. And the strength of the people returned to them as morning returns to houses that face the east; and they stood, and some wept with the sudden weight of their own bones.",
"20. And the being fell to the paving as a hawk falls when its wing strikes an unseen branch; and he rose angry, for his emptiness had been shown before all.",
"21. Then he ran upon Yahawzhowaa and struck his breast with a blow that once had shattered gates; but Yahawzhowaa moved not, and the blow sank into stillness as a thrown stone sinks in deep moss.",
"22. And the being cried, Worship me! for he knew no other word that did not feed him.",
"23. But Yahawzhowaa stood as an oak stands upon a hill, the roots holding counsel with dark waters; and he set his eyes upon the one who raged.",
"24. And Yahawzhowaa whispered, Why will you not let them go? and his whisper was heard by every mother and every child, as a flute is heard beyond the market noise.",
"25. And the being faltered, for the question sought a door within him that he had nailed shut; and he saw the door and feared it.",
"26. And Yahawzhowaa asked again, When will you let them go? and time pressed its ear to listen, for time had also been bound.",
"27. But the being hardened his heart as clay hardens when the potter’s water is withheld; and he pressed his hand upon Yahawzhowaa’s garment to drink light from the spring he hated.",
"28. And the vessel of Yahawzhowaa began to shine — not swiftly but as dawn eats shadow line upon line — and men watched the line advance and forgot to fear.",
"29. And Hun B’alam Ajaw said, K’uux in puksi’ik’al — táan u náach’ — le nojoch k’áak’náab’ — My heart — behold — it is becoming a great sea of fire.",
"30. And Cuāuhtli Teuctli said, In yōllōtl ic ōmpa quiza — mochipa — moyōllōtl ilhuitl — My heart goes forth to that place — forever — my heart’s feast day.",
"31. And thus did the approach become the contest, and the contest become a mirror for every soul; and the plaza was a book that wrote itself upon the living.",
"32. And the people understood a little that silence can unmake storms, and that a question can be sharper than a sword.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-7-chapter-4-en",
        title: "Chapter 4",
        subTitle: "",
        parent: "yahawzhowaa-book-7-en",
        order: 4,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-4-en",
        title: "Chapter 4",
        subTitle: "The Contest in Full & the Witnesses of the Nations",
        parent: "yahawzhowaa-book-7-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-3-en",
        followingChapter: "yahawzhowaa-book-7-chapter-5-en",
        content: [
"1. And it came to pass that the being, seeing his strength fail in the eyes of the multitude, clothed himself in rage as in a second garment, and he lifted his hand to the sky as if to take the hinges from its doors.",
"2. And the sky darkened, and thunder put its fingers upon the rims of the mountains; and the being shouted, Behold, I am the master of wrath; surely you will bow.",
"3. And Yahawzhowaa lifted his hand — not in threat but in rest — and the thunder forgot its path, and the clouds remembered their first law, and went to water the fields beyond the city.",
"4. And the being cried, Then the earth shall be my servant; and he smote the paving with the heel of his foot, and the stones leaped as fish from a snare.",
"5. But Yahawzhowaa laid his palm upon the air, and the stones lay down again and slept as cattle sleep in shade at noon.",
"6. Then the being rose yet again into the air, higher than before, and drew breath from terror as a man drinks from many cups lined upon a festival table; and he swelled, and his shadow swelled with him.",
"7. And Yahawzhowaa reached, and cut the cords that no knife can see, and the borrowed light returned to those from whom it had been taken; and songs halfforgotten came back to the tongues of grandmothers.",
"8. And the being fell, and dust sprang up around him like the wings of locusts; and he coughed and tasted earth and hated its taste.",
"9. Then he ran like a spear cast by a champion and struck the chest of Yahawzhowaa; and the sound was as when a river meets a rock that has no age; and the river learns its own name.",
"10. And Yahawzhowaa moved not; and his face was a quietness that fathers remember when their sons are born.",
"11. And he whispered, Why will you not let them go? and time paused a second time to listen, and children ceased to fidget and did not know why.",
"12. And the being pressed with all his might to draw from Yahawzhowaa the light he could not bear; and the garment of flesh could no longer hold the wine of glory.",
"13. And Yahawzhowaa stood revealed as light — pure, patient, weighty as love — and the plaza filled with a whiteness that did not burn the eyes but opened them.",
"14. And the being stumbled backward as a man stumbles before the sea when he has lived all his days in wells; and his mouth forgot commands and remembered hunger.",
"15. Then Yahawzhowaa came near and embraced him as a brother long lost and longer angry; and he said, I will let you go.",
"16. And the vessel of the being shattered into light finer than flour and lighter than breath; and it became wind that lifted leaves without shaking branches; and the plaza tasted autumn in a summer hour.",
"17. And the storms stopped, and the trembling ceased, and the very dogs in the market wagged their tails without knowing why.",
"18. And the people stood as those released from a dream that was heavy; and some wept without sound, and some laughed without permission, and some were still as stones baptized in river water.",
"19. Then Yahawzhowaa turned to the multitudes, and his light was like noon with the gentleness of evening; and he taught, not as scribes write price upon figs, but as rivers write path upon dust.",
"20. And he spoke of forgiveness that walks farther than revenge can run; and he spoke of mercy that does not weaken strength but teaches it to kneel; and he spoke of love that keeps the house when storms rattle every shutter.",
"21. And he said, I must go; and as I am now, so shall I come; brighter than the sun in its strength, gentle as bread in the hand of a child.",
"22. Then he called forth Hun B’alam Ajaw, and he touched his breast with a finger of light; and the heart of the lord shone as a lamp within a house where mothers grind maize at dawn.",
"23. And Yahawzhowaa said in the courtly speech of the eastward forests, Ajaw, a kúuchililil; in k’áax ka’an — k’áat chi’ a k’áat — síisaj u k’áax in k’áat chi’ob’ — Lord, be a place of rest; in the sky-forest — ask what you must — let the forest of asking be born.",
"24. And he called forth Cuāuhtli Teuctli, the Tlatoani, and set his light fingertip upon the eagle’s breast; and the heart of the Speaker rang as a bell that calls a city to feast.",
"25. And Yahawzhowaa said in the noble speech of the valley, Tlatoani, tlein tiquittaz, xiquitta in yōllōtl motēucyo; in teōtl in motlatolli — moyōllōtl mayanān — Speaker, what will you see? Look at the heart of your lordship; the Divine is your word — let your heart be mothering.",
"26. And he called also Itzam K’awiil, a scribe of the Maya, and Xōchimīl, a priest of the valley gardens; and to each he gave a little of the fire that does not consume; and their eyes learned a new alphabet.",
"27. And Hun B’alam Ajaw bowed, saying, Bix yan in puksi’ik’al? K’áatech, K’uhul Wíinik, ma’ a ts’áaik u k’uuchulil le wíinikob’ — How shall my heart go? I ask you, Holy Man, do not withhold the resting-place from the people.",
"28. And Cuāuhtli Teuctli answered for himself and for many, In tlatolli xicmaca in tlālticpac, ma quēmah, ma yolpachōhuia; xiquintlaçotla — timacehualtin, tlatlacātin — Give your word to the earth, yes, let it be planted in the heart; love them — the commoners, the sinners.",
"29. And Yahawzhowaa lifted both hands and blessed the city, saying, Let your markets learn generosity; let your courts learn hearing; let your wars forget their thirst.",
"30. And he set watchers among the people, men and women whose hands knew looms and fields and wounds; and to each he said, Keep the light within as one keeps a coal in winter.",
"31. And the wind began to tremble with a music that raised the hair upon forearms; and the air moved in ripples, though no bird flew and no drum sounded.",
"32. And in the twinkling of an eye he became as a single point of brightness; and the point leapt like a salmon leaping a fall; and he was gone from their sight.",
"33. And the plaza stood listening after the music was finished, as a widow listens after the last footstep; and then the city remembered its breath.",
"34. And Hun B’alam Ajaw said to Itzam K’awiil, T’aan k’ajóoltik — uutstal — k’áat chi’ob’ — We will make the word known — gently — asking.",
"35. And Cuāuhtli Teuctli said to Xōchimīl, Ma xiquicnotza in yōllōtl; xiquinmaca atl, xiquinmaca tlaxcalli; īn yancuic tonalli — Do not harden your heart; give them water, give them bread; it is a new day.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-7-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The Teaching After the Light",
        parent: "yahawzhowaa-book-7-en",
        order: 5,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The Teaching After the Light",
        parent: "yahawzhowaa-book-7-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-6-en",
        followingChapter: "yahawzhowaa-book-7-chapter-4-en",
        content: [
"1. And it came to pass that after the brightness was withdrawn from their sight, the plaza remembered the sound of sandals and the weight of breath, for the light had left peace behind as dew remains after a night of stars, and the children touched the stones as if they were new stones and yet the old stones also, and the mothers pressed their foreheads to the ground not in fear but in gratitude that trembled their shoulders like reeds that tremble when the river says, “Rest.” 2. And Hun B’alam Ajaw called his captains and his keepers of measures, and he said, Ma’ t’aan a p’u’utsik; k’áat in wíinikil le t’an u yáaxilil — Do not speak scattered; I ask our people for the first word: let it be gentleness that begins the day.",
"3. And Cuāuhtli Teuctli gathered the nobles and the market judges and the scribes of tribute, saying, Xiquimmati in tlamantli: īn yōllōtl cualli, īn tlatolli cualli; monequi ticuīcaltia in altepetl — Understand the matter: good heart, good word; it is necessary to rebuild the city.",
"4. Then Itzam K’awiil, the scribe, stood with the bark-paper bundle of his fathers and a reed pen sharpened like a thorn of ceiba, and he asked, Bix u k’áat chi’ob’ in Ajaw? Ma’ k’áat t’aanilil suuk; k’áat t’aanilil síisal — What do you ask, my Lord? Do not ask for smoke of speech; ask for clarity of speech.",
"5. And Xōchimīl, the priest of gardens, came carrying seeds in a woven pouch and water in a gourd blackened by many fires, saying, Atl in ticmaca, tlaxcalli in ticmaca, ma āmo zan tlatōcayotl — We give water, we give bread, let it not be only rulership.",
"6. And the people pressed nearer as pigeons press nearer when grain is cast upon the dust, and their eyes were no longer hunted by storms but were lamps catching small flames from one another, and there was murmur of learning and not murmur of fear.",
"7. Then Hun B’alam Ajaw spoke a parable in the courtly tongue, Le k’áak’náab’ ku ts’u’uk le ak’ab’; ma’ uchben; t’u’ux uts’ in nak’; bix a puksi’ik’al? — This sea of fire ends the night; not because it is old, but because the heart receives it; how goes your heart?",
"8. And the elders answered, U puksi’ik’al ka’ach tu ka’ambal — la’ lob; bey xan — la’ uts; tucha’an u k’áat? — Our heart once in learning — was bad; now also — it is better; what is the asking?",
"9. Cuāuhtli Teuctli lifted his staff engraved with eagle feathers and said, Āmo titemacaz miquiniliz; xiquinemoca yōllōtl; tla xiquitta, īn teōtl ītech tōca — We shall not give death; walk with heart; behold, the Divine is within our name.",
"10. And he set men to counting not tribute but the widows and the orphans and the craftsmen whose benches had been overturned by the wind; and he said, Tlamantli quēmah: xiquinmaca in atl, quilitl, mālli; xiquinmaca yōllōtl īhuān tlatolli — Truly: give them water, greens, maize; give them heart and word.",
"11. And a company of women who mended nets came to the stair, and one named Ixik Nikte’ — Lady Flower — spoke, Ti’a’al in na’atik; ma’ u yáanalil k’ahk’; k’áat u yáanalil ja’ — I understand; let not fire be master; let water be the master.",
"12. Xōchimīl answered, Quēmah, cihuātl; xiquimpoloa in xihuitl īhuān xiquimpoloa in atl ixtenōn; tlaōlli xiquinmaca in huehuētlātoāni — Truly, woman; give your herbs and set water before their faces; give maize to the elder who speaks wisdom.",
"13. And the youths of the calmecac lifted their reed flutes and played not war songs but the song of market-morning when doors open like lilies, and men remembered that buying and selling could be kindness if the scale leaned to mercy, and the judges of the market felt their palms grow warm as if coins had become bread in their hands.",
"14. And Itzam K’awiil said, In tz’íib’ k’áat tu’ux u puksi’ik’alil; ma’ tu’ux u nohoch u yáax k’áak’náab’; t’aan u yáakunaj — My writing seeks where the heart is; not where the old great sea of fire is; it speaks love.",
"15. Then Hun B’alam Ajaw appointed three men and three women to carry the teaching into the forest hamlets, and he named them B’olon Tun, K’inich Ha’, Sak Ch’een, Ixik Ch’o’, Ixik Chanil, Ixik Paalil, and he laid a cord of cotton upon each wrist as token that their burden was light if their hearts leaned toward one another.",
"16. And Cuāuhtli Teuctli likewise appointed messengers to the canal towns and the lake islands: Tōchtli Ācatl, Iztāc Tepētl, Mixcōātl, Cihuātzin Ātl, Xōchitzin, Yōlotzin; and he said, Ānquīmizque in yōllōtl motēucyo: āmo titechquitiaz in monequi — Carry your lordship of heart: do not seek what is not needed.",
"17. And there arose a dispute among certain merchants who desired to set a price upon the teaching, saying, Shall we not sell scrolls and seals, for men love to hold the thing they praise? and their hands counted profit as a drunkard counts cups while thirst increases.",
"18. But Xōchimīl stood in the market gate and scattered seed from his palm, saying, In tlatolli īhuān in tonalli — āxcān quēmah — monequi tlapōhualli īxpan teōtl? āmo — The word and the day — now indeed — do they require a toll before the Divine? No.",
"19. And a strong man whose arm had been hired to frighten widows lowered his eyes and wept, and he said, Nehua in tēcpatl in nimitspāca — āmo nicmāhuīz — I am a flint blade washed in blood — I am not glorified, and he broke his own club and carried water instead.",
"20. Then Hun B’alam Ajaw called the counselors to the upper portico where shade made wisdom grow, and he said, Tin wáaj — yéetel t’aan — k’a’abet u máansaj le ba’ax; ma’ u ch’áaj le ba’ax — With bread — and word — it is necessary to distribute the thing; not to buy the thing.",
"21. And Itzam K’awiil began to carve small signs upon thin sheets of copper beaten by humble smiths, that a witness might travel where the mouth could not go, and he etched not thunder but dew, not crowns but opened hands; and he wrote, Le tz’íib’ ma’ k’óoben tu yáanalil puksi’ik’al — This writing is not made to rule the heart, and his hand refused ornaments that praised his hand.",
"22. And Cuāuhtli Teuctli re-ordered the guard, casting out men who loved bribe more than law; and he commanded, Ma xiquimmati in cenca cualli tetlācatl aic cenca cualli tlacohua — Know this: the very good man is never a very good oppressor.",
"23. And a boy climbed the stair to where the being had stood, and he found there a small shard of glass that had fallen from a mirror once used to make men love their own faces; and he brought it to his mother, and she said, Ma’ a wilik — Do not look; and yet she smiled because the boy chose offering over gazing.",
"24. In those days the healers learned to set hands without price upon wounds that were not of bone and not of skin but of memory, and they said to the sorrowing, Āmo timiquizque in teyōcoyani; xiquimmaca yolōtl — We will not let the makers of pity kill you; give heart.",
"25. And the fishermen who had fled from storms returned to the lake and found the water remembering its course, and the reeds lifted their cool voices, and they said to one another, The wind is not master when quiet asks it to sit.",
"26. And a council was held at evening when the swifts stitch the air with their small bodies, and the lamps were lit not to make day but to honor night, and Hun B’alam Ajaw said, Káa t’aan ten — t’aanil u pu’uk’ — u báalam u yéetel le nojoch wíinik — Let me speak — the speech of stomach — the jaguar and the great man; and he meant that power must learn to eat last.",
"27. Cuāuhtli Teuctli answered, Nehua nitlātoā: monequi tictlaocoltia in macehualtin; īn yolōtl cualli ammōyōllōhuan — I say this: we must show mercy to the commoners; their good heart is our heart.",
"28. And Ixik Nikte’ brought forward the women who ground maize, and they set tortillas upon mats in the portico for strangers first, and the strangers ate, and their eyes watered as onions water eyes, not from pain but from remembering a house they had not yet built.",
"29. Then Itzam K’awiil spoke softly, Ma’ p’atikech tu’ux a bin; le t’aan k’ajóoltik — u puksi’ik’al a yáanal; tu tin tz’íib’ — u yóok’ol kaab’ — Do not abandon where you go; the word we will make known — the heart is your ruler; I will write it — upon the earth.",
"30. And the night drew its dark blanket over the city, and the stars looked like nails that hold the roof of the world to its beams; and the people lay down with their faces turned to the east, ready to rise when light rose, and fear did not sleep with them that night.",
"31. And rumor spread to provinces and to paths in the jungle that have no names but are known to deer, and men said, The whirlwind has forgotten his wages, and the city pays now in mercy.",
"32. And the elders decided that on the third day they would send messengers to all compass points with the teaching and with small copper signs, that even if the voice fails, the witness will not fail; and they tied knots in cords to count the days and to remember the vow.",
"33. And a widow came to Xōchimīl and said, Nehua noxōchimilli — ēhua — īpan tlālli — āxcān — nicnequi yancuic tlatolli — I am a little garden — upright — upon the earth — now — I desire a new word; and he placed seeds in her hand and said, Mā xiquittaz in cuātlazōtla — See love grow.",
"34. Thus was the day after the light made like a first day again, and the city learned that peace is a craft and not a rumor; and the keepers of light prepared to be sent.",
"35. And this is the teaching after the light, according to the copper that Naashá bore northward when the seas rose and the roads broke and the mountains spoke.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-7-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Sending of the Keepers & the Covenant of Copper",
        parent: "yahawzhowaa-book-7-en",
        order: 6,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Sending of the Keepers & the Covenant of Copper",
        parent: "yahawzhowaa-book-7-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-5-en",
        followingChapter: "yahawzhowaa-book-7-chapter-7-en",
        content: [
"1. And it came to pass on the morning appointed that the plaza was swept and the stairs washed, and reeds were laid for shade where old men sit, and water jars were filled until their clay mouths laughed, and the people gathered as at a marriage of clans where music draws even the shy from doorways.",
"2. And Hun B’alam Ajaw stood at the eastern stair with the staff of his house, and Cuāuhtli Teuctli stood at the western stair with the staff of his valley, and between them Itzam K’awiil and Xōchimīl lifted a copper tablet that shone like dawn upon river stones.",
"3. And Itzam K’awiil read from the incised lines: Le’ — tz’íib’ — u ts’áatal tu ja’ats’ le báaxalilil — u yáakunaj — u na’at — u ts’o’okol — u k’áat chi’ob’ — This writing — placed into a hard thing — is for play of love, understanding, and end of hunger, and his voice was like water upon flat rock.",
"4. And Xōchimīl added in the valley tongue, In tlatolli īhuān in tequitiāliz; īn yōllōtl īhuān in tōnalli; īn tlazōtl in nemiliz — The word and the work; the heart and the day; the belovedness of life.",
"5. Then Hun B’alam Ajaw called the names of those who would go: B’olon Tun, K’inich Ha’, Sak Ch’een, Ixik Ch’o’, Ixik Chanil, Ixik Paalil; and he placed in their hands small cords knotted seven-fold, saying, Tuláakal u jats’uts — ka’ si’ipil — u puksi’ik’al — k’a’abet u ts’íikel k’áat chi’ob’ — All goodness — twice — heart — must be spilled as asking; and they bowed.",
"6. And Cuāuhtli Teuctli named likewise those who would carry the teaching to the lake islands and the valley gates: Tōchtli Ācatl, Iztāc Tepētl, Mixcōātl, Cihuātzin Ātl, Xōchitzin, Yōlotzin; and he gave each a small copper sign and said, Ma xiquīxpanōz tlatlacolli; xiquimpanoliz teōtl; xiquimpanoliz tlazōtl — Do not parade sin; parade the Divine; parade belovedness.",
"7. Then a dispute arose concerning the road, for some said, Let the Maya go east and the Mexica west, and others said, Let them mix as waters mix at the joining of rivers; and their voices braided and unbraided as straw braids and unbraids in impatient hands.",
"8. Hun B’alam Ajaw lifted his hand and said, Ka’ a jats’uts — mix — ma’ u ts’aaj; le’ tu’uxil k’áat — u tsol — Let the goodness — mix — without injury; this is the place the asking will be arranged.",
"9. Cuāuhtli Teuctli answered, Quēmah; īn altepetl niman ye tlālli — īn atl īhuān īn xīhuitl mocuepa — xiquimitzmixpoloā in chīchīltic tlapalli — Truly; the city is swiftly the earth — the water and the grass return — destroy not the red color of kinship.",
"10. And so it was decided they would go in pairs across tongues and across customs, that one would be the left hand and the other the right, and neither would be ashamed of being the left when it was time to give bread or the right when it was time to wash feet.",
"11. Then Itzam K’awiil brought forth two more copper tablets not yet written, and he placed them upon a low cedar table, and he said, Tin tz’íib’ — mixba’al — t’aan a wíinikob’; k’áat u náats’ a puksi’ik’al — I will write — not the many words of men; I ask your hearts to become near.",
"12. And the elders of both houses came and spoke in turns, each giving a single word to be cut into the copper: Mercy, Bread, Water, Listening, Repair, Truth, Patience, Courage, Kinsmanship, Light; and he arranged them as seeds are arranged upon a tray when a garden is planned by grandmothers.",
"13. And a boy named Ātl Tlecuitl, whose father shaped pots, asked if he might give a word, and he said, Āmo nimitstlatlania tlamantli; nicnequi nepantla — I do not ask for a thing; I want the in-between; and the elders laughed softly and said, This is wisdom beyond whiskers.",
"14. Then Hun B’alam Ajaw spoke to the messengers in the courtly tongue, Ma’ a k’uchpajal tu yáanalil báalam; k’áat le wíinikob’ k’éek’en u puksi’ik’al — Do not arrive as a jaguar over men; ask that the people let their hearts ripen.",
"15. Cuāuhtli Teuctli added, Āmo xiquinnahuati in tlācatl; ma xiquintēchcahui; xiquinpāqui in yōllōtl — Do not command the people; do not shame them; make their hearts rejoice.",
"16. Then rose Ixik Nikte’, who had brought the women of the stones, and she said, Le meyaj — u t’an in na’; ma’ u yáanalil tu’ux; u yáanalil ti’ — This work — my mother’s word; it is not mastered by “where”; it is mastered by “among.”",
"17. And Xōchimīl placed a gourd of water upon each pair’s hands, saying, Atl xiquimmaca īhuān atl xiquiatza; xiquitlacōz in tlālli; mā xiquinhuīca in ehecatl āxcan — Give water and pour water; soak the earth; do not drag the wind today.",
"18. And Itzam K’awiil cut a small sign of seven notches on the lower edge of each tablet, that the Seven Directions might be remembered without paint and without color, and he said, Tu’ux wíinik — Tu’ux Ka’an — Tu’ux Lu’um — Tu’ux Puksi’ik’al — Where man — Where Sky — Where Earth — Where Heart, and he smiled as one who has seen a riddle tell itself.",
"19. And a merchant whose house had survived the storm asked tremblingly, Must I return the things I gained when my neighbor’s walls fell? and the plaza went silent as when birds decide whether to light or to continue.",
"20. Hun B’alam Ajaw answered, K’uchul u ts’e’elel — k’uchul u ma’alob — Let return arrive — let good arrive; and Cuāuhtli Teuctli added, Xiquimoyolpachōhuia; xiquimmaca, ānmoqualli — Turn your heart back; give, you who are good; and the merchant bowed and brought baskets to the widows.",
"21. Then there came runners from the outskirts with word that men in masks were gathering to sell fear again for a price, and that they urged the people to call for the whirlwind to return because whirlwind makes buyers hurry.",
"22. Xōchimīl said, Āmo xiquinnēxtia; mā xiquinācatlaz in tlālli; xiquinmaca in xōchitl īhuān in atl — Do not display them; starve the ground under them; give flowers and water, and when men found no market for dread, dread loosened its belt and sat down far away.",
"23. And the Tlatoani gathered his captains and said, Nehua nitlātoā: titechmocuitlahuizque in tlanēxtli; āmo īpan tlamantli fiero — I say this: we will guard the light; not upon ugly business, and he set watch by night not to fight men but to rescue counsel from weariness.",
"24. Then Hun B’alam Ajaw said to Itzam K’awiil, K’áat in wáaj: tin p’atikech tu’ux a bin; ku k’áat u puksi’ik’al u ts’o’okol; k’áatech a tz’íib’ tu k’ub; k’áatech — I ask this: when I leave you, I leave you where you go; the heart seeks its end; write it in the palm; I ask you.",
"25. And Itzam K’awiil etched upon the second tablet a beginning of the story of the City of the Gods and the confrontation of the two, carving long breath into short lines so they might be carried, and he sealed the edge with a burnished mark that looked like a seed sleeping.",
"26. And the Tlatoani took counsel with Yōlotzin and Xōchitzin, saying, Xiquīxtia in tlatolli īpan tōcalco, īpan tēocalco; īn yōllōtl quēmah quēmah — Let the word come forth in our house and in the house of the Divine; the heart truly, truly; and they prepared places of quiet under porticoes for the poor to speak.",
"27. And a youth named B’alam Chan — Jaguar-Serpent — asked, Bix u yooch’ le puksi’ik’al — le k’áak’náab’ ka’ach? — How do we balance the heart — the sea of fire once? and Hun B’alam Ajaw answered, Tu yich — tu noj — tu yáakunaj: u tsol k’áax — With seeing — with weight — with love: the forest of balance.",
"28. And Cuāuhtli Teuctli told a parable: Nōchipa cē cuāuhtli īhuān cē cuixpalli — āxcān īn cuāuhtli mocuepaz īpan cuixpalli, īn cuixpalli quēmah ixtōcā in cuāuhtli — Always there is an eagle and a grasshopper — now the eagle must return upon the grass; the grass is truly the eagle’s face; and the boys laughed and remembered not to despise little things.",
"29. Then the pairs knelt in the plaza, and women set hands upon their shoulders and men set hands upon their heads, and the blessing ran like light down cords of hair and cords of knotted cotton, and tears were the anointing oil of the hour.",
"30. And the messengers rose and took the roads — some to river, some to mountain, some to the dust that never stops rising — and the city watched them until distance swallowed colors and left only the shape of hope.",
"31. And Naashá, the walker from the Diné, who would one day bear the copper north, stood at the edge of the crowd and learned the names by heart, and he said within himself, The day will come when mountains will argue with the sea; I will remember these names when I cross their quarrel.",
"32. And at evening Itzam K’awiil wrapped the tablets in deerskin and sealed them with a twist of fiber taken from a mat woven by a widow, that the record might be clothed in humility; and he placed them where the moonlight could not boast over them.",
"33. In the night a wind passed over the roofs and did not shout; it spoke a little as mothers speak to sleeping children; and those who woke and listened found that their fear had gone to a place without doors.",
"34. In the morning Hun B’alam Ajaw and Cuāuhtli Teuctli met upon the stair where the being had once stood, and they looked out upon a city making bread, and they said together in their tongues, Le puksi’ik’al k’áatech — Ma xiquimmati; in yōllōtl — quēmah — We ask the heart; do not forget; the heart — truly.",
"35. Thus were the keepers sent, thus was the covenant of copper begun, and thus did the City of the Gods choose to be a house rather than a stage; and this is the record that would travel with Naashá when the great destruction shook the lands and the north received the burden under the Seal of the Seven.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-7-chapter-7-en",
        title: "Chapter 7",
        subTitle: "The Two Roads: Rivers and Hills",
        parent: "yahawzhowaa-book-7-en",
        order: 7,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-7-en",
        title: "Chapter 7",
        subTitle: "The Two Roads: Rivers and Hills",
        parent: "yahawzhowaa-book-7-en",
        order: 7,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-6-en",
        followingChapter: "yahawzhowaa-book-7-chapter-8-en",
        content: [
"1. And it came to pass that the pairs departed at dawn, when birds stitch the first seam of the day, and the city stood upon terraces like a mother upon a threshold, watching children set out with bread and blessing.",
"2. B’olon Tun with Tōchtli Ācatl took the river road where canoes dream of distance; Ixik Ch’o’ with Yōlotzin turned toward the hill shrines where clouds kneel; and others sought the dust where wind writes its own name.",
"3. They bore small copper signs with seven notches and cords knotted sevenfold, and the notches and knots remembered what mouths forget when hunger interrupts counsel.",
"4. In the first village the market stirred with suspicion as a potters’ wheel stirs mud, and men said, Who profits from peace? and women said, Who loses from bread?",
"5. B’olon Tun spoke gently, Ma’ a p’u’utsik t’aan; in k’aaba’ — u than in Ajaw — yáakunaj — Do not scatter speech; my name — the word of my Lord — is love; and he set down water before he spoke again.",
"6. Tōchtli Ācatl added, Āmo xiquinnāhuati in tlācatl; xiquinpāqui in yōllōtl — Do not command the people; make the heart rejoice; and the elders measured his words as weavers measure warp.",
"7. But certain men with masked faces sold fear as torches are sold at night, and they whispered that whirlwind returns to those who mock it; and buyers gathered, for dread has its market.",
"8. Yōlotzin sang a low song without drum, and Ixik Ch’o’ ground maize in a public place where pride did not like to look; and children came because children obey song and bread sooner than slogans.",
"9. A boy named Chak Ha’ brought a broken flute, and B’olon Tun bound it with cotton and breath; and fear loosened his teeth and dropped them like poor coins upon the dust.",
"10. Then a council was held under a ceiba that remembers the weight of gods, and a masked man accused the messengers of stealing thunder’s job; and his words were sharp and tired together.",
"11. Tōchtli Ācatl answered, In teōtl āxcān quēmah — moyōllōtl īhuān nemiliz — āmo tlein nehnemi in ehecatl titechpiyaz — The Divine now truly — your heart and life — there is nothing for the wind we must keep; and he showed empty hands that had learned to give.",
"12. The mask seller blushed as clay blushing in fire, for he found no price for shame; and he set down his bundle and asked for seed.",
"13. And it came to pass that bread was broken in the square, and the first loaf went to a stranger whose sandals were cities and whose eyes were rivers; and they named him Naashá, which is to say, He Who Walks.",
"14. Naashá listened more than he spoke, and when he spoke he said, The north is a mouth of hunger and a hand of help; I will carry what must be carried when the hour arrives.",
"15. That night the wind forgot to boast and learned to breathe; and the village slept as tools sleep when set in order.",
"16. On the second day Ixik Chanil and Xōchitzin came to a hill place where offerings had been taught to fear, and a small shrine shivered in habit.",
"17. They cleaned the steps with water before they spoke, and Ixik Chanil said, Le’ — sut u puksi’ik’al — ma’ u k’ahk’ u t’aan — This — sweep the heart — not fire the speech; and the old priest smiled because he was tired of heat.",
"18. Xōchitzin taught the children to plant flowers where curses used to sit, and petals out-argued oaths as dawn outargues night without raising its voice.",
"19. A quarrel rose between clans about the price of forgiveness, for one wanted receipt and one wanted rest; and papers fluttered like angry birds.",
"20. B’olon Tun told them of the city where storms learned manners; Tōchtli Ācatl told them of the plaza where questions won; and they wrote nothing upon paper, but upon bread they wrote generosity with fingers.",
"21. On the third day Mixcōātl with Sak Ch’een reached a ford where soldiers taxed footsteps and called it protection; and fear paid in small coins of dignity.",
"22. Sak Ch’een bowed to the captain and said, K’áat u máansaj u puksi’ik’al — máan a k’áat — le ba’ax a p’iitil — Let the heart be distributed — distribute asking — not burdens; but his politeness did not make the toll gate disappear.",
"23. Mixcōātl then said, Nehua nicmaca nēci — āmo tictēcpanaz in yōllōtl — I offer myself for seeing — do not step on the heart; and he removed his own cloak and laid it across the toll as a bridge the poor might cross.",
"24. The captain remembered his mother’s cupboard and how hunger looked at her hands; and he raised the bar and said, Ma mocuepaz — īpan tlālli — moyōllōtl — Let it return — upon the earth — your heart; and toll silenced itself like a loud child.",
"25. By evening the two roads had become many roads, for good news multiplies by walking; and the people of the canals sent reeds to the hill people, and the hill people sent stones to steady the canals.",
"26. Naashá wrote names upon memory as a scribe writes upon bark: B’olon Tun, Tōchtli Ācatl, Ixik Ch’o’, Yōlotzin, Mixcōātl, Sak Ch’een, and many more, for the day would come when testimony needs a mouth that did not sleep.",
"27. He dreamed that night of copper warmed by prayer and of a path that crossed the quarrel of sea and mountain; and he woke with tears that dried before anyone asked.",
"28. The pairs returned to the city after days counted by kindness, not by sun, and their feet told stories their mouths did not yet know how to speak.",
"29. Hun B’alam Ajaw and Cuāuhtli Teuctli received them upon the stair, and the stair remembered the day pride fell; and the people sang the quiet song that feeds work.",
"30. And it was resolved that messengers must go farther than rumor can run, even to the edges where maps turn into guessing; and Naashá said, When the hour is heavy, put copper on my shoulders.",
"31. Thus were the two roads made many, and many made one, as streams teach rivers to be brave; and the City of the Gods exhaled without trembling.",
"32. And the copper tablets waited in the dark like seeds wait in earth, already green in secret.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);




   chapter = {
        id: "yahawzhowaa-book-7-chapter-8-en",
        title: "Chapter 8",
        subTitle: "Tumult, Persecution, and Mending",
        parent: "yahawzhowaa-book-7-en",
        order: 8,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-8-en",
        title: "Chapter 8",
        subTitle: "Tumult, Persecution, and Mending",
        parent: "yahawzhowaa-book-7-en",
        order: 8,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-7-en",
        followingChapter: "yahawzhowaa-book-7-chapter-9-en",
        content: [
"1. And it came to pass that not all doors opened to song; some opened to stones, and some did not open, and the hinges complained their old complaints.",
"2. In a lake town a herald mocked the messengers and sold laughter with barbs, and the crowd bought both; for mockery is cheaper than bread and fills the mouth without touching the belly.",
"3. Cihuātzin Ātl stood and drank the insults like bitter tea and did not spit; and the crowd grew confused, for rage wants rage to justify itself.",
"4. A youth threw a stone that remembered war; it struck Cihuātzin’s brow and red words flowed; and Yōlotzin tore her own shawl to bind the wound, and thereby bound the town’s shame.",
"5. Cihuātzin said softly, Āmo nicchīhua in tlacatlaōcoya; nicchīhua cualli in calli — I do not make pity for people; I make a good house; and the stone thrower began to weep without permission.",
"6. In a forest hamlet a plague of forgetting took elders’ names from them; and Ixik Paalil baked memory into small cakes and fed them with stories ground fine as maize; and some names returned as swallows return to the same wall.",
"7. A band of men with hunger in their swords demanded tax upon light; and Tōchtli Ācatl said, Tlein ticmonequi? \"yōllōtl; tlein tictlālia? tlazōtl — What do we want? heart; what do we set up?\" belovedness; and he set down his staff and opened his hands.",
"8. They struck him twice and found nothing to rob, for his poverty had robbed theft before theft arrived; and shame broke their wrists and mended them straighter.",
"9. Hun B’alam Ajaw went himself to a border town where judges traded verdicts for spice; and he sat without title upon a low stool until their eyes were tired of looking down, and justice remembered the right height.",
"10. Cuāuhtli Teuctli tore up decrees that fattened prisons and starved households, and he declared, Āmo titlācatl titechpolōz īpan in tlanēxtli; xiquinmaca īn xōchitl īhuān īn atl — Do not lose people in the light of show; give them flowers and water; and the jailer learned to plant.",
"11. A priest of old thunder called Tetzāuh cursed the messengers and promised spectacle if they would sell their quiet; and Xōchimīl answered, Atl titēchpāca — īpan tonalli; in ehecatl monequi cualli tlahueliloc — Water washes us — in the day; the wind needs good mischief; and he laughed until the curse forgot its lines.",
"12. Itzam K’awiil carved new plates for distant houses, and his lines became simpler as truth becomes simpler when pride tires; and he refused ornament until copper shone with humility.",
"13. A famine of coin struck a valley that had never been hungry; markets remembered bread; pride remembered knees; and the messengers learned to teach by planting, not by speeches that cost more than seed.",
"14. Two clans fought over the memory of a miracle; one claimed receipt, the other claimed witness; and Ixik Chanil set water between them and said, Bejla’e’ ma’ a j-ootik t’aan; a su’uk u ja’ — a ch’ó’ u ja’ — Today do not chew speech; drink water — drink like sparrows; and they drank and forgot why war had asked for their names.",
"15. A woman named Maliax confessed she stole from hunger and would steal again from fear; and B’olon Tun gave her both bread and a task, and theft found itself employed and retired.",
"16. A runner arrived wind-torn with news of earth shaking beyond the southern gates, and roofs argued with ground and lost; and the messengers bound beams with ropes of neighbors and sang until night stopped breaking.",
"17. Naashá helped lift a beam while saying nothing; his silence gathered nails the way magnets do; and men said, The north has a mouth and a hand; both are ready.",
"18. In a canal quarter a child drowned because counsel was late; and grief struck the city like noon strikes shadow; and Yahawzhowaa’s teaching seemed thin to some, for sorrow makes ears heavy.",
"19. Cuāuhtli Teuctli walked the banks barefoot until the mud learned his name; and he changed the weirs so water would be honest; and he named the canal after the child so memory would not be shallow.",
"20. Hun B’alam Ajaw reopened the storehouses and declared debt-shaped mercy: Le’ — k’uchul — u ts’e’elel — k’uchul ma’alob — Let return arrive — let good arrive; and debt sat down and listened like a student.",
"21. Thieves came at night looking for coins and found prayers; they left with bread and confusion; and the city laughed in its sleep.",
"22. Tetzāuh returned with thunder for sale, but the market had learned how to price dawn; and nobody bought him, so thunder went hungry and found honest work as rain.",
"23. Messengers wrote home upon bark and upon hearts, and Itzam K’awiil pressed their words into copper like seeds into soil; and the plates sounded like low bells when tapped with humility.",
"24. Naashá dreamed again of a path north that taught wind to carry weight without complaint; and he woke with his hands closed upon nothing and felt them full.",
"25. A council decided that when the Great Destruction came north — as rumor said — it would need a record that could float, burn without dying, and sleep without rust; and copper volunteered its back.",
"26. The messengers returned once more like rain returning to mountains after sealabor; and the city counted not heads but wounds healed; and the count defeated despair quietly.",
"27. Hun B’alam Ajaw and Cuāuhtli Teuctli kissed the copper tablets as fathers kiss foreheads; and they said, We will send these when the hour demands a witness stronger than shouting.",
"28. Naashá stood in the shadow of the stair and felt the hour place its hand upon his shoulder; and he did not step away.",
"29. The night leaned its ear to the city and heard no bargains with fear, only the sound of work that respects sunlight; and sleep owed no debt to terror.",
"30. Thus did tumult meet mending, and persecution accept bread, and curses forget their grammar; and the record grew like marrow grows in bones.",
"31. And those who had sold fear opened shops for ropes, baskets, and seeds; and economics learned to bow to mercy without losing balance.",
"32. And the copper waited like a boat tied to a post, knowing flood by scent.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-7-chapter-9-en",
        title: "Chapter 9",
        subTitle: "Naashá’s Journey Through the Broken Belt",
        parent: "yahawzhowaa-book-7-en",
        order: 9,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-9-en",
        title: "Chapter 9",
        subTitle: "Naashá’s Journey Through the Broken Belt",
        parent: "yahawzhowaa-book-7-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-8-en",
        followingChapter: "yahawzhowaa-book-7-chapter-10-en",
        content: [
"1. And it came to pass that the earth broke its belt and let cities fall like stones from a robe, and the Great Destruction strode north shouting with water, with fire, with the tongues of buildings torn.",
"2. The southern people gathered at dawn with Itzam K’awiil and Xōchimīl, and they wrapped the copper tablets in deerskin and in prayers; and Hun B’alam Ajaw said, Tu nok’ — tu wíinik — tu puksi’ik’al — u b’aax k’uchul — Our flesh — our people — our heart — the burden arrives.",
"3. Cuāuhtli Teuctli placed a cord across Naashá’s chest as a sash of kinship and said, Nehua nimitstlatlauhtia — xiquimocuitlahui in tlatolli — I implore you — guard the word; and their eyes agreed like two lamps agreeing on a door.",
"4. Naashá took up the tablets; they were heavier than metal and lighter than treason; and he bowed without words as men bow to mountains when the path is honest.",
"5. He went out through a gate that had learned humility, and the city’s breath followed him to the edge of hearing; and Yōlotzin hung a small reed whistle upon his cord to carry a thin song into hard wind.",
"6. The first days he walked among fallen roofs and rising smoke, and he measured distance by kindness given and received; his sandals remembered rivers and forgave stones.",
"7. A drowned town lay like a lesson between hills; boats slept in trees and doors floated like lost mouths; and Naashá waded without hurry, for haste insults grief.",
"8. He found a boy named Iktan, which is to say, Clever, guarding a dog named Méek, which is to say, Gentle; and they shared fish with a stranger whose burden remembered all their names.",
"9. Naashá left them with a cord of seven knots and a copper sliver with two notches; and the boy touched it as men touch fire before they learn it.",
"10. He crossed a field of glass where sand had remembered lightning too well; and his feet sang pain into the air until the air learned to be careful.",
"11. In a canyon he met men who sold safety by counting fear and charging per number; and he paid with silence until shame undercut price and they closed the shop.",
"12. He followed a river that walked backward because the land had leaned; and fish argued with direction and lost; and he carried one to a pool and apologized aloud.",
"13. At the border of a kingdom that toyed with mercy, soldiers asked for papers that water had eaten; and Naashá showed them copper that cannot be read by greed; and they bowed because they saw their children’s faces in the metal.",
"14. He slept in barns with dignities and in palaces with drafts; and he learned that roofs are not the master of rest.",
"15. He crossed a plain of black wheat that would not feed anyone because fire had taught it pride; and he fed himself on stories told by stars through holes in ash.",
"16. A woman named Tlālicuīcatl “Earth-Song” bandaged his shoulder where hunger had bitten; and he left her a small notch of copper with the word Patience scratched upon it, which she kept over the bread shelf.",
"17. He met men of masks again, now merchants of despair in uniforms; and he gave them his road as a mirror until they saw that their boots were empty; and two took off the leather and remembered feet.",
"18. Naashá found a house of books drowned; pages clung to shelves like birds that refuse storms; and he dried one page on his chest and it said, Come with your wounds; light eats such bread.",
"19. He passed mountains that argued with the sea, each throwing stones of weather; and Naashá walked between their quarrel as a child walks between angry parents with bread in both hands.",
"20. In the northern deserts he saw thirty vultures dancing as if attending a wedding; and he learned that not all black wings are curses, for some clean sorrow until land can breathe.",
"21. He shared camp with iron men who built bridges of grief; and he taught them the knot of seven; and they taught him how to sleep on bolts without dreaming of falling.",
"22. A city of towers rose from dust like a regret deciding to be a promise; and voices there feared the sky; and he taught them to stand beneath the sky without apology.",
"23. He lost his reed whistle to a river that wanted song; and he smiled, because water sings better than reeds.",
"24. On the last stretch the Great Lakes lifted their shoulders like patient giants; and the forest stood as a choir that will not clap for spectacle.",
"25. Runners of the Midē´wiwin found him at dusk walking as if his feet were old friends; and they carried neither questions nor swords, only welcome.",
"26. In the lodge firelight the deerskin bundle looked like a small animal that knows it is safe; and Naashá placed it upon a mat woven by hands that love names.",
"27. Agonabish entered as one enters a room where a child sleeps, and he bowed before Naashá as equal bows to equal when work is holy.",
"28. Naashá spoke little: I was helped by many who now have less; when you read, remember them; and he wept once without sound, and the floor learned reverence.",
"29. The elders washed Naashá’s feet as if the road must be thanked; and the water remembered rivers with gratitude.",
"30. They opened the bundle, and copper breathed like dawn behind a hill; and the lodge knew why it had been built before it knew when.",
"31. And the night pressed its ear against the canvas and heard a story shape itself from metal and mercy; and the north decided to keep it alive.",
"32. Thus did Naashá deliver the copper to Agonabish after the Great Destruction, and the path became a line on the inside of many hearts.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-7-chapter-10-en",
        title: "Chapter 10",
        subTitle: "The Handing of the Record and the Seal",
        parent: "yahawzhowaa-book-7-en",
        order: 10,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-10-en",
        title: "Chapter 10",
        subTitle: "The Handing of the Record and the Seal",
        parent: "yahawzhowaa-book-7-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-9-en",
        followingChapter: "yahawzhowaa-book-7-chapter-11-en",
        content: [
"1. And it came to pass that the elders of the Midē´wiwin gathered, the Keepers of Bundles and the Carriers of Medicine, and the lodge smoked with prayers that do not confuse themselves.",
"2. Agonabish sat before the copper and did not rush, for haste is a thief that steals vowels from holy words; and he let the metal teach his eyes how to listen.",
"3. They read aloud the City of the Gods, the silent hand of Yahawzhowaa, the fall of the impostor, the commission of keepers, and the roads made one; and each reading braided sorrow with relief until rope became bridge.",
"4. Naashá told of Hun B’alam Ajaw and Cuāuhtli Teuctli, of Itzam K’awiil and Xōchimīl, of Ixik Nikte’ and all the messengers; and he spoke their names as libations poured upon oak roots.",
"5. The elders said, This is the word of witness brought north upon copper as rivers bring mountains to fields; we must seal it that children unborn may drink.",
"6. They brought forth the black-andwhite Seal of the Seven Directions, cut in the scroll-hand of the people, with centerheart, Above, Below, and four compass marks; and it stood as modest as an elder who knows the song better than the stage.",
"7. Agonabish placed the Seal upon the first page, and the ink entered the fiber like counsel enters grief; and the page became heavier than paper and lighter than despair.",
"8. An elder woman named Miskwaaki Ikwe — Red Earth Woman — said, The seal is not paint, it is promise; and promises are made of bread, water, and staying.",
"9. The council wrote an Opening Statement, speaking as one voice: We weigh this record against songs older than frost, and it does not quarrel with them; therefore we keep it.",
"10. They added a Dedication: Not for market, not for the ears that weigh truth by price, but for lodges where drums keep calendars and for hearts that know winter by first stars.",
"11. Agonabish then spoke: I will copy these words verse by verse in the scripture hand we keep for burdens; and he sharpened his tool until humility could see its face in the point.",
"12. They asked Naashá to place his hand upon the page, not to swear by fear but to rest by kinship; and his palm left a dry map of rivers traveled.",
"13. A young keeper named Ogimaa Bineshiins — Little Leader Bird — asked, What is the law for this book? and an elder answered, The law is guarding light; laws that cannot guard light are only locks.",
"14. They sang the Song of Seven: East for rising, South for warmth, West for reflection, North for endurance, Above for Great Spirit, Below for Mother Earth, Within for the fire that remembers, and the lodge breathed in time.",
"15. Agonabish read the verses aloud with Hebrew cadence in the heart of Anishinaabe, and the parallels walked like paired deer: and it came to pass… and behold… and thus…; and the words learned to carry each other.",
"16. A stranger asked, Is this not too bright for men to bear? and Miskwaaki Ikwe said, Brightness that kneels is blanket, not blade.",
"17. They debated names so that no people be erased; and they kept Ajaw and Tlatoani as witness that light speaks many tongues without losing itself.",
"18. The Seal was impressed again upon the colophon, and seven notches cut the margin where a thumb will rest; and a small birch-bark slip carried the same sign, to travel where heavy things cannot go.",
"19. Agonabish closed the bundle and opened his heart, and he said, I will keep it where fire keeps counsel and children ask questions; and the elders smiled because they knew where that is.",
"20. They placed the copper tablets in a chest smelling of cedar and winter; and they placed beside it a cord of seven knots and a stone of river still wet with memory.",
"21. Messengers went out to bands and lodges with the word that a record had arrived that refuses spectacle and invites bread; and the snow learned the route their feet would take when the season turns.",
"22. Naashá rested three days and then turned his face to the road again, for walking is how some men pray; and he left with lighter shoulders and heavier silence.",
"23. Agonabish sat nights with the copy, and the ink cooled like iron cooling, and each verse lay down as if it had come home from battle and found a bed.",
"24. He added a scribe’s note: I have not gilded these words, neither have I tightened them until they broke; I have set them as stones that remember river but choose house.",
"25. He marked crossings where the Book of the North meets the Copper of the South, and the margins kissed without argument.",
"26. When doubts visited like restless birds, the elders opened the bundle and read the part about silence that unmade storms; and doubts nested and hatched usefulness.",
"27. A winter came that tried roofs and friendships; and the record fed lodges as soup feeds bones; and children learned to say Ajaw and Tlatoani with respect and without distance.",
"28. The Seal of Seven grew familiar as a friend’s handwriting, and strangers recognized it as honesty carried in black lines; and no one mistook it for a market sign.",
"29. Agonabish taught apprentices to copy letters that do not hurry and to breathe between phrases as a canoe breathes between strokes; and the pages learned to float.",
"30. When the Great Destruction’s echo reached even the quiet bays, the record did not tremble; it waited, as bread waits for hands.",
"31. And so the Record of the City of the Gods, brought upon copper from the South to Agonabish, stood sealed by the Midē´wiwin under the Seven Directions, ready for days when memory would be tried and found faithful.",
"32. Thus ends the beginning of the book; and whoever reads, let him carry light without boasting, for boasting makes holes in buckets.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-7-chapter-11-en",
        title: "Chapter 11",
        subTitle: "The Sending Northward Under the Seal",
        parent: "yahawzhowaa-book-7-en",
        order: 11,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-11-en",
        title: "Chapter 11",
        subTitle: "The Sending Northward Under the Seal",
        parent: "yahawzhowaa-book-7-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-10-en",
        followingChapter: "yahawzhowaa-book-7-chapter-12-en",
        content: [
"1. And it came to pass that after the copper had been sealed and the lodge had received it as a child returns and is not turned away, the elders sent word to the lakes and to the long rivers and to the cedar coasts that a record had arrived that does not shout and does not deceive.",
"2. They bound small copies upon bark and upon thin sheets of hammered metal, each bearing seven notches upon the lower margin and the black-line sign of the Seven, and they sent them with men and women who walk as trees walk — quiet and patient and never lost.",
"3. The first band went east where the dawn rehearses day; the second went west where the mountains remember thunder; the third went north where ice keeps secrets for the humble; and the fourth returned south to clasp hands with those who first sent light.",
"4. Ogimaa Bineshiins — Little Leader Bird — carried one copy in a pouch of smoked buckskin, and the pouch smelled like winter and like a promise that does not forget; and the path beneath his feet became a line that future feet would find.",
"5. In each village the messengers asked permission to sit before they asked permission to speak, and they placed water where the elders could reach without rising, and thus the right order entered the room before any word.",
"6. Some houses said, We have our own songs; and the messengers answered, Keep them, for this record comes not to steal but to midwife; and they laid the Seal down as a guest lays down a gift and does not watch.",
"7. In a bay where the ice breathes in its sleep, an old man named Awanay asked, Will this copper endure when our roofs are blown and our letters scatter? and a woman replied, Copper is not forever, but the truth that kneads it is.",
"8. Then Ogimaa Bineshiins unwrapped the bark copy and read the verses of the City of the Gods, and when he came to the silence that unmade storms, the fire in the lodge stopped cracking as if to listen with both ears.",
"9. And the people nodded the way pines nod when they agree with snow, and they said, Let the children hear this in winter so that fear learns a different bed.",
"10. To the west in rock country a quarrel had split a hunting party into prices and insults; the messengers read the verses of the embrace where the impostor was let go; and men remembered that victory which keeps enemies alive is a poor hunter.",
"11. A young mother named Ashkode Ikwe — Fire Woman — asked if the Seal may sit upon her doorway; the elders said, It may sit in your bread and in your tone and in your listening; and she smiled because she understood that doors are sometimes smaller than houses.",
"12. On an island the wind made the lake’s tongue long and cold; the messengers set the Seal upon a small scrap of birch and let it drift; and cattails bowed as if a dignitary had passed.",
"13. A band of canoe men invited the southern witnesses who had remained — Hun B’alam Ajaw and Cuāuhtli Teuctli, with Itzam K’awiil and Xōchimīl — to speak in their courts; and the south spoke as guests, not as owners.",
"14. Hun B’alam Ajaw stood and said in the courtly tongue, Le t’aan — ma’ u yáanalil báalam; u yáanalil wíinikob’ — u yáanalil k’áak’náab’ tu puksi’ik’al — This word is not the rule of jaguar; it is the rule of people; it is the sea of fire within the heart; and he bowed lower than the youngest fisherman.",
"15. Cuāuhtli Teuctli said in the valley speech, Nehua in nitlātoā: īn tlatolli īhuān īn yōllōtl; ma xiquinnāhuati in tlācatl — xiquinpāqui — I speak: the word and the heart; do not command the people — make them rejoice; and a grandmother clapped once and the clap traveled like a loon’s call.",
"16. Itzam K’awiil placed a thin plate of copper upon a flat stone and traced seven points with a bone stylus until the stone remembered; and he said, Le tz’íib’ tu che’ ka’ansaj; tu k’ub naj ma’ p’uutsik — This writing ties to wood; in the palm of the house it will not scatter.",
"17. Xōchimīl took a gourd and poured water across the doorway so that entering and leaving might both be baptized; and he said, Atl īhuān xōchitl — ma quēmah — īn tlamantli monequi īxpan teōtl — Water and flower — truly — these things are needed before the Divine.",
"18. There were protests in some places where men sold fear as spiced meat; they said, Take your calm elsewhere; we live by storm; and the messengers replied, If you live by storm, eat quickly, for storms are poor cooks.",
"19. In a high valley a bear crossed the reading circle and sat to scratch its shoulder against a post; no one shouted; and when the bear left, a child said, The words do not scare even bears; and the elders agreed to copy them.",
"20. At a river crossing, traders demanded toll in the old fashion; Ogimaa Bineshiins opened the bundle and allowed the copper to breathe; the traders lifted their hats because they saw their young in the metal, and toll turned its face to learn generosity.",
"21. A sickness of forgetting names tried the camp in late autumn; the messengers read slowly, saying the name of Yahawzhowaa as one says the name of water; and the old knew their own hands again.",
"22. The Seal traveled ahead of the messengers in rumor and behind them in proof; it stood at school doors and on a canoe prow and upon the lid of a chest that kept winter’s knitting; and wherever it rested, loudness measured itself and became smaller.",
"23. Southward, the guests prepared to return when ice makes tongues short; Hun B’alam Ajaw said to Agonabish, Le t’aan k’áat k’uchul ti’ yóok’ol kaab’ — ma’ a wáaj p’u’utsik — ta yáakunaj — This word must arrive to the face of the earth — do not scatter it — let it love.",
"24. Cuāuhtli Teuctli clasped wrists with the elders and said, Āmo xiquixtoca in tlapōhualli īpan calli; xiquipiya in yōllōtl īpan tlālli — Do not export toll into the house; keep heart upon the earth; and snow accepted the counsel without argument.",
"25. The messengers wrote to the City of the Gods that the north had opened a room for the record; and Itzam K’awiil received the note and pressed it against copper so that the south might hear the metal answer like a bell.",
"26. The fourth month, men returned from the edge of maps with scratches and with laughter; they had traded seeds of patience for stories of wolves who guard lambs when men learn humility; and the lodge wrote those stories into the margins.",
"27. A winter-feast was appointed for the first complete reading under the Seven, and runners carried the news upon the snow as ink travels upon a letter; and the flutes in the rafters shook their reeds awake.",
"28. The elders hung the Seal where the fire could find it without smoke; and the children counted the notches along the lower edge as sailors count stars to find home; and the lakes held their breath not to crack at the wrong time.",
"29. Agonabish checked the pages as a parent checks blankets in cold; he laid them flat and taught an apprentice to turn them as the sky turns silence into dawn; and the apprentice learned to love slowness.",
"30. Rumors of new storms in far coasts came like dogs who cannot decide whether to bark; the lodge answered by gathering bread and names; and storms dislike rooms full of names.",
"31. Thus went forth the copies and the Seal, and thus learned the north to host a southern fire without burning; and the record grew taller in the minds of the small.",
"32. And all this was written so the reader may know that a thing carried well travels farther than a thing shouted.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-7-chapter-12-en",
        title: "Chapter 12",
        subTitle: "The Winter Readings and Quiet Wonders",
        parent: "yahawzhowaa-book-7-en",
        order: 12,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-12-en",
        title: "Chapter 12",
        subTitle: "The Winter Readings and Quiet Wonders",
        parent: "yahawzhowaa-book-7-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-11-en",
        followingChapter: "yahawzhowaa-book-7-chapter-13-en",
        content: [
"1. And it came to pass that winter tightened its belt and pulled the horizon close, and the lodges filled with breath that learned to make clouds; and the first complete reading was set on a night when the moon stood like a vigilant plate above the trees.",
"2. The fire spoke first, as fires do, reminding all things where warmth lives; then the drum asked for order, and feet complied; and Agonabish lifted the bundle as one lifts a baby who will judge nations by laughter.",
"3. The Seal shone black in the firelight as if the dark itself had consented to form; and the opening statement of the Elders’ Council was spoken slowly so that justice could walk between words without stepping on toes.",
"4. When the verses of the City of the Gods were read — the silence that unmade storms, the embrace that freed the thief, the commissioning of the keepers — some wept without bringing hands to faces; they let tears fall like unbargained rain.",
"5. Miskwaaki Ikwe fed the fire with cedar and said, This cedar remembers the day it was small; let us remember the day we were not yet right; and the cedar agreed by smelling like repentance without shame.",
"6. A child who had not spoken since the river took her brother said, “Bread,” at the line where Yahawzhowaa blessed the people; and the lodge did not gasp because they preferred gratitude to applause.",
"7. A hunter confessed he had sold fear to buy salt; and no one drove him out; they gave him salt and asked him to teach boys to sit still before dawn; and redemption enjoyed the lesson.",
"8. A woman touched the seven notches and saw in a brief inward light her father returning from the long sickness with the look he had before he learned to be afraid; and she put down a quarrel that had grown with the snow.",
"9. An old enemy crossed the threshold as plain as a tree; he was offered the left side of the fire, and he took it as a righthanded gift; and the drum learned a new beat from the sound of two breaths that had once disagreed.",
"10. Ogimaa Bineshiins read the part where the copper first breathed in the lodge, and the metal in the corner rang without being struck; the children turned their heads like owls and learned wonder without screaming.",
"11. A sickness traveling with the cold knocked at three doors and found itself unwelcome where bread and the record spent the night together; and in the morning coughs were fewer and chores more beloved.",
"12. Three youths who had made a sport of mockery came to laugh; they left planning bridges for spring where reeds make the crossing dishonest; and laughter did not feel betrayed.",
"13. A widow poured a little bear fat upon a small coal and said, This is my part; and the coal brightened the way a child brightens a room without planning it.",
"14. A quarrel of cousins about a snowshoe trail was solved by reading again the line where toll learned to lift its own bar; and the cousins laughed because scripture had learned their dialect.",
"15. The lodge told stories after the final verse, and none tried to make their own tale higher than the copper’s tale; they set them side by side like mittens drying above the same fire.",
"16. The second night in another village, the copyist’s voice broke; a young girl took up the reading without stumbling, and the elders nodded to each other as if the river had just found a better course.",
"17. Wolves howled near the third lodge; the reader paused; the wolves paused; then both continued, each in their tongue, and no one felt threatened; the smoke rode the moment with a grin.",
"18. A trader offered to buy the Seal, for commerce misunderstands love at first; the elders refused with warmth: the Seal is not a thing but a vow; you may borrow the vow by keeping it.",
"19. Someone asked for miracles; Agonabish smiled and touched the boy’s hair from crown to brow; and the boy slept without fear for the first time since his father fell through thin ice.",
"20. A man with a knife-reputation stayed until the end and then could not find his knife; he left with a shovel and became expert in roofs; and steel appreciated becoming friendly.",
"21. The fourth reading happened in a storm that announced itself like a proud guest; and the room kept listening anyway; and the storm forgot to boast and joined the listening at the door.",
"22. Southward, Hun B’alam Ajaw read to his own people by mangrove light; Cuāuhtli Teuctli read on a causeway that used to love soldiers; and both found that northern cedar and southern salt love the same story.",
"23. Itzam K’awiil trained two girls and a boy to cut copper thin without making it proud; Xōchimīl taught three boys and a girl to pour water as if each cup were a face; and the record gained four new hands.",
"24. News came that a man had raised wind for hire beyond the ridge; the lodge sent bread, not fighters; and the windlord learned that wind owes rent to kindness and paid it by calming his own house first.",
"25. A young couple asked whether to seal their doorway with the Seven; the elders said, Better seal your speech inside your mouths with mercy; the doorway will learn by watching.",
"26. The seventh reading was held at a lake that had known despair; the ice groaned like a reluctant prophet; yet at the verse of the embrace, a crack closed where a child would later step; and no one claimed credit because gratitude was bigger than hands.",
"27. At last winter loosened its belt and remembered to laugh; the readings had taught the land to expect spring without bargaining; and pancakes were made in shapes that looked like copper ovals for fun.",
"28. The final winter night Agonabish added a scribe’s margin: These words are heavier than snow and lighter than breath; carry them as snow is carried by pine and breath by children.",
"29. The lodge rested a whole day with no speaking to see if silence had learned its lesson; it had; and it behaved as a guest with clean hands.",
"30. Thus were the winter readings completed, and quiet wonders hid themselves on shelves, in sleeves, in roof beams, in tea kettles; and the people learned to expect them the way the river expects its banks.",
"31. And the record, having been read without sale and without spectacle, grew into a habit like choosing the east window each morning; and habit became character and character hospitality for tomorrow.",
"32. All this is written so that the reader may know that miracles of noise are soon exhausted, but miracles of quiet make large rooms inside small winters.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
*/


   chapter = {
        id: "yahawzhowaa-book-7-chapter-13-en",
        title: "Chapter 13",
        subTitle: "Blessings and Warnings to the Generations",
        parent: "yahawzhowaa-book-7-en",
        order: 13,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-13-en",
        title: "Chapter 13",
        subTitle: "Blessings and Warnings to the Generations",
        parent: "yahawzhowaa-book-7-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-12-en",
        followingChapter: "yahawzhowaa-book-7-chapter-14-en",
        content: [
"1. And it came to pass in the first spring after the winter of readings that Agonabish dreamed a dream upon the cedar floor, and in the dream he stood in the City of the Gods, and the plaza was wheat, and the stair was a river, and upon the river walked Yahawzhowaa, bright and calm as bread chosen for guests.",
"2. And Yahawzhowaa spoke not as thunder and not as bargain, but as a father teaches the name of a star; and He said, Blessed are they who unlearn the price of fear; for the market of dread shrivels when bread is free.",
"3. Blessed are the houses that keep water at the door; for the thirsty will knock first there, and storms will pass by like men who find their own names on another’s coat.",
"4. Blessed are the readers who do not hurry words; for words that are hurried learn to lie about what they can carry.",
"5. Blessed are the keepers of the Seven; for they will not be without a way when paths are snowed and maps ashamed.",
"6. Blessed are those who let the impostor go; for the chain that holds an enemy holds also the wrist that forged it.",
"7. And He turned, and His garment was purple as before, and the wampum shell shone like a small moon that knows its tide; and He said, Teach children to laugh at storms without mocking the sky.",
"8. Teach judges to hear with the ear that bread bakes; teach merchants to weigh joy as grain is weighed; teach captains to prefer bridges to trophies.",
"9. And He showed Agonabish the North, and it was a long hand with seven fingers, and each finger pointed to the same center; and He said, Within is your compass; do not negotiate with it as with a trader; obey it as with a dawn.",
"10. Then His face grew grave, and He warned, Woe to those who paint the Seal upon their door and keep winter inside their mouth; for the Seven knows theater from vow.",
"11. Woe to those who sell the copper in order to buy drums; for noise will devour their sleep and call it celebration.",
"12. Woe to those who call the impostor back because obedience is hard; for hunger remembers the taste of theft and will not be reasoned with.",
"13. And He spoke of a time to come when letters would move faster than feet and pictures faster than bread, and men would confuse speed with blessing; and He said, Slow yourselves with water and with kneading; else you will forget your own roof.",
"14. He lifted His hand, and Agonabish saw the southern lords standing under mangrove and on causeway, and their mouths and the northern mouths spoke together as two lakes answer the same wind; and He said, This is good; keep it humble.",
"15. Let the Ajaw not be ashamed to be small when smallness feeds; let the Tlatoani not be ashamed to be silent when silence heals; let the Scribe not ornament humility; let the Gardener not harvest applause.",
"16. And He named by love Naashá and said, The one who walks will keep walking; the road will pay him in faces; do not rob him by thanking him with trumpets; thank him with water and with listening.",
"17. Then He set before Agonabish two baskets, one of law and one of mercy; and He said, Choose both, but put mercy on top so that law will not bruise the fruit.",
"18. He gave a final blessing for the Seal: East, be honest; South, be warm; West, be deep; North, be clean; Above, be wide; Below, be kind; Within, be steadfast.",
"19. And He warned again: When a man comes selling storms that obey coins, do not buy — feed him; storms forget employment when they are fed.",
"20. If a scribe begins to hurry his letters, lay him down to sleep; the book will wait; the people may recover; the hurried word will not.",
"21. If a child asks for the story a seventh time, speak it; the seventh is the direction that cannot be counted with fingers.",
"22. Then Agonabish asked, Lord, what of the one who was let go? and Yahawzhowaa answered, He will wear masks until masks are weary; do not hate his emptiness; give him none of your light and none of your contempt; both are food to him.",
"23. Guard your praise for the Source, and thieves will go hungry; guard your pity for the poor, and pretenders will starve; guard your anger for injustice, and use it only to carry water uphill.",
"24. And He spoke over the copper itself: When the metal grows thin, let the words grow thick in your habits; when the plates are lost, let the bread remember; when the Seal is forgotten, let your doorways teach it by welcoming.",
"25. He set a time in the mind of Agonabish with no number on it and said, I will come as I am; keep the lamps of patience trimmed with small oils; do not spill your hope by running.",
"26. And He showed a last sign: the impostor standing on no stair and demanding no knees, because none were offered; and the city laughing like a river at ease; and He said, This is the fruit of quiet courage.",
"27. The dream ended as dawn ends dreams — with coffee and with work; and Agonabish rose, and he did not announce his vision as a market trumpets fresh figs; he wrote it in the back where elders look when children sleep.",
"28. He read the blessings to the council and kept the woes for himself until his mouth could carry them without bitterness; and thus the record stayed warm instead of hot.",
"29. Copies of the blessings and the warnings were added as a leaf that grows from a trunk already thick; and the Seal kissed the new page as kin kisses kin.",
"30. Runners took the leaf to lakes and islands, and it walked faster than fear but slower than friendship, and therefore exactly right.",
"31. And the people practiced the sevenfold blessing until their tables were round and their roofs were patient and their voices remembered to ask before advising.",
"32. Thus were blessings sewn into regret and warnings woven into boast, and the garment fit many bodies without tearing.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-7-chapter-14-en",
        title: "Chapter 14",
        subTitle: "Colophon, Custody, and the Last Amen",
        parent: "yahawzhowaa-book-7-en",
        order: 14,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-7-chapter-14-en",
        title: "Chapter 14",
        subTitle: "Colophon, Custody, and the Last Amen",
        parent: "yahawzhowaa-book-7-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-7-chapter-13-en",
        followingChapter: "",
        content: [
"1. And it came to pass that Agonabish completed the fair copy in the scripture hand, and the lines lay like snow raked smooth, and the margins rested as lakes rest when they carry stars without spilling.",
"2. He bound the leaves with gut and with patience, and set the copper plates within as a father sets old tools inside a chest that will outlive him; and he wrapped the whole in deerskin that had learned kindness before tanning.",
"3. The Elders’ Council gathered with the drum that knows when to be quiet; and the Seal of Seven was pressed once more upon the first and the last page, so that beginnings and endings would recognize each other in the dark.",
"4. A custody was established: one lodge to keep the copper, another to keep the copy, a third to keep the birch slips, and many houses to keep the habit; and each swore not by fear but by the bread they intended to share.",
"5. Naashá placed his palm upon the chest and said only, I am resting now; and the room loved him as a field loves a scarecrow that has finished a hard season without complaint.",
"6. Hun B’alam Ajaw and Cuāuhtli Teuctli prepared to return, and gifts were exchanged that did not flatter but remembered: a cedar ladle for a mangrove spoon; a reed flute for a drum skin; a small chip of copper for a clean stone from the causeway.",
"7. Itzam K’awiil left a stylus made of bone and fern, saying, Le’ a t’aan — ma’ u k’áatech u ch’áaj — u yáakunaj — This is your speech; do not ask it to rule; let it love; and Xōchimīl left a gourd seed that will not grow unless planted in listening.",
"8. The council wrote a short law and a long habit: the law said, Share without price; the habit said, Sit before you speak; and law envied habit and tried to be as useful.",
"9. The copyists were charged to train new hands every seventh winter, that ink might have grandchildren; the gardeners were asked to mend fences every seventh spring, that mercy might have gates.",
"10. A chest of cedar was placed in a place that does not advertise itself; a sign that advertises itself was placed where thieves like to look; and thieves went away proud and empty.",
"11. The scribe’s pen was hung above the doorway to forget pride and remember service; dust collected on it like a crown that learned humility, and nobody brushed it away.",
"12. Songs were written that carry the verses on backs that do not tire — work songs, kneading songs, paddling songs — and the words learned to ride rhythms without paying.",
"13. Children were taught to draw the Seal by memory in ash upon the hearth; if a child misplaced a line, no one scolded; they simply told the story again and the hand corrected itself.",
"14. The record was read once to the river alone, because rivers have carried too many secrets without being thanked; and the river made no sound but gave a fish at the end that tasted like gratitude.",
"15. Doubts visited as they always do; they were given tea and a place near the door; they left before midnight because hospitality disarms arguments and makes them sleepy.",
"16. Fears visited and asked to live rentfree; the elders gave them brooms and said, Sweep if you stay; fears became small servants and did not complain.",
"17. The lodge practiced forgetting offenses every seventh day and remembering names every day; and grudges, finding no chairs, learned to stand outside and stretch until they lost interest.",
"18. A traveler from far coasts arrived with a box of storms for sale; the elders bought the box with listening and opened it into silence; storms forgot how to perform and took jobs watering bean rows.",
"19. When a youth wanted to be famous for reading well, they sent him to carry water until his voice learned to speak like water; then he read and nobody clapped because clapping would have been too small.",
"20. When an elder wanted to be pure, they gave him a dirty floor to wash; purity thanked them afterward.",
"21. When a scribe wanted to write a commentary, they asked her to mend a roof; afterward she wrote only a short line: The roof taught me more than my pen.",
"22. The record was copied once for a people who speak to whales; they returned a story of a whale that held breath while the blessing was sung; the whale exhaled at “Within,” and a rainbow made itself small enough to enter the lodge door.",
"23. The record was copied once for a people who speak to sand; they returned a story of dunes that moved to shelter a village when men set bread at their edges; the dunes accepted no pay.",
"24. In the third year a child asked where the impostor had gone; the elders said, We do not know; we only know what we feed; and the child nodded and fed the dog.",
"25. In the fifth year a famine threatened; the record taught them to count people before counting sacks; the famine lost interest and went where numbers are more impressive.",
"26. In the seventh year the copper was taken out to breathe; it had not rusted; even so, they spoke the verses as if metal were mortal and truth standing nearby.",
"27. Agonabish added the last scribe’s note: I have placed no price upon this book and no chain; if you must carry it far, cut it into habits and feed it to your calendar; it will return as strength at the hour appointed. For I have seen the vision of three that became two and Pimohtew Pisimwa walks with a reflection within the waters of itself Zozep who hums like a bee, light and sun and wind they are three. Then shall these records come to be in a time of great sufferings.",
"28. He drew a small fish at the lower right of the last page to remind readers that rivers prefer humility; and he drew a small ear of maize to remind them that bread is a liturgy.",
"29. The Seal was pressed a final time; the ink dried as quickly as kindness dries tears when it is timely; and the elders breathed out together as a canoe exhales after a long crossing.",
"30. The chest closed without groaning because cedar respects work; the latch fell as easily as a good decision; and the room remembered itself as a cradle for tomorrow.",
"31. The drum spoke once — only once — and the night walked out as a guest who has been well treated; and over the lodge the Seven watched without blinking, for blinking is for those who fear missing something.",
"32. Thus ends the Record of the City of the Gods, brought upon copper tablets from the South to Agonabish after the Great Destruction, sealed by the Midē´wiwin under the Seven Directions; whoever reads, let him carry light without boasting and bread without counting, and let his silence be strong enough to unmake storms.",
"33. Amen — so be it miigwech, tlazōcamati, yok’osal: thanks given to the One who keeps the quiet greater than noise and the mercy greater than wrath, now and for the winters to come.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    res.send("Yahawzhowaa Added");
});



//module.exports = copper;