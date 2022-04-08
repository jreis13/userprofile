import Socials from "../Common/Socials";
import TC from "./TC";
import logo_sm from "../../assets/logo-sm.png";

function Footer() {
  return (
    <div className="footer">
      <Socials />
      <div>
        <img src={logo_sm} alt="Small Logo"></img>
      </div>
      <TC />
    </div>
  );
}

export default Footer;
