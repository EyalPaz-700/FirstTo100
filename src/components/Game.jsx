import React from "react";
import "../styles/game.css";
import GameCard from "./GameCard";
export default function Game() {
  return (
    <div className="game-container">
      <GameCard />

      <GameCard />
    </div>
  );
}
