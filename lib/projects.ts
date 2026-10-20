export type Project = {
  title: string;
  description: string;
  url: string;
  category: string;
  screenshot: string;
};

// Product builds lead; marketing sites follow.
export const projects: Project[] = [
  {
    title: "Torchline AI",
    description: "Vision analytics platform turning existing camera feeds into operational intelligence.",
    url: "https://www.torchline.ai/",
    category: "AI product",
    screenshot: "/projects/screenshots/torchlineai.webp",
  },
  {
    title: "Top One Percenter",
    description: "Onboarding redesign for a sales coaching platform helping teams train like their top 1%.",
    url: "https://toponepercenter.com/",
    category: "SaaS platform",
    screenshot: "/projects/screenshots/toponepercenter.webp",
  },
  {
    title: "Top 25 Strategy Lab",
    description: "Admissions platform grading student profiles against Ivy and Top-25 admits.",
    url: "https://top25-strategy-lab.vercel.app/",
    category: "EdTech product",
    screenshot: "/projects/screenshots/top25strategylab.webp",
  },
  {
    title: "Radiance Luxury Living",
    description: "High-end website for a luxury real estate agency with listings and inquiry flows.",
    url: "https://radiancelivingkaty.com/",
    category: "Real estate",
    screenshot: "/projects/screenshots/radianceluxuryliving.webp",
  },
  {
    title: "Daddy's Dining Group",
    description: "Marketing site for an American restaurant group operating in Taiwan.",
    url: "https://daddysdininggroup.com/",
    category: "Restaurant group",
    screenshot: "/projects/screenshots/daddysdininggroup.webp",
  },
  {
    title: "Easy Taiwan Citizenship",
    description: "Informational website guiding users through Taiwan citizenship and residency.",
    url: "https://easytaiwancitizenship.com/",
    category: "Legal services",
    screenshot: "/projects/screenshots/easytaiwancitizenship.webp",
  },
  {
    title: "The Godfellas",
    description: "Story-driven nonprofit website with donation flows and newsletter signup.",
    url: "https://thegodfellas.com/",
    category: "Nonprofit",
    screenshot: "/projects/screenshots/godfellas.webp",
  },
  {
    title: "Ninkata Ninjas",
    description: "Brand website for an animated health-and-wellness kids series ages 4-8.",
    url: "https://www.ninkataninjas.com/",
    category: "Kids entertainment",
    screenshot: "/projects/screenshots/ninkataninjas.webp",
  },
];
