import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Core(props){
    return(
        <div className="core-box">
        <p className="core-name">{props.name}</p>
        <a className="core-link" href={props.link}>{faLinkedin}</a>
        </div>
    )
}

export default Core;