import { useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { certifications, credlyProfileUrl } from "../../constants/certifications";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

const CredentialCard = ({ badge }: { badge: (typeof certifications)[number] }) => {
  const expired =
    badge.expiresAt !== null && badge.expiresAt < new Date().toISOString().slice(0, 10);

  return (
    <article className="flex h-full min-w-0 gap-4 rounded-2xl border border-white/10 bg-tertiary p-4 transition duration-300 hover:-translate-y-1 hover:border-[#00cea8]/40 sm:p-5">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-white p-2">
        <img
          src={badge.image}
          alt=""
          width="64"
          height="64"
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#9fffea]">
          {badge.issuer}
        </p>
        <h3 className="mt-2 text-[15px] font-bold leading-snug text-white">{badge.name}</h3>
        <p className="mt-3 text-xs leading-relaxed text-secondary">
          Issued <time dateTime={badge.issuedAt}>{formatDate(badge.issuedAt)}</time>
        </p>
        {badge.expiresAt && (
          <p
            className={`mt-1 text-xs leading-relaxed ${
              expired ? "text-amber-300" : "text-secondary"
            }`}
          >
            {expired ? "Expired" : "Expires"}{" "}
            <time dateTime={badge.expiresAt}>{formatDate(badge.expiresAt)}</time>
          </p>
        )}
        <a
          href={badge.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${badge.name} on ${badge.provider} (opens in a new tab)`}
          className="mt-auto inline-flex min-h-[44px] items-center pt-3 text-sm font-semibold text-[#9fffea] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00cea8]"
        >
          Verify credential{" "}
          <span aria-hidden="true" className="ml-2">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
};

const Certifications = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Header useMotion {...config.sections.certifications} />
      <p className="section-copy text-secondary mx-auto mt-4 max-w-2xl text-center">
        Credentials in cloud architecture, infrastructure, and cyber resilience.
      </p>
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.65)}
        className="mt-7 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {certifications.slice(0, 3).map((badge) => (
          <CredentialCard key={badge.id} badge={badge} />
        ))}
      </motion.div>
      <div id="more-certifications" hidden={!expanded}>
        {expanded && (
          <div className="mt-4 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.slice(3).map((badge) => (
              <CredentialCard key={badge.id} badge={badge} />
            ))}
          </div>
        )}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="more-certifications"
          onClick={() => setExpanded((value) => !value)}
          className="min-h-[44px] rounded-xl border border-[#915EFF]/40 bg-[#915EFF]/10 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#915EFF]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00cea8]"
        >
          {expanded ? "Show featured credentials" : `View all ${certifications.length} credentials`}
        </button>
        <a
          href={credlyProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#9fffea] underline-offset-4 hover:underline"
        >
          View Credly profile{" "}
          <span aria-hidden="true" className="ml-2">
            ↗
          </span>
        </a>
      </div>
    </>
  );
};

const CertificationsSection = SectionWrapper(Certifications, "certifications");
export default CertificationsSection;
