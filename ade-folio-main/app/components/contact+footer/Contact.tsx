"use client";
import React, { useEffect, useRef, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTitle from "../ui/AnimatedTitle";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);
  const [formDisplay, setFormDisplay] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  const handleContactClick = () => {
    const email = 'XYZ@gmail.com';
    const subject = 'Project Inquiry';
    const body = 'Hello,\n\nI would like to discuss a project with you.\n\n';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 pb-4 md:pb-10 lg:pb-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f]`}
      >
        <div
          className={` ${
            syne.className
          } flex justify-between items-center w-full duration-1000`}
        >
          <div className="inline w-full">
            <AnimatedTitle
              wordSpace={"mr-2 md:mr-[12px]"}
              charSpace={"mr-[0.001em]"}
              className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold pt-4 md:pt-10 lg:pt-12 "
            >
              GOT A PROJECT IN MIND?
            </AnimatedTitle>
            <Link href="#footer" data-no-blobity>
              <span
                data-blobity
                onClick={handleContactClick}
                className="text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden"
              >
                CONTACT ME
              </span>
            </Link>
          </div>
          <Link href="#footer">
            <button
              className={`text-base ml-auto mt-6 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 lg:mt-12 rounded-xl border-2 border-white leading-none ${
                viewCount <= 1 && "duration-500 delay-[1500ms]"
              } ${
                inView
                  ? " opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              data-blobity-radius="12"
              onClick={handleContactClick}
            >
              CONTACT&nbsp;ME
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
