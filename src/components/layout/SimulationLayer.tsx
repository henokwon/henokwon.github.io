import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { PhysicsEquationsCanvas } from "../canvas";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const SimulationLayer = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const nextSequence = [...sequence, event.key].slice(-konamiCode.length);
      setSequence(nextSequence);

      if (nextSequence.join("|") === konamiCode.join("|")) {
        setIsRevealed(true);
        window.setTimeout(() => setIsRevealed(false), 5200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sequence]);

  useEffect(() => {
    console.info(
      "%cFRAME-RATE HYPOTHESIS ARMED%c\\nNo holographic escape hatches. No jargon shields. Test or discard.\\nUnlock: ↑ ↑ ↓ ↓ ← → ← → B A",
      "color:#00cea8;font-weight:700",
      "color:#aaa6c3"
    );
  }, []);

  return (
    <>
      <div className="simulation-grid" aria-hidden="true" />
      <div className="simulation-scanline" aria-hidden="true" />
      <div className="simulation-physics-field" aria-hidden="true">
        <PhysicsEquationsCanvas />
      </div>
      <div className="simulation-corner simulation-corner-top" aria-hidden="true">
        HNK://EMPIRICAL.NODE
      </div>
      <div
        className="simulation-corner simulation-corner-bottom"
        aria-hidden="true"
      >
        NO EXTRA DIMENSIONS
      </div>
      <div className="simulation-equation" aria-hidden="true">
        (iγ<sup>μ</sup>∂<sub>μ</sub> − m)ψ = 0
      </div>
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            className="simulation-easter-egg"
          >
            <span>String Theory Trap avoided</span>
            <strong>Protocol: if it cannot be measured, it cannot hide here.</strong>
            <code>(iγμ∂μ − m)ψ = 0</code>
            <div className="simulation-review">
              <b>Einstein review:</b>
              <p>
                Time is not the river. Randomness is not the refuge. Causality
                still demands payment. Run the experiment.
              </p>
            </div>
            <code>Ψframe = Uc(Φglobal) − Ωload + Ξhardware</code>
            <ul>
              <li>Premise: light-speed as processing constraint.</li>
              <li>Exploit: entangled-state saturation.</li>
              <li>Prediction: repeatable local lag or parameter drift.</li>
              <li>Exit condition: no anomaly, theory dies.</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SimulationLayer;
