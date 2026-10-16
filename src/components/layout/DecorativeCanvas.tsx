import { Component, lazy, Suspense, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useInView, useReducedMotion } from "framer-motion";

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

// Keep models visible for reduced motion; pause animation instead of hiding scenes.
export default function DecorativeCanvas({
  scene,
  desktopOnly = false,
}: {
  scene: keyof typeof scenes;
  desktopOnly?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "100px" });
  const hasBeenInView = useInView(containerRef, { margin: "100px", once: true });
  const reducedMotion = useReducedMotion();
  const [environment, setEnvironment] = useState({ visible: true, allowed: !desktopOnly });

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 641px)");
    const update = () =>
      setEnvironment({
        visible: !document.hidden,
        allowed: !desktopOnly || desktop.matches,
      });
    update();
    desktop.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      desktop.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [desktopOnly]);

  const Scene = scenes[scene];
  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      {environment.allowed && hasBeenInView && (
        <CanvasBoundary>
          <Suspense fallback={null}>
            <Scene active={environment.visible && inView} animated={!reducedMotion} />
          </Suspense>
        </CanvasBoundary>
      )}
    </div>
  );
}
