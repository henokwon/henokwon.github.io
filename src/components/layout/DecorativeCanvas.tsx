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

// Decorations load only when visible and yield to accessibility/device preferences.
export default function DecorativeCanvas({
  scene,
  desktopOnly = false,
}: {
  scene: keyof typeof scenes;
  desktopOnly?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "100px" });
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 641px)");
    const update = () => setEnabled(!document.hidden && (!desktopOnly || desktop.matches));
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
    <div ref={containerRef} className="h-full w-full" aria-hidden="true">
      {enabled && inView && reducedMotion === false && (
        <CanvasBoundary>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </CanvasBoundary>
      )}
    </div>
  );
}
