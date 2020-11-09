import axios from "axios";
import React, { useState, useEffect } from "react";

export default function PlayerNames(props) {
  let [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json"
      )
      .then((response) => setPlayersData(response.data));
  }, []);

  return (
    <div className="players-names">
      {playersData.players
        ? playersData.players.map((e, i) => {
            return (
              <span className="player-name" key={i}>
                {e.last_name}
              </span>
            );
          })
        : null}
    </div>
  );
}
