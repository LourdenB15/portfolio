import { type ReactNode } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type SkillItem = {
  name: string;
  icon: ReactNode;
};

type Skill = {
  id: number;
  category: string;
  items: SkillItem[];
};

export const SKILLS: Skill[] = [
  {
    id: 1,
    category: "Frontend",
    items: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 2,
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    id: 3,
    category: "Tools & Others",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];
