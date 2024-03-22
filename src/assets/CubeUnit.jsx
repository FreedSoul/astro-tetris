import { Wireframe } from "@react-three/drei";

const CubeUnit = ({ pos, transparent, color = 0xaaaaa, wireframe }) => {
  return (
    <>
      <mesh
        position={pos}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe={wireframe}
          transparent={transparent}
        />
        <Wireframe simplify={true} stroke={""} />
      </mesh>
    </>
  );
};

export default CubeUnit;