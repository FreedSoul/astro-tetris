import { Grid, Wireframe } from "@react-three/drei";
// import { useControls } from "leva";

const GridMatrixUnit = ({ pos, transparent, color = 0xaaaaa, wireframe }) => {
  return (
    <>
      <mesh position={pos}>
        <boxGeometry args={[1, 1, 1]} />
        {/* <wireframeGeometry args={[1, 1, 1]}/> */}
        {/* <meshPhongMaterial  alphaHash={true}  transparent={true}/> */}
        <meshBasicMaterial />
        <Wireframe
          fill={"#000"}
          fillMix={1}
          fillOpacity={0.001}
          stroke={"#000"}
          strokeOpacity={0.2}
          simplify={true}
          backfaceStroke={"#000"}
          thickness={0.1}
          transparent={true}
        //   dash={true}
        //   dashRepeats={1} 
        //   dashLength={1}
        />
      </mesh>
    </>
  );
};

export default GridMatrixUnit;
