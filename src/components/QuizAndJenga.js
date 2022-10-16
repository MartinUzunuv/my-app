import React from "react";
import QuizPart from "./QuizPart";
import JengaPart from "./JengaPart";
import "./QuizAndJenga.css"

const QuizAndJenga = () => {
  return (
    <div className="QuizAndJenga">
      <QuizPart />
      <JengaPart />
    </div>
  );
};

export default QuizAndJenga;
