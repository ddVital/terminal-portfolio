import { tzzChatCover, tzzBotsCover } from "../../../utils/index";
export type ProjectType = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  cover: string;
  url: string;
  colors: {
    color1: string;
    color2: string;
    color3: string;
  }
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Toolzz Chat",
    description: "projects.1.description",
    categories: ["Ruby on rails", "vue.js", "postgres", "tailwind", "AWS", "Redis", "Sidekiq", "Docker", ],
    cover: tzzChatCover,
    url: "",
    colors: {
      color1: "vec3(0.0, 0.21, 0.75)",  // Soft blue
      color2: "vec3(0.00, 0.45, 0.55)",  // Aqua blue
      color3: "vec3(0.43, 0.22, 0.71)",  // Purple
    }
  },
  {
    id: 2,
    title: "Toolzz Bots",
    description: "projects.2.description",
    categories: ["React", "Next.js", "Typescript", "Tailwind", "AWS", "Node.js", "Zustand", "Docker", "Redis", "PostgreSQL", "Firebase"],
    cover: tzzBotsCover,
    url: "",
    colors: {
      color1: "vec3(0.34, 0.0, 0.66)",
      color2: "vec3(0.24, 0.36, 0.89)",
      color3: "vec3(0.11, 0.16, 0.73)"
    }
  },
  {
    id: 3,
    title: "Project 3",
    description: "Brand activation",
    categories: ["Campaign", "Digital", "Branding"],
    cover: "https://cdn.dribbble.com/userupload/42769933/file/original-5cf454a2e6674440a3b649a5de45de57.mp4",
    url: "",
    colors: {
      color1: "vec3(0.10, 0.50, 0.0)",
      color2: "vec3(0.91, 0.96, 0.93)",
      color3: "vec3(0.54, 0.90, 0.50)"
    }
  },
  {
    id: 4,
    title: "Project 4",
    description: "Brand activation",
    categories: ["Campaign", "Digital", "Branding"],
    cover: "https://cdn.dribbble.com/userupload/42769933/file/original-5cf454a2e6674440a3b649a5de45de57.mp4",
    url: "",
    colors: {
      color1: "vec3(0.64, 0.60, 0.0)",
      color2: "vec3(0.84, 0.86, 0.89)",
      color3: "vec3(0.80, 0.80, 0.0)"
    }
  },
];