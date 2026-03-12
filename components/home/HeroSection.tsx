import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="px-5 min-h-[calc(100vh-72px)] sm:px-10 md:px-16 grow flex justify-center items-center mt-7 md:mt-0">
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
              A 3rd year BS Information Technology student passionate about
              building things for the web. I&apos;m currently leveling up my
              skills in modern technologies and turning ideas into real, working
              projects.
            </div>
            <div>
              Welcome to my portfolio! A space where I share what I&apos;ve
              built, what I&apos;ve learned, and where I&apos;m headed.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
