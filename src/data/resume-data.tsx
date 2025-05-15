import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dan Novac",
  initials: "DN",
  location: `Brasov, Romania, EET`,
  locationLink: "https://www.google.com/maps/place/Brasov",
  about:
    "Technical Lead | Senior Backend Engineer ",
  summary:
    "As a Technical Team Lead and Senior Backend Engineer, I bring over 10+ years of backend development experience, primarily in Node.js, TypeScript, Java and AWS Cloud Services. In the past year, I have stepped into a Team Lead role, where I’ve led a team of engineers through the successful delivery of new features and improvements. My approach balances technical excellence with strong communication and team collaboration, ensuring alignment between engineering efforts and product goals. I’m passionate about system architecture, performance, and cloud-native development, and I believe the best results come when the entire team understands the product context and underlying technical decisions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8904832?v=4",
  personalWebsiteUrl: "https://www.dan-novac.com",
  contact: {
    email: "danynovac@gmail.com",
    // tel: "+0729530202 - not me, don't callme",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dnovac",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dan-novac-40062974/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Transilvania University Brasov: Computer Science & Mathematics",
      degree: "Bachelor's Degree in Computer Science",
      start: "2012",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Ateliere",
      link: "https://www.ateliere.com/",
      badges: ["Remote"],
      title: "Technical Team Lead",
      start: "2024",
      end: "present",
      description: "As a Technical Team Lead and Senior Backend Engineer, I bring over 10 years of backend development experience, primarily in Node.js, TypeScript, and AWS cloud services. In the past year, I have stepped into a Team Lead role, where I’ve led a team of engineers through the successful delivery of new features and improvements. My approach balances technical excellence with strong communication and team collaboration, ensuring alignment between engineering efforts and product goals. As a leader, I’ve been responsible for: task breakdown, technical analysis, effort estimation, and Jira task creation; code reviews and mentorship; organizing and leading technical syncs, team planning meetings, and product alignment discussions; prioritization of work and removing blockers to keep development smooth and focused.",
    },
    {
      company: "Ateliere",
      link: "https://www.ateliere.com/",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      start: "2021",
      end: "2024",
      description:
        "Migrated services to Serverless infrastructure. Developed quality and performant solutions using AWS Cloud infrastructure and services, such as: Lambda, DynamoDB, CloudFormation, Step Functions, SQS, SNS, Cloudwatch. Implemented new features using Typescript, Node.js, GraphQL, Terraform, Bash scripts. Worked with media industry tools such as ffmpeg, dolby. Developed infra orchestrating solutions using Kubernetes, Docker and Keda.",
    },
    {
      company: "Pentalog",
      link: "https://www.pentalog.com/",
      badges: ["On-site", "Remote"],
      title: "FullStack Software Developer, Senior Software Engineer",
      start: "2014",
      end: "2021",
      description:
        "Implemented new features. Developed high-quality software solutions using Java, Kotlin, Spring, Docker, Node.js, Kubernetes, Javascript. Created from scratch new microservices and infrastructure. Enhanced performance for big data on different projects and databases. Developed end-to-end API. Developed & Orchestrated solutions in order to accommodate data from third parties services. Enhanced and migrated databases from SQL to NoSQL. Digitalized factories using data from PLCs.",
    },
  ],
  skills: [
    "TypeScript",
    "Node.js",
    "Serverless",
    "AWS Cloud Services",
    "Java",
    "Kubernetes",
    "Docker",
    "Terraform",
    "SQS",
    "SNS",
    "DynamoDB",
    "Cloudwatch",
    "System Parameter Store",
    "Step Functions",
    "Javascript",
    "Postgres",
    "MongoDB",
    "SQL",
    "CSS",
    "Spring Framework",
    "Webpack",
    "Next.js",
    "Autonomy",
    "Clean Code",
    "Cost reduction",
    "Analytical thinking",
    "Mentoring & Coaching",
    "Motivator",
    "Consistency"
  ],
  projects: [
    {
      title: "Simple Tasks",
      techStack: ["Side Project", "Javascript", "React.js"],
      description:
        "The app simple-tasks can be used to track routine/daily tasks that does not require much than a couple of minutes to complete.",
      link: {
        label: "simple-tasks",
        href: "https://dnovac.github.io/simple-tasks/",
      },
    },
    {
      title: "Batch Jobs",
      techStack: [
        "Side Project",
        "Java",
        "Docker",
        "Spring Boot",
        "Spring Batch",
        "WebRTC",
      ],
      description: "This piece of software, developed using Java, Spring Boot and Spring Batch, exposes an API which handles import of CSV files and XML files into a NoSQL MongoDB database.",
      link: {
        label: "batch-jobs",
        href: "https://github.com/dnovac/batch-jobs",
      },
    },

    {
      title: "Shelves",
      techStack: ["Side Project", "Typescript", "Docker", "Express", "TypeORM"],
      description:
        "Personal backend project used to track all my personal collections, such as books, vinyls, games etc.",
      link: {
        label: "shelves",
        href: "https://github.com/dnovac/shelves",
      },
    },
  ],
} as const;
