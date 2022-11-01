import React from "react";
import QuizPart from "./QuizPart";
import JengaPart from "./JengaPart";
import "./QuizAndJenga.css";
import { useState } from "react";
import PlayersBar from "./PlayersBar";

const QuizAndJenga = ({ jenga, userName, gameCode }) => {
  const [blocks, setBlocks] = useState(jenga);

  const [removeBlock, setRemoveBlock] = useState(false);

  const [currentPlayer, setCurrentPlayer] = useState(userName);

  const sendJenga = (curentJenga) => {
    fetch("http://localhost:9000/updatejenga", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        curentJenga: curentJenga,
        userName: userName,
        gameCode: gameCode,
      }),
    });
    // .then(res => res.json())
    // .then(res => {
    //   // let myJenga = res.jenga
    //   // setJenga(myJenga)
    //   // console.log(myJenga)
    //   // setLogged(true);
    // })
  };

  setTimeout(() => {
      fetch("http://localhost:9000/getjenga", {
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
      let myJenga = res.jenga
      setBlocks(myJenga)
      let myCurrentPlayer = res.currentPlayer
      setCurrentPlayer(myCurrentPlayer)
    })
  }, 1000);

  return (
    <div className="QuizAndJenga">
      <PlayersBar currentPlayer={currentPlayer} />
      <QuizPart setRemoveBlock={setRemoveBlock} removeBlock={removeBlock} />
      <JengaPart
        sendJenga={sendJenga}
        removeBlock={removeBlock}
        blocks={blocks}
        setBlocks={setBlocks}
        setRemoveBlock={setRemoveBlock}
      />
    </div>
  );
};

export default QuizAndJenga;
