export interface ArtHistoryEntry {
  slug: string;
  name: string;
  category: string;
  history: string[];
}

export const ART_HISTORY: ArtHistoryEntry[] = [
  {
    slug: "bharatanatyam",
    name: "Bharatanatyam",
    category: "Performing Arts",
    history: [
      "Bharatanatyam is one of the oldest surviving classical dance forms in India, tracing its roots to the temples of Tamil Nadu over two thousand years ago. Its foundations lie in the Natya Shastra, the ancient Sanskrit treatise on performing arts attributed to the sage Bharata, from which the dance is sometimes said to take its name.",
      "For centuries it was performed by devadasis — temple dancers dedicated to worship — as a form of devotion combining rhythm (tala), expression (abhinaya) and pure movement (nritta). In the early twentieth century, reformers and artists such as Rukmini Devi Arundale brought the form out of the temple and onto the public stage, giving it the codified structure taught around the world today.",
    ],
  },
  {
    slug: "kathak",
    name: "Kathak",
    category: "Performing Arts",
    history: [
      "Kathak takes its name from 'Katha', the Sanskrit word for story. It began as a form of storytelling by wandering bards in northern India, who used rhythmic footwork, gesture and expression to narrate tales from scripture and epic poetry in temple courtyards.",
      "Under the Mughal courts from the sixteenth century onward, Kathak absorbed Persian dress, ghazals and courtly elegance, evolving into the fast, spinning, percussive dance recognisable today — built on intricate footwork (tatkar), rhythmic cycles (tala) and dramatic storytelling through the eyes and hands.",
    ],
  },
  {
    slug: "singing",
    name: "Singing",
    category: "Performing Arts",
    history: [
      "Indian classical singing traces back over a thousand years to the Sama Veda, whose chants are considered the earliest known form of organised Indian music. From this root grew two major traditions — Hindustani in the north and Carnatic in the south — each built on the raga, a melodic framework, and tala, a rhythmic cycle.",
      "Across centuries, singing carried both devotional and courtly purposes, passed down through the guru-shishya (teacher-student) tradition — the same oral, one-to-one method by which Gurukulam still teaches music today.",
    ],
  },
  {
    slug: "dance",
    name: "Dance",
    category: "Performing Arts",
    history: [
      "Dance in India is documented as far back as the Indus Valley Civilization, whose 'Dancing Girl' bronze figurine, over four thousand years old, is among the earliest evidence of dance anywhere in the world.",
      "Indian classical dance was later formalised by the Natya Shastra into eight recognised styles across the subcontinent, each rooted in a region's language, mythology and temple culture, but all sharing the same grammar of rhythm, gesture and storytelling.",
    ],
  },
  {
    slug: "yoga",
    name: "Yoga",
    category: "Performing Arts",
    history: [
      "Yoga's origins reach back over four thousand years to the Indus Valley Civilization, with early references appearing in the Vedas. It was systematised around the second century BCE by the sage Patanjali in the Yoga Sutras, which laid out an eight-limbed path of ethical, physical and meditative discipline.",
      "What began as a spiritual practice for stilling the mind gradually developed its physical postures (asanas) into the discipline widely practised today — one that Gurukulam teaches not as exercise alone, but as part of daily sanskar.",
    ],
  },
  {
    slug: "flute",
    name: "Flute",
    category: "Instruments",
    history: [
      "The bansuri, India's classical bamboo flute, is among the subcontinent's oldest instruments, depicted in temple carvings and scripture for over two thousand years. It holds a unique place in Indian iconography as the instrument of Krishna, said to have charmed all of creation with its sound.",
      "Made from a single hollow reed of bamboo with no keys or mechanism, mastering the bansuri depends entirely on breath control and finger placement — a simplicity that has kept it central to both classical and folk music across India.",
    ],
  },
  {
    slug: "violin",
    name: "Violin",
    category: "Instruments",
    history: [
      "The violin was invented in sixteenth-century Italy, but found an entirely new life in India. It was introduced into Carnatic music in the early nineteenth century — most notably through composer Baluswami Dikshitar, who adapted its Western technique to Indian ragas.",
      "Played seated, resting on the ankle rather than the shoulder, the Indian violin uses continuous glides between notes to imitate the human voice, making it one of the few Western instruments fully absorbed into Indian classical tradition.",
    ],
  },
  {
    slug: "santoor",
    name: "Santoor",
    category: "Instruments",
    history: [
      "The santoor is a trapezoidal hammered dulcimer with ancient Persian roots, believed to have travelled into the Kashmir valley over a thousand years ago, where it became central to Sufiana music.",
      "For centuries it remained a folk instrument until santoor player Pandit Shivkumar Sharma pioneered its adaptation into Hindustani classical music in the mid-twentieth century, proving an instrument built for rapid, struck notes could still carry the sustained, gliding phrases of a raga.",
    ],
  },
  {
    slug: "jaltarang",
    name: "Jaltarang",
    category: "Instruments",
    history: [
      "Jaltarang, meaning 'waves of water', is one of India's oldest and rarest melodic instruments — a set of ceramic or metal bowls filled with varying levels of water, each tuned to a different note and struck with light bamboo sticks.",
      "Mentioned in ancient Sanskrit texts as far back as the sixth century, it was once common in royal courts but is now taught by only a handful of musicians, making it a genuine rarity in a student's musical education.",
    ],
  },
  {
    slug: "sitar",
    name: "Sitar",
    category: "Instruments",
    history: [
      "The sitar's invention is traditionally credited to the thirteenth-century poet-musician Amir Khusrau, who is said to have adapted the Persian 'setar' — literally 'three strings' — into a new instrument suited to Indian ragas.",
      "Over centuries it evolved into today's long-necked, many-stringed instrument, with sympathetic strings that resonate beneath the played strings to give it its distinctive shimmering sound — later carried to a global audience through musicians like Pandit Ravi Shankar.",
    ],
  },
  {
    slug: "tabla",
    name: "Tabla",
    category: "Instruments",
    history: [
      "The tabla's exact origin is debated, but the most widely told account credits Amir Khusrau in the Delhi Sultanate era with splitting the older single barrel drum, the pakhawaj, into the two smaller drums played today.",
      "It has since become the primary percussion instrument of Hindustani classical music, capable of an extraordinary vocabulary of struck syllables (bols) that can accompany, converse with, and even outpace the lead performer.",
    ],
  },
  {
    slug: "pakhawaj",
    name: "Pakhawaj",
    category: "Instruments",
    history: [
      "The pakhawaj is one of India's oldest drums, a two-headed barrel drum going back well over a thousand years, and is widely believed to be the ancestor from which the tabla was later developed.",
      "It remains the traditional accompaniment to dhrupad, the oldest surviving form of Hindustani classical singing, prized for its deep, resonant tone and the mathematical precision of its rhythmic patterns.",
    ],
  },
  {
    slug: "dholak",
    name: "Dholak",
    category: "Instruments",
    history: [
      "The dholak is a folk barrel drum found in villages and celebrations across the Indian subcontinent for centuries, played at weddings, festivals and devotional gatherings long before it entered formal music education.",
      "Simpler to learn than the tabla but no less expressive, it remains the heartbeat of Indian folk and devotional (bhajan) music, and is often a student's first hands-on introduction to rhythm.",
    ],
  },
  {
    slug: "harmonium",
    name: "Harmonium",
    category: "Instruments",
    history: [
      "The harmonium was brought to India by European missionaries and traders in the nineteenth century. Indian musicians modified the original foot-pumped European design into a hand-pumped, portable version suited to floor-seated performance.",
      "Despite its foreign origin, it was fully absorbed into Indian music within a generation and today is one of the most common instruments used to accompany classical and devotional singing across the country.",
    ],
  },
  {
    slug: "handwriting",
    name: "Handwriting",
    category: "Craft & Skill",
    history: [
      "India has one of the world's longest continuous manuscript traditions, with scribes for centuries copying scripture and literature onto palm leaves and later paper in careful, disciplined script — a tradition that placed enormous value on the beauty and precision of handwriting itself.",
      "That discipline carries directly into how Gurukulam teaches the skill today: not as an afterthought, but as a practice of patience and attention that shapes how a child thinks and works.",
    ],
  },
  {
    slug: "drawing",
    name: "Drawing",
    category: "Craft & Skill",
    history: [
      "Drawing is among humanity's oldest forms of expression, and in India it runs from prehistoric rock art to the intricate line work found in temple carving and manuscript illustration for over two thousand years.",
      "Taught to children as both an artistic and observational skill, drawing sharpens the same patience and precision prized across Gurukulam's other crafts.",
    ],
  },
  {
    slug: "gymnastics",
    name: "Gymnastics",
    category: "Craft & Skill",
    history: [
      "While competitive gymnastics as a sport developed in ancient Greece, India has its own parallel tradition of disciplined physical training — most notably Mallakhamb, a centuries-old practice of gymnastic and yogic postures performed on a vertical wooden pole or rope, developed to build the strength and balance of wrestlers.",
      "Gymnastics at Gurukulam draws on this same lineage of physical discipline as a partner to academic learning, not separate from it.",
    ],
  },
  {
    slug: "desi-games",
    name: "Desi games",
    category: "Craft & Skill",
    history: [
      "Traditional Indian games such as kabaddi, gilli-danda and kho-kho go back centuries as village pastimes, requiring no equipment beyond bare hands, sticks and open ground — designed to build strength, quick thinking and teamwork.",
      "Long before organised sport arrived in India, these games were how children learned discipline and fair play, which is exactly why Gurukulam keeps them alive in its own daily rhythm.",
    ],
  },
  {
    slug: "mehendi",
    name: "Mehendi",
    category: "Craft & Skill",
    history: [
      "The use of henna to decorate skin dates back over five thousand years, with early evidence from ancient Egypt and the Middle East. It arrived in South Asia over a thousand years ago and was woven into Indian wedding and festival tradition, where it remains a mark of celebration today.",
      "Mehendi combines fine motor skill with pattern and symmetry, making it as much a discipline in precision as it is an art of decoration.",
    ],
  },
  {
    slug: "rangoli",
    name: "Rangoli",
    category: "Craft & Skill",
    history: [
      "Rangoli is an ancient Indian folk art of drawing patterns on the floor using coloured powder, rice or flower petals, traditionally made at the entrance of a home to welcome guests and mark festivals — known by different names across India, such as kolam in Tamil Nadu.",
      "Passed down almost entirely by hand, from elder to child, rangoli teaches symmetry, geometry and patience long before a student ever encounters those words in a textbook.",
    ],
  },
  {
    slug: "pottery",
    name: "Pottery",
    category: "Craft & Skill",
    history: [
      "Pottery is one of the oldest crafts practised on the Indian subcontinent, with sophisticated wheel-thrown ceramics found across the Indus Valley Civilization more than four thousand years ago.",
      "Shaping clay by hand teaches a kind of patience that cannot be rushed — a lesson Gurukulam values as much as the finished pot itself.",
    ],
  },
  {
    slug: "fashion-design",
    name: "Fashion design",
    category: "Craft & Skill",
    history: [
      "India's textile and garment tradition stretches back thousands of years, from the fine cotton of the Indus Valley to the intricate embroidery, weaving and dyeing techniques — such as bandhani, block printing and zari work — that different regions of India perfected over centuries.",
      "Modern fashion design draws directly on this inheritance, and several Gurukulam alumni have gone on to build careers in the field, carrying that craft heritage forward into contemporary work.",
    ],
  },
];

export function findArtHistory(slug: string): ArtHistoryEntry | undefined {
  return ART_HISTORY.find((entry) => entry.slug === slug);
}
