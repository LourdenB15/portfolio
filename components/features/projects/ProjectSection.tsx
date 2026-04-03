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

type ProjectSectionProps = {
  activeTags?: string[];
  projects?: Project[];
};

export default function ProjectSection({
  activeTags = [],
  projects = PROJECTS,
}: ProjectSectionProps) {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleInput(value: string) {
    setInput(value.toLowerCase());
  }

  function toggleTag(tag: string) {
    const lower = tag.toLowerCase();
    const current = activeTags.map((t) => t.toLowerCase());
    const next = current.includes(lower)
      ? current.filter((t) => t !== lower)
      : [...current, lower];

    if (next.length === 0) {
      router.push("/projects");
    } else {
      router.push(`/projects/category/${next.join("/")}`);
    }
  }

  const filtered = projects.filter(
    (project: Project) =>
      project.name.toLowerCase().includes(input) ||
      project.description.toLowerCase().includes(input),
  );

  return (
    <Section className="grow">
      <div className="flex flex-col max-w-5xl mx-auto">
        <div className="text-4xl font-bold text-center mb-8">Projects</div>
        {activeTags.length > 0 && (
          <div className="mb-6">
            <span className="text-sm opacity-60">
              Category: {activeTags.join(" + ")}
            </span>
          </div>
        )}
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
              selected={activeTags
                .map((t) => t.toLowerCase())
                .includes(tag.toLowerCase())}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center opacity-60 mt-8 col-span-full">
              No projects found for these tags.
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
