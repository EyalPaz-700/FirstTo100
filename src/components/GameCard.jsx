import React, { useEffect, useState } from "react";
import "../styles/game.css";

export default function GameCard({
  name,
  changeTurn,
  removeUser,
  myIndex,
  currentTurn,
  userFinished,
  winStatus,
  gameStatus,
}) {
  const [score, setScore] = useState(parseInt(Math.random() * 100));
  const [moves, setMoves] = useState(0);
  const gameEnd = score === 100;
  function handleMove(f) {
    f();
    setMoves((prev) => prev + 1);
    changeTurn();
  }

  if (gameEnd && !winStatus) {
    userFinished(moves);
    changeTurn();
  }

  let cardBody = <> </>;
  if (!winStatus) {
    if (currentTurn === myIndex) {
      cardBody = (
        <div className="operators">
          <button
            disabled={!gameStatus}
            onClick={() => handleMove(() => setScore((prev) => prev + 1))}
          >
            + 1
          </button>
          <button
            disabled={!gameStatus}
            onClick={() => handleMove(() => setScore((prev) => prev - 1))}
          >
            - 1
          </button>
          <button
            disabled={!gameStatus}
            onClick={() =>
              handleMove(() => setScore((prev) => parseInt(prev * 2)))
            }
          >
            * 2
          </button>
          <button
            disabled={!gameStatus}
            onClick={() =>
              handleMove(() => setScore((prev) => parseInt(prev / 2)))
            }
          >
            / 2
          </button>
        </div>
      );
    } else {
      cardBody = (
        <>
          <button onClick={removeUser}>Quit Game</button>
        </>
      );
    }
  }
  return (
    <div className="game-card">
      <h4> {name}</h4>
      <h5> {score} </h5>
      <h6> {moves} </h6>
      {cardBody}
    </div>
  );
}
