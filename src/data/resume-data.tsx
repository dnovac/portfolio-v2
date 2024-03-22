import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dan Novac",
  initials: "DN",
  location: `Brasov, Romania, EET`,
  locationLink: "https://www.google.com/maps/place/Brasov",
  about:
    "Senior Software Engineer | Backend | Cloud ",
  summary:
    "As a Software Backend Engineer, I have successfully converted ideas into features and products. I analyse, prioritize and implement concepts & architectural decisions in order to enhance the product and I trust the process when everyone from a team understands the product and the details. Currently, I work mostly with Node.js, Typescript and AWS Cloud Services. I have over 9 years of experience as a software developer and I work remotely.",
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
      {
        name: "X",
        url: "https://x.com/daninovac",
        icon: XIcon,
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
      title: "Senior Software Engineer",
      start: "2021",
      end: "present",
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
