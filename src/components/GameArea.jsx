import { OrbitControls, Plane } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import matrixGrid from "../assets/gridArea";
import blocks from "../assets/MatrixPieces";
import AssembledBlock from "../assets/AssembledBlock";
// import * as THREE from 'three'

// const GridUnit = ({ pos, size, color, rotating }) => {
//   // const ref = useRef();
//   return (
//     <>
//       <mesh position={pos} ref={ref}>
//         <boxGeometry />
//         <meshStandardMaterial
//           color={color}
//           wireframe={true}
//           transparent={true}
//         />
//       </mesh>
//     </>
//   );
// };

const GameArea = () => {
  // console.log({ blocks });
  let randomBlock = Object.keys(blocks);
  let blockDropDelay = 1500;
  // console.log({ randomBlock });
  let pickABlock = randomBlock[Math.floor(Math.random() * randomBlock.length)];
  // console.log({ pickABlock });
  let stackNextBlock = [
    { position: [0, 10, 0], color: "ff00c1" },
    // { position: [0, 20, 0], color: "fff300" },
  ];
  const [activeBlock, setActiveBlock] = useState(null);
  // const grid = matrixGrid;
  //esto puede necesitar un estado o zustand
  function dropAblock() {
    return (
      <>
        <AssembledBlock
          // {...props}
          key={pickABlock}
          falling={true}
          color={0x8000ff}
        ></AssembledBlock>
      </>
    );
  }
  useEffect(() => {
    setInterval(() => {}, blockDropDelay);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="bg-slate-800 h-full">
        <Canvas camera={{ position: [10, 10, 15], fov: 50 }}>
          {/* quitar para publicar */}
          <Perf />
          <ambientLight intensity={1.5} />
          <directionalLight
            intensity={1}
            position={[1, 1, 1]}
            castShadow
            shadow-mapSize={1048}
            // shadow-bias={-0.0001}
          />
          <OrbitControls
            autoRotateSpeed={8}
            // autoRotate={true}
            target={[1, 0, 0]}
          />
          <axesHelper args={[15]} />
          <gridHelper args={[20, 20, 0xff0000, "teal"]} />
          <Plane args={[20, 20]} rotation={[Math.PI / -2, 0, 0]}>
            <meshBasicMaterial color={0x262673} />
          </Plane>
          {/* ------------------------------- */}

          <AssembledBlock falling={true}></AssembledBlock>
          {/* {stackNextBlock.map((block, index) => (
            <AssembledBlock
              // {...props}
              key={index}
              position={block.position}
              falling={true}
              color={block.color}
            ></AssembledBlock>
          ))} */}

          {/* ------------------------------- */}
          {/* <group position={[0, 12, 1]} name="Lblock">
            {Lblock.map((position, index) => (
              <CubeUnit
                key={index}
                pos={position}
                falling={true}
                color={0xccf000}
              />
            ))}
          </group> */}
        </Canvas>
      </div>
    </>
  );
};

export default GameArea;
