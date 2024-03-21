import React, { useEffect, useState } from "react";
import AssembledBlock from "./AssembledBlock";

const DelayBlock = ({
  blockType,
  active,
  color,
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
            // key={key}
            blockType={blockType}
            active={active}
            color={color}
        ></AssembledBlock>
      )}
    </>
  );
};

export default DelayBlock;
