import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} p="Built with the right tools" h2="Engineering toolkit." />
      <div className="tool-grid mt-7 sm:mt-9">
        {technologies.map((technology, index) => (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.03, duration: 0.45 }}
            className="tool-card"
            key={technology.name}
          >
            <div className="tool-icon-shell">
              <img
                src={technology.icon}
                alt={technology.name}
                className="tool-icon"
                loading="lazy"
              />
            </div>
            <span>{technology.name}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const TechSection = SectionWrapper(Tech, "tech");
export default TechSection;
