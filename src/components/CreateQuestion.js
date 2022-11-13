import React from "react";
import "./Login.css";
import { useState } from "react";

const CreateQuestion = ({ setIfCreate }) => {
  const [q, setQ] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [right, setRight] = useState("");

  const OnSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/submitquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: q, a1: a1, a2: a2, a3: a3, a4: a4, t: right }),
    })

    setIfCreate(false)
  };

  const OnCancel = () => {
    setIfCreate(false)
  }

  return (
    <div>
      <form onSubmit={OnSubmit}>
        <label className="Label" htmlFor="question">
          Question
        </label>
        <input
          className="TextBox"
          type="text"
          id="question"
          placeholder="Question"
          onChange={(e) => setQ(e.target.value)}
        />

        <label className="Label" htmlFor="answer1">
          Answer 1
        </label>
        <input
          className="TextBox"
          type="text"
          id="answer1"
          placeholder="Answer"
          onChange={(e) => setA1(e.target.value)}
        />

        <label className="Label" htmlFor="answer2">
          Answer 2
        </label>
        <input
          className="TextBox"
          type="text"
          id="answer2"
          placeholder="Answer"
          onChange={(e) => setA2(e.target.value)}
        />

        <label className="Label" htmlFor="answer3">
          Answer 3
        </label>
        <input
          className="TextBox"
          type="text"
          id="answer3"
          placeholder="Answer"
          onChange={(e) => setA3(e.target.value)}
        />

        <label className="Label" htmlFor="answer4">
          Answer 4
        </label>
        <input
          className="TextBox"
          type="text"
          id="answer4"
          placeholder="Answer"
          onChange={(e) => setA4(e.target.value)}
        />

        <label className="Label" htmlFor="right">
          True Answer
        </label>
        <input
          className="TextBox"
          type="text"
          id="right"
          placeholder="True Answer"
          onChange={(e) => setRight(e.target.value)}
        />
        <button onClick={OnCancel} className="SubmitOk" style={{float: "left", marginLeft: 2, marginRight: 2}}>Cancel</button>
        <input className="SubmitOk" type="submit" style={{marginRight: 2, marginLeft: 2}} value="Submit question" />
      </form>
    </div>
  );
};

export default CreateQuestion;
