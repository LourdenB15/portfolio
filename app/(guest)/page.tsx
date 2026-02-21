import Link from "next/link";
import Header from "@/components/common/Header";
export default function Home() {
  return (
    <>
      <Header/>
      <section className="px-16 grow flex justify-center items-center mt-7 md:mt-0">
        <div className="flex gap-5 flex-wrap justify-center">
          <div className="overflow-hidden rounded-lg basis-[300px] grow-1 max-w-md"><img src="/cscat.jpeg" alt="meow meow" /></div>

          <div className="flex flex-col gap-5 justify-center basis-[300px] grow mb-5 sm:mb-0 max-w-md pl-5">
            <div className="font-bold text-lg">Hi, I'm Den!</div>
            <div>A 3rd year BS Information Technology student passionate about building things for the web. I'm currently leveling up my skills in modern technologies and turning ideas into real, working projects.</div>
            <div>Welcome to my portfolio! A space where I share what I've built, what I've learned, and where I'm headed.</div>
          </div>
        </div>
      </section>
    </>
  );
}