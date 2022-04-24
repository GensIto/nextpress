import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import { Model } from "./Model";
const CanvasBox = () => {
  return (
    <Canvas camera={{ fov: 50, position: [0, 3, 10] }}>
      {/* <Box position={[-1.5,0,0]} />
          <Box position={[1.5,0,0]} />
          <Box position={[0,0,1.5]} />
          <Box position={[0,0,-1.5]} /> */}
      <Model position={[0, -2, 0]} />
      {/* <OrbitControls/> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
    </Canvas>
  );
};

export default CanvasBox;
