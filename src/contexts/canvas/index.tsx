import React, { createContext, useState, ReactNode } from "react";
import {
  canvas,
  handleNextPosition,
  checkValueMoviment,
  ECanvas,
} from "./helpers";
import { EDirection } from "../../settings/constants";
import { EWalker } from "../../settings/constants";

interface IProps {
  children: ReactNode;
}
export const CanvasContext = createContext({
  canvas: [],
  updateCanvas: (
    direction: EDirection,
    currentPosition: { x: number; y: number },
    walker: EWalker
  ) => null,
});

export const CanvasProvider = (props: IProps) => {
  const [canvasState, setCanvasState] = useState({
    canvas: canvas,
    updateCanvas: (
      direction: EDirection,
      currentPosition: { x: number; y: number },
      walker: EWalker
    ) => {
      const nextPosition = handleNextPosition(direction, currentPosition);
      const nextMove = checkValueMoviment(nextPosition, walker);

      if (nextMove.valid) {
        setCanvasState((prevState) => {
          const newCanvas = [...prevState.canvas];
          const currentValue = newCanvas[currentPosition.y][currentPosition.x];

          newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;
          newCanvas[nextPosition.y][nextPosition.x] = currentValue;

          return {
            canvas: newCanvas,
            updateCanvas: prevState.updateCanvas,
          };
        });
      }

      return {
        nextPosition,
        nextMove,
      };
    },
  });

  return (
    <CanvasContext.Provider value={canvasState}>
      {props.children}
    </CanvasContext.Provider>
  );
};
