import { Wireframe } from "@react-three/drei";
import CubeUnit from "./CubeUnit";

const cubeSize = 1;
const cubeCount = 5;
let matrix: Array<Array<number>> = [];

// for (let x = 0; x < cubeCount; x++) {
//   for (let y = 0; y < cubeCount; y++) {
//     for (let z = 0; z < cubeCount; z++) {
//       console.log(x , y , z);
//       matrixGrid.push([x,y,z])
//     }
//   }
// }
matrix = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 0, 2],
  [0, 0, 3],
  [0, 0, 4],
  [0, 1, 0],
  [0, 1, 1],
  [0, 1, 2],
  [0, 1, 3],
  [0, 1, 4],
  [0, 2, 0],
  [0, 2, 1],
  [0, 2, 2],
  [0, 2, 3],
  [0, 2, 4],
  [0, 3, 0],
  [0, 3, 1],
  [0, 3, 2],
  [0, 3, 3],
  [0, 3, 4],
  [0, 4, 0],
  [0, 4, 1],
  [0, 4, 2],
  [0, 4, 3],
  [0, 4, 4],
  [1, 0, 0],
  [1, 0, 1],
  [1, 0, 2],
  [1, 0, 3],
  [1, 0, 4],
  [1, 1, 0],
  [1, 1, 1],
  [1, 1, 2],
  [1, 1, 3],
  [1, 1, 4],
  [1, 2, 0],
  [1, 2, 1],
  [1, 2, 2],
  [1, 2, 3],
  [1, 2, 4],
  [1, 3, 0],
  [1, 3, 1],
  [1, 3, 2],
  [1, 3, 3],
  [1, 3, 4],
  [1, 4, 0],
  [1, 4, 1],
  [1, 4, 2],
  [1, 4, 3],
  [1, 4, 4],
  [2, 0, 0],
  [2, 0, 1],
  [2, 0, 2],
  [2, 0, 3],
  [2, 0, 4],
  [2, 1, 0],
  [2, 1, 1],
  [2, 1, 2],
  [2, 1, 3],
  [2, 1, 4],
  [2, 2, 0],
  [2, 2, 1],
  [2, 2, 2],
  [2, 2, 3],
  [2, 2, 4],
  [2, 3, 0],
  [2, 3, 1],
  [2, 3, 2],
  [2, 3, 3],
  [2, 3, 4],
  [2, 4, 0],
  [2, 4, 1],
  [2, 4, 2],
  [2, 4, 3],
  [2, 4, 4],
  [3, 0, 0],
  [3, 0, 1],
  [3, 0, 2],
  [3, 0, 3],
  [3, 0, 4],
  [3, 1, 0],
  [3, 1, 1],
  [3, 1, 2],
  [3, 1, 3],
  [3, 1, 4],
  [3, 2, 0],
  [3, 2, 1],
  [3, 2, 2],
  [3, 2, 3],
  [3, 2, 4],
  [3, 3, 0],
  [3, 3, 1],
  [3, 3, 2],
  [3, 3, 3],
  [3, 3, 4],
  [3, 4, 0],
  [3, 4, 1],
  [3, 4, 2],
  [3, 4, 3],
  [3, 4, 4],
  [4, 0, 0],
  [4, 0, 1],
  [4, 0, 2],
  [4, 0, 3],
  [4, 0, 4],
  [4, 1, 0],
  [4, 1, 1],
  [4, 1, 2],
  [4, 1, 3],
  [4, 1, 4],
  [4, 2, 0],
  [4, 2, 1],
  [4, 2, 2],
  [4, 2, 3],
  [4, 2, 4],
  [4, 3, 0],
  [4, 3, 1],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 4],
  [4, 4, 0],
  [4, 4, 1],
  [4, 4, 2],
  [4, 4, 3],
  [4, 4, 4],
];

type hexadecimal = "Color" | undefined;

type matrixProps = {
  pos: number;
};

const MatrixGrid = ({ pos }: matrixProps) => {
  return (
    <>
      {/* <mesh position={pos}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} wireframe={true} transparent={true} />
        <Wireframe simplify={true} stroke={"#000"} />
      </mesh> */}
      <group position={[0, 0, 0]}  dispose={null}>
        {matrix.map((position, index) => (
          <CubeUnit key={index} pos={position} transparent={true} wireframe={true}/>
        ))}
      </group>
    </>
  );
};

export default MatrixGrid;
