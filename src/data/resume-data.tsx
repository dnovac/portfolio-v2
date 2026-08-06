import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dan Novac",
  initials: "DN",
  location: `Brasov, Romania, EET`,
  locationLink: "https://www.google.com/maps/place/Brasov",
  about:
    "Senior Software Engineer | Technical Lead",
  summary: 
  "I'm a Senior Software Engineer with over 10 years of experience, mostly in Node.js, TypeScript, Java and AWS Cloud Infrastructure. Most of my work lives in the parts of a product people never see - APIs, infrastructure, pipelines, databases, the things that should just quietly work. In a previous role I spent a year as Technical Team Lead, guiding a team of engineers through the delivery of new features and improvements. That period taught me something that stuck: the hardest problems usually aren't technical. They're about people understanding why a decision was made. These days I'm focused on systems architecture, performance, and cloud-native development. I care about clean code, systems that scale, and solutions that don't quietly drain a budget.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8904832?v=4",
  personalWebsiteUrl: "https://www.dan-novac.com",
  contact: {
    email: "dan@dan-novac.com",
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
      company: "Arnia / LEGO Group",
      link: "https://www.lego.com/",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      start: "2025",
      end: "-",
      description: "Senior Software Engineer for the LEGO Group. I develop new features and implement AWS infrastructure for the LEGO Account. I am building new architectures from infrastructure stacks and constructs, observability tools, backend services and some frontend features, deploy pipelines and github actions workflows, scripts and new api routes. I use technologies such as: AWS, Lambdas, Api Gateways, CDNs, Secrets, Typescript, NodeJS etc.",
    },
    {
      company: "Ateliere",
      link: "https://www.ateliere.com/",
      badges: ["Remote"],
      title: "Technical Team Lead",
      start: "2024",
      end: "2025",
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
    "AWS", 
    "Node.js",
    "Lambda",
    "Serverless",
    "TypeScript",
    "Java",
    "Kubernetes",
    "Docker",
    "Terraform",
    "CDK",
    "Pulumi",
    "SQS",
    "SNS",
    "Database", 
    "DynamoDB / RDS / PostgreSQL",
    "CDN",
    "API Gateway",
    "Cloudwatch",
    "SSM",
    "Bash scripts",
    "GitHub Actions",
    "Step Functions",
    "ffmpeg",
    "Monorepo",
    "ReactJS",
    "Turbo",
    "NestJS",
    "Express",
    "Javascript",
    "Sequelize",
    "Drizzle",
    "PostgreSQL",
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
      title: "Brasov Hockey",
      techStack: ["Side Project", "Typescript", "NodeJS", "ReactJS", "Docker", "Fastify", "Prisma", "Data scraping", "API Routes", "Express", "Cron jobs", "Vercel", "Render" ],
      description:
        "Platform for tracking stats, schedules, and data for the Brașov hockey team. The service is built with Node.js, Fastify, and Prisma, and it's designed to be deployed as a Docker container. It aggregates data from multiple sources, including the Erste Liga and Elite Prospects APIs, and serves it through a clean, consistent REST API.",
      link: {
        label: "rink-radar",
        href: "https://www.rink-radar.live/",
      },
    },
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
