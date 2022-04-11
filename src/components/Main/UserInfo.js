import avatar from "../../assets/avatar.jpg";
import token1 from "../../assets/token1.png";
import rookie from "../../assets/rookie.png";
import champ from "../../assets/champ.png";
import firstedi from "../../assets/first-edition.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function UserInfo(props) {
  return (
    <div className="user-info">
      <div>
        <img
          className="user-avatar-lg"
          src={avatar}
          alt="User large avatar"
        ></img>
        <div></div>
      </div>

      <p className="user-name-lg">{props.username}</p>

      <p>
        <a href="/" className="user-id">
          {props.user_id} <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </p>

      <div className="fevr-stats">
        <p className="fevr-stat">
          <img className="mini-token" src={token1} alt="Real Fevr token"></img>
          <strong>{props.owned}</strong>OWNED
        </p>
        <p className="fevr-stat">
          <img className="mini-token" src={token1} alt="Real Fevr token"></img>
          <strong>{props.staked}</strong>STAKED
        </p>
      </div>

      <p className="join-date">{props.join}</p>

      <div className="badges">
        <img className="badge" src={rookie} alt="badge"></img>
        <img className="badge" src={champ} alt="badge"></img>
        <img className="badge" src={firstedi} alt="badge"></img>
      </div>

      <div className="user-stats">
        <div className="user-stat">
          <h3 className="user-stat-title">1 / 100000 XP</h3>
          <p className="user-stat-text">Next Level</p>
        </div>

        <div className="separator"></div>

        <div className="user-stat">
          <h3 className="user-stat-title">1</h3>
          <p className="user-stat-text">Moments Owned</p>
        </div>

        <div className="separator"></div>

        <div className="user-stat">
          <h3 className="user-stat-title">Bottom 1%</h3>
          <p className="user-stat-text">Rank</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
