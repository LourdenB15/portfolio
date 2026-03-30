import Section from "@/components/common/Section";
import { EDUCATION } from "@/constants/education";
import Link from "next/link";

export default function EducationSection() {
  return (
    <Section className="grow flex justify-center mt-8">
      <div>
        <div className="text-4xl font-bold text-center mb-8">Education</div>
        <div className="flex flex-col gap-5">
          {EDUCATION.map((level) => (
            <Link
              href={`/education/${level.level.toLowerCase()}`}
              key={level.id}
              className="cursor-pointer duration-[200ms] border border-[#212807] hover:bg-[#212807] rounded-lg p-5"
            >
              <div className="mb-2 font-bold">{level.level}</div>
              {level.school.map((school, index) => (
                <div
                  key={school.id}
                  className={index < level.school.length - 1 ? "mb-2" : ""}
                >
                  <div>{school.schoolName}</div>
                  <div>{school.year}</div>
                </div>
              ))}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
