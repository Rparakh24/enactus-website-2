import React from "react";
import aboutMap from "./images/aboutMap.png"
import AboutIcon from "./AboutIcon";
import eye from "./images/eye.png";
import process from "./images/process.png";
import action from "./images/action.png";
function About(){
    return (
      <div className="about" id="about">
        <div className="content">
          <h1 className="about-heading-one">ABOUT US</h1>
          <h2 className="about-heading-two">WHAT WE BELIEVE IN</h2>
          <div className="underline"></div>
          <p className="about-text">
            Enactus Thapar unites students, academic professionals, and business
            leaders in a shared commitment to ities. We undertake projects
            tailored to address social, economic, and environmental challenges.
            These initiatives often entail applying innovative business
            solutions and entrepreneurial thinking to bring about sustainable
            and impactful change. In essence, Enactus Thapar aims to empower
            individuals and communities, promoting .
          </p>
          <button className="about-btn">
            <p className="about-btn-text">LEARN MORE</p>
          </button>
        </div>
        <div className="ref-image">
          <img className="about-map" src={aboutMap} alt="Map" />
          <div className="main-icon-box">
            <AboutIcon
              imageSrc={eye}
              headName="SEEING OPPURTUNITIES"
              text="lobal organization, Enactus Thapar is guided by a set of core values "
            />
            <AboutIcon
              imageSrc={action}
              headName="TAKING ACTION"
              text="obal organization, Enactus Thapar is guided by a set of core values and "
            />
            <AboutIcon
              imageSrc={process}
              headName="ENABLING PROCESS"
              text="obal organization, Enactus Thapar is guided by a set of core val"
            />
            <AboutIcon
              imageSrc={process}
              headName="ENABLING PROCESS"
              text="obal organization, Enactus Thapar is guided by a set of core values "
            />
          </div>
        </div>
      </div>
    );
}

export default About;