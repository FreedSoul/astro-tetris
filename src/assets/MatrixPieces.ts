import type { ObjectType } from "typescript";

// I, O, T, S, Z, J, and L
const Iblock: Array<Array<number>> = [
  [0, 1, 0],
  [0, 2, 0],
  [0, 3, 0],
  [0, 4, 0],
];

const Oblock: Array<Array<number>> = [
  [0, 2, 0],
  [0, 1, 0],
  [1, 1, 0],
  [1, 2, 0],
//   para dar mas volumen al cubo
  [0, 2, 1],
  [0, 1, 1],
  [1, 1, 1],
  [1, 2, 1],
];

const Tblock: Array<Array<number>> = [
  [0, 1, 0],
  [0, 2, 0],
  [1, 2, 0],
  [-1, 2, 0],
];

const Sblock: Array<Array<number>> = [
  [0, 1, 0],
  [-1, 1, 0],
  [0, 2, 0],
  [1, 2, 0],
];

const Zblock: Array<Array<number>> = [
  [0, 1, 0],
  [-1, 2, 0],
  [0, 2, 0],
  [1, 1, 0],
];

const Lblock: Array<Array<number>> = [
  [0, 1, 0],
  [0, 2, 0],
  [0, 3, 0],
  [-1, 1, 0],
];

const Jblock: Array<Array<number>> = [
  [0, 1, 0],
  [0, 2, 0],
  [0, 3, 0],
  [1, 1, 0],
];

type BlockType = Array<Array<number>>; 
type Blockstruct = {
    [key: string]: BlockType;
}

const blocks:Blockstruct = {
  Jblock: Jblock,
  Lblock: Lblock,
  Oblock: Oblock,
  Iblock: Iblock,
  Tblock: Tblock,
  Zblock: Zblock,
  Sblock: Sblock,
};

export default blocks;
