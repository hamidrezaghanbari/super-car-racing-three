import { useEffect } from "react";
import useGame from "../../../stores/useGame";
import { useKeyboardControls } from "@react-three/drei";

export const useGameStart = () => {
  const start = useGame((state) => state.start);
  const [subscribeKeys] = useKeyboardControls()

  useEffect(() => {
    const unsubscribeAny = subscribeKeys(() => {
      start();
    });

    return () => {
      unsubscribeAny();
    };
  }, []);
};
