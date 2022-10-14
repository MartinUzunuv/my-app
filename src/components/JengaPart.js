import React from 'react'
import './JengaPart.css'

const JengaPart = () => {
    const onClick = () => {
        var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;

      

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
    }
  return (
    <div className='JengaPart'>
        <canvas className='Canvas' id="myCanvas" width="500%" height="500%" onClick={onClick}></canvas>
    </div>
  )
}

export default JengaPart