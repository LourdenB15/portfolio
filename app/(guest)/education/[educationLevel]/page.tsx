import { notFound } from "next/navigation";
import { EDUCATION } from "@/constants/education";
import EducationLevel from "@/components/education/EducationLevel";

export default async function EducationLevelPage({
  params,
}: {
  params: Promise<{ educationLevel: string }>;
}) {
  const { educationLevel } = await params;

  const entry = EDUCATION.find(
    (e) => e.level.toLowerCase() === educationLevel.toLowerCase(),
  );

  if (!entry) notFound();

  return <EducationLevel level={entry.level} schools={entry.school} />;
}
