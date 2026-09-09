export const portfolioData = {
  personal: {
    name: "Harini V",
    shortName: "Harini",
    brand: "HV.",
    title: "AI & ML Student | Full-Stack Developer",
    role: "Aspiring AIML & FullStack Professional",
    objective:
      "A passionate AIML enthusiast seeking an opportunity to apply technical skills, contribute innovative solutions, and grow with the organization. Dedicated to developing impactful projects using modern technologies while delivering clean, responsive, and efficient designs that enhance user experience.",
    email: "harinivadivel492@gmail.com",
    phone: "+91 82486 93446",
    location: "Trichy, Tamil Nadu, India",
    college: "K.Ramakrishnan College of Engineering",
    degree: "B.Tech, Artificial Intelligence and Machine Learning",
    cgpa: "9.09 / 10",
    avatar: "/Profile.png",
    logo: "/logo.jpg",
    hireMeIcon: "/hireme.png",
    resumeImage: "/resume.jpg",
    resumePdf: "/Harini Vadivel 2026.pdf",
    links: {
      linkedin: "https://www.linkedin.com/in/harini-vadivel-3581142a4/",
      github: "https://github.com/harinivadivel",
      portfolio: "https://portfolio1-zeta-gray.vercel.app/",
      facebook: "https://www.facebook.com/profile.php?id=100094474587066",
      instagram: "https://www.instagram.com/harinivadivel1492/"
    }
  },

  stats: [
    { label: "CGPA (upto 8 SEM)", value: "9.09" },
    { label: "Internships Completed", value: "3" },
    { label: "Featured Projects", value: "3+" },
    { label: "Certifications", value: "9" }
  ],

  whatIDo: [
    {
      title: "AI & ML Solutions",
      icon: "/ai-ml.png",
      description:
        "Developing intelligent machine learning systems, spiking neural networks, anomaly detection, and LLM-powered summarization workflows for real-world applications."
    },
    {
      title: "Web & Full-Stack Development",
      icon: "/web-design.png",
      description:
        "Building responsive, high-performance web applications using React.js, FastAPI, Node.js, Bootstrap, and modern RESTful APIs with sleek glassmorphism designs."
    },
    {
      title: "Smart Systems & IoT Design",
      icon: "/app-design.png",
      description:
        "Engineering end-to-end intelligent IoT prototypes with sensors (BD + temperature), touchscreen interfaces, automated SMS alerts, and Dockerized microservices."
    }
  ],

  skills: {
    programming: [
      { name: "Python", level: 92 },
      { name: "Java", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 }
    ],
    webTechnologies: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 82 },
      { name: "FastAPI", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Bootstrap 5", level: 92 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 }
    ],
    aiAndTools: [
      { name: "Generative AI & LLMs", level: 88 },
      { name: "Machine Learning (Supervised/Unsupervised)", level: 86 },
      { name: "Spiking Neural Networks", level: 80 },
      { name: "Docker & Containerization", level: 80 },
      { name: "Nginx & Deployment", level: 75 },
      { name: "Git & GitHub", level: 88 }
    ],
    softSkills: [
      "Team Work",
      "Adaptability",
      "Flexibility",
      "Problem Solving",
      "Analytical Thinking",
      "Fast Learner"
    ]
  },

  internships: [
    {
      role: "Artificial Intelligence Intern",
      company: "Infosys Springboard (Virtual Internship 7.0)",
      mode: "Virtual",
      period: "Jun 2026 - Aug 2026",
      description:
        "Designed and developed an AI-powered platform using React.js, FastAPI, PostgreSQL, and Python to automatically generate video transcripts, summaries, keywords, and key moments from uploaded videos.",
      techStack: ["React.js", "FastAPI", "PostgreSQL", "Python", "AI Video Processing", "Docker"]
    },
    {
      role: "Frontend Development Intern",
      company: "Cognifyz Technologies",
      mode: "Virtual",
      period: "Apr 2025 - May 2025",
      description:
        "Designed and developed responsive, visually appealing user interfaces using HTML, CSS, JavaScript, and React.js with seamless cross-device compatibility.",
      techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive UI"]
    },
    {
      role: "Robotics Intern",
      company: "Kodacy",
      mode: "Virtual",
      period: "Oct 2024 - Nov 2024",
      description:
        "Gained practical exposure to robotics fundamentals, including sensor data acquisition, actuators, electronic control systems, and automated testing.",
      techStack: ["Sensors", "Actuators", "Control Systems", "Embedded Logic"]
    }
  ],

  projects: [
    {
      title: "ClipMind AI",
      subtitle: "AI-Powered Video Summarization & Key Moments Detection",
      badge: "AI & Full-Stack",
      description:
        "Developed an AI-powered platform using React.js, FastAPI, PostgreSQL, and Python to automatically generate video transcripts, summaries, keywords, and key moments from uploaded videos. Built responsive dashboards for transcripts, summaries, analytics, bookmarks, and video management, and containerized the full application using Docker, Docker Compose, and Nginx.",
      highlights: [
        "Automated transcript & key moment extraction",
        "Interactive dashboard for analytics and video bookmarks",
        "Production-ready containerization using Docker & Nginx"
      ],
      techStack: ["React.js", "FastAPI", "PostgreSQL", "Python", "Docker", "Docker Compose", "Nginx"],
      github: "https://github.com/harinivadivel/ClipMind"
    },
    {
      title: "Smart Grocery App",
      subtitle: "Expiry Notification & Waste Reduction System",
      badge: "Web & IoT Alert",
      description:
        "Developed a smart grocery management application with a feature to notify users via SMS alerts one week before product expiry, enhancing food safety and reducing waste. Built a React.js frontend for smooth user interaction and integrated automated notifications using APIs.",
      highlights: [
        "Automated SMS alerts 7 days prior to item expiration",
        "Smooth React.js interface for pantry & expiry tracking",
        "API integrations for automated messaging workflows"
      ],
      techStack: ["React.js", "REST APIs", "SMS Notification APIs", "JavaScript", "Bootstrap"],
      github: "https://github.com/dhanushi-28/smart_grocery_client"
    },
    {
      title: "AI Sewing Machine",
      subtitle: "Automated Smart Stitching System with Spiking Neural Networks",
      badge: "AI Hardware & Sensor System",
      description:
        "Developed an intelligent sewing machine integrated with AI-driven fabric detection, automated threading, and anomaly detection to enhance precision and reduce manual effort. Implemented BD + Temperature sensors with spiking neural networks for real-time monitoring and AI-based suggestions via a touchscreen interface.",
      highlights: [
        "AI-driven fabric detection & automated threading mechanism",
        "BD + Temperature sensor telemetry with spiking neural networks",
        "Touchscreen interface delivering real-time anomaly alerts"
      ],
      techStack: ["Spiking Neural Networks", "Fabric Detection", "BD + Temp Sensors", "IoT", "Touchscreen UI"],
      github: "https://github.com/harinivadivel/AI-Sewing-Machine"
    }
  ],

  education: [
    {
      institution: "K.Ramakrishnan College of Engineering",
      degree: "B.Tech, Artificial Intelligence and Machine Learning",
      period: "Nov 2022 - April 2026",
      grade: "CGPA: 9.09 / 10 (upto 8 SEM)",
      badge: "Undergraduate",
      details: "Comprehensive study in AI, Deep Learning, Machine Learning, Data Structures, Software Engineering, and Cloud Technologies."
    },
    {
      institution: "St. James Matriculation Higher Secondary School, Trichy",
      degree: "Higher Secondary Certification (HSC)",
      period: "Passed May 2022",
      grade: "Percentage: 81.20%",
      badge: "High School (12th)",
      details: "Focus on Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      institution: "St. James Matriculation Higher Secondary School, Trichy",
      degree: "Secondary School Leaving Certification (SSLC)",
      period: "Passed May 2020",
      grade: "Percentage: 76.80%",
      badge: "Secondary (10th)",
      details: "Strong foundational curriculum with high academic performance."
    }
  ],

  certifications: [
    {
      title: "Generative AI",
      issuer: "Coursera",
      date: "Nov 2025 – Dec 2025",
      category: "AI & LLM"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date: "Oct 2025 – Nov 2025",
      category: "AI & ML"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Isysway Technologies",
      date: "Jan 2025 - Feb 2025",
      category: "Cloud"
    },
    {
      title: "Python: Zero to Hero",
      issuer: "GUVI",
      date: "Dec 2024 - Jan 2025",
      category: "Programming"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Jun 2024 - Nov 2024",
      category: "Cloud"
    },
    {
      title: "Gen AI",
      issuer: "LinkedIn Learning",
      date: "Aug 2024 - Sep 2024",
      category: "AI & LLM"
    },
    {
      title: "Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "Jun 2024 - Jul 2024",
      category: "AI & ML"
    },
    {
      title: "Introduction to MongoDB for Students",
      issuer: "MongoDB",
      date: "May 2024 - Jun 2024",
      category: "Database"
    },
    {
      title: "AR & VR Technology",
      issuer: "FUTURESKILL",
      date: "Apr 2024 - May 2024",
      category: "Emerging Tech"
    }
  ],

  activities: [
    {
      type: "Symposium",
      title: "CARE TECH FEST (Care College of Engineering)",
      details: "Participated in Debugging competition and delivered a Paper Presentation about 6G Technologies."
    },
    {
      type: "Workshop",
      title: "ChatGPT Strategies - RoadMap (NPTEL)",
      details: "Acquired knowledge on large language models (LLMs), prompt engineering, and conversational AI workflows. Explored effective strategies for using ChatGPT in content creation, coding assistance, and research support."
    },
    {
      type: "Workshop",
      title: "Artificial Intelligence and Machine Learning (KRCE)",
      details: "Gained hands-on exposure to fundamentals of AI and ML, including supervised and unsupervised learning techniques. Enhanced problem-solving, analytical thinking, and teamwork through collaborative exercises."
    }
  ]
};
