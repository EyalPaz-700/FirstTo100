import React, { useEffect, useState } from "react";
import "../styles/game.css";

export default function GameCard({
  name,
  changeTurn,
  removeUser,
  myIndex,
  currentTurn,
}) {
  const [score, setScore] = useState(parseInt(Math.random() * 100));
  const [moves, setMoves] = useState(0);

  function handleMove(f) {
    f();
    setMoves((prev) => prev + 1);
    changeTurn();
  }
  return (
    <div className="game-card">
      <h4> {name}</h4>
      <h5> {score} </h5>
      <h6> {moves} </h6>
      {currentTurn === myIndex ? (
        <div className="operators">
          <button
            onClick={() => handleMove(() => setScore((prev) => prev + 1))}
          >
            + 1
          </button>
          <button
            onClick={() => handleMove(() => setScore((prev) => prev - 1))}
          >
            - 1
          </button>
          <button
            onClick={() =>
              handleMove(() => setScore((prev) => parseInt(prev * 2)))
            }
          >
            * 2
          </button>
          <button
            onClick={() =>
              handleMove(() => setScore((prev) => parseInt(prev / 2)))
            }
          >
            / 2
          </button>
        </div>
      ) : (
        <>
          <button onClick={removeUser}>Quit Game</button>
        </>
      )}
    </div>
  );
}
