import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FaClockRotateLeft } from "react-icons/fa6";


function JourneyIcon(props){
    return (
      <div className="journey-icon">
      <div><FaClockRotateLeft className="j-icon" /></div>
        <div className="j-content">
          <h2 className="j-content-head">{props.head}</h2>
          <p className="j-content-text">{props.text}</p>
        </div>
      </div>
    );
}

export default JourneyIcon;