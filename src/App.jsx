import { useState } from "react";
import Game from "./components/Game";
import GameFooter from "./components/GameFooter";
import "./App.css";

function App() {
  const [users, setUsers] = useState([/*localstorage*/]);
  /////
  function startGame() {}//!!
  /////
  function addNewPlayer(name) {
    const newUser = {name, averageScore:0, gameCount:0};
    setUsers([...users, newUser]);
  }
  return (
    <>
      <h1> First To 100 </h1>
      <Game />
      <GameFooter addNewPlayer={addNewPlayer} startGame={startGame} />
    </>
  );
}

export default App;
