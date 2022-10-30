import React from 'react'
import './Login.css'

const Login = ({setLogged}) => {

const onClick = () => {
    setLogged(true)
}

  return (
    <div className='Login' onClick={onClick} >Login</div>
  )
}

export default Login