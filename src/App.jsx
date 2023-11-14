import { useEffect, useState } from "react";
import Game from "./components/Game";
import GameFooter from "./components/GameFooter";
import "./App.css";

function App() {
  function removePlayer(name) {
    setPlayers((prev) => {
      return prev.filter((el) => el.name !== name);
    });
  }
  function changePlayersStatus(playersArr) {
    const copy = [...playersArr];
    copy.map((elm)=>{
      elm.didWin = false;
      return elm;
    });
    return copy;
  }
  const [players, setPlayers] = useState(
    // changePlayersStatus(JSON.parse(localStorage.getItem("players"))) || []
    []
  );
  const [gameStatus, setGameStatus] = useState(false);

  function toogleGameMode() {
    setGameStatus((prev) => {
      if (prev) {
        setPlayers([]);
      }
      return !prev;
    });
  }
  function addNewPlayer(name) {
    const newUser = { name, averageScore: 0, gameCount: 0, didWin: false };
    const newGamePlayers = [...players, newUser];
    const oldPlayers = changePlayersStatus(JSON.parse(localStorage.getItem("players"))) || [];
   
    let playerFound= false;
    const allPlayers = oldPlayers.forEach(element => {
        if (element.name ===newGamePlayers[newGamePlayers.length-1].name) {
          playerFound = true;
          newGamePlayers[newGamePlayers.length-1].averageScore = element.averageScore;
          newGamePlayers[newGamePlayers.length-1].gameCount = element.gameCount;
        }
    });
    if(!playerFound){
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
      />
    </>
  );
}

export default App;
