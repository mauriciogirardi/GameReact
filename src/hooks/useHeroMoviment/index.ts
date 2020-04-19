import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection } from "../../settings/constants";
import { handleNextPosition } from "../../contexts/canvas/helpers";

const useHeroMoviment = (initialPosition: { x: number; y: number }) => {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener("keydown", (event: React.KeyboardEvent<HTMLDivElement>) => {
    const directionKey = event.key as EDirection;
    const nextPsition = handleNextPosition(directionKey, positionState);

    setDirection(directionKey);
    setPositionState(nextPsition);
  });

  return {
    positionState: positionState,
    direction: direction,
  };
};

export default useHeroMoviment;
