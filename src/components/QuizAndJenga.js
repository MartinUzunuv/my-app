import React from "react";
import QuizPart from "./QuizPart";
import JengaPart from "./JengaPart";
import "./QuizAndJenga.css";
import { useState } from "react";

const QuizAndJenga = ({ jenga, userName, gameCode }) => {
  const [blocks, setBlocks] = useState(jenga);

  const [removeBlock, setRemoveBlock] = useState(false)

  const sendJenga = (curentJenga) => {
    fetch("http://localhost:9000/updatejenga",{
      method: 'POST',
      headers: {
        'Content-Type':"application/json"
      },
      body:JSON.stringify({curentJenga:curentJenga,userName:userName, gameCode:gameCode}),
    })
    .then(res => res.json())
    .then(res => {
      // let myJenga = res.jenga
      // setJenga(myJenga)
      // console.log(myJenga)
      // setLogged(true);
    })
  }

  return (
    <div className="QuizAndJenga">
      <QuizPart setRemoveBlock={setRemoveBlock} removeBlock={removeBlock} />
      <JengaPart sendJenga={sendJenga} removeBlock={removeBlock} blocks={blocks} setBlocks={setBlocks} setRemoveBlock={setRemoveBlock} />
    </div>
  );
};

export default QuizAndJenga;
