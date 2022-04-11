import diamond from "../../assets/diamond.png";
import pentagon from "../../assets/pentagon.png";
import legendary from "../../assets/legendary.png";

function ProfileInformation() {
  function handleClick(e) {
    e.preventDefault();

    const clicked = document.getElementById("claim");
    const clickedXP = document.getElementById("click-reward");

    console.log(clicked);
    clicked.innerHTML = "Complete & claimed";
    clickedXP.classList = "reward-faded";
    clicked.classList = "inner-bar-claimed";
  }

  return (
    <div className="profile-info">
      <ul className="profile-info-grid">
        <li className="profile-info-item">
          <div className="item-top-info">
            <img className="borderless" src={diamond} alt="Diamond"></img>
            <p className="rank">NFT Collector</p>
            <div className="item-bot-info">
              <p className="level-text">Level 1</p>
              <p className="alt-text">
                Collect a total of 25 NFTs in your wallet (minted)
              </p>
            </div>
          </div>
          <div className="progress-bar">
            <div className="inner-bar-first">
              <p className="bar-text">7 / 25</p>
            </div>
          </div>
          <div className="reward">150 XP</div>
        </li>

        <li className="profile-info-item">
          <div className="item-top-info">
            <img src={legendary} alt="Legendary"></img>
            <p className="rank">NFT Collector</p>
            <p className="level-text">Level 1</p>
            <div className="item-bot-info">
              <p className="alt-text-border">
                Collect a total of 25 NFTs in your wallet (minted)
              </p>
            </div>
          </div>
          <div className="progress-bar">
            <div className="inner-bar-second">
              <p className="bar-text-second">
                1122 / <p className="bar-text-second-right">2000</p>
              </p>
            </div>
          </div>
          <div className="reward">Legendary Iker Casillas collectible</div>
        </li>

        <li className="profile-info-item">
          <div className="item-top-info">
            <img className="borderless" src={diamond} alt="Diamond"></img>
            <p className="rank">NFT Collector</p>
            <p className="level-text">Level 1</p>
            <div className="item-bot-info">
              <p className="alt-text">
                Collect a total of 25 NFTs in your wallet (minted)
              </p>
            </div>
          </div>
          <div className="progress-bar">
            <div
              id="claim"
              onClick={handleClick}
              className="inner-bar-complete"
            >
              Click to claim reward
            </div>
          </div>
          <div id="click-reward" className="reward">
            150 XP
          </div>
        </li>

        <li className="profile-info-item">
          <div className="item-top-info">
            <img className="borderless" src={pentagon} alt="Pentagon"></img>
            <p className="rank">Trade Master</p>
            <p className="level-text">Level 2</p>
            <div className="item-bot-info">
              <p className="alt-text">
                Make $2000 selling and buying Moments in the marketplace
              </p>
            </div>
          </div>
          <div className="progress-bar">
            <div className="inner-bar-claimed">Complete & claimed</div>
          </div>
          <div className="reward-faded">150 XP</div>
        </li>
      </ul>
    </div>
  );
}

export default ProfileInformation;
