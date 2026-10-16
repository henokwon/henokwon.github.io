import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

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
        background: "linear-gradient(135deg, rgba(21,16,48,0.96), rgba(5,8,22,0.94))",
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
            className="h-[80%] w-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <div className="flex flex-col items-center gap-3 text-center">
          <div>
            <h3 className="text-balance text-[clamp(1.125rem,1.8vw,1.375rem)] font-bold leading-snug text-white">
              {experience.title}
            </h3>
            <p className="text-secondary mt-1 text-[16px] font-semibold" style={{ margin: 0 }}>
              {experience.companyName}
            </p>
          </div>
          <div
            className="company-logo-badge flex h-12 w-28 items-center justify-center rounded-xl border border-white/10 px-2 py-1.5"
            style={{ background: experience.iconBg }}
          >
            <img
              src={experience.icon}
              alt=""
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 grid auto-rows-fr gap-2">
        {experience.points.map((point, index) => (
          <div
            key={`experience-point-${index}`}
            className="group grid grid-cols-[24px_minmax(0,1fr)] items-start gap-2 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-left transition-colors duration-300 hover:border-[#00cea8]/30 hover:bg-[#00cea8]/[0.055]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-[#915EFF]/25 bg-[#915EFF]/10 font-mono text-xs font-black text-[#9fffea] transition-colors group-hover:border-[#00cea8]/35">
              {experienceSignals[index % experienceSignals.length]}
            </span>
            <p className="experience-point text-white-100">{point}</p>
          </div>
        ))}
      </div>
      {experience.fellowship && (
        <div className="mt-4 rounded-xl border border-[#00cea8]/25 bg-[#00cea8]/[0.06] p-4 text-left">
          <h4 className="text-sm font-semibold leading-relaxed text-[#9fffea]">
            {experience.fellowship.title}
          </h4>
          <p className="experience-point mt-2 text-white-100">
            {experience.fellowship.description}
          </p>
        </div>
      )}
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

      <div ref={timelineRef} className="relative mt-7 flex flex-col sm:mt-9">
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

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;
