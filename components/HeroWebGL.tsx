// @ts-nocheck
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Text, Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null);
  const textRef = useRef<THREE.Mesh>(null);
  
  const count = 3000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
      
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;
      
      ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.05;
    }
    
    if (textRef.current) {
      const mouseX = (state.pointer.x * Math.PI) / 20;
      const mouseY = (state.pointer.y * Math.PI) / 20;
      textRef.current.rotation.x += (mouseY - textRef.current.rotation.x) * 0.05;
      textRef.current.rotation.y += (mouseX - textRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 6]}>
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#F59E0B"
            size={0.03}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          ref={textRef as any}
          position={[0, 0, -2]}
          fontSize={3.5}
          color="#1A1A1C"
          fillOpacity={0}
          strokeWidth={0.02}
          strokeColor="#F59E0B"
          strokeOpacity={0.2}
          letterSpacing={0.1}
          anchorX="center"
          anchorY="middle"
        >
          HC DEV
        </Text>
      </Float>
    </>
  );
}

export default function HeroWebGL() {
  return (
    <div className="absolute inset-0 z-0 hidden md:block opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={["#0F0F10", 3, 10]} />
        <ParticleSystem />
      </Canvas>
    </div>
  );
}
