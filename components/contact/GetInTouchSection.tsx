import Link from "next/link";
import { Github, Mail, Facebook } from "lucide-react";
import Section from "@/components/common/Section";

export default function GetInTouch() {
  return (
    <Section>
      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="text-4xl font-bold">Get In Touch</div>
        <p className="opacity-70 text-sm leading-relaxed">
          I&apos;m open to opportunities, collaborations, or just a chat. Feel
          free to reach out through any of the channels below.
        </p>

        <div className="flex gap-6 items-center">
          <Link
            href="https://github.com/LourdenB15"
            target="_blank"
            aria-label="GitHub"
            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <Github size={24} />
            <span className="text-xs">GitHub</span>
          </Link>

          <Link
            href="https://facebook.com/lourdenbaydal13"
            target="_blank"
            aria-label="Facebook"
            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <Facebook size={24} />
            <span className="text-xs">Facebook</span>
          </Link>

          <Link
            href="mailto:lourden@test.com"
            aria-label="Email"
            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <Mail size={24} />
            <span className="text-xs">Email</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
