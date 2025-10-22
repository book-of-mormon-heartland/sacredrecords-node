import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function async(req, res) {
    let book = {};
    let chapter = {};
/*

    book = {
        id: "yahawzhowaa-book-8-en",
        title: "Book Eight",
        subTitle: "Sky-Woman and the First Garden",
        image: "",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-eight-171x214.jpg",  
        thumbnailTitle: "The First Garden",
        Description: "",
        priceText: "Subscription",
        price: 9.95,
        isParent: false,
        hasChildBooks: false,
        order: 9,
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
        id: "yahawzhowaa-book-8-chapter-intro-en",
        title: "Intro",
        subTitle: "An Olmec Record, whom the Midē´wiwin call Giiwedinong Anishinaabeg. Brought to Agonabish and Abridged upon the Red Tablets in the Latter Days of His Life",
        parent: "yahawzhowaa-book-8-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-intro-en",
        title: "Intro",
        subTitle: "An Olmec Record, whom the Midē´wiwin call Giiwedinong Anishinaabeg. Brought to Agonabish and Abridged upon the Red Tablets in the Latter Days of His Life",
        parent: "yahawzhowaa-book-8-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-8-chapter-1-en",
        content: [
"1. A record of the elders of the south concerning the first garden upon Zhaawanong Gichi-Aki, before the ice and before the counting of days;",
"2. Delivered in fragments by the keepers of the Olmec signs, gathered and abridged by Agonabish, that it might stand with the northern bundles under the Seal of the Seven.",
"3. Telling of Giizhig-Ikwe and Aki-Inini, the covenant, the crossing, the garments of honor, and the northward way to Mikinak Ode’.",
"4. Written for the Children of Light, that they may discern flattery from wisdom, and keep their fire in the night.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-8-chapter-1-en",
        title: "Chapter 1",
        subTitle: "The Garden on Zhaawanong Gichi-Aki",
        parent: "yahawzhowaa-book-8-en",
        order: 2,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-1-en",
        title: "Chapter 1",
        subTitle: "The Garden on Zhaawanong Gichi-Aki",
        parent: "yahawzhowaa-book-8-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-intro-en",
        followingChapter: "yahawzhowaa-book-8-chapter-2-en",
        content: [
"1. And it came to pass, before the freeze and before the tall counting of winters, that the earth knew itself as one land, and men called it Gichi-Aki, the Great Earth; and at the south of that one land lay Zhaawanong Gichi-Aki, the Great Southern Earth, which men now name by other tongues.",
"2. Upon a hill was a garden, and around the hill an expanse stretched barren as a sea without water; and the garden was full though the plain was empty, and the fruit knew neither season nor withholding.",
"3. In that garden dwelt Giizhig-Ikwe, Sky-Woman, and with her Aki-Inini, Earth-Man; and fear had not yet learned to sit within them, nor shame to press its thumb upon their thoughts.",
"4. The light did not set, for that land turned its face long to the sun; and thus they knew no night, nor did the cold lay claim to their breath.",
"5. Messengers came and went as birds between branch and sky, saying, Keep to the garden; do not cross the waste, for beyond the barren reach are steep mountains with trees upon their sides;", 
"6. And if you cross and take of that fruit you shall not return, for the way will fail you, and death — which you do not know — will find you in the going or the coming.",
"7. And they asked, What is death? And the Messengers answered gently, It is the door that will not open again for the body; therefore do not go.",
"8. Now in those days there were others upon the far side, for a being had labored there — one cast down from the brightness — who loved craft and envy;", 
"9. And he wrought vessels of many shapes, coaxing primates toward the likeness of men, seeking a body to rival the Vessel of the Father.",
"10. A covenant was set, that he should not cross the waste nor set foot upon the garden hill; and for this stay of wrath he swore by his hunger to remain.",
"11. But hunger is a liar when it speaks comfort; and the one called Ginebig — the serpent — desired what was not his, and his counsel was flatteries braided like ropes.",
"12. Giizhig-Ikwe lay by a stream that ran from the shoulder of the hill, and the water said nothing harsh to her, for water knew her name.",
"13. Then came Ginebig, his scales blue and white, and the light upon him was a mirror to deceive; and he spoke the soft word that teaches haste.",
"14. He said, Why do you stay in small sweetness when great sweetness waits?", "Behold the mountains beyond the waste, and the trees whose fruit is better than any here.",
"15. And she answered, The Messengers said, Do not cross, for we shall not return; and we do not know death, but they warned us of it.",
"16. And he said, You shall not surely die; I will carry you and bring you back; and your eyes shall be opened, and you shall know all that the Father knows and be as gods in knowing.",
"17. Then he plucked fruit from a nearby tree and pressed it to her palm, saying, Even this is poorer than what lies beyond; come see, and you will return to prove I did not lie.",
"18. And Giizhig-Ikwe, who had never tasted deceit, looked, and did not know the taste of poison that hides in promise.",
"19. Ginebig bent himself and lifted her as a bird lifts its young; and he flew over the waste, and the ground ran like a river beneath them.",
"20. They came to cliffs where trees stood as soldiers stand, and in the branches were houses as nests, and in the houses were many like unto her — men and women — yet not clothed in innocence.",
"21. They wore coverings upon their flesh, and hair grew upon them where hers did not, and the fear upon their faces was a language that had many words.",
"22. The serpent said, Behold, do not mind their fear; take of this fruit; and he gave to her a kind she had not seen, and its taste was sharp as lightning and sweet as stolen honey.",
"23. Then he hastened her with a basket, saying, Gather quickly, for I will return you, and the day is — ",
"24. But in that land there was no day; only his impatience clothed itself as kindness; and he lifted her again and crossed the waste swift as a lie travels.",
"25. When she reached the garden she ran among the trees and found Aki-Inini, and said, Behold what I have found; taste and see that it is desirable above all.",
"26. And he tasted, and his mouth praised before his wisdom spoke; and he said, Where is its tree?",
"27. She said, Across the barren place, upon the steep sides; and he was heavy within, for the warning grew like a drum in his chest.",
"28. He said, We were told we should not return; yet you are returned; who brought you?",
"29. She said, A friend, and he is bright and flies, and he says we shall not die; and there are many like us across the waste.",
"30. Aki-Inini looked upon her and then upon the waist, and the counsel in him was strong yet quiet; and he went with her to the edge.",
"31. And there waited Ginebig, sparkling as river ice; and the man did not yet fear, for fear had not learned his name.",
"32. They mounted the serpent, and he bore them across; and when they came down, many gathered, and their voices were many rivers.",
"33. One cried out in laughter, Behold, they wear no covering; and others laughed and pointed, and shame, which had slept, awoke.",
"34. Then their eyes opened to their nakedness, and their hands knew fields they had not planted; and shame pricked them as thorns.",
"35. They hid behind Ginebig, and he smiled without mercy; and he bore them back, as wolves sometimes carry lambs toward pens, not away.",
"36. They ran among the garden leaves and pressed them to their bodies, and the leaves obeyed their fear but could not quiet it.",
"37. Then the sky sounded as a drum, and light stood down like pillars; and the Messengers came, and with them stood the Father in his strength and the Mothers of Heaven in their compassion.",
"38. They called, Giizhig-Ikwe, Aki-Inini, children, where are you? not as hunters call deer, but as mothers call their own.",
"39. And they found them weeping, and they wrapped them in blankets of warmth that remembered dawn; and the Father said, What has befallen you?",
"40. Giizhig-Ikwe laid her head upon his chest of brightness and told all; and she spoke not to escape blame, but because her mouth had no practice in hiding.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-8-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The Garments of Honor and the Exile from the Hill",
        parent: "yahawzhowaa-book-8-en",
        order: 3,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The Garments of Honor and the Exile from the Hill",
        parent: "yahawzhowaa-book-8-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-1-en",
        followingChapter: "yahawzhowaa-book-8-chapter-3-en",
        content: [
"1. And the Fathers and Mothers heard, and the garden listened also; and the stream at Giizhig-Ikwe’s feet carried her tears carefully, as elders carry infants.",
"2. The Father said, You have trusted a tongue that twists as it speaks; and now you know the sting that waits behind flattery.",
"3. And he called for garments prepared from the first offering of life upon the earth, skins softened by love and marked with a hand of light upon the breast — one for the woman and one for the man.",
"4. He said, These are garments of honor, that your blood — my gift within you — shall be remembered when fear calls your names.",
"5. Then the Mothers of Heaven placed their hands upon Giizhig-Ikwe and Aki- Inini, and the trembling learned to sit; and their shame did not master them as before.",
"6. The Father said, Hear my word: the covenant was broken by him who crossed; those beyond the waste have tasted that breaking and no longer fear my boundary;",
"7. Therefore they will come against you, and this hill will not stand in the day they choose vengeance; you must depart, and I will guide you.",
"8. And he gave into Aki-Inini’s hand a staff of light that shone upon the ground and taught the foot where to fall and when to rest;",
"9. And he said, When you stop, build an altar, and the Messengers shall encamp around you; and no hand shall pluck you while you remember.",
"10. He taught them to bind their fear with breath and to bind their breath with prayer; and he showed them how to hear the stirring of danger in the stillness before wind.",
"11. Then he spoke concerning those across the waste, saying, They are fallen light, not the pure stars you are; they will seek your light to fill their emptiness and will bargain through your children to own your fire.",
"12. Be wise; be separate; give mercy without yielding the coal that keeps you alive.",
"13. And Giizhig-Ikwe asked, Shall we never see this hill again? and the Father set his hand upon the soil, and the soil knew comfort;", 
"14. He said, Hills rise and fall, but keeping is in the heart; the hill is a teaching, not a chain.",
"15. Then the Messengers set a ring around the garden, and the light walked with them; and Ginebig stood far off, hateful and patient.",
"16. Aki-Inini took up the staff, and Giizhig-Ikwe girded the garment close; and their steps began, not as fugitives, but as keepers of a trust.",
"17. And as they crossed the waste by foot, the light upon the ground went before them like a low star; and they did not stumble though the stones desired it.",
"18. At night — when night first learned to visit that land, for the earth was tilting toward the age of ice — the sky leaned nearer, and new cold spoke its first syllables.",
"19. They built an altar where the staff stood still, and bread without yeast learned to be food for sorrow and strength for walking.",
"20. And in their going they saw works of the cast-down one: vessels crafted and recrafted, forms tall and short, fierce and meek, minds quick and dulled;", 
"21. And they turned their faces, for the sorrow was heavy and the envy in those eyes was a net.",
"22. News ran before them like wolves, and hunters of light stalked behind, seeking marriage without vow and children without blessing.",
"23. But the Messengers were a wall, and the wall did not boast; it simply kept.",
"24. In the course of their journey the waters began to withdraw, and the winds learned cruelty; the warmth that bathed the hill grew thin as a widow’s cupboard.",
"25. And the Father spoke again: When the way opens northward, cross; for ice will teach men to count, and counting will teach them humility.",
"26. Then they came at last to the bridge of earth where sea shakes hands with land, and they passed over it singing without drum, for joy does not always need noise.",
"27. Behind them the hunters faltered, for hunger and cold demanded prices pride would not pay;", 
"28. And before them lay the broad breast of the turtle, and upon it a place that would be called Mikinak Ode’, the Turtle’s Heart — a new planting of Eden in a land that learns darkness and day in turn.",
"29. There they rested, and there children were born, and children’s children; and they kept themselves apart, not in cruelty, but in guarding.",
"30. Yet some of the fallen sought them by craft, bending kinship as a bow, to take a share of light by marriage and seed; and victories were not perfect, for mercy is kind and youth is trusting.",
"31. The staff still taught them where to stop, and altars stood as mile-stones for stories; and the Mothers’ blankets kept fear from mastering sleep.",
"32. And there began the age of days, when men first counted the lamps of the night and said, One, and then said, Two; for in that north the light departs and returns, and children learn waiting.",
"33. And Giizhig-Ikwe taught the girls to weave courage into warmth; and Aki-Inini taught the boys to keep fire without boasting;", 
"34. And both taught all the children to hear the difference between a voice that asks and a voice that sells.",
"35. When the first winter came in its fullness they did not perish; for they were light, and light remembers its road through darkness.",
"36. And in the springs the rivers spoke kindly again; and fish agreed to be food; and seed agreed to be bread.",
"37. Then word went southward like a wounded hawk, and the serpent learned that the hill was empty; and rage ate him without giving him strength.",
"38. He walked among his vessels and praised them with flattery; and they grew fierce and thin.",
"39. He sought a body more perfect than before and found none, for covetousness crafts crooked tools.",
"40. And the garden on the hill slept under frost at last, and its streams slept also; and the barren waste wore ice as armor; and the world began to change its name to many lands.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-8-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Olmec Witness & the Abridgment of Agonabish",
        parent: "yahawzhowaa-book-8-en",
        order: 4,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Olmec Witness & the Abridgment of Agonabish",
        parent: "yahawzhowaa-book-8-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-2-en",
        followingChapter: "yahawzhowaa-book-8-chapter-4-en",
        content: [
"1. These things the elders of the south kept in signs upon stone and in cords of memory; and their speech was deep as rivers under jungle shade.",
"2. They told of the first garden and the serpent’s crossing, of the garments of honor and the staff of light, and how the people reached Mikinak Ode’ and learned to count patience.",
"3. And in the days when the seas again spoke loudly and the winds carried cities in their teeth, a man of the south came north, bearing fragments and vows;", 
"4. And he found Agonabish, old in strength and gentle in eye, and placed the record before him as a son sets bread before a father who cannot walk far.",
"5. Agonabish took counsel with the Elders and with the Seal, and he said, This testimony shall stand with the northern records, for it is one fire spoken in many tongues.",
"6. He cut away his own flourishes and left the truth plain, as meat is left plain for the hungry;",
"7. He wrote the names as we have them here: Giizhig-Ikwe and Aki-Inini, Zhaawanong Gichi-Aki and Mikinak Ode’, Ginebig the serpent, and the garments of honor;", 
"8. And he set it among the copper leaves, near to the teaching of silence that unmade storms, that readers might see the kinship of mercies.",
"9. He added only this: that light does not grow by theft, and knowledge that is stolen becomes hunger, not wisdom.",
"10. And he sealed it under the Seven, and the Seven rested upon it without quarrel;",
"11. And he prayed that those who read would know the tone of the Father’s voice and the weight of the Mothers’ blankets.",
"12. He warned of the old craft that returns in modern tongues — the selling of storms, the borrowing of bodies, the praise that tastes like sugar and starves like sand.",
"13. And he blessed those who keep apart without hatred and who join hands without surrender; for both are needed on the road between gardens.",
"14. Then Agonabish set down his stylus, and the cedar box breathed the smell of winter; and the apprentices learned to turn the page slowly, as one turns a child toward the dawn.",
"15. And thus ends the Olmec account as abridged: not to teach fear of serpents, but to teach ears to love the truth that refuses flattery.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-8-chapter-4-en",
        title: "Chapter 4",
        subTitle: "The Southern Exodus North",
        parent: "yahawzhowaa-book-8-en",
        order: 5,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-4-en",
        title: "Chapter 4",
        subTitle: "The Southern Exodus North",
        parent: "yahawzhowaa-book-8-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-3-en",
        followingChapter: "yahawzhowaa-book-8-chapter-5-en",
        content: [
"1. And the ice came upon the southern land, and night pressed its long cloak over Zhaawanong Gichi-Aki, and cold became companion of breath.",
"2. The open stream ran thin and glasslike, and the voices of birds grew small; and the bodies of the people grew weak under the weight of darkness.",
"3. Giizhig-Ikwe and Aki-Inini, wrapped in their garments of honor, gathered their kin and set foot upon the trail that led northward, where the staff of light still shone dimly on the frozen ground.",
"4. The children stumbled over roots and roots stumbled under ice; and each step required prayer to still the body and steel the heart.",
"5. The Messengers walked beside them, unseen yet felt, breathing warmth into the cold and guiding the wavering souls.",
"6. The receding seas marked the path with white ridges and skeletal shallows; and men followed, counting breaths and analyzing music in the crunch of snow.",
"7. Nights lengthened beyond their knowing; and fear became talkable when the silence lasted too long.",
"8. Some fell ill from cold, their fire within dimmed; others spoke of turning back, longing for the hollow garden and the lessons of leaf and stream.",
"9. But the garments of honor glowed by faith, not by warmth, and the staff of light drew them each morning from sleep.",
"10. On the third moon after the first frost, they came to rivers still strong, which spoke of distance and the bones of worlds; and the rivers must be crossed.",
"11. So they built vessels from bark and bones, singing through the crossings as rivers cross centuries without losing voice.",
"12. Their food was lean, and their tongues learned to taste memory instead of spice; yet hope was marrow and hope warmed more than soup.",
"13. Wolves watched from shadows, eyes like frozen faucets; and hunters of fallen light tracked them by their tracks, hoping for union by hunger.",
"14. The Messengers spoke in silent chords: Let mercy reach first, and mercy blunts the grind of fear.",
"15. When wolves came, women sang songs of laughter instead of running, and the wolves, confused by courage, passed on.",
"16. Days became steps, and steps became stories; and women wove their hair into braids that marked each conscientious mile.",
"17. Their wives became blankets; their children, sparks of wilderness; each life knitted into the journey.",
"18. One dawn, Giizhig-Ikwe discovered that snow carried seeds — the old garden’s children pushed through ice and opened toward sky.",
"19. She scooped the first sprout into her palm, and the green was a promise; and she wept without fear, for meaning returned.",
"20. The Exile's trail rose toward the shadow of the north; and at the horizon, wood gave way to stone, and stone gave way to wind-blanc plains.",
"21. Centers of ice met their faces; the staff’s light shuddered but held steady; and Aki-Inini said, This way we walk is more than sorrow — it is keeping alive a fire older than frost.",
"22. Then came a ridge that hummed; upon it stood the first watchers — Mikinak Ode’, the Turtle’s Heart — safe island amid the night sea.",
"23. The Messengers stood on the ridge and bent their heads; and the turtle’s heart opened as a mouth of welcome.",
"24. The children raced downhill, and the earth warmed their steps; and the women stayed to press cloth of blessing into the snow.",
"25. Giizhig-Ikwe and Aki-Inini knelt and built an altar of stones warmed by memory, offering thanks without words, because words were breathless.",
"26. At the base of the Turtle’s Heart, villages grew, and the cold learned to be shared; and nights shortened as songs lengthened.",
"27. And so dawn returned to them a question: What is night but another shape of light, if we choose to stay together?",
"28. They answered in building, in planting, in laughter; and the Exile became legacy, not loss.",
"29. In the years that followed, the staff of light lay across altars as teaching, not tool; and children counted the days finally with counting, not with fear.",
"30. Thus was the southern exodus completed, and in the heart of darkness they located dawn.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-8-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The Departure from the First Garden",
        parent: "yahawzhowaa-book-8-en",
        order: 6,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The Departure from the First Garden",
        parent: "yahawzhowaa-book-8-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-4-en",
        followingChapter: "yahawzhowaa-book-8-chapter-6-en",
        content: [
"1. And it came to pass that the Father spoke upon the wind that loved the hill, and His word entered softly as rain that teaches stone.",
"2. And the Mothers of Heaven wrapped Giizhig-Ikwe and Aki-Inini in blankets that remembered dawn, and comfort stood beside them as a sister.",
"3. The Father said, The covenant is broken by Ginebig who crossed, and the watchers beyond the waste do not fear My boundary; therefore you must rise and go.",
"4. And garments were given of sacred hide, upon each breast a hand of light, that the fallen might fear to touch them, and that the children might know whose breath they carried.",
"5. And a staff was given into the hand of Aki-Inini, and the beam thereof went before their feet like a low star that knows the trail of mercy.",
"6. He commanded that wherever they ceased from walking they should raise stones for an altar, that the Messengers might pitch their tents around their sleep.",
"7. And the Messengers said, Keep bread simple and prayers long, that the road may love you.",
"8. Giizhig-Ikwe gathered fruit in baskets of bark, and she spoke to the stream as to an elder: Remember our steps and tell them gently to the valley.",
"9. Then the Father taught a parable, saying, A garden fenced by wisdom is larger than a plain fenced by pride; choose the fence that keeps your heart whole.",
"10. And they understood, for pride had led Ginebig to leap the boundary and bind himself to hunger.",
"11. They turned from the hill with quiet courage, not as fugitives but as keepers of a vow; and the ground listened to their soles and answered with steadiness.",
"12. The waste lay before them as an emptied sea; heat trembled like a snake without fangs, and distance mocked the thirsty.",
"13. Yet the staff’s beam wrote a bright script upon the dust, and they read it with their feet.",
"14. Children were carried upon hips that did not complain, and elders leaned upon songs that remembered spring.",
"15. The Messengers walked unseen and yet were felt, as warmth is felt in winter before the sun appears.",
"16. Aki-Inini taught a teaching, saying, He who trusts the beam need not see the horizon; obedience shortens deserts.",
"17. And Giizhig-Ikwe added, He who carries another’s fear will drop his own; therefore let us exchange burdens as we walk.",
"18. They passed places where the castdown one had played at making men tall and men small; and sorrow bent their eyes toward prayer.",
"19. A youth faltered and said, Why leave what is lovely? And Sky-Woman answered, Because love follows the voice, not the view.",
"20. They came to a grove where shade was generous; there they built the first altar of exile and broke bread that did not boast.",
"21. A Messenger stood in the hush and spoke, My name is remembered in the silence that holds song; rest, for the road is faithful.",
"22. And they slept without nightmare, for fear had not yet learned their names in the new land.",
"23. At dawn the staff brightened as embers brightened in a hearth; and the people rose like reeds in a river wind.",
"24. A child asked, Where is home? and the Father answered in the heart, Home walks with those who keep My word.",
"25. Toward evening they reached stony country, and the dust gave way to gravel that argued with ankles; yet none stumbled to breaking.",
"26. Giizhig-Ikwe taught the girls to weave grass into bands for feet, and the boys to make shade with cloaks; and skill became liturgy.",
"27. A parable was spoken by Aki-Inini at the second altar: A thirsty man who owns a lake drinks from his hand; therefore keep small cups, and you will never lack.",
"28. And the elders nodded, for small cups fit long marches.",
"29. News of their leaving reached the far trees, and whisperers of the fallen watched from edges, tasting envy like salt.",
"30. But the hand upon the garments warned them back, and they tasted caution like ash.",
"31. Thus did the people set their faces, and the hill grew small behind them without growing less beloved.",
"32. And the record says: Blessed are they who leave beauty for obedience, for beauty follows them as a river follows its source.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-8-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Waters Fall and the Ice Rises",
        parent: "yahawzhowaa-book-8-en",
        order: 7,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Waters Fall and the Ice Rises",
        parent: "yahawzhowaa-book-8-en",
        order: 7,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-5-en",
        followingChapter: "yahawzhowaa-book-8-chapter-7-en",
        content: [
"1. And it came to pass that the sea retreated from its old argument with the land, and white ridges appeared where laughter of waves had been.",
"2. The air sharpened as a new teacher, and breath became a visible prayer.",
"3. The sky clothed itself in curtains of green and red, and the Giiwedinong Anishinaabeg learned new words for wonder.",
"4. Aki-Inini said, Behold, the heavens hang signs as a mother hangs garments to dry; each speaks of change if we will listen.",
"5. The nights lengthened like patience, and children counted stars instead of days.",
"6. In the south, those who loved the serpent found their strength stolen by the cold; their limbs forgot swiftness, their cunning forgot its tongue.",
"7. They sought fire from those they hunted, and found only shame; for borrowed fire burns thin.",
"8. Giizhig-Ikwe taught a parable: The lamp that steals its oil goes out with a boasting flame; the lamp that is filled in quiet burns through the watch.",
"9. And the people said, We shall be filled in quiet.",
"10. Frost wrote its name upon the grasses, and water learned to carry men as stone does; and the rivers slowed to think.",
"11. The staff’s beam grew pale in the bright night, yet it did not fail; for guidance knows how to share its work with stars.",
"12. They sewed skins together with sinew that remembered the chase, and the seams held sermons about patience.",
"13. Hunters brought meat and humility; gatherers brought roots and laughter; and the camp wore both like matched bracelets.",
"14. Wolves walked at a respectful distance, for courage is a tongue that beasts can read.",
"15. The children asked, \"What is darkness?\", and the Mothers answered, \"A blanket that God lends to those who sleep in trust.\"",
"16. And they lay still beneath the long blanket and were not afraid.",
"17. On the third watch of a long night, a fallen band crept near, speaking marriage without vow;",
"18. But the garments of honor brightened, and the Messengers stood like firs in heavy snow; and the coveters forgot their proposals and remembered their feet.",
"19. Aki-Inini spoke at the altar, saying, If fear is a tax collector, pay him nothing; he has no power where gratitude keeps the gate.",
"20. And they sang thanks over stew and ice, and fear found no table.",
"21. A child lost his footing upon clear water and vanished, and the camp cried out; but a Messenger took him by the back of his garment and set him on his mother’s knees; 22. And thus the people learned to test the water with staffs and to tie their children with braided cords of love when the river was glass.",
"23. They came to a valley of white trees that rang when struck; and the elders struck them lightly and said, Even wood wants to be a bell.",
"24. Then Giizhig-Ikwe taught: When cold teaches singing to trees, learn the lesson with your ribs; praise turns winter into bread.",
"25. The south darkened further and grew cruel; and the serpent’s cleverness ate its own tail.",
"26. But to the north the peace of long night entered the bones of the people, and quarrels slept longer than before.",
"27. They fashioned lamps of fat and stone, and the small flames answered big questions without chatter.",
"28. The Messengers spoke: Keep counsel small and deeds steady; the ice respects neither shouting nor sloth.",
"29. And the Giiwedinong Anishinaabeg obeyed and were kept.",
"30. Thus were waters humbled and ice exalted for a time; and the record says that God is Lord of seasons, not seasons lord of God.",
"31. Whoever reads, let him gather warmth with prayer, and prayer with work; for these three are kin.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



    chapter = {
        id: "yahawzhowaa-book-8-chapter-7-en",
        title: "Chapter 7",
        subTitle: "The Passage into the Northern Land",
        parent: "yahawzhowaa-book-8-en",
        order: 8,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-7-en",
        title: "Chapter 7",
        subTitle: "The Passage into the Northern Land",
        parent: "yahawzhowaa-book-8-en",
        order: 8,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-6-en",
        followingChapter: "yahawzhowaa-book-8-chapter-8-en",
        content: [
"1. And it came to pass that the sea retreated from its old argument with the land, and white ridges appeared where laughter of waves had been.",
"2. The air sharpened as a new teacher, and breath became a visible prayer.",
"3. The sky clothed itself in curtains of green and red, and the Giiwedinong Anishinaabeg learned new words for wonder.",
"4. Aki-Inini said, Behold, the heavens hang signs as a mother hangs garments to dry; each speaks of change if we will listen.",
"5. The nights lengthened like patience, and children counted stars instead of days.",
"6. In the south, those who loved the serpent found their strength stolen by the cold; their limbs forgot swiftness, their cunning forgot its tongue.",
"7. They sought fire from those they hunted, and found only shame; for borrowed fire burns thin.",
"8. Giizhig-Ikwe taught a parable: The lamp that steals its oil goes out with a boasting flame; the lamp that is filled in quiet burns through the watch.",
"9. And the people said, We shall be filled in quiet.",
"10. Frost wrote its name upon the grasses, and water learned to carry men as stone does; and the rivers slowed to think.",
"11. The staff’s beam grew pale in the bright night, yet it did not fail; for guidance knows how to share its work with stars.",
"12. They sewed skins together with sinew that remembered the chase, and the seams held sermons about patience.",
"13. Hunters brought meat and humility; gatherers brought roots and laughter; and the camp wore both like matched bracelets.",
"14. Wolves walked at a respectful distance, for courage is a tongue that beasts can read.",
"15. The children asked, \"What is darkness?\", and the Mothers answered, \"A blanket that God lends to those who sleep in trust.\"",
"16. And they lay still beneath the long blanket and were not afraid.",
"17. On the third watch of a long night, a fallen band crept near, speaking marriage without vow;",
"18. But the garments of honor brightened, and the Messengers stood like firs in heavy snow; and the coveters forgot their proposals and remembered their feet.",
"19. Aki-Inini spoke at the altar, saying, If fear is a tax collector, pay him nothing; he has no power where gratitude keeps the gate.",
"20. And they sang thanks over stew and ice, and fear found no table.",
"21. A child lost his footing upon clear water and vanished, and the camp cried out; but a Messenger took him by the back of his garment and set him on his mother’s knees;", 
"22. And thus the people learned to test the water with staffs and to tie their children with braided cords of love when the river was glass.",
"23. They came to a valley of white trees that rang when struck; and the elders struck them lightly and said, Even wood wants to be a bell.",
"24. Then Giizhig-Ikwe taught: When cold teaches singing to trees, learn the lesson with your ribs; praise turns winter into bread.",
"25. The south darkened further and grew cruel; and the serpent’s cleverness ate its own tail.",
"26. But to the north the peace of long night entered the bones of the people, and quarrels slept longer than before.",
"27. They fashioned lamps of fat and stone, and the small flames answered big questions without chatter.",
"28. The Messengers spoke: Keep counsel small and deeds steady; the ice respects neither shouting nor sloth.",
"29. And the Giiwedinong Anishinaabeg obeyed and were kept.",
"30. Thus were waters humbled and ice exalted for a time; and the record says that God is Lord of seasons, not seasons lord of God.",
"31. Whoever reads, let him gather warmth with prayer, and prayer with work; for these three are kin.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);




   chapter = {
        id: "yahawzhowaa-book-8-chapter-8-en",
        title: "Chapter 8",
        subTitle: "The Rest in the Land of Long Night",
        parent: "yahawzhowaa-book-8-en",
        order: 9,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-8-en",
        title: "Chapter 8",
        subTitle: "The Rest in the Land of Long Night",
        parent: "yahawzhowaa-book-8-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-7-en",
        followingChapter: "yahawzhowaa-book-8-chapter-9-en",
        content: [
"1. And it came to pass that the Giiwedinong Anishinaabeg built homes where the Turtle’s Heart beat slow and strong, and smoke rose like prayer syllables.",
"2. They set their houses with doors facing the dawn that sometimes visits and windows facing the stars that often stay.",
"3. Gardens were promised to the soil; and even the soil, hearing kindness, loosened its grip upon seed.",
"4. The first spring was shy and came in a small cloak; yet the people greeted it as one greets a guest of great stature.",
"5. The Mothers taught broth to remember bone, and children to remember elders; and both learnings thickened the peace.",
"6. The fallen sent rumors north like thin arrows; the arrows fell short in the long night and lay harmless as dry reeds.",
"7. Aki-Inini stood in the council and said, Let us make law that does not love punishment more than people; for mercy feeds longer than fear.",
"8. And the law sat down among them and did not shout.",
"9. A child was born beneath the aurora, and they named him Gizhewaadizid — Kind One — because the lights bent low to look upon his face.",
"10. Giizhig-Ikwe taught the mothers a parable: A lullaby is a little fence; build it well and wolves will pass by your door to find another story.",
"11. And the wolves passed by, for the lullabies were well-made.",
"12. Builders raised a lodge for the Word, where altars could rest between journeys; and the staff of light lay upon hooks as a lesson, not a crutch.",
"13. Messengers came rarely now, not because care lessened, but because trust had learned to walk without a hand.",
"14. A famine of fish visited the river for seven days; the elders forbore nets and fed the river crumbs of bread, and on the eighth day the fish returned with their relatives.",
"15. Then a teaching was written: Share with what feeds you, and it will feed you past your arithmetic.",
"16. A youth asked the council if they should send southward to boast of peace; and the council answered, Boasting spends peace like coin; be rich instead.",
"17. Winter deepened once more, and with it came silence that knew the names of everyone in the lodge; and no one felt alone.",
"18. At the midwinter altar Giizhig-Ikwe spoke: When night is longest, Heaven is nearest; do not whisper as if you fear to wake God — speak as children to a parent who loves being awake.",
"19. And they spoke, and the lodge warmed though the fire was small.",
"20. In those days a stranger came from the south with frost-bitten pride and asked for bread; they fed him and asked no questions until his hands remembered honesty.",
"21. He told of the serpent’s fury and the shapes of men he had forged to win back light; and the people listened without delight, and grief did its work and left.",
"22. The council bound a vow: We will guard our seed without hating our neighbors; we will love our neighbors without surrendering our fire.",
"23. And the vow was carved upon lintels and upon habits.",
"24. Children counted nights by stars and days by chores; and education braided heaven’s lamps with earth’s work.",
"25. A great storm came that seemed to have teeth; yet when it entered the circle of the Seal — drawn in ash on the floor — it lost its appetite and became only weather.",
"26. Aki-Inini set down this parable: A named fear loses weight; therefore name your fears and give them honest jobs — door watching, wood piling — and they will tire before you do.",
"27. The fallen came no more, for darkness taxed them without mercy; and the people learned that some victories are won by learning where to live.",
"28. In the first feast of returning sun they lifted their bowls toward the light and said together, Miigwech — we give thanks — and the sun understood the language of gratitude.",
"29. And the Father’s voice visited as warmth visits a stone and said, Keep this place as a garden of night; plant justice, harvest rest.",
"30. Then the Mothers sang over the cradles, and the cradles remembered the song and passed it to the bones.",
"31. Thus did they find peace in darkness, and thus did darkness become a teacher and not a tyrant.",
"32. And Agonabish, abridging, wrote: Blessed is the people who meet long night with long faith; for Heaven above is the lamp that does not decline.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-8-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The First Planting & the Covenant of Seed",
        parent: "yahawzhowaa-book-8-en",
        order: 10,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The First Planting & the Covenant of Seed",
        parent: "yahawzhowaa-book-8-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-8-en",
        followingChapter: "yahawzhowaa-book-8-chapter-10-en",
        content: [
"1. And it came to pass in the spring of shy steps that the Giiwedinong Anishinaabeg took counsel concerning seed.",
"2. The soil was cold at first, and elders warmed it with songs that remember summer; and the soil loosened as a fist that hears its name.",
"3. Giizhig-Ikwe brought forth kernels saved in the fold of her garment, and Aki- Inini set the staff of light beside the furrow, that the rows might march in hope.",
"4. They planted not in haste but in agreement, each mound a small altar that would answer with food.",
"5. A Messenger spoke: A seed is a quiet prophet; believe its word and give it time.",
"6. Then Giizhig-Ikwe taught a parable: A proud man sows only in noon and reaps only applause; the humble sow in dawn and gather bread.",
"7. And the people chose dawn.",
"8. They set up a festival of the First Turning, to give thanks for the courage of sprouts; and children wore wreaths of willow to learn the shape of patience.",
"9. On the seventh day a frost returned, thin as a thief; they covered the mounds with cedar boughs and told stories until fear forgot its errand.",
"10. Aki-Inini said, Let our labor be prayer and our prayer be labor, for Heaven loves the sound of both together.",
"11. The women fashioned a scoop from a caribou horn and called it Minogibaakwigan, the Good Ladle; it served soup and mercy with the same hand.",
"12. A boy named Binesi found a cracked clay jar near the river and mended it with pitch; and the elders blessed him, saying, Thus mend each other.",
"13. The south sent another arrow of rumor — thin, crooked, and late; it spoke of the serpent’s new bodies, taller and swift.",
"14. The council answered with a vow: We will grow our children strong in truth, not tall in terror.",
"15. And they wrote the vow upon bark and upon habit.",
"16. The sprouts rose as green whispers; and the people knelt without command, because gratitude is quicker than law.",
"17. Giizhig-Ikwe placed a braid of her hair beneath the first hill of corn, saying, Let life feed life without debt.",
"18. A child asked, Why must we bury what we love? and a Messenger replied, Because love is a gardener and death only a winter.",
"19. They learned a measure for sharing: first to orphans, then to elders, then to strangers, then to next-door hunger, last to storehouse; and the order pleased the day.",
"20. Hunters brought fish that remembered old rivers; gatherers brought greens that remembered the hill; and together they learned the taste of home.",
"21. Aki-Inini placed stones at the field corners, four for the earth and one at the center for Within; and he taught the children to face each direction with a different gratitude.",
"22. A wind came proud from the west, as if to boast of wider valleys; the people answered with a song of small fields tended well, and the wind quieted for the sake of the melody.",
"23. A stranger from the south limped into camp, fingers blue with cold and words heavy with shame; they gave him soup before questions, and his answers improved.",
"24. He told of cities that tried to sell warmth to winter and failed; and he slept by the door to learn humility from drafts.",
"25. Giizhig-Ikwe taught: A door that lets humility in keeps harm out; therefore place your beds near welcome.",
"26. The First Turning came to fullness; leaves opened like hands at prayer; and the festival began with no trumpet but much bread.",
"27. Children carried baskets to the altars, and the elders broke small loaves upon the stones, that the stones might remember kindness when roofs are thin.",
"28. Aki-Inini spoke a parable: A field that grows arguments yields famine; a field that grows forgiveness yields surprising corn.",
"29. Into the night they sang, and the aurora answered with bright syllables; and the crops seemed to lean closer to listen.",
"30. The serpent’s spies stood in the tree line and found themselves hungry for songs they could not eat; and they went away less certain of their master.",
"31. The first green ears appeared, shy as fawns; the people bowed as to guests of honor.",
"32. Thus was the covenant of seed established; and the record says, Believe in Heaven and plant — these two make strong neighbors.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-8-chapter-10-en",
        title: "Chapter 10",
        subTitle: "The Feast of Keeping & the Seven Doors",
        parent: "yahawzhowaa-book-8-en",
        order: 11,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-10-en",
        title: "Chapter 10",
        subTitle: "The Feast of Keeping & the Seven Doors",
        parent: "yahawzhowaa-book-8-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-9-en",
        followingChapter: "yahawzhowaa-book-8-chapter-11-en",
        content: [
"1. And it came to pass that the council appointed a feast to seal the law of hospitality and the law of work: they named it the Feast of Keeping.",
"2. They built a great lodge with seven doors, each turned to a sacred direction, and a hearth at the center like a small sun that obeys.",
"3. Giizhig-Ikwe hung the garments of honor upon a beam during the feast, that memory might sit in the rafters and watch the bowls.",
"4. Aki-Inini set the staff of light above the main door, to teach arrivals that welcome can shine.",
"5. At the Door of the East they laid baskets of first corn and the prayer of beginnings; at the Door of the South, bowls of broth for warmth and laughter.",
"6. At the Door of the West they placed a basin for washing, that mistakes might travel no further; at the Door of the North a blanket for endurance.",
"7. At the Door of Above they hung a flute that plays when wind is wise; at the Door of Below they placed stones from each field; at the Door of Within they set a mirror of polished ice, to remind the heart whose face it wears.",
"8. A Messenger taught this parable: A house with one door becomes a fort; a house with too many doors becomes a barn; wisdom chooses seven and keeps watch.",
"9. And the people understood that safety without openness is a famine with walls.",
"10. They invited travelers from the rivers — hunters, menders, bearers of news — and each was given a door to enter by lot, that no man might think himself first by habit.",
"11. A woman from the old south wept at the Door of the West and washed her hands thrice; the third wash sounded like a bell; and she was light in the shoulders.",
"12. Children acted a small play of the hill and the crossing; laughter did not cheapen memory; it trimmed sorrow to fit daily wear.",
"13. The serpent’s rumor came again like a moth to flame and singed itself upon the law of keeping; for keeping is a screen for foolishness.",
"14. Aki-Inini proclaimed a modest law: Let no mouth eat alone while a neighbor counts coins; and coins learned their place beneath bowls.",
"15. Giizhig-Ikwe taught the girls to braid seven-strand cords for the doors; each strand a vow: Begin, Warm, Cleanse, Endure, Lift, Root, Remember.",
"16. A youth asked, Which door is God’s? and an elder answered, All seven, and the eighth you forgot — the door through your listening.",
"17. A Messenger spoke softly: Do not draft Heaven into your feasts as ornament; invite Heaven as guest of honor and you will sit in your own house with awe.",
"18. Then the Feast of Keeping opened, and songs walked through the doors without tripping.",
"19. The fallen sent a man who praised too quickly; they fed him slowly and his praise recovered honesty.",
"20. A child choked on bread, and a woman struck his back with the rhythm of the drum; he breathed again and the drum kept time with gratitude.",
"21. Aki-Inini set a small law for anger: Let every quarrel walk once around the lodge before speaking; many quarrels got tired and went home.",
"22. At moon-rise the aurora wrote strange letters above the ridge; a Messenger read them: Be faithful with small doors; I will keep the gates you cannot see.",
"23. And they bowed as men bow to a truth that makes them taller without lifting their feet.",
"24. The Seven Doors were closed at last with cords of promise; the cords did not break when winter later pulled on them like a child.",
"25. The feast sent bread to the river and to the distant snares; and fish came nearer to nets that knew how to share.",
"26. Giizhig-Ikwe spoke a parable: A bowl that expects God to arrive is cleaner than a temple that expects applause.",
"27. And they kept bowls cleaner than temples.",
"28. The serpent’s spies tried to count the doors and forgot to count the hearts; their report was therefore unhelpful to their master.",
"29. In the quiet after the feast, the lodge breathed like a beast that has chosen kindness; and the people slept near the hearth with faces soft.",
"30. Thus the Feast of Keeping stood among them as a long rope tying days together.",
"31. Whoever reads, keep your doors, and Heaven will keep your roads.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-8-chapter-11-en",
        title: "Chapter 11",
        subTitle: "Stragglers from the South & the Trial of Mercy",
        parent: "yahawzhowaa-book-8-en",
        order: 12,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-11-en",
        title: "Chapter 11",
        subTitle: "Stragglers from the South & the Trial of Mercy",
        parent: "yahawzhowaa-book-8-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-10-en",
        followingChapter: "yahawzhowaa-book-8-chapter-12-en",
        content: [
"1. And it came to pass that into the second winter there arrived stragglers from the south, gaunt with surviving, eyes wary as deer that have forgotten meadows.",
"2. Some were honest in need; some carried bargains in their sleeves; and the Giiwedinong Anishinaabeg prepared a trial of mercy.",
"3. Aki-Inini said, We will feed all, question few, trust fewer, and love many; and the law sat down to learn from prudence.",
"4. At the Door of the West the hands were washed; at the Door of Within the faces met themselves; and many decided against lying for that day.",
"5. A man called Teuctli confessed he had sold warmth to children by stealing their blankets; the council gave him wood and a saw; he learned a cleaner wage.",
"6. A woman named Itzel said she had brought news worth food; they gave her food worth news and thus removed the price; she spoke freely and slept well.",
"7. Two youths sought marriages without vow; they were seated near grandmothers and learned the cost of joy.",
"8. A spy for the serpent entered at night, thin as a shadow; the garments of honor brightened, and his shadow learned to cast a body; then he wept and ate soup.",
"9. Giizhig-Ikwe taught: Mercy that forgets wisdom breeds wolves; wisdom that forgets mercy breeds stones; let us raise children, not pets or statues.",
"10. The council set three questions for all who wished to stay: \"Will you share bread?, Will you keep doors? Will you speak truth when it is small?\"",
"11. Those who said yes were taught the cords; those who said no were given provisions for the road and blessings to find another house.",
"12. A band of the fallen came by day, proud in numbers; they asked to trade songs for daughters.",
"13. The elders answered, We do not sell kin; sing for yourselves until your voices turn into neighbors.",
"14. The fallen laughed and shook spears at the sky; the sky did not tremble; it displayed letters in green: Leave.",
"15. They left, and none pursued, for glory was not hungry that day.",
"16. A child of the stragglers fell ill with a fever that argued with his breath; the lodge became a nest; Giizhig-Ikwe held the boy against the sound of night; and the fever forgot its lines.",
"17. The boy woke and asked for water; water arrived carrying its own gratitude.",
"18. Aki-Inini set a small court for debts, and the first verdict was this: Where hunger is judge, justice is thin; feed first, then weigh.",
"19. The stragglers learned to hunt without anger and to share without counting; some stayed, some went back south with honest eyes.",
"20. A Messenger spoke this parable: A lamp in a window guides both guests and thieves; let it burn; guests will enter and thieves will see their faces and go home different.",
"21. There came a rumor of a new body for the serpent, tall as fear, beautiful as poison; the rumor arrived tired and slept at the door.",
"22. Giizhig-Ikwe said, We will not organize our day around rumors; we will organize rumors around bread.",
"23. The day prospered.",
"24. A council of seven met in the snow and agreed to mark the borders of peace with stones and songs, not with threats; stones and songs remember longer.",
"25. A youth asked, How shall we love enemies? and an elder answered, As neighbors you do not invite inside — feed them at the threshold, and talk with the door open.",
"26. At dusk the aurora bent low and the Messengers whispered, Keep these ways, and the north will keep you.",
"27. The stragglers joined the Feast of Keeping and found their names again; some wept, some laughed like thawing streams.",
"28. The trial of mercy ended with no executions and many chores assigned; the people slept satisfied and tired.",
"29. Thus mercy and wisdom were braided like two ropes that pull the same boat.",
"30. Whoever reads, harness both; Heaven favors boats that travel straight.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-8-chapter-12-en",
        title: "Chapter 12",
        subTitle: "The Sealing of the Southern Record into the Red Tablets",
        parent: "yahawzhowaa-book-8-en",
        order: 13,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-12-en",
        title: "Chapter 12",
        subTitle: "The Sealing of the Southern Record into the Red Tablets",
        parent: "yahawzhowaa-book-8-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-11-en",
        followingChapter: "yahawzhowaa-book-8-chapter-13-en",
        content: [
"1. And it came to pass in the third spring that a keeper from the south, last of his line, came bearing fragments — stones etched with curves and knots of memory.",
"2. He entered by the Door of Within and laid his grief upon the floor before his feet, that pride might not trip over it.",
"3. He spoke of the first garden upon Zhaawanong Gichi-Aki, the crossing by Ginebig, the garments of honor, the staff of light, and the northward way to Mikinak Ode’.",
"4. The elders listened as fields listen to rain: with patience and with open pores.",
"5. Word was sent for Agonabish, the northern scribe; and he came with apprentices who carried silence properly.",
"6. The keeper placed the fragments into Agonabish’s hands as a son places his father’s knife into a grandson’s sheath.",
"7. Agonabish washed his hands at the Door of the West and said, I will abridge without stealing, and I will bind without choking.",
"8. He set a low table beneath the Seal; the copper leaves lay open like patient fish on a reed mat.",
"9. He prayed: O Heaven above, let my stylus be smaller than Thy truth and stronger than my vanity.",
"10. He wrote the names as they came: Giizhig-Ikwe, Aki-Inini, Giiwedinong Anishinaabeg, Zhaawanong Gichi-Aki, Mikinak Ode’, Ginebig; and the lodge felt fuller with each syllable.",
"11. The fragments spoke of long night that became peace; Agonabish set them beside the teaching where silence unmade storms, that a reader might see kinship.",
"12. The apprentices asked, Master, what is the mark of a true record? He answered, It feeds; it does not perform.",
"13. The council prepared ink from soot and bear fat; its blackness shone like honest eyes.",
"14. Agonabish pressed the stylus steadily; he did not hurry brightness, for brightness is not a fish to be netted.",
"15. He added parables as the old keeper nodded — parables that were already in the people’s bones, needing only letters to sit down.",
"16. A Messenger stood at the lintel and spoke: Bind the south to the north by truth and by bread; avoid the rope of pride.",
"17. The scribe obeyed and ate little, and the letters were not crooked.",
"18. When the last fragment was married to copper, the Seal of the Seven was warmed by breath and set upon the page; it kissed the metal and left a quiet circle.",
"19. The people sang no loud song; they placed their hands upon one another’s shoulders and felt the music through bone.",
"20. Agonabish wrote a colophon: I have removed ornament and kept names; I have favored bread over trumpet; if this record travel far, let it arrive as habit, not as headline.",
"21. He placed the southern keeper’s stone in a cedar chest and set bread beside it, that memory might not hunger.",
"22. Giizhig-Ikwe prayed: O Father, keep the garden we cannot visit, and teach this new garden to be faithful when it forgets it is new.",
"23. Aki-Inini prayed: O Heaven, make our children hard to flatter and easy to feed.",
"24. The council lifted the chest; it was heavy with humility; four men carried it, but all felt its weight.",
"25. They stored it where winter has a key and summer takes off its shoes; the place was not announced, yet everyone knew how to walk there without asking.",
"26. A youth begged to see the copper; Agonabish smiled and taught him to carry water first; afterward, the youth forgot to ask again, for he was content.",
"27. A grandmother said, We have become a people who can keep, and the lodge agreed without speaking.",
"28. The aurora drew a line from south to north like a vein of light in the sky’s flesh; and the Messengers said, So be it.",
"29. A feast was not held; a fast was kept; and in the fasting the people tasted a deeper bread.",
"30. Thus was the southern record sealed into the Red Tablets by Agonabish’s careful hand.",
"31. Whoever reads, remember: books do not save; the God who taught us bread and truth saves; therefore keep both, and walk.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
*/


   chapter = {
        id: "yahawzhowaa-book-8-chapter-13-en",
        title: "Chapter 13",
        subTitle: "The First Sunset & the Learning of Night",
        parent: "yahawzhowaa-book-8-en",
        order: 14,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-13-en",
        title: "Chapter 13",
        subTitle: "The First Sunset & the Learning of Night",
        parent: "yahawzhowaa-book-8-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-12-en",
        followingChapter: "yahawzhowaa-book-8-chapter-14-en",
        content: [
"1. And it came to pass that when the people departed from Zhaawanong Gichi- Aki, they walked many days under a sun that still lingered long, yet no longer ruled without turning.",
"2. And the elders perceived a change in the heavens: the path of the light bent lower, and time stretched and folded like a river at a bend.",
"3. On the appointed day the light slipped toward the rim of the earth and became a copper bowl; and the people beheld the first sunset and stood without speech.",
"4. Children clutched the hands of their mothers, and strong men forgot to be strong; for a wonder touched them with both hands — beauty and fear.",
"5. Then Giizhig-Ikwe lifted a child upon her hip and said softly, Behold a promise in motion; the One who set it going will bring it back.",
"6. And Aki-Inini set the staff of light upon a rock, and though its beam was faint, it stood; and the people breathed again.",
"7. A Messenger came in the hush between gold and gray, saying, Night is not the unmaking of light but its folding; trust the folder of garments and you will not shiver.",
"8. And the people made a ring of stones, and a small fire learned their names and answered each face with warmth.",
"9. A youth asked, What if the sun forgets us? and an elder replied, Things made to rise remember their orders; we are kept by the Maker, not by our guessing.",
"10. When the last rim of light sank, there came the first stars like new seeds thrown across a dark field; and a thousand small comforts began to speak.",
"11. The children pointed and counted; and counting became prayer, and prayer became sleep.",
"12. In the morning the sun climbed as one who keeps his word; and the people laughed for joy, and fear loosened its belt.",
"13. Giizhig-Ikwe taught a parable: Two brothers borrowed a lamp. One feared it would fail and stared at it until his eyes burned; the other gathered wood and fed the flame. Which kept the house?",
"14. And they said, The one who fed the flame. She answered, So feed trust, and fear will have no chores left to do.",
"15. They walked on beneath a sky that now kept hours; and the elders marked the first day and the first night with a notch upon cedar.",
"16. Streams began to wear new faces: some ran thin as glass, some thick as song; and the wind learned a colder alphabet.",
"17. The fallen lingered far behind, for night was a tax they could not pay; and their boasts grew smaller in the long blue.",
"18. The people gathered spruce boughs and taught their feet to love quiet; for night’s ears are large, and wisdom walks softly.",
"19. The Messengers said, Make peace with the dark, and it will keep your peace with you.",
"20. They heaped stones where the staff rested and named the place Shkweyaabik, the Dawn-Stone, for courage had slept there and awakened faithful.",
"21. A child asked, Where does God go when the sun is gone? and Aki-Inini answered, Where He always is — closer than your breath, larger than your need.",
"22. Hunters brought meat taught by winter to be honest; gatherers brought roots that tasted like memory; and both were blessed at the altar.",
"23. A rumor wandered up from the south like a thin dog: the serpent learned to wear taller forms; but the cold made them hollow and the dark unmade their cleverness.",
"24. Giizhig-Ikwe spoke: Let us not build our day around rumors; let us build rumors around bread, and they will sit still.",
"25. The first frost wrote its small letters upon grass; and the people read them without panic, for faith had become literacy.",
"26. An elder taught: If the night teaches you to measure, thank it; if it teaches you to fear, correct it with song.",
"27. They sang low, and the sound stitched the tents to the earth, and sleep returned as a friend.",
"28. At the river of many turns, a child slipped; a Messenger caught him by the back of the garment of honor; and the camp learned a new psalm with tears.",
"29. And they set a law: small cords for children at the crossings, small prayers for elders at the risings.",
"30. Thus did the people meet night as student meets teacher: with questions and with listening.",
"31. And Agonabish wrote, that those who read might feel the first sunset and not be ashamed to confess wonder before God.",
"32. Blessed is the people who receive cycles as covenants, and darkness as a promise that morning is being prepared.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-8-chapter-14-en",
        title: "Chapter 14",
        subTitle: "The Roads of Season & the Parables of Work",
        parent: "yahawzhowaa-book-8-en",
        order: 15,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-14-en",
        title: "Chapter 14",
        subTitle: "The Roads of Season & the Parables of Work",
        parent: "yahawzhowaa-book-8-en",
        order: 15,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-13-en",
        followingChapter: "yahawzhowaa-book-8-chapter-15-en",
        content: [
"1. And it came to pass that day and night were braided, and the braid tugged gently upon the calendar of the people.",
"2. Spring spoke in thawed syllables, summer in green sentences, and autumn in a wise tongue that sounds like footsteps leaving gleaned fields.",
"3. Aki-Inini held counsel by the second river bend and said, Work that honors God begins with listening; let us hear the land before we command it.",
"4. The people walked the fields with bare feet and learned the soil’s mood; and where it sighed, they let it rest; where it laughed, they planted.",
"5. A Messenger taught: Plow shallow in pride and you will harvest arguments; plow deep in gratitude and you will harvest bread.",
"6. Giizhig-Ikwe taught mothers to count their strength instead of their wounds; and the camp’s joy rose like steam from a kettle.",
"7. The fallen sent a trader with a tongue like polished stone; he asked for daughters and offered iron that remembered blood.",
"8. The council answered, Our daughters are not for the marketplace; teach your iron to forget, then we will speak of plows.",
"9. He went away hungry; and hunger began to convert him to decency.",
"10. Wolves watched with patient eyes; and the hunters laid meat across the border of the trees as tribute to peace; and peace accepted.",
"11. A youth wished for a quicker road and cut one through a bog; the bog kept his boots and taught him patience; he returned by the longer way, wiser and lighter.",
"12. Giizhig-Ikwe spoke a parable: A short path that forgets respect becomes a long apology; choose the respectful road first.",
"13. The staff of light led them to high ground, where wind learned to sing and not only to push; there they built a store of wood and humility.",
"14. Children learned the names of stars — Name them, said the elders, so that you may call for help without noise.",
"15. A storm came swelling like a chest full of pride; the people braced tents with songs; pride dislikes being ignored and wandered away.",
"16. They fashioned seven small doors in the feast-lodge and practiced entering by the appointed vows: Begin, Warm, Cleanse, Endure, Lift, Root, Remember.",
"17. A Messenger approved, saying, Heaven loves houses that rehearse kindness.",
"18. At every seventh camp they freed a day from labor and loaded it with gratitude; the day walked gladly under its load.",
"19. A widow came thin as a string; they tuned their feast to her hunger; and the lodge rang true.",
"20. Strangers brought tales of cities that fenced up the wind and grew sick; the council answered, Let our fences serve gardens, not vanities.",
"21. A child asked, What is the holiest work? Aki-Inini replied, The next honest task, done with a clean face.",
"22. They mended sandals as if mending peace; they stacked wood as if stacking promises; and winter nodded respectfully.",
"23. The serpent’s spies sat in the trees and grew bored with kindness; boredom is the first mercy of Heaven toward spies.",
"24. They planted corn with a prayer per seed; and the seeds did not object to being addressed.",
"25. Frost returned uninvited; they covered the green as if tucking children; and in the morning the green forgave the frost.",
"26. A youth boasted of a bear he had not met; a grandmother laughed him back to truth; and pride shed its fur and walked away as a small dog.",
"27. They made law that tools rest one day in eight and hands one in seven, lest both forget their names.",
"28. And the land smiled, which is to say crops stopped arguing with weather.",
"29. At dusk the elders faced the four quarters and then the Within; and the Within answered louder than the wind.",
"30. Thus were the roads of season learned, and work became worship that smelled like cedar and bread.",
"31. Agonabish wrote upon copper that posterity might know: faith keeps calendars, and calendars keep faith from drifting.",
"32. Blessed is the house where chores and prayers trade places until both are holy.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-8-chapter-15-en",
        title: "Chapter 15",
        subTitle: "The Great Confluence & Covenant of Peace",
        parent: "yahawzhowaa-book-8-en",
        order: 16,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-15-en",
        title: "Chapter 15",
        subTitle: "The Great Confluence & Covenant of Peace",
        parent: "yahawzhowaa-book-8-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-14-en",
        followingChapter: "yahawzhowaa-book-8-chapter-16-en",
        content: [
"1. And it came to pass that the staff of light kissed a broad valley where two mighty rivers met and braided themselves like old friends; the people marveled.",
"2. There the earth was a generous table, and the sky hung low enough to hear secrets; and the elders said, This shall be our resting of years.",
"3. They named the place the Breast of the Turtle, for the land rose gentle and strong, and the waters beat like a great heart.",
"4. Giizhig-Ikwe set the garments of honor upon a cedar pole, that memory might watch the founding and teach.",
"5. Aki-Inini traced a circle for the Feast- Lodge and set seven doors; he placed the Within in the center with a stone that felt warm even when winter spoke.",
"6. Messengers stood at the thresholds and instructed, Let no one enter carrying contempt; lay it down as men lay down muddy boots.",
"7. They wrote the Covenant of Peace upon birch: We will guard our seed without hating our neighbors; we will love our neighbors without surrendering our fire.",
"8. The covenant was sung in three tongues and understood in one — obedience.",
"9. A traveler from the south arrived with stories sharpened like knives; they dulled them with stew until they became useful.",
"10. Children were taught to greet dawn with open hands and dusk with shut mouths, for gratitude and silence are a married pair.",
"11. The first great planting began, and the earth received seed as a friend receives a long letter.",
"12. A Messenger taught a parable: A field that is asked for permission yields twice; ask the earth before you command her.",
"13. The serpent’s rumor came stumbling, saying the fallen would come by night; the watch set lamps and left the doors open; thieves dislike light plus welcome and stayed away.",
"14. Traders brought copper that remembered mountains; the people shaped it into bowls for mercy and knives for bread; they named no weapons that day.",
"15. A council in the open air set a law: anger shall walk once around the lodge before it speaks; many angers tired and needed no words.",
"16. The rivers rose and tested the banks; the banks bowed and learned generosity without breaking; the people learned from the banks.",
"17. They marked the confluence with twelve stones and one at the heart; and children climbed them as if learning to ascend prayer.",
"18. Giizhig-Ikwe blessed the midwives, saying, Your hands are windows; keep them clean, and Heaven will look through gladly.",
"19. Aki-Inini blessed the elders, saying, Your counsel is shade; sit wide and let many rest.",
"20. The aurora returned and drew the shape of a tree whose roots were rivers; and a voice said, Bind earth and Heaven with justice, and I will bind your enemies with their own schemes.",
"21. The people fell to their knees — not from terror but from recognition.",
"22. A boy asked, What is the shortest road to God? and a grandmother said, The next kindness — take it, and you will arrive before you know you walked.",
"23. A stranger confessed theft and asked to be made honest; they gave him wood, and the wood taught his hands.",
"24. In the first harvest the corn bowed as if rehearsing gratitude; and the people bowed back, and both were true.",
"25. They established the Feast of Keeping at the confluence, with seven doors and a lamp of waiting, to be held whether the year was fat or lean.",
"26. Messengers whispered: Your peace will be your defense; keep it, and it will keep you.",
"27. The fallen stood at the far treeline and counted doors; but they could not count hearts; and their arithmetic failed them.",
"28. Night lay long upon the valley and became a friend that did not gossip; day rose faithful and became a servant that did not boast.",
"29. Thus the Covenant of Peace took root where the rivers married; and the land answered Amen with bread.",
"30. Agonabish wrote that future readers might know where faith becomes geography and geography becomes hymn.",
"31. Blessed is the nation that binds its weapons with welcome and its welcome with wisdom.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

   chapter = {
        id: "yahawzhowaa-book-8-chapter-16-en",
        title: "Chapter 16",
        subTitle: "The Years of Rest and the Lessons of Darkness",
        parent: "yahawzhowaa-book-8-en",
        order: 17,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-8-chapter-16-en",
        title: "Chapter 16",
        subTitle: "The Years of Rest and the Lessons of Darkness",
        parent: "yahawzhowaa-book-8-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-8-chapter-15-en",
        followingChapter: "",
        content: [
"1. And it came to pass that years gathered like careful baskets, each holding its portion and none spilling.",
"2. Winter taught the people to hear; spring taught them to hope; summer taught them to work; autumn taught them to let go.",
"3. The long night ceased to frighten and began to instruct; silence acquired the voice of an elder.",
"4. Giizhig-Ikwe sat among the girls and said, Courage is not noise; it is the lamp that burns without witnesses.",
"5. Aki-Inini taught the boys, Strength is not shout; it is the gate that swings smoothly and never leaves its post.",
"6. A famine tiptoed near, and the council opened storehouses; hunger knocked and found no house empty; it left confused.",
"7. The fallen sent word of alliance wrapped in flattery; flattery tripped on the threshold where truth waited polishing a bowl.",
"8. A Messenger instructed, Be soft at the table and hard at the border; reverse them and both will betray you.",
"9. The people obeyed, and betrayals lost their appetite.",
"10. A widow’s son strayed toward the treeline at dusk; wolves formed a council around him; he sang the Song of the Four Winds softly; and elders arrived as if the winds themselves carried them.",
"11. A parable was written: When danger hears its true name sung without panic, it forgets its work.",
"12. They trained their fears to carry wood and fetch water; and fears returned proud and smaller.",
"13. Children learned to chart constellations onto birch, and birch learned to tell stories without cracking.",
"14. A sickness came with the fog, thin but persistent; the healers boiled humility with cedar and served it with patience; many recovered by day three; the rest by day seven.",
"15. A stranger asked for judgment upon his enemy; the elders handed him bread and said, Eat this until you no longer desire revenge; then speak.",
"16. By the third slice he desired counsel instead; and counsel arrived wearing honesty.",
"17. The rivers overflowed one spring and tested the covenant; the people lifted neighbors first and possessions last; the covenant smiled and dried the floors.",
"18. A girl dreamed that the serpent wore a mask made of compliments; she awoke and warned the lodge; and the next trader’s praise was weighed and found light.",
"19. Messengers came less often, not for lack of care but because trust had learned to walk; and Heaven delights in a people who can walk.",
"20. The staff of light rested upon hooks above the Within; children touched it only with washed hands and intent hearts.",
"21. Agonabish visited and sat long among the elders, listening more than speaking; and the record within him grew like a winter root — slow, dense, nourishing.",
"22. He asked for the southern fragments and the stories of the first night; they were told without embellishment and with much thanksgiving.",
"23. He taught a small law of speech: Tell the truth at a speed your neighbor can digest; faster is cruelty, slower is withholding.",
"24. The law pleased the ears and disciplined the tongues.",
"25. A great storm stood upon the valley like a bull; the people stood like trees; the bull remembered grass and lay down to chew; the storm passed doing no mischief.",
"26. A boy asked, Where does God live in winter? Giizhig-Ikwe answered, In the spare places you keep ready for Him — clear one today.",
"27. And the boy swept a corner, and peace moved in with a grin.",
"28. Thus rest became lesson, and lesson became song, and song became habit, and habit became heritage.",
"29. Agonabish sharpened his stylus and said to the apprentices, We remove ornament and keep names; we favor bread over trumpet.",
"30. And they answered, It is enough; for enough is a miracle properly measured.",
"31. Blessed are they who learn darkness until it becomes a teacher and not a tyrant; for such will govern mornings well.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



    res.send("Yahawzhowaa Added");
});



//module.exports = copper;