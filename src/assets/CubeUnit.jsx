import { Wireframe } from "@react-three/drei";

const CubeUnit = ({ pos, size, color }) => {
  return (
    <>
      <mesh
        position={pos}
        //   ref={ref}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe={false}
          metalness={true}
        />
        <Wireframe simplify={true} stroke={"#000"} />
      </mesh>
    </>
  );
};

export default CubeUnit;