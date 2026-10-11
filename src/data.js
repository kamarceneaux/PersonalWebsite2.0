// All site content lives here so it's easy to keep up to date.

export const links = {
  email: "kameronarceneaux05@gmail.com",
  linkedin: "https://www.linkedin.com/in/kameron-arceneaux",
  github: "https://github.com/kamarceneaux",
  resume: "/KameronArceneaux_Resume.pdf",
};

export const education = {
  school: "Louisiana State University",
  location: "Baton Rouge, LA",
  degree: "B.S. Computer Science",
  concentration: "Data Science & Analytics",
  minor: "Robotics Engineering",
  grad: "Spring 2027",
  gpa: "4.056",
  coursework: [
    "Intro to Robotics",
    "Intro to Data Science & Analytics",
    "AI & LLM Development for Business",
    "Computer Networks",
    "Comprehensive Electrical Engineering",
  ],
  orgs: ["NSBE", "Society of Peer Mentors", "ColorStack", "Tau Beta Pi", "BDPA"],
};

export const experiences = [
  {
    company: "Chevron",
    role: "Software Engineering Intern",
    tag: "Return intern",
    period: "May – Aug 2026",
    location: "Houston, TX",
    stat: { value: "82%", label: "faster datasheet retrieval" },
    description: [
      "Built a full-stack web app with .NET (C#) and Angular/TypeScript, with deployment through Azure Pipelines and Ansible, to power API-driven data retrieval and improve document delivery.",
      "Cut datasheet retrieval time by 82% (40s → 7s) through workflow automation, a streamlined UI, and backend integrations like caching.",
      "Delivered a solution estimated at $225K in annual value per manufacturing facility by reducing manual effort and speeding up engineering workflows.",
      "Engineered an AI agent with Azure AI Foundry and Azure Document Intelligence: a custom extraction tool that fully automates document revision workflows.",
    ],
    skills: [".NET / C#", "Angular", "TypeScript", "Azure Pipelines", "Ansible", "Azure AI Foundry", "Document Intelligence"],
  },
  {
    company: "Chevron",
    role: "Software Engineering Intern",
    period: "May – Aug 2025",
    location: "Houston, TX",
    stat: { value: "8,000", label: "labor hours saved / yr" },
    description: [
      "Saved 8,000 hours of labor annually by building and deploying a rule-based model that automates sorting and relevancy-ranking of P&IDs.",
      "Developed a scalable ETL pipeline with Databricks and PySpark to consolidate diverse data sources and securely deliver payloads to a third-party partner's Digital Twin.",
      "Optimized a critical data pipeline for a 90% improvement in processing speed, significantly lowering cloud compute usage (tested on Azure Data Factory).",
    ],
    skills: ["Databricks", "PySpark", "Python", "ETL", "Azure Data Factory"],
  },
  {
    company: "Shell",
    role: "Data Engineering Intern",
    period: "Jan – May 2025",
    location: "Remote",
    stat: { value: "25%", label: "cloud compute cost cut" },
    description: [
      "Designed and implemented a database to manage structured and unstructured data for an end-to-end image processing pipeline behind a vision model that detects faulty railcar seals.",
      "Integrated the production computer vision model into a Dockerized Flask app so users could easily interact with it.",
      "Applied image compression techniques to save memory and cut ~25% of cloud compute costs across Azure SQL Database and Blob Storage.",
    ],
    skills: ["Python", "Flask", "Docker", "Computer Vision", "Azure SQL", "Blob Storage"],
  },
  {
    company: "LSU ITS",
    role: "Student Software Engineer",
    period: "Jan 2024 – Present",
    location: "Baton Rouge, LA",
    stat: { value: "15+", label: "manual hours automated" },
    description: [
      "Improved the user interfaces of several LSU web applications for a better, more accessible experience.",
      "Built a scalable feature that automates legacy ID conversion for a large dataset, saving 15+ hours of manual work and smoothing the migration from mainframe to Workday.",
    ],
    skills: ["Spring Boot", "ASP.NET Core", "jQuery", "GitLab", "SQL Server"],
  },
];

export const leadership = {
  org: "NSBE",
  orgFull: "National Society of Black Engineers",
  chapter: "LSU Chapter",
  current: "Secretary",
  roles: [
    {
      title: "Secretary",
      period: "2026 – 2027",
      current: true,
      description: [],
    },
    {
      title: "Telecommunications Chair",
      period: "2025 – 2026",
      firsts: ["1st chapter website", "1st data report"],
      description: [
        "Launched the first website in our chapter's history, and kept it maintained and up to date.",
        "Made sure our brand showed up accurately everywhere else, keeping links and info correct across Moodle, Linktree, and TigerLink.",
        "Helped with content creation whenever the chapter needed it.",
        "Created the chapter's first data analysis project: a report combining results from a member feedback survey I led with insights like our brand presence. I shared it with the executive board and featured it on our website for potential partners.",
      ],
      skills: ["Web Development", "Data Analysis", "Surveys", "Branding", "Content Creation"],
    },
  ],
};

export const projects = [
  {
    id: "robot",
    title: "Multisensor Autonomous Robot",
    year: "2026",
    icon: "bot",
    shortDesc: "An Arduino robot that fuses ultrasonic + IR sensors to dodge obstacles on its own.",
    fullDesc:
      "An autonomous robot driven by a priority-based multi-sensor fusion algorithm written in C/C++. It blends ultrasonic time-of-flight readings with infrared photoelectric reflection data to make navigation decisions in real time.",
    highlights: [
      "Fused ultrasonic and IR data to eliminate false-positive obstacle detections and minimize collisions.",
      "Programmed dynamic obstacle avoidance that continuously adjusts continuous-rotation servos for precise navigation.",
      "Analyzed sensor failure modes across lighting, shadows, and surface textures, then tuned a hybrid state machine to fix side-wall overcorrections and peripheral blind spots.",
    ],
    skills: ["Arduino", "C/C++", "Sensor Fusion", "State Machines", "Servos"],
    links: [{ name: "GitHub", url: "https://github.com/kamarceneaux/Multisensor-Autonomous-Robot" }],
  },
  {
    id: "nba",
    title: "NBA Salary vs. Performance",
    year: "2026",
    icon: "chart",
    shortDesc: "A distributed data pipeline asking which NBA players are worth the bag.",
    fullDesc:
      "A distributed data pipeline and analytics project that compares NBA player salaries against on-court performance efficiency, running on a cluster I set up myself in Azure.",
    highlights: [
      "Used PySpark to cleanse, normalize, and transform raw scraped basketball data into Parquet files optimized for distributed analytics.",
      "Deployed and managed a two-node cluster on Microsoft Azure, configuring HDFS and Apache Spark for reliable, cost-effective processing.",
      "Built an interactive Streamlit dashboard that queries cached HDFS data and turns the models into visual insights.",
    ],
    skills: ["PySpark", "Hadoop / HDFS", "Apache Spark", "Microsoft Azure", "Streamlit", "Parquet"],
    links: [{ name: "GitHub", url: "https://github.com/kamarceneaux/NBA-Performance-Analysis" }],
  },
  {
    id: "bakyumu",
    title: "Bakyumu",
    year: "2025",
    icon: "bot",
    shortDesc: "A remote-controlled vacuum + disinfectant-spraying robot built on a $100 budget.",
    fullDesc:
      "Bakyumu is a multi-functional cleaning robot: a mechanical chassis with a suction unit for small debris and a pump that sprays disinfectant. A Wi-Fi-enabled microcontroller runs the show, and a browser-based web app lets users toggle cleaning modes and drive the robot in real time.",
    story:
      "Built for my Intro to Robotics class at LSU to help people with limited mobility who find it painful to scrub floors. Robot vacuums like Roombas can run $300–$600, so we set out to build something more accessible. We had four weeks, a $100 budget, and a dream. Along the way we used lab-provided parts like VEX motors and fans, fried a microprocessor, and wrestled with motor calibration.",
    skills: ["Raspberry Pi Pico 2W", "Python", "Fusion 360", "Cirkit Designer", "Electrical Analysis", "Wi-Fi"],
    video: "aGsKar0hvW8",
    links: [
      { name: "GitHub", url: "https://github.com/kamarceneaux/Bakyumu" },
      { name: "Slide Deck", url: "https://kameronpublicwebsite.blob.core.windows.net/public/ENGR3100_FinalProject.pdf" },
    ],
  },
  {
    id: "susiki",
    title: "Susiki",
    year: "2024",
    icon: "calendar",
    shortDesc: "An academic assistant and planner for students juggling way too many apps.",
    fullDesc:
      "Susiki is an academic assistant and planning app with task and exam management that organizes events around your enrolled classes, built to give students one cohesive planning tool.",
    story:
      "After my first year of college I kept bouncing between apps to manage my workload, so I built the one I actually wanted to use. It took months of planning and work: React (TypeScript) on the front end, Spring Boot (Java) on the back end, and a MySQL database. I deployed it all on AWS, handling the frontend, backend, certificates, and domain management. The domain was retired in September 2025.",
    skills: ["React", "TypeScript", "Spring Boot", "Java", "MySQL", "AWS", "Figma"],
    video: "wi1DtOC0xzs",
    links: [],
  },
  {
    id: "inpocket",
    title: "InPocket",
    year: "2021",
    icon: "wallet",
    award: "Congressional App Challenge winner",
    shortDesc: "A personal finance tracker that won the Congressional App Challenge (LA-06).",
    fullDesc:
      "A desktop app for managing your finances with a digital money log, featuring transaction logging, graphs, and statistics.",
    story:
      "InPocket won best app in the 2021 Congressional App Challenge for Louisiana's 6th district.",
    skills: ["Python", "SQLite", "Tkinter"],
    video: "zKJH-ljp5fQ",
    links: [
      { name: "GitHub", url: "https://github.com/kamarceneaux/InPocket" },
      {
        name: "In the News",
        url: "https://www.brproud.com/news/local-news/denham-springs-high-school-student-wins-2021-congressional-app-challenge/",
      },
    ],
  },
];

export const skills = {
  Languages: ["Python", "Java", "C#", "C++", "JavaScript", "TypeScript", "SQL", "R", "MATLAB"],
  Frameworks: ["React", "Angular", "ASP.NET Core", "Spring Boot", "Pandas", "NumPy", "Databricks", "Tkinter", "Webpack", "LaTeX", "OpenAI"],
  Tools: ["Git", "Docker", "Azure", "AWS", "Postman", "Figma", "Simulink"],
};
