import { EDUCATION, PERSONAL_INFO } from "../lib/portfolio";

export const NAV_ITEMS = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Journey",
    target: "journey",
  },
  {
    label: "Projects",
    target: "projects",
  },
  {
    label: "Certificates",
    target: "certificates",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

export const JOURNEY_ITEMS = EDUCATION.filter(
  (item) => item.title !== "Tahun Kelahiran",
)
  .slice(-4)
  .reverse();

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
    label: "Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
];
