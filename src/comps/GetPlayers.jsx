import axios from "axios";
import React, { useState, useEffect } from "react";
export default function GetPlayers() {
  let [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json"
      )
      .then((response) => setPlayers(response.data));
  }, []);

  return (
    <div className="xxx">
      <code>{JSON.stringify(players)}</code>
    </div>
  );
}
