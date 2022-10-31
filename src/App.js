import "./App.css";
import QuizAndJenga from "./components/QuizAndJenga";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [gameCode, setGameCode] = useState("");

  return (
    <div className="App">
      Username: {userName}
      <br/>
      GameCode: {gameCode}
      {logged ? (
        <QuizAndJenga />
      ) : (
        <div className="CenterLogin">
          <Login
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
