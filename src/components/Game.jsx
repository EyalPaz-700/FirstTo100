import React, { useEffect, useState } from "react";
import "../styles/game.css";
import GameCard from "./GameCard";
export default function Game({
  gameStatus,
  players,
  removeUser,
  addFinishedUser,
}) {
  const [currentTurn, setCurrentTurn] = useState(0);
  function changeTurn() {
    if (!checkGameEnd()) {
      setCurrentTurn(checkNextPlayer(currentTurn + 1));
    } else {
      console.log("Game Ended");
    }
  }

  function checkGameEnd() {
    return players.filter((el) => !el.didWin).length === 0;
  }

  function checkNextPlayer(counter) {
    if (counter > players.length - 1) {
      return checkNextPlayer(0);
    } else if (!players[counter].didWin) {
      return counter;
    }
    return checkNextPlayer(counter + 1);
  }

  return (
    <>
      <h2>
        {!checkGameEnd()
          ? gameStatus && players.length
            ? `Player ${currentTurn + 1}'s Turn`
            : ""
          : players.length
          ? "Game Ended"
          : ""}
      </h2>
      <div className="game-container">
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
              userFinished={() => addFinishedUser(player.name)}
              currentTurn={currentTurn}
              name={player.name}
              myIndex={index}
              key={index}
              winStatus={player.didWin}
              gameStatus={gameStatus}
            />
          );
        })}
      </div>
    </>
  );
}
