export default function PlayerImg(props) {
  return (
    <img
      src={props.player}
      style={{ zIndex: props.zindex }}
      className="player-image"
      alt={props.name}
    />
  );
}
