import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Handles() {
  return (
    <div className="nav">
      <div>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
      </div>
      <div>
        <a href="mailto:your.email@example.com">
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Handles;
