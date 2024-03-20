import { OrbitControls, Plane } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import matrixGrid from "../assets/gridArea";
import BlockStream from "../assets/BlockStream";

const GameArea = () => {
  const [playing, setPlaying] = useState(true);
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
          />
          <OrbitControls
            autoRotateSpeed={8}
            minDistance={40}
            minPolarAngle={Math.PI / 4}
            // autoRotate={true}
            target={[1, 0, 0]}
          />
          <axesHelper args={[15]} />
          <gridHelper args={[20, 20, 0xff0000, "teal"]} />
          <Plane args={[20, 20]} rotation={[Math.PI / -2, 0, 0]}>
            <meshBasicMaterial color={0x262673} />
          </Plane>
          {/* ------------------------------- */}
          {playing && <BlockStream />}
        </Canvas>
      </div>
    </>
  );
};

export default GameArea;
