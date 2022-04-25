import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene() {
  const TextureMap = useLoader(TextureLoader, "wordpress.jpg");
  const [clicked, setClicked] = useState(false);
  const handleSize = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight />
      <mesh onClick={handleSize} scale={clicked ? 1.1 : 1}>
        <planeBufferGeometry attach="geometry" args={[5, 5]} />
        <meshStandardMaterial map={TextureMap} color="#fff" />
      </mesh>
    </>
  );
}

export default function WordpressIcon() {
  return (
    <Canvas className="h-full">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
