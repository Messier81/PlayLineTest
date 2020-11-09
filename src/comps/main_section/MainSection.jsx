import ProgressBar from "../../assets/icons/progress.svg";

export default function Logo() {
  return (
    <div className="main-section-container">
      <img src={ProgressBar} className="main-logo" alt="Progress Bar" />
      <div>YOUR PLAYLINE IS SET!</div>
      <div>COME BACK @ 7:30PM TO TRACK IT LIVE!</div>
      <hr />

      <h3>COME BACK @ 7:30PM TO TRACK IT LIVE!</h3>
    </div>
  );
}
