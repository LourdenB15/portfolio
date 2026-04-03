import { PROJECTS } from "@/constants/projects";
import Section from "@/components/common/Section";
import ProjectCard from "@/components/common/ProjectCard";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ tags: string[] }>;
}) {
  const { tags } = await params;
  const filtered = PROJECTS.filter((project) => {
    return tags.every((tag) =>
      project.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
    );
  });
  return (
    <Section className="grow">
      <Link
        href="/projects"
        className="text-sm mb-6 inline-block opacity-60 hover:opacity-100 duration-200"
      >
        <MoveLeft className="inline mr-2" /> Back to Projects
      </Link>
      <div className="text-4xl font-bold text-center mb-8">
        {tags.join(" + ")}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filtered.length === 0 && (
          <div className="text-center opacity-60 mt-8">
            No projects found for these tags.
          </div>
        )}
      </div>
    </Section>
  );
}
