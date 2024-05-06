import { Html, useGLTF } from "@react-three/drei";

const Loader = () => {
  const { scene } = useGLTF("./models/loading/scene.gltf");

  console.log(scene);

  return (
    <mesh>
      <primitive object={scene} scale={0.4} position={[0, -3.25, -1.5]} />
    </mesh>
  );
};

export default Loader;
