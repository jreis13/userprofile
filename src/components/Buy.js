import token1 from "../assets/token1.png";

function Buy(props) {
  return (
    <a href="/" className="btn-header">
      <img
        className="token1"
        src={token1}
        alt="token"
        width="30px"
        height="30px"
      ></img>
      <p className="header-bold-text">{props.text}</p>
    </a>
  );
}

export default Buy;
