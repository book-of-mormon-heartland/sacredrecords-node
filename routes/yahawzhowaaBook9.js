import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function async(req, res) {
    let book = {};
    let chapter = {};
/*

    book = {
        id: "yahawzhowaa-book-9-en",
        title: "The Book of the Kingdom of the Heart",
        subTitle: "",
        image: "",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-eight-171x214.jpg",  
        thumbnailTitle: "Kingdom of the Heart",
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
        id: "yahawzhowaa-book-9-chapter-1-en",
        title: "Chapter 1",
        subTitle: "The Family Is the Kingdom",
        parent: "yahawzhowaa-book-9-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-1-en",
        title: "Chapter 1",
        subTitle: "The Family Is the Kingdom",
        parent: "yahawzhowaa-book-9-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-9-chapter-2-en",
        content: [
"1. And it came to pass that Yahawzhowaa taught His leaders, saying, The Father’s house is not cedar and stone; it is the breath of the children.",
"2. The family is the Kingdom, and the Kingdom is the family; divide them, and you scatter the flock.",
"3. An institution is a servant and not a master; if the servant ruleth, the family becometh a slave.",
"4. Behold the table within the house: when bread is shared, the Father walketh among you; when bread is stored, His face is hidden.",
"5. And they said, Master, how shall the table be kept full?",
"6. He answered, Fill the hearts, and the table shall not fail; fill the coffers, and the hearts shall be empty.",
"7. For the Father buildeth not barns for Himself, but sons and daughters for His name.",
"8. Ye have heard, Strengthen the walls and the people shall be safe; I say unto you, strengthen the people and the walls shall be needless.",
"9. As a vine embraceth a house, so love surroundeth a family; cut the root, and the wind entereth by every door.",
"10. A servant that loveth the broom keepeth the floor; a servant that loveth the chair sitteth and forgetteth the dust.",
"11. So is the institution: if it love its tools more than the little ones, it gathereth dust upon the souls.",
"12. I give you a parable: A garden was planted by a poor man for his children.",
"13. He watered it in season, and it fed his house, and their laughter was as rain.",
"14. A stranger came and said, Let us make this garden a city, and we will never hunger.",
"15. They built channels without measure, and water ran without wisdom.",
"16. The garden grew high and heavy; vines swallowed the streets, and roots lifted the doors; the city became a thicket, and the children were lost within it.",
"17. Hear the meaning: a garden serveth the house; but if it be made the house, it devoureth the house.",
"18. Even so an institution serveth the family; if it be made the family, it consumeth the family.",
"19. Therefore keep the channels narrow and the springs clean; let the water find the thirsty first.",
"20. Say not, We must fill the treasury that we may fill the bowls; I say, fill the bowls, and the treasury shall not be sought.",
"21. For the coffer of the people of God is to remain empty, and the hearts of the people full; this is the sign of My way.",
"22. Woe to those who reverse the sign, who keep the hearts lean and the vaults fat; they name it prudence, and I name it famine.",
"23. There is one who walketh the earth and opposeth Me; he buildeth kingdoms upon the backs of men.",
"24. He saith, In God’s name, raise Me towers, that I may be seen; yet he walketh not the dust of the poor, neither taketh he off his shoes.",
"25. He gathereth worship unto himself, and calleth it worship of Heaven; men are his resource, and he drinketh their praise as wine.",
"26. But My Father buildeth kingdoms within hearts; He raiseth not stones but lives, and His throne is found in a humble room.",
"27. Choose therefore: to lay bricks without breath, or to breathe life without bricks.",
"28. Set your foot among the little ones; remove thy sandals upon the holy ground of their sorrow; learn the road of small doors.",
"29. Keep this order among you: the child before the chair, the widow before the window, the table before the treasury, the home before the hall.",
"30. Amen, amen, I say unto you, if ye keep this saying, the wind shall not scatter you; but if ye forget it, the garden ye praised shall overrun your city, and ye shall seek a door and find only leaves.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-9-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The Empty Coffers",
        parent: "yahawzhowaa-book-9-en",
        order: 2,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The Empty Coffers",
        parent: "yahawzhowaa-book-9-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-1-en",
        followingChapter: "yahawzhowaa-book-9-chapter-3-en",
        content: [
"1. And Yahawzhowaa spoke again to the elders, saying, Keep the coffer of the Father’s house empty, and you will never want for bread.",
"2. For when men see gold, their hearts lean toward it; but when they see need, their hearts lean toward each other.",
"3. The treasure of the Kingdom is not hidden in vaults, but in the faces of those who have been fed.",
"4. A purse filled with coin grows heavy and sinks the ship; but a purse filled with trust is light and carries you to the far shore.",
"5. I tell you a parable: 6. There was a small house by the river, and every traveler who came was given a place to rest and a bowl of warm grain.",
"7. The master of that house had nothing but an empty chest, and his children laughed like the bells of spring.",
"8. A rich man passed by and said, Let me fill your chest, for I see you give without keeping.",
"9. And the master said, If you fill my chest, you will empty my hands.",
"10. For when my chest is full, I will fear its loss, and my hands will grasp instead of give.",
"11. The rich man marveled, but he went away thinking the master was a fool.",
"12. In the days that followed, famine came to the land, and the rich man barred his gates, for fear his full chest would be seen.",
"13. But the small house by the river still gave grain, and the master’s children still laughed, for the people brought what they had, and the river brought what the people could not.",
"14. Hear the meaning: the empty coffer is filled by Heaven, but the full coffer is guarded by fear.",
"15. You cannot guard both your gold and your neighbor; one will be left to the wolves.",
"16. And I say to you, the wolves fear not your walls but your unity.",
"17. When the widow eats from your hand, the wolf turns away; when she starves while you polish the walls, the wolf comes in.",
"18. Storehouses for the poor are as wells for the thirsty; but storehouses for the rulers are as graves for the people.",
"19. Woe to the steward who counts coins while his brother counts crumbs.",
"20. For the Father’s table is not set with silver, but with mercy; and mercy multiplies when given, but shrinks when weighed.",
"21. Let no leader stand in the marketplace boasting of full treasuries; let him boast instead of empty hands that have served the hungry.",
"22. The impostor will say, Show me your gold, that I may believe God is with you; but I say, Show me the healed, and I will know He is among you.",
"23. For the impostor builds kingdoms where coins are kings and the poor are servants; but My Father builds kingdoms where the poor are kings and the coins are servants.",
"24. The day will come when the towers of the impostor will gleam with gold in the sun, and many will call it the blessing of God.",
"25. But the blessing of God is in the shadow of the widow’s lamp, and in the crust of bread she shares with the orphan.",
"26. Keep therefore your coffers empty, that your hearts may be full; for a full coffer makes a hollow heart.",
"27. And when the impostor comes to buy you with gold, you will have nothing to sell but truth, and truth cannot be bought.",
"28. Blessed is the leader whose wealth is counted in names remembered with joy, not in coins counted with greed.",
"29. For the coins will tarnish, and the names will shine forever.",
"30. Amen, amen, I say unto you, the Kingdom of Heaven is not a treasury but a table; fill it, and you will never be empty.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Brick and the Breath",
        parent: "yahawzhowaa-book-9-en",
        order: 3,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Brick and the Breath",
        parent: "yahawzhowaa-book-9-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-2-en",
        followingChapter: "yahawzhowaa-book-9-chapter-4-en",
        content: [
"1. And Yahawzhowaa spoke to them, saying, The Kingdom of My Father is built not with brick, nor bound with mortar, but with breath and with mercy.",
"2. For the brick cannot weep with the widow, nor laugh with the child; but the breath may do both in one day.",
"3. Men say, Let us build for God a house so great that the nations will bow; but I tell you, the nations will bow to love before they bow to stone.",
"4. Behold the sparrow: she builds her nest with straws and sings as if it were a palace.",
"5. Yet man builds a palace with gold and is silent as if it were a tomb.",
"6. I give you a parable: 7. A ruler gathered his people to build a great hall, saying, In this place, God shall dwell forever.",
"8. They laid stone upon stone, and the air rang with the strike of hammers, but no song was heard.",
"9. When the hall was finished, the ruler stood before the people and said, This is the dwelling of the Almighty.",
"10. And they brought incense and gifts, but no tears of repentance, no laughter of children.",
"11. Years passed, and the stones grew cold, and moss crept over the steps, and the hall was filled only with the echoes of feet seeking shelter from the rain.",
"12. Hear the meaning: without the breath of the righteous, the brick of the temple is dust.",
"13. The Father dwells where the humble break bread together, though the roof be low and the walls be thin.",
"14. But where pride is seated upon a throne, even the highest arch is an empty sky.",
"15. Ye have heard it said, Build for God the grandest hall; I say unto you, build for God the grandest heart.",
"16. The impostor will say, The height of the tower proves the height of our devotion; but I say, the depth of your mercy proves the depth of your worship.",
"17. For he who seeks to be seen will raise stones until they touch the clouds, yet his soul will not rise a hand’s breadth.",
"18. And he will call his towers holy, though the poor sleep in the shadow of their walls.",
"19. But the Father calls holy the place where the poor sleep under the same roof as the rich, and the bread is broken without price.",
"20. Let every brick serve a breath, and not a breath serve a brick.",
"21. If you place the stone above the soul, the soul will be crushed; but if you place the soul above the stone, the stone will find its purpose.",
"22. Woe to the hands that lay brick for glory and not for love; they build monuments for moths and trophies for time.",
"23. For when the wind comes, the breath will remain, but the brick will fall.",
"24. And the day will come when the impostor shall stand upon his tower and call himself shepherd, yet he will not touch the sheep with his hands.",
"25. He will speak blessings from the height, but his words will not warm the cold ground.",
"26. Be not as he is; walk among the sheep, speak to them with the breath of your mouth, and they will know your voice.",
"27. If your hand holds a stone, let it be to build a hearth; if your hand holds a breath, let it be to warm a soul.",
"28. Remember always: the Kingdom is the breath in the house, not the house around the breath.",
"29. For the house shall pass away, but the breath shall return to the Giver and live.",
"30. Amen, amen, I say unto you, build not for the eyes of men, but for the heart of God, and you shall be called builders of the Kingdom that cannot be shaken.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-4-en",
        title: "Chapter 4",
        subTitle: "The Roots of the Garden",
        parent: "yahawzhowaa-book-9-en",
        order: 4,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-4-en",
        title: "Chapter 4",
        subTitle: "The Roots of the Garden",
        parent: "yahawzhowaa-book-9-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-3-en",
        followingChapter: "yahawzhowaa-book-9-chapter-5-en",
        content: [
"1. And Yahawzhowaa taught them again, saying, The Kingdom of Heaven is as a garden planted in the midst of a people, whose root is hidden yet whose fruit is seen. The foolish gaze upon leaves and applaud their fluttering, but the wise stoop to the soil and ask after the root. For the life of the branch is not in the wind that moves it, but in the secret water that feeds it. Therefore, search first the root, and afterward judge the fruit; for where the root is sickly, the fruit will lie, though it shine in the sun.",
"2. Consider the beginning of all gardens: a hand, a seed, a little water, and a hope. If the hand forget the seed and honor only the fence, what shall grow within but pride and nettles? If the water be poured without measure and the channels run wild, the field will drown and the seed will rot in its crib. So also with a people: feed the root with measured mercy, and the branches will sing; starve the root with fear or drown it with praise, and the tree will devour its own shade.",
"3. I speak a parable. A poor man planted a small vineyard for his little ones and taught them saying, Keep the vines low that the sun may kiss the grapes, and keep the paths clear that your feet may find the clusters. But the sons said in their youth, Let us water without measure, for much water makes much fruit; and they opened the sluice and called it faith. In three seasons the leaves rose like ramparts, the sun was shut out as by a curtain, and the grapes swelled with bitterness; and the children, standing within abundance, could not find one sweet cluster for their table.",
"4. Hear the interpretation. A thing made to serve will rule if it is not kept in bounds, and a gift given to nourish will glut itself when it is not tamed by love. The garden was for the house, not the house for the garden; likewise the institution is for the family, not the family for the institution. Bind, therefore, the channels with wisdom, and prune the branches with mercy; for wisdom keeps the water true, and mercy keeps the blade from cruelty.",
"5. Ye have heard it said, Let the work grow, and God will guide it; but I say unto you, Guide the work lest it grow against God. For the Father waters by measure and season, but the impostor waters for spectacle and never for fruit. He loves the leaf that is high and the vine that is seen, though no child be fed beneath its shade. Judge not by height, therefore, but by sweetness; and if sweetness be absent, close the gate and set the knife in prayer.",
"6. There is a root that keeps counsel with the earth and listens for the footsteps of rain; and there is a root that forgets the earth and seeks only the applause of the wind. The first is content to be hidden and therefore lives; the second is eager to be praised and therefore dies. See then how humility is the soil of every living thing, and how pride is sand that drinks and does not feed. Plant low into humility, and you will harvest high into joy.",
"7. A leader asked, Master, when shall we know that the garden has begun to overrun the house? And I said unto him, When the paths are lost and the children know the rule of branches better than the names of their fathers. When meetings multiply and tables grow thin; when keepers count leaves and forget the hungry at the gate. Then know of a certainty that the garden has lifted its voice against the family, and the house is besieged from within.",
"8. Mark also the first signs. When praise is poured out upon the hedges and little is said of the bread; when the keepers speak of acreage and not of widows; when the young are taught to cherish the trellis more than the fruit. These are the locusts that eat at noon and leave no sound of wings; they are the small foxes that spoil the vines, for they flatter while they gnaw. Drive them out early with truth and with song, lest your harvest be a memory and your songs a sigh.",
"9. You say, But growth is good, is it not? I tell you, growth is good when it bows to purpose, and evil when it boasts against it. The sea is mighty, yet if it break its bounds, it becomes the ruin of fields and homes. So also with increase: let it serve the table and the traveler, and it is blessing; let it serve itself, and it is flood and famine in one day.",
"10. Keep a rule for your watering: first to the root, then to the branch; first to the hungry, then to the hedge; first to the house, then to the court. For if you water the hedge before the vine, you will make a beautiful famine; and if you polish the gate while the cupboard is bare, you will invite guests to witness your shame. Order is the meekness of abundance; disorder is the pride of lack.",
"11. I warn you concerning the impostor, who loves the leaf more than the life. He will cry, Behold how green is the work of God, and will lead you into a forest without fruit. He will confuse your eyes with many shades and call it maturity, and he will measure your holiness by the height of your fences. But when you pass through his grove and seek a cluster for the child, your hands will return empty though your arms be full of branches.",
"12. Let your pruning be faithful and your mercy near. Prune not to display your zeal, but to restore the sun to the forgotten places. Lay the blade to your own vine first, and the people will trust your hand upon theirs. For a gardener who will not bleed his own leaves cannot be trusted with the leaves of the poor.",
"13. The root is nourished by remembrance, and remembrance is bread for the living. Teach the names of the fathers and mothers at the table; tell how they broke the first loaf and shared the last cup. Sing the small mercies that kept the lamp, and the children will learn that the flame is dearer than the lampstand. Thus the root will love the earth again, and the fruit will be sweet with gratitude.",
"14. Beware the counsel that multiplies channels. Many channels are as many tongues: they speak confusion to the vine and carry silt into the heart. Keep two or three that are clean and near, and let the far waters wait until the near wells are faithful. For clarity is bread, and complexity is wind.",
"15. You ask, How shall we measure our harvest? Not by the baskets stored, but by the bowls emptied into hungry hands; not by the shade we cast, but by the wounds we heal beneath it. Count the reconciled more than the attendees, the fathers restored more than the funds raised. These numbers dwell gladly in Heaven, and they do not mildew when the weather turns.",
"16. If the garden feed the house, give thanks and keep watch; if the house feed the garden, repent and set guards at the sluice. For the heart of a people is not a reservoir for ambition but a spring for compassion. Whoever reverses this order builds a dam against his own soul and calls the still water peace.",
"17. There was a woman who kept a little court of herbs beside her door. Each morning she cut a handful for the sick and the travelers, and each evening she set aside seed for the morrow. A great lord passed by and said, Make this a garden for the city, and I will give you stewards and silver; and she answered, If stewards and silver stand between my hand and the hungry, then my herbs have become a palace for weeds. And the lord went on, and the woman’s door remained a gate to the Kingdom.",
"18. Let the first fruits go to the least, and let the last fruits go to the stranger; and take what remains for your own table with quietness and joy. This is the law of roots and bread: the more you pour outward, the deeper you drink within. Hoard, and your tongue will thirst though your cup be full; give, and your bones will sing though your purse be light.",
"19. Set elders at the paths who know the smell of rain and the sound of children. Let no steward be named who has not carried baskets and listened at night to the sorrow of a widow. For the root answers the foot that treads softly; it recoils from the heel that strikes. Appoint, therefore, shepherds who walk, not watchers who count.",
"20. If praise begin to gather like dew upon your hedges, shake it off at dawn and send it into the fields of the poor. Praise is sweet to the mouth and bitter to the belly; it nourishes only when it is sown again. The plant that drinks its own nectar will faint before noon; so also the people who feast upon their own report.",
"21. When disputes arise about the hedge and the gate and the trellis’ curve, bring a child and a beggar to the midst and ask them what they see. Children and beggars speak in the grammar of roots; they point to bread and to shelter and to light. If they bless your garden, you may bless your plan; if they are silent, be afraid of your beauty. For Heaven listens where the small ones look.",
"22. Keep seasons holy. There is a time to open the sluice and a time to bind it; a time to gather leaves for warmth and a time to cast leaves away for light. If you refuse the knife in autumn, winter shall teach it to you with iron; if you refuse the water in spring, summer shall preach to you with dust. Learn of the ant and the sparrow, for they keep feast and fast more wisely than councils.",
"23. The impostor will mock pruning and call it fear, and he will mock measure and call it unbelief. He will say, Let the water testify of our faith; and he will drown the lambs to prove his devotion. Answer him with fruit, not with argument; set a bowl before the orphan and let her speak. One clean cluster in the hand of the hungry silences ten thousand trumpets.",
"24. Remember the paths. A garden without paths is a thicket without law, and the strong will eat first while the weak are lost in the green. Cut the way plainly from gate to table, and mark it with songs; let the old lead the young by the same road. Where the path is true, the harvest is shared; where the path is hidden, the wolves are clerks.",
"25. Teach your keepers to read the sky and the faces, not merely the ledgers. Clouds and countenances are elder scriptures; they prophesy rain and famine of the heart. Many a garden failed beneath clear accounts because the eyes of the stewards were dull to tears. Blessed is the ledger that smells of bread and not of ink alone.",
"26. If a branch grow beyond its purpose, bind it to a burden and make it carry baskets. Idle growth is pride in leaf; service is humility in wood. Thus you will turn show into shelter and ornament into yoke, and the branch will thank you in winter when it is kept from breaking. Make beauty labor, and beauty will become love.",
"27. Keep counsel with neighboring fields, yet do not yoke your plow to a stranger’s hunger. Exchange seed with simplicity, water with honesty, and blessing with open hands. But let no covenant require your children to starve that another’s hedge may glitter. The Father loves fellowship, not entanglement; He joins hearts, not harnesses.",
"28. If wolves come, do not build higher hedges only; build warmer tables. Wolves are drawn to silence and to cold; they flee the sound of psalms and the steam of broth. Strengthen your watch by strengthening your welcome; a lit window confounds more thieves than a locked chest. The hearth is a sword the night cannot learn to parry.",
"29. Lay this sign upon your gate: The garden serves the house, the house serves the pilgrim, the pilgrim praises God. If any sign replace it — The garden is the house, the house is the garden — then write Ichabod upon your arch, for glory has departed into leaves. Return at once to the root, and wash it with tears and measured hope. In three seasons mercy will visit you again if you do not faint.",
"30. Amen, amen, I say unto you, keep the roots in the soil of the home and the fruit upon the tongues of the poor; prune with mercy, water with wisdom, and sing as you labor. For the Father walks at evening among gardens that remember the first garden, where love was law and labor was song. If you keep this command, your vines shall climb the light and stoop to the plate; the city shall be shaded without being swallowed. But if you forget it, the garden you praised shall overrun your streets, and you shall seek a door and find only leaves.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The False Shepherds in High Towers",
        parent: "yahawzhowaa-book-9-en",
        order: 5,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The False Shepherds in High Towers",
        parent: "yahawzhowaa-book-9-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-6-en",
        followingChapter: "yahawzhowaa-book-9-chapter-4-en",
        content: [
"1. And Yahawzhowaa lifted His eyes toward the hills and said, There will come a day when men will build towers in My name, yet My feet will not walk within them. For they will be high and filled with gold, and their windows will glisten like the sea in the sun; yet the hungry will stand in their shadow without bread, and the sick will lie at their gates without healing. The people will point to the towers and say, Behold the dwelling place of God; but I will say, Behold the prison of their own pride.",
"2. These towers will be built upon the backs of the people, stone laid upon stone by weary hands whose names are not remembered. The lords of the towers will call them brothers, yet they will know their faces only from afar. They will raise banners with My name upon them, yet they will not speak the truth of My words, for My name will be their trade and My Gospel their merchandise. And when they have fattened themselves, they will say, See how the Lord has blessed us, while the widow sells her cloak to buy bread.",
"3. I tell you, the false shepherds will be known by their distance. For a true shepherd walks among his flock, touching the lambs and lifting the fallen; but the false shepherd sits in a room above the gate and speaks through many mouths. He hears only what pleases him, for many guards stand between him and the cry of the people. And though his voice is sweet, his hands are empty.",
"4. I give you a parable. There was a man who claimed to tend the sheep of his father. He built a great tower beside the pasture, saying, From here I shall watch over them day and night. But the tower had no stairs to descend, and no path for the sheep to enter; and the man, having no way to touch his flock, hired others to speak his words to them. Over time, the sheep knew the voices of the hirelings, but they forgot the voice of their master; and wolves came in the hirelings’ clothing and were welcomed as friends.",
"5. Hear the meaning: those who place themselves above the people will soon lose the people. For love is not carried by messengers only, nor can compassion be sent down in baskets from a height. The shepherd must smell of the field, and his cloak must carry the dust of the paths his flock has walked. Without this, he is a sentinel for his own comfort, not a servant of the flock.",
"6. The false shepherd will wear the garment of a prophet, but his eyes will betray him. For his gaze will rest more upon the wealth of his tower than upon the wounds of his people. He will speak blessings upon the faithful, yet his blessing will come with a cost, for he measures devotion in gold and obedience in tribute. The Kingdom of God asks for the heart; the kingdom of the impostor asks for the purse.",
"7. You shall know them by the way they speak of the poor. A true shepherd calls the poor his brothers and seats them at his table; a false shepherd calls them his mission, yet eats apart from them. The former shares his cloak when winter comes; the latter sends the poor to stand in line while he warms himself by the fire. And though both will speak of service, only one will serve.",
"8. Beware the counsel of those who build tall and spacious buildings to draw the eyes of the nations. They will say, We build for the glory of God; but I tell you, they build for the glory of their own names. They will store up treasures in their storehouses while calling the people to give beyond their means, and they will say, This is faith. Yet when the famine comes, the storehouses will be locked.",
"9. The impostor delights in the illusion of nearness. He will appear before the people once or twice in a year, and they will say, See, he knows us. But his heart will be far from them, and his footsteps will never press the earth of their fields. For he fears the dust that clings to the feet of the poor, lest it stain the marble of his halls.",
"10. A true leader descends; a false leader ascends and remains there. The way of My Father is to wash the feet of His friends; the way of the impostor is to keep his hands clean while his servants labor. Therefore, when you see one who refuses to stoop, know that he has already chosen his master.",
"11. The false shepherd will never say My Name in truth. He will speak of the Lord, the Almighty, the Great One — but will not call Me Yahawzhowaa, for to speak My Name with honesty is to bind oneself to My path. And My path is narrow, and the walls of his tower are wide.",
"12. He will build his kingdom on the backs of men, using their labor to lift his throne. He will clothe himself in the testimony of others, wearing their faith as his robe while hiding his own unbelief. His reward will be the applause of the crowd, and he will measure his worth in the noise of their praise. Yet the applause will fade, and the silence will betray him.",
"13. Beware also those who keep themselves behind many doors. They will say, It is for safety, for order, for the work; but I tell you, it is for distance. For love does not hide behind locks, and truth does not speak through ten tongues before it is heard.",
"14. The impostor’s gospel is this: that the people exist to serve the kingdom. But My Gospel is this: that the kingdom exists to serve the people. In the day when this order is reversed, know that the shepherd has become a wolf.",
"15. I tell you a mystery: the coffers of the Church of God should always remain empty, but the hearts of the Church of God should always remain full. For gold in the treasury tempts the thief, but love in the heart disarms him. And the impostor cannot steal what is given away daily.",
"16. There was a ruler who sat in a high place and sent forth letters to the people saying, Your faith is known to me, and I rejoice in your offerings. Yet he had never seen the face of the widow who gave her last coin, nor heard the prayer of the child who went without supper to add to the temple’s purse. And though his letters were sealed with blessings, they were signed with the ink of neglect.",
"17. The false shepherd measures the strength of his flock by the size of the walls he builds. But the true shepherd measures the strength of his flock by the number of hands that clasp together in love. One will boast of battlements and gates; the other will boast of reconciled brothers and restored mothers. Choose, therefore, the one whose boast is love.",
"18. You say, But the towers shine in the sun; do they not declare the greatness of God? I say to you, the sun also shines upon the thrones of kings who curse His Name. Do not measure holiness by marble, nor truth by the weight of gold. The Kingdom of Heaven is measured in tears wiped away, not in stones laid upon one another.",
"19. A people once built a tower to the skies, saying, We shall reach the throne of God. But the Lord scattered them, for their tongues were proud and their hearts sought their own name. This same spirit builds in your day, though it wears the garment of religion. It climbs high to touch Heaven, yet it will not stoop to lift the fallen.",
"20. The impostor speaks often of the lost, yet his steps never find them. He will send others in his stead, and they will return with many tales; but the impostor will sit in his chair and bless himself for the work he has not done. This is the sin of distance, for love cannot be sent like a letter; it must be carried in the arms.",
"21. The high tower casts a long shadow, and in that shadow the weeds of injustice grow. Men will hide their greed beneath its shade, saying, We labor for God, when in truth they labor for the upkeep of the walls. The tower will stand as a monument to their vision, yet it will be hollow as a reed in the day of the Lord’s breath.",
"22. The false shepherd fears losing his place, and so he fears the truth. He will reward those who speak softly and punish those who speak plainly. But the true shepherd loves truth more than his seat, for he knows that only truth keeps the flock from the wolf.",
"23. There is a sound in the high tower — the echo of the shepherd’s own voice. He speaks to those who agree with him, and hears only the agreement he has bought. He is deaf to the cry outside the gate, for the walls of his pride are thicker than the stones of his tower.",
"24. The impostor will claim that his riches are a sign of divine favor. But I tell you, they are a sign of divine testing. For the Lord gives to see whether the gift will be given again, and the impostor fails when he hoards. Blessed is the one whose hands are empty at evening because they have given all at noon.",
"25. Beware when the shepherd demands tribute before he gives bread. For the bread of Heaven cannot be bought, and the water of life is without price. Whoever sells what the Father has given freely has already left the pasture of God.",
"26. The false shepherd sits in judgment over the sheep, counting their faults but not their wounds. He will say, You have failed, therefore you cannot serve; but I say to you, the one who has fallen knows the value of a steady hand. The kingdom is not built by the perfect, but by the forgiven.",
"27. You will know the tower by its gates, for they will be many and well-guarded, but the poor will not pass through them. You will know the tower by its windows, for they will be high and unbroken, but the eyes of compassion will not look out from them. You will know the tower by its song, for it will be loud and many-voiced, but the melody of mercy will be missing.",
"28. The impostor will bless the crowd with his right hand while gathering their gold with his left. He will speak of sacrifice, but it will be yours and never his. He will tell you to lay your life upon the altar, while he builds another step for his throne.",
"29. In the day of fire, the tower will stand for a moment, and the people will hide in its shade. But when the stones fall, only those who have built their house upon love will remain. For love is a foundation that neither wind nor flame can move.",
"30. Amen, amen, I say unto you, follow not the shepherd who hides in the high tower, but the one whose cloak is torn from walking among the thorns with you. For My Father knows His own, and His own know His voice, and He will not call them from afar but from the path where He walks beside them.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-9-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Garden That Consumes the City",
        parent: "yahawzhowaa-book-9-en",
        order: 6,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Garden That Consumes the City",
        parent: "yahawzhowaa-book-9-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-5-en",
        followingChapter: "yahawzhowaa-book-9-chapter-7-en",
        content: [
"1. And Yahawzhowaa spoke to them in the cool of the evening, saying, The Kingdom of My Father is as a garden planted in the midst of a city. When it is tended with wisdom, it gives shade in the heat, fragrance in the wind, and food for the hungry. But if it is left without the pruning hand, or if it is given too much water without measure, it will overgrow the streets, crack the stones, and swallow the houses, until the city is no more.",
"2. The garden was planted for the city’s life, not for its ruin; so is the Spirit given for the life of man, not for the making of a kingdom of men. For the gift that is not guided becomes a snare, and the blessing that is without boundary becomes a burden. And when the vine has no trellis, it will climb where it should not, and the fruit will fall where none can gather it.",
"3. I tell you a parable. There was a man who loved his fig tree more than his own children. He poured out water upon it day and night, even in the season when the sky already wept upon the earth. And the roots grew fat, and the branches thick, until they pressed against the walls of his house and broke them. When the rains came, the roof fell in, and his children fled. And he sat in the ruin, holding the fig tree that now bore no fruit.",
"4. Hear the meaning: the institution is as a garden, planted to serve the family. If it is fed without measure, it will become a master instead of a servant, and the very people it was meant to protect will be driven out. For the garden cannot be greater than the home, and the servant cannot be greater than the master.",
"5. There is one who waters for gain, and there is one who waters for life. The one who waters for gain does not see the cracks forming in the street; he says only, Behold how my garden grows. But the one who waters for life trims the vine when it stretches too far, and he clears the roots when they threaten the well.",
"6. The impostor who opposes Me will plant gardens in many cities, but they will be gardens for himself. He will say, This is for the Lord; but it will be for his own name. He will water them with the sweat of the people, and when the fruit comes, he will gather it into his own storehouses.",
"7. My Father’s way is to plant the seed in the heart and let it grow into a tree that shades the home. But the impostor plants his seed in the market, so that all must pass by his stall to eat. And the fruit of his tree is sold, not given; and its shade falls only upon those who have paid tribute.",
"8. A garden is beautiful when it serves the city; but when the city serves the garden, beauty becomes bondage. The people will work not for bread, but for petals; not for water to drink, but for fountains to please the eye of the planter.",
"9. I tell you truly, the overgrown garden will not notice when the poor are driven from the streets. Its leaves will drink the rain that should have filled their jars, and its roots will crack the stones of their dwellings. And the planter will call this the will of God, though he has not asked God’s will.",
"10. Beware the gardener who boasts of abundance without speaking of the mouths he has fed. For abundance that does not feed is not of the Father, and beauty that does not comfort is not of Heaven.",
"11. The overwatered garden is like a man who hears only one teaching and repeats it without measure. He will say, Give, give, give, without asking where the gift shall go. And in his zeal, he will choke the very ones he seeks to nourish, for he has not measured the cup nor seen the hand that holds it.",
"12. A garden is not kept by water alone, but by the hand that prunes and the eye that watches. So too the Kingdom of God is not kept by zeal alone, but by truth joined with mercy, and justice bound to humility.",
"13. The impostor will fill his gardens with statues and fountains, and the people will say, See, the Lord is here. But the true gardener will fill his garden with tables and benches, and the people will say, See, the Lord is among us.",
"14. I give you another parable. There was a city that planted a grove to shade the marketplace. In time, the grove grew wild, and the merchants could no longer bring their goods to the square, for the roots lifted the stones and the branches blocked the way. The city was starved of trade, and the people were scattered. Yet the grove remained, tended by no one, a monument to forgotten wisdom.",
"15. Hear the meaning: every good gift must be guided, or it will become the ruin of the one it was given to bless. And the institution that forgets its place will consume the life of the family to feed its own roots.",
"16. There is a season to plant, and a season to prune; a season to water, and a season to withhold the rain. My Father knows these seasons, but the impostor waters without ceasing, for he desires the size of the tree more than the sweetness of the fruit.",
"17. The city without a garden will be barren; but the city that is a garden will be overrun. Therefore, the wise master keeps his garden in the midst of the city, but not over it; and the wise shepherd keeps his flock in the midst of his heart, but not above it.",
"18. The impostor will teach that the garden is the city, and the city is the garden. He will erase the walls that protect the home, saying, All must serve the green. But My teaching is this: the home is the crown, and the garden is its servant; the garden may feed the crown, but it must never wear it.",
"19. The overgrown garden will draw many visitors, for men love to see what is great. They will praise its size and call it blessed, though the people in its shade are weary and hungry. This is the blindness of the age, that men see the leaf and not the hand that waters.",
"20. A day will come when the overgrown garden will wither in a single season, for the water will fail and the planter will be gone. And the city that served the garden will find itself bare, having forgotten how to plant for itself.",
"21. I tell you, a garden that depends on the tribute of the city is not of God. For My Father waters the earth without payment, and His trees grow without tax upon the poor.",
"22. The impostor will hide his greed in beauty, saying, See how the Lord prospers His work. But the Lord is not in the work that consumes the worker, nor in the beauty that blinds the eye to injustice.",
"23. The wise gardener gives the first fruits to the hungry, the second to the traveler, and the last to himself. But the impostor takes the first and the best, and gives the bruised and the withered to the poor, saying, It is enough.",
"24. The overgrown garden will become a snare to the foot, and the city will stumble in it. Men will trip over roots in the street, and the children will have no place to play. But the gardener will say, Behold, the fullness of the Lord, while the city mourns its loss.",
"25. If you would keep the garden and the city both, you must love the people more than the planting. For the fruit is for the eater, not for the branch; and the branch is for the root, not for the wall.",
"26. I say to you, every tree that does not give its fruit to the hungry will be cut down and cast into the fire, and its shade will be remembered no more.",
"27. The impostor fears the axe, and so he hides the hunger of the poor; but the Father delights in the one who bears fruit openly, for his tree is a praise to Heaven.",
"28. In the day of the Lord, the garden will be measured not by its size but by its giving. And the smallest plot that feeds a family will be counted greater than the vast grove that feeds only the planter.",
"29. Let the garden serve the city, and the city will guard the garden. Let the heart serve the family, and the family will guard the heart. This is the way of My Father from the beginning, and no other way will stand.",
"30. Amen, amen, I say unto you, when you see the garden rise above the city, know that it is no longer the planting of God but the work of men. And though it may stand for a time, it will fall, for only the planting of the Lord shall remain forever.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-7-en",
        title: "Chapter 7",
        subTitle: "The Kingdom in the Heart, Not the Storehouse",
        parent: "yahawzhowaa-book-9-en",
        order: 7,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-7-en",
        title: "Chapter 7",
        subTitle: "The Kingdom in the Heart, Not the Storehouse",
        parent: "yahawzhowaa-book-9-en",
        order: 7,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-6-en",
        followingChapter: "yahawzhowaa-book-9-chapter-8-en",
        content: [
"1. And Yahawzhowaa lifted His hand toward the hills, saying, The Kingdom of My Father is not as a storehouse filled with grain, nor as a vault filled with gold. It is as a living flame in the heart of a man, and it needs no walls to guard it. For the flame is guarded by the life it warms, and no thief can steal it, nor moth corrupt it, nor rust consume it.",
"2. There was a man who had much grain in his fields, and he feared the winter. So he built many barns and filled them, saying, Now my soul shall rest. But in the night the frost came early, and the barns were broken by the weight of the snow, and his grain was scattered to the wind. And he wept, for the treasure he had kept from the poor was now gone from his own hand.",
"3. Hear the meaning: the storehouse is safe only when it is in the hearts of men, for there it cannot be stolen, and there it cannot rot. But the storehouse of stone is a witness against the one who fills it while others hunger, for it cries aloud in the day of judgment, saying, Here lies the grain that was not given.",
"4. The impostor will build many storehouses and call them holy. He will say, See, the Lord has blessed us with abundance. Yet the doors will be closed to the widow and the fatherless unless they first bow to his altar.",
"5. My Father’s Kingdom is not kept by locks, nor by armed gates, nor by guards who count the coins. It is kept by the hands that give and the feet that carry the gift to the needy. And the one who gives daily has a storehouse that never empties.",
"6. A parable I give you. A city had a treasury in the center of its square, and every man gave a portion of his gain to it. But the keepers of the treasury feared that the people would steal from it, so they built a wall around it, and a gate with many locks. Over time, they forgot to open the gate, and the treasury grew, while the people outside went hungry. And when the famine came, the keepers fled with the treasure, and the city was left to starve.",
"7. Hear the meaning: when the gift is guarded more than it is given, it becomes a curse. And the people will bless the one who gives freely, but they will curse the name of the one who hoards in the name of God.",
"8. The impostor’s way is to keep the coffer full, for he measures faith in the weight of gold. But My way is to keep the coffer empty, for I measure faith in the weight of love.",
"9. There is a man who thinks himself wise because his purse is heavy, yet he does not see that the hole in his heart grows larger with each coin he keeps. And there is a man whose purse is always light, yet his heart overflows, and all who meet him leave richer than they came.",
"10. I tell you truly, the coin in the heart buys bread in Heaven, but the coin in the storehouse buys nothing beyond the grave.",
"11. The impostor will send forth messengers to collect tribute, saying, The work of God must be funded. Yet he will use the tribute to build walls higher and doors heavier, until even the faithful cannot reach him.",
"12. The true shepherd walks with empty hands, yet his people are never without. For his treasure is in the stories of those he has lifted, and his wealth is counted in the faces of those who sit at his table.",
"13. There was a ruler who feared that his people would forget him after his death. So he built a great vault and filled it with silver, and inscribed his name upon it. But when he died, the vault was broken by strangers, and his name was erased from the stone. And his people remembered him only as the man who did not share.",
"14. Hear the meaning: the memory of a generous man endures beyond the ruin of his house, but the memory of the hoarder fades with the rust upon his treasure.",
"15. My Father gives to all without asking their name, their work, or their worth. So must you give if you would be children of the Most High.",
"16. The impostor will teach that the storehouse is the measure of God’s blessing. But I say to you, the measure of God’s blessing is the laughter of the child who was fed, the sigh of the laborer who rests, and the song of the widow whose jar was filled.",
"17. A full storehouse tempts the thief; but an empty storehouse in the midst of a full people is a fortress that cannot be breached.",
"18. The impostor will feed the storehouse before the people, saying, First the Kingdom, then the man. But My Kingdom is the man, and the woman, and the child; and the storehouse is their servant.",
"19. When the storehouse grows fat while the people grow thin, know that the shepherd has become a merchant, and the temple a market.",
"20. I tell you a mystery: the bread that is given multiplies, but the bread that is kept molds in the dark.",
"21. The impostor will keep his treasures hidden, for he fears that the people will know how much he has taken. But the Father keeps His treasures in the open, in the fields and the rivers and the hearts of His children.",
"22. There is a joy in giving that the merchant cannot know, for his joy is in the taking. But the joy of the giver is like the morning light, which grows brighter the more it is poured out.",
"23. The storehouse is a good servant but a cruel master. When it serves the people, it is a blessing; when the people serve it, it is a chain upon their necks.",
"24. The impostor will command that the people give beyond their means, promising that Heaven will repay them. Yet he will never give beyond his own comfort, nor part with what he has gathered.",
"25. A day will come when the storehouses will fall, and the coins will scatter in the streets. Then it will be seen whose treasure was in Heaven, and whose was in the vault.",
"26. Blessed is the one who is rich in mercy, for his wealth will follow him into the Kingdom. But woe to the one who is rich in gold only, for his wealth will stay in the dust.",
"27. The impostor will dress his greed in robes of holiness, and the people will bow to him, thinking him blessed. But My Father sees the heart, and He will not be deceived by garments.",
"28. You will know the true shepherd because he will eat from the same bowl as his flock, and sleep under the same roof as his people.",
"29. Keep, therefore, your treasure in the heart, where it will not fail you in the day of trial. For the heart that is full cannot be emptied by any man.",
"30. Amen, amen, I say unto you, the Kingdom of God is not in the storehouse, but in the soul that gives. And the soul that gives is the true temple, and the temple that gives is the true Kingdom.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-9-chapter-8-en",
        title: "Chapter 8",
        subTitle: "The Two Builders: One on Sand, One on Rock",
        parent: "yahawzhowaa-book-9-en",
        order: 8,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-8-en",
        title: "Chapter 8",
        subTitle: "The Two Builders: One on Sand, One on Rock",
        parent: "yahawzhowaa-book-9-en",
        order: 8,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-7-en",
        followingChapter: "yahawzhowaa-book-9-chapter-9-en",
        content: [
"1. And Yahawzhowaa spoke to the elders, saying, The Kingdom of My Father is as a house built for the generations, not for the season. The wise builder lays his foundation on the rock, though it be slow and costly, for he knows the storms will test it. But the foolish builder lays his foundation on the sand, for it is quick and easy, and he delights in how soon his walls rise.",
"2. I tell you a parable. There were two men who set their hands to build. The first labored many days to cut the stone and set it deep, and the people mocked him, saying, Why is your work so slow? The second built in a single summer, and all marveled at how quickly his house stood.",
"3. Then the rains came, and the floods rose, and the wind beat against the houses. The one on the rock stood firm, but the one on the sand fell with a great crash, and the sound of it was heard in every field.",
"4. Hear the meaning: the rock is the truth of God planted in the heart, and the sand is the traditions of men piled without measure. The house is the soul, and the storm is the trial that comes to every life.",
"5. The impostor builds on sand because it pleases the eye and draws the crowd, but he fears the deep work that the rock requires. For the rock cuts the hand that shapes it, and the sand yields to every touch.",
"6. My Father’s way is the hidden foundation, unseen but unshaken. The impostor’s way is the visible height, admired but unstable.",
"7. There was a city that built its temple on the shore, so the pilgrims could see it shining from afar. But in the third year, the sea rose and claimed it, and the priests fled inland. Yet a humble house built of stone on the hill stood unmoved, though none had praised it before.",
"8. The wise builder counts the storm as his teacher, for it tells him where his wall is weak. But the foolish builder curses the storm, for it reveals what he would hide.",
"9. When you build on rock, you must first clear away the soil, and this is labor that no crowd applauds. So too when you build a soul, you must clear away pride, greed, and falsehood, though no man thanks you for it.",
"10. The impostor will build many towers on sand, for the sand makes them rise quickly, and their height will draw many. But when they fall, the ruin will be greater than their glory.",
"11. A house on rock is slow to rise but quick to stand; a house on sand is quick to rise but quick to fall. And in this, the truth of My Father is revealed: what is deep lasts, and what is shallow perishes.",
"12. The wise builder lays each stone as if it were the first, testing it for strength. The foolish builder lays each stone as if it were the last, caring only for the look of the wall.",
"13. There was a shepherd who built his pen on rock, though it meant the path was steep for the sheep. But in the flood, his flock was safe; while the shepherd in the valley wept as the waters took his lambs.",
"14. Hear the meaning: the path of safety is not always the path of ease, and the path of ease is not always the path of life.",
"15. The impostor will teach that the rock is too far, too hard, too costly, and he will point to his towers on the sand as proof that God favors speed. But I tell you, God favors what endures.",
"16. The wise builder plants his pillars deep in the truth, though it means they are unseen. The foolish builder plants his pillars in the praise of men, though they may topple in the first wind.",
"17. There was a merchant who built his warehouse on sand so the carts could come easily. But when the storm came, the road was swallowed, and his goods were lost. The farmer on the hill, whose road was narrow, kept his grain and his life.",
"18. So it is with the heart. The one who builds it on the ease of flattery and the shifting soil of wealth will lose it in the storm. But the one who builds it on the hard truth of My Father will keep it forever.",
"19. The impostor will decorate the sand with gold to hide its nature, but the flood will not be deceived. And the gold will sink with the sand, leaving nothing but mud.",
"20. A house on rock needs no defense but its own strength; a house on sand needs constant repair and the watchfulness of many hands.",
"21. The wise builder welcomes the small storms, for they show him where to strengthen the wall. The foolish builder prays that no storm will come, for he knows it will reveal his work.",
"22. The impostor builds for the eye; the true builder builds for the generations. And the eye forgets quickly, but the generations remember.",
"23. There was a mother who taught her children to plant their feet on the rock of the Word, though the path there was long. And in the years of famine and flood, her children stood when others fell.",
"24. Hear the meaning: every soul must choose its foundation before the storm, for the storm does not wait for the building to be complete.",
"25. The impostor’s house will fall in the day of trial, and his followers will scatter, each seeking a new shelter. But the house of the wise will be a refuge for many, even for those who mocked it in the building.",
"26. My Father delights in the house that stands after the wind has passed, for it is a sign that the builder has understood His ways.",
"27. The impostor delights in the applause at the raising of the walls, though he knows in his heart they will not stand.",
"28. I say to you, test your foundation before you raise your walls, for the wall can be mended but the foundation, once laid, is hard to change.",
"29. The rock is the truth that God dwells in the heart of man; the sand is the lie that God dwells only in the works of man’s hands. Build, therefore, where God is.",
"30. Amen, amen, I say unto you, the storm will come to every house, but only the house built on the rock of the Father’s word will stand in the day of His appearing.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The Shepherd and the Hireling",
        parent: "yahawzhowaa-book-9-en",
        order: 9,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The Shepherd and the Hireling",
        parent: "yahawzhowaa-book-9-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-8-en",
        followingChapter: "yahawzhowaa-book-9-chapter-10-en",
        content: [
"1. And Yahawzhowaa spoke to His disciples, saying, I am the Shepherd who lays down His life for the sheep. I know My own, and My own know Me, as the Father knows Me and I know the Father. But the hireling is not the shepherd; the sheep are not his own, and he does not know their names.",
"2. The hireling works for the wage, and his heart is in the purse. When the wolf comes, he looks to his own safety, for the wage is not worth his life. And the sheep are scattered because the one who watched them did not love them.",
"3. There was a man who built a pen of strong wood and iron, but he gave its keeping to one who cared only for his pay. The pen stood firm, yet the flock dwindled, for the keeper opened the gate to every thief who promised him silver.",
"4. Hear the meaning: the safety of the sheep is not in the strength of the pen, but in the heart of the one who keeps it.",
"5. The impostor is as the hireling, for he values the flock for its fleece, not for its life. He will shear them to warm himself, but he will not shield them from the storm.",
"6. My Father’s shepherd counts his gain in the health of the flock, not in the weight of the wool. And he will leave the ninetynine to seek the one that is lost, for love counts none as expendable.",
"7. There was a shepherd who slept at the gate, his body the door to the pen. In the night, the wolf came, and the shepherd rose and fought it, though he was wounded. And in the morning, the sheep grazed in peace, for their keeper had loved them more than his life.",
"8. Hear the meaning: the true shepherd bears the cost of the flock’s safety in his own body, and counts it joy to do so.",
"9. The hireling counts the hours until his pay, but the shepherd counts the sheep until they are all home.",
"10. The impostor will speak as if he loves the flock, yet he will not walk among them. His words are smooth, but his feet are dry, for he will not tread the muddy fields where the sheep wander.",
"11. A shepherd once found a lamb with a broken leg. He lifted it upon his shoulders and carried it many days, feeding it by hand. And when the lamb was grown, it never strayed far, for it knew the voice of the one who had borne it.",
"12. The hireling, finding the same lamb, left it in the field, saying, It is not worth the trouble. And the lamb was taken by the fox before the sun had set.",
"13. Hear the meaning: the worth of the flock is known by the shepherd’s willingness to bear the weakest.",
"14. The impostor keeps his hands clean, for he will not bind the wounds of the sheep; he fears the blood will stain his robe. But the shepherd’s robe is marked with the signs of his care, and it is his honor.",
"15. My Father is the Great Shepherd, and He gives the flock into the hands of those who will guard them as He does. Woe to the one who takes the staff but not the heart of the Shepherd.",
"16. There was a river that flooded every spring, and the shepherd carried each sheep across on his shoulders. The hireling drove them into the water, and many were lost. Yet he returned saying, The strong have survived.",
"17. Hear the meaning: the Shepherd rejoices in the weak that are saved; the hireling rejoices only in the strong that remain.",
"18. The impostor will sell the sheep to the butcher if the price is high enough, yet he will speak in the name of God while he does it.",
"19. My Father’s shepherd knows the sheep as a father knows his children, and he will not trade them for all the gold of the earth.",
"20. There was a mountain path that led to rich pasture, but it was narrow and steep. The shepherd went before the flock, cutting a way and calling them onward. The hireling went by the wide road, leading them to a barren plain.",
"21. Hear the meaning: the path of life is not always the easy one, and only the shepherd who walks it himself can lead the flock there.",
"22. The impostor will promise safety but give slavery; the true shepherd will promise truth and give freedom, though it be costly.",
"23. The hireling fears the wolf’s teeth; the shepherd fears the sheep’s hunger.",
"24. There was a night when thieves came to the pen, and the shepherd stood in the gate with his staff. The thieves fled, for they saw in his eyes the fire of one who would not yield.",
"25. Hear the meaning: the true shepherd’s presence is a fortress, for love makes him bold.",
"26. The impostor will feed himself first, and if there is any left, he will throw it to the flock. But the shepherd will feed the flock first, and if there is none left, he will go hungry.",
"27. My Father’s way is the table where all are fed, and the shepherd eats among the flock as their brother.",
"28. The hireling takes from the flock and leaves them lean; the shepherd gives to the flock and leaves them full.",
"29. You will know the true shepherd by the peace of his flock, and the impostor by their fear.",
"30. Amen, amen, I say unto you, the shepherd who lays down his life for the sheep is of My Father; but the hireling, whose care ends with his pay, is not of the fold.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "yahawzhowaa-book-9-chapter-10-en",
        title: "Chapter 10",
        subTitle: "The Garden that Overgrows the City",
        parent: "yahawzhowaa-book-9-en",
        order: 10,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-10-en",
        title: "Chapter 10",
        subTitle: "The Garden that Overgrows the City",
        parent: "yahawzhowaa-book-9-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-9-en",
        followingChapter: "yahawzhowaa-book-9-chapter-11-en",
        content: [
"1. And Yahawzhowaa spoke to the elders, saying, The Kingdom of My Father is as a garden planted in the midst of the city. If it is tended with wisdom, its vines will feed the hungry, and its shade will cool the weary. But if it is left without measure, it will climb over the walls and choke the streets, until the city is no longer a dwelling for men but for thorns.",
"2. Hear this parable: there was a man who planted a garden for the healing of his people. He set borders for it, that the paths might remain clear, and appointed keepers to water and prune. For many years, it bore fruit and the city rejoiced.",
"3. But in time, the keepers said, Let it grow as it will, for more is better. And the garden spread into the streets, covering the wells and breaking the stones of the road.",
"4. The people could no longer walk without cutting their feet, and the water was bitter with fallen leaves. And the garden, which had been a blessing, became a burden.",
"5. Hear the meaning: the garden is the work of God’s people, the city is the life of the community. When the work is not measured by love, it will overgrow its place and take from those it was meant to serve.",
"6. My Father’s way is order and peace, that the garden and the city might serve each other. But the impostor’s way is excess without measure, for he knows that even a good thing, when grown wild, can destroy.",
"7. There was a city whose leaders poured all the water into the garden, so that their fruit might be praised in the nations. But the houses dried, and the wells emptied, and the people thirsted though the vines dripped with grapes.",
"8. Hear the meaning: when an institution takes all the life from the people to feed itself, it no longer serves God but itself.",
"9. The impostor will say, The garden is God’s work, therefore it must be fed at all costs. But I tell you, My Father feeds the people first, for they are His image; the garden is their servant, not their master.",
"10. There was a king who built high walls around his garden and forbade the people to enter without tribute. And the poor starved at the gates while the fruit rotted inside.",
"11. Hear the meaning: any work that hoards its bounty is no longer the work of God, for He gives freely to the just and the unjust alike.",
"12. The wise keeper prunes the vine, though it be heavy with grapes, for he knows that unpruned fruit will sour on the branch.",
"13. So too must the works of the faithful be pruned, lest their branches grow only to increase their own shadow.",
"14. There was a city whose garden covered the watchtower, so that the guard could no longer see the road. And in the night, enemies entered, for the eyes of the city were blinded by its own abundance.",
"15. Hear the meaning: when the care for the work blinds the people to their watch against evil, they will be overrun though their storehouses be full.",
"16. My Father’s garden grows in the heart, where no wall is needed and no street is choked. It bears fruit for the soul, and its shade is for the weary spirit.",
"17. The impostor plants his garden where all may see, so that men will praise his harvest. But he does not feed the hungry unless their praise is loud.",
"18. There was a city that measured its worth by the size of its garden, and its leaders boasted, saying, None can match our fruit. Yet within, the children were thin, and the elders sat thirsty.",
"19. Hear the meaning: size is not the measure of God’s blessing, but the health of those who eat.",
"20. The wise keeper draws water first for the people, then for the vines. The foolish keeper gives the vines all the water, thinking the people will live from their beauty alone.",
"21. There was a river that flowed through the city, and its streams fed both garden and well. But the keepers dammed the stream for the garden alone, and the wells ran dry.",
"22. Hear the meaning: when the work of God takes all and returns little, it is no longer His work but the impostor’s.",
"23. My Father sends rain in season, that both garden and city may live. But the impostor will store the rain for himself, fearing that God will not send more.",
"24. There was a gardener who loved his vines more than his children. He rose early to tend them, but he did not notice when his children grew thin and sick. And in the end, there was no one to inherit his garden.",
"25. Hear the meaning: the true inheritance of the faithful is not the work they build, but the people they nourish.",
"26. The impostor will plant his garden on every hill, that all may see it, but he will not plant in the hearts of men.",
"27. My Father plants where the roots may drink from the living water, which flows not from the coffers of men but from His own hand.",
"28. There was a city whose garden was small but well-kept, and its people were fed and joyful. And travelers said, Surely God is in this place, for both the vines and the people flourish.",
"29. Hear the meaning: a small work in the hands of God is greater than a vast work in the hands of the impostor.",
"30. Amen, amen, I say unto you, let the garden serve the city, and the city serve the garden, and let both serve God. For when either rules the other, the harvest will turn to dust.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-11-en",
        title: "Chapter 11",
        subTitle: "The Secret of the Name",
        parent: "yahawzhowaa-book-9-en",
        order: 11,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-11-en",
        title: "Chapter 11",
        subTitle: "The Secret of the Name",
        parent: "yahawzhowaa-book-9-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-10-en",
        followingChapter: "yahawzhowaa-book-9-chapter-12-en",
        content: [
"1. And it came to pass, when the fire was low and the doors were shut, that Yahawzhowaa drew His friends near and spoke softly, saying, Keep this in your heart until the time is full: the Father of the Heavens is not an empty word nor an image made by men; He hath a Name that is not sold in markets nor shouted in streets. His Name is Wisdom. As breath is to the living, so is His Name to all that is; and whoever speaketh it in truth must walk in it, lest the tongue lie against the life.",
"2. Marvel not that I say unto you, the Father is called Wisdom; for He formed the paths by counsel, and He fashioned the light by understanding. By Wisdom the rivers keep their courses, and by Wisdom the stars keep watch at their stations. When you do a thing in truth and mercy, you walk in His Name though you speak it not; but when you speak His Name and depart from mercy, your mouth is a cymbal without sound before Heaven.",
"3. Keep this saying as a sign upon your heart: Wisdom is not far, that you should send ships to fetch Him, neither high, that you should climb a tower to find Him. Wisdom is near, even within you, as fire within the coal and song within the reed. If you listen with a quiet breast, you will hear Him call you by the name He gave at first.",
"4. I reveal a mystery among you: to know Wisdom is to know you are of Him. As a spring knoweth it is of the mountain and a flame knoweth it is of the sun, so the soul that awaketh knoweth, I am of my Father. Say not, I am a stranger beneath a hard sky; say rather, I am kin to the Light that fashioned me, and I return to Him by the path of love.",
"5. There was a child who asked, Where dwelleth God? And his mother set a lamp within a clay house and said, Behold, the lamp dwelleth in the house, yet the light filleth the house and is not bound by it. Even so your Father, whose Name is Wisdom, dwelleth in the Highest and filleth the lowly; He is beyond, and He is within.",
"6. Hear the parable of the mirror and the face. A man stood before a clear brook and saw his countenance; when the water was troubled, he said, The face is broken. But the face was whole, and only the water was wounded. So with Wisdom and the soul: the Image remaineth, though the heart be troubled; cleanse the water, and you will behold your kinship again.",
"7. Say not, If I be part of Wisdom, why am I small and sore? Doth not the branch bend in wind and yet remain of the tree? Doth not the ember darken and yet remain of the fire? Endure a little while, and the sap will rise; breathe upon the coal with prayer, and it will glow.",
"8. Keep secret what I speak until the time appointed, lest mockers trample the pearl and you be wounded without profit. For some love the sound of the Name but not the yoke of it; they would traffic in Wisdom as in spice, and weigh Him upon scales. But Wisdom is fire; He consumeth the scale and purifieth the hand that would sell Him.",
"9. The impostor will say, Wisdom is with us alone; bring tribute and learn His ways. But I tell you, Wisdom refuseth the bribe and taketh no wage from flatterers. He visiteth the widow’s lamp and the child’s crust, and maketh the small house great.",
"10. If you would know that you are of Wisdom, do the work of Wisdom. Bind up the broken, open your hand to the hungry, make peace between bitter brothers. For the Name liveth where His work is done; and whosoever doeth His work shall feel the river rise within.",
"11. There was a scribe who sought Wisdom in many books, and his shelves groaned like cedars in snow. But he would not sit with the poor nor stoop to the wounded. And Wisdom passed by his door as wind that findeth no window.",
"12. There was a widow who could not read, and she laid two figs upon a stranger’s cloth. And Wisdom sat at her board and blessed her house with laughter. Behold the secret: letters are ladders, but love is the door.",
"13. Ask not, Where is the temple of Wisdom? I say unto you, wherever a heart remembers the lowly, there is His court; wherever a table is made wide for the stranger, there is His altar. If you build Me halls and forget these, you hang a veil before an empty air.",
"14. The Name saith within you, Be of Me and return to Me. As the sea calleth the river by the pull that none can see, so Wisdom draweth you by desire toward Himself. Trust the drawing; it is the covenant written upon flesh and not upon stone.",
"15. Some will fear to speak this Name, thinking it a theft from Heaven; but the thief is not the son that repeateth his father’s name, it is the merchant that selleth it. Speak Wisdom with clean hands, and you honor Him; trade it for gain, and you blaspheme while blessing.",
"16. Keep balance in your knowing, lest pride creep in by the back door. To be of Wisdom is not to be above your brother, but beneath him with a towel; it is not to be a judge over the poor, but a servant under their burden. Whoso exalteth himself in the Name maketh a lie of the Name.",
"17. Hear another mystery: the fear of Wisdom is the beginning of Wisdom, and the love of Wisdom is its fulfillment. Fear keepeth your feet from evil; love maketh your feet swift to good. Walk in both, and your path will be straight.",
"18. There was a king who wrote the Name upon his crown and thought himself safe. But he devoured the lands of the meek, and the Name grew hot upon his brow and burned a mark that all could read. For the Name defendeth the poor; it is a sword for them and a fire for their oppressors.",
"19. If you would keep the Name, keep the little ones. Give them clean water and quiet bread; teach them truth without purchase and courage without cruelty. Then shall Wisdom make your house a singing-place, and your night-watch will be light.",
"20. The world asketh, Where is God when I am broken? And Wisdom answereth, I am in the hands that lift you, I am in the tears that wash you, I am in the patience that keepeth you from falling again. Do not seek Me in thunder only; find Me also in the long kindness.",
"21. I tell you plainly: the coffers of men prove nothing of Wisdom; the fullness of the heart proveth everything. A vault can be full and a city empty; a hand can be empty and a soul overflowing. Choose the fullness that cannot be stolen.",
"22. Let your prayer be simple: Father Wisdom, make me of what Thou art. Not merely a hearer of Thy sayings, but a doer of Thy nature. Temper my zeal with gentleness, sharpen my mercy with truth, and let my truth be warmed by mercy again.",
"23. There was a potter who worked in silence and sang only with his hands; his vessels fed the hungry and carried the widow’s oil. He never wrote the Name upon a wall, yet the Name shone from his work as morning from dew. This is how Wisdom is known among the gates.",
"24. Keep watch over your thoughts, for they are seeds; and Wisdom is the rain that maketh fruitful the good and drowneth the evil when you open the sluice. If you would be of Him, set your sluices in season and your fields in order.",
"25. Say to your soul each dawn, I am not a beggar at a strange door; I am a child returning to my Father whose Name is Wisdom. Then go forth and act as a child of the house: fearless in love, careful in justice, generous without counting.",
"26. The impostor will teach you to repeat names as charms, and he will sell you syllables for silver. But I give you a living syllable, written in deeds. Write Wisdom upon your neighbor’s hunger, and you shall read it in his laughter.",
"27. When you fall, do not say, I was never of Him; say rather, I forgot my house for a moment. Rise, wash, and return; for Wisdom is patient, as rivers are patient with crooked banks, and He bringeth the waters home.",
"28. Teach this secret to faithful ones who will keep it with life and not with locks. The key to the Name is likeness: become like what you adore. As iron in the fire groweth bright with the fire, so the soul that abideth in Wisdom shineth with His light.",
"29. And if any ask you for a creed, give them bread; if they ask you for a sign, give them rest. For the bread is the creed of Wisdom and the rest is His sign. By these shall the world learn His Name without quarreling.",
"30. Amen, amen, I say unto you, keep this secret in humility: the Father of the Heavens is Wisdom, and wisdom is to know you are of the Father. Walk then as sons and daughters of the Light; let your hands be His hands, your table His table, your breath His praise. And in the day of unveiling, what I have whispered will be thunder to the nations.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-12-en",
        title: "Chapter 12",
        subTitle: "The Family That Gathers Daily",
        parent: "yahawzhowaa-book-9-en",
        order: 12,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-12-en",
        title: "Chapter 12",
        subTitle: "The Family That Gathers Daily",
        parent: "yahawzhowaa-book-9-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-11-en",
        followingChapter: "yahawzhowaa-book-9-chapter-13-en",
        content: [
"1. And Yahawzhowaa sat among them in the cool of the day, and the smoke of the hearth curled upward, and He said, The family of my Father gathers not by decree but by desire, not by trumpet but by love.",
"2. As the birds gather each dawn without call, and as the lambs return to the fold each night without command, so shall the children of Wisdom draw together daily, for their hearts remember one another.",
"3. There was a village that met each morning at the well, not because it was written, but because their thirst was one. And none counted the days, for the joy was in the water and the company, not in the keeping of measure.",
"4. But there came among them a man with scroll and ink, who said, We must fix the hour and the day, lest we forget. And they obeyed his voice, and the joy of the well became the duty of the calendar.",
"5. Hear the meaning: only the tax collector sets a date and time for the family to gather, for he does not trust the heart to remember what love will not forget.",
"6. My Father, whose Name is Wisdom, wrote no hour in the sky for the rising of the sun, yet it comes without fail. Even so, the gathering of the children of Wisdom needs no clock nor horn.",
"7. There was a shepherd who called his sheep at every watch, and they came running, for they knew his voice. But when another man rang the bell by the turning of the sandglass, the sheep grew dull to the sound, and they came only when beaten.",
"8. The impostor will make your gatherings his merchandise; he will sell the hour as holy and the place as blessed, yet it is the people who are holy and the love that is blessed.",
"9. Keep your hearth warm each day, and your table open each day, and you will need no summons, for hunger and love will call you together.",
"10. There was a mother whose door was never shut; her children came and went with the sun, and her house was full of life. Another mother locked her door except on the day of meeting, and her children learned to love the street more than the hearth.",
"11. Hear the meaning: if you reserve love for the appointed day, the hearts of your own will grow wild in the alleys.",
"12. The family of Wisdom breaks bread daily, whether in twos or in tens, for they know the body is nourished by food, but the soul is nourished by presence.",
"13. I say unto you, the table that waits for the seventh day will grow cold, but the table that is set each day will always be warm.",
"14. The tax collector loves the ink more than the faces, the sum more than the song. He counts heads as coins and days as debts, and he calls this order. But my Father’s house is ordered by mercy, not by measure.",
"15. There was a fig tree that bore fruit in every season because its roots drank from a living spring. And there was another that bore fruit only when watered on the fixed day, and it withered in the long heat.",
"16. Gather daily, my friends, that your roots may drink without ceasing. For the impostor will try to bind the spring, saying, Drink only when I open the gate.",
"17. My Father’s wisdom is this: the more you share, the more remains; the more you gather, the more you can gather again.",
"18. Some will say, Without the written hour, we will forget. But the heart that forgets the family was never of the family.",
"19. There was a fisherman who mended his nets each evening with his brothers; they never marked the time, but their nets were always whole. Another waited for the day of meeting, and the tear grew so wide that no fish could be kept.",
"20. The impostor teaches you to sanctify the day instead of the deed. But I say to you, sanctify the love, and every day will be holy.",
"21. My Father, Wisdom, keeps no calendar in Heaven; He knows His own by their love, not by their attendance.",
"22. I tell you the truth, in the day when all things are weighed, Wisdom will not ask how often you met, but how deeply you cared when you did.",
"23. The family that gathers daily needs no walls, for their meeting place is the heart; but the family that waits for the appointed day must build walls to hold in what leaks away in the waiting.",
"24. There was a traveler who came to a village and found them feasting. He said, What festival is this? They answered, It is only today, and that is enough.",
"25. In the kingdom of my Father, every day is today, and the feast never ends for those who remember each other.",
"26. Let no man stand among you as the keeper of the clock, for the keeper of the clock will soon be the keeper of the purse, and the keeper of the purse will soon be the keeper of your freedom.",
"27. Gather while the bread is hot and the heart is tender; for love has its own hour, and it passes when delayed.",
"28. My Father’s house is always open; if you would be His children, keep your houses likewise.",
"29. If you must write anything, write the names of the poor and the sick upon your heart, that you may remember to bring them in when you gather. This is the only record Heaven will read.",
"30. Amen, amen, I say unto you, the family that gathers daily walks in the life of Wisdom, and their love will be the law that no man can tax.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-13-en",
        title: "Chapter 13",
        subTitle: "The Children of the First Sacred Mother",
        parent: "yahawzhowaa-book-9-en",
        order: 13,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-13-en",
        title: "Chapter 13",
        subTitle: "The Children of the First Sacred Mother",
        parent: "yahawzhowaa-book-9-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-12-en",
        followingChapter: "yahawzhowaa-book-9-chapter-14-en",
        content: [
"1. And Yahawzhowaa lifted up His hands over them, and His voice was like the river after rain, saying, Hear now the word I have kept for the last, for it is the root of your name and the crown of your head.",
"2. You are not orphans wandering under a broken sky; you are the seed of the first sacred mother, the one whom Wisdom chose in the beginning, when the dew was yet upon the grass of the world.",
"3. She was set apart from the multitude, not for beauty of face nor for strength of arm, but for the brightness of her soul, which was as the lamp of dawn in the hand of Wisdom.",
"4. In her, the Breath of the Father rested without measure, and her womb became the first garden wherein the seed of Heaven was sown into the soil of man.",
"5. From her came the first covenant, written not upon stone nor parchment, but in the flesh of her children, a law older than the law of Sinai and more enduring than the pillars of the earth.",
"6. I tell you plainly, the blood that runs in you is not common; it is the river drawn from that garden, and every drop remembers the voice that blessed it.",
"7. The impostor will labor to make you forget this, to sell you a lineage made of dust and conquest, to bind you to kings and idols that never knew your mother’s name.",
"8. But I restore it to you: she is called The First Bearing, for she bore not only flesh but the likeness of Heaven into the earth.",
"9. Her charge was this: keep the light as your own breath, pass it to your children as the marrow passes through the bone, and let no stranger buy it with silver.",
"10. This is why you are hated in the courts of men, for they cannot own what Heaven has marked, and they cannot bind what was free before the chains of the world were forged.",
"11. There was a vine planted by the first sacred mother at the edge of a desert; its roots found hidden springs, and no drought could scorch it. In the same way, you are rooted in the springs of Wisdom, though the world be a wilderness.",
"12. Your holiness is not learned from scrolls nor bought in markets; it is born in you as the song is born in the bird, as the scent is born in the cedar.",
"13. Guard it well, for the impostor will tell you it is nothing, that your worth comes from the walls you build or the coins you count. But you are worth more than walls and more than the weight of gold.",
"14. I say unto you, the temple of your body is older than the temple of any city, for it was shaped in the days when the Father named the stars.",
"15. Your feet walk upon soil your mother blessed with tears and with laughter; it will answer you if you keep it clean.",
"16. There will be some among you who despise their birthright, selling it for the bread of the tax collector or the favor of the merchant. They will be full for a moment and empty forever.",
"17. Keep yourselves from such hunger; feed instead on the bread of your people, which is mercy, and on the wine of your calling, which is justice.",
"18. The first sacred mother looked upon the generations yet unborn and prayed, Father Wisdom, keep them from the serpent who builds his house upon the backs of men. And I tell you, her prayer is upon you even now.",
"19. When you gather, remember her, for she sits unseen at your table; when you speak truth, remember her, for her breath is in your voice.",
"20. You are the proof of her covenant, and as long as one of you walks the earth in love, her light will not go out.",
"21. The impostor will try to dress himself as your mother’s son, speaking soft words while he builds high towers. But he will not know your heart, and his feet will not remember the path to the garden.",
"22. There is a mark upon you that cannot be erased, though kingdoms rise and fall. It is the mark of the first blessing, which says, This one is Mine.",
"23. Do not hide it for fear of the world; let it shine as the moon in a dark sky, for there are many wandering who will find their way home by its light.",
"24. Your sacredness is not a thing to be proud over others, but a thing to serve with; for the first sacred mother was servant of all before she was honored by all.",
"25. Walk as she walked — gathering the lost, binding the wounded, planting gardens in the places of ash — and you will be called her children indeed.",
"26. If you forget her, you will forget yourselves; and if you forget yourselves, you will bow to the impostor and call it worship.",
"27. But if you remember, you will stand when the world falls, and you will bless when the world curses, and you will live when the world counts you as dead.",
"28. The first sacred mother is not only behind you but before you; she waits at the door of the age to come, to welcome you with the words, Well kept, my children.",
"29. Keep the covenant in your marrow and the blessing in your breath; let it be known in your kindness, your courage, and your unbought love.",
"30. Amen, amen, I say unto you, you are the children of the first sacred mother, the garden of Wisdom in the midst of the nations. No power of the earth can take from you what Heaven has given, and no shadow can quench the light you bear. Walk in it until the dawn that has no evening.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



   chapter = {
        id: "yahawzhowaa-book-9-chapter-14-en",
        title: "Chapter 14",
        subTitle: "The Four Degrees of the Family",
        parent: "yahawzhowaa-book-9-en",
        order: 14,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-14-en",
        title: "Chapter 14",
        subTitle: "The Four Degrees of the Family",
        parent: "yahawzhowaa-book-9-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-13-en",
        followingChapter: "",
        content: [
"1. And Yahawzhowaa gathered them by the fire, and the night was still, and He said, I will tell you of the four degrees of the Midē´wiwin, for they are a mirror in which you may see yourselves, and a path you may walk together all the days of your lives.",
"2. These degrees are not locked in the lodge, nor are they bound to the feast days; they live in the breath of the family and may be kept seven days a week, at any hour when love stirs you.",
"3. The first degree is the remembering: to speak to one another of who you are and from whom you came, to tell the stories of the first sacred mother and the covenant you bear.",
"4. The second degree is the healing: to place your hands, your words, and your prayers upon the wounds of your family, that none among you should be left in pain without comfort.",
"5. The third degree is the sharing: to give freely of what you have, be it bread or song or counsel, so that no one is rich while another is poor, and no one is full while another is hungry.",
"6. The fourth degree is the walking: to live out the teachings in the sight of the nations, so that those who see you will know whose children you are, not by your words but by your ways.",
"7. These are the four degrees, and they are the lodge within your own hearts, and if you keep them as a family, you will be a living lodge wherever you go.",
"8. I warn you, do not place the ceremony above the family, for the ceremony was given for the family, not the family for the ceremony.",
"9. There was a chief who built a great lodge and adorned it with cedar and paint; he thought himself greater than his people, and he told the child who knew nothing, You are beneath me. And the lodge became a prison to his own heart.",
"10. Hear the truth: the child who knows nothing of the lodge is not without worth; the child is the living lodge of the Father of Heaven, and within them is the fullness of Wisdom.",
"11. Woe to the chief who shames the unlearned, for he has set himself above the work of the Creator and has measured the child of Heaven by the length of his own shadow.",
"12. The impostor will come into the lodge and say, The ceremony is the treasure, and he will use it to buy honor for himself. But I say unto you, the treasure is the family, and the ceremony is only the wrapping of the gift.",
"13. There was a grandmother who knew only one song of the lodge, and she sang it each morning to her grandchildren; they learned the lodge in her voice before they ever saw the inside of the cedar walls.",
"14. The heart learns before the head; the child belongs to Wisdom before he belongs to the lodge.",
"15. If you guard the degrees but lose the child, you have kept the husk and thrown away the grain.",
"16. The four degrees must be alive, not in the keeping of scrolls, but in the daily breath of the family — in the meals you share, the tears you dry, the paths you walk together.",
"17. There was a man who could recite every teaching but would not give bread to his hungry brother; his knowledge became a stone in his hand, not a seed in the ground.",
"18. Beware of chiefs who love the lodge more than the family; they will make the lodge heavy and the family light, until the family breaks under the weight.",
"19. The greatest chief is the one who kneels to serve the smallest child, for this is the way of the Father of Heaven.",
"20. Remember, the first sacred mother gathered her children under no roof but the sky; her ceremony was the sharing of life, and her lodge was the hearts of her people.",
"21. So it must be among you: let the lodge be in the family, not the family in the lodge.",
"22. The four degrees are not steps to climb above your brother, but circles to walk with your brother, so that none stands higher and none stands lower.",
"23. The child who has not yet learned a single teaching may yet teach you kindness; the elder who forgets the ceremonies may still bless you with mercy.",
"24. If you measure worth by degrees, you will count wrong; if you measure worth by love, you will count true.",
"25. Keep the lodge pure by keeping the family whole; do not sacrifice one for the other.",
"26. The day will come when some will use the lodge to bind the people, to take from them honor and wealth; they will say it is for the good of the lodge, but it will be for the good of their own names.",
"27. You will know them by this: they will guard the doors more tightly than they guard the hearts.",
"28. But you, my children, guard the hearts first, and the doors will guard themselves.",
"29. Practice the four degrees every day, in every place, with every member of your family, and you will never be without the lodge, for you will be the lodge.",
"30. Amen, amen, I say unto you, the family that lives the four degrees walks in the eternal circle of Wisdom, and no chief, no impostor, and no shadow can take them from the Father’s hand.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);




   chapter = {
        id: "yahawzhowaa-book-9-chapter-15-en",
        title: "Chapter 15",
        subTitle: "The Sealing of the Record & the Blessing of Agonabish",
        parent: "yahawzhowaa-book-9-en",
        order: 15,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-9-chapter-15-en",
        title: "Chapter 15",
        subTitle: "The Sealing of the Record & the Blessing of Agonabish",
        parent: "yahawzhowaa-book-9-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-9-chapter-14-en",
        followingChapter: "",
        content: [
"1. And it came to pass that Agonabish, being old and faithful, gathered the people at the great confluence and laid before them the copper leaves of the record.",
"2. He washed his hands at the Door of the West and his face at the Door of Within, and his eyes were steady as winter stars.",
"3. He said, I have heard your beginnings and your storms and your feasts; I have trimmed my words until they fit the truth.",
"4. The southern keeper stood at his side, and the garments of honor were hung above them like a gentle thunder.",
"5. Agonabish prayed, O Heaven above, make my stylus smaller than Thy glory and stronger than my vanity; let my lines be ladders for the humble and fences for the proud.",
"6. He inscribed the journey from Zhaawanong Gichi-Aki to the Breast of the Turtle, the first sunset and the learning of night, the Covenant of Peace and the Seven Doors.",
"7. He set the parables as stones in a river, that children crossing might place their feet without fear.",
"8. He wrote the law: Guard your seed without hating your neighbor; love your neighbor without surrendering your fire.",
"9. He added the promise given by the Messengers: that the God of Heaven binds what we cannot and loosens what we should not, if we walk in His keeping.",
"10. The Seal of the Seven was warmed by breath and pressed upon the page; and its circle drank light as a well drinks rain.",
"11. The people placed their hands upon one another’s shoulders, and the weight of community became a soft yoke easy to carry.",
"12. Agonabish blessed Giizhig-Ikwe: May your wisdom be cedar — evergreen, aromatic, and generous to fires that are true.",
"13. He blessed Aki-Inini: May your strength be river — persistent, clean, and obedient to the shape of mercy.",
"14. He blessed the children: May your laughter be law against despair and your chores be hymns.",
"15. He blessed the strangers: May your hunger lead you to honest doors and your feet learn respectful thresholds.",
"16. He warned softly: Beware the mask of compliments, the market that sells daughters, and the hurry that cannot pray.",
"17. He comforted boldly: If night lengthens, rejoice; God is nearer than lamps and kinder than blankets.",
"18. He spoke to future readers as if present, saying, You who hold this copper by a fire I cannot see — do not search it for spectacle; search it for bread, and share.",
"19. The aurora bent low, and a voice like remembered water said, I am with you in the counting of days and the resting of nights; keep your peace, and I will keep your borders.",
"20. The people answered, Amen, in many tongues, yet in one obedience.",
"21. Agonabish placed the record into a cedar chest with bread beside it, that memory should not hunger; and he taught the path to the place that keeps winters and receives summers.",
"22. He commanded that the chest be visited with silence first and with questions second; and the people learned to arrive properly.",
"23. The apprentices asked for a final rule; he said, Let truth be your straightest tool and kindness your sharpest edge; with these you may cut through any winter.",
"24. He set down the stylus; and the lodge seemed taller though no beam was moved.",
"25. A child whispered, Will we see you write again? He smiled, You will read me again; it is the same mercy wearing different clothing.",
"26. The Messengers withdrew as the dawn takes down its tents; and peace did not withdraw.",
"27. The people bore the chest with four hands that were the hands of all; and none stumbled, for the yoke was shared.",
"28. Agonabish lifted his palm in farewell and in welcome, for elders learn to do both at once; and he blessed the valley and the rivers and the far hills.",
"29. He spoke a last parable: A lamp that burns in a window saves more travelers than a torch that runs the road; be windows.",
"30. And the record was sealed, not to be hidden from hunger, but to be kept from pride; and its keeping became a habit, and the habit became a heritage.",
"31. Thus ends the abridgement of the journey of the Giiwedinong Anishinaabeg, from the first garden to the peace of long night.",
"32. Whoever reads, believe in the God of Heaven: plant, keep, share, and sing — these four are one road that never loses itself. Amen.",
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