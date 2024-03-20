import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import blocks from "../assets/MatrixPieces";
import CubeUnit from "./CubeUnit";

// let blockList = Object.keys(blocks);

// let pickABlock = blockList[Math.floor(Math.random() * blockList.length)];

const AssembledBlock = ({ size, color, active, setActiveBlock, blockType }) => {
  const ref = useRef();
  let [fall, setFall] = useState(active);
  // let pickedBlock = () => pickABlock;
  // let [newBlock, setNewBlock] = useState(pickABlock());
  // let blockType = () => () => blocks[pickABlock()];
  // console.log(blockType);
  useFrame((state, delta) => {
    // if (falling && ref.current.position.y >= 0)
    //   ref.current.position.y -= delta * 2;
    // if (ref.current.position.y == 1) anotherBlock = true;
    // --------------------
    if (!fall) return;
    if (ref.current == null) return;
    // Update cube position on each frame
    if (ref.current.position.y > 0) {
      ref.current.position.y -= delta * 4; // Adjust falling speed here
      // console.log({ newBlock });
    } else {
      setFall(false); // Stop falling when it reaches [0, 0, 0]
      // setActiveBlock(false);
      // console.log(ref.current.uuid); // Trigger action when cube reaches the bottom
      // setNewBlock(pickABlock()); // Restart falling process when cube reaches the bottom
    }
  });
  useEffect(() => {
    // console.log(pickedBlock());
    // console.log({pickABlock});
    if (!fall) {
      // ref.current.visible = false// Trigger action when cube reaches the bottom
      // ref.current.position.y = 10; // Reset cube position to [0, 0, 0]
      // console.log(ref.current.dispose)
      // console.log({ newBlock });
      setFall(true); // Restart falling process when cube reaches the bottom
    }
    console.log({ blockType });
    console.log(fall);
  }, [fall]);
  return (
    <>
      <group position={[0, 20, 0]} ref={ref} dispose={null}>
        {blocks[blockType].map((position, index) => (
          <CubeUnit key={index} pos={position} color={color} />
        ))}
      </group>
    </>
  );
};

export default AssembledBlock;
