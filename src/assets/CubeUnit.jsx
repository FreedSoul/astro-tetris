import { Grid, Wireframe } from "@react-three/drei";

const CubeUnit = ({ pos, transparent, color = 0xaaaaa, wireframe }) => {
  return (
    <>
      <mesh position={pos}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={color}/>
        <Wireframe simplify={true} strokeOpacity={1} stroke={"#000"} transparent={true}/>
      </mesh>
    </>
  );
};

export default CubeUnit;
