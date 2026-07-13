// Structured, translated facts about Gurukulam, Surat — sourced from the
// institution's own founding notes and community messages.

export const STATS = [
  { value: 2004, prefix: "Est. ", label: "Founded with five children" },
  { value: 225, label: "Students learning today" },
  { value: 50, label: "Gurujans & staff" },
  { value: 80, suffix: "+", label: "Diksha taken by alumni" },
] as const;

export const DIVISIONS = [
  {
    id: "bal-vibhag",
    name: "Bal Vibhag",
    subtitle: "Child division",
    age: "3 – 7 years",
    hours: "8:30 am – 12:30 pm",
    desc: "The first steps into Gurukulam — language, story and play woven together, kept to a half day suited to young children.",
  },
  {
    id: "primary-vibhag",
    name: "Primary Vibhag",
    subtitle: "Primary division",
    age: "7 – 15 years",
    hours: "8:30 am – 3:30 pm",
    desc: "A full day of academics in the morning and arts in the afternoon, through to Std. 10, taught entirely within Gurukulam.",
  },
] as const;

export const DAILY_RHYTHM = [
  { time: "8:30 – 12:30", title: "Academic subjects", desc: "Sanskrit, Gujarati, English, mathematics and dharmic study." },
  { time: "12:30", title: "Bhojan", desc: "Lunch together as one Gurukulam Parivar." },
  { time: "1:00 – 1:30", title: "Varta", desc: "Daily stories of the character of great personalities." },
  { time: "1:30 – 3:30", title: "Vividh Kalao", desc: "The afternoon's arts — music, dance, craft and more." },
] as const;

export const SUBJECTS = [
  {
    id: "languages",
    name: "Languages",
    items: ["Sanskrit (Prathama & Madhyama)", "Gujarati", "English, including debate"],
    desc: "Sanskrit is taught so students can read scripture with ease; Gurukulam students are known to speak better English than many English-medium peers.",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    items: ["Fast mental calculation", "Calendar calculation", "Puzzles & tables"],
    desc: "Students calculate quickly without a calculator, and work confidently with calendars, puzzles and tables of any year.",
  },
  {
    id: "dharmic",
    name: "Special & Dharmic Knowledge",
    items: ["Character of great personalities", "Religious study", "Sanskar & conduct"],
    desc: "Daily stories and study built around the 80 codes of conduct for men and 54 for women set down by Rushabhdev.",
  },
] as const;

export const ARTS = [
  {
    id: "performing",
    name: "Performing Arts",
    items: ["Bharatanatyam", "Kathak", "Singing", "Dance", "Yoga"],
  },
  {
    id: "instruments",
    name: "Instruments",
    items: ["Flute", "Violin", "Santoor", "Jaltarang", "Sitar", "Tabla", "Pakhawaj", "Dholak", "Harmonium"],
  },
  {
    id: "craft",
    name: "Craft & Skill",
    items: ["Handwriting", "Drawing", "Gymnastics", "Desi games", "Mehendi", "Rangoli", "Pottery", "Fashion design"],
  },
] as const;

export const UNIQUENESS = [
  "Every student progresses independently, at their own pace, in every subject.",
  "Classes are kept to 7–15 students, so every teacher can give individual attention.",
  "Students who master a subject early go on to teach it to others.",
  "Healthy competition without pressure — exams stay light, not a burden.",
  "Gurujans and students remove their footwear and dress in traditional attire for class, sitting below the guru.",
  "Around 80 alumni have taken diksha across different communities.",
] as const;

export const DRESS_CODE = [
  { group: "Sons & gurujans", attire: "Zabbho-lengho or chudidar" },
  { group: "Daughters", attire: "Chaniya-choli or Punjabi dress" },
  { group: "Women teachers", attire: "Saree" },
] as const;

export const ALUMNI_PATHS = [
  "Chartered Accountants",
  "CFAs",
  "Architects",
  "Ayurvedic doctors",
  "Fashion designers",
  "Independent business owners",
  "Diksha, in service of dharma",
] as const;

export const QUOTES = [
  {
    text: "Every child of Gurukulam has moved into a different field — some CAs, some architects, some in fashion design, some running their own businesses. But one thing holds: wherever they land, they haven't forgotten their values, their character, or their culture.",
    attribution: "Ankita Ben, Gurukulam Parivar",
  },
  {
    text: "A Gurukulam child won't only excel at studies — they'll be number one at becoming a good human being. Because at Gurukulam, bhantar (education) always comes with ghadtar (character-building).",
    attribution: "Ankita Ben, Gurukulam Parivar",
  },
  {
    text: "The atmosphere here is that of a family — every gurujan cooks, cleans and cares for these children as their own. That is why we call ourselves the Gurukulam Parivar.",
    attribution: "From the Gurukulam founding notes",
  },
] as const;

export const TIMELINE = [
  {
    year: "2004",
    title: "Five children, one shared idea",
    desc: "A handful of thoughtful parents wanted their children to receive sanskar alongside schooling. Gurukulam began on Ashadh Sud 2, Samvat 2060 — 19 June 2004.",
  },
  {
    year: "Since",
    title: "A waiting list, year after year",
    desc: "Gurukulam grew from five children to 225 students and 50 gurujans and staff, with more families waiting than there is room to admit.",
  },
  {
    year: "2026",
    title: "Std. 10, inside Gurukulam",
    desc: "Students now complete school entirely within Gurukulam. In March 2026, 15 students sat the Gujarat Navjivan Board exam — most scored above 40%.",
  },
  {
    year: "Today",
    title: "Outgrowing our home",
    desc: "Kalavatsav 2.0, our cultural showcase at Sanjeevkumar Auditorium, drew wide praise — even as our current premises face a fire-safety NOC shortfall and 30–35 waiting students we cannot yet seat.",
  },
] as const;

export const FESTIVALS = [
  { name: "Paryushan", desc: "The year's principal observance — Gurukulam closes so every student can keep it fully." },
  { name: "Chaumasi Chaudas", desc: "Marked three times a year, at each change of season." },
  { name: "Maun Ekadashi", desc: "A day of silence and worship, observed by the whole Gurukulam Parivar." },
] as const;

export const PHILOSOPHY = {
  eighty: 80,
  fiftyFour: 54,
  founder: "Rushabhdev",
  tagline: "આજનો બાળ, કાલનો રખેવાળ",
  taglineTranslation: "Today's child, tomorrow's guardian",
} as const;
