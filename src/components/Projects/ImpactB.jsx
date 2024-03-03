import React from "react";
import Impact from "./Impact";
import impact from "./assets/impact.png"
function ImpactB(props){
    return (
      <div className="impact">
      <div className="g-bg"></div>
      <div className="lb-bg"></div>
      <div className="b-bg"></div>
      <img src={impact} className="impact-img-box"></img>
        <div className="impact-content-box">
          <div className="impact-content">
            <h1 className="impact-head">{props.head}</h1>
            <div className="impact-subhead">{props.subhead}</div>
            <Impact
              number="50"
              texthead="PEOPLE EMPLOYED"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Impact
              number="20K"
              texthead="PROFIT GENERATED"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Impact
              number="1T"
              texthead="CLOTHS REUSED"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>
    );
}

export default ImpactB;