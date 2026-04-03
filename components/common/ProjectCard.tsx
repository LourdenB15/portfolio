"use client";

import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { Project } from "@/constants/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      key={project.id}
      className="relative border border-border rounded-lg overflow-hidden flex flex-col hover:bg-muted/40 transition-colors"
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
        <div className="text-sm opacity-70 grow">{project.description}</div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Link
              href={`/projects/category/${tag.toLowerCase()}`}
              onClick={(e) => e.stopPropagation()}
              key={tag}
            >
              <span className="border border-border rounded-full px-3 py-0.5 text-xs">
                {tag}
              </span>
            </Link>
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
  );
}
