import "./App.css";
import QuizAndJenga from "./components/QuizAndJenga";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [jenga, setJenga] = useState();

  return (
    <div className="App">
      Username: {userName}
      <br/>
      GameCode: {gameCode}
      {logged ? (
        <QuizAndJenga jenga={jenga} userName={userName} gameCode={gameCode} />
      ) : (
        <div className="CenterLogin">
          <Login
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
