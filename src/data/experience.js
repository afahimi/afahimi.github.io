const img = (file) => `${process.env.PUBLIC_URL}/Images/ProjectImages/${file}`;

// `upcoming` renders the dashed "next up" node. `logo` falls back to a monogram tile.
const experience = [
  {
    upcoming: true,
    company: "Next up",
    role: "To be announced",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    dates: "May 2025 - Aug 2025",
    location: "Redmond, WA",
    bullets: [
      "Built and embedded a full-stack AI agent dashboard into Microsoft’s HR data platform, enabling 230,000+ employees to use natural-language commands for provisioning HR data resources more securely and efficiently.",
      "Developed a React.js frontend for the agent dashboard and integrated 12+ backend services via C#/.NET REST APIs, orchestrating access with Azure AD and Copilot workflows to streamline diagnostics.",
      "Dockerized and deployed an ASP.NET Core API to Azure Kubernetes Service with CI/CD pipelines, reducing average user task time by 35% and ensuring full observability.",
    ],
    skills: ["React.js", "C#/.NET", "ASP.NET Core", "Azure", "Kubernetes", "Docker"],
  },
  {
    company: "Boeing",
    role: "Software Engineer Intern",
    dates: "Jan 2024 - Aug 2024",
    location: "Vancouver, BC",
    logo: img("boeing.jpg"),
    bullets: [
      "Enabled real-time maintenance insights for 80+ global airlines by building a fleet-analytics portal on Google Cloud with React.js, TypeScript, and Django REST.",
      "Cut API traffic by 70% and trimmed chart render time by 40% with a React/Redux client-side caching layer, delivering 15+ new portal features.",
      "Reduced query latency by 60% and saved 25% storage by orchestrating PySpark ETL pipelines on Databricks into Delta Lake.",
    ],
    skills: ["React.js", "TypeScript", "Django REST", "GCP", "PySpark", "Databricks"],
  },
  {
    company: "Trulioo",
    role: "Software Engineer Intern",
    dates: "May 2023 - Dec 2023",
    location: "Vancouver, BC",
    logo: img("trulioo.png"),
    bullets: [
      "Tripled UI test coverage by creating test-ready Java/Selenium SDKs for two new product lines.",
      "Halved regression time with 75% end-to-end coverage through parallelized GitLab CI/CD test runs.",
      "Cut release-blocking UI bugs by 50% and accelerated deployments with a Docker Compose and Selenium Grid automation harness for 30+ localizations.",
    ],
    skills: ["Java", "Selenium", "GitLab CI/CD", "Docker", "PyTest", "TensorFlow"],
  },
  {
    company: "UBC Uncrewed Aircraft Systems",
    role: "Software Developer",
    dates: "Sep 2021 - Present",
    location: "Vancouver, BC",
    logo: img("uas.jpg"),
    bullets: [
      "Developed a RESTful API for dynamic flight mission management, enabling real-time drone coordination.",
      "Used Python and Shapely for autonomous flight path calculation that avoids exclusion zones.",
      "Built a React-based web application integrating live streaming with real-time control for use in competitions.",
    ],
    skills: ["RESTful API", "Python", "Shapely", "React", "TypeScript"],
  },
];

export default experience;
