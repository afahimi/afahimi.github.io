const img = (file) => `${process.env.PUBLIC_URL}/Images/ProjectImages/${file}`;

// Entries without `img` render a placeholder tile. `href` is optional; `fit: "contain"` keeps logos uncropped.
const projects = [
  {
    title: "Flow",
    context: "Microsoft Intern Hackathon 2025",
    description:
      "Flow is an AI meeting engagement assistant for Teams. A native Electron app monitors a Teams meeting and delivers AI-generated quizzes when users disengage, streaming transcripts through Azure Cognitive Services and GPT-4 for instant feedback and explanation. It won “Best AI for Workplace Productivity” at Microsoft’s 2025 intern hackathon, topping 200+ projects.",
    keywords: ["Electron", "TypeScript", "Azure Cognitive Services", "GPT-4"],
  },
  {
    title: "MyGamesList",
    context: "Video Game Tracking Platform",
    description:
      "A platform for 70,000+ games, enabling users to review, rate, and manage personal game collections. It pairs an interactive React.js frontend styled with Tailwind CSS with a secure Express.js and MySQL backend that uses JWT authentication for sessions and data.",
    keywords: ["React.js", "Tailwind CSS", "TypeScript", "Express.js", "MySQL"],
  },
  {
    title: "Autonomous Drone Mission System",
    context: "UBC Uncrewed Aircraft Systems",
    description:
      "A real-time Go flight controller for autonomous drones that streams telemetry and camera feeds via REST, paired with a low-latency Python UDP server that sustains sub-50 ms round-trip across autonomous flight. I led the 30-person software team, and the platform placed 2nd of 20 at the Canadian UAS nationals for mission accuracy.",
    keywords: ["Go", "Python", "UDP", "HTTP"],
  },
  {
    title: "MyGameManager",
    context: "Videogame Database Project",
    img: img("gamemanager.jpg"),
    date: "September 2023 - December 2023",
    location: "Vancouver, BC",
    description:
      "MyGameManager is a survival videogame database management tool. It features a React.js front-end for dynamic user interactions, a PHP backend with a RESTful API, and leverages an Oracle DB for structured storage of game data, including characters, quests, and inventories.",
    keywords: ["React.js", "TypeScript", "Oracle DB", "SQL", "PHP", "RESTful API"],
    href: "https://github.com/afahimi/MyGameManager",
  },
  {
    title: "IntelliFeeder",
    context: "Computer Engineering Design Project",
    img: img("IntelliFeeder.jpg"),
    date: "February 2023 - April 2023",
    location: "University of British Columbia",
    description:
      "IntelliFeeder is a smart pet feeder that allows pet owners to feed their pets remotely. It comes equipped with a dual-chassis design that enables the user to feed two pets of their choice. It comes with a full stack application with Vue that interfaces with the Raspberry Pi over an extensive back-end written in Python and Flask. Using an ML Model trained off the COCO dataset, the device is able to detect the presence of a pet and feed them accordingly.",
    keywords: ["Embedded Systems", "VueJs", "Machine Learning", "Flask"],
    href: "https://github.com/afahimi/IntelliFeeder",
  },
  {
    title: "Caption Concierge",
    context: "NW Hacks 2023",
    img: img("CaptionConcierge.jpg"),
    date: "January 2023",
    location: "University of British Columbia",
    description:
      "Caption Concierge is a web application that enables users to generate a detailed and accurate summary of any YouTube video by simply providing the URL. It uses the YouTube API to extract the video's captions and then uses a Natural Language Processing model to generate a summary of the video. The summary is then displayed to the user in a clean and easy to read format. Built for the NW Hacks 2023 Hackathon.",
    keywords: ["ReactJs", "OpenAI API", "YouTube API", "HTML/CSS"],
    href: "https://github.com/afahimi/CaptionConcierge-NWHacks2023",
  },
  {
    title: "Personal Website",
    context: "Personal Project",
    img: img("PersonalWebsite.jpg"),
    date: "April 2023 - Present",
    location: "Vancouver, BC",
    description:
      "This website serves as an outlet for me to showcase my projects and skills. It is built using React and is hosted on Github Pages. It is a work in progress and I am constantly adding new features to it.",
    keywords: ["ReactJs", "Tailwind CSS", "Framer Motion"],
    href: "https://github.com/afahimi/updated-site",
  },
  {
    title: "B-ing Chillioo - A Picnic Social Slack Bot",
    context: "Personal Project",
    img: img("bingchillioo.jpg"),
    date: "July 2023 - Present",
    location: "Vancouver, BC",
    description:
      "B-ing Chillioo is a Slack Bot designed to streamline the planning of picnics and outdoor events. Developed using Python and Flask, the bot seamlessly integrates into Slack channels to manage event queues and handle RSVPs. It features a concurrent queue data structure to efficiently manage multiple events and prevent scheduling conflicts, offering an intuitive UI for user interaction within Slack.",
    keywords: ["Python", "Flask", "Slack API", "Concurrent Programming"],
    href: "https://github.com/afahimi/B-ing-Chilioo",
  },
  {
    title: "Yokai Compendium",
    context: "Personal Project",
    img: img("yokai.jpg"),
    date: "May 2023 - Present",
    location: "Vancouver, BC",
    description:
      "Yokai Compendium is a mobile app designed to be your ultimate guide to the world of Yokai—spirits, demons, and creatures from Japanese folklore. Developed using Flutter for the front-end and Firestore for the back-end, the app offers a comprehensive, up-to-date overview of Yokai profiles. It features dynamic sorting options to enhance user navigation and utilizes Selenium and Python for accurate data collection.",
    keywords: ["Flutter", "Firestore", "Selenium", "Python"],
    href: "https://github.com/afahimi/yokai-compendium/",
  },
  {
    title: "Mission Planner Scripts",
    context: "UBC Uncrewed Aircraft Systems",
    img: img("MissionPlannerScripts.jpg"),
    date: "September 2022 - April 2023",
    location: "University of British Columbia",
    description:
      "This project was completed as a part of the UBC Uncrewed Aircraft Systems Design-Team. It is a REST API written in Python that interfaces with the Mission Planner software to automate the process of creating flight plans for the team's drone. It provides a list of endpoints that enables the user to create, edit and delete flight plans on Mission Planner for an automated drone. It also includes additional functionality such as exclusion zones around any polygonal area.",
    keywords: ["Python", "Flask", "REST API", "Mission Planner"],
    href: "https://github.com/ubcuas/MissionPlanner-Scripts",
  },
  {
    title: "Dancing Robot",
    context: "Computer Engineering Design Project",
    img: img("DancingRobot.jpg"),
    date: "February 2023 - April 2023",
    location: "University of British Columbia",
    description:
      "This is a 3D printed robot that is able to dance to music. It uses a Raspberry Pi Pico-H to interface with a servo motor, speaker and numpad to allow the user to toggle different dance modes. As the robot dances, it plays music through the speaker and displays the current dance mode on a built-in LED.",
    keywords: ["Embedded Systems", "Circuit-Python", "Serial Communication"],
    href: "https://github.com/afahimi/Dancing-Robot",
  },
  {
    title: "SSC Tools",
    context: "Personal Project",
    img: img("SSCTools.jpg"),
    date: "April 2023",
    location: "Vancouver, BC",
    description:
      "SSC Tools is a set of scripts written in Selenium that automates the process of checking course grades on UBC's Student Service Centre. The project makes use of Selenium's WebDriver to automate the process of logging in and navigating to the grades page. It also uses the SMTP protocol to send an email to the user with their grades.",
    keywords: ["Python", "Selenium", "Automation", "SMTP Protocol"],
    href: "https://github.com/afahimi/SSC-Tools",
  },
  {
    title: "Data Analysis Project",
    context: "STEM Fellowship Big Data Challenge",
    img: img("BigData.jpg"),
    date: "Summer 2021",
    location: "Vancouver, BC",
    description:
      "This project was completed as part of the STEM Fellowship Big Data Challenge. The goal of the project was to analyze a dataset of our choice and write a research paper on our findings. My team and I chose to analyze the relationship between standardized test scores and the socioeconomic status of students across the world. We used Python tools such as Pandas, Matplotlib, and Seaborn to analyze the data and write our paper.",
    keywords: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    href: "https://github.com/afahimi/Big-Data-Challenge-2021",
  },
  {
    title: "CRASH Unix Terminal",
    context: "UBC CPEN 212 - Computing Systems II",
    img: img("linux.png"),
    fit: "contain",
    date: "February 2023 - April 2023",
    location: "University of British Columbia",
    description:
      "This project is a Unix terminal that is built from scratch using C. It is able to execute commands such as ls, cd, cat, grep, and more. It makes use of the process abstraction typically found in an OS kernel to execute commands. It also uses the fork() and exec() system calls to enable the execution of multiple commands in parallel.",
    keywords: ["C", "Unix", "Operating Systems", "Process Abstraction"],
  },
  {
    title: "RISC Machine CPU",
    context: "UBC CPEN 211 - Digital Systems Design",
    img: img("modelsim.png"),
    fit: "contain",
    date: "November 2022 - December 2022",
    location: "University of British Columbia",
    description:
      "This project is a 32-bit RISC machine CPU that is built from scratch using SystemVerilog. It is able to execute instructions from the Arm Assembly Instruction Set such as add, sub, and, or, and more. It makes use of a 5-stage pipeline to execute instructions in parallel. It was developed to work with the De1-SoC FPGA board.",
    keywords: ["SystemVerilog", "Digital Design", "Arm Assembly"],
  },
];

export default projects;
