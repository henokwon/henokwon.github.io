import Tilt from "react-parallax-tilt";
import { motion, useReducedMotion } from "framer-motion";

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
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="h-full w-full min-w-0"
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    >
      <Tilt
        className="h-full"
        glareEnable={!reducedMotion}
        tiltEnable={!reducedMotion}
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareColor="#aaa6c3"
      >
        <article
          className="green-pink-gradient group h-full w-full rounded-2xl p-[1px]"
          data-signal={signal}
        >
          <div className="bg-tertiary flex h-full min-h-[280px] flex-col justify-between rounded-2xl p-6">
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
              <h3 className="text-[22px] font-bold leading-tight text-white">{name}</h3>
              <p className="text-secondary mt-3 text-[14px] leading-[24px]">{description}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[13px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            {signal !== undefined && (
              <p className="mt-5 border-t border-white/10 pt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#00cea8]/0 transition-colors duration-300 group-hover:text-[#00cea8]/70 group-focus-within:text-[#00cea8]/70">
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
          className="text-secondary mt-3 max-w-3xl text-center text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-14 grid justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WorksSection = SectionWrapper(Works, "projects");
export default WorksSection;
