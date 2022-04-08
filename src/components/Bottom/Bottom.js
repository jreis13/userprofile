import "./style/Bottom.scss";
import Partners from "./Partners";
import Footer from "./Footer";
import binance from "../../assets/power.png";

function Bottom() {
  return (
    <div className="bottom">
      <h2 className="bottom-title">Official Partners</h2>
      <Partners />
      <div className="binance">
        <img src={binance} alt="Powered by Binance"></img>
      </div>
      <Footer />
    </div>
  );
}

export default Bottom;
