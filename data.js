// Unified Publications Data - Replace with your own publications
// Each publication can be a preprint or a conference/journal paper.
// Use isSelected: true to feature it on the homepage and CV.
/*
const publications = [
  {
    title: "Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement",
    authors: "<b>Your Name</b>, Co-Author One, Co-Author Two",
    venue: "ACL 2025",
    links: [
      { text: "Paper", url: "https://aclanthology.org/2025.acl-long.1354/" },
      { text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "The rapid advancement of large language models (LLMs) has significantly enhanced the capabilities of AI-driven agents across various tasks. However, existing agentic systems, whether based on fixed pipeline algorithms or pre-defined meta-learning frameworks, cannot search the whole agent design space due to the restriction of human-designed components, and thus might miss the globally optimal agent design. We introduce Gödel Agent, a self-evolving framework inspired by the Gödel machine, enabling agents to recursively improve themselves without relying on predefined routines or fixed optimization algorithms.",
    citation: `<pre><code>@inproceedings{yin-etal-2025-godel,
    title  = {G{\\"o}del Agent: A Self-Referential Agent Framework for Recursively Self-Improvement},
    author = {Your Name and Co-Author One and Co-Author Two},
    booktitle = {Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
    year   = {2025},
    url    = {https://aclanthology.org/2025.acl-long.1354/}
}</code></pre>`,
    isNew: true,
    isPreprint: false,
    isSelected: true
  }
];
*/
const publications = [

    // Under Review
  {
    title: "Active Control of Outgoing Noise through a Room Opening",
    authors: "<b>Jihea Lim</b>, Young-Sup Lee",
    venue: "Journal of Institute of Control, Robotics and Systems (Under Review)",
    links: [],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

      // Under Review
  {
    title: "Asynchronous Distributed Learning and Control Architecture for Real-Time Reinforcement Learning-Based Active Noise Control",
    authors: "<b>Jihea Lim</b>, Gwanggil Jeon",
    venue: "International Journal of Ad Hoc and Ubiquitous Computing (Under Review)",
    links: [],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },


  {
    title: "A Feasibility Study of Deep Reinforcement Learning for Current Ripple Reduction in a Motor Drive System of an Electric Vehicle",
    authors: "Jeongwoo Kim, <b>Jihea Lim</b>, Yohan Cho, Young-Sup Lee",
    venue: "Expert Systems (Under Review)",
    links: [],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },
  
  // 2025
  {
    title: "A Hybrid Active Noise Cancellation Algorithm for Suppressing Narrowband Noise with Rapidly Changing Frequencies",
    authors: "<b>Jihea Lim</b>, Young-Sup Lee",
    venue: "International Journal of Automotive Technology, 2025",
    // image: "figures/publications/logo.png",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s12239-025-00227-7" }
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2024
  {
    title: "Narrowband Active Noise Control with DDPG Based on Reinforcement Learning",
    authors: "Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee",
    venue: "International Journal of Automotive Technology, 2024",
    // image: "figures/publications/logo.png",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s12239-024-00102-x" }
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2023
  {
    title: "Deep learning-based impact locating using the power spectrum of an acceleration signal on a cantilever beam",
    authors: "Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee",
    venue: "Journal of Mechanical Science and Technology, 2023",
    // image: "figures/publications/logo.png",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s12206-023-0604-5" }
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2022
  {
    title: "A Feasibility Study of the Use of PZT Actuators for Active Control to Enrich Engine Sound",
    authors: "Young-Sup Lee, Seokhoon Ryu, <b>Jihea Lim</b>, Eunsuk Yoo",
    venue: "Applied Sciences, 2022",
    // image: "figures/publications/logo.png",
    links: [
      { text: "Paper", url: "https://doi.org/10.3390/app122312017" }
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2022
  {
    title: "Enhancing Engine Order Sound Using Additive Feedforward Control for a Secondary Path with Uncertainty at Higher Frequencies",
    authors: "Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee, Eunsuk Yoo, Chasub Lim",
    venue: "Applied Sciences, 2022",
    // image: "figures/publications/logo.png",
    links: [
      { text: "Paper", url: "https://doi.org/10.3390/app12094486" }
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2021
  {
    title: "A real-time high-speed autonomous driving based on a low-cost RTK-GPS",
    authors: "Seonghyeon Park, Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee",
    venue: "Journal of Real-Time Image Processing, 2021",
    // image: "figures/publications/logo.png",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s11554-021-01084-0" }
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  }

];

// Helper functions to filter publications
const getPreprints = () => publications.filter(pub => pub.isPreprint);
const getSelectedPreprints = () => publications.filter(pub => pub.isPreprint && pub.isSelected);
const getPublications = () => publications.filter(pub => !pub.isPreprint);
const getSelectedPublications = () => publications.filter(pub => !pub.isPreprint && pub.isSelected);
const getAllPublications = () => publications.filter(pub => !pub.isPreprint);

// Legacy variables for backward compatibility
const preprints = getSelectedPreprints();
const selectedPublications = getSelectedPublications();
const fullPublications = getAllPublications();

// Projects Data - Replace with your own projects


const projects = [
  {
    title: "Reinforcement Learning-Based Broadband Active Noise Control",
    description: "<b>Doctoral Dissertation Research</b> (Mar 2025 – Present)<br>Developing a TD3-based policy for broadband active noise control, focusing on real-time adaptation to secondary path variations.",
    badges: [],
    isSelected: true
  },
  {
    title: "Reinforcement Learning-Based Current Ripple Reduction in Electric Vehicles",
    description: "<b>Research Lead</b> · Industry Collaboration with Hyundai Motor Company (Mar 2024 – Aug 2026)<br>Further details are not publicly disclosed due to confidentiality restrictions.<br>Please contact me for additional information.",
    badges: [],
    isSelected: true
  },
  {
    title: "Reinforcement Learning-Based Narrowband Active Noise Control",
    description: "<b>Research Lead</b> · Academic Research (Feb 2024 – Mar 2025)<br>Developed a Deep Q-Network (DQN)-based control algorithm for narrowband active noise control.",
    badges: [],
    isSelected: true
  },
  {
    title: "Active Noise Masking for Electric Vehicles",
    description: "<b>Research Lead</b> · Industry Collaboration with Hyundai Motor Company (Feb 2023 – Aug 2026)<br>Further details are not publicly disclosed due to confidentiality restrictions.<br>Please contact me for additional information.",
    badges: [],
    isSelected: false
  },
  {
    title: "Active Noise Control for Electric Vehicles",
    description: "<b>Research Lead</b> · Industry Collaboration with Hyundai Motor Company (Feb 2024 – Feb 2025)<br>Further details are not publicly disclosed due to confidentiality restrictions.<br>Please contact me for additional information.",
    badges: [],
    isSelected: false
  },
  {
    title: "Reinforcement Learning-Based Leak Localization in Underground Water Pipelines",
    description: "<b>Research Lead</b> · Academic Research (Jan 2024 – May 2024)<br>Investigated the application of Deep Deterministic Policy Gradient (DDPG) to leak localization in underground water supply pipelines.",
    badges: [],
    isSelected: false
  },
  {
    title: "Active Control for Traction Motor Switching Noise Reduction",
    description: "<b>Research Lead</b> · Industry Collaboration with Hyundai Motor Company (Feb 2023 – Aug 2024)<br>Further details are not publicly disclosed due to confidentiality restrictions.<br>Please contact me for additional information.",
    badges: [],
    isSelected: false
  },
  {
    title: "Active Control of Self-Excited Judder in Clutch Transmissions",
    description: "<b>Research Assistant</b> · Industry Collaboration with Hyundai Motor Company (Sep 2019 – May 2022)<br>Further details are not publicly disclosed due to confidentiality restrictions.<br>Please contact me for additional information.",
    badges: [],
    isSelected: false
  },
  {
    title: "Active Sound Control for Electric Vehicle Traction Motors",
    description: "<b>Research Assistant</b> · Industry Collaboration with Hyundai Motor Company (Sep 2019 – May 2022)<br>Further details are not publicly disclosed due to confidentiality restrictions.<br>Please contact me for additional information.",
    badges: [],
    isSelected: false
  }
];

// Helper functions to filter projects
const getSelectedProjects = () => projects.filter(project => project.isSelected);
const getAllProjects = () => projects;

// Research Experience Data - Replace with your own experience
const researchExperience = [
  {
    period: "Month YYYY - Month YYYY",
    institution: "Your Institution Name",
    mentor: "Prof. Mentor Name",
    description: "Brief description of your research work and achievements."
  }
];

// Teaching Data - Replace with your own teaching experience
const teaching = [
  "Teaching Assistant, Institution, Course Name, Semester YYYY, with Prof. Name"
];

// Academic Services Data - Replace with your own services
const academicServices = [
  "Reviewer: Conference YYYY",
  "Volunteer: Conference YYYY"
];

// Talks Data - Replace with your own talks
const talks = [
  {
    title: "Your Talk Title",
    venue: "Venue Name",
    date: "Mon DD, YYYY",
    attachments: [
      { text: "Slides", url: "files/your-talk/slides.pdf" }
    ]
  }
];

// Honors Data - Replace with your own honors and awards
const honors = [
  "Your Award Name, Institution, Month YYYY"
];

// Conference Presentations
const presentations = [
  {
    title: "Active Noise Control Using Reinforcement Learning",
    authors: "Young-Sup Lee, <b>Jihea Lim</b>",
    venue: "2024 Fall Conference of the Acoustical Society of Korea",
    location: "Busan, South Korea",
    year: 2024
  },
  {
    title: "Leak Locating of Underground Water Supply Pipelines Using Reinforcement Learning - DDPG",
    authors: "Young-Sup Lee, <b>Jihea Lim</b>",
    venue: "20th World Conference on Non-Destructive Testing (WCNDT)",
    location: "Incheon, South Korea",
    year: 2024
  },
   {
    title: "A Hybrid Active Noise Cancellation Algorithm for Suppressing Narrowband Noise with Rapidly Changing Frequencies",
    authors: "<b>Jihea Lim</b>, Young-Sup Lee",
    venue: "2023 Fall Conference of the Korean Society for Noise and Vibration Engineering (KSNVE)",
    location: "Yeosu, South Korea",
    year: 2023
  },
  {
    title: "Active Road Noise Control Inside a Vehicle Cabin Using an Electronic Sound Generator Mounted on the Cowl Panel",
    authors: "Young-Sup Lee, <b>Jihea Lim</b>, Jeongwoo Kim",
    venue: "2023 Fall Conference of the Korean Society for Noise and Vibration Engineering (KSNVE)",
    location: "Yeosu, South Korea",
    year: 2023
  },
  {
    title: "Implementation of an Active Vibration Control System to Suppress the Transmitted Traction Motor Vibration for Reducing the Motor Whine Noise in an Electric Car Cabin",
    authors: "Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee, Myunggyu Kim",
    venue: "International Congress on Acoustics (ICA 2022)",
    location: "Gyeongju, South Korea",
    year: 2022
  },
  {
    title: "Active Control of Self-Excited Judder in a Dry Dual-Clutch Transmission",
    authors: "<b>Jihea Lim</b>, Seokhoon Ryu, Young-Sup Lee, Jangwon Lee, Chang Kook Chae",
    venue: "International Congress on Acoustics (ICA 2022)",
    location: "Gyeongju, South Korea",
    year: 2022
  }
];
