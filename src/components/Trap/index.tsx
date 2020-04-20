import React from "react";
import { TILE_SIZE } from "../../settings/constants";
import "./index.css";

interface IProps {
  initialPosition: { x: number; y: number };
}

export default (props: IProps) => {
  return (
    <div
      style={{
        animation: "trap-anomation 1s steps(8) infinite",
        backgroundImage: "url(./assets/TRAP.png)",
        backgroundRepeat: "no-repeat",
        width: TILE_SIZE,
        height: 100,
        position: "absolute",
        top: TILE_SIZE * props.initialPosition.y,
        left: TILE_SIZE * props.initialPosition.x,
      }}
    />
  );
};
