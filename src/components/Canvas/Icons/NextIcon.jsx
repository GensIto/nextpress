import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene() {
  const TextureMap = useLoader(TextureLoader, "nextjs.jpg");
  const [clicked, setClicked] = useState(false);
  const handleSize = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight />
      <mesh onClick={handleSize} scale={clicked ? 1.3 : 1}>
        <planeBufferGeometry attach="geometry" args={[5, 5]} />
        <meshStandardMaterial map={TextureMap} color="#fff" />
      </mesh>
    </>
  );
}

export default function NextIcon() {
  return (
    <Canvas className="m-4 h-full">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
