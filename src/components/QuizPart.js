import React from "react";
import "./QuizPart.css";
import { useState } from "react";

const QuizPart = ({ setRemoveBlock, removeBlock }) => {
  const questions = [
    {
      q: "my laptop is",
      a: "asus",
      b: "Lenovo",
      c: "samsung",
      d: "nokia",
      t: "Lenovo",
    },
    {
      q: "my hair is",
      a: "fake",
      b: "none",
      c: "perfect",
      d: "short",
      t: "perfect",
    },
    {
      q: "grass is",
      a: "red",
      b: "orange",
      c: "blue",
      d: "green",
      t: "green",
    },
  ];

  const [question, setQuestion] = useState(questions[Math.floor(Math.random()*questions.length)])

  const onSubmit = (e) => {
    e.preventDefault()
    var ans = document.getElementsByName('ans');
    let isCorect = false
    for(let i = 0; i < ans.length; i++){
      if(ans[i].checked){
        if(ans[i].value === question.t){
          isCorect = true
        }
      }
    }
    if(isCorect === true){
      console.log("yes")
    }else{
      console.log("no")
      setRemoveBlock(true)
    }


    document.getElementById("Question-form").reset();
    setQuestion(questions[Math.floor(Math.random()*questions.length)])
  }

  return (
    <div className="QuizPart" >{ !removeBlock ?
      <form className="Form" id="Question-form" onSubmit={onSubmit} >
        {question.q}
        <div className="Answer">
          <input type="radio" name="ans" value={question.a} />
          {question.a}
        </div>
        <div className="Answer">
          <input type="radio" name="ans" value={question.b} />
          {question.b}
        </div>
        <div className="Answer">
          <input type="radio" name="ans" value={question.c} />
          {question.c}
        </div>
        <div className="Answer">
          <input type="radio" name="ans" value={question.d} />
          {question.d}
        </div>
        <input className="SubmitOk" type='submit' value='ok'/>
      </form> : <p>remove a block</p>}
    </div>
  );
};

export default QuizPart;
