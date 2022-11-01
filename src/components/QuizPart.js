import React from "react";
import "./QuizPart.css";
import { useState } from "react";

const QuizPart = ({ setRemoveBlock, removeBlock, currentPlayer, userName, sendJenga, blocks }) => {
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

  const [question, setQuestion] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    var ans = document.getElementsByName("ans");
    let isCorect = false;
    for (let i = 0; i < ans.length; i++) {
      if (ans[i].checked) {
        if (ans[i].value === question.t) {
          isCorect = true;
        }
      }
    }
    if (isCorect === true) {
      console.log("yes");
      sendJenga(blocks);
    } else {
      console.log("no");
      setRemoveBlock(true);
    }

    document.getElementById("Question-form").reset();
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  };

  return (
    <div className="QuizPart">
      {(userName === currentPlayer)?(!removeBlock ? (
        <div>
        <p className="P">{question.q}</p>
        <form className="Form" id="Question-form" onSubmit={onSubmit}>
          <div className="Answer">
            <label className="Label" htmlFor="ra">
              <input type="radio" name="ans" id="ra" value={question.a} />
              {question.a}
            </label>
          </div>
          <div className="Answer">
            <label className="Label" htmlFor="rb">
              <input type="radio" name="ans" id="rb" value={question.b} />
              {question.b}
            </label>
          </div>
          <div className="Answer">
            <label className="Label" htmlFor="rc">
              <input type="radio" name="ans" id="rc" value={question.c} />
              {question.c}
            </label>
          </div>
          <div className="Answer">
            <label className="Label" htmlFor="rd">
              <input type="radio" name="ans" id="rd" value={question.d} />
              {question.d}
            </label>
          </div>
          <input className="SubmitOk" type="submit" value="OK" />
        </form>
        </div>
      ) : (
        <p className="P" >remove a block</p>)
      ):(<p className="P" >Wait for your turn. Now {currentPlayer} is playing.</p>)}
    </div>
  );
};

export default QuizPart;
