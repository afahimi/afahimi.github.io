const img = (file) => `${process.env.PUBLIC_URL}/Images/ProjectImages/${file}`;

// `upcoming` renders the dashed placeholder node. `logo` falls back to a monogram tile.
const experience = [
  {
    upcoming: true,
    role: "To be announced",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    dates: "May 2025 - Aug 2025",
    location: "Redmond, WA",
    logo: img("microsoft.svg"),
    blurb: "Built an AI agent that lets 230,000+ Microsoft employees sort out HR data requests just by asking for them.",
    skills: ["React.js", "C#/.NET", "ASP.NET Core", "Azure", "Kubernetes", "Docker"],
  },
  {
    company: "Boeing",
    role: "Software Engineer Intern",
    dates: "Jan 2024 - Aug 2024",
    location: "Vancouver, BC",
    logo: img("boeing.jpg"),
    blurb: "Gave 80+ airlines faster, snappier fleet analytics, with smarter caching, quicker charts and leaner data pipelines.",
    skills: ["React.js", "TypeScript", "Django REST", "GCP", "PySpark", "Databricks"],
  },
  {
    company: "Trulioo",
    role: "Software Engineer Intern",
    dates: "May 2023 - Dec 2023",
    location: "Vancouver, BC",
    logo: img("trulioo.png"),
    blurb: "Taught the test suite to run itself: tripled UI coverage and halved regression time.",
    skills: ["Java", "Selenium", "GitLab CI/CD", "Docker", "PyTest", "TensorFlow"],
  },
  {
    company: "UBC Uncrewed Aircraft Systems",
    role: "Software Developer",
    dates: "Sep 2021 - Present",
    location: "Vancouver, BC",
    logo: img("uas.jpg"),
    blurb: "Wrote the software that tells competition drones where to fly (and where not to).",
    skills: ["RESTful API", "Python", "Shapely", "React", "TypeScript"],
  },
];

export default experience;
