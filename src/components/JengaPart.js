import React, { useRef, useEffect } from "react";
import "./JengaPart.css";

const JengaPart = ({ removeBlock, blocks, setBlocks, setRemoveBlock }) => {
  const canvasRef = useRef(null);

  const CW = useRef(0)

  const logFace = useRef(new Image())

  logFace.current.src = 'https://static9.depositphotos.com/1526816/1239/v/450/depositphotos_12398099-stock-illustration-texture.jpg'

  const log = useRef(new Image())

  log.current.src = 'https://static9.depositphotos.com/1526816/1239/v/450/depositphotos_12398099-stock-illustration-texture.jpg'

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#825B1F";
    const cubeSize = CW.current/9.3
    const minHeigth = CW.current - cubeSize
    const floorHeigth = CW.current/4.5
    const center = CW.current/2 - cubeSize/2
    const spaceBetween = cubeSize/10
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].exist1) {
        ctx.drawImage(logFace.current, center - cubeSize - spaceBetween, minHeigth - i * floorHeigth, cubeSize, cubeSize);
      }
      if (blocks[i].exist2) {
        ctx.drawImage(logFace.current, center, minHeigth - i * floorHeigth, cubeSize, cubeSize);
      }
      if (blocks[i].exist3) {
        ctx.drawImage(logFace.current, center + cubeSize + spaceBetween, minHeigth - i * floorHeigth, cubeSize, cubeSize);
      }
      ctx.drawImage(log.current, center - cubeSize - spaceBetween, minHeigth - i * floorHeigth - CW.current/9, cubeSize * 3 + spaceBetween*2, cubeSize);
    }
  };

  const MouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    console.log(offsetX, offsetY, CW.current)
    const cubeSize = CW.current/9.3
    const minHeigth = CW.current - cubeSize
    const floorHeigth = CW.current/4.5
    const center = CW.current/2 - cubeSize/2
    const spaceBetween = cubeSize/10
    if (removeBlock) {
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].exist1) {
          if (
            offsetX > center - cubeSize - spaceBetween &&
            offsetY > minHeigth - i * floorHeigth &&
            offsetX < center - cubeSize - spaceBetween + cubeSize &&
            offsetY < minHeigth - i * floorHeigth + cubeSize
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
            offsetX > center &&
            offsetY > minHeigth - i * floorHeigth &&
            offsetX < center + cubeSize &&
            offsetY < minHeigth - i * floorHeigth + cubeSize
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
            offsetX > center + cubeSize + spaceBetween &&
            offsetY > minHeigth - i * floorHeigth &&
            offsetX < center + cubeSize + spaceBetween+ cubeSize &&
            offsetY < minHeigth - i * floorHeigth + cubeSize
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
