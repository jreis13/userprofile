import Buy from "./Buy";
import Socials from "./Socials";
import HeaderAnchor from "./HeaderAnchor";
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
