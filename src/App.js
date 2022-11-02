import "./App.css";
import QuizAndJenga from "./components/QuizAndJenga";
import Login from "./components/Login";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [jenga, setJenga] = useState();
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="App">
      {/* Username: {userName}
      <br/>
      GameCode: {gameCode} */}
      {logged ? (gameStarted?(<QuizAndJenga currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} jenga={jenga} userName={userName} gameCode={gameCode} />):(
        <div className="CenterLogin"><StartGame setGameStarted={setGameStarted} gameCode={gameCode} userName={userName} currentPlayer={currentPlayer} /></div>
      )
      ) : ( 
        <div className="CenterLogin">
          <Login
          setCurrentPlayer={setCurrentPlayer}
          setJenga={setJenga}
          userName={userName}
          gameCode={gameCode}
            setLogged={setLogged}
            setUserName={setUserName}
            setGameCode={setGameCode}
          />
        </div>
      )}
    </div>
  );
}

export default App;
