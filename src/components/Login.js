import React from "react";
import "./Login.css";

const Login = ({ setLogged, setUserName, setGameCode }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    setLogged(true);
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
