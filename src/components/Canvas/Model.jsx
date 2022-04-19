import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Object() {
  // const { scene } = useGLTF("/oil.glb")
  const { scene } = useGLTF("/gopro.glb");
  return <primitive object={scene} />;
}

export function Model(props) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  return (
    <mesh ref={ref} scale={1.5} {...props}>
      <Suspense fallback={null}>
        <Object />
      </Suspense>
    </mesh>
  );
}
