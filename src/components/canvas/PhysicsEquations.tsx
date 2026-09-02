import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const equations = [
  {
    text: "Gμν + Λgμν = 8πG/c⁴ · Tμν",
    note: "geometry ↔ load",
    position: [-3.8, 1.9, -1.6],
    color: "#9fffea",
  },
  {
    text: "iℏ∂ψ/∂t = Ĥψ",
    note: "state update",
    position: [3.25, 1.35, -1.2],
    color: "#bf61ff",
  },
  {
    text: "(iγμ∂μ − m)ψ = 0",
    note: "relativistic compute",
    position: [-3.15, -1.25, -1.4],
    color: "#ffffff",
  },
  {
    text: "Δx · Δp ≥ ℏ/2",
    note: "resolution bound",
    position: [3.6, -1.55, -1.7],
    color: "#00cea8",
  },
  {
    text: "E = hf",
    note: "energy as frequency",
    position: [0.15, 2.45, -2.2],
    color: "#ffffff",
  },
  {
    text: "S = kB ln Ω",
    note: "states become entropy",
    position: [-0.45, -2.25, -2],
    color: "#bf61ff",
  },
];

const EquationCloud = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const elapsed = clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(elapsed * 0.08) * 0.12;
      groupRef.current.rotation.x = Math.cos(elapsed * 0.06) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {equations.map((equation, index) => (
        <Float
          key={equation.text}
          speed={0.8 + index * 0.08}
          rotationIntensity={0.05}
          floatIntensity={0.42}
        >
          <group position={equation.position as [number, number, number]}>
            <Text
              fontSize={0.18}
              anchorX="center"
              anchorY="middle"
              color={equation.color}
              fillOpacity={0.44}
              outlineColor="#050816"
              outlineWidth={0.006}
            >
              {equation.text}
            </Text>
            <Text
              position={[0, -0.22, 0]}
              fontSize={0.065}
              anchorX="center"
              anchorY="middle"
              color="#aaa6c3"
              fillOpacity={0.34}
            >
              {equation.note}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
};

const PhysicsEquationsCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.8], fov: 44 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <EquationCloud />
      </Suspense>
    </Canvas>
  );
};

export default PhysicsEquationsCanvas;
