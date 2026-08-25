// Structured, translated facts about Gurukulam, Surat — sourced from the
// institution's own founding notes and community messages.

export const STATS = [
  { value: 2004, prefix: "Est. ", label: "Founded with nine students" },
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
    desc: "A full day of academics in the morning and arts in the afternoon, through to Std. 12, taught entirely within Gurukulam.",
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
    desc: "Daily stories and study built around the 64 codes of conduct for men and 72 for women set down by Rushabhdev.",
  },
  {
    id: "vishesh-gyan",
    name: "Vishesh Gyan",
    items: ["Diet & daily discipline", "History, civics & social science", "Moral values", "Ayurveda", "Jain shlokas"],
    desc: "Extra knowledge that fuses science and social science — what to eat and when, how to behave, history, civics, moral values, Ayurveda and Jain shlokas, all taught together.",
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
    items: [
      "Handwriting",
      "Drawing",
      "Gymnastics",
      "Desi games",
      "Mehendi",
      "Rangoli",
      "Pottery",
      "Fashion design",
      "Cooking & Homemaking",
      "Storytelling",
      "Memory Techniques",
    ],
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
  "Interior designers",
  "Ayurvedic doctors",
  "Fashion designers",
  "Singers",
  "Managers and directors",
  "Independent business owners",
  "Diksha, in service of dharma",
] as const;

export const QUOTES = [
  {
    text: "True education is that which brightens a person's character, and Gurukul has always been at the forefront in this matter. Gurukulam is a place where education is paired with character building, where learning goes hand in hand with values. Here students learn not only how to earn a living, but more importantly, how to live a meaningful life. In a Gurukulam environment, education is deeply rooted in moral integrity and cultural heritage.",
    attribution: "Yamini Paras Sanghvi",
  },
  {
    text: "A Gurukulam child won't only excel at studies — they'll be number one at becoming a good human being. Because at Gurukulam, bhantar (education) always comes with ghadtar (character-building).",
    attribution: "Ankita Ben, Gurukulam Parivar",
  },
  {
    text: "The atmosphere here is that of a family — every gurujan cooks, cleans and cares for these children as their own. That is why we call ourselves the Gurukulam Parivar.",
    attribution: "From the Gurukulam founding notes",
  },
  {
    text: "A mother becomes an enemy, and a father a foe, to the child they fail to educate — for such a person can never shine in company, any more than a crane can shine among swans.",
    attribution: "Traditional Sanskrit shloka, taught at Gurukulam",
  },
] as const;

export const TIMELINE = [
  {
    year: "2004",
    title: "Nine students, one shared idea",
    desc: "A handful of thoughtful parents wanted their children to receive sanskar alongside schooling. Gurukulam began on Ashadh Sud 2, Samvat 2060 — 19 June 2004.",
  },
  {
    year: "Since",
    title: "A waiting list, year after year",
    desc: "Gurukulam grew from nine students to 225 students and 50 gurujans and staff, with more families waiting than there is room to admit.",
  },
  {
    year: "2026",
    title: "Std. 12, inside Gurukulam",
    desc: "Students now complete school entirely within Gurukulam, through to Std. 12. In March 2026, 15 students sat the GSEB Std. 10 exam as external candidates — most scored above 40%.",
  },
  {
    year: "Today",
    title: "Outgrowing our home",
    desc: "Kalavatsav 2.0, our cultural showcase at Sanjeevkumar Auditorium, drew wide praise — even as we've outgrown our current premises, with 30–35 waiting students we cannot yet seat.",
  },
] as const;

export const FESTIVALS = [
  { name: "Paryushan", desc: "The year's principal observance — Gurukulam closes so every student can keep it fully." },
  { name: "Chaumasi Chaudas", desc: "Marked three times a year, at each change of season." },
  { name: "Maun Ekadashi", desc: "A day of silence and worship, observed by the whole Gurukulam Parivar — classes continue as usual." },
] as const;

export const FAQS = [
  {
    q: "What are the age groups for admission?",
    a: "Bal Vibhag takes children age 3–7 for a half day, 8:30 am – 12:30 pm. Primary Vibhag continues from age 7 through Std. 12, a full day of academics and arts, 8:30 am – 3:30 pm.",
  },
  {
    q: "What if there's no seat available right now?",
    a: "Because of high demand, admission may begin on a waiting list — Gurukulam currently has 30–35 waiting students who can't yet be seated. You're welcome to join the waiting list while a seat opens up.",
  },
  {
    q: "What does my child wear to class?",
    a: "Footwear is left at the door. Sons and gurujans wear zabbho-lengho or a chudidar; daughters wear a chaniya-choli or Punjabi dress; women teachers wear a saree.",
  },
  {
    q: "Can my child complete their entire schooling at Gurukulam?",
    a: "Yes — students now complete school entirely within Gurukulam, through to Std. 12, rather than transferring elsewhere partway.",
  },
  {
    q: "What happens after Std. 10, since Gurukulam isn't affiliated with a board like GSEB or CBSE?",
    a: "Though Gurukulam isn't itself a GSEB-affiliated school, students still appear for their Std. 10 exams as per GSEB — the Gujarat Secondary and Higher Secondary Education Board — sitting as external, private candidates. We don't issue a formal Leaving Certificate for this reason, but the GSEB mark sheet from that exam is what other schools ask for, so students are free to join any school they like for Std. 11–12, or continue right here at Gurukulam.",
  },
  {
    q: "Is Gurukulam's purpose to prepare children for diksha (renunciation)?",
    a: "No. Gurukulam's day-to-day curriculum is built around character — good values, morals and the qualities that shape a good human being — not around directing children toward diksha or asking them to give anything up. Diksha is never pushed or promoted to students; some alumni have chosen that path over the years as adults, entirely by their own will, the same way others have gone on to become doctors, architects or business owners. The school's everyday focus is character alongside academics, not renunciation.",
  },
  {
    q: "Does Gurukulam focus on English, or is it a strictly traditional school?",
    a: "Gurukulam isn't an orthodox, religion-only school — alongside sanskar and moral values, students are prepared for the modern world too. English gets its own roughly 40-minute period most days, working on grammar, writing and full English conversation, with cursive handwriting introduced from as early as age 3. Character and values sit alongside a genuinely modern education, not instead of it.",
  },
  {
    q: "How do I start the admission process?",
    a: "Share a little about your child through the contact form, then a gurujan will call to understand your child's needs and answer questions, followed by a visit to see a Bal Vibhag or Primary Vibhag day in progress before you decide.",
  },
] as const;

export const PHILOSOPHY = {
  menCodes: 64,
  womenCodes: 72,
  founder: "Rushabhdev",
  tagline: "Today's child, tomorrow's guardian",
} as const;

export const CONTACTS = [
  { name: "Chaitali Ben", role: "Principal", phone: "+91 94283 92421" },
  { name: "Ankita Ben", role: "Gurukulam Parivar", phone: "+91 98249 82352" },
] as const;

export const ADMISSIONS_EMAIL = "Gurukulam941@Gmail.com";

export const SOCIAL = {
  instagram: "https://www.instagram.com/gurukulam_surat/",
  instagramLabel: "@gurukulam_surat",
  instagramBalmandir: "https://www.instagram.com/gurukulam_balmandirr/",
  instagramBalmandirLabel: "@gurukulam_balmandirr",
} as const;

export const LOCATION = {
  address: "D, Third Floor, Agam Arcade, Opposite Jolly Residency, Vesu, Surat - 395007, Gujarat",
  mapsUrl: "https://maps.app.goo.gl/c1aqADbe7kxm712j6",
} as const;
