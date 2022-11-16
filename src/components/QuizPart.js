import React from "react";
import "./QuizPart.css";
import { useState } from "react";
import { useRef } from "react";

const QuizPart = ({ setRemoveBlock, removeBlock, currentPlayer, userName, sendJenga, blocks }) => {
  // const questions = [
  //   {
  //     q: "my laptop is",
  //     a: "asus",
  //     b: "Lenovo",
  //     c: "samsung",
  //     d: "nokia",
  //     t: "Lenovo",
  //   },
  //   {
  //     q: "my hair is",
  //     a: "fake",
  //     b: "none",
  //     c: "perfect",
  //     d: "short",
  //     t: "perfect",
  //   },
  //   {
  //     q: "grass is",
  //     a: "red",
  //     b: "orange",
  //     c: "blue",
  //     d: "green",
  //     t: "green",
  //   },
  // ];
  
  const once = useRef(true)

  const [question, setQuestion] = useState({q: "", a1: "", a2: "", a3: "", a4: "", t: ""});

  const getQuestion = () => {
    fetch("http://localhost:9000/getquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((res) => {
        let q = res.q
        let a1 = res.a1
        let a2 = res.a2
        let a3 = res.a3
        let a4 = res.a4
        let t = res.t
        setQuestion({q: q, a: a1, b: a2, c: a3, d: a4, t: t})
      });
  }

  if(once.current){
    once.current = false
    getQuestion()
  }

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
    getQuestion()
    //  setQuestion(questions[Math.floor(Math.random() * questions.length)]);
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
