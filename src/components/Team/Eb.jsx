import React from "react";
import { FaLinkedin } from 'react-icons/fa';


function Eb(props){
    return(
        <div className="eb-box">
            <img className="eb-img" src={props.img}></img>
            <div className="eb-hp">
            <h3 className="eb-head">{props.name}</h3>
            <p className="eb-pos">{props.position}</p>
            </div>
            <a className="eb-link" href={props.link}><FaLinkedin className="eb-ln-icon"/></a>
        </div>
    )
}
export default Eb;