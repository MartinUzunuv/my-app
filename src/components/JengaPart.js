import React, { useRef, useEffect } from "react";
import "./JengaPart.css";

const JengaPart = ({removeBlock, blocks}) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    for(let i = 0; i < blocks.length; i++){
      if(blocks[i].exist1){
        ctx.fillRect(130,400-i*80,50,50);
      }
      if(blocks[i].exist2){
        ctx.fillRect(225,400-i*80,50,50);
      }
      if(blocks[i].exist3){
        ctx.fillRect(320,400-i*80,50,50);
      }
      ctx.fillRect(120,400-i*80 - 20,260,10);
    }
  };

  const MouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    console.log(offsetX, offsetY)
    if(removeBlock){
      for(let i = 0; i < blocks.length; i++){
        if(blocks[i].exist1){
          if(offsetX > 130 && offsetY > 400-i*80 && offsetX < 180 && offsetY < 400-i*80 + 50){
            // let temp = []
            // for(let j = 0; j < blocks.length; j++){
            //   temp.push{}
            // }
            console.log("yes")
          }
        }
        if(blocks[i].exist2){
          //ctx.fillRect(225,400-i*80,50,50);
        }
        if(blocks[i].exist3){
          //ctx.fillRect(320,400-i*80,50,50);
        }
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;

    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  

  return (
    <div className="JengaPart">
      <canvas
        ref={canvasRef}
        onMouseDown={MouseDown}
        className="Canvas"
        id="myCanvas"
        width="500"
        height="500"
      ></canvas>
    </div>
  );
};

export default JengaPart;
