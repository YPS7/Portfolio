import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
//import ContraButton from "./ContraButton";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I get an Idea I convert it to code.
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I write clean, efficient code to keep projects running smoothly. I build&apos;s tools that help teams work smarter, not harder.
          My goal is to make technology simple, useful, and reliable.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Since I wrote my first code in 2020 till this date
            I have continually refined my development skills overtime picking up
            different domains on the way & solving complex challenges increasing the
            complexity as time goes by to ensure improvement.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          Every problem’s its own little adventure I dive in, pick up new tricks, and level up my skill set along the way.
          I don’t just code I focus on building thoughtful solutions that solve real problems—and hopefully make the work worth showing off
            solutions that businesses are proud to call their own. When you partner with me, you get my A-game and a product that speaks for itself.
            Curious to see what we can build together? Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1UvoPPZen0oPVCR02b5LgdknoX98m-gEe/view?usp=drive_link"
              }
            >
              my Resume
            </Link>
            .
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux
              Toolkit, React Query, HTML5, Git/GitHub, React Hook Form, Formik.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI, Framer
              Motion, Bootstrap, ReCharts.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, FigJam, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
      {/* <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
        <ContraButton />
      </div> */}
    </section>
  );
}
