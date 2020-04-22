import React, { useContext } from "react";
import { Tile } from "./Tile";
import { CanvasContext } from "../../contexts/canvas";

const getCanvasMap = (canvas: string | any[]) => {
  const tileArray = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${y}-${x}`;

      tileArray.push(<Tile key={key} position={position} text={text} />);
    }
  }

  return tileArray;
};

export const Debagger = () => {
  const canvasContext = useContext(CanvasContext);
  const tiles = getCanvasMap(canvasContext.canvas);

  return <div>{tiles}</div>;
};
