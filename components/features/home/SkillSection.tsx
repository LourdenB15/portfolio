"use client";

import { useState } from "react";
import { SKILLS } from "@/constants/skills";
import Section from "@/components/common/Section";

export default function SkillSection() {
  const [selected, setSelected] = useState<string | null>(null);

  function toggle(name: string) {
    setSelected((prev) => (prev === name ? null : name));
  }

  return (
    <Section>
      <div className="text-4xl font-bold text-center mb-8">Skills</div>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {SKILLS.map((skill) => (
          <div key={skill.id}>
            <div className="font-bold mb-3">{skill.category}</div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item.name}
                  onClick={() => toggle(item.name)}
                  className={`flex items-center gap-2 border border-[#212807] rounded-full px-4 py-1 text-sm cursor-pointer duration-200 ${
                    selected === item.name
                      ? "bg-[#212807] text-[#EBF2D9]"
                      : "hover:bg-[#212807]/50"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
