import { useState } from "react";

function MiddleNav() {
  const links = [
    "Collection",
    "Transactions",
    "Achievements",
    "Rewards",
    "Notifications",
  ];

  const [active, setActive] = useState(null);

  return (
    <div>
      <ul className="middle-navbar">
        {links.map((link) => (
          <li>
            <a
              href="/"
              className={`middle-nav-item ${active === link && "active"}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(link);
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiddleNav;
