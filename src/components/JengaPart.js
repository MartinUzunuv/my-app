import React, { useRef, useEffect } from "react";
import "./JengaPart.css";

const JengaPart = ({ removeBlock, blocks, setBlocks, setRemoveBlock }) => {
  const canvasRef = useRef(null);

  const CW = useRef(0)

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#825B1F";
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].exist1) {
        ctx.fillRect(CW.current/4, CW.current/5*4.5 - i * CW.current/4.5, CW.current/10, CW.current/10);
      }
      if (blocks[i].exist2) {
        ctx.fillRect(CW.current/2.2, CW.current/5*4.5 - i * CW.current/4.5, CW.current/10, CW.current/10);
      }
      if (blocks[i].exist3) {
        ctx.fillRect(CW.current/1.55, CW.current/5*4.5 - i * CW.current/4.5, CW.current/10, CW.current/10);
      }
      ctx.fillRect(CW.current/4.1, CW.current/5*4.5 - i * CW.current/4.5 - CW.current/9, CW.current/1.95, CW.current/10);
    }
  };

  const MouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    console.log(offsetX, offsetY, CW.current)
    if (removeBlock) {
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].exist1) {
          if (
            offsetX > CW.current/4 &&
            offsetY > CW.current/5*4.5 - i * CW.current/4.5 &&
            offsetX < CW.current/4+ CW.current/10 &&
            offsetY < CW.current/5*4.5 - i * CW.current/4.5 + CW.current/10
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
              });
            }
            temp[i].exist1 = false;
            setRemoveBlock(false)
            setBlocks(temp);
          }
        }
        if (blocks[i].exist2) {
          if (
            offsetX > CW.current/2.2 &&
            offsetY > CW.current/5*4.5 - i * CW.current/4.5 &&
            offsetX < CW.current/2.2+ CW.current/10 &&
            offsetY < CW.current/5*4.5 - i * CW.current/4.5 + CW.current/10
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
              });
            }
            temp[i].exist2 = false;
            setBlocks(temp);
            setRemoveBlock(false)
          }
        }
        if (blocks[i].exist3) {
          if (
            offsetX > CW.current/1.55 &&
            offsetY > CW.current/5*4.5 - i * CW.current/4.5 &&
            offsetX < CW.current/1.55+ CW.current/10 &&
            offsetY < CW.current/5*4.5 - i * CW.current/4.5 + CW.current/10
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
              });
            }
            temp[i].exist3 = false;
            setBlocks(temp);
            setRemoveBlock(false)
          }
        }
      }
    }
  };

  // lose condition
  for (let i = 0; i < blocks.length; i++) {
    if (
      (!blocks[i].exist1 && !blocks[i].exist2) ||
      (!blocks[i].exist3 && !blocks[i].exist2) ||
      (!blocks[i].exist1 && !blocks[i].exist2 && !blocks[i].exist3)
    ) {
      setTimeout(() => {
        alert("you lost");
      }, 100);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    CW.current = context.canvas.width

    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  });

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
