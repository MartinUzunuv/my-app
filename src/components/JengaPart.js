import React, { useRef, useEffect } from "react";
import "./JengaPart.css";

const JengaPart = props => {
  const { draw } = props;
  const canvasRef = useRef(null);

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
        className="Canvas"
        id="myCanvas"
        width="500"
        height="500"
      ></canvas>
    </div>
  );
};

export default JengaPart;
