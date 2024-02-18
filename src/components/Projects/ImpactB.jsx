import React from "react";
import Impact from "./Impact";
function ImpactB(props){
    return(
        <div className='impact'>
            <div className='impact-content-box'>
              <div className='impact-content'>
                <p className='impact-head'>{props.head}</p>
                <p className='impact-subhead'>{props.subhead}</p>
                <Impact number="50" texthead="PEOPLE EMPLOYED" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "/>
                <Impact number="20K" texthead="PROFIT GENERATED" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "/>
                <Impact number="1T" texthead="CLOTHS REUSED" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "/>
                </div>
            </div>
          </div>
    )
}

export default ImpactB;