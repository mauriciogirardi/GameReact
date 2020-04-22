import { useState, useContext } from "react";
import useInterval from "@use-it/interval";
import { EDirection, EWalker } from "../../settings/constants";
import { CanvasContext } from "../../contexts/canvas";

export default (initialPosition: { x: number; y: number }) => {
  const canvasContext = useContext(CanvasContext);
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    let random = Math.floor(Math.random() * 4);
    let directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const { nextMove, nextPosition } = canvasContext.updateCanvas(
      randomDirection,
      positionState,
      EWalker.ENEMY
    );

    if (nextMove.valid) {
      setDirection(randomDirection);
      setPositionState(nextPosition);
    }
  }, 2000);

  return {
    positionState: positionState,
    direction: direction,
  };
};
