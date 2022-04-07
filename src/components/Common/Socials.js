import "./style/Common.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faYoutube,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className="socials">
      <a
        href="https://t.me/realfevrofficial"
        rel="noreferrer"
        className="social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTelegram} />
      </a>

      <a
        href="https://twitter.com/realfevr"
        rel="noreferrer"
        className="social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a
        href="https://www.youtube.com/c/realfevrtv"
        rel="noreferrer"
        className="social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>

      <a
        href="https://www.facebook.com/RealFevr"
        rel="noreferrer"
        className="social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      <a
        href="https://www.instagram.com/realfevr/"
        rel="noreferrer"
        className="social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://www.linkedin.com/company/realfevr/"
        rel="noreferrer"
        className="social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
}

export default Socials;
