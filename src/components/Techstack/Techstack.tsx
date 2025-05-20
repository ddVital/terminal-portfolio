import { Icon } from '../ui/Icon'
import * as techLogos from '../../utils/index'
import { useTranslation } from 'react-i18next';
import LazyShow from '../LazyShow/LazyShow';

const technologies = [
  // Frontend Frameworks/Libraries:
  "react",
  "nextjs",
  "angular",
  "vue",
  // "svelte",
  "tailwindcss",
  "bootstrap",
  // "storybook",
  "html",
  "css",
  "sass",

  // // Programming Languages:
  "javascript",
  "typescript",
  "python",
  // "java",
  "csharp",
  "cplusplus",
  // "rust",
  "go",
  "php",
  "ruby",
  // "dart",

  // // Backend Frameworks/Technologies:
  "nodejs",
  "express",
  "deno",
  "nestjs",
  "django",
  // "flask",
  "rubyonrails",
  "laravel",
  // "dotnetcore",
  "graphql",
  "websocket",
  "sidekiq",

  // // Databases:
  "mongodb",
  // "mysql",
  "postgresql",
  "firebase",
  "mariadb",
  "redis",
  "elasticsearch",

  // // DevOps/Cloud:
  "git",
  "docker",
  "kubernetes",
  "terraform",
  "rabbitmq",
  "aws",
  "linux",
  // "azure",

  // // Testing:
  "jest",
  "playwright",
  // "cypress",
  // "eslint",
  // "prettier",

  // // Version Control/Code Editing:
  // "github",
  // "vscode",
  "vite",
  // "webpack",
  // "sequelize",

  // // Mobile Development:
  // "reactnative",
  // "flutter",

  // // Error Monitoring/Logging:
  "sentry",

  // // Tools:
  "jira",
  "figma",
] as const;

type Technology = typeof technologies[number];

// Add display names for tooltips
const technologyDisplayNames: Record<Technology, string> = {
  react: "React.js - 5 ",
  nextjs: "Next.js - 3 ",
  tailwindcss: "Tailwind CSS - 4 ",
  bootstrap: "Bootstrap - 5 ",
  // "materialui",
  angular: "Angular - 3 ",
  vue: "Vue - 4 ",
  html: "HTML - 6 ",
  css: "CSS - 6 ",
  sass: "SASS - 4 ",

  // "svelte",
  // "storybook",
  javascript: "Javascript - 6 ",
  typescript: "Typescript - 4 ",
  python: "Python - 7 ",
  // "java",
  csharp: "C# - 3 ",
  cplusplus: "C++ - 3 ",
  // "rust",
  go: "Go - 2 ",
  php: "PHP - 3 ",
  ruby: "Ruby - 3 ",
  // "dart",
  nodejs: "Node.js - 5 ",
  express: "Express.js - 5 ",
  deno: "Deno - 2 ",
  nestjs: "Nest.js - 3 ",
  django: "Django - 5 ",
  // "flask",
  rubyonrails: "Ruby on Rails - 3 ",
  laravel: "Laravel - 2 ",

  // "dotnet",
  graphql: "GraphQL - 3 ",
  websocket: "WebSocket - 4 ",
  sidekiq: "Sidekiq - 3 ",

  // // Databases:
  mongodb: "MongoDB - 5 ",
  // mysql: "mysql",
  postgresql: "PostgreSQL - 5 ",
  firebase: "Firebase - 2 ",
  mariadb: "MariaDB - 1 ",
  redis: "Redis - 4 ",
  elasticsearch: "ElasticSearch - 3 ",

  // // DevOps/Cloud:
  git: "Git - 6 ",
  docker: "Docker - 4 ",
  kubernetes: "Kubernetes - 3 ",
  aws: "AWS - 3 ",
  terraform: "Terraform - 3 ",
  rabbitmq: "RabbitMQ - 3 ",
  linux: "Linux - 6 ",
  // "azure",

  // // Testing:
  jest: "Jest - 4 ",
  playwright: "Playwright - 2 ",
  // "cypress",
  // "eslint",
  // "prettier",

  // // Design/Prototyping:
  figma: "Figma - 5 ",

  // // Version Control/Code Editing:
  // "github",
  // "vscode",
  vite: "Vite - 3 ",
  // "webpack",
  // "sequelize",

  // // Mobile Development:
  // "reactnative",
  // "flutter",

  // // Error Monitoring/Logging:
  sentry: "Sentry - 2 ",
  
  // // Tools:
  jira: "Jira - 4 ",
  // pipefy: "Pipefy - 2 ",
  // notion: "Notion - 3 ",
} as const;

export function Techstack() {
  const { t } = useTranslation();

  return (
    // <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
    <div className="flex flex-wrap gap-4">
      {technologies.map((tech, index) => (
        <div 
          key={index}
          className="flex items-center justify-center w-fit"
          data-tooltip={technologyDisplayNames[tech] + t("duration.yearPlural")}
        >
          <img 
            src={techLogos[tech]} 
            alt={technologyDisplayNames[tech]} 
            className="w-6 h-6 object-contain" 
          />
        </div>
      ))}
    </div>
  )
}
