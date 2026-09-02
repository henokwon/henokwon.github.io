import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="tool-grid">
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

export default SectionWrapper(Tech, "tech");
