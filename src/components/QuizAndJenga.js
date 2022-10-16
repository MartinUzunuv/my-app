import React from "react";
import QuizPart from "./QuizPart";
import JengaPart from "./JengaPart";
import "./QuizAndJenga.css"

const QuizAndJenga = () => {

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    
    ctx.fillRect(10,100,100,100)
  }
  
  return (
    <div className="QuizAndJenga">
      <QuizPart />
      <JengaPart draw={draw}/>
    </div>
  );
};

export default QuizAndJenga;
