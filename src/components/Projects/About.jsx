import React from "react";

function About(props){
    return (
      <div className="about-project">
        <div className="about-box">
          <p className="about-head">{props.head}</p>
          <div className="underline"></div>
          <div className="about-content-box">
            <p className="about-content">{props.content}</p>
          </div>
        </div>
        <img className="about-img" src={props.img} alt="" />
      </div>
    );
}
export default About;