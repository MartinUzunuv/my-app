import React from "react";
import "./Login.css";

const Login = ({ setLogged, setUserName, setGameCode, userName, gameCode, setJenga, setCurrentPlayer }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/login",{
    method: 'POST',
    headers: {
      'Content-Type':"application/json"
    },
    body:JSON.stringify({userName:userName, gameCode:gameCode}),
  })
  .then(res => res.json())
  .then(res => {
    let myJenga = res.jenga
    setJenga(myJenga)
    let myCurrentPlayer = res.currentPlayer
    setCurrentPlayer(myCurrentPlayer)
    setLogged(true);
  })
  };

  return (
    <div className="Login">
      <form onSubmit={onSubmit}>
        <label className="Label" htmlFor="userName">Username</label>
        <input
          className="TextBox"
          type="text"
          id="userName"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="Label" htmlFor="gameCode">Game Code</label>
        <input
          className="TextBox"
          type="text"
          id="gameCode"
          placeholder="Party code"
          onChange={(e) => setGameCode(e.target.value)}
        />
        <input className="SubmitOk" type="submit" value="OK" />
      </form>
    </div>
  );
};

export default Login;
