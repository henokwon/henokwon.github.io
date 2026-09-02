import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const experienceSignals = ["▣", "◇", "⌁", "∴", "⟡"];

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(135deg, rgba(21,16,48,0.96), rgba(5,8,22,0.94))",
        color: "#fff",
        border: "1px solid rgba(145,94,255,0.22)",
        borderRadius: "24px",
        boxShadow: "0 28px 80px rgba(0,0,0,0.32)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(145,94,255,0.35)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <div className="flex flex-col items-center gap-3 text-center">
          <div>
            <h3 className="text-[24px] font-bold leading-tight text-white">
              {experience.title}
            </h3>
            <p
              className="text-secondary mt-1 text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.companyName}
            </p>
          </div>
          <span className="w-fit rounded-full border border-[#00cea8]/25 bg-[#00cea8]/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#9fffea]">
            field log
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {experience.points.map((point, index) => (
          <div
            key={`experience-point-${index}`}
            className="group grid gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00cea8]/30 hover:bg-[#00cea8]/[0.055] sm:grid-cols-[34px_1fr] sm:text-left"
          >
            <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-xl border border-[#915EFF]/25 bg-[#915EFF]/10 font-mono text-[14px] font-black text-[#9fffea] transition-colors group-hover:border-[#00cea8]/35 sm:mx-0">
              {experienceSignals[index % experienceSignals.length]}
            </span>
            <p className="text-white-100 text-[13px] leading-7">
              {point}
            </p>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 35%"],
  });
  const climberY = useTransform(scrollYProgress, [0, 1], ["0%", "88%"]);

  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div ref={timelineRef} className="relative mt-20 flex flex-col">
        <div className="experience-climber-track" aria-hidden="true">
          <motion.div style={{ y: climberY }} className="experience-climber">
            <span className="experience-climber-head" />
            <span className="experience-climber-body" />
            <span className="experience-climber-arm experience-climber-arm-left" />
            <span className="experience-climber-arm experience-climber-arm-right" />
            <span className="experience-climber-leg experience-climber-leg-left" />
            <span className="experience-climber-leg experience-climber-leg-right" />
            <span className="experience-climber-pack">Δ</span>
          </motion.div>
        </div>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
