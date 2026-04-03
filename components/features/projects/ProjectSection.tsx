"use client";

import Section from "@/components/common/Section";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Project, PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/common/ProjectCard";
import TagToggle from "@/components/common/TagToggle";

const ALL_TAGS = [...new Set(PROJECTS.flatMap((p) => p.tags))].sort();

export default function ProjectSection() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleInput(value: string) {
    setInput(value.toLowerCase());
  }

  return (
    <Section className="grow">
      <div className="text-4xl font-bold text-center mb-8">Projects</div>
      <div className="flex flex-col max-w-5xl mx-auto">
        <InputGroup className="md:max-w-xs self-end mb-6">
          <InputGroupInput
            placeholder="Search..."
            onChange={(e) => handleInput(e.target.value)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <div className="flex flex-wrap gap-2 mb-6">
          {ALL_TAGS.map((tag) => (
            <TagToggle
              key={tag}
              label={tag}
              selected={false}
              onClick={() => router.push(`/projects/category/${tag.toLowerCase()}`)}
            />
          ))}
        </div>
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
