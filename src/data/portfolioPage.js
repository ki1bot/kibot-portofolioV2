import { EDUCATION, PERSONAL_INFO } from "../lib/portfolio";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const NAV_ITEMS = [
  { label: "Home", target: "home", icon: "home" },
  { label: "About", target: "about", icon: "user" },
  { label: "Experience", target: "journey", icon: "briefcase" },
  { label: "Projects", target: "projects", icon: "folder" },
  { label: "Certs", target: "certificates", icon: "award" },
  { label: "Contact", target: "contact", icon: "mail" },
];

const JOURNEY_META = {
  "Universitas Gunadarma": {
    category: "Higher Education",
    details: [
      "Currently pursuing a bachelor degree in Information Systems at Universitas Gunadarma.",
      "Developing skills in system analysis, databases, programming, software development, and application architecture through coursework and portfolio projects.",
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
      "Built the technical foundation used for further study, programming practice, and software development.",
    ],
    tags: ["Vocational School", "Technical Learning", "Programming"],
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
  {
    name: "JavaScript",
    mark: "JS",
    icon: `${DEVICON}/javascript/javascript-original.svg`,
    bg: "#f7df1e",
    fg: "#111111",
  },
  {
    name: "TypeScript",
    mark: "TS",
    icon: `${DEVICON}/typescript/typescript-original.svg`,
    bg: "#397cc7",
    fg: "#ffffff",
  },
  {
    name: "PHP",
    mark: "php",
    icon: `${DEVICON}/php/php-original.svg`,
    bg: "#777bb4",
    fg: "#ffffff",
  },
  {
    name: "Golang",
    mark: "GO",
    icon: `${DEVICON}/go/go-original-wordmark.svg`,
    bg: "#20b8c5",
    fg: "#08252b",
  },
  {
    name: "Python",
    mark: "Py",
    icon: `${DEVICON}/python/python-original.svg`,
    bg: "#427da2",
    fg: "#ffffff",
  },
  {
    name: "HTML5",
    mark: "5",
    icon: `${DEVICON}/html5/html5-original.svg`,
    bg: "#d9442f",
    fg: "#ffffff",
  },
  {
    name: "CSS3",
    mark: "CSS",
    icon: `${DEVICON}/css3/css3-original.svg`,
    bg: "#2389bd",
    fg: "#ffffff",
  },
  {
    name: "Bootstrap",
    mark: "B",
    icon: `${DEVICON}/bootstrap/bootstrap-original.svg`,
    bg: "#7850ad",
    fg: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    mark: "TW",
    icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
    bg: "#25bdc6",
    fg: "#071f22",
  },
  {
    name: "React",
    mark: "R",
    icon: `${DEVICON}/react/react-original.svg`,
    bg: "#5ed5e6",
    fg: "#10242b",
  },
  {
    name: "Laravel",
    mark: "L",
    icon: `${DEVICON}/laravel/laravel-original.svg`,
    bg: "#f31d2a",
    fg: "#ffffff",
  },
  {
    name: "CodeIgniter",
    mark: "CI",
    icon: `${DEVICON}/codeigniter/codeigniter-plain.svg`,
    bg: "#d73e19",
    fg: "#ffffff",
  },
  {
    name: "Next.JS",
    mark: "N",
    icon: `${DEVICON}/nextjs/nextjs-original.svg`,
    bg: "#1b1b1b",
    fg: "#ffffff",
    invert: true,
  },
  {
    name: "Vue",
    mark: "V",
    icon: `${DEVICON}/vuejs/vuejs-original.svg`,
    bg: "#50c987",
    fg: "#ffffff",
  },
  {
    name: "Svelte",
    mark: "S",
    icon: `${DEVICON}/svelte/svelte-original.svg`,
    bg: "#fb3f13",
    fg: "#ffffff",
  },
  {
    name: "Express.JS",
    mark: "EX",
    icon: `${DEVICON}/express/express-original.svg`,
    bg: "#202020",
    fg: "#ffffff",
    invert: true,
  },
  {
    name: "Node.JS",
    mark: "JS",
    icon: `${DEVICON}/nodejs/nodejs-original.svg`,
    bg: "#37a83a",
    fg: "#ffffff",
  },
  {
    name: "PostgreSQL",
    mark: "PG",
    icon: `${DEVICON}/postgresql/postgresql-original.svg`,
    bg: "#39759a",
    fg: "#ffffff",
  },
  {
    name: "MySQL",
    mark: "SQL",
    icon: `${DEVICON}/mysql/mysql-original.svg`,
    bg: "#538caf",
    fg: "#ffffff",
  },
  {
    name: "MongoDB",
    mark: "M",
    icon: `${DEVICON}/mongodb/mongodb-original.svg`,
    bg: "#4ab34c",
    fg: "#ffffff",
  },
  {
    name: "Supabase",
    mark: "S",
    icon: `${DEVICON}/supabase/supabase-original.svg`,
    bg: "#3fda8e",
    fg: "#08271d",
  },
  {
    name: "Vercel",
    mark: "▲",
    icon: `${DEVICON}/vercel/vercel-original.svg`,
    bg: "#202020",
    fg: "#ffffff",
    invert: true,
  },
  {
    name: "Git",
    mark: "G",
    icon: `${DEVICON}/git/git-original.svg`,
    bg: "#e6483b",
    fg: "#ffffff",
  },
  {
    name: "Docker",
    mark: "D",
    icon: `${DEVICON}/docker/docker-original.svg`,
    bg: "#1978c9",
    fg: "#ffffff",
  },
  {
    name: "Firebase",
    mark: "F",
    icon: `${DEVICON}/firebase/firebase-original.svg`,
    bg: "#f4b72d",
    fg: "#282000",
  },
  {
    name: "Flutter",
    mark: "FL",
    icon: `${DEVICON}/flutter/flutter-original.svg`,
    bg: "#48b9e8",
    fg: "#082b3a",
  },
  {
    name: "Java",
    mark: "J",
    icon: `${DEVICON}/java/java-original.svg`,
    bg: "#e36b18",
    fg: "#ffffff",
  },
  {
    name: "C++",
    mark: "C++",
    icon: `${DEVICON}/cplusplus/cplusplus-original.svg`,
    bg: "#1766a0",
    fg: "#ffffff",
  },
  {
    name: "Linux",
    mark: "LX",
    icon: `${DEVICON}/linux/linux-original.svg`,
    bg: "#262626",
    fg: "#ffffff",
  },
  {
    name: "VS Code",
    mark: "</>",
    icon: `${DEVICON}/vscode/vscode-original.svg`,
    bg: "#1686c5",
    fg: "#ffffff",
  },
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
