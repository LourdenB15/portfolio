type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Rock Paper Scissor",
    description:
      "My first ever project built with HTML, CSS, and vanilla JavaScript. A simple browser game where you play against the computer, first to 5 wins.",
    image: "/rockPaperScissor.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://lourdenb15.github.io/RockPaperScissor/",
    github: "https://github.com/LourdenB15/RockPaperScissor",
  },
  {
    id: 2,
    name: "Etch A Sketch",
    description:
      "A browser-based drawing app. You can draw on a resizable grid, switch between pen, rainbow, and eraser modes, toggle the grid, and clear the canvas.",
    image: "/sketch.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://lourdenb15.github.io/Etch-A-Sketch/",
    github: "https://github.com/LourdenB15/Etch-A-Sketch",
  },
  {
    id: 3,
    name: "Calculator",
    description:
      "A browser-based calculator. Handles basic arithmetic with a delete and clear function.",
    image: "/calculator.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://lourdenb15.github.io/odin-calculator/",
    github: "https://github.com/LourdenB15/odin-calculator",
  },
];
