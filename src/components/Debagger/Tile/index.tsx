import React from "react";
import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number; y: number };
  text: number;
}

export const Tile = (props: IProps) => {
  const getTileColor = () => {
    switch (props.text) {
      case 0:
        return "yellow";
      case 1:
        return "red";
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
        fontSize: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.8,
      }}
    >
      {props.text}
    </div>
  );
};
