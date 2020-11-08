import LogoImg from "../assets/logo/logo@1x.png";

export default function Logo() {
  return (
    <div className="main-logo-container">
      <img src={LogoImg} className="main-logo" alt="Company Logo" />
    </div>
  );
}
