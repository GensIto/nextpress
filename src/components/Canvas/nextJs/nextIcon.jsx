import { Canvas } from "@react-three/fiber";

export default function NextIcon() {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <cylinderBufferGeometry
          attach="geometry"
          args={[2, 2, 0.3, 32, 1, false, 0, 8]}
        />
        <meshBasicMaterial attach="material" color="#f1f1f1" />
      </mesh>
    </Canvas>
  );
}
