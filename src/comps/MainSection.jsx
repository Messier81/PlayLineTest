import ProgressBar from "../assets/icons/progress.svg";
import NotifyMe from "../assets/icons/notify-me.svg";
import Deposit from "../assets/icons/money-bag.svg";
import AndroidLogo from "../assets/icons/google-play.svg";
import AppleLogo from "../assets/icons/ios-app.svg";

import GetPlayers from "./GetPlayers";

export default function Logo() {
  return (
    <div className="main-section-container">
      <img
        src={ProgressBar}
        className="img-responsive main-logo"
        alt="Progress Bar"
      />
      <div className="main-section-motive">YOUR PLAYLINE IS SET!</div>
      <div className="main-section-time">
        COME BACK @ 7:30PM TO TRACK IT LIVE!
      </div>
      <hr />
      <div className="main-section-tip">
        Pro Tip: You can manage your PlayLines until they go live in the
        Upcoming area.
      </div>
      <div>
        <GetPlayers />
      </div>
      <div className="main-section-buttons">
        <button type="button" className="btn btn-default main-section-button">
          <img
            src={NotifyMe}
            className="main-section-buttons-notifyme-icon"
            alt="Notify Me Icon"
          />
          <span className="align-middle">NOTIFY ME</span>
        </button>

        <button
          type="button"
          className="btn-sm align-middle btn btn-default main-section-button"
        >
          <img
            src={Deposit}
            className="btn-sm align-middle main-section-buttons-deposit-icon"
            alt="Deposit Icon"
          />
          <span className="align-middle">DEPOSIT</span>
        </button>
      </div>
      <hr />
      <div className="main-section-download">DOWNLOAD THE APP</div>
      <div className="main-section-download-logos">
        <img
          src={AndroidLogo}
          className="main-section-download-logo"
          alt="Android Download Logo"
        />
        <img
          src={AppleLogo}
          className="main-section-download-logo"
          alt="Apple Download Logo"
        />
      </div>
    </div>
  );
}
