import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene() {
  const wordpressMap = useLoader(TextureLoader, "wordpress.jpg");
  const [isClicked, setIsClicked] = useState(false);
  const handleSize = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight />
      <mesh onClick={handleSize} scale={isClicked ? 1.3 : 1}>
        <planeBufferGeometry attach="geometry" args={[5, 5]} />
        <meshStandardMaterial map={wordpressMap} color="#fff" />
      </mesh>
    </>
  );
}

export default function WordpressIcon() {
  return (
    <Canvas className="m-4 h-full">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
