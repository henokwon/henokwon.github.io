import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Text } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";

const orbitLabels = ["Ûc", "Ωcache", "P≠NP", "Δs²", "c=clock"];

const RuntimeCore = () => {
  const coreRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const frameLines = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => {
        const offset = (index - 4) * 0.36;
        return [
          new THREE.Vector3(-1.7, offset, -0.55),
          new THREE.Vector3(1.7, offset, -0.55),
        ];
      }),
    [],
  );

  useFrame(({ clock }) => {
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

const OrbitingAxioms = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
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
          <Float key={label} speed={1.8} rotationIntensity={0.16} floatIntensity={0.25}>
            <Text
              position={[Math.cos(angle) * radius, Math.sin(angle * 1.7) * 0.42, Math.sin(angle) * radius]}
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

const TheoryScene = () => {
  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 3, 4]} intensity={3.2} color="#915EFF" />
      <pointLight position={[-4, -2, 2]} intensity={2.1} color="#00cea8" />
      <RuntimeCore />
      <Float speed={1.35} rotationIntensity={0.08} floatIntensity={0.18}>
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
      <OrbitingAxioms />
    </>
  );
};

const TheoryEngineCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0.15, 5.3], fov: 42 }}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
        <TheoryScene />
      </Suspense>
    </Canvas>
  );
};

export default TheoryEngineCanvas;
