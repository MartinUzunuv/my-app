import React from "react";
import QuizPart from "./QuizPart";
import JengaPart from "./JengaPart";
import "./QuizAndJenga.css";
import { useState } from "react";

const QuizAndJenga = () => {
  const [blocks, setBlocks] = useState([
    { exist1: true, exist2: true, exist3: true },
    { exist1: true, exist2: true, exist3: true },
    { exist1: true, exist2: true, exist3: true },
    { exist1: true, exist2: true, exist3: true },
  ]);

  const [removeBlock, setRemoveBlock] = useState(false)

  

  return (
    <div className="QuizAndJenga">
      <QuizPart setRemoveBlock={setRemoveBlock} removeBlock={removeBlock} />
      <JengaPart removeBlock={removeBlock} blocks={blocks} setBlocks={setBlocks} setRemoveBlock={setRemoveBlock} />
    </div>
  );
};

export default QuizAndJenga;
