import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { TheoryEngineCanvas } from "../canvas";
import { config } from "../../constants/config";

const runtimeSignals = [
  ["∴", "Runtime", "Space is rendered."],
  ["⌁", "Lag", "Mass slows frames."],
  ["◇", "Collapse", "Observation compiles."],
];

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden">
      <div className="hero-runtime-aura" />
      <div
        className={`absolute inset-x-0 top-[86px] z-10 mx-auto max-w-7xl ${styles.paddingX}`}
      >
        <div className="flex w-full flex-col items-center text-center">
          <div className="max-w-4xl">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
              <span className="mt-3 block text-[18px] font-bold leading-normal tracking-[0.16em] text-white/55 sm:text-[24px]">
                ሄኖክ · ܚܢܘܟ
              </span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {config.hero.p[0]}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="hero-theory-shell mt-8 w-full"
          >
            <div className="hero-theory-console">
              <div className="hero-console-bar">
                <span>ሄኖክ.RUNTIME</span>
                <span>LIVE-RENDER TEST</span>
              </div>

              <div className="hero-theory-canvas">
                <TheoryEngineCanvas />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {runtimeSignals.map(([number, title, description]) => (
                  <div key={title} className="hero-signal-row">
                    <span>{number}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hero-test-ribbon">Δs² = (ÛcΔt)² − ΣΔxᵢ² − Ωcache</div>

            </div>
          </motion.div>
        </div>
      </div>

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
