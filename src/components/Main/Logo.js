import logo from "../../assets/logo-horizontal.png";
import beta from "../../assets/beta.png";

function Logo() {
  return (
    <a
      href="https://www.realfevr.com/"
      target="_blank"
      rel="noreferrer"
      className="logo-horizontal"
    >
      <img className="logo" src={logo} alt="RealFevr Logo"></img>
      <img className="beta" src={beta} alt="Beta"></img>
    </a>
  );
}

export default Logo;
