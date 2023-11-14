import { useState } from "react";
import Game from "./components/Game";
import GameFooter from "./components/GameFooter";
import "./App.css";

function App() {
  const [players, setPlayers] = useState(
    // changePlayersStatus(JSON.parse(localStorage.getItem("players"))) || []
    []
  );
  const [gameStatus, setGameStatus] = useState(false);

  function removePlayer(name) {
    setPlayers((prev) => {
      return prev.filter((el) => el.name !== name);
    });
  }
  function changePlayersStatus(playersArr) {
    const copy = [...playersArr];
    if (copy.length > 0) {
      copy.map((elm) => {
        if (typeof elm.didWin === "boolean") {
          elm.didWin = false;
        }
        return elm;
      });
    }
    return copy;
  }
  function updatePlayersInStorage() {
    const oldPlayers = changePlayersStatus(
      JSON.parse(localStorage.getItem("players")) || []
    );
    localStorage.setItem(
      "players",
      JSON.stringify(
        oldPlayers.map((fromStorage) => {
          let playerFound = false;
          for (let player of players) {
            if (fromStorage.name === player.name) {
              playerFound = true;
              return player;
            }
          }
          if (!playerFound) {
            return fromStorage;
          }
        })
      )
    );
  }
  function toogleGameMode() {
    setGameStatus((prev) => {
      if (prev) {
        updatePlayersInStorage();
        setPlayers([]);
      }
      return !prev;
    });
  }
  function addNewPlayer(name) {
    const newUser = { name, averageScore: 0, gameCount: 0, didWin: false };
    const newGamePlayers = [...players, newUser];
    const oldPlayers = changePlayersStatus(
      JSON.parse(localStorage.getItem("players")) || []
    );

    let playerFound = false;
    const allPlayers = oldPlayers.forEach((element) => {
      if (element.name === newGamePlayers[newGamePlayers.length - 1].name) {
        playerFound = true;
        newGamePlayers[newGamePlayers.length - 1].averageScore =
          element.averageScore;
        newGamePlayers[newGamePlayers.length - 1].gameCount = element.gameCount;
      }
    });
    if (!playerFound) {
      oldPlayers.push(newUser);
    }
    setPlayers(allPlayers || newGamePlayers);
    localStorage.setItem("players", JSON.stringify(oldPlayers));
  }

  function changeWinStatus(userName, score) {
    setPlayers((prev) => {
      const copy = [...prev];
      const result = copy.find(({ name }) => name === userName);
      result.didWin = true;
      result.averageScore =
        (result.averageScore * result.gameCount + score) /
        (result.gameCount + 1);
      result.gameCount++;
      // localStorage.setItem("players", JSON.stringify(copy));
      return copy;
    });
  }
  return (
    <>
      <h1 id="game-header"> First To 100 </h1>
      <Game
        removeUser={removePlayer}
        players={players}
        setPlayers={setPlayers}
        addFinishedUser={changeWinStatus}
        gameStatus={gameStatus}
      />
      <GameFooter
        addNewPlayer={addNewPlayer}
        toogleGameMode={toogleGameMode}
        gameStatus={gameStatus}
        changePlayersStatus={changePlayersStatus}
        players={players}
      />
    </>
  );
}

export default App;
