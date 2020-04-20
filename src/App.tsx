import React from "react";
import Board from "./components/Board";
import { GAME_SIZE } from "./settings/constants";
import { Debagger } from "./components/Debagger";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "relative",
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
      >
        <Debagger />
        <Board />
      </div>
    </div>
  );
}

export default App;
