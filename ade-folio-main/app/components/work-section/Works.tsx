import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "The Watcher",
      gitLink: "https://github.com/YPS7/thewatcher",
      liveLink: "https://thewatchercli.netlify.app/",
      about:
        "This is a  cli tool that runs on your device while you code and whenever you encounter any error in your terminal it provides the possible fixes after analyzing your codebase. It has multi AI-Provider support you can use your favourite LLM model with an API key.",
      stack: ["next.js", "javascript", "Python"],
      //img: "/nijasit.svg",
      img: "/ypsthewatcher.png",
      //owner: "Bells Uni",
    },
    {
      title: "Reducto",
      gitLink: "https://github.com/YPS7/REDUCTO",
      liveLink: "https://dashing-jelly-71664c.netlify.app/",
      about:
        "It is a web application that taes in the links of large papers or articles and then converts them small paragraphs using Text Rank and Single Rank algorithms.",
      stack: ["next.js", "typescript", "tailwindcss"],
      img: "/ypsreducto.png",
      //owner: "Offset",
    },
    {
      title: "PRD-Generator",
      gitLink: "https://github.com/YPS7/PRD_GENERATOR",
      liveLink: "https://github.com/YPS7/PRD_GENERATOR",
      about:
        "A web application made for generating PRDs tailored for specific projects defined by the users in prompts. It acts as a great tool for Vibe Coding that helps one make seamless apps. It analyzes your ideas and provides an analysis on it telling the already existing tools and the other such things like uniqueness, strenghts and weakness.",
      stack: ["next.js", "typescript", "tailwindcss"],
      img: "/ypsthewatcher.png",
    },
    {
      title: "YPS-Media",
      gitLink: "https://github.com/YPS7",
      liveLink: "https://capable-taffy-43dd73.netlify.app/",
      about:
        "A web application that helps you to visualize the working of a Linked List to have a clear understanding aout its operations.",
      stack: ["HTML","CSS", "javascript"],
      img: "/ypsmedia.png",
    },
    {
      title: "LinkList Visualizer",
      gitLink: "https://github.com/YPS7/Linky",
      liveLink: "https://yps7.github.io/Linky/",
      about:
        "A web application that contains various media files with itself online like Youtube. It has an exceptional feature of smart query search where it gives the search result 4x faster.",
      stack: ["React","Tailwind CSS", "Load Balancing"],
      img: "/ypslinkedlist.png",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    // {
    //   title: "Multi-step form",
    //   gitLink: "https://github.com/adex-hub/multi-step-form-main",
    //   liveLink: "https://ade-loremgaming.netlify.app/",
    //   about:
    //     "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
    //   stack: ["html", "sass", "javascript", "ms clarity"],
    //   img: "/multistep.svg",
    // },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          //owner={work.owner}
        />
      ))}

      <Timeline />
    </section>
  );
}
