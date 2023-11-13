import { useState } from "react";
import Game from "./components/Game";
import GameFooter from "./components/GameFooter";
import "./App.css";

function App() {
  return (
    <>
      <h1> First To 100 </h1>
      <Game />
      <GameFooter />
    </>
  );
}

export default App;
