import React, { useState } from "react";
import "../styles/game.css";
import GameCard from "./GameCard";
export default function Game({ players, removeUser }) {
  const [currentTurn, setCurrentTurn] = useState(0);
  function changeTurn() {
    if (currentTurn >= players.length - 1) {
      setCurrentTurn(0);
    } else {
      setCurrentTurn((prev) => prev + 1);
    }
  }
  return (
    <div className="game-container">
      {currentTurn}
      {players.map((player, index) => {
        return (
          <GameCard
            removeUser={() => {
              if (currentTurn > index) {
                setCurrentTurn((prev) => prev - 1);
              }
              removeUser(player.name);
            }}
            changeTurn={changeTurn}
            currentTurn={currentTurn}
            name={player.name}
            myIndex={index}
            key={index}
          />
        );
      })}
    </div>
  );
}
