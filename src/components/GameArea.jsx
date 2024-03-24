import {
  Environment,
  KeyboardControls,
  OrbitControls,
  Plane,
  Sky,
  Wireframe,
  useKeyboardControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useMemo, useRef, useState } from "react";
import MatrixGrid from "../assets/gridArea";
import BlockStream from "../assets/BlockStream";
import * as THREE from "three";

const GameArea = () => {
  const [playing, setPlaying] = useState(true);
  
  return (
    <>
      <div className="bg-slate-800 h-full">
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "rotate", keys: ["Space"] },
          ]}
        >
          <Canvas
            // onCreated={({ scene }) => (scene.background = new Color("lightblue"))}
            camera={{ position: [10, 10, 15], fov: 50 }}
            // orthographic={true}
          >
            {/* <Sky sunPosition={[100, 0, 100]} /> */}
            <Environment preset="city" background blur={0.5} />
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
              minDistance={20}
              minPolarAngle={Math.PI / 6}
              // autoRotate={true}
              target={[1, 0, 0]}
            />
            <axesHelper args={[15]} />
            <gridHelper args={[20, 20, 0xff0000, "teal"]} />
            <Plane args={[10, 10]} rotation={[Math.PI / -2, 0, 0]} position={[0,0,0]}>
              <meshBasicMaterial color={0xFF0113} />
            </Plane>
            {/* <MatrixGrid/> */}
            {/* ------------------------------- */}
            {playing && <BlockStream />}
          </Canvas>
        </KeyboardControls>
      </div>
    </>
  );
};

export default GameArea;
