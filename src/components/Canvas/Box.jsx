import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Box = (props) => {
  const ref = useRef();
  const [clicked,setClicked] = useState(false);
  const [hovered,setHovered] = useState(false);

  useFrame(() => (ref.current.rotation.x += 0.01));
  useFrame(() => (ref.current.rotation.y += 0.01));
  useFrame(() => (ref.current.rotation.z += 0.01));

  return (
    <mesh
      ref={ref}
      {...props}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? 1.3 : 1 }
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color={hovered ? "hotpink" : "orange" }/>
    </mesh>
  );
}

export default Box;