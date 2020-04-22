import React, { useContext } from "react";
import Hero from "../Hero";
import MiniDemon from "../MiniDemon";
import Demon from "../Demon";
import Trap from "../Trap";
import Chest from "../Chest";
import { canvas, ECanvas } from "../../contexts/canvas/helpers";
import { GAME_SIZE } from "../../settings/constants";
import { ChestsContext } from "../../contexts/chests";

const getCanvasMap = () => {
  const elementArray = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${y}-${x}`;

      if (text === ECanvas.HERO) {
        elementArray.push(<Hero key={key} initialPosition={position} />);
      }

      if (text === ECanvas.MINI_DEMO) {
        elementArray.push(<MiniDemon key={key} initialPosition={position} />);
      }

      if (text === ECanvas.DEMO) {
        elementArray.push(<Demon key={key} initialPosition={position} />);
      }

      if (text === ECanvas.TRAP) {
        elementArray.push(<Trap key={key} initialPosition={position} />);
      }

      if (text === ECanvas.CHEST) {
        elementArray.push(<Chest key={key} initialPosition={position} />);
      }
    }
  }

  return elementArray;
};

const elementArray = getCanvasMap();

export default () => {
  const chestsContext = useContext(ChestsContext);

  return (
    <>
      {elementArray}

      {chestsContext.totalChest === chestsContext.opendChests.total && (
        <img
          src="./assets/DOOR-OPEN.png"
          alt="door opened"
          style={{
            position: "absolute",
            left: 575,
            top: 0,
          }}
        />
      )}

      <img
        src="./assets/tileset.gif"
        alt="board"
        width={GAME_SIZE}
        height={GAME_SIZE}
      />
    </>
  );
};
