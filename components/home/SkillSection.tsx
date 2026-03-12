import { SKILLS } from "@/constants/skills";

export default function SkillSection() {
  return (
    <section className="px-5 sm:px-10 md:px-16 py-12">
      <div className="text-4xl font-bold text-center mb-8">Skills</div>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {SKILLS.map((skill) => (
          <div key={skill.id}>
            <div className="font-bold mb-3">{skill.category}</div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item.name}
                  className="flex items-center gap-2 border border-[#212807] rounded-full px-4 py-1 text-sm"
                >
                  {item.icon}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
