import React, { useState } from "react";
import AddUser from "./AddUser";

export default function GameFooter({ startGame, addNewPlayer }) {
  const [onDisplay, setOnDisplay] = useState(false);
  function closeDisplay() {
    setOnDisplay(false);
  }
  return (
    <div className="game-footer">
      <button
        onClick={() => {
          setOnDisplay(true);
        }}
      >
        new player
      </button>
      <button onClick={startGame}>start game</button>
      <AddUser closeDisplay={closeDisplay} addNewPlayer={addNewPlayer} onDisplay={onDisplay}></AddUser>
    </div>
  );
}
