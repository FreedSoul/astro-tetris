import { useEffect, useState } from "react";

const useBlockControls = () => {
  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    Space: "rotate",
  };

  const moveBlockByKey = (key) => keys[key];

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    rotate: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      setMovement((m) => ({ ...m, [moveBlockByKey(e.code)]: true }));
      console.log("keyDown")
    };
    const handleKeyUp = (e) => {
      setMovement((m) => ({ ...m, [moveBlockByKey(e.code)]: false }));
      console.log("keyUp")
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return movement;
};

export default useBlockControls;
