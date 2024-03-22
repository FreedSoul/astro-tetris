import React from "react";
import AssembledBlock from "./AssembledBlock";

const speedStream = 8000;

const queueBlocks = [
  { color: 0x8000ff, blockType: "Lblock" },
  { color: 0x8cccff, blockType: "Tblock" },
  { color: 0x8111ff, blockType: "Oblock" },
  { color: 0x8ff777, blockType: "Iblock" },
  { color: 0x8ff777, blockType: "Oblock" },
  { color: 0x8ff666, blockType: "Zblock" },
  { color: 0x8ff111, blockType: "Jblock" },
  { color: 0x111777, blockType: "Lblock" },
  { color: 0x000777, blockType: "Tblock" },
  { color: 0xaaa777, blockType: "Zblock" },
  { color: 0x886768, blockType: "Iblock" },
  { color: 0xaff7ff, blockType: "Lblock" },
];
// let randomBlock = Object.keys(blocks);
// let pickABlock = () => randomBlock[Math.floor(Math.random() * randomBlock.length)];
// function genQueueBlocks() {
//     for (let index = 0; index < 10; index++) {
//         queueBlocks.push(pickABlock())
//     }
//     console.log({ queueBlocks })
// }
// genQueueBlocks()

const BlockStream = () => {
  return (
    <>
      {queueBlocks.map((block, index) => (
        <AssembledBlock
          key={index}
          blockType={block.blockType}
          active={true}
          color={block.color}
          time={index * speedStream}
        ></AssembledBlock>
      ))}
    </>
  );
};

export default BlockStream;
