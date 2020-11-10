import axios from "axios";
import React, { useState, useEffect } from "react";

// Players
import James from "../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png";
import Davis from "../assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png";
import Gordon from "../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png";
import Siakam from "../assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png";
import Leonard from "../assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png";
import Lowry from "../assets/headshots/Kyle-Lowry-PLP59D70927DF104.png";
import Russell from "../assets/headshots/Dangelo Russell PLP59D709255D994v4.png";

import Player from "./Player";

export default function GetPlayers() {
  let [playersData, setPlayersData] = useState([]);
  const indPlayer = [James, Davis, Gordon, Siakam, Leonard, Lowry, Russell];

  useEffect(() => {
    //Get the players, BLOCKED by CORS
    axios
      .get(
        "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json"
      )
      .then((response) => setPlayersData(response.data));
  }, []);

  return (
    <div className="players-container">
      {playersData.players
        ? playersData.players.map((e, i) => {
            return (
              <Player
                zindex={10 - i}
                player={indPlayer[i]}
                altname={e.last_name}
                key={i}
                playername={e.last_name}
                score={e.points}
              />
            );
          })
        : null}
    </div>
  );
}
