import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { IoMailOpen  } from "react-icons/io5";


function Eb(props){
    return(
        <div className="eb-box">
            <img className="eb-img" src={props.img}></img>
            <div className="eb-hp">
            <h3 className="eb-head">{props.name}</h3>
            <p className="eb-pos">{props.position}</p>
            </div>
            <div className="link-box">
            <a className="eb-link" href={props.link}><FaLinkedin className="eb-ln-icon"/></a>
            <a className="eb-link" href={props.link}><IoMailOpen   className="eb-ln-icon icon2"/></a>
            </div>
        </div>
    )
}
export default Eb;