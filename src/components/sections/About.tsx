import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => {
  return (
    <Tilt
      className="h-full min-w-0"
      glareEnable
      tiltEnable
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      glareColor="#aaa6c3"
    >
      <div className="h-full w-full">
        <motion.div
          variants={fadeIn("up", "tween", index * 0.08, 0.5)}
          className="green-pink-gradient shadow-card h-full w-full rounded-[20px] p-[1px]"
        >
          <div className="service-card bg-tertiary flex h-full min-h-[175px] flex-col items-center justify-center gap-5 rounded-[20px] px-3 py-6 sm:min-h-[200px] sm:px-5">
            <img src={icon} alt="" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />

            <h3 className="max-w-[18ch] text-center text-[clamp(.875rem,1.6vw,1.125rem)] font-semibold leading-snug text-white">
              {title}
            </h3>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="section-copy text-secondary mx-auto mt-4 max-w-3xl text-center"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-5 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
