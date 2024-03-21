import React from "react";
import DelayBlock from "./DelayBlock";

const speedStream = 8000

const queueBlocks = [
  { color: 0x8000ff, blockType: "Lblock" },
  { color: 0x8cccff, blockType: "Tblock" },
  { color: 0x8111ff, blockType: "Jblock" },
  { color: 0x8ff777, blockType: "Zblock" },
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
        <DelayBlock
          key={index}
          time={index * speedStream}
          blockType={block.blockType}
          color={block.color}
          active={true}
        />
      ))}
    </>
  );
};

export default BlockStream;
