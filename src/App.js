import "./App.css";
import QuizAndJenga from "./components/QuizAndJenga";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      {logged ? <QuizAndJenga /> : <Login setLogged={setLogged} />}
    </div>
  );
}

export default App;
