import "./style/Header.scss";
import Buy from "./Buy";
import Socials from "../Common/Socials";
import HeaderAnchor from "../Header/HeaderAnchor";
import PlayFantasy from "./PlayFantasy";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Buy text={"Buy $FEVR"} />
      </div>
      <div className="navbar-right">
        <Socials />
        <HeaderAnchor text={"Staking"} path={"https://staking.realfevr.com/"} />
        <HeaderAnchor text={"NFT P2E GAME"} info={"(SOON)"} />
        <PlayFantasy />
      </div>
    </div>
  );
}

export default Navbar;
