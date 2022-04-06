import avatar from "../assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function UserDropdown(props) {
  return (
    <div className="user-dropdown">
      <div>
        <img className="user-avatar-sm" src={avatar} alt="User small avatar" />
      </div>
      <p className="user-name-sm">
        {props.username}
        <FontAwesomeIcon className="dropdown-arrow" icon={faAngleDown} />
      </p>
    </div>
  );
}

export default UserDropdown;
