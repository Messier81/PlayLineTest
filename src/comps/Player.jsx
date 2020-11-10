//View for the player

export default function Player(props) {
  return (
    <div className="player-data-main">
      <img
        style={{ zIndex: props.zindex }}
        src={props.player}
        className="player-image"
        alt={props.altname}
      />
      <div className="player-name">{props.playername}</div>{" "}
      <div className="player-pts">
        <div className="player-pts-inside">{props.score}</div>
      </div>
      <div className="player-pts-sign">PTS</div>
    </div>
  );
}
