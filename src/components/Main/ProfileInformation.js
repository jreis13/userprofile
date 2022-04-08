import diamond from "../../assets/diamond.png";
import pentagon from "../../assets/pentagon.png";
import legendary from "../../assets/legendary.png";

function ProfileInformation(props) {
  return (
    <div className="profile-info">
      <ul className="profile-info-grid">
        <li className="profile-info-item">
          <div className="item-top-info">
            <img className="borderless" src={diamond} alt="Diamond"></img>
            <p className="rank">NFT Collector</p>
            <p className="level-text">Level 1</p>
          </div>

          <div className="description">
            <p className="alt-text">
              Collect a total of 25 NFTs in your wallet (minted)
            </p>
          </div>

          <div className="progress-bar"></div>
          <div className="reward">150 XP</div>
        </li>

        <li className="profile-info-item">
          <div className="item-top-info">
            <img src={legendary} alt="Legendary item"></img>
            <p className="rank">NFT Collector</p>
            <p className="level-text">Level 1</p>
          </div>

          <div className="description">
            <p className="alt-text">
              Collect a total of 25 NFTs in your wallet (minted)
            </p>
          </div>

          <div className="progress-bar"></div>
          <div className="reward">150 XP</div>
        </li>

        <li className="profile-info-item">
          <div className="item-top-info">
            <img className="borderless" src={pentagon} alt="Pentagon"></img>
            <p className="rank">NFT Collector</p>
            <p className="level-text">Level 1</p>
          </div>

          <div className="description">
            <p className="alt-text">
              Collect a total of 25 NFTs in your wallet (minted)
            </p>
          </div>

          <div className="progress-bar"></div>
          <div className="reward">150 XP</div>
        </li>
        <li className="profile-info-item">
          <div className="item-top-info">
            <img className="borderless" src={pentagon} alt="Pentagon"></img>
            <p className="rank">Trade Master</p>
            <p className="level-text">Level 2</p>
          </div>

          <div className="description">
            <p className="alt-text">
              Make $2000 selling and buying Moments in the marketplace
            </p>
          </div>

          <div className="progress-bar"></div>
          <div className="reward">150 XP</div>
        </li>
      </ul>
    </div>
  );
}

export default ProfileInformation;
