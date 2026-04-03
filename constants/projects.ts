export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
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
  {
    id: 4,
    name: "Movie Search",
    description:
      "A movie search app powered by the OMDb API. Search any title to instantly pull up details like the plot, IMDb rating, and more.",
    image: "/movie-search.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://lourdenb15.github.io/Movie-Search/",
  },
  {
    id: 5,
    name: "SkyBridge Travels",
    description:
      "A hotel booking system for Cordova, Cebu. Search hotels, view room details, and book online",
    image: "/skybridge-travels.png",
    tags: ["React", "TailwindCSS", "Express", "Prisma", "API"],
    link: "https://sky-bridge-travels102.vercel.app/",
  },
];
