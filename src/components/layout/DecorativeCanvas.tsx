import { Component, lazy, Suspense, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useInView } from "framer-motion";

const scenes = {
  theory: lazy(() => import("../canvas/TheoryEngine")),
  physics: lazy(() => import("../canvas/PhysicsEquations")),
  earth: lazy(() => import("../canvas/Earth")),
  stars: lazy(() => import("../canvas/Stars")),
};

class CanvasBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

// Load each scene near the viewport and preserve its original animation on every device.
export default function DecorativeCanvas({ scene }: { scene: keyof typeof scenes }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "100px" });
  const hasBeenInView = useInView(containerRef, { margin: "100px", once: true });
  const [visible, setVisible] = useState(!document.hidden);

  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => {
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const Scene = scenes[scene];
  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      {hasBeenInView && (
        <CanvasBoundary>
          <Suspense fallback={null}>
            <Scene active={visible && inView} />
          </Suspense>
        </CanvasBoundary>
      )}
    </div>
  );
}
