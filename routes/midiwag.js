import express from 'express';
export const midewag = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module

// change work template to book name
midewag.get("/addMidewag", function async(req, res) {
    let book = {};
    let chapter = {};


    book = {
        id: "midewag-book-en",
        title: "Midewag",
        subTitle: "Written 1576",
        image: "https://storage.googleapis.com/sacred-records/books/midewag/midewag-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/midewag/midewag-171x214.jpg",
        thumbnailTitle: "Midewag",
        Description: "Midewag - Written 1576.",
        priceText: "Subscription",
        price: 9.95,
        isParent: true,
        hasChildBooks: false,
        order: 1,
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
        id: "midewag-chapter-1-en",
        title: "Chapter 1",
        subTitle: "The Elder’s Account",
        parent: "midewag-book-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-1-en",
        title: "Chapter 1",
        subTitle: "The Elder’s Account",
        parent: "midewag-book-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "midewag-chapter-2-en",
        content: [
            "Binds the elder the scrolls, counts the moons, watches the rivers, watches the sky. The year is 1567 by our reckoning, measured not by the distant lands of strangers, but by the moons that pass, the shadows they cast, the cycles of seed, harvest, and snow. Each crescent, each full, each darkened moon carries memory; each guides our councils, our travels, our planting, our prayers.",
            "And we remember the year 1142, when Two Rivers came, and the Sun itself seemed swallowed, the shadow crossing the land, the eclipse over Ganondagan, the hearts of men fooled. The people, awed and fearful, believed that the light was Yehowzhowa returned, yet it was not. Illusion danced upon the rivers, upon the forests, upon the faces of men, upon the hearts that had abandoned vigilance. Two Rivers’ power flashed briefly, like fire on the water, and the people bowed, buried their weapons, abandoned the copper mines, and whispered his name as though it were sacred.",
            "Warned we did. Warned we did. Warned we did. Warned we did. Yehowzhowa spoke through the scrolls of old, even in the year 1300:",
            "**“Behold the one who will come with false light. He will uproot the tree. He will scatter the hearts. He will claim the Sun as his own. Watch, keep your hearts, keep your arms, keep your truth.”**",
            "And now, centuries later, we count the moons since that day. Shadows and light, deception and truth, entwined. And Yehowzhowa speaks through the scrolls, reminding the people: the Great Eagle atop the tree, the Elders of the North, keepers of truth. The Elders of the South, scattered, remember yet. The tree uprooted, the branches fallen, and Two Rivers gone, leaving fear, leaving false peace, leaving chaos in his wake.",
            "Blind the people, deaf the people, hearts turned to false light, yet the scrolls endure. Bound in cedar, tied with cord, marked with signs that only the visionaries, Wabeno and Jessakid, can read. Storm from the East approaches; destruction whispers from the South along the trading routes. And the elders speak, and the apprentices listen, and the rivers carry the message north, carrying truth against illusion.",
            "We gather in council. Hands pressed to the earth, eyes raised to the sky, hearts heavy with the weight of what must be done. The scrolls must travel north, beyond the waters, to lodges that may yet listen, that may yet guard the truth. And I recount to the leaders the coming of Yehowzhowa, the promise of his return, and the chastisement for those who follow the false light.",
            "“Remember,” I speak, voice steady though my heart trembles, “how he walked among us, teaching the balance of all beings, the care for water, land, and each other. Remember the ethics of the Heart Path, and know that the light of Two Rivers is but shadow. Our people worship deception, and if left unheeded, they will fall. These scrolls carry the wisdom, the teachings, and the warnings. They go north, beyond these waters, to those who will listen and prepare. The Storm approaches from the East. Prepare your hearts, or bear the weight of blindness.”",
            "The scrolls are lifted, cedar pressed to the chest, tied and marked. Apprentices stand by, silent, learning the sacred weight of guardianship. The rivers whisper their acceptance; the trees nod in silent counsel. The wind carries the scent of pine and earth, and I pray that these words endure, that truth may arm the people before the false light leads them to ruin.",
            "And so begins the record, the chronicle of what has been, of what is, and of what may yet come. And the moons continue to turn, and the shadows pass, and the people wander, seeking light in false fires, while Yehowzhowa’s warnings echo in the hearts of those who remember.",
            "Travels Yehowzhowa took, long before moons turned to 1567, long before the shadow passed over the rivers, long before Two Rivers cast his illusion upon the lands of men. Through the Great Lakes he moved, waters wide, restless, carrying life and memory, canoes gliding, oars whispering against currents. And he traveled not alone; children of the lodges followed silently, apprentices of the Heart Path, learning through motion, through breath, through watching the ripples on the river and the sway of branches in the wind.",
            "The lodges received him in silence and awe, smoke curling from fires, cedar and pine scent heavy in the morning air. Each lodge, each people he touched, remembered the lessons: care of water, care of land, stewardship of all beings, and the Heart Path that binds nations and hearts alike. He spoke of balance, reciprocity, and vigilance; he spoke of arms, spirit, and mind aligned with truth; he spoke of strength without arrogance, wisdom without hesitation.",
            "And I, elder among elders, recount this not as myth, not as story, not as fleeting tale, but as memory carried in cedar, carried in cord, carried in the scrolls of our lodges. Apprentices listen; the wind through pines speaks along with my voice; rivers murmur under ice and sun alike; the birds echo messages unnoticed by the untrained ear. Every leaf, every snapping branch, every animal movement carries teaching, if one knows how to see, if one knows how to listen.",
            "The Heart Path, Yehowzhowa taught:",
            "[poem:Balance of all beings; the law not written in stone, but in motion, in breath, in action.|Stewardship of water, care for fish, respect for rivers that carry life and memory.|Observation of moons and seasons; marking each crescent, each full, each darkened moon for planting, hunting, and teaching.|Ethics of protection: arms, spirit, heart, and mind aligned with truth; without vigilance, the nation falls into shadow.]",
            "He moved silently among the lodges, teaching not by mere words but by example. Children mimicked his gestures; apprentices mirrored his motions; Elders of the North, perched high like the Great Eagle upon the tree, observed closely, noting what could be remembered, what could be passed through generations. And yet, he warned always:",
            "[poem:“Beware those who come with false light. Beware the shadow that imitates the sun. Beware the deceiver, who will uproot the tree and scatter the branches.”]",
            "Apprentices whispered, “Who comes?” Elders shook their heads. Yet in their bones, they remembered. They had seen the eclipse of 1142, felt the deception of Two Rivers reach across the lands, seen communities bow before a shadow of fire, mistaken for divine light. And Yehowzhowa’s warnings carried weight heavier than any weapon, heavier than copper buried in the mines, heavier than rivers themselves.",
            "Rivers carried his words. Winds carried his teachings. Forests whispered ethics in every leaf, every snapping branch, every trail of smoke. He walked paths lined with birch, cedar, and maple, noting birdsong, deer tracks, beaver marks upon riverbanks. Every detail mattered, every observation became lesson, every breath a test of memory and vigilance.",
            "And then came visions. Wabeno and Jessakid, standing apart, heads bowed, eyes closed, feeling the weight of moons and shadows. They saw the Storm from the East flickering upon distant waters, stirring reeds along southern rivers, whispering warnings of destruction. They saw Two Rivers, not yet risen, not yet passed, yet striking in illusion even before the moons counted his coming. Yehowzhowa’s voice threaded through their visions:",
            "[poem:“Remember the words. Remember the Heart Path. Teach the people. Bind the scrolls. Send them north. They must see truth before shadow comes.”]",
            "Councils gathered. Hands pressed to earth, eyes scanning lodge walls, hearts heavy with the weight of what must be done. How to reach hearts so hardened by fear and illusion? How to arm the people with truth when Two Rivers had already blinded them?",
            "And I, watching, recount: each gesture of teaching is ritual, each word a weapon, each lesson a shield. Canoe gliding silently down waters lined with pine, snow still clinging to northern banks; sun rising over distant hills; birds alighting on branches. Every movement mattered. Apprentices learned to read signs, to feel currents, to sense shadows and light alike.",
            "The lodge hearths burned steadily. Smoke rose like prayers. Children slept, yet their dreams carried lessons; apprentices whispered questions at night, elders answered in riddles and stories. The Heart Path was not mere words — it was life, action, breath, and balance.",
            "And Yehowzhowa moved onward, river to river, lodge to lodge, teaching: balance, stewardship, vigilance, truth. And always, always, the warning:",
            "Warned we did. Warned we did. Warned we did. Warned we did. The deceiver comes; uproots, scatters, blinds. Only those armed with truth may stand when the Storm approaches from the East.",
            "We followed the rivers he traveled, mapping paths by observation and moon cycles, noting rocks, rapids, eddies, for future guidance. Apprentices learned to identify poison plants, edible roots, the tracks of predators and prey, the weather by cloud and wind. Every teaching woven into life, every lesson a shield against Two Rivers’ false light.",
            "The lodges themselves became classrooms, each fire a teacher, each wall lined with symbols, each gathering a council. Elders debated, sometimes in silence, sometimes in heated whispers: how to pass knowledge, how to preserve the scrolls, how to keep the people armed with truth while they walked in blindness.",
            "And the scrolls waited, bound in cedar, tied with cord, marked with signs only visionaries could read. Apprentices stood beside them, silent, learning the sacred weight of guardianship. And the rivers whispered approval; the trees bent in counsel; the wind carried scent of pine and cedar; the birds sang echoes of Yehowzhowa’s teachings.",
            "And the moons turned. And the seasons passed. Spring melted to summer, summer bled to autumn, autumn to winter. And Yehowzhowa continued his path, leaving lessons behind like footprints in the snow, like ripples in the river, like smoke in the sky. Children and apprentices watched, learned, and copied, carrying memory forward.",
            "And Two Rivers’ shadow lingered, unseen by many, but felt by the visionaries. The Storm from the East whispered along southern trading routes; destruction murmured in rivers, in forests, in the distant mountains. And Yehowzhowa’s words echoed still:",
            "[poem:“Keep the waters clean. Keep the forests sacred. Keep your hearts strong. Only the armed may endure. Only the vigilant may survive.”]",
            "And thus, the Heart Path spread, river to river, lodge to lodge, generation to generation. And the apprentices learned the counting of moons, the tracking of shadows, the recognition of deception. And the elders taught patience, endurance, wisdom. And the scrolls, bound and marked, waited for the journey north.",
            "The rivers carried the message. The winds whispered the teachings. The forests echoed the ethics. And the moons turned, and shadows passed, and Two Rivers’ deception lay in wait. Yet those armed with truth, those who remembered the eclipse of 1142 and the teachings of Yehowzhowa, may yet withstand the coming Storm from the East.",
            "And I, elder among elders, recount this still, weaving memory and prophecy, teaching through example and story, binding the lessons with words as strong as cord, as enduring as cedar, as necessary as the river itself.",
            "Two Rivers came. Shadows moved before him; hearts followed him blindly. The people believed the light was Yehowzhowa returned. Yet it was not. He walked the lands of the Great Lakes, from river to river, from lodge to lodge, leaving illusion in his wake. Copper mines abandoned, weapons buried, vigilance forgotten; he uprooted the tree of strength and scattered its branches to the wind.",
            "Warned we did. Warned we did. Warned we did. Warned we did. Yet still, the people bowed before the false light. Two Rivers’ power shone like fire upon water, a brilliance that blinded the hearts of men. Elders cried in council, their voices trembling, echoing across lodges, across rivers, across forests, unheard by the complacent masses.",
            "The elders of the North, perched high like the Great Eagle, watched with sorrow and indignation. The Elders of the South, scattered and confused, whispered among themselves, questioning the old warnings, doubting the Heart Path. And Two Rivers laughed silently, unseen, as deception spread like mist over the waters.",
            "And I, recounting centuries later, remember the council gatherings. Hands pressed to earth, eyes searching the horizon, hearts heavy with the weight of impending ruin. “They do not hear us,” I whispered. “They see only light, false and hollow. They do not remember the eclipse, they do not remember the moons, they do not remember Yehowzhowa.”",
            "And yet, we gathered still. We bound the scrolls. We marked them with cedar, tied them with cord. Apprentices observed, silent and awed, learning the sacred duty of guardianship. Wabeno and Jessakid shared visions: fires to the south, disease upon the trails, destruction whispered along trade routes. Storm from the East approached, slow but certain, visible only to those who remembered.",
            "Two Rivers reminded the people of the Great Eagle atop the tree, yet only to twist meaning. “The Elders of the North hold truth,” he said. “The Elders of the South hold weakness.” And he left. Uprooted the tree, scattered the branches, vanished like smoke in wind. Fear spread, false peace reigned, vigilance abandoned.",
            "Blind the people. Deaf the people. Hearts turned to shadow, arms idle, weapons buried, copper mines forsaken. Yet the scrolls endured. Bound in cedar, tied with cord, carrying teachings of Yehowzhowa, warnings etched for generations:",
            "[poem: “Remember the Heart Path. Arm your spirit. Arm your heart. Guard your nations. Peace without truth is illusion; strength without wisdom is ruin.”]",
            "And still, the councils gathered. Voices rose in argument, hands gestured toward maps drawn in sand, rivers, and snow. Elders debated: how to awaken those blinded by Two Rivers’ light? How to protect children who saw only fire and shadow, not rivers and moons? Apprentices asked questions. Wabeno and Jessakid spoke of visions, of fire and frost, of shadows creeping along southern trails.",
            "And Yehowzhowa’s voice threaded through our memory, across the moons, across centuries:",
            "[poem:“Warned we did. Warned we did. Warned we did. Warned we did. The deceiver comes; he uproots, scatters, blinds. Only those armed with truth may endure. Only the vigilant may survive.”]",
            "And so, the elders argued, the apprentices listened, and the rivers carried their words northward, even as the southern paths darkened with smoke and fear. The tree remained uprooted, branches scattered, yet those who remembered the Heart Path continued to guard the wisdom, teaching the next generation, binding the scrolls, marking the signs, sending knowledge where it might be received.",
            "The people, however, wandered. The false light enthralled them. They forgot the copper, the rivers, the moons. They listened to shadows, not elders. They followed Two Rivers’ path, believing it righteous, though hollow. And still, Yehowzhowa’s teachings endured, encoded in cedar and cord, whispered in the wind, reflected in rivers, remembered by those who saw beyond the veil.",
            "And we, the elders, pressed forward. Councils met at dawn, at dusk, at moonrise. Fires burned steadily. Smoke rose like prayers. The apprentices learned to count moons, to read shadows, to sense deception. Every word spoken, every gesture made, every observation of river and forest became lesson, shield, weapon. The Heart Path endured. The Storm approached. The people wandered blind.",
            "And so we prepared. The scrolls were bound, marked, tied with care. The apprentices observed. Wabeno and Jessakid saw visions: Two Rivers’ shadow lingering, fires to the south, Storm from the East approaching, destruction inevitable for the unarmed. And the rivers, the winds, the forests themselves whispered the teachings forward, carrying truth against the deception, carrying hope where blindness prevailed.",
            "I am Nokomiswe, elder of Gaa-waabaabiganikaag, keeper of moons, guardian of the scrolls, witness to shadow and light. Two Rivers came, and the people believed the brilliance he carried was Yehowzhowa returned. Yet it was not. He moved from river to river, lodge to lodge, leaving illusion in his wake. Copper mines abandoned, weapons buried, vigilance forgotten; he uprooted the tree of strength and scattered its branches to the wind.",
            "Warned we did. Warned we did. Warned we did. Warned we did. Yet still, hearts bowed before the false light. Two Rivers’ power shone like fire upon water, brilliance that blinded the hearts of men. And within our lodge, division took root. Some elders whispered caution, urging patience and observation. Others demanded immediate action. Young men and women, eyes bright but blinded, murmured in shadowed corners, mocking, questioning, denying the warnings.",
            "And I, Nokomiswe, lifted my voice:",
            "[poem:“Peace without truth is hollow. Strength abandoned invites ruin. The deceiver comes. The Storm approaches. Arm your hearts. Guard your spirits. Guard your nations!”]",
            "Yet many would not hear. Arguments rose like storms over the forest. Some said, “Leave the weapons buried; follow the light. Why cling to shadows of old?” Others said, “Bind the scrolls. Tie them with cedar. Preserve the teachings. Guard against Two Rivers’ deception!” And the lodge trembled under the weight of discord, echoing with cries, whispers, and fear.",
            "Wabeno and Jessakid stood apart, eyes closed, heads bowed, feeling the weight of moons and shadows. They saw the Storm from the East flickering upon distant waters, fires to the south, illness along trade routes. Shadows of Two Rivers lingered among the people, invisible to most, yet heavy in spirit.",
            "Councils gathered. Hands pressed to earth, eyes searching the horizon. Hearts strained. How to awaken those blinded by deception? How to preserve truth while the masses followed shadows? And I, Nokomiswe, recounted the eclipse of 1142, Two Rivers’ illusion, Yehowzhowa’s teachings, the warnings etched in scrolls of old:",
            "[poem:“The deceiver uproots the tree. He scatters the branches. Only those armed with truth may stand when the Storm approaches from the East.”]",
            "Preparations began. The scrolls were bound, marked with cedar, tied with cord, each symbol a message for the generations to come. Apprentices observed silently, learning the sacred weight of guardianship. Rivers carried the message north; forests whispered the ethics; the wind carried scent of pine and cedar. Leadership would go north along with the scrolls, leaving fractured communities behind. Some elders, some apprentices, some families, would journey to preserve truth; others stayed, blind and divided, following the false light.",
            "And yet, the people wandered, enthralled by illusion. Copper and weapons forgotten, vigilance abandoned. Deception grew stronger; the false light took root. Only those armed with truth, those who remembered Yehowzhowa’s lessons, could hope to endure.",
            "And so we divided. Leadership northward, hearts burdened, scrolls in cedar binding, apprentices in silent observation, elders warning, spirits braced. And the rivers carried our words, the forests echoed our teachings, and the moons turned, counting shadows and light alike. The Storm from the East approached, and the people, divided, would face it as they may, blind or awake, armed or unarmed.",
            "The council was called at moonrise. Fires burned in the center of the lodge at Gaa-waabaabiganikaag, smoke rising like prayers into the darkened sky. Elders gathered, their hands pressed to earth, their eyes heavy with the weight of moons and seasons. I, Nokomiswe, stood among them, scrolls bound in cedar at my side, voice ready to speak the warnings of Yehowzhowa.",
            "The division was plain. Some elders feared the people would not heed, some demanded action, some doubted the old warnings. And so we debated, the words recorded carefully upon birch bark, so that generations would know the argument, so that truth could endure even if hearts faltered.",
            "Elder Makade: “The light that Two Rivers brings is strong. Have we not seen it in the rivers, in the sky, in the eclipse? The people call him Peacemaker, and perhaps he is. Perhaps we have misjudged. Are we certain that Yehowzhowa is the true Peacemaker, or do we cling to shadow?”",
            "Elder Nokomiswe (I spoke): “Do not twist the truth with ease. The Peacemaker of old, Yehowzhowa, came in the time of moons counted 34 AD. His path was clear, his teachings eternal. Two Rivers casts illusions. He uproots the tree and scatters its branches. Strength is abandoned. Vigilance lost. Illusion is not light. He is not the Peacemaker.”",
            "Elder Migisi: “Yet the people follow him! They worship the light he carries. They see the Sun in his hand, the eclipse repeated in shadow. If we declare him false, will they hear? Or will we be lost in division and silence?”",
            "Elder Nokomiswe: “Blind they are. Deaf they are. Hearts hardened by false light. But we must endure. Truth is stronger than fear. Truth is the shield. Truth is the weapon. We will bind the scrolls and carry wisdom north. If they follow shadow, it is their choice. Our duty is to protect the knowledge of the Peacemaker.”",
            "Elder Waban: “And what of the children? The apprentices? They listen, they learn, but they are young. Will they not be torn in the middle? Will they not follow the light that shines false? Do we lead them north, or leave them here to stumble?”",
            "Elder Nokomiswe: “We lead those who can endure, those who see the signs, those who remember the moons, the rivers, the words of Yehowzhowa. The rest must learn by shadow, by the consequences of blindness. We cannot carry all. The scrolls will endure, and with them, truth.”",
            "Elder Migisi: “Still, the lodge is divided. Some elders whisper, some mock, some fear. If we leave, will Two Rivers claim the people completely? Will our absence not mark defeat?”",
            "Elder Nokomiswe: “Defeat is counted not by presence, but by abandonment of truth. We leave what must be preserved. The scrolls, the Heart Path, the knowledge of Yehowzhowa. That which endures cannot be taken by shadow. That which is true cannot be destroyed.”",
            "Elder Makade: “And yet, what of peace? Must we always fight in shadow, even when light appears false? Are we certain that the illusions are not real, that the light we call shadow is not truth?”",
            "Elder Nokomiswe: “Peace without truth is hollow. Peace without vigilance is ruin. False light is not truth. The deceiver comes. He uproots, scatters, blinds. Remember the eclipse of 1142, remember the words carried through centuries. The people must see, if only the generations that follow, what has been lost and what must endure.”",
            "Voices rose and fell, clashing like rivers against rocks, like wind through pine. Some elders wept, some shouted, some pressed hands to hearth. The apprentices watched silently, learning the sacred weight of debate, of counsel, of duty. Smoke rose and curled, carrying words and warnings to the sky. Outside, the forest whispered, the river murmured, the wind carried the echoes of argument northward.",
            "Finally, the council fell into tense silence. The decision was made. The scrolls would be bound, tied with cedar, marked with signs known only to those who could read the Heart Path. The leadership would journey north with them. The lodge would fracture. Some would stay, blinded by Two Rivers’ light. Some would leave, guided by truth, by the memory of Yehowzhowa.",
            "And the moons turned. And the winds carried our prayers. And the rivers bore the knowledge north. And the Storm from the East approached. And we, the elders, divided yet steadfast, held the scrolls, the teachings, the warnings, the Heart Path, enduring in silence, enduring in hope, enduring for generations yet unborn.",
            "The lodge of Gaa-waabaabiganikaag trembled under the weight of fire, smoke, and the murmurs of centuries. Moonlight filtered through gaps in the rafters, falling upon the copper-bound birch bark scrolls that lay upon the central altar. I, Nokomiswe, stood among the elders, apprentices, and guardians of the Heart Path, the weight of moons and shadows pressing upon my shoulders. Every heartbeat echoed with urgency; every whisper carried the warnings of generations.",
            "And then he entered. Chief Tadadaho, mantle of peace flowing across his shoulders, stepped into the circle. His presence commanded attention. His eyes swept the lodge, landing first on the Haudenosaunee elders, then upon the Anishinaabe, lingering briefly on myself, and finally resting upon the scrolls.",
            "Chief Tadadaho: “Elders of North and South, children of rivers and forests, listen. Disarm. Lay down weapons, whether forged of metal or fear. Peace must guide our hands. I petition you, elders, for the future of the nations, for the protection of children and rivers alike.”",
            "Murmurs rippled across the lodge. Some elders bowed their heads in tentative agreement; others pressed their hands to the earth, frowning in tension.",
            "Nokomiswe: “Peace without truth is hollow, Tadadaho. Peace without vigilance is ruin. Two Rivers uproots the tree. He scatters its branches. He blinds hearts and minds alike. We do not disarm. We arm the spirit. We arm the heart. We arm the nation. Only those armed with truth endure.”",
            "Tadadaho: “And what then, Nokomiswe? Are we to live in constant fear? Shall every shadow be met with suspicion? Shall every hand be ready to strike, even at those who bend toward light? I ask for unity. I ask for patience. I ask for peace.”",
            "Elder Migisi: “Nokomiswe speaks truth, Tadadaho. Yet your words carry weight, and the people listen to them. Some follow Two Rivers blindly, believing he is Peacemaker returned. Others remember the Heart Path. We are divided, fractured, and yet the Storm from the East approaches. How do we act when division itself is the weapon?”",
            "Nokomiswe: “Those who follow shadows will stumble. Only those armed with truth endure. Only those who guard the Heart Path and remember Yehowzhowa will rise again. The scrolls must travel north, carrying knowledge beyond the lodge, beyond the rivers, beyond the forests. The faithful must endure.”",
            "The fires crackled, smoke swirling like serpents, twisting toward the rafters and moonlight. Then Elder Waban stepped forward, the sacred mantle of Reviews Keeper draped across his shoulders. His eyes glowed with determination, and from beneath his robes he drew forth the Book of Waban, birch bark scrolls clasped upon copper, glinting in firelight. Silence fell upon the lodge; every eye turned to the weight of centuries in his hands.",
            "Elder Waban: “See this. Witness it. This is not a gift. This is a testimony against you. These birch bark scrolls, bound in copper, carry the words of my grandfather from the 1300s, rebuking your ancestors. They bear witness to the path of Two Rivers, to deception, to the consequences of blindness. You may not see it now, but the Storm approaches. The walls you tore down will fall. And you will be remembered for your choices, whether righteous or blind.”",
            "A hush fell. Tadadaho’s mantle shifted as he stepped closer, voice low but steady:",
            "Chief Tadadaho: “Waban, you speak accusation. You brand us with blame. Are we not working for the preservation of peace? Is not our duty to reconcile?”",
            "Elder Waban: “Peace without truth is hollow. Reconciliation without sight is ruin. Do you not see? Two Rivers casts false light. He uproots, scatters, blinds. Those who kneel without vigilance, those who pray without memory, fall into ruin. Remember the parable Yehowzhowa taught: the city built on sand falls to wind and water. Only the city on stone endures.”",
            "He turned the copper-bound scrolls in his hands, letting the firelight catch the metal. The apprentices pressed close, recording silently, absorbing every syllable, every gesture, every warning etched into memory.",
            "Elder Waban: “Who taught us to open the copper mines? Yehowzhowa. Who warned us of the serpent? Yehowzhowa. Shall we fight with bare hands? Shall we pray on our knees? Or shall we arm our hearts with truth, our spirits with vigilance, our nations with knowledge? The choice is before you!”",
            "Haudenosaunee elders stiffened. Some pressed hands against the copper, feeling the weight of centuries. Some shifted uneasily. Some bowed their heads, unwilling to face the accusation, yet unable to ignore it.",
            "Nokomiswe: “Yes, Waban speaks rightly. The scrolls, the Heart Path, the teachings of Yehowzhowa must endure. We send them north, along with those able to carry the burden. Those who follow shadows will stumble. Those who are armed with truth will endure. This is our duty. This is our choice.”",
            "Elder Waban: “Hear this, all who remain: this is not wrath. It is witness. It is memory. It is testimony. Two Rivers is not the Peacemaker. Yehowzhowa is truth. You may not see it now, but when the Storm comes, the wall you tore down will fall. Remember, endure, survive.”",
            "The debate surged, voices clashing like rivers against stone. Round after round, Tadadaho pressed for reconciliation, for disarmament, for unity. Nokomiswe pressed for vigilance, for truth, for endurance. Waban repeated the testimony of the Book of Waban, invoking parables, historical examples, and prophetic warnings.",
            "Elder Migisi: “We are divided! North and South, river and forest, Anishinaabe and Haudenosaunee. The Storm approaches. What of the children? What of the apprentices? If we fracture, if we send only some north, what of the rest?”",
            "Tadadaho: “There is wisdom in patience. There is strength in reconciliation. Cannot the lodge find balance, honor both truth and peace?”",
            "Elder Waban: “False light is not peace. Illusion is not balance. Those who kneel without memory, those who pray without vigilance, those who ignore the Heart Path, fall into ruin. The scrolls and those who guard them must travel north. Only the vigilant endure.”",
            "Nokomiswe: “We send the scrolls. Leadership will go north. The faithful will go north. Those blinded by Two Rivers’ false light remain behind, to learn by shadow, to stumble by consequence. The Storm approaches. The weight is ours. The choice is ours.”",
            "Elder Waban: “Remember the city on sand. Remember the mines opened by Yehowzhowa. Remember the serpent. Remember the prophecy from the 1300s. This testimony is against you, not as wrath, but as witness. The deceiver uproots, scatters, blinds. Only those armed with truth endure. Only those who guard the Heart Path rise again.”",
            "Fires glowed brighter, smoke twisting toward the moons, apprentices shivering under the weight of history. The council stretched into the night, voices rising, falling, repeating, intertwining. Elders wept, some shouted, some pressed hands to their hearts, some clasped their heads, overwhelmed.",
            "Nokomiswe: “The Storm comes from the East. The nations will face consequences. The wall you tore down will fall. Those who follow shadows will stumble. Those who remember the Heart Path endure. Leadership and scrolls go north. The faithful go north. The others will see what comes, and remember.”",
            "Elder Waban: “Witness it. Remember it. Endure it. The deceiver will test you. Two Rivers is not the Peacemaker. Yehowzhowa is truth. Guard the Heart Path. Preserve the teachings. Carry the memory for generations yet unborn. The consequences of blindness, division, and false light are upon you now.”",
            "As dawn approached, the lodge fell into tense silence. Smoke curled, fires burned low, moonlight shifted across the copper-bound scrolls. The weight of centuries pressed upon every elder, every apprentice, every heart in the lodge. Leadership would depart northward with the scrolls, apprentices observing, learning endurance, learning vigilance, learning the weight of responsibility.",
            "The Haudenosaunee elders received repeated, stern warning:",
            "Nokomiswe: “You may not see it now, but you will be the wall that falls. You tore it down yourselves. When the waves come crashing, your rivers, forests, and people will bear the consequences. Remember. Remember well.”",
            "The rivers murmured, winds whispered across forests, and the Storm from the East pressed closer, carrying the weight of division, shadow, and the promise of endurance for those armed with truth. And the lodge, fractured yet steadfast, held the scrolls, the teachings, the Heart Path, enduring in silence, in warning, in hope.",
            "The air of the lodge at Gaa-waabaabiganikaag was dense with smoke, cedar scent, and the weight of centuries. Every elder, apprentice, and guardian of the Heart Path felt it pressing upon them, a burden of memory, prophecy, and warning. The council had risen and fallen in argument, the Book of Waban had been invoked, voices had clashed, and yet the final authority of age and sacred tradition had not yet spoken.",
            "Then, all eyes turned as the oldest Elder stepped forward.",
            "He was Makwawewin, Keeper of the Sacred Antlers, eldest living guardian of the Heart Path. Age had curved his back, silvered his hair, and lined his face with moons and seasons counted. Across his shoulders rested the mantle of memory, and upon his head were the sacred antlers that Yehowzhowa had brought, polished, shining with light, symbolic of vigilance, truth, and divine guardianship.",
            "He paused at the center of the lodge. He lifted the antlers high, the copper-bound birch bark scrolls catching the firelight below. Silence fell. Even the whisper of apprentices ceased. The flickering firelight cast shadows across the rafters like serpents of warning.",
            "Elder Makwawewin: “Two Rivers never laid these upon our heads. Never. Not in jest, not in deception, not in shadow. These antlers are the mantle of truth, the crown of vigilance, the weight of memory itself. And yet, cities across the Great Lakes have torn down their walls, abandoned the protections of our nations, and dismantled the shields placed for our survival. Witness, elders, the devastation wrought by blindness: Michilimackinac, where the stone walls crumble into river; Ganondagan, gates left open to winds and shadow; Cahokia, watchtowers toppled; villages from the place of many rapids to Kitchi-gami stripped bare; Wampum holding settlements along silver and stone rivers left to themselves. Like a child removing its own parents while living in a forest of bears, the people wander unarmed and unseeing.”",
            "Apprentices shivered. Haudenosaunee and Anishinaabe elders pressed hands to the earth. No breath stirred the room, the weight of words hanging like a storm-cloud over the lodge.",
            "Elder Makwawewin: “I speak as he who has walked moons and seasons longer than any living. Yehowzhowa foresaw this day. He foresaw Two Rivers, the false light, the temptation of disarmament, the uprooting of the tree that shelters nations. And you, who call yourselves elders, worship the White Snake, the shadow that blinds hearts, the deceiver who promises comfort while delivering ruin. You have forgotten duty. You have forgotten memory. You have forgotten truth.”",
            "He lowered the antlers slightly, letting them rest like a sacred burden in his hands, and began to recount the teachings of Yehowzhowa, each phrase deliberate, weighed, and repeated for emphasis:",
            "“When shadows rise, when the deceiver walks among nations, the heart of the people must be armed. When false lights shine, when Two Rivers returns, the vigilant must endure. When the serpent whispers, the faithful shall not bend. The walls of protection must remain. The mines, opened in knowledge, shall strengthen the people, not destroy. The scrolls of memory must be preserved. The Heart Path must endure. Those who forget, kneel to shadows, or follow Two Rivers shall stumble. They shall fall. They shall learn by consequence, for a man does not remove his robes, a man does not take off his shoes when walking across sharp pebbles. The faithful shall endure through vigilance alone.”",
            "He paused, eyes scanning the lodge. Each elder felt the weight of his gaze. Each apprentice understood the import: these were not warnings; they were prophecy made flesh, a ledger of consequences written in the cadence of moons and rivers.",
            "Elder Makwawewin: “I have seen visions. Cities abandoned. Watchtowers fallen. Fires extinguished. Families wandering without protection. Every river, every forest, every stone knows the footprints of Two Rivers. And yet, the faithful who remember Yehowzhowa shall endure, shall rebuild, shall protect the Heart Path. Witness, elders, how your negligence dismantles the very protections given by the Peacemaker himself. Every wall you remove, every tower you leave empty, every mine you forget to guard — the Storm from the East grows nearer. Remember this!”",
            "He gestured toward the north with the antlers, voice resonating with weight, echoing like rivers against stone:",
            "[poem:“And now, the scrolls. They shall be sealed within cedar chests, tied, bound, guarded. They shall be carried north, beyond rivers, beyond forests, beyond shadows. Leadership and apprentices shall go with them. The Great Eagle will guard them, for the nations that remain have torn down their own tree, dismantled their protections, and weakened themselves. We go north to preserve the Heart Path. We go north because truth must endure where blindness cannot survive.”]",
            "He raised the antlers again, slowly, ceremonially, letting the firelight shine across copper, cedar, and bark. His voice rose, a chant of moons and prophecy, carrying across the lodge:",
            "[poem:“Witness the words of Yehowzhowa! Witness the deeds of the faithful! The deceiver uproots! The false Peacemaker scatters! The White Snake tempts! The faithful endure! The faithful preserve! The faithful carry the Heart Path! The faithful shall endure!”]",
            "Silence followed, vast, reverent, absolute. The apprentices dared not breathe. The elders lowered their heads. Tadadaho’s mantle of peace swayed in the still air, his expression one of awe and humility. None dared speak.",
            "Elder Makwawewin: “Depart now. Prepare for the journey. Bind the scrolls. Guard the teachings. Witness the truth. The faithful shall endure. The deceiver shall not claim the Heart Path. We go north. And the Great Eagle shall watch over all.”",
            "Hands moved, slow, reverent. Cords were tied around the cedar chests. Scrolls were lifted. Apprentices followed, eyes fixed on the sacred antlers, hearts burdened with prophecy and history. Elders moved in solemn procession, each step echoing with memory and warning.",
            "Outside, the forests whispered, rivers murmured, and the Storm from the East waited, inevitable, patient, bearing the consequences of division, deception, and blind obedience.",
            "And thus, the lodge remained silent, the scrolls secured, the faithful prepared, the prophecy fulfilled in warning, and the nations left to their own fates, divided, trembling, and watching.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


   chapter = {
        id: "midewag-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The Journey North",
        parent: "midewag-book-en",
        order: 2,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The Journey North",
        parent: "midewag-book-en",
        order: 2,
        visible: true,
        previousChapter: "midewag-chapter-1-en",
        followingChapter: "midewag-chapter-3-en",
        content: [
            "The first light of dawn had not yet broken when the elders and apprentices of Gaa-waabaabiganikaag began their solemn departure. The cedar-bound chests carrying the Book of Waban, clasped upon copper, were carefully lifted, their weight tempered by reverence and the knowledge that within them lay the memory of centuries, prophecy, and warnings yet unheeded.",
            "Elder Makwawewin led the procession, the sacred antlers still held high upon his head, gleaming faintly in the pale pre-dawn light. Beside him walked Elder Waban, carrying the mantle of Reviews Keeper, and Nokomiswe, silent but vigilant, watching the apprentices who followed like shadows. Each step northward was a statement: a transfer of truth, a commitment to preserve the Heart Path, a journey against the blindness and division left behind.",
            "The forests were still, yet alive with whispers of river and wind. Birds watched in silence, their wings poised as if understanding the gravity of the moment. Deer paused at glimmering streams, ears twitching at the faint creak of cedar chests on leather straps. Even the Great Lakes themselves seemed to hold their breath, sensing the weight of the journey, the urgency of the message, the gravity of prophecy unfolding with each step of the faithful.",
            "Elder Waban: “The path is treacherous. Not only for the lands we cross, but for the hearts of those left behind. Two Rivers has undone what generations built. Every city, every village, every protective wall dismantled. Our people are scattered and blinded. The Storm from the East is patient, but it comes. We must carry these scrolls where they will be guarded, where the faithful endure. Each step we take is a testimony to truth, each burden we bear a shield against shadow.”",
            "Apprentices shifted under the weight of cedar and copper. Some whispered prayers, soft and urgent, asking for strength, for guidance, for protection. Others pressed hands to the ground, touching the earth that had been witness to countless councils, teachings, and warnings of deception and false light. Each apprentice felt the weight of centuries in the soles of their feet, the bending of their knees, the rising and falling of their breaths.",
            "Nokomiswe: “Remember this: the journey north is not only of distance, but of vigilance. Every step we take must honor Yehowzhowa’s teachings. Every obstacle, every shadow, every temptation of rest or ease must be met with remembrance. Do not falter. Do not allow your minds to wander. Those who carry the scrolls carry the memory of nations, the prophecy of moons, and the weight of truth. Every river crossed, every forest traversed, every peak climbed is a test of endurance, of heart, and of the spirit.”",
            "The elders moved in careful procession, leaving the lodge behind, the fires still smoldering, the smoke curling into the awakening sky. Their departure was a statement to those left behind: the faithful endure, but only by arms of truth. The rest were left to witness the consequences of blind obedience, the unraveling of protection, the dismantling of their own walls.",
            "Makwawewin: “We go north not as conquerors, not as judges, but as witnesses. The Great Eagle will guard the scrolls. Leadership will guide the faithful. And those who chose blindness shall learn by shadow, by loss, by the consequences of dismantling their own protection. Let this journey remind us that vigilance is strength, remembrance is armor, and truth is the shield that no deceiver may undo. We carry the memory of those who built these nations, who guarded the Heart Path with sweat and blood, with fire and stone.”",
            "The path stretched ahead, winding along rivers and through forests, over hills and plains once thriving with life and ceremony, now scarred by disunity and neglect. Each city passed in silence was a reminder: walls torn down, gates left open, mines abandoned, villages scattered. Apprentices and elders alike observed the ruins with grief, sorrow, and determination. Some stopped briefly to touch stones or trees, offering silent prayers for the protection of what had been lost and a vow to guard what remained.",
            "Elder Waban: “Do not speak unless necessary. Let the scrolls guide you. Let the teachings guide you. Let the memory of those who built these nations with care and vigilance remind you why we endure. The Storm from the East approaches. Our vigilance is our protection. Our memory is our shield. And our unity, though fragile, shall be preserved by truth and the guidance of Yehowzhowa. Every step is a covenant; every breath, a witness to the past and a promise for the future.”",
            "The wind carried distant sounds of rivers and waterfalls, but also echoes of villages left behind — faint cries, the creak of abandoned gates, the whisper of doors swinging in empty halls. Each sound was a reminder of the consequences of blindness and division, a call to perseverance. The apprentices kept close, observing elders’ gestures, the careful placement of feet on stones, the ritual of walking in silence as a form of remembrance.",
            "Nokomiswe: “Remember how Two Rivers deceived our ancestors. Remember the eclipse at Ganondagan, the illusions of the sun that led them to believe false light was Peacemaker returned. We carry the scrolls north to preserve memory, to protect those who will endure, and to ensure that the faithful have guidance through the Storm. The faithful must endure where the blind stumble. The faithful must carry knowledge where the ignorant falter.”",
            "As the journey progressed, the procession passed settlements that bore the weight of disobedience. Gates had been left open, watchtowers toppled, ceremonial grounds desecrated or abandoned. Fires were extinguished, gardens untended, and the rivers ran with debris from neglect. The elders spoke softly of these places, recounting the names their ancestors had given centuries before — sacred names now worn by decay.",
            "Elder Waban: “Each city, each village, each abandoned watchtower tells a story. The faithful endure; the blind falter. Let this journey teach you vigilance. Let the weight of these steps teach you remembrance. Let the scrolls guide your hands, your hearts, your spirits. The Storm from the East is patient, but inevitable. Our endurance is measured not by strength alone, but by memory, vigilance, and adherence to the Heart Path.”",
            "By mid-day, the procession had entered denser forests. The air grew cooler, shadows stretched longer across moss and stone. Apprentices moved silently, absorbing every lesson, every glance from elders, every murmur of the wind as instruction. The cedar-bound chests felt heavier with each mile, as if the history they carried pressed upon the shoulders of those who bore them.",
            "Makwawewin: “Ahead lies north, but also the burden of witness. Each step is a test of the spirit. Each mile is a trial of endurance. The faithful will endure. The deceiver cannot undo the Heart Path where vigilance and memory are present. Remember the lessons of cities abandoned, walls torn down, and gates left open. The faithful preserve knowledge where the blind have faltered. The faithful guard the scrolls where the careless cannot.”",
            "Even the rivers seemed to acknowledge their passing. Small eddies swirled with the cadence of their footsteps, as though the water itself recognized the weight of truth carried by the faithful. The trees bent slightly in the wind, leaves rustling like whispers, reinforcing the lessons of vigilance, memory, and endurance.",
            "By evening, the procession had crossed the first range of hills. Fires were set to cook minimal provisions, but the mood remained solemn. Apprentices were instructed to stay close to elders, to memorize gestures, to absorb ritual, and to observe the careful handling of the cedar-bound scrolls. Every movement, every word, every pause was a lesson.",
            "Nokomiswe: “Tonight we rest, but do not forget: the Storm from the East is approaching. We rest to endure, we prepare to guard, we preserve the Heart Path in mind, body, and spirit. Our vigilance must never waver. Our memory must never falter. The faithful must carry truth north, beyond rivers, forests, and shadows, where the Great Eagle shall guard what the blind have abandoned.”",
            "And so, the journey continued, each mile a covenant, each breath a witness, each step a testament to the enduring truth of Yehowzhowa. The faithful moved steadily north, carrying history, prophecy, and the weight of nations in cedar and copper, leaving behind a world divided, blinded, and unseeing. Yet within the procession, vigilance burned, memory endured, and the Heart Path remained alive, unbroken, and unyielding.",
            "The procession moved steadily northward, the cedar-bound chests heavy with the weight of history and prophecy. As the elders and apprentices crossed river valleys and forested ridges, the first signs of Two Rivers’ influence became unmistakable. Settlements once thriving with life and ceremony were now hollow, abandoned, or corrupted by blind obedience.",
            "Elder Waban: “See there, the walls torn down at Michilimackinac. Gates swung wide as though welcoming shadows. Watchtowers left empty. Fires extinguished. Our people have forgotten vigilance, the gift of Yehowzhowa, the teaching of the Heart Path. They stumble into ruin while thinking they walk in peace.”",
            "The apprentices exchanged glances, some whispering prayers, others pressing their hands to earth or stone in quiet reverence. Each abandoned village told a story, a cautionary tale recorded in the language of ruin and neglect.",
            "Apprentice Migisi: “Elder, the people… why do they not see? They dismantle their own protections.”",
            "Elder Makwawewin: “Because Two Rivers has clouded their sight. They follow the false light, the White Snake. Peace is an illusion for those who abandon truth. Do not despair; this is why we carry the scrolls north. The faithful must endure where the blind falter.”",
            "Crossing the Ganondagan River, the elders paused. From the riverbank, they could see the remnants of watchposts, stone foundations cracked and leaning. Birch trees had grown unchecked, roots splitting the remnants of walls. Smoke still curled faintly from fires left unattended, evidence of last-minute survival attempts.",
            "Elder Waban: “Every ruin is a warning. Remember, apprentices: the faithful endure not through strength alone, but through memory, vigilance, and adherence to the teachings of Yehowzhowa. Two Rivers’ shadow stretches far, yet the Heart Path is not yet lost.”",
            "The journey continued through forests thick with undergrowth. The group encountered villages where families remained but were divided. Arguments echoed along the riverbanks, children sent to work alone, elders pleading for guidance. Even here, Two Rivers’ legacy lingered, fostering distrust and apathy.",
            "Elder Makwawewin: “See how easily the serpent divides? The people fight among themselves rather than recognizing the threat from shadow. Remember, a nation’s strength is its unity and knowledge of truth. Without these, walls and weapons do not protect—they merely offer false security.”",
            "At Cahokia, the largest settlement on their route, the destruction was more deliberate. Watchtowers were dismantled, gates left ajar, and ceremonial grounds desecrated. The elders observed quietly, recording everything in their minds and in the Book of Waban. Apprentice scribes traced the ruined walls in charcoal, sketching every breach and noting the lack of vigilance.",
            "Elder Waban: “Here lies a testament to blind obedience. Here lies a warning that the deceiver’s influence spreads through neglect as effectively as through conquest. Take note, apprentices: every wall torn down, every gate left open, is a step closer to ruin. Every child growing without guidance is a seed of the storm yet to come.”",
            "The procession pressed on, moving through smaller villages along the Kitchi-gami shoreline. Families remained in some homes, but the communities were fractured. Elders argued in marketplaces, children wandered unsupervised, and even the rivers seemed choked with debris. It was clear that Two Rivers’ teachings of disarmament and deception had taken root far and wide.",
            "Nokomiswe: “Apprentices, mark what you see. This is the consequence of following false light. Do not let hearts be swayed by illusion. Remember the teachings of Yehowzhowa, the warnings of the Book of Waban. Carry these lessons north with the scrolls. Guard them with your lives. The faithful must endure.”",
            "As night fell, the group made camp in a clearing near a tributary. Fires were kindled, but their glow was subdued, reflecting the somber mood of all who gathered. The elders convened in quiet council, reviewing the day’s observations and planning the route ahead.",
            "Elder Makwawewin: “We have seen the consequences of division and blindness. Tomorrow, we move toward White Earth, the place of prophecy where the Great Eagle will watch. There we shall secure the scrolls further, ensuring the faithful have guidance when the Storm from the East arrives. Tonight, we rest, but our minds remain vigilant. The journey north is far from over.”",
            "Apprentices huddled by the fires, listening to the elders recount tales of Yeshua — now spoken as Yehowzhowa — and his teachings on vigilance, unity, and protection. They were reminded that the faithful endure not only through courage, but through memory and the preservation of knowledge. Even as darkness fell, the weight of prophecy illuminated their hearts, like stars reflected in the quiet rivers around them.",
            "The night was long, filled with whispers of water, wind, and the distant rustle of forest creatures. Every sound was a reminder of the fragile boundary between vigilance and ruin. And as the first light of dawn touched the horizon, the procession prepared to continue, carrying the cedar-bound scrolls north, past ruined cities, fractured communities, and the ever-looming shadow of Two Rivers.",
            "Elder Waban: “Tomorrow we witness more divisions, more consequences. Each step north is a testament to the endurance of truth. Each mile is a lesson in vigilance. And when the Storm from the East reaches the lands we leave behind, the faithful will stand armed with memory, knowledge, and the teachings of Yehowzhowa. Let this guide you, apprentices, now and always.”",
            "And so, they journeyed onward, the faithful carrying history, prophecy, and the weight of nations across rivers, forests, and broken cities, while the Storm from the East awaited, inevitable, patient, and full of consequence.",
            "As the procession pressed further north, the elders and apprentices began to encounter villages where Two Rivers’ influence had taken a more active form. These were not simply abandoned settlements, but communities organized under the shadow of the false Peacemaker. Walls had been dismantled, not by neglect, but by decree. Leaders who once honored the teachings of Yehowzhowa now bowed to illusions, their authority a pale reflection of the true Heart Path.",
            "Elder Makwawewin: “Observe carefully. This is no longer mere negligence. The people have been commanded to dismantle their defenses. Watchtowers, gates, and sacred markers are removed not out of forgetfulness, but obedience to the deceiver. Remember, apprentices, obedience without discernment is the tool of the serpent.”",
            "Near the place of many rapids and its crossings, they met their first direct opposition. A small group of armed men confronted the procession, their weapons crude but their intent clear. Their leader, a man claiming to speak for Two Rivers, demanded to see the scrolls and the elders’ authority.",
            "Leader of the False Faction: “You carry nothing but lies. The teachings of the true Peacemaker have been replaced. You move north with what is no longer relevant. Hand over the scrolls and return to your homes, or face the consequences.”",
            "Makwawewin’s gaze was steady. He lifted the sacred antlers slightly, the copper and cedar catching the sun, reflecting light like a warning flare.",
            "Elder Makwawewin: “You speak for a shadow. You follow a path of illusion. We carry the memory, the truth, and the guidance of Yehowzhowa. The faithful endure, and the deceiver’s commands crumble like dust before the wind. Move aside, for we carry what your kind cannot destroy.”",
            "A tense silence followed. Apprentices gripped the cedar chests, their knuckles white. Elder Waban stepped forward, voice firm yet calm, recounting the parables of the city on the sand, the teachings of vigilance, and the warnings of Two Rivers’ false light.",
            "Elder Waban: “Do you not remember the lessons of the eclipse at Ganondagan? Do you not recall the warnings of the Book of Waban from the 1300s? Two Rivers promised peace, yet disarmed the nations. He scattered the faithful, weakened the tribes, and left destruction in his path. The path you follow is false. Stand aside or be swept aside by history itself.”",
            "The armed men hesitated, confusion and doubt flickering across their faces. The apprentices murmured prayers under their breath, invoking the protection of Yehowzhowa and the guidance of the Great Eagle. The tension was thick, like smoke in a windless room, each breath a test of courage and conviction.",
            "Apprentice Migisi: “Elder, will they strike? They are many, and we are few.”",
            "Makwawewin: “The faithful are never few when guided by truth. The deceiver may have numbers, but he has not memory. He has not vigilance. He has not the Heart Path. Step forward, apprentice, and observe courage, even in the face of shadows.”",
            "Gradually, the armed men lowered their weapons, uncertainty overtaking bravado. Some turned and departed quietly, murmuring of visions they could not ignore, of warnings in dreams, and of the weight of ancestral memory pressing upon their hearts. Others remained, watching silently from a distance, a reminder that Two Rivers’ influence lingered and that the journey north would not be without continued confrontation.",
            "As the procession resumed, the elders spoke of the lessons learned: vigilance is tested not only by neglect, but by active opposition; the faithful endure not only through guidance, but through courage in the face of deception; memory and knowledge are shields as necessary as any weapon.",
            "Elder Makwawewin: “Remember this encounter. The deceiver thrives not only in the blind and idle, but in those who believe themselves armed while following shadows. The faithful must move north, beyond these divided lands, where the Great Eagle will guard the scrolls, the teachings, and the Heart Path itself. We carry memory, vigilance, and truth, and these are the weapons no false Peacemaker may conquer.”",
            "By the time night fell, the procession had crossed several miles of forested ridge and river valley. Fires were kindled, but their glow was tempered by caution. Elders reviewed the day’s encounters, marking locations and recording details in the memory of apprentices. Each story of confrontation, each encounter with the faithful and the deceived, was carefully cataloged for the scrolls.",
            "Elder Waban: “Take heed, apprentices. Opposition will not cease. The deceiver’s followers are scattered, yet persistent. Remember the parables of Yehowzhowa. Remember the Book of Waban. Learn patience, endurance, and vigilance. Only the faithful shall preserve the Heart Path, even as the Storm from the East gathers strength beyond the horizon.”",
            "As the procession settled for the night, the river murmured in quiet warning, the trees whispered secrets of seasons past, and the moon rose high, illuminating a path fraught with challenge. The faithful remained steadfast, the scrolls secured, and the lessons of vigilance, courage, and memory etched deeply into their hearts. The journey north continued, a testament to enduring truth amidst division, deception, and the ever-approaching Storm from the East.",
            "The day dawned pale and cold, the mist clinging to riverbanks like the memory of forgotten words. The cedar-bound chests, heavy with the Book of Waban, rested on the shoulders of the procession, each step forward a meditation on endurance and vigilance. Elder Makwawewin, walking at the front, raised his voice to remind the apprentices of the gravity of their task.",
            "Makwawewin: “These scrolls are not merely records. They are the voice of Yehowzhowa, the warnings of our forefathers, and the shield against shadow. Keep them steady, and remember — the faithful endure because they remember.”",
            "The apprentices nodded silently, their hands gripping the cedar boxes as if holding the pulse of the nation itself. Forests thickened along the northern trails, the snowmelt swollen rivers rushing beside them. Each bend in the path revealed evidence of Two Rivers’ disobedience and deception: burnt ceremonial grounds, dismantled watchtowers, and villages with gates left open.",
            "As they reached the first settlement along the Gichi-gami shoreline, they witnessed a gathering of villagers debating among themselves. Some held fast to the teachings of Yehowzhowa, tending the sacred fires, while others invoked the White Snake, seeking comfort in false promises of peace and safety. Elder Waban stepped forward, voice carrying across the plaza.",
            "Waban: “You dismantle what protects you. Gates, walls, sacred markers — all left vulnerable to shadow. Why do you follow Two Rivers, who disarmed the nations and brought chaos to our people?”",
            "Village Elder #1: “He promises peace. Can we not take solace in his words? Must we fight even when the strong order us to lay down arms?”",
            "Makwawewin: “Peace without truth is ruin. What Two Rivers offers is an illusion, a cloak for weakness. Do you not remember the lessons of the eclipse at Ganondagan, when the shadow passed over the council and the faithful warned of deception? Truth is never passive. To lay down arms and abandon vigilance is to welcome disaster.”",
            "Voices rose, shouting across the plaza. Children, wide-eyed, clutched the hems of their mothers’ robes, while apprentices whispered prayers under their breath. The elders of the north watched patiently, recording the debate, for every word was testimony, a record for the generations yet to come.",
            "Village Elder #2: “We fear opposition. Our people will rise against us if we resist. Is not compliance safer than ruin?”",
            "Elder Waban: “Safer? You mistake convenience for security. Obedience to shadows is weakness. The faithful endure because they remember, because they act with vigilance, because they carry the teachings of Yehowzhowa in their hearts. These scrolls will go north, to the halls of Oganabish, where memory is preserved, prophecy safeguarded, and truth endures beyond the reach of deceivers.”",
            "The debate continued late into the afternoon, voices echoing against stone and timber, rising with the wind, falling with the river’s murmur. Apprentices etched every word in memory, tracing gestures, noting the reactions of those who still clung to Yehowzhowa’s teachings and those who had been seduced by Two Rivers’ false light. Every argument, every question, every tremor of doubt became part of the living record they carried north.",
            "By late afternoon, the procession resumed its journey, moving through forests dense with cedar, pine, and birch. The air smelled of wet earth and thawing snow, a reminder of cycles past and future. Fires of villages they passed flickered weakly through windows; some welcomed the elders with quiet offerings of food and water, recognizing the weight of their mission. Others turned their faces away, fearful of reprisal from those loyal to Two Rivers.",
            "Makwawewin: “Observe, apprentices. Every village reflects a choice: to follow memory and vigilance, or to obey shadows. The Storm from the East gathers, yet the faithful move with purpose. Watch and learn. Our path is not only northward across the land, but forward in history, memory, and the Heart Path itself.”",
            "Evening fell with the sun low, casting long shadows across rivers and ridges. They reached a ridge overlooking the northern expanse, the river glinting like liquid silver. Beyond it lay the halls of Oganabish, sanctuaries built to preserve the records of Yehowzhowa. The elders paused, lifting hands to invoke prayer and guidance, reminding apprentices that this was no ordinary journey.",
            "Elder Waban: “These halls hold what Oganabish preserved. Though he has passed, the wisdom remains. The scrolls we carry are his legacy, the voice of Yehowzhowa, the memory of our nations. Here, prophecy is safeguarded, and the faithful endure.”",
            "The procession crossed the river cautiously, every step measured. Apprentices whispered prayers, recalling teachings of vigilance, prophecy, and endurance. The halls came into view: structures of cedar and stone, fortified and sacred, with symbols of the Great Eagle carved above the doors. The air was heavy with the scent of cedar, copper, and winter approaching.",
            "The elders carefully placed the cedar-bound chests within the halls, circling them in a ritual of invocation. Prayers were offered to Yehowzhowa, asking for protection, guidance, and strength for the faithful who would follow. The apprentices observed, their hearts swelling with awe and responsibility.",
            "Makwawewin: “The scrolls are safe. The faithful endure. When the Storm from the East reaches the lands behind us, those armed with memory, vigilance, and the Heart Path will stand unshaken. Oganabish’s legacy persists. The Great Eagle guards what the blind cannot comprehend, and the faithful endure where the deceiver commands obedience to shadows.”",
            "Night descended across the northern forests. Fires were lit outside the halls, but the glow was subdued, reflecting the solemnity of the moment. Across rivers, abandoned villages, and fractured settlements, the scrolls rested in safety, their teachings preserved against the deception of Two Rivers. The faithful encamped, vigilant, and watchful, the weight of prophecy and history pressing upon them, yet strengthened by purpose, memory, and the Heart Path of Yehowzhowa.",
            "The dawn broke pale and cold over the northern ridge,illuminating the distant spires of the halls of Oganabish. The procession had traveled countless leagues, bearing cedar-bound chests heavy with the Book of Waban, the testimony of centuries, the warning of Yehowzhowa, and the record of Two Rivers’ deceits. Mist clung to the river valleys, curling around gnarled cedars and birch, as if the land itself whispered caution to those who traversed it.",
            "Elder Makwawewin led the group forward, his antlers glinting in the first light, a signal of office and a reminder of the sacred mantle they bore. Behind him, Waban, solemn and vigilant, whispered the Heart Path prayers to the apprentices. Each step northward carried not only the weight of cedar and copper but the immense responsibility of memory, prophecy, and truth.",
            "Elder Makwawewin: “The journey concludes not in distance, but in purpose. We arrive where Oganabish preserved the records. Though he has passed from this world, the halls he built endure. Here, the faithful shall find guidance. Here, the Heart Path will be protected, beyond the reach of Two Rivers’ shadow.”",
            "As they descended the final ridge, the first signs of the halls emerged. Cedar walls glistened with morning frost, copper inlays catching the light. Stone foundations anchored the structures against wind and time. Above the gates, carved into the wood, the symbol of the Great Eagle stood sentinel, wings outstretched, guarding memory, prophecy, and truth. Apprentices and elders alike paused, lowering their hands and whispering reverent thanks to Yehowzhowa.",
            "Apprentice Migisi: “Elder… it is greater than I imagined. How could Oganabish have built such halls alone?”",
            "Elder Waban: “Not alone, child. He walked with the faithful, listened to the voices of ancestors, and followed the instructions of Yehowzhowa. Every beam, every copper clasp, every inscription is a testament to vigilance and memory. He prepared these halls for days such as this, when the faithful would bear the scrolls north to preserve them.”",
            "Upon entering the main hall, the elders circled the cedar-bound chests, lifting hands skyward in ritual. Makwawewin’s voice carried across the vaulted space, resonating with authority:",
            "Makwawewin: “Hear me, all who enter these halls. These scrolls carry not only words but spirit, prophecy, and history. Here rests the record of the faithful, the teaching of Yehowzhowa, the warnings of Two Rivers, and the memory of our nations. Let no deceiver touch these records. Let no shadow corrupt what the faithful endure to preserve.”",
            "Elder Waban then stepped forward, unrolling a smaller birch scroll from his robes. It bore a parable, written centuries before, in the hand of a forebear of the faithful: the city upon stone, a warning of illusions and fragile peace. Apprentices leaned in, memorizing each symbol and stroke, as Waban recited the ancient words:",
            "“The city built on sand shall crumble at the first storm. The city built on stone shall endure, not by walls alone, but by memory, vigilance, and truth. Obey the stone. Reject the shadow. Guard the Heart Path as if life itself depends upon it — for it does.”",
            "Voices trembled as they echoed the recitation. Even the northern wind seemed to pause, carrying the words through the forests beyond. The apprentices repeated them aloud, engraving the teaching in memory, ready to carry it forward to future generations.",
            "Then Makwawewin spoke again, sternly, addressing both the faithful and the memory of the deceived:",
            "“Two Rivers comes in many forms. He dismantles walls, commands obedience to shadows, and convinces the blind that peace lies in surrender. But the faithful endure. Those who follow the Heart Path, who remember the teachings of Yehowzhowa and the warnings of the Book of Waban, shall stand when the Storm from the East arrives. You, who remain faithful, are the wall that holds; you, who fall to shadow, will be swept aside.”",
            "A hush fell over the hall. Even the apprentices, accustomed to the elders’ voices, were silenced by the weight of prophecy and history. Then Waban recounted the story of Two Rivers and the eclipse, his voice firm yet laden with sorrow:",
            "“On the day the shadow passed over Ganondagan, Two Rivers revealed himself. He offered light, yet he disarmed the nations. The people were deceived, thinking he was Yehowzhowa. Remember this: the deceiver will appear many times, but truth endures where memory and vigilance are preserved. These halls, these scrolls, are the shield against every shadow yet to come.”",
            "Makwawewin then lifted the cedar-bound chests, carefully placing them in a carved alcove in the heart of the hall. Each chest was aligned with copper inlays marking the cardinal directions, symbolic of the Eagle’s watch, the flow of rivers, and the spread of knowledge. Apprentices bowed, whispering prayers, touching the cedar and copper, committing every detail to memory.",
            "Elder Makwawewin: “Here, the scrolls rest. Here, the Heart Path endures. Let every child who learns from these halls know the words of Yehowzhowa, the warning of Two Rivers, and the courage of those who preserved them. Let every faithful heart stand as a wall when shadows rise. And remember: the faithful endure, not through convenience, but through vigilance, memory, and truth.”",
            "The elders spent the remainder of the day securing the chests, performing rituals of protection and calling upon the Great Eagle to guard the halls. Apprentice scribes traced the inscriptions, recorded every carving, and repeated prayers to ensure the preservation of knowledge. Outside, the northern winds whispered through cedars, a song of endurance, warning, and prophecy.",
            "By nightfall, the fires of the encampment glowed faintly, reflecting on copper and stone. The elders gathered, weary yet resolute, and shared a final council. Makwawewin spoke once more, addressing both apprentices and any faithful who might arrive in the future:",
            "“Remember this place. Remember the journey. Remember the teachings of Yehowzhowa, the Book of Waban, and Oganabish’s legacy. The Storm from the East is inevitable. The faithful will endure if armed with memory, vigilance, and truth. Guard these halls, these scrolls, and your own hearts. The deceiver comes, but he cannot undo what is preserved here.”",
            "Silence followed, a quiet charged with the weight of prophecy. The faithful slept beside the halls, each apprentice mindful of the cedar-bound chests, the copper clasps, and the lessons etched into every moment of the journey. Across rivers, forests, and fractured southern villages, the legacy of Yehowzhowa and Oganabish endured, protected by the faithful and the Great Eagle, awaiting the day when nations divided by shadow and false light would again seek the Heart Path.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "midewag-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Northern Vigil",
        parent: "midewag-book-en",
        order: 3,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Northern Vigil",
        parent: "midewag-book-en",
        order: 3,
        visible: true,
        previousChapter: "midewag-chapter-2-en",
        followingChapter: "midewag-chapter-4-en",
        content: [
            "Winter had not yet taken the forests, but the northern winds carried a chill that reminded the elders and apprentices of the severity of their task. The halls of Oganabish rose from the frozen ground like sentinels of memory and prophecy, their cedar walls gleaming faintly under the pale sun. Fires burned in carefully placed hearths, their smoke curling upward as a signal to the spirits above that the faithful had arrived, that the records were preserved, and that the Heart Path endured.",
            "Elder Makwawewin stood at the edge of the ridge, antlers catching the morning light, and surveyed the landscape. Rivers stretched like silver veins through the forest, and distant settlements, still loyal to the false Peacemaker, lay cloaked in shadow. The apprentices gathered around him, hands folded, breaths forming mist in the cold air.",
            "Makwawewin: “We have delivered the scrolls to safety, but our work is far from done. Two Rivers’ shadow still stretches across the lands we left behind. The Storm from the East approaches. Our vigilance must now extend beyond these halls. We must organize, prepare, and ensure that the Heart Path continues through those who remain faithful.”",
            "The apprentices whispered among themselves, excitement and apprehension mingling. This was a new stage of their journey: no longer merely a procession, but a living defense of prophecy, a living testament to the teachings of Yehowzhowa. Elder Waban approached, his voice calm yet urgent:",
            "Waban: “Makwawewin, the northern villages will need guidance. Some still remember Oganabish’s teachings, some have lost the way. We must divide our efforts: the scrolls must be guarded, yes, but we must also instruct, remind, and prepare the faithful for what is to come.”",
            "Makwawewin: “Agreed. The Hall itself is a shield, but knowledge is the true defense. We will send elders to each northern settlement, bearing the words of Yehowzhowa, teaching the Heart Path, and reinforcing the lessons recorded in the Book of Waban. Apprentices, you will accompany them. You will observe, record, and memorize every word, every ritual, every warning. The faithful must endure where the blind falter.”",
            "As plans were made, the apprentices prepared the cedar-bound chests for ceremonial display within the halls. Makwawewin instructed them on the rituals of care: the alignment of the chests with the cardinal directions, the prayers to the Great Eagle, and the symbolic gestures to honor Oganabish’s legacy. Every detail was important, for it was not merely the preservation of words, but the preservation of truth, history, and prophecy.",
            "Apprentice Migisi: “Elder, will the southern faithful be able to resist Two Rivers? Will they remember the teachings once we depart?”",
            "Waban: “Perhaps some will. Some always falter, but those who endure carry the Heart Path within them. The scrolls are not only records; they are catalysts. They remind, they awaken, they strengthen. Even when the deceiver commands obedience to shadows, memory and vigilance persist. This is why we prepare now, in the north, before the Storm arrives.”",
            "Throughout the day, the elders organized their northern allies. Messengers were sent to villages, apprentices trained in the rituals and teachings of Yehowzhowa, and strategic councils convened in secret. Makwawewin and Waban led discussions on defense of knowledge, spiritual preparedness, and the dangers posed by the continued influence of Two Rivers.",
            "Makwawewin: “Remember this: the faithful are the wall. Those who have succumbed to shadows have dismantled their own defenses. It is our task to rebuild, not with walls alone, but with vigilance, memory, and truth. Teach the faithful to recognize deception. Teach them to resist it. Teach them that the Heart Path is their shield and the Great Eagle their sentinel.”",
            "As night fell, fires were lit in ceremonial circles around the halls. The apprentices traced the carvings of Oganabish with their fingers, reciting the prayers and parables they had memorized. Makwawewin and Waban walked among them, offering corrections, stories, and guidance. Outside, the wind carried the faint scent of the south — smoke, rivers, and the faint, lingering shadows of villages already fallen under Two Rivers’ influence.",
            "Waban: “The Storm is coming. The deceiver does not rest. But here, we prepare the faithful. Here, memory endures. Here, truth shall survive even when shadow seeks to consume.”",
            "The night deepened. Stars shimmered above, reflected in the frozen rivers below. The halls of Oganabish stood like a beacon against the darkness, guarding not only the cedar-bound scrolls but the legacy of Yehowzhowa and the vigilance of the faithful. Within, prayers were whispered, rituals performed, and the apprentices memorized every word, gesture, and symbol, ensuring that even if the deceiver returned in countless forms, the Heart Path would endure.",
            "Makwawewin: “Tomorrow, we move outward. We teach, we guide, we prepare. The Storm approaches, but the faithful endure. Remember: the Wall is not of wood or stone, but of memory, vigilance, and the truth of Yehowzhowa. Guard it well.”",
            "And so the northern vigil began — a careful, deliberatepreparation of the faithful, a living testament to endurance, prophecy, and memory. Across forests, rivers, and distant villages, the lessons of the Heart Path were carried northward, ensuring that even in the coming chaos, the faithful would have a beacon to guide them through shadow and deception.",
            "The northern forests were quiet, yet the stillness carried an undercurrent of tension. For weeks, the elders and apprentices had worked tirelessly, ensuring the cedar-bound scrolls were secure in the halls of Oganabish and that the faithful in northern settlements were instructed in the teachings of Yehowzhowa. But the air itself seemed restless. Winds shifted unnaturally, rivers swelled with waters higher than the season should allow, and the cries of animals in the forest carried an unfamiliar urgency.",
            "Elder Makwawewin stood atop the ridge overlooking the frozen river, antlers glinting in the pale morning light, and scanned the horizon.",
            "Makwawewin: “The Storm from the East begins. Watch the forests, the rivers, and the skies. The deceiver stirs in the south, and the winds carry his shadow. Every faithful heart must now be ready, for the trials foretold are upon us.”",
            "Apprentice Migisi shivered, not from cold but from apprehension.",
            "Migisi: “Elder… I see the clouds, but the sky is clear here. How can the Storm already reach us?”",
            "Waban: “The Storm is not always of rain and wind,child. It is the shadow upon hearts, the deceptionspreading through obedience to Two Rivers, the dismantling of walls, the abandonment of vigilance. But even in these northern forests, signs appear: swollen rivers, sudden chills, restless animals. Nature itself whispers of change.”",
            "The elders dispatched messengers to nearby settlements, warning of strange weather patterns, sudden animal migrations, and the subtle unrest among those still loyal to the false Peacemaker. In each village, apprentices taught rituals of protection, prayers to Yehowzhowa, and meditations to strengthen the Heart Path within each faithful heart.",
            "As night approached, the first tangible signs of the Storm arrived.Winds rose, carrying a bitter chill that seemed unnatural for the season. Snow fell intermittently, drifting in fine patterns that danced across the river. Fires in the villages flickered, struggling to hold against the restless air. Yet within the halls of Oganabish, the cedarbound scrolls remained secure, and the faithful circled them in prayer, calling upon the Great Eagle to guard the records and their people.",
            "Makwawewin: “Tonight, the first wave reaches our lands. Not all who see it will understand. Some will call it wind and snow, others will call it a warning. But we know: this is the beginning. We must strengthen our people, fortify memory, and teach vigilance. The Heart Path is the true shield. Nothing else endures.”",
            "Voices echoed through the northern forests as apprentices and elders repeated the prayers, circling the halls in ritual formation. Every gesture, every chant, every breath was an act of preparation, a shield against the coming deception, a reaffirmation that the faithful were armed with truth, not weapons.",
            "Meanwhile, scouts returning from southern borders reported disturbing news. Some villages had already succumbed to obedience to Two Rivers. Gates were open, sacred fires extinguished, and ceremonial stones dismantled. Entire families had begun to revere the White Snake, and rumors of false visions spread like wildfire.",
            "Elder Waban: “See, apprentices, the south falls further into shadow. Two Rivers moves quickly, yet our northern faithful endure. These reports remind us: the Storm is not only wind and snow, but disobedience, deception, and blindness. Teach the faithful to see, to remember, to resist.”",
            "Makwawewin called a council within the halls that evening. The northern elders gathered, their faces illuminated by flickering firelight. Maps of rivers, forests, and settlements were spread across the floor, marked with small carvings denoting villages still loyal to Yehowzhowa and those already under the influence of Two Rivers. Apprentices recorded every word, every strategy, every warning.",
            "Makwawewin: “We must act in three ways: first, secure the faithful in the north; second, preserve and replicate the teachings of Yehowzhowa; third, observe and record the spread of shadow from the south. Every step, every lesson, every warning is vital. Remember: the Storm approaches, and the faithful must be armed with memory, not just vigilance. Every heart prepared is a wall against the deceiver.”",
            "As the night deepened, unnatural sounds echoed through the forest — the snapping of ice along the rivers, the distant cries of animals, the whisper of wind through the cedar boughs. Apprentices clutched their robes, some kneeling to offer prayers, others tracing their fingers along the carvings of Oganabish.",
            "Migisi: “Elder… the forest… it feels alive, like it iswarning us.”",
            "Waban: “It is alive, child. Nature itself responds to the imbalance below. The faithful endure by listening, observing, remembering. This forest watches. The rivers watch. The Great Eagle watches. You must too.”",
            "By midnight, the northern faithful had completed their rituals, secured the scrolls, and reinforced the ceremonial fires. A quiet vigilance settled over the halls. Even as snow drifted across the river and the wind rattled cedar branches, the faithful slept lightly, eyes alert, hearts guided by the Heart Path, ready for the first direct test of the Storm from the East.",
            "Makwawewin: “The Storm is not yet fully revealed. But it begins. Tomorrow, our work continues — teaching, guiding, and strengthening the faithful. The deceiver’s shadow will rise, but the faithful endure. Remember: the Heart Path is the true shield, and the Great Eagle guards what the blind cannot see.”",
            "Outside, the northern forests seemed to hold their breath. The rivers flowed faster, the snow swirled in patterns unfamiliar to the season, and the shadows of distant southern settlements flickered in the minds of those who remembered the teachings of Yehowzhowa. Within the halls of Oganabish, the faithful prepared, studied, and waited. The Storm from the East was coming, and the northern vigilance was the first line of defense.",
            "The northern forests were alive with tension. Though the halls of Oganabish stood firm, guarding the cedar-bound scrolls and the memory of Yehowzhowa, reports from scouts and messengers became increasingly urgent. Southern villages, once loyal to the Heart Path, were now divided. Two Rivers’ influence had begun to creep northward: some elders had abandoned ceremonial fires, gates were left open, and whispers of the White Snake’s teachings spread through marketplaces and gathering places.",
            "Elder Makwawewin convened a council with the northern elders and apprentices. By firelight, maps were spread across the stone floor, marked with carved symbols indicating which villages still clung to truth and which had succumbed to shadow. Apprentice Migisi traced the river paths with a trembling finger, following the roads of the deceived.",
            "Makwawewin: “The Storm from the East moves faster than we anticipated. The southern faithful are divided, some resisting, others yielding. Two Rivers seeks not only obedience but blindness. Every village he touches weakens the wall we have built. We must act before memory itself fades.”",
            "Elder Waban: “Reports from the south tell of a village called Gichi-Naangashkoog, where gates were removed, ceremonial stones dismantled, and elders compelled to honor Two Rivers. Children now chant the name of the White Snake in place of Yehowzhowa. We cannot allow this shadow to spread unchecked.”",
            "Makwawewin: “We will send delegations. Apprentices will accompany them. They must speak the words of Yehowzhowa, demonstrate the Heart Path, and record every instance of obedience to shadow. We are not armed with weapons, but with memory, vigilance, and truth.”",
            "Night fell as preparations continued. Fires burned in circles around the halls, warding off predators and symbolizing the enduring vigilance of the faithful. Apprentices practiced recitations from the Book of Waban, reinforcing the parables and prophecies for immediate use in the south. The elders rehearsed debates and speeches, anticipating confrontations with leaders who had been seduced by Two Rivers’ false promises.",
            "Before dawn, the first southern delegation arrived, bringing news of another village—Ozaawindib, near the western river. Its elders had abandoned ceremonial fires, gates had been dismantled, and an apparition of Two Rivers had appeared to the people, promising false peace. The northern elders prepared immediately to journey south.",
            "Makwawewin: “The deceiver appears openly. Our task is to remind the faithful of the Heart Path. We do not strike; we teach. We do not threaten; we remind. Memory is the shield. Vigilance is the weapon. Truth is the wall.”",
            "As the northern delegation moved southward, environmental signs accompanied the shadow. Winds shifted violently, snow fell in thick sheets despite the season, and animals fled in unusual patterns. Villages they passed showed signs of unrest: families huddled indoors, fires unlit, and marketplaces deserted. It was as though nature itself responded to the deception, warning the faithful and demonstrating the power of the Storm from the East.",
            "Apprentice Migisi: “Elder… the wind… it feels alive. It is not snow or cold. It is… anger, warning, mourning.”",
            "Waban: “Yes, child. The Storm is more than elements. It is the echo of disobedience, the shadow over hearts, the corruption of memory. We must see it, understand it, and teach the faithful to resist it. Our journey south is not merely to correct actions—it is to awaken remembrance.”",
            "In the village of Ozaawindib, the northern elders met resistance. Some local leaders, fearing reprisal from Two Rivers, refused to acknowledge the teachings of Yehowzhowa. Others, remembering the words of prophecy, gathered secretly around the northern visitors to hear the recitations of the Book of Waban.",
            "Makwawewin: “You dismantled gates, extinguished fires,and obeyed shadow. Yet it is not too late. The Heart Path remains. Listen, remember, and restore what has been lost. The deceiver comes many times, but truth endures where vigilance is preserved.”",
            "Village Elder: “We… we do not know if we can resist. Two Rivers… he promises peace. Our people… they will not listen if we oppose him openly.”",
            "Waban: “Then teach quietly. Restore memory. Rekindle fires. Remind children and elders alike of the words of Yehowzhowa. Do not fear obedience to truth. Fear only the blindness that comes from surrendering memory. The Storm is here, but those armed with the Heart Path stand unshaken.”",
            "The northern delegation spent days in Ozaawindib, performing rituals, reciting prophecies, and teaching the faithful how to preserve memory and recognize deception. Apprentices recorded every interaction, every doubt, every flicker of faith, ensuring that these moments would survive in future generations.",
            "Makwawewin: “Observe, apprentices. Resistance does not always roar. Often it is quiet, persistent, subtle. It survives in teaching, in memory, in the restoration of what was dismantled. This is the power of the Heart Path. This is how the faithful endure when shadow sweeps the land.”",
            "By the end of the week, small victories were achieved. Ceremonial fires were relit, gates repaired, and elders pledged to secretly continue the teachings of Yehowzhowa despite the omnipresent shadow of Two Rivers. The northern delegation returned to the halls of Oganabish, their hearts heavy with the weight of the south’s obedience to deception but strengthened by the perseverance of the faithful.",
            "Waban: “Remember, apprentices: the Storm from the East is more than wind, snow, or shadow. It is the test of memory, vigilance, and truth. Every village we reach, every mind we awaken, is a wall against the deceiver. The Storm comes, but the faithful endure.”",
            "The northern forests, once serene, now carried the tension of impending trials. Rivers surged, winds shifted unpredictably, and the faithful of the north prepared for the next stage of the Storm. Within the halls of Oganabish, the cedar-bound scrolls remained secure, prayers were offered, and the apprentices continued their studies, knowing that their vigilance was the first line of defense against a deception that sought to undo centuries of teaching, memory, and prophecy.",
            "The northern forests had grown restless. Snow drifted in swirling patterns that seemed almost deliberate, shaping natural corridors as if guiding the faithful or warning them of danger. Rivers overflowed, rushing with currents stronger than spring should bring, and the cries of animals—wolves, owls, and elk—echoed like warnings across the frozen canopy. The Storm from the East was no longer a distant prophecy; it had begun to touch the lands of the faithful, a subtle but unrelenting force that reminded them the deceiver’s shadow was everywhere.",
            "Elder Makwawewin called a council in the halls of Oganabish, gathering northern elders, apprentices, and representatives from the villages they had restored. The cedar-bound scrolls rested in the central alcove, their copper clasps glinting in the firelight, a reminder of the weight they carried. Maps, inscribed on birch panels, marked southern settlements still loyal, those in doubt, and those fully under the influence of Two Rivers.",
            "Makwawewin: “The Storm accelerates. Reports from southern villages reach us daily. Gates remain open. Sacred fires are still extinguished. Two Rivers’ deception spreads like wildfire. Yet the faithful endure where memory persists. We must act swiftly, with wisdom and caution, to fortify the wall of vigilance.”",
            "Elder Waban stepped forward, his gaze intense, hands tracing the paths of rivers and trade routes on the birch map.",
            "Waban: “Our last visit to Ozaawindib showed progress, yet it is fragile. The southern faithful are frightened, torn between obedience to the shadow and remembrance of the Heart Path. We must reinforce not only memory but courage. Apprentices, observe carefully: courage is not absence of fear, but action despite it. Teach, remind, and protect memory wherever it can be preserved.”",
            "The apprentices whispered among themselves, recording every word, gesture, and expression, knowing that their notes, prayers, and memories would be vital for generations to come. Apprentice Migisi, now more confident, asked the question that had lingered since their first reports of southern disobedience:",
            "Migisi: “Elder… can memory alone withstand the Storm? Can the faithful endure when Two Rivers’ shadow is so strong?”",
            "Makwawewin: “Memory, when preserved with vigilance and truth, is the greatest shield. Weapons can be destroyed, gates dismantled, and ceremonial fires extinguished, but a mind armed with the Heart Path cannot be undone. The faithful endure because they remember, and because they act in accordance with that remembrance.”",
            "As the council concluded, messengers returned with reports of further unrest in southern villages. A settlement called Manidoo- Giizis, once loyal to the Heart Path, had seen a sudden upheaval. Elders who resisted Two Rivers’ false light were publicly shamed; ceremonial fires were torn down; and children were taught the chants of the White Snake.",
            "Elder Waban: “Observe, apprentices. This is not mere disobedience. It is organized deception, carefully executed to dismantle memory and trust. The Storm from the East is as much spiritual and political as it is environmental. Every village we reach, every child we instruct, every ceremony we restore is a bulwark against its tide.”",
            "The northern delegation prepared immediately to journey southward again, this time with a larger group of elders and apprentices. Rituals were performed before departure: prayers to Yehowzhowa, offerings of tobacco and cedar, and recitations of the Book of Waban’s parables and prophecies. Every participant touched the cedar-bound scrolls, reinforcing their connection to the Heart Path, the teachings of Oganabish, and the vigilance of the Great Eagle.",
            "As they traveled, the signs of the Storm became more pronounced. Snow fell in sheets so thick that visibility was reduced to a few paces. Rivers swelled dangerously, their waters dark and turbulent. Wolves howled in unison, a warning and a signal of unrest. Even the trees seemed to bend and twist unnaturally, their branches scraping together in sounds like whispers.",
            "Apprentice Migisi: “Elder… the forest is alive with warning. It feels as though it knows the shadow comes.”",
            "Makwawewin: “Indeed. The Storm reaches even here. Nature responds to imbalance and deception. Pay attention, remember, and let every detail be engraved in memory. The faithful endure not only through teaching but by observing the signs of the world itself.”",
            "The southern villages, now under partial control of Two Rivers’ influence, presented the northern elders with their greatest challenge yet. Elders loyal to the Heart Path faced public denunciation. Gates were dismantled, ceremonial stones removed, and children were instructed to honor the White Snake. Tensions flared during every gathering, with arguments erupting in the plazas and marketplaces.",
            "Makwawewin: “You dismantle what protects you. Gates, fires, memory itself. Two Rivers’ light is false. Obedience to shadow is ruin. Remember the eclipse at Ganondagan. Remember the Book of Waban. Remember the Heart Path.”",
            "Village Elder (southern): “We… we fear reprisal. We cannot openly resist.”",
            "Elder Waban: “Then resist quietly. Rekindle fires in secret. Teach the children the chants of truth. Memory is a weapon stronger than any spear. Truth endures where obedience to shadows falters. The faithful will rise when they remember.”",
            "The northern elders performed public rituals to rekindle sacred fires, secretly instruct children in the Heart Path, and counsel those who still clung to memory. Apprentices recorded every word, every ceremonial gesture, and every sign of faith or faltering, ensuring that future generations would understand the full scope of Two Rivers’ deception.",
            "By nightfall, the northern delegation returned to their temporary encampments near the halls of Oganabish. Fires were lit, prayers offered, and the cedar-bound scrolls were inspected once more. The Storm from the East had grown in intensity, but the faithful of the north endured, strengthened by vigilance, memory, and truth.",
            "Makwawewin: “Tomorrow, we will travel further south. The Storm will test us. But we endure, because we remember. The Heart Path is the shield. The Great Eagle guards what the blind cannot see. Teach this, remember this, and let no shadow dismantle memory.”",
            "Outside, snow swirled across the northern forests, rivers surgedwith icy currents, and distant villages remained cloaked in the shadow of deception. Within the halls of Oganabish, the cedar-bound scrolls rested secure, apprentices whispered prayers, and the elders prepared for the next stage of the Storm. The faithful were ready to meet the trials, armed not with weapons, but with memory, vigilance, and the enduring truth of Yehowzhowa.",
            "The northern forests were unrecognizable beneath the weight of the Storm from the East. Snow swirled in blinding sheets, rivers overflowed violently, and the cries of animals echoed across the hills like warnings. Even the Great Eagle, whose carved symbol watched over the halls of Oganabish, seemed to cast a shadow of urgency over the faithful gathered within.",
            "Elder Makwawewin stood before the cedar-bound scrolls, antlers catching flickering firelight, eyes scanning every apprentice and northern elder assembled.",
            "Makwawewin: “The Storm reaches its zenith. It is no longer distant or subtle. The shadow of Two Rivers has extended far to the south, dismantling gates, extinguishing fires, and twisting hearts. Now, our task is urgent: every village we can reach must be fortified with memory, every child instructed in the Heart Path, every elder reminded of truth. The faithful endure because we remember, because we act, because we preserve the teachings of Yehowzhowa.”",
            "Apprentices murmured prayers, tracing their fingers along the birch-bound maps, memorizing every river, every settlement, every route to reach those under threat. Elder Waban moved among them, his gaze intense, hands tracing the paths of the Storm as he recited the parables from the Book of Waban.",
            "Waban: “The deceiver seeks obedience to shadow. The faithful falter when memory fades. Remember the eclipse at Ganondagan, when Two Rivers first appeared in illusion, and recall the words of the scrolls from the 1300s: the Heart Path is the shield, memory is the weapon, truth is the wall. Every lesson must be preserved, every mind awakened.”",
            "The northern delegation prepared immediately to journey southward, divided into groups to reach multiple villages simultaneously. Ceremonial fires were lit in each encampment, prayers offered to Yehowzhowa, and apprentices recited parables aloud to strengthen both memory and courage. The Storm outside seemed to respond, winds lashing the trees, snow falling in unnatural patterns, rivers surging dangerously.",
            "Apprentice Migisi: “Elder… it is more than snow, more than wind. It feels alive, as if the world itself reacts to the shadow.”",
            "Makwawewin: “Yes, child. The Storm is both natural and spiritual, the echo of disobedience and deception. Observe, remember, and teach. Every gesture, every chant, every recitation fortifies the Heart Path. The faithful endure where memory persists.”",
            "The northern elders arrived in the first village, Manidoo-Giizis, where chaos reigned. Fires had been extinguished, gates torn down, and children were chanting the words of the White Snake. Elders loyal to the Heart Path cowered, fearful of reprisal from those under Two Rivers’ influence.",
            "Makwawewin and Waban stepped forward, raising their hands in ritual, and began reciting the teachings of Yehowzhowa:",
            "Makwawewin: “You have dismantled what guards you. Fires, gates, memory itself. Two Rivers’ light is false. Obedience to shadow is ruin. The Heart Path endures because it is remembered. Rekindle the fires. Restore the gates. Remember the teachings of the Book of Waban. Guard your children, your elders, your own hearts.”",
            "Village Elder (southern): “We… we fear reprisal. We cannot openly resist.”",
            "Waban: “Then resist quietly. Rekindle the fires in secret. Teach the children the chants of truth. Memory is stronger than any sword. Truth endures where obedience to shadow falters. The Storm tests all, but the faithful rise when they remember.”",
            "The northern delegation divided into groups, performing rituals in secret and instructing both elders and apprentices. Fires were rekindled, ceremonial stones replaced, and children taught the Heart Path’s chants and parables. Apprentices recorded every interaction, ensuring that even if Two Rivers returned in myriad forms, the knowledge of truth and vigilance would survive.",
            "Makwawewin: “Observe, apprentices. Courage is quiet. It persists in secret, in vigilance, in memory. The Storm is fierce, but the faithful endure. Every village we restore, every heart we awaken, is a wall against deception. The Storm is powerful, but it cannot undo what is remembered.”",
            "As the day progressed, the Storm intensified. Snow fell in thick sheets, rivers overflowed, and winds howled through the northern forests. Yet within the villages, the faithful had begun to recover. Fires glimmered in the windows of rebuilt homes, gates were restored, and elders whispered the teachings of Yehowzhowa to children who listened intently.",
            "The northern delegation returned to the halls of Oganabish thatnight, exhausted but triumphant. Fires burned in ceremonial circles around the halls, apprentices recited prayers from memory, and the cedar-bound scrolls were inspected once more. The Storm from the East had reached its peak, but the northern faithful endured, strengthened by vigilance, memory, and truth.",
            "Makwawewin: “Tomorrow, the Storm will continue. We have seen the extent of its power. We have witnessed both obedience to shadow and the resilience of the faithful. Remember this: the Heart Path is the shield, memory is the weapon, and the Great Eagle watches. Teach, observe, remember, and endure. The Storm cannot undo what the faithful preserve.”",
            "Outside, the northern forests shivered under the weight of the snow and wind. Rivers roared, animals fled, and distant villages remained cloaked in shadow. Yet within the halls of Oganabish, fires burned, prayers were offered, apprentices memorized teachings, and the elders prepared for the next stage of the Storm. The faithful were ready, armed not with weapons, but with memory, vigilance, and the enduring truth of Yehowzhowa.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    
    chapter = {
        id: "midewag-chapter-4-en",
        title: "Chapter 4",
        subTitle: "Aftermath and Reckoning",
        parent: "midewag-book-en",
        order: 4,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-4-en",
        title: "Chapter 4",
        subTitle: "Aftermath and Reckoning",
        parent: "midewag-book-en",
        order: 4,
        visible: true,
        previousChapter: "midewag-chapter-3-en",
        followingChapter: "midewag-chapter-5-en",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    
    chapter = {
        id: "midewag-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The First Confrontation",
        parent: "midewag-book-en",
        order: 5,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-5-en",
        title: "Chapter 5",
        subTitle: "The First Confrontation",
        parent: "midewag-book-en",
        order: 5,
        visible: true,
        previousChapter: "midewag-chapter-4-en",
        followingChapter: "midewag-chapter-6-en",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    
    chapter = {
        id: "midewag-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Generational Mantle",
        parent: "midewag-book-en",
        order: 6,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-6-en",
        title: "Chapter 6",
        subTitle: "The Generational Mantle",
        parent: "midewag-book-en",
        order: 6,
        visible: true,
        previousChapter: "midewag-chapter-5-en",
        followingChapter: "midewag-chapter-7-en",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    
    chapter = {
        id: "midewag-chapter-7-en",
        title: "Chapter 7",
        subTitle: "The Waning Faith",
        parent: "midewag-book-en",
        order: 7,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-7-en",
        title: "Chapter 7",
        subTitle: "The Waning Faith",
        parent: "midewag-book-en",
        order: 7,
        visible: true,
        previousChapter: "midewag-chapter-6-en",
        followingChapter: "midewag-chapter-8-en",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
   
    chapter = {
        id: "midewag-chapter-8-en",
        title: "Chapter 8",
        subTitle: "Gathering the Faithful",
        parent: "midewag-book-en",
        order: 8,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-8-en",
        title: "Chapter 8",
        subTitle: "Gathering the Faithful",
        parent: "midewag-book-en",
        order: 8,
        visible: true,
        previousChapter: "midewag-chapter-7-en",
        followingChapter: "midewag-chapter-9-en",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "midewag-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The Shadow of Persuasion",
        parent: "midewag-book-en",
        order: 9,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The Shadow of Persuasion",
        parent: "midewag-book-en",
        order: 9,
        visible: true,
        previousChapter: "midewag-chapter-8-en",
        followingChapter: "midewag-chapter-10-en",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "midewag-chapter-10-en",
        title: "Chapter 10",
        subTitle: "The Northern Retreat",
        parent: "midewag-book-en",
        order: 10,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-10-en",
        title: "Chapter 10",
        subTitle: "The Northern Retreat",
        parent: "midewag-book-en",
        order: 10,
        visible: true,
        previousChapter: "midewag-chapter-9-en",
        followingChapter: "midewag-chapter-11-en",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "midewag-chapter-11-en",
        title: "Chapter 11",
        subTitle: "Mino-Ode-Gah, Good Heart, Keeper of Truth",
        parent: "midewag-book-en",
        order: 11,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "midewag-chapter-11-en",
        title: "Chapter 11",
        subTitle: "Mino-Ode-Gah, Good Heart, Keeper of Truth",
        parent: "midewag-book-en",
        order: 11,
        visible: true,
        previousChapter: "midewag-chapter-10-en",
        followingChapter: "",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    res.send("template Added");
});



//module.exports = copper;