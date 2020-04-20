import React from "react";
import { TILE_SIZE } from "../../../settings/constants";
import { ECanvas } from "../../../contexts/canvas/helpers";

interface IProps {
  position: { x: number; y: number };
  text: number;
}

export const Tile = (props: IProps) => {
  const getTileColor = () => {
    switch (props.text) {
      case ECanvas.FLOOR:
        return "darkgrey";
      case ECanvas.WALL:
        return "yellow";
      case ECanvas.HERO:
        return "magenta";
      case ECanvas.CHEST:
        return "blue";
      case ECanvas.DOOR:
        return "white";
      case ECanvas.DEMO:
      case ECanvas.MINI_DEMO:
        return "red";

      case ECanvas.TRAP:
        return "chartreuse";
    }
  };

  const color = getTileColor();

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
        left: 48 * props.position.x,
        top: 48 * props.position.y,

        position: "absolute",
        border: `1px solid ${color}`,
        color: color,
        fontSize: 32,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      {props.text}
    </div>
  );
};
