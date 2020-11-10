import James from "../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png";

export default function PlayerImg(props) {
  return (
    <div className="player-data-main">
      <img
        style={{ zIndex: props.zindex }}
        src={props.player}
        className="player-image"
        alt={props.altname}
      />
      <div className="player-name">{props.playername}</div>{" "}
      <img
        style={{ zIndex: props.zindex }}
        src={props.player}
        className="player-image"
        alt={props.altname}
      />
      <div className="player-name">{props.playername}</div>
    </div>
  );
}
