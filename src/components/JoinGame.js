import React from "react";
import "./JoinGame.css";
import { useState } from "react";
import CreateQuestion from "./CreateQuestion";

const JoinGame = ({ points, accName, setLogged, setUserName, setGameCode, userName, gameCode, setJenga, setCurrentPlayer }) => {

  const [ifCreate, setIfCreate] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/joingame",{
    method: 'POST',
    headers: {
      'Content-Type':"application/json"
    },
    body:JSON.stringify({userName:`${userName}: ${Math.floor(Math.sqrt(points))} lvl`, gameCode:gameCode}),
  })
  .then(res => res.json())
  .then(res => {
    setUserName(`${userName}: ${Math.floor(Math.sqrt(points))} lvl`)
    let myJenga = res.jenga
    setJenga(myJenga)
    let myCurrentPlayer = res.currentPlayer
    setCurrentPlayer(myCurrentPlayer)
    setLogged(true);
  })
  };

  const onCreate = () => {
    setIfCreate(true)
  }

  return (
    <div className="JoinGame">{!ifCreate ?
      <form onSubmit={onSubmit}>
        <label className="Label" htmlFor="userName">Username</label>
        <input
          className="TextBox"
          type="text"
          id="userName"
          placeholder={`${accName} (Default)`}
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
        <input className="SubmitOk" type="submit" value="Join party" />
        <div onClick={onCreate} className="OrCreateQuestions">Or create question</div>
      </form> : <CreateQuestion setIfCreate={setIfCreate} />}
    </div>
  );
};

export default JoinGame;
