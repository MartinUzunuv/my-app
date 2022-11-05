import React from "react";
import "./StartGame.css";

const StartGame = ({ currentPlayer, userName, gameCode, setGameStarted }) => {

  let inter = setInterval(() => {
    if(!(currentPlayer === userName)){
      fetch("http://localhost:9000/checkstarted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameCode: gameCode,
      }),
    })
    .then(res => res.json())
    .then(res => {
        let gameCheckStarted = res.started
        setGameStarted(gameCheckStarted)
        if(gameCheckStarted){
            clearInterval(inter)
        }
    })
    } 
  }, 1000);

  const onClick = () => {
    fetch("http://localhost:9000/startgame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameCode: gameCode }),
    });
    clearInterval(inter)
    setGameStarted(true);
};

  return (
    <div className="StartGame">
      {currentPlayer === userName ? (
        <div className="Text">
          Waiting for you to start the game. Noone will be able to join after
          starting the game. Join by useing the current game code:{" "}
          <p style={{ color: "#c1433a" }}>{gameCode}</p>
          <br />
          <button className="Start" onClick={onClick}>
            {" "}
            START GAME
          </button>
        </div>
      ) : (
        <p className="Text">Waiting for {currentPlayer} to start the game</p>
      )}
    </div>
  );
};

export default StartGame;
