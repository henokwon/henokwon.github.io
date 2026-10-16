import { motion } from "framer-motion";

import { styles } from "../constants/styles";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (Component: Props["Component"], idName: Props["idName"]) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some", margin: "0px 0px -48px 0px" }}
        className={`${styles.padding} portfolio-section relative z-0 mx-auto max-w-7xl`}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
