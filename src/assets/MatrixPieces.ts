import type { ObjectType } from "typescript";

// I, O, T, S, Z, J, and L
export const Iblock: Array<Array<number>> = [
  [0, 1, 0],
  [0, 2, 0],
  [0, 3, 0],
  [0, 4, 0],
];

export const Oblock: Array<Array<number>> = [
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

export const Tblock: Array<Array<number>> = [
  [0, 1, 0],
  [0, 2, 0],
  [1, 2, 0],
  [-1, 2, 0],
];

export const Sblock: Array<Array<number>> = [
  [0, 1, 0],
  [-1, 1, 0],
  [0, 2, 0],
  [1, 2, 0],
];

export const Zblock: Array<Array<number>> = [
  [0, 1, 0],
  [-1, 2, 0],
  [0, 2, 0],
  [1, 1, 0],
];

export const Lblock: Array<Array<number>> = [
  [0, 1, 0],
  [0, 2, 0],
  [0, 3, 0],
  [-1, 1, 0],
];

export const Jblock: Array<Array<number>> = [
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
