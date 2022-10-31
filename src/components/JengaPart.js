import React, { useRef, useEffect } from "react";
import "./JengaPart.css";

const JengaPart = ({ removeBlock, blocks, setBlocks, setRemoveBlock, sendJenga }) => {
  const canvasRef = useRef(null);

  const CW = useRef(0)

  const logFace = useRef(new Image())

  logFace.current.src = './log.png'

  const log = useRef(new Image())

  log.current.src = './face.png'

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#825B1F";
    const cubeSize = CW.current/9.3
    const minHeigth = CW.current - cubeSize
    const floorHeigth = CW.current/4.5
    const center = CW.current/2 - cubeSize/2
    const spaceBetween = cubeSize/10
    const left = -CW.current/6.5
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].exist1) {
        ctx.drawImage(logFace.current, center - cubeSize - spaceBetween + left, minHeigth - i * floorHeigth, cubeSize*4, cubeSize);
      }
      if (blocks[i].exist2) {
        ctx.drawImage(logFace.current, center + left, minHeigth - i * floorHeigth, cubeSize*4, cubeSize);
      }
      if (blocks[i].exist3) {
        ctx.drawImage(logFace.current, center + cubeSize + spaceBetween + left, minHeigth - i * floorHeigth, cubeSize*4, cubeSize);
      }

      if (blocks[i].exist4) {
        ctx.drawImage(log.current, center + cubeSize + spaceBetween + left, minHeigth - i * floorHeigth - CW.current/9, cubeSize*4, cubeSize);
      }
      if (blocks[i].exist5) {
        ctx.drawImage(log.current, center + left, minHeigth - i * floorHeigth - CW.current/9, cubeSize*4, cubeSize);
      }
      if (blocks[i].exist6) {
        ctx.drawImage(log.current, center - cubeSize - spaceBetween + left, minHeigth - i * floorHeigth - CW.current/9, cubeSize*4, cubeSize);
      }

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
    const left = -CW.current/6.5
    if (removeBlock) {
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].exist1) {
          if (
            offsetX > center - cubeSize - spaceBetween + left &&
            offsetY > minHeigth - i * floorHeigth &&
            offsetX < center - cubeSize - spaceBetween + left + cubeSize &&
            offsetY < minHeigth - i * floorHeigth + cubeSize
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
                exist4: blocks[j].exist4,
                exist5: blocks[j].exist5,
                exist6: blocks[j].exist6,
              });
            }
            temp[i].exist1 = false;
            setRemoveBlock(false)
            sendJenga(temp)
            setBlocks(temp);
          }
        }
        if (blocks[i].exist2) {
          if (
            offsetX > center + left &&
            offsetY > minHeigth - i * floorHeigth &&
            offsetX < center + left + cubeSize &&
            offsetY < minHeigth - i * floorHeigth + cubeSize
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
                exist4: blocks[j].exist4,
                exist5: blocks[j].exist5,
                exist6: blocks[j].exist6,
              });
            }
            temp[i].exist2 = false;
            setBlocks(temp);
            sendJenga(temp)
            setRemoveBlock(false)
          }
        }
        if (blocks[i].exist3) {
          if (
            offsetX > center + cubeSize + spaceBetween + left &&
            offsetY > minHeigth - i * floorHeigth &&
            offsetX < center + cubeSize + spaceBetween + left + cubeSize &&
            offsetY < minHeigth - i * floorHeigth + cubeSize
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
                exist4: blocks[j].exist4,
                exist5: blocks[j].exist5,
                exist6: blocks[j].exist6,
              });
            }
            temp[i].exist3 = false;
            setBlocks(temp);
            sendJenga(temp)
            setRemoveBlock(false)
          }
        }
        // ====>>>>
        if (blocks[i].exist4) {
          if (
            offsetX > center - cubeSize - spaceBetween + left + cubeSize*5 &&
            offsetY > minHeigth - i * floorHeigth - cubeSize &&
            offsetX < center - cubeSize - spaceBetween + left + cubeSize + cubeSize*5 &&
            offsetY < minHeigth - i * floorHeigth + cubeSize - cubeSize
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
                exist4: blocks[j].exist4,
                exist5: blocks[j].exist5,
                exist6: blocks[j].exist6,
              });
            }
            temp[i].exist4 = false;
            setRemoveBlock(false)
            sendJenga(temp)
            setBlocks(temp);
          }
        }
        if (blocks[i].exist5) {
          if (
            offsetX > center + left + cubeSize*3 &&
            offsetY > minHeigth - i * floorHeigth - cubeSize &&
            offsetX < center + left + cubeSize + cubeSize*3 &&
            offsetY < minHeigth - i * floorHeigth + cubeSize - cubeSize
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
                exist4: blocks[j].exist4,
                exist5: blocks[j].exist5,
                exist6: blocks[j].exist6,
              });
            }
            temp[i].exist5 = false;
            setBlocks(temp);
            sendJenga(temp)
            setRemoveBlock(false)
          }
        }
        if (blocks[i].exist6) {
          if (
            offsetX > center + cubeSize + spaceBetween + left  + cubeSize &&
            offsetY > minHeigth - i * floorHeigth - cubeSize &&
            offsetX < center + cubeSize + spaceBetween + left + cubeSize + cubeSize &&
            offsetY < minHeigth - i * floorHeigth + cubeSize - cubeSize
          ) {
            let temp = [];
            for (let j = 0; j < blocks.length; j++) {
              temp.push({
                exist1: blocks[j].exist1,
                exist2: blocks[j].exist2,
                exist3: blocks[j].exist3,
                exist4: blocks[j].exist4,
                exist5: blocks[j].exist5,
                exist6: blocks[j].exist6,
              });
            }
            temp[i].exist6 = false;
            setBlocks(temp);
            sendJenga(temp)
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
      (!blocks[i].exist1 && !blocks[i].exist2 && !blocks[i].exist3) ||
      (!blocks[i].exist4 && !blocks[i].exist5) ||
      (!blocks[i].exist6 && !blocks[i].exist5) ||
      (!blocks[i].exist4 && !blocks[i].exist5 && !blocks[i].exist6)
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
