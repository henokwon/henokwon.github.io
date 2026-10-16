import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  signal,
  tags,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      className="h-full w-full min-w-0"
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    >
      <Tilt
        className="h-full"
        glareEnable
        tiltEnable
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareColor="#aaa6c3"
      >
        <article
          className="project-card green-pink-gradient group h-full w-full rounded-2xl p-[1px]"
          data-signal={signal}
        >
          <div className="bg-tertiary flex h-full min-h-[280px] flex-col rounded-2xl p-5 sm:p-6">
            <div>
              <div className="mb-5 flex items-center justify-between">
                <span className="blue-text-gradient text-[13px] font-bold tracking-[0.25em]">
                  0{index + 1}
                </span>
                {sourceCodeLink ? (
                  <a
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-gradient flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110"
                    aria-label={`View ${name} repository (opens in a new tab)`}
                  >
                    <img src={github} alt="" className="h-1/2 w-1/2 object-contain" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="text-sm text-[#9fffea] underline underline-offset-4"
                    aria-label={`Discuss ${name}`}
                  >
                    Discuss this work
                  </a>
                )}
              </div>
              <h3 className="text-[clamp(1.125rem,1.8vw,1.375rem)] font-bold leading-snug text-white">
                {name}
              </h3>
              <p className="text-secondary mt-3 text-[14px] leading-[24px]">{description}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-5">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[13px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            {signal !== undefined && (
              <p className="mt-4 border-t border-white/10 pt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#00cea8]/65 transition-colors duration-300 group-hover:text-[#9fffea] group-focus-within:text-[#9fffea]">
                signal: {signal}
              </p>
            )}
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="section-copy text-secondary mt-4 max-w-3xl text-center"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-7 grid justify-items-center gap-4 sm:mt-9 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WorksSection = SectionWrapper(Works, "projects");
export default WorksSection;
