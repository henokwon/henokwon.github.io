import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";
import Text from "./SceneText";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";
import type { TCanvasSceneProps } from "../../types";

const orbitLabels = ["Ûc", "Ωcache", "P≠NP", "Δs²", "c=clock"];

const RuntimeCore = ({ animated = true }: TCanvasSceneProps) => {
  const coreRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const frameLines = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => {
        const offset = (index - 4) * 0.36;
        return [new THREE.Vector3(-1.7, offset, -0.55), new THREE.Vector3(1.7, offset, -0.55)];
      }),
    []
  );

  useFrame(({ clock }) => {
    if (!animated) return;
    const elapsed = clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = elapsed * 0.38;
      coreRef.current.rotation.z = Math.sin(elapsed * 0.5) * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = elapsed * 0.32;
      ringRef.current.rotation.y = elapsed * 0.22;
    }
  });

  return (
    <group ref={coreRef}>
      <mesh>
        <icosahedronGeometry args={[1.05, 3]} />
        <meshStandardMaterial
          color="#130d2d"
          emissive="#804dee"
          emissiveIntensity={0.34}
          metalness={0.75}
          roughness={0.18}
          wireframe
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.7, 48, 48]} />
        <meshStandardMaterial
          color="#050816"
          emissive="#00cea8"
          emissiveIntensity={0.28}
          metalness={0.9}
          roughness={0.22}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 16, 140]} />
        <meshBasicMaterial color="#00cea8" transparent opacity={0.85} />
      </mesh>

      {frameLines.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={index === 4 ? "#00cea8" : "#ffffff"}
          transparent
          opacity={index === 4 ? 0.42 : 0.1}
          lineWidth={1}
        />
      ))}
    </group>
  );
};

const OrbitingAxioms = ({ animated = true }: TCanvasSceneProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!animated) return;
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      {orbitLabels.map((label, index) => {
        const angle = (index / orbitLabels.length) * Math.PI * 2;
        const radius = 2.15;

        return (
          <Float
            key={label}
            speed={animated ? 1.8 : 0}
            rotationIntensity={0.16}
            floatIntensity={0.25}
          >
            <Text
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 1.7) * 0.42,
                Math.sin(angle) * radius,
              ]}
              fontSize={0.16}
              anchorX="center"
              anchorY="middle"
              color={index % 2 === 0 ? "#00cea8" : "#bf61ff"}
            >
              {label}
            </Text>
          </Float>
        );
      })}
    </group>
  );
};

const TheoryScene = ({ animated = true }: TCanvasSceneProps) => {
  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 3, 4]} intensity={3.2} color="#915EFF" />
      <pointLight position={[-4, -2, 2]} intensity={2.1} color="#00cea8" />
      <RuntimeCore animated={animated} />
      <Suspense fallback={null}>
        <Float speed={animated ? 1.35 : 0} rotationIntensity={0.08} floatIntensity={0.18}>
          <Text
            position={[0, 0.08, 1.16]}
            fontSize={0.34}
            anchorX="center"
            anchorY="middle"
            color="#9fffea"
          >
            Δs²
          </Text>
          <Text
            position={[0, -0.24, 1.16]}
            fontSize={0.11}
            anchorX="center"
            anchorY="middle"
            color="#bf61ff"
          >
            Ûc · Ωcache
          </Text>
        </Float>
        <OrbitingAxioms animated={animated} />
      </Suspense>
    </>
  );
};

const TheoryEngineCanvas = ({ active = true, animated = true }: TCanvasSceneProps) => {
  return (
    <Canvas
      frameloop={!active ? "never" : animated ? "always" : "demand"}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.15, 5.3], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      fallback={<span />}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={animated && active}
          autoRotateSpeed={0.45}
        />
        <TheoryScene animated={animated} />
      </Suspense>
    </Canvas>
  );
};

export default TheoryEngineCanvas;
