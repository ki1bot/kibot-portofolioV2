import { EDUCATION, PERSONAL_INFO } from "../lib/portfolio";

export const NAV_ITEMS = [
  { label: "Home", target: "home", icon: "home" },
  { label: "About", target: "about", icon: "user" },
  { label: "Journey", target: "journey", icon: "briefcase" },
  { label: "Projects", target: "projects", icon: "folder" },
  { label: "Certificates", target: "certificates", icon: "award" },
  { label: "Contact", target: "contact", icon: "mail" },
];

const JOURNEY_META = {
  "Universitas Gunadarma": {
    category: "Higher Education",
    details: [
      "Currently pursuing a bachelor degree in Information Systems at Universitas Gunadarma.",
      "Developing skills in system analysis, databases, programming, and application development through coursework and portfolio projects.",
    ],
    tags: [
      "Information Systems",
      "Database",
      "Web Development",
      "Software Development",
    ],
  },
  "Sekolah Menengah Kejuruan (SMK)": {
    category: "Vocational Education",
    details: [
      "Completed vocational secondary education at SMK Patriot 1.",
      "Built the technical learning foundation used for further study at university.",
    ],
    tags: ["Vocational School", "Technical Learning"],
  },
  "Sekolah Menengah Pertama (SMP)": {
    category: "Secondary Education",
    details: [
      "Completed junior secondary education at SMP Pangeran Jayakarta.",
    ],
    tags: ["Secondary School"],
  },
  "Sekolah Dasar (SD)": {
    category: "Primary Education",
    details: ["Completed primary education at SDN Harapan Jaya 8."],
    tags: ["Primary School"],
  },
};

export const JOURNEY_ITEMS = EDUCATION.filter(
  (item) =>
    item.title !== "Tahun Kelahiran" && item.title !== "Taman Kanak-kanak (TK)",
)
  .slice(-4)
  .reverse()
  .map((item) => ({
    ...item,
    ...(JOURNEY_META[item.title] || {
      category: "Education",
      details: [item.subtitle],
      tags: ["Education"],
    }),
  }));

export const TECH_CARDS = [
  { name: "JavaScript", mark: "JS", bg: "#f7df1e", fg: "#111111" },
  { name: "TypeScript", mark: "TS", bg: "#3178c6", fg: "#ffffff" },
  { name: "PHP", mark: "php", bg: "#777bb4", fg: "#ffffff" },
  { name: "Golang", mark: "GO", bg: "#00add8", fg: "#08252b" },
  { name: "Python", mark: "Py", bg: "#3776ab", fg: "#ffffff" },
  { name: "HTML5", mark: "5", bg: "#e34f26", fg: "#ffffff" },
  { name: "CSS3", mark: "CSS", bg: "#1572b6", fg: "#ffffff" },
  { name: "Bootstrap", mark: "B", bg: "#7952b3", fg: "#ffffff" },
  { name: "Tailwind CSS", mark: "TW", bg: "#06b6d4", fg: "#07252a" },
  { name: "React", mark: "⚛", bg: "#61dafb", fg: "#10242b" },
  { name: "Laravel", mark: "L", bg: "#ff2d20", fg: "#ffffff" },
  { name: "CodeIgniter", mark: "CI", bg: "#ee4623", fg: "#ffffff" },
  { name: "Next.JS", mark: "N", bg: "#181818", fg: "#ffffff" },
  { name: "Vue", mark: "V", bg: "#42b883", fg: "#ffffff" },
  { name: "Svelte", mark: "S", bg: "#ff3e00", fg: "#ffffff" },
  { name: "Express.JS", mark: "ex", bg: "#262626", fg: "#ffffff" },
  { name: "Node.JS", mark: "JS", bg: "#339933", fg: "#ffffff" },
  { name: "PostgreSQL", mark: "PG", bg: "#336791", fg: "#ffffff" },
  { name: "MySQL", mark: "SQL", bg: "#4479a1", fg: "#ffffff" },
  { name: "MongoDB", mark: "M", bg: "#47a248", fg: "#ffffff" },
  { name: "Supabase", mark: "S", bg: "#3ecf8e", fg: "#08271d" },
  { name: "Vercel", mark: "▲", bg: "#1f1f1f", fg: "#ffffff" },
  { name: "Git", mark: "G", bg: "#f05032", fg: "#ffffff" },
  { name: "Docker", mark: "D", bg: "#2496ed", fg: "#ffffff" },
  { name: "Firebase", mark: "F", bg: "#ffca28", fg: "#302600" },
  { name: "Flutter", mark: "FL", bg: "#54c5f8", fg: "#082b3a" },
  { name: "Java", mark: "J", bg: "#e76f00", fg: "#ffffff" },
  { name: "C++", mark: "C++", bg: "#00599c", fg: "#ffffff" },
  { name: "Linux", mark: "LX", bg: "#262626", fg: "#ffffff" },
  { name: "VS Code", mark: "</>", bg: "#1686c5", fg: "#ffffff" },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    value: "@ki1bot",
    href: PERSONAL_INFO.github,
  },
  {
    label: "LinkedIn",
    value: "Rifqi Susanto",
    href: PERSONAL_INFO.linkedin,
  },
  {
    label: "Instagram",
    value: "@ki1bot_",
    href: PERSONAL_INFO.instagram,
  },
  {
    label: "YouTube",
    value: "@kibot7659",
    href: PERSONAL_INFO.youtube,
  },
  {
    label: "TikTok",
    value: "@kiibott_",
    href: PERSONAL_INFO.tiktok,
  },
  {
    label: "Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
];
