export type Project = {
  name: string;
  description: string;
  technologies: string[];
  focus: string;
  githubUrl: string;
  icon: "book" | "churn" | "ai" | "commerce" | "insight";
};

export const profile = {
  github: "https://github.com/22ec016abhay",
  linkedin: "https://www.linkedin.com/in/abhaypareek/",
  email: "pareekabhi0189@gmail.com",
  resume: "/abhay-pareek-resume.pdf",
};

export const skillGroups = [
  { name: "Programming", skills: ["Python", "SQL"] },
  { name: "Data analysis", skills: ["NumPy", "Pandas", "Matplotlib"] },
  { name: "Business intelligence", skills: ["Power BI", "Microsoft Excel"] },
  { name: "Databases", skills: ["PostgreSQL", "MySQL"] },
  { name: "Tools", skills: ["Git", "GitHub", "Jupyter", "VS Code"] },
];

export const projects: Project[] = [
  {
    name: "Customer 360 E-commerce Intelligence",
    description: "An end-to-end e-commerce analytics project focused on customer behavior, retention signals, and a clearer view of business performance.",
    technologies: ["Python", "SQL", "Power BI"],
    focus: "Customer & retention intelligence",
    githubUrl: "https://github.com/22ec016abhay/Customer-360-ecommerce-intelligence",
    icon: "commerce",
  },
  {
    name: "RavenStack Subscription Analytics",
    description: "An analytics project exploring customer churn, plan tiers, and account behavior to identify patterns associated with retention.",
    technologies: ["PostgreSQL", "SQL", "Data Analysis"],
    focus: "Retention patterns & plan behavior",
    githubUrl: "https://github.com/22ec016abhay/ravenstack-subscription-analytics",
    icon: "churn",
  },
  {
    name: "InsightFlow Analytics",
    description: "A data analytics project designed to turn retail data into a structured, practical workflow for exploration and reporting.",
    technologies: ["Python", "PostgreSQL", "Excel"],
    focus: "Retail data workflow",
    githubUrl: "https://github.com/22ec016abhay/InsightFlow-Analytics",
    icon: "insight",
  },
  {
    name: "BookVerse SQL Analytics",
    description: "A SQL analytics project examining books, customers, and orders to understand customer behavior, purchasing patterns, and business performance.",
    technologies: ["PostgreSQL", "SQL"],
    focus: "Customer behavior & business performance",
    githubUrl: "https://github.com/22ec016abhay/BookVerse-SQL-Analytics",
    icon: "book",
  },
  {
    name: "AI Data Analyzer",
    description: "An AI-powered data analysis application designed to help users upload datasets and generate useful analytical insights and visualizations.",
    technologies: ["Python", "Pandas", "AI", "Data Visualization"],
    focus: "Accessible dataset exploration",
    githubUrl: "https://github.com/22ec016abhay/Ai_analyser",
    icon: "ai",
  },
];

export const education = {
  degree: "B.Tech",
  branch: "Electronics & Communication Engineering",
  institution: "JSS Academy of Technical Education, Noida",
  graduation: "2022 – 2026",
};
