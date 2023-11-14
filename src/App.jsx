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
  const [players, setPlayers] = useState([]);
  const [gameStatus, setGameStatus] = useState(false);
  /////
  function toogleGameMode() {
    setGameStatus((prev) => !prev);
  } //!!
  /////
  function addNewPlayer(name) {
    const newUser = { name, averageScore: 0, gameCount: 0, didWin: false };
    setPlayers([...players, newUser]);
  }

  function changeWinStatus(userName) {
    setPlayers((prev) => {
      const copy = [...prev];
      const result = copy.find(({ name }) => name === userName);
      result.didWin = true;
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
