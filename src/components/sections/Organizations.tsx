import { useState } from "react";
import type { CSSProperties } from "react";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { organizations } from "../../constants/organizations";

const spiralPoint = (arm: number, step: number) => {
  const angle = arm * ((Math.PI * 2) / 3) + step * 0.46;
  const radius = 90 + step * 29;
  return { x: 300 + Math.cos(angle) * radius, y: 300 + Math.sin(angle) * radius };
};

const spiralPath = (arm: number) =>
  Array.from({ length: 90 }, (_, index) => {
    const { x, y } = spiralPoint(arm, (index / 89) * 6.2 - 1.8);
    return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");

// Space labels around the spiral so their readable faces stay clear as the galaxy turns.
const organizationPoint = (index: number) => {
  const inner = index < 6;
  const angle = inner ? (index * Math.PI) / 3 : ((index - 6) * Math.PI * 2) / 11 + 0.3;
  const radius = inner ? 125 : 245;
  return { x: 300 + Math.cos(angle) * radius, y: 300 + Math.sin(angle) * radius };
};

const Organizations = () => {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const organization = organizations[selected];

  return (
    <>
      <Header
        useMotion
        p="Across projects, research & platforms"
        h2="Organizations & ecosystems."
      />
      <p className="section-copy text-secondary mx-auto mt-4 max-w-3xl text-center">
        Organizations connected to projects I’ve contributed to through employers, freelance work,
        research, and technology ecosystems.
      </p>
      <div className="mt-5 grid items-center gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.8fr)] lg:gap-8">
        <div className={`organization-galaxy ${paused ? "is-paused" : ""}`}>
          <div className="galaxy-orbit">
            <svg viewBox="0 0 600 600" className="galaxy-dust" aria-hidden="true">
              <defs>
                <radialGradient id="organization-galaxy-glow">
                  <stop offset="0" stopColor="#9fffea" stopOpacity="0.55" />
                  <stop offset="0.2" stopColor="#915eff" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#915eff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="300" cy="300" r="285" fill="url(#organization-galaxy-glow)" />
              {[0, 1, 2].map((arm) => (
                <g key={arm}>
                  <path
                    d={spiralPath(arm)}
                    stroke={arm === 1 ? "#00cea8" : "#915eff"}
                    strokeWidth="28"
                    opacity="0.08"
                    fill="none"
                  />
                  <path
                    d={spiralPath(arm)}
                    stroke={arm === 1 ? "#00cea8" : "#b696ff"}
                    strokeWidth="1"
                    opacity="0.45"
                    fill="none"
                  />
                  {Array.from({ length: 90 }, (_, index) => {
                    const { x, y } = spiralPoint(arm, (index / 89) * 6 - 1.6);
                    return (
                      <circle
                        key={index}
                        cx={x + Math.sin(index * 7.3) * 14}
                        cy={y + Math.cos(index * 3.7) * 14}
                        r={index % 5 === 0 ? 1.8 : 0.8}
                        fill={arm === 1 ? "#9fffea" : "#d4c0ff"}
                        opacity={0.3 + (index % 4) * 0.15}
                      />
                    );
                  })}
                </g>
              ))}
            </svg>
            {organizations.map((item, index) => {
              const { x, y } = organizationPoint(index);
              return (
                <div
                  key={item.name}
                  className="galaxy-node-position"
                  style={{ left: `${x / 6}%`, top: `${y / 6}%` }}
                >
                  <button
                    type="button"
                    className="galaxy-node"
                    aria-label={`Explore ${item.name}`}
                    aria-pressed={selected === index}
                    style={
                      {
                        "--node-accent":
                          item.group === "Technology ecosystem" ? "#bf9aff" : "#9fffea",
                      } as CSSProperties
                    }
                    onClick={() => setSelected(index)}
                    onFocus={(event) => {
                      if (event.currentTarget.matches(":focus-visible")) setPaused(true);
                    }}
                  >
                    <span className="galaxy-node-star" aria-hidden="true" />
                    {item.short}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="galaxy-core" aria-hidden="true">
            <span>H</span>
            <small>ENGINEERING</small>
          </div>
          <button
            type="button"
            className="galaxy-motion-button"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
          >
            {paused ? "Resume orbit" : "Pause orbit"}
          </button>
        </div>
        <div className="min-w-0">
          <div
            className="rounded-2xl border border-[#00cea8]/25 bg-tertiary p-5 sm:p-6"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9fffea]">
              {organization.group}
            </p>
            <h3 className="mt-3 text-xl font-bold leading-snug text-white">{organization.name}</h3>
            <p className="mt-2 text-sm text-secondary">{organization.context}</p>
            <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-secondary">
              {organization.group === "Technology ecosystem"
                ? "Part of the technology ecosystem involved in projects I’ve worked on."
                : "Connected to projects or research I’ve contributed to, including work through employers and engagements."}
            </p>
          </div>
          <p className="mt-4 text-center text-xs leading-relaxed text-secondary lg:text-left">
            Select a star to explore. Names reflect project connections and technology exposure.
          </p>
          <details className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">
            <summary className="cursor-pointer text-sm font-semibold text-white">
              Browse all {organizations.length} organizations
            </summary>
            <div className="mt-3 flex flex-wrap gap-2">
              {organizations.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Select ${item.name}`}
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                  className="min-h-[44px] rounded-lg border border-white/10 px-3 py-2 text-xs text-secondary transition-colors hover:border-[#00cea8]/40 aria-pressed:border-[#00cea8]/50 aria-pressed:text-[#9fffea]"
                >
                  {item.short}
                </button>
              ))}
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

const OrganizationsSection = SectionWrapper(Organizations, "organizations");
export default OrganizationsSection;
