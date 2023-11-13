import { useState } from "react";
import Game from "./components/Game";
import GameFooter from "./components/GameFooter";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([
    {
      name: "eyal",
    },
    {
      name: "shlomo",
    },
    {
      name: "paz",
    },
  ]);

  function removePlayer(name) {
    setPlayers((prev) => {
      return prev.filter((el) => el.name !== name);
    });
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
