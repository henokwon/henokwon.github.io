import { motion } from "framer-motion";

import { Header } from "../atoms/Header";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";

const consultingOffers = [
  "Secure backend/API architecture",
  "CI/CD, Docker, Kubernetes & GitOps",
  "Observability, hardening & incident readiness",
  "AI/RAG, automation & developer tooling",
];

const affiliationSignals = [
  "Killa Architect",
  "Anti-Sabotage Proxy",
  "HuzaPilot",
  "SDID",
  "ChaBo",
  "Cloud & DevSecOps",
  "Platform Audits",
];

const Consulting = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.consulting} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mx-auto mt-4 max-w-4xl text-center text-[17px] leading-[30px]"
      >
        {config.sections.consulting.content}
      </motion.p>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={fadeIn("right", "spring", 0.15, 0.75)}
          className="green-pink-gradient rounded-2xl p-[1px]"
        >
          <div className="bg-tertiary h-full rounded-2xl p-6 text-center">
            <p className="blue-text-gradient text-[13px] font-bold uppercase tracking-[0.25em]">
              Consulting Stack
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {consultingOffers.map((offer) => (
                <div
                  key={offer}
                  className="border-white/10 bg-black-100 rounded-2xl border p-5"
                >
                  <div className="mx-auto mb-4 h-2 w-2 rounded-full bg-[#00cea8]" />
                  <p className="text-[16px] font-semibold leading-7 text-white">
                    {offer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.25, 0.75)}
          className="border-white/10 bg-black-100 rounded-2xl border p-6 text-center"
        >
          <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#bf61ff]">
            Consulting
          </p>
          <h3 className="mt-4 text-[28px] font-black text-white">
            Building and advising on secure platforms.
          </h3>
          <p className="text-secondary mt-4 text-[15px] leading-7">
            I bring the same delivery posture into consulting: architecture first,
            security embedded, deployments automated, and operations visible before
            production pressure arrives.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {affiliationSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[#915EFF]/30 bg-[#915EFF]/10 px-4 py-2 text-[13px] font-semibold text-white"
              >
                {signal}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="mx-auto mt-8 inline-flex rounded-xl bg-[#915EFF] px-6 py-3 text-[14px] font-bold text-white shadow-lg shadow-[#915EFF]/20 transition-transform hover:-translate-y-1"
          >
            Request a platform audit
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Consulting, "consulting");
