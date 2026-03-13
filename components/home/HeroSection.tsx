import Image from "next/image";
import Section from "@/components/common/Section";

export default function HeroSection() {
  return (
    <Section className="grow flex justify-center items-center">
      <div className="flex gap-5 flex-wrap justify-center">
          <div className="overflow-hidden rounded-lg basis-[300px] grow-1 max-w-md">
            <Image
              src="/cscat.jpeg"
              height={300}
              width={300}
              alt="meow meow"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-5 justify-center basis-[300px] grow mb-5 sm:mb-0 max-w-md pl-5">
            <div className="font-bold text-lg">Hi, I&apos;m Den!</div>
            <div>
              A 3rd year BS Information Technology student who builds for the
              web. I pick up new tools as I go and turn ideas into working
              projects.
            </div>
            <div>
              This is where I share what I&apos;ve built and what I&apos;m
              learning.
            </div>
          </div>
        </div>
    </Section>
  );
}
