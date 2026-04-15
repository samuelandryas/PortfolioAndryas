export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href?: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  results: string[];
  images: string[];
  links: {
    label: string;
    href?: string;
  }[];
};

export type PortfolioEntry = {
  title: string;
  summary: string;
  images: string[];
  focus: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  location: string;
  degree: string;
  period: string;
  coursework: string[];
};

export type ResumeData = {
  summary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: string[];
  awards: string[];
  organizations: string[];
  resumePdfPath: string;
};

export const site = {
  name: "Samuel Andryasian",
  title: "Mechanical Engineering Portfolio",
  tagline: "A Mechanical Engineer Building Reliable Systems From CAD To Field Installations And Tests.",
  shortBio:
    "I design, integrate, and troubleshoot physical systems with a focus on documentation, measurement checks, and practical execution. My work spans vehicle packaging, sensor integration, bracket design, and structured technical summaries that help teams move from concept to installation with less friction.",
  location: "Pomona, California",
  availability: "Open to internships, research roles, and hands-on engineering opportunities.",
  heroPrimaryCta: {
    label: "View Projects",
    href: "/projects"
  },
  heroSecondaryCta: {
    label: "Open Resume",
    href: "/resume"
  }
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

export const stats: Stat[] = [
  { value: "2", label: "Vehicle builds supported from design through installation" },
  { value: "30%", label: "Reduction in rework from repeatable install and inspection steps" },
  { value: "3", label: "Design-validation test cycles completed on brake actuator integration" }
];

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:samuelandryas@gmail.com",
    value: "samuelandryas@gmail.com"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuelandryasian",
    value: "linkedin.com/in/samuelandryasian"
  }
];

export const projects: Project[] = [
  {
    slug: "vehicle-cg-and-sensor-layout",
    title: "Vehicle CG and Sensor Coordinate Layout",
    summary:
      "Created a center-of-gravity-referenced packaging layout to align sensors, cameras, and vehicle reference dimensions for repeatable integration.",
    problem:
      "Vehicle integration work needed a consistent spatial reference so cameras, LiDAR, GPS, and networking hardware could be mounted, measured, and documented without ambiguity.",
    solution:
      "Established vehicle reference dimensions, estimated center of gravity, and produced a dimensioned layout that defined x, y, and z sensor locations relative to that datum. The result gave the team a shared coordinate framework for packaging and system integration.",
    role:
      "Defined the reference strategy, measured the vehicle package, built the CG-referenced layout, and documented sensor mounting locations.",
    techStack: ["SolidWorks", "Technical Drawings", "Measurement Checks", "Mechanical Integration"],
    results: [
      "Standardized the location scheme for cameras, LiDAR, GPS, and networking hardware.",
      "Improved repeatability for mounting, inspection, and future system updates.",
      "Delivered a clear engineering artifact that supported cross-team installation work."
    ],
    images: ["Coordinate reference layout", "Sensor packaging callouts"],
    links: [{ label: "Discuss This Project" }]
  },
  {
    slug: "dual-camera-mount-design",
    title: "Dual Camera Mount Design and Integration",
    summary:
      "Designed and built a rigid dual-sensor mount that aligned a depth camera and thermal camera into one integrated assembly.",
    problem:
      "The sensing stack required two cameras to be packaged together with controlled spacing, cable routing, and enough rigidity to hold alignment under vibration and real vehicle conditions.",
    solution:
      "Designed an integrated bracket and mount system, defined sensor spacing, routed cabling through the assembly, and iterated the geometry to address fitment, clearance, and vibration resistance.",
    role:
      "Owned the mount concepting, mechanical design, integration details, and hardware iteration during fit-up.",
    techStack: ["SolidWorks", "Rapid Prototyping", "Fastener Selection", "Tolerance Checks"],
    results: [
      "Combined two sensors into a single aligned mechanical package.",
      "Improved installation readiness by resolving cable and clearance issues early.",
      "Produced a design that balanced stiffness, packaging, and serviceability."
    ],
    images: ["Dual sensor bracket concept", "Cable routing and clearance study"],
    links: [{ label: "Request Design Walkthrough" }]
  },
  {
    slug: "brake-actuator-connector",
    title: "Brake Actuator to Pedal Connector and Bracket Design",
    summary:
      "Designed and manufactured a connector and bracket system to integrate a brake actuator with the pedal assembly, then iterated through test cycles.",
    problem:
      "A reliable interface was needed between the brake actuator and pedal assembly that could withstand repeated testing while meeting functional packaging requirements.",
    solution:
      "Designed the connector and integration bracket, manufactured the parts, and validated the setup over three test cycles. Iterations were made as needed to improve performance and meet functional requirements.",
    role:
      "Led the design, manufacturing coordination, and test-driven refinement of the integration hardware.",
    techStack: ["Mount Design", "Manufacturing Processes", "Load Path Thinking", "Test Iteration"],
    results: [
      "Delivered a functioning actuator-to-pedal integration concept.",
      "Used three validation cycles to refine the design under test conditions.",
      "Translated system requirements into manufacturable hardware."
    ],
    images: ["Connector concept", "Bracket integration testing"],
    links: [{ label: "View Integration Summary" }]
  },
  {
    slug: "mounting-strategy-load-paths",
    title: "Mounting Strategy and Load Path Concepting",
    summary:
      "Defined mounting strategy, stroke travel requirements, and load paths, then turned them into multiple validated concepts for packaging and integration.",
    problem:
      "The team needed mounting concepts that respected system-level needs, stroke travel, packaging constraints, and structural load paths before committing to a single architecture.",
    solution:
      "Mapped system requirements into concept criteria, defined the relevant load paths and travel envelopes, and produced five validated mounting concepts suitable for packaging review and downstream integration work.",
    role:
      "Converted system-level requirements into design concepts and screened them against mechanical integration constraints.",
    techStack: ["Concept Development", "Mechanics of Materials", "Packaging Studies", "Design Processes"],
    results: [
      "Generated five validated concepts for team review.",
      "Clarified load paths and stroke travel expectations before detailed design.",
      "Reduced ambiguity in early mechanical architecture decisions."
    ],
    images: ["Concept set overview", "Load path and travel annotations"],
    links: [{ label: "Talk Through Concepts" }]
  }
];

export const resume: ResumeData = {
  summary:
    "Mechanical Engineering student with hands-on experience taking systems from design to installation and test, including documentation, measurement checks, and troubleshooting. Comfortable with field work, clear note taking, and structured technical summaries.",
  education: [
    {
      school: "California State Polytechnic University Pomona",
      location: "Pomona, CA",
      degree: "Bachelor of Science, Mechanical Engineering",
      period: "Expected May 2027",
      coursework: [
        "Vibrations",
        "Thermofluids",
        "Heat Transfer",
        "Fluid Mechanics",
        "Engineering Materials",
        "Synthesis of Engineering",
        "Mechanics of Materials",
        "Manufacturing Processes",
        "Design Processes"
      ]
    }
  ],
  experience: [
    {
      company: "Autonomous Systems Laboratory",
      role: "Research Assistant",
      period: "July 2024 - September 2025",
      bullets: [
        "Designed and integrated systems for vehicles, taking concepts from CAD to installation across two builds.",
        "Produced CAD assemblies and engineering drawings, improving fit and serviceability.",
        "Created repeatable installation and inspection steps, reducing rework time by 30%."
      ]
    },
    {
      company: "YMCA of Foothills",
      role: "Swim Instructor",
      period: "August 2022 - Present",
      bullets: [
        "Deliver structured instruction for 20 swimmers per week across six skill levels, emphasizing technique and water safety.",
        "Assess proficiency and update lessons, improving level advancement and checklist completion by 40%."
      ]
    }
  ],
  skills: [
    "SolidWorks",
    "Mastercam",
    "CNC Machining",
    "CAM Toolpath Programming",
    "Setup Planning",
    "Technical Drawings",
    "Rapid Prototyping",
    "Mount Design",
    "Fastener Selection",
    "Tolerance and Fit Checks",
    "Mechanical Integration",
    "Soldering"
  ],
  awards: [],
  organizations: [
    "2024 - 2025 Vice President of Autonomous Vehicle Laboratory at Cal Poly Pomona"
  ],
  resumePdfPath: "/resume.pdf"
};

export const featuredProjectSlugs = [
  "vehicle-cg-and-sensor-layout",
  "dual-camera-mount-design",
  "brake-actuator-connector"
];

export const featuredProjects = projects.filter((project) =>
  featuredProjectSlugs.includes(project.slug)
);

export const portfolioDeck = {
  title: "Project Portfolio Deck",
  href: "/portfolio/Portfolio.pptx"
};

export const portfolioEntries: PortfolioEntry[] = [
  {
    title: "3 Degree of Freedom Robotic Arm Chassis",
    summary:
      "Designed the chassis for a 3 degree of freedom robotic arm class project, focusing on structural layout, component integration, and manufacturability.",
    images: ["/portfolio/image1.png", "/portfolio/image2.png"],
    focus: ["Structural layout", "Component integration", "Manufacturability"]
  },
  {
    title: "Brake System Linear Actuator Mount",
    summary:
      "Designed a linear actuator mount for the braking system and revised the design to improve fit, support, and overall functionality.",
    images: ["/portfolio/image3.png", "/portfolio/image4.png", "/portfolio/image5.png"],
    focus: ["Fit and support", "Design revisions", "Functional integration"]
  },
  {
    title: "Speedometer and Touchscreen Bracket",
    summary:
      "Designed a custom mounting bracket to support the speedometer display and touchscreen with attention to fitment, stability, and clean system integration.",
    images: ["/portfolio/image6.jpeg", "/portfolio/image7.jpeg"],
    focus: ["Display packaging", "Stability", "Vehicle integration"]
  },
  {
    title: "Dual Camera Mount",
    summary:
      "Designed a compact mount for a dual camera system that integrates depth and infrared cameras while maintaining alignment and stiffness.",
    images: ["/portfolio/image8.png"],
    focus: ["Alignment", "Compact packaging", "Mount stiffness"]
  },
  {
    title: "Baja Vehicle Concept Layout",
    summary:
      "Created an initial Baja style vehicle concept that defined chassis layout, suspension positioning, and early packaging dimensions before detailed CAD work.",
    images: ["/portfolio/image9.png"],
    focus: ["Vehicle proportions", "Suspension layout", "Packaging study"]
  },
  {
    title: "Jetson Orin Custom Mounting Platform",
    summary:
      "Replaced the Jetson Orin base with a custom platform that added dedicated mounting points for improved integration and secure installation.",
    images: ["/portfolio/image10.JPG"],
    focus: ["Custom mounting points", "Secure installation", "Integration support"]
  },
  {
    title: "Haas CNC Experience",
    summary:
      "Built hands-on experience with Haas CNC lathes and mills while contributing to machining, part production, and manufacturing workflow support.",
    images: ["/portfolio/image11.png"],
    focus: ["Machining", "Part production", "Workflow support"]
  }
];
