import React, { useState } from "react";
import AddUser from "./AddUser";
import "../styles/footer.css";
export default function GameFooter({
  toogleGameMode,
  gameStatus,
  addNewPlayer,
}) {
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
        New Player
      </button>
      <button onClick={toogleGameMode}>
        {" "}
        {gameStatus ? "End Game" : "Start Game"}
      </button>
      <AddUser
        closeDisplay={closeDisplay}
        addNewPlayer={addNewPlayer}
        onDisplay={onDisplay}
      ></AddUser>
    </div>
  );
}
