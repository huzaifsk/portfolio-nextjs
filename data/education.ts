export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "1",
    institution: "Manipal University",
    degree: "MBA",
    field: "Information Technology",
    period: "Expected: Dec 2025",
    startDate: "2024-01",
    endDate: "2025-12",
    description: "Master of Business Administration specializing in Information Technology, focusing on technology management, digital transformation, and strategic IT leadership."
  },
  {
    id: "2",
    institution: "Mumbai University",
    degree: "BSc",
    field: "Information Technology", 
    period: "Graduated: May 2021",
    startDate: "2018-06",
    endDate: "2021-05",
    description: "Completed various online courses in React.js, JavaScript, UI/UX Design, and modern web development practices through platforms like Udemy, Coursera, and freeCodeCamp."
  }
];