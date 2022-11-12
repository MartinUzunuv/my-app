import React from "react";
import "./Login.css";
import { useState } from "react";
import SignIn from "./SignIn";

const Login = ({
  setUserName,
  setAccLogged,
  setPassword,
  password,
  accName,
  setAccName,
  setPoints,
}) => {
  const [signed, setSigned] = useState(true);
  const [validLogin, setValidLogin] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/acclogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accName: accName, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        let valid = res.valid;
        let myPoints = res.points;
        if (valid) {
          setAccLogged(true);
          setPoints(myPoints)
        } else {
          setValidLogin(false);
        }
      });
  };

  const onClick = () => {
    setSigned(false);
  };

  return (
    <div className="Login">
      {signed ? (
        <form onSubmit={onSubmit}>
          <label className="Label" htmlFor="userName">
            {!validLogin && (
              <div className="Invalid">Username or password incorrecr</div>
            )}
            Account name
          </label>
          <input
            className="TextBox"
            type="text"
            id="userName"
            placeholder="Account name"
            onChange={(e) => {
              setAccName(e.target.value);
              setUserName(e.target.value);
            }}
          />
          <label className="Label" htmlFor="gameCode">
            Password
          </label>
          <input
            className="TextBox"
            type="text"
            id="gameCode"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="Label">
            Don't have an account?{" "}
            <div onClick={onClick} className="SignIn">
              Sign in.
            </div>
          </label>
          <input className="SubmitOk" type="submit" value="Log in" />
        </form>
      ) : (
        <SignIn
          setSigned={setSigned}
          accName={accName}
          setAccName={setAccName}
          password={password}
          setPassword={setPassword}
        />
      )}
    </div>
  );
};

export default Login;
