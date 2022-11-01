import React from 'react'
import './PlayersBar.css'
// import { useState } from 'react'

const PlayersBar = ({currentPlayer}) => {

    // const [procent, setProcent] = useState(100)

    // setTimeout(() => {
    //     setProcent(procent-1)
    // }, 1000);

  return (
    <div className='PlayersBar'>
        {/* <div style={{backgroundColor:'red', width:`${procent}%`}}>
            {currentPlayer}
        </div> */}
        {currentPlayer}
    </div>
  )
}

export default PlayersBar