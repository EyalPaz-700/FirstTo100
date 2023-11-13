import { useState } from "react";
import Game from "./components/Game";
import GameFooter from "./components/GameFooter";
import "./App.css";

function App() {

  function removePlayer(name) {
    setPlayers((prev) => {
      return prev.filter((el) => el.name !== name);
    });
  }
  const [players, setPlayers] = useState([/*localstorage*/]);
  /////
  function startGame() {}//!!
  /////
  function addNewPlayer(name) {
    const newUser = {name, averageScore:0, gameCount:0};
    setPlayers([...players, newUser]);
  }
  return (
    <>
      <h1> First To 100 </h1>
      <Game removeUser={removePlayer} players={players} />
      <GameFooter />
    </>
  );
}

export default App;
