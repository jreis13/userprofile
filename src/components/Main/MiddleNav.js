import { useState } from "react";

function MiddleNav() {
  const [isActive, setActive] = useState(false);

  const toggleClass = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <div>
      <ul className="middle-navbar">
        <li>
          <a className="middle-nav-item" onClick={toggleClass} href="/">
            Collection
          </a>
        </li>
        <li>
          <a className="middle-nav-item" onClick={toggleClass} href="/">
            Transactions
          </a>
        </li>
        <li>
          <a className="middle-nav-item active" onClick={toggleClass} href="/">
            Achievements
          </a>
        </li>
        <li>
          <a className="middle-nav-item" onClick={toggleClass} href="/">
            Rewards
          </a>
        </li>
        <li>
          <a className="middle-nav-item" onClick={toggleClass} href="/">
            Notifications
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MiddleNav;
