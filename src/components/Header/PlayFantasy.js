import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-regular-svg-icons";

function PlayFantasy() {
  return (
    <div>
      <a
        className="btn-play-fantasy"
        href="https://fantasy.realfevr.com"
        rel="noreferrer"
        target="_blank"
      >
        Play Fantasy <FontAwesomeIcon icon={faFutbol} />
      </a>
    </div>
  );
}

export default PlayFantasy;
