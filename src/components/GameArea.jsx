import { Canvas } from "@react-three/fiber";
import React from "react";
// import * as THREE from 'three'

const GameArea = () => {
  return (
    <>
      <div class="bg-slate-800 h-full">
      {/* <h2 className="text-slate-100"> */}
      <Canvas camera={{ position: [10, 10, 15.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={1}
          position={[5, 5, 5]}
          castShadow
          shadow-mapSize={2048}
          shadow-bias={-0.0001}
        />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
      {/* <span>&rarr;</span> */}
      {/* </h2> */}
      </div>
    </>
  );
};

export default GameArea;
