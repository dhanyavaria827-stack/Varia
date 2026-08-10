export type SkillSection = "life" | "academics";

export interface SkillHistoryEntry {
  slug: string;
  name: string;
  category: string;
  section: SkillSection;
  history: string[];
}

export const SKILL_HISTORY: SkillHistoryEntry[] = [
  // ---- Life & Arts: Performing Arts ----
  {
    slug: "bharatanatyam",
    name: "Bharatanatyam",
    category: "Performing Arts",
    section: "life",
    history: [
      "Bharatanatyam is one of the oldest surviving classical dance forms in India, tracing its roots to the temples of Tamil Nadu over two thousand years ago. Its foundations lie in the Natya Shastra, the ancient Sanskrit treatise on performing arts attributed to the sage Bharata, from which the dance is sometimes said to take its name.",
      "For centuries it was performed by devadasis — temple dancers dedicated to worship — as a form of devotion combining rhythm (tala), expression (abhinaya) and pure movement (nritta). In the early twentieth century, reformers and artists such as Rukmini Devi Arundale brought the form out of the temple and onto the public stage, giving it the codified structure taught around the world today.",
    ],
  },
  {
    slug: "kathak",
    name: "Kathak",
    category: "Performing Arts",
    section: "life",
    history: [
      "Kathak takes its name from 'Katha', the Sanskrit word for story. It began as a form of storytelling by wandering bards in northern India, who used rhythmic footwork, gesture and expression to narrate tales from scripture and epic poetry in temple courtyards.",
      "Under the Mughal courts from the sixteenth century onward, Kathak absorbed Persian dress, ghazals and courtly elegance, evolving into the fast, spinning, percussive dance recognisable today — built on intricate footwork (tatkar), rhythmic cycles (tala) and dramatic storytelling through the eyes and hands.",
    ],
  },
  {
    slug: "singing",
    name: "Singing",
    category: "Performing Arts",
    section: "life",
    history: [
      "Indian classical singing traces back over a thousand years to the Sama Veda, whose chants are considered the earliest known form of organised Indian music. From this root grew two major traditions — Hindustani in the north and Carnatic in the south — each built on the raga, a melodic framework, and tala, a rhythmic cycle.",
      "Across centuries, singing carried both devotional and courtly purposes, passed down through the guru-shishya (teacher-student) tradition — the same oral, one-to-one method by which Gurukulam still teaches music today.",
    ],
  },
  {
    slug: "dance",
    name: "Dance",
    category: "Performing Arts",
    section: "life",
    history: [
      "Dance in India is documented as far back as the Indus Valley Civilization, whose 'Dancing Girl' bronze figurine, over four thousand years old, is among the earliest evidence of dance anywhere in the world.",
      "Indian classical dance was later formalised by the Natya Shastra into eight recognised styles across the subcontinent, each rooted in a region's language and temple culture, but all sharing the same grammar of rhythm, gesture and storytelling.",
    ],
  },
  {
    slug: "yoga",
    name: "Yoga",
    category: "Performing Arts",
    section: "life",
    history: [
      "Yoga's origins reach back over four thousand years to the Indus Valley Civilization. It was systematised around the second century BCE by the sage Patanjali in the Yoga Sutras, which laid out an eight-limbed path of ethical, physical and meditative discipline.",
      "What began as a practice for stilling the mind gradually developed its physical postures (asanas) into the discipline widely practised today — one that Gurukulam teaches not as exercise alone, but as part of daily sanskar.",
    ],
  },
  // ---- Life & Arts: Instruments ----
  {
    slug: "flute",
    name: "Flute",
    category: "Instruments",
    section: "life",
    history: [
      "The bansuri, India's classical bamboo flute, is among the subcontinent's oldest instruments, depicted in temple carvings and scripture for over two thousand years.",
      "Made from a single hollow reed of bamboo with no keys or mechanism, mastering the bansuri depends entirely on breath control and finger placement — a simplicity that has kept it central to both classical and folk music across India.",
    ],
  },
  {
    slug: "violin",
    name: "Violin",
    category: "Instruments",
    section: "life",
    history: [
      "The violin was invented in sixteenth-century Italy, but found an entirely new life in India. It was introduced into Carnatic music in the early nineteenth century — most notably through composer Baluswami Dikshitar, who adapted its Western technique to Indian ragas.",
      "Played seated, resting on the ankle rather than the shoulder, the Indian violin uses continuous glides between notes to imitate the human voice, making it one of the few Western instruments fully absorbed into Indian classical tradition.",
    ],
  },
  {
    slug: "santoor",
    name: "Santoor",
    category: "Instruments",
    section: "life",
    history: [
      "The santoor is a trapezoidal hammered dulcimer with ancient Persian roots, believed to have travelled into the Kashmir valley over a thousand years ago, where it became central to Sufiana music.",
      "For centuries it remained a folk instrument until santoor player Pandit Shivkumar Sharma pioneered its adaptation into Hindustani classical music in the mid-twentieth century.",
    ],
  },
  {
    slug: "jaltarang",
    name: "Jaltarang",
    category: "Instruments",
    section: "life",
    history: [
      "Jaltarang, meaning 'waves of water', is one of India's oldest and rarest melodic instruments — a set of ceramic or metal bowls filled with varying levels of water, each tuned to a different note and struck with light bamboo sticks.",
      "Mentioned in ancient Sanskrit texts as far back as the sixth century, it was once common in royal courts but is now taught by only a handful of musicians, making it a genuine rarity in a student's musical education.",
    ],
  },
  {
    slug: "sitar",
    name: "Sitar",
    category: "Instruments",
    section: "life",
    history: [
      "The sitar's invention is traditionally credited to the thirteenth-century poet-musician Amir Khusrau, who is said to have adapted the Persian 'setar' — literally 'three strings' — into a new instrument suited to Indian ragas.",
      "Over centuries it evolved into today's long-necked, many-stringed instrument, with sympathetic strings that resonate beneath the played strings — later carried to a global audience through musicians like Pandit Ravi Shankar.",
    ],
  },
  {
    slug: "tabla",
    name: "Tabla",
    category: "Instruments",
    section: "life",
    history: [
      "The tabla's exact origin is debated, but the most widely told account credits Amir Khusrau in the Delhi Sultanate era with splitting the older single barrel drum, the pakhawaj, into the two smaller drums played today.",
      "It has since become the primary percussion instrument of Hindustani classical music, capable of an extraordinary vocabulary of struck syllables (bols) that can accompany, converse with, and even outpace the lead performer.",
    ],
  },
  {
    slug: "pakhawaj",
    name: "Pakhawaj",
    category: "Instruments",
    section: "life",
    history: [
      "The pakhawaj is one of India's oldest drums, a two-headed barrel drum going back well over a thousand years, and is widely believed to be the ancestor from which the tabla was later developed.",
      "It remains the traditional accompaniment to dhrupad, the oldest surviving form of Hindustani classical singing, prized for its deep, resonant tone and the mathematical precision of its rhythmic patterns.",
    ],
  },
  {
    slug: "dholak",
    name: "Dholak",
    category: "Instruments",
    section: "life",
    history: [
      "The dholak is a folk barrel drum found in villages and celebrations across the Indian subcontinent for centuries, played at weddings, festivals and devotional gatherings long before it entered formal music education.",
      "Simpler to learn than the tabla but no less expressive, it remains the heartbeat of Indian folk music, and is often a student's first hands-on introduction to rhythm.",
    ],
  },
  {
    slug: "harmonium",
    name: "Harmonium",
    category: "Instruments",
    section: "life",
    history: [
      "The harmonium was brought to India by European missionaries and traders in the nineteenth century. Indian musicians modified the original foot-pumped European design into a hand-pumped, portable version suited to floor-seated performance.",
      "Despite its foreign origin, it was fully absorbed into Indian music within a generation and today is one of the most common instruments used to accompany classical and devotional singing across the country.",
    ],
  },
  // ---- Life & Arts: Craft & Skill ----
  {
    slug: "handwriting",
    name: "Handwriting",
    category: "Craft & Skill",
    section: "life",
    history: [
      "India has one of the world's longest continuous manuscript traditions, with scribes for centuries copying scripture and literature onto palm leaves and later paper in careful, disciplined script.",
      "That discipline carries directly into how Gurukulam teaches the skill today: not as an afterthought, but as a practice of patience and attention that shapes how a child thinks and works.",
    ],
  },
  {
    slug: "drawing",
    name: "Drawing",
    category: "Craft & Skill",
    section: "life",
    history: [
      "Drawing is among humanity's oldest forms of expression, and in India it runs from prehistoric rock art to the intricate line work found in temple carving and manuscript illustration for over two thousand years.",
      "Taught to children as both an artistic and observational skill, drawing sharpens the same patience and precision prized across Gurukulam's other crafts.",
    ],
  },
  {
    slug: "gymnastics",
    name: "Gymnastics",
    category: "Craft & Skill",
    section: "life",
    history: [
      "While competitive gymnastics as a sport developed in ancient Greece, India has its own parallel tradition of disciplined physical training — most notably Mallakhamb, a centuries-old practice of gymnastic and yogic postures performed on a vertical wooden pole or rope.",
      "Gymnastics at Gurukulam draws on this same lineage of physical discipline as a partner to academic learning, not separate from it.",
    ],
  },
  {
    slug: "desi-games",
    name: "Desi games",
    category: "Craft & Skill",
    section: "life",
    history: [
      "Traditional Indian games such as kabaddi, gilli-danda and kho-kho go back centuries as village pastimes, requiring no equipment beyond bare hands, sticks and open ground — designed to build strength, quick thinking and teamwork.",
      "Long before organised sport arrived in India, these games were how children learned discipline and fair play, which is exactly why Gurukulam keeps them alive in its own daily rhythm.",
    ],
  },
  {
    slug: "mehendi",
    name: "Mehendi",
    category: "Craft & Skill",
    section: "life",
    history: [
      "The use of henna to decorate skin dates back over five thousand years, with early evidence from ancient Egypt and the Middle East. It arrived in South Asia over a thousand years ago and was woven into Indian wedding and festival tradition.",
      "Mehendi combines fine motor skill with pattern and symmetry, making it as much a discipline in precision as it is an art of decoration.",
    ],
  },
  {
    slug: "rangoli",
    name: "Rangoli",
    category: "Craft & Skill",
    section: "life",
    history: [
      "Rangoli is an ancient Indian folk art of drawing patterns on the floor using coloured powder, rice or flower petals, traditionally made at the entrance of a home to welcome guests and mark festivals — known by different names across India, such as kolam in Tamil Nadu.",
      "Passed down almost entirely by hand, from elder to child, rangoli teaches symmetry, geometry and patience long before a student ever encounters those words in a textbook.",
    ],
  },
  {
    slug: "pottery",
    name: "Pottery",
    category: "Craft & Skill",
    section: "life",
    history: [
      "Pottery is one of the oldest crafts practised on the Indian subcontinent, with sophisticated wheel-thrown ceramics found across the Indus Valley Civilization more than four thousand years ago.",
      "Shaping clay by hand teaches a kind of patience that cannot be rushed — a lesson Gurukulam values as much as the finished pot itself.",
    ],
  },
  {
    slug: "fashion-design",
    name: "Fashion design",
    category: "Craft & Skill",
    section: "life",
    history: [
      "India's textile tradition stretches back thousands of years, from the fine cotton of the Indus Valley to techniques such as bandhani, block printing and zari work that different regions perfected over centuries.",
      "Modern fashion design draws directly on this inheritance, and several Gurukulam alumni have gone on to build careers in the field, carrying that craft heritage forward.",
    ],
  },
  {
    slug: "cooking-homemaking",
    name: "Cooking & Homemaking",
    category: "Craft & Skill",
    section: "life",
    history: [
      "Indian home cooking is one of the subcontinent's oldest transmitted crafts, carried almost entirely by word of mouth and hand from one generation to the next, long before any of it was written into a cookbook. It draws on the same Ayurvedic understanding of food, season and balance that Gurukulam teaches as its own subject.",
      "At Gurukulam, cooking and homemaking are taught as skills of independence — not chores set apart from learning, but part of the same daily discipline as everything else a student practises.",
    ],
  },
  {
    slug: "storytelling",
    name: "Storytelling",
    category: "Craft & Skill",
    section: "life",
    history: [
      "Kathakathan, the art of oral storytelling, is how most of India's scripture, history and ethics were carried forward for centuries before literacy was widespread — pauranik reciters would narrate the Ramayana, Mahabharata and Puranas in temple courtyards and village gatherings, using voice and rhythm alone to hold an audience.",
      "Gurukulam still leans on that same tradition: stories of dharma and character, told rather than lectured, are one of its oldest teaching tools.",
    ],
  },
  {
    slug: "memory-techniques",
    name: "Memory Techniques",
    category: "Craft & Skill",
    section: "life",
    history: [
      "Before writing was widespread, India's Vedic tradition preserved vast bodies of scripture with near-perfect accuracy purely through trained memory, using structured recitation methods such as krama-patha and ghana-patha that check a text against itself by reciting its words in fixed permutations.",
      "The memory techniques Gurukulam teaches today — association, visualisation, structured recall — are a modern form of that same ancient discipline: memory treated not as rote, but as something trainable.",
    ],
  },
  // ---- Academics: Languages ----
  {
    slug: "sanskrit-prathama-madhyama",
    name: "Sanskrit (Prathama & Madhyama)",
    category: "Languages",
    section: "academics",
    history: [
      "Sanskrit is one of the oldest documented languages in the world, with texts dating back over three thousand years. Its grammar was formally codified around the fourth century BCE by the scholar Panini in the Ashtadhyayi, a treatise so precise it is still studied by linguists today — and it remains the classical language of Jain agamas as well as scripture across other Indian traditions.",
      "Prathama and Madhyama are the foundational and intermediate levels of a graded Sanskrit proficiency structure used across Indian schools, building a student from basic script and vocabulary up to independent reading of classical texts.",
    ],
  },
  {
    slug: "gujarati",
    name: "Gujarati",
    category: "Languages",
    section: "academics",
    history: [
      "Gujarati descends from Sanskrit through Prakrit and Old Gujarati, emerging as a distinct language around the twelfth century. Its script developed from the same root as Devanagari, and it carries a literary tradition running from medieval Jain monk-scholars to Mahatma Gandhi, whose own mother tongue it was.",
      "As Gurukulam's home language, Gujarati carries both daily conversation and the region's own literature and history.",
    ],
  },
  {
    slug: "english-including-debate",
    name: "English, including debate",
    category: "Languages",
    section: "academics",
    history: [
      "English arrived in India through colonial trade and, from 1835 onward, through formal English-medium education. In the two centuries since, it has become India's most widely used language of higher education, business and law.",
      "Formal debate itself is far older, tracing back to both ancient Greek forensic oratory and India's own shastrartha tradition — structured scholarly argument, in which two sides reasoned a question out loud before a judge. Gurukulam's debate training draws on that same discipline of building and defending an argument clearly, on your feet.",
    ],
  },
  // ---- Academics: Mathematics ----
  {
    slug: "fast-mental-calculation",
    name: "Fast mental calculation",
    category: "Mathematics",
    section: "academics",
    history: [
      "Fast mental calculation techniques taught in Indian schools are often called Vedic Mathematics, a set of calculation methods popularised in the twentieth century by Swami Bharati Krishna Tirtha, who published them in 1965 as sutras he said he had drawn from ancient texts.",
      "Whatever their exact age, the techniques themselves are genuinely effective — allowing multiplication, division and squaring to be done in a few mental steps, without a calculator, which is exactly the speed Gurukulam trains its students toward.",
    ],
  },
  {
    slug: "calendar-calculation",
    name: "Calendar calculation",
    category: "Mathematics",
    section: "academics",
    history: [
      "Working out the day of the week for any date, instantly and in your head, is a well-known feat of mental mathematics — formalised in the West as the 'Doomsday Rule' by mathematician John Conway in 1973, though similar calendar algorithms have existed for centuries.",
      "It is pure applied arithmetic: once a student holds the pattern in their head, any date — past or future — becomes a quick calculation rather than a lookup.",
    ],
  },
  {
    slug: "puzzles-tables",
    name: "Puzzles & tables",
    category: "Mathematics",
    section: "academics",
    history: [
      "Multiplication tables have been used to teach arithmetic since Babylonian times, nearly four thousand years ago, while India's own mathematical puzzle tradition is documented in texts like the Bakhshali manuscript, one of the oldest surviving works of Indian mathematics.",
      "Held together, tables and puzzles build the same instinct: numbers as something to be played with confidently, not feared.",
    ],
  },
  // ---- Academics: Special & Dharmic Knowledge ----
  {
    slug: "character-of-great-personalities",
    name: "Character of great personalities",
    category: "Special & Dharmic Knowledge",
    section: "academics",
    history: [
      "Teaching through the life stories of virtuous figures is one of the oldest methods of moral education anywhere in the world. In the Jain tradition specifically, the lives of the twenty-four Tirthankaras — including Rushabhdev, the first — have been told for centuries as models of self-discipline, truth and non-violence.",
      "Gurukulam's daily 'Varta' session carries this same practice forward: a short story each day, not as entertainment, but as a lesson a child can carry into how they act.",
    ],
  },
  {
    slug: "religious-study",
    name: "Religious study",
    category: "Special & Dharmic Knowledge",
    section: "academics",
    history: [
      "Gurukulam's religious study follows the Jain tradition specifically — the agamas, the scriptures preserving the teachings of the Tirthankaras, and principles such as ahimsa (non-violence), satya (truth) and aparigraha (non-attachment) that have guided Jain philosophy for over two and a half thousand years.",
      "Rather than treating scripture as something to memorise and set aside, study here is meant to connect directly to daily conduct — the same conduct laid out in Rushabhdev's codes.",
    ],
  },
  {
    slug: "sanskar-conduct",
    name: "Sanskar & conduct",
    category: "Special & Dharmic Knowledge",
    section: "academics",
    history: [
      "Sanskar — the shaping of character and conduct through disciplined practice — is a concept with deep roots in Indian educational philosophy, traditionally understood as something built through daily habit rather than taught in a single lesson.",
      "At Gurukulam this takes concrete form in the 64 codes of conduct for men and 72 for women set down by Rushabhdev, covering how one speaks, dresses, eats and carries oneself — practised daily rather than memorised for an exam.",
    ],
  },
  // ---- Academics: Vishesh Gyan ----
  {
    slug: "diet-daily-discipline",
    name: "Diet & daily discipline",
    category: "Vishesh Gyan",
    section: "academics",
    history: [
      "Guidance on what to eat, when to eat, and how to structure a day is drawn from Ayurveda, India's traditional system of medicine, documented for over three thousand years in texts such as the Charaka Samhita — which describes food, sleep and routine as the three pillars of health.",
      "Vishesh Gyan brings this into a child's daily life directly: practical, lived knowledge about the body and its rhythms, not abstract theory.",
    ],
  },
  {
    slug: "history-civics-social-science",
    name: "History, civics & social science",
    category: "Vishesh Gyan",
    section: "academics",
    history: [
      "Understanding one's history, community and society has been part of formal education since antiquity — the discipline that lets a student place themselves within a larger story and understand how the society around them actually works.",
      "Vishesh Gyan merges this with the sciences, treating 'general knowledge' as one connected picture of the world rather than separate, disconnected subjects.",
    ],
  },
  {
    slug: "moral-values",
    name: "Moral values",
    category: "Vishesh Gyan",
    section: "academics",
    history: [
      "Moral education at Gurukulam draws on Jain ethical principles — truthfulness, non-violence, humility and self-restraint — values that have shaped Jain philosophy and daily practice for over two thousand years.",
      "Taught alongside academics rather than after them, these values are meant to be practised, not just discussed.",
    ],
  },
  {
    slug: "ayurveda",
    name: "Ayurveda",
    category: "Vishesh Gyan",
    section: "academics",
    history: [
      "Ayurveda is one of the world's oldest continuously practised medical systems, with its foundational texts — the Charaka Samhita and Sushruta Samhita — dating back roughly three thousand years. It treats health as a balance between body, diet, routine and mind, rather than the treatment of illness alone.",
      "For Gurukulam's students, Ayurveda is taught as everyday, practical knowledge — how to eat and live well — not as a specialised subject reserved for later life.",
    ],
  },
  {
    slug: "jain-shlokas",
    name: "Jain shlokas",
    category: "Vishesh Gyan",
    section: "academics",
    history: [
      "Jain shlokas are verses recited from the Jain agamas, the oldest and most central being the Namokar Mantra — a prayer that, unlike most world prayers, salutes no single deity but instead honours five categories of enlightened and virtuous souls. It is considered one of the oldest continuously recited prayers in the world.",
      "Learning these shlokas gives students a direct link to Jain philosophy's core values of humility and respect, recited daily as part of Gurukulam's routine.",
    ],
  },
];

export function findSkillHistory(slug: string): SkillHistoryEntry | undefined {
  return SKILL_HISTORY.find((entry) => entry.slug === slug);
}
