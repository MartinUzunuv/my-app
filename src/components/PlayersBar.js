import React from "react";
import "./PlayersBar.css";
import { useState, useEffect, useRef } from "react";

const PlayersBar = ({ currentPlayer, gameCode }) => {
  const [players, setPlayers] = useState([]);

  const foundPlayers = useRef(false);

  useEffect(() => {
    if (!foundPlayers.current) {
      fetch("http://localhost:9000/getplayers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameCode: gameCode,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          let myPlayers = res.players;
          setPlayers(myPlayers);
        });
    }
    foundPlayers.current = true;
  });

  return (
    <div className="PlayersBar">
      {/* <div style={{backgroundColor:'red', width:`${procent}%`}}>
            {currentPlayer}
        </div> */}
      {players.map((player) =>
        player === currentPlayer ? (
          <div className="Player" key={player} style={{ backgroundColor: "#FF7D63" }}>
            {player}
          </div>
        ) : (
          <div className="Player" key={player}>{player}</div>
        )
      )}
    </div>
  );
};

export default PlayersBar;
