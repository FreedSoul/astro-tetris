import React, { useEffect, useState } from "react";
import AssembledBlock from "./AssembledBlock";

const DelayBlock = ({
  key,
  blockType,
  active,
  color,
  setActiveBlock,
  time = 0,
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const blockTimeoutId = setTimeout(() => setMounted(true), time);
    return () => {
      clearTimeout(blockTimeoutId);
    };
  }, []);
  return (
    <>
      {mounted && (
        <AssembledBlock
        //   {...props}
            key={key}
            blockType={blockType}
            active={active}
            color={color}
            setActiveBlock={setActiveBlock}
        ></AssembledBlock>
      )}
    </>
  );
};

export default DelayBlock;
