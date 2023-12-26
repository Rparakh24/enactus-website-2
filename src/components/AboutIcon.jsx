import React from "react";

function AboutIcon(props){
    return(
        <div>
            <img className="about-icon-img" src={props.imageSrc}></img>
            <p className="about-icon-head">{props.headName}</p>
            <p className="about-icon-text">{props.text}</p>
        </div>
    );
}

export default AboutIcon;