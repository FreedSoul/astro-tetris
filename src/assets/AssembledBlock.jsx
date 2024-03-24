import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import blocks from "../assets/MatrixPieces";
import CubeUnit from "./CubeUnit";
import { useKeyboardControls } from "@react-three/drei";
import useBlockControls from "./MoveBlocks";
import * as THREE from "three";

// const SpeedDirection = 5;

const AssembledBlock = ({ color, active, blockType, time = 0 }) => {
  const [mounted, setMounted] = useState(false);
  const BlockRef = useRef();
  let [fall, setFall] = useState(active);
  const [, get] = useKeyboardControls();
  const { forward, backward, left, right, rotate } = useBlockControls();

  useEffect(() => {
    const blockTimeoutId = setTimeout(() => setMounted(true), time);
    return () => {
      clearTimeout(blockTimeoutId);
    };
  }, []);

  useEffect(() => {
    if (!fall) setFall(false);
  }, [fall]);

  useFrame((state, delta) => {
    // console.log(delta);
    if (!fall) return;
    // const { forward, backward, left, right, rotate } = get();
    if (BlockRef.current == null) return;
    
    BlockRef.current.position.y > 0
    ? (BlockRef.current.position.y -= delta * 2)
    : setFall(false);
    
    if (fall) {
      if (backward && BlockRef.current.position.z < 4) BlockRef.current.position.z += 0.1;
      console.log(BlockRef.current.position.z);
      // if (forward) BlockRef.current.position.z -= delta * SpeedDirection;
      if (forward && BlockRef.current.position.z > -4) BlockRef.current.position.z -= 0.1;
      if (right && BlockRef.current.position.x < 4) BlockRef.current.position.x += 0.1;
      if (left && BlockRef.current.position.x > -4) BlockRef.current.position.x -= 0.1;
      // if (rotate) BlockRef.current.rotation.z.set([0,0,4]);
      if (rotate) console.log('_z', BlockRef.current.rotation._z )
      if (rotate) BlockRef.current.rotation._z = Math.PI/2
      // if (rotate) BlockRef.current.rotation._x =1
    }
  });
  return (
    <>
      {mounted && (
        <group position={[0, 20, 0]}  ref={BlockRef} dispose={null}>
          {blocks[blockType].map((position, index) => (
            <CubeUnit key={index} pos={position} color={color} wireframe={false} />
          ))}
        </group>
      )}
    </>
  );
};

export default AssembledBlock;
