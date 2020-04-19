import { useState } from "react";
import useInterval from "@use-it/interval";
import { EDirection } from "../../settings/constants";
import { handleNextPosition } from "../../contexts/canvas/helpers";

const useEnemyMoviment = (initialPosition: { x: number; y: number }) => {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    let random = Math.floor(Math.random() * 4);
    let directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextPsition = handleNextPosition(randomDirection, positionState);

    setDirection(randomDirection);
    setPositionState(nextPsition);
  }, 2000);

  return {
    positionState: positionState,
    direction: direction,
  };
};

export default useEnemyMoviment;
