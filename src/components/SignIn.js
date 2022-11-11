import React from 'react'
import './Login.css'

const SignIn = ({ setPassword, password, accName, setAccName, setSigned }) => {

    const onSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:9000/signin",{
        method: 'POST',
        headers: {
          'Content-Type':"application/json"
        },
        body:JSON.stringify({accName:accName, password:password}),
      })

      setSigned(true)
      };


  return (
    <div>
        <form onSubmit={onSubmit}>
        <label className="Label" htmlFor="userName">Account name</label>
        <input
          className="TextBox"
          type="text"
          id="userName"
          placeholder="Account name"
          onChange={(e) => setAccName(e.target.value)}
        />
        <label className="Label" htmlFor="gameCode">Password</label>
        <input
          className="TextBox"
          type="text"
          id="gameCode"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="SubmitOk" type="submit" value="Sign in" />
      </form>
    </div>
  )
}

export default SignIn