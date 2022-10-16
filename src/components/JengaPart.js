import React, { useRef, useEffect  } from 'react'
import './JengaPart.css'

const JengaPart = () => {



  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width/2, context.canvas.height/2)
  }, [])

 
  return (
    <div className='JengaPart'>
        <canvas ref={canvasRef} className='Canvas' id="myCanvas" width="500" height="500"></canvas>
    </div>
  )
}

export default JengaPart