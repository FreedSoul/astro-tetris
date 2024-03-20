import React from "react";
import DelayBlock from "./DelayBlock";

const queueBlocks = [
  { delay: 1500, color: 0x8000ff, blockType: "Lblock" },
  { delay: 1500, color: 0x8cccff, blockType: "Tblock" },
  { delay: 1500, color: 0x8111ff, blockType: "Jblock" },
  { delay: 1500, color: 0x8ff777, blockType: "Zblock" },
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
          time={index * block.delay}
          blockType={block.blockType}
          color={block.color}
          active={true}
        />
      ))}
      {/* console.log("time = ", index, "*", block.delay) */}
      {console.log("estoy en Blockstream")}
    </>
  );
};

export default BlockStream;
