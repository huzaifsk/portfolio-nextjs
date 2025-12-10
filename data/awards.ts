export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  link?: string;
}

export const awards: Award[] = [
  {
    id: "1",
    title: "Awwwards Site of the Day",
    organization: "Awwwards",
    year: "2024",
    link: "https://awwwards.com"
  },
  {
    id: "2",
    title: "GitHub Stars Program",
    organization: "GitHub",
    year: "2023",
    link: "https://stars.github.com"
  },
  {
    id: "3",
    title: "Vercel OSS Contributor",
    organization: "Vercel",
    year: "2023",
    link: "https://vercel.com/oss"
  },
  {
    id: "4",
    title: "FEConf Speaker",
    organization: "Frontend Conference",
    year: "2022"
  },
  {
    id: "5",
    title: "CSS Design Awards - Innovation",
    organization: "CSS Design Awards",
    year: "2022",
    link: "https://cssdesignawards.com"
  }
];
