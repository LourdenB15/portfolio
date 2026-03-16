import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import { PROJECTS } from "@/constants/projects";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <div className="text-4xl font-bold text-center mb-8">Projects</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROJECTS.map((project) => (
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
                  <FaGithub size={16} />
                  View code on GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
