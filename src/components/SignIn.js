import React from "react";
import "./Login.css";
import { useState } from "react";

const SignIn = ({ setPassword, password, accName, setAccName, setSigned }) => {
  const [validName, setValidName] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accName: accName, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        let valid = res.valid;
        if (valid) {
          setSigned(true);
        }else{
            setValidName(false)
        }
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className="Label" htmlFor="userName">
          Account name {!validName && <div className="Invalid">This name has already been used by someone else</div>}
        </label>
        <input
          className="TextBox"
          type="text"
          id="userName"
          placeholder="Account name"
          onChange={(e) => setAccName(e.target.value)}
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
        <input className="SubmitOk" type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default SignIn;
