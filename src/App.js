import "./App.css";
import QuizAndJenga from "./components/QuizAndJenga";
import JoinGame from "./components/JoinGame";
import StartGame from "./components/StartGame";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [accName, setAccName] = useState("")
  const [password, setPassword] = useState("")
  const [accLogged, setAccLogged] = useState(false)
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
      {accLogged ? (logged ? (gameStarted?(<QuizAndJenga currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} jenga={jenga} userName={userName} gameCode={gameCode} />):(
        <div className="CenterLogin"><StartGame setGameStarted={setGameStarted} gameCode={gameCode} userName={userName} currentPlayer={currentPlayer} /></div>
      )
      ) : ( 
        <div className="CenterLogin">
          <JoinGame
          setCurrentPlayer={setCurrentPlayer}
          setJenga={setJenga}
          userName={userName}
          gameCode={gameCode}
            setLogged={setLogged}
            setUserName={setUserName}
            setGameCode={setGameCode}
          />
        </div>
      )) : (<div className="CenterLogin">
        <Login accName={accName} setAccName={setAccName} password={password} setPassword={setPassword} setAccLogged={setAccLogged} />
      </div>)}
    </div>
  );
}

export default App;
