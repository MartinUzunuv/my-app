import React from 'react'
import './Login.css'
import { useState } from 'react';
import SignIn from './SignIn';

const Login = ({ setAccLogged, setPassword, password, accName, setAccName }) => {
    const [signed, setSigned] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:9000/acclogin",{
        method: 'POST',
        headers: {
          'Content-Type':"application/json"
        },
        body:JSON.stringify({accName:accName, password:password}),
      })
      .then(res => res.json())
      .then(res => {
        
      })
      };

      const onClick = () => {
        setSigned(false)
      }
    
  return (
    <div className='Login' >{signed ? (
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
        <label className='Label'>Don't have an account? <div onClick={onClick} className='SignIn'>Sign in.</div></label>
        <input className="SubmitOk" type="submit" value="Log in" />
      </form>) : (<SignIn setSigned={setSigned} accName={accName} setAccName={setAccName} password={password} setPassword={setPassword} />)}
    </div>
  )
}

export default Login