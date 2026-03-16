"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import { PROJECTS } from "@/constants/projects";
import { SiGithub } from "react-icons/si";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
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
            (project) =>
              project.name.toLowerCase().includes(input) ||
              project.description.toLowerCase().includes(input),
          ).map((project) => (
            <div
              key={project.id}
              className="relative border border-[#212807] rounded-lg overflow-hidden flex flex-col hover:bg-[#212807]/40 transition-colors"
            >
              <Link
                href={project.link}
                target="_blank"
                className="absolute inset-0 z-0"
                aria-label={project.name}
              />

              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="relative z-10 p-5 flex flex-col gap-3 grow">
                <div className="font-bold text-lg">{project.name}</div>
                <div className="text-sm opacity-70 grow">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#212807] rounded-full px-3 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mt-1 w-fit"
                >
                  <SiGithub size={16} />
                  View code on GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
