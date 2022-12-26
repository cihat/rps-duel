import Board from "./components/Board";
import "./App.css";
import { SCREEN } from "./constants";
import { useState } from "react";
import Lobby from "./components/Lobby";

export default function App() {
  const [screen, setScreen] = useState(SCREEN.LOBBY)
  const [score, setScore] = useState(0)
  const [userName, setUserName] = useState("")

  return (
    <div className="App">
      {
        screen === SCREEN.LOBBY ? (
          <Lobby userName={userName} setScreen={setScreen} setUsername={setUserName} />
        ) : (
          screen === SCREEN.GAME_OVER ? `Game Over! Score: ${score}`
            : (
              <Board userName={userName} setScore={setScore} setScreen={setScreen} />
            )
        )
      }
    </div>
  )
}
