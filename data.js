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

  // 2025
  {
    title: "A Hybrid Active Noise Cancellation Algorithm for Suppressing Narrowband Noise with Rapidly Changing Frequencies",
    authors: "<b>Jihea Lim</b>, Young-Sup Lee",
    venue: "International Journal of Automotive Technology, 2025",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s12239-025-00227-7" }
    ],
    abstract: "",
    citation: ``,
    isNew: true,
    isPreprint: false,
    isSelected: true
  },

  // 2024
  {
    title: "Narrowband Active Noise Control with DDPG Based on Reinforcement Learning",
    authors: "Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee",
    venue: "International Journal of Automotive Technology, 2024",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s12239-024-00102-x" }
    ],
    abstract: "",
    citation: ``,
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2023
  {
    title: "Deep learning-based impact locating using the power spectrum of an acceleration signal on a cantilever beam",
    authors: "Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee",
    venue: "Journal of Mechanical Science and Technology, 2023",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s12206-023-0604-5" }
    ],
    abstract: "",
    citation: ``,
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2022
  {
    title: "A Feasibility Study of the Use of PZT Actuators for Active Control to Enrich Engine Sound",
    authors: "Young-Sup Lee, Seokhoon Ryu, <b>Jihea Lim</b>, Eunsuk Yoo",
    venue: "Applied Sciences, 2022",
    links: [
      { text: "Paper", url: "https://doi.org/10.3390/app122312017" }
    ],
    abstract: "",
    citation: ``,
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2022
  {
    title: "Enhancing Engine Order Sound Using Additive Feedforward Control for a Secondary Path with Uncertainty at Higher Frequencies",
    authors: "Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee, Eunsuk Yoo, Chasub Lim",
    venue: "Applied Sciences, 2022",
    links: [
      { text: "Paper", url: "https://doi.org/10.3390/app12094486" }
    ],
    abstract: "",
    citation: ``,
    isNew: false,
    isPreprint: false,
    isSelected: true
  },

  // 2021
  {
    title: "A real-time high-speed autonomous driving based on a low-cost RTK-GPS",
    authors: "Seonghyeon Park, Seokhoon Ryu, <b>Jihea Lim</b>, Young-Sup Lee",
    venue: "Journal of Real-Time Image Processing, 2021",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s11554-021-01084-0" }
    ],
    abstract: "",
    citation: ``,
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
    title: "Gödel Agent",
    description: "A self-referential agent framework for recursive self-improvement implemented with Monkey Patching. (<a href=\"https://github.com/Arvid-pku/Godel_Agent\" target=\"_blank\" rel=\"noopener\">Project Homepage</a>)",
    badges: [
      { url: "https://github.com/Arvid-pku/Godel_Agent/releases", img: "https://img.shields.io/badge/Version-1.0-blue" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/blob/main/LICENSE.md", img: "https://img.shields.io/badge/License-MIT-blue" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/stargazers", img: "https://img.shields.io/github/stars/Arvid-pku/Godel_Agent" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/network/members", img: "https://img.shields.io/github/forks/Arvid-pku/Godel_Agent" },
      { url: "https://arxiv.org/abs/2410.04444", img: "https://img.shields.io/badge/Doc-Paper-red" }
    ],
    isSelected: true,
    demoPath: "photos/project-demo/godel-agent.png"
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
