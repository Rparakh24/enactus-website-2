import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Handles() {
  return (
    <div className="social-handles">
      <ul className="nav">
            <li>
                <div className="social-handle-cover">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon"/>
                </a>
                </div>
            </li>
            <li>
                <div className="social-handle-cover">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
                </a>
                </div>
            </li>
            <li>
                <div className="social-handle-cover">
                <a href="mailto:your.email@example.com">
                    <FontAwesomeIcon icon= {faEnvelope} className="social-icon"/>
                </a>
                </div>
            </li>
       
      </ul>
    </div>
  );
}

export default Handles;
