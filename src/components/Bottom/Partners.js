import soccerex from "../../assets/soccerex.png";
import shilling from "../../assets/shilling.png";
import growth from "../../assets/growth.png";
import polkastarter from "../../assets/polkastarter.png";
import morningstar from "../../assets/morningstar.png";
import moonrock from "../../assets/moonrock.png";
import sportmulti from "../../assets/sportmulti.png";
import ibc from "../../assets/ibc.png";
import afe from "../../assets/afe.png";
import ladof from "../../assets/ladof.png";
import ligap from "../../assets/ligap.png";
import isport from "../../assets/isport.png";
import fpf from "../../assets/fpf.png";
import bepro from "../../assets/bepro.png";
import clever from "../../assets/clever.png";
import gateio from "../../assets/gateio.png";
import ir21 from "../../assets/ir21.png";
import empower from "../../assets/empower.png";
import bsc from "../../assets/bsc.png";
import as from "../../assets/as.png";

function Partners() {
  return (
    <div className="partners">
      <ul className="partners-list partners-top-row">
        <li className="li-partner">
          <img src={soccerex} alt="Soccerex Logo"></img>
        </li>
        <li className="li-partner">
          <img src={shilling} alt="Shilling Logo"></img>
        </li>
        <li className="li-partner">
          <img src={growth} alt="Growth Logo"></img>
        </li>
        <li className="li-partner">
          <img src={polkastarter} alt="Polkastarter Logo"></img>
        </li>
        <li className="li-partner">
          <img src={morningstar} alt="Morningstart Logo"></img>
        </li>
        <li className="li-partner">
          <img src={moonrock} alt="Moonrock Logo"></img>
        </li>
      </ul>

      <ul className="partners-list partners-mid-row">
        <li className="li-partner">
          <img src={sportmulti} alt="Sportmultimedia Logo"></img>
        </li>
        <li className="li-partner">
          <img src={ibc} alt="IBC Logo"></img>
        </li>
        <li className="li-partner">
          <img src={afe} alt="AFE Logo"></img>
        </li>
        <li className="li-partner">
          <img src={ladof} alt="LADOF Logo"></img>
        </li>
        <li className="li-partner">
          <img src={ligap} alt="Liga Portugal Logo"></img>
        </li>
        <li className="li-partner">
          <img src={isport} alt="iSPORT Connect Logo"></img>
        </li>
        <li className="li-partner">
          <img src={fpf} alt="FPF Logo"></img>
        </li>
      </ul>

      <ul className="partners-list partners-bot-row">
        <li className="li-partner">
          <img src={bepro} alt="bepro Logo"></img>
        </li>
        <li className="li-partner">
          <img src={clever} alt="Clever Advertising Logo"></img>
        </li>
        <li className="li-partner">
          <img src={gateio} alt="Gate.io Labs Logo"></img>
        </li>
        <li className="li-partner">
          <img src={ir21} alt="IR21 Capital Logo"></img>
        </li>
        <li className="li-partner">
          <img src={empower} alt="Empower Sports Logo"></img>
        </li>
        <li className="li-partner">
          <img src={bsc} alt="BSC News Logo"></img>
        </li>
        <li className="li-partner">
          <img src={as} alt="AS Logo"></img>
        </li>
      </ul>
    </div>
  );
}

export default Partners;
