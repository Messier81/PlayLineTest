import Player from "../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png";
export default function BotNav() {
  return (
    <div className="players-container">
      <div className="player-images">
        <div className="player-image-container">
          <img
            src={Player}
            style={{ zIndex: 2 }}
            className="player-image"
            alt="Company Logo"
          />
          <img
            src={Player}
            style={{ zIndex: 1, margin: "-5px" }}
            className="player-image"
            alt="Company Logo"
          />
          <img src={Player} className="player-image" alt="Company Logo" />
          <img src={Player} className="player-image" alt="Company Logo" />
          <img src={Player} className="player-image" alt="Company Logo" />
        </div>
      </div>
    </div>
  );
}
