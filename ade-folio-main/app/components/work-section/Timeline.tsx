"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/job.png",
    jobTitle: "Software Engineer",
    company: "AndOr Communications Pvt. Ltd.",
    jobType: "Full-Time",
    duration: "Aug. 2024 - Present",
    stuffIDid: [
      "Developed a unified backend-APIwrapper using Java to abstract authentication and request/response handling for third-party and in house LLM endpoints.",
      "Automated the email-marketing workflow using Python scripts andBash to detect new DBrecords, collate and segment user lists, cutting manual list prepration time and accelerating campaign turnaround.",
      "Automated metadata updates for assets in MongoDB via Pythin scripts, leveraging the OpenXL library to save manual effort",
      "Built and maintained React components for the internal management tool, enhancing UI performance and achieving high functionality test coverage.",
      "Integrated seven endpoints in the Role Based Access Control (RBAC) module of a Revenue Assurance application ensuring CRUD operations could be easily performed by the admin.",
    ],
  },
  {
    companyImg: "/nnpc.svg",
    jobTitle: "Data Science Intern",
    company: "Bharat Intern",
    jobType: "Internship",
    duration: "Sept. 2023 - Nov. 2023",
    stuffIDid: [
      "Designed a Neural Network system for recognizing alphabets and numbers, achieving 98% accuracy on large datasets.",
      "Created an LSTM-based web application for real-time data analysis, enabling data-driven decision making and boosting buisness performance.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
