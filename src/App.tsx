import React from "react";
import { GAME_SIZE } from "./settings/constants";
import Game from "./components/Game";

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
        <Game />
      </div>
    </div>
  );
}

export default App;
