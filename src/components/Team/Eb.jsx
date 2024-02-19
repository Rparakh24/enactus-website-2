import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Eb(props){
    return(
        <div className="eb-box">
            <img className="eb-img" src={props.img}></img>
            <h3 className="eb-head">{props.name}</h3>
            <p className="eb-pos">{props.position}</p>
            <a className="eb-link" href={props.link}>{faLinkedin}</a>
        </div>
    )
}
export default Eb;