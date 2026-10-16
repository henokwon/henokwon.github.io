import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import DecorativeCanvas from "../layout/DecorativeCanvas";
import { config } from "../../constants/config";

const runtimeSignals = [
  ["∴", "Runtime", "Space is rendered."],
  ["⌁", "Lag", "Mass slows frames."],
  ["◇", "Collapse", "Observation compiles."],
];

const Hero = () => {
  return (
    <section className="relative mx-auto min-h-screen w-full pb-28 pt-[100px]">
      <div className="hero-runtime-aura" />
      <div className={`relative z-10 mx-auto max-w-7xl ${styles.paddingX}`}>
        <div className="flex w-full flex-col items-center text-center">
          <div className="max-w-4xl">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>{config.hero.p[0]}</p>
            <p className="text-secondary mx-auto mt-4 max-w-xl text-base leading-7">
              I build secure backend platforms, automate cloud delivery, and make production systems
              reliable and observable.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-[#915EFF] px-6 py-3 font-semibold text-white"
              >
                Explore projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white"
              >
                Get in touch
              </a>
            </div>
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
                <DecorativeCanvas scene="theory" />
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

      <div className="absolute bottom-6 flex w-full items-center justify-center">
        <a href="#about" aria-label="Read about Henok">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
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
