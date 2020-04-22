import React from "react";
import { CanvasProvider } from "../../contexts/canvas";
// import { Debagger } from "../Debagger";
import Board from "../Board";
import ChestsProvider from "../../contexts/chests";

export default () => (
  <CanvasProvider>
    <ChestsProvider>
      {/* <Debagger /> */}
      <Board />
    </ChestsProvider>
  </CanvasProvider>
);
