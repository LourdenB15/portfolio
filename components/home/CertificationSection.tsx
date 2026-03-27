import Section from "@/components/common/Section";
import { CERTIFICATIONS } from "@/constants/education";

export default function CertificationSection() {
  return (
    <Section>
      <div className="text-4xl font-bold text-center mb-8">Certifications</div>
      <div className="relative flex flex-col max-w-2xl mx-auto">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-[#212807]" />
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.id} className="relative pl-10 pb-8 last:pb-0">
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[#212807] bg-[#101404]" />
            <div className="font-bold">{cert.title}</div>
            <div className="text-sm mt-0.5">{cert.issuer}</div>
            <div className="opacity-60 text-sm mt-0.5">{cert.date} · {cert.hours} hours</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
