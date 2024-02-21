import { FaLinkedin } from 'react-icons/fa';
import React from "react";

function Core(props){
    return(
        <div className="core-box">
            <p className="core-name">{props.name}</p>
            <a className="core-link" href={props.link}><FaLinkedin className='linkedin-icon'/>
</a>
        </div>
    )
}

export default Core;