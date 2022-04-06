import UserDropdown from "./UserDropdown";

function MainNav() {
  return (
    <div className="main-nav">
      <ul className="nav-links">
        <li>
          <a
            className="nav-link"
            href="https://www.realfevr.com/packs"
            target="_blank"
            rel="noreferrer"
          >
            Packs
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="https://www.realfevr.com/marketplace"
            target="_blank"
            rel="noreferrer"
          >
            Marketplace
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Challenges
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="https://www.realfevr.com/fevr"
            target="_blank"
            rel="noreferrer"
          >
            $FEVR
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Learn
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="https://staking.realfevr.com/"
            target="_blank"
            rel="noreferrer"
          >
            Staking
          </a>
        </li>
      </ul>
      <UserDropdown username={"JReis13"} />
    </div>
  );
}

export default MainNav;
