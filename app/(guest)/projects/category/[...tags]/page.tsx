import { PROJECTS } from "@/constants/projects";
import ProjectSection from "@/components/features/projects/ProjectSection";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ tags: string[] }>;
}) {
  const { tags } = await params;
  const filtered = PROJECTS.filter((project) =>
    tags.every((tag) =>
      project.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
    ),
  );

  return <ProjectSection activeTags={tags} projects={filtered} />;
}
