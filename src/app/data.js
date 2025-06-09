/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "3D portfolio with interactive visuals",
    date: "2025-05-01",
    demoLink: "https://github.com/tommyhane/portfolio-website",
  },
  {
    id: 2,
    name: "FitoTrack Ski",
    description: "Skiing features for FitoTrack app",
    date: "2025-04-12",
    demoLink: "https://www.concordia.ca/",
  },
  {
    id: 3,
    name: "Sports Club Database",
    description: "Database for managing club operations and teams",
    date: "2025-04-12",
    demoLink: "https://www.concordia.ca/",
  },
  {
    id: 4,
    name: "Tower Defense Game",
    description: "Tower defense game with C++",
    date: "2025-04-12",
    demoLink: "https://www.concordia.ca/",
  },
  {
    id: 5,
    name: "Conversation Analyzer",
    description: "NLP insights from Teams chats.",
    date: "2023-08-31",
    demoLink: "https://www.nbc.ca/",
  },
  {
    id: 6,
    name: "Jira Tracker",
    description: "Dashboard for real-time project tracking.",
    date: "2022-08-31",
    demoLink: "https://www.nbc.ca/",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/tommyhane",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/tommyhane",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
