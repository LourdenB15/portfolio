"use client";

import Section from "@/components/common/Section";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { useState } from "react";
import { Project, PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectSection() {
  const [input, setInput] = useState("");
  function handleInput(value: string) {
    setInput(value.toLowerCase());
  }

  return (
    <Section className="grow">
      <div className="text-4xl font-bold text-center mb-8">Projects</div>
      <div className="flex flex-col  max-w-5xl mx-auto">
        <InputGroup className="md:max-w-xs self-end mb-6">
          <InputGroupInput
            placeholder="Search..."
            onChange={(e) => handleInput(e.target.value)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.filter(
            (project: Project) =>
              project.name.toLowerCase().includes(input) ||
              project.description.toLowerCase().includes(input),
          ).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
