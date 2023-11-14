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
    changePlayersStatus(JSON.parse(localStorage.getItem("players"))) || []
  );
  const [gameStatus, setGameStatus] = useState(false);
  function toogleGameMode() {
    setGameStatus((prev) => !prev);
  }
  function addNewPlayer(name) {
    const newUser = { name, averageScore: 0, gameCount: 0, didWin: false };
    const newGamePlayers = [...players, newUser];
    const oldPlayers = changePlayersStatus(JSON.parse(localStorage.getItem("players"))) || [];
    console.log('newUser: ', newUser);
    console.log('newGamePlayers: ', newGamePlayers);
    console.log('oldPlayers: ', oldPlayers);
    
    const allPlayers = oldPlayers.forEach(element => {
      
        if (element.name ===newGamePlayers[newGamePlayers.length-1].name) {
          console.log('newGamePlayers[i]: ', newGamePlayers[i]);
          console.log('element: ', element);
          newGamePlayers[i].averageScore = element.averageScore;
          newGamePlayers[i].gameCount = gameCount;
        }
      
    });
    setPlayers(allPlayers || newGamePlayers);
    localStorage.setItem("players", JSON.stringify(allPlayers || newGamePlayers));
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
      localStorage.setItem("players", JSON.stringify(copy));
      return copy;
    });
  }
  return (
    <>
      <h1> First To 100 </h1>
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
