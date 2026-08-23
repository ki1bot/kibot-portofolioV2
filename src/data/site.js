import {
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  SpotifyIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { PERSONAL_INFO } from "../lib/portfolio";

export const HERO_ROLES = ["Fullstack Website", "Mobile Application"];

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
    label: "Portofolio",
    target: "projects",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    value: "Rifqi Susanto",
    href: PERSONAL_INFO.linkedin,
    icon: Linkedin01Icon,
  },
  {
    label: "GitHub",
    value: "@ki1bot",
    href: PERSONAL_INFO.github,
    icon: GithubIcon,
  },
  {
    label: "Instagram",
    value: "@ki1bot_",
    href: PERSONAL_INFO.instagram,
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    value: "@kibot7659",
    href: PERSONAL_INFO.youtube,
    icon: YoutubeIcon,
  },
  {
    label: "Spotify",
    value: "kibot",
    href: PERSONAL_INFO.spotify,
    icon: SpotifyIcon,
  },
  {
    label: "TikTok",
    value: "@kiibott_",
    href: PERSONAL_INFO.tiktok,
    icon: TiktokIcon,
  },
];
