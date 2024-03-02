import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function JourneyIcon(props){
    return (
      <div className="journey-icon">
        <FontAwesomeIcon icon={faClock} className="j-ficon" />
        <div className="j-content">
          <h2 className="j-content-head">{props.head}</h2>
          <p className="j-content-text">{props.text}</p>
        </div>
      </div>
    );
}

export default JourneyIcon;