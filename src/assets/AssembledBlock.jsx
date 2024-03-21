import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import blocks from "../assets/MatrixPieces";
import CubeUnit from "./CubeUnit";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three"

const SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

const AssembledBlock = ({ color, active, blockType,lerp = THREE.MathUtils.lerp }) => {
  const BlockRef = useRef();
  let [fall, setFall] = useState(active);
  const [, get] = useKeyboardControls();
  useFrame((state, delta) => {
    const { forward, backward, left, right, rotate } = get()
    // const velocity = BlockRef.current.linvel()
    if (!fall) return;
    // if (ref.current == null) return;
    BlockRef.current.position.y > -1 ? BlockRef.current.position.y -= delta * 2 :setFall(false);
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
    // BlockRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
  });
  useEffect(() => {
    console.log(BlockRef.current)
    if (!fall) {
      setFall(true); // Restart falling process when cube reaches the bottom
    }
  }, [fall]);
  return (
    <>
      <group position={[0, 20, 0]} ref={BlockRef} dispose={null}>
        {blocks[blockType].map((position, index) => (
          <CubeUnit key={index} pos={position} color={color} />
        ))}
      </group>
    </>
  );
};

export default AssembledBlock;
