import Link from "next/link";
import { MoveLeft } from "lucide-react";
import Section from "@/components/common/Section";
import { schoolEntry } from "@/constants/education";

type Props = {
  level: string;
  schools: schoolEntry[];
};

export default function EducationLevel({ level, schools }: Props) {
  return (
    <Section className="grow flex justify-center mt-8">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="text-sm mb-6 inline-block opacity-60 hover:opacity-100 duration-[200ms]"
        >
          <MoveLeft className="inline mr-2" /> Back to Home
        </Link>
        <div className="text-4xl font-bold text-center mb-5">{level}</div>
        <div className="flex flex-col gap-4">
          {schools.map((school) => (
            <div
              key={school.id}
              className="border border-[#212807] rounded-lg p-5"
            >
              <div className="font-bold mb-1">{school.schoolName}</div>
              <div className="opacity-60">{school.year}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
