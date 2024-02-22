import React from "react";
import JourneyIcon from "./JourneyIcon";
import journeyImage from "./images/journeyImg.png";
function Journey(){
    return(
        <div className="journey">
                    <div className="journey-box" style={{backgroundImage:`url(${journeyImage})`}}>
                        <h1 className="journey-head">OUR JOURNEY</h1>
                        <div className="journey-icon-box">
                            <JourneyIcon head="11 YEARS" text="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
                            <JourneyIcon head="11 YEARS" text="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
                            <JourneyIcon head="11 YEARS" text="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
                            <JourneyIcon head="11 YEARS" text="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
                        </div>
                        <div className="journey-text-box">
                            <p className="journey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Erat imperdiet sed euismod nisi porta lorem. Lacus viverra vitae congue eu consequat ac felis donec. Adipiscing elit ut aliquam purus. Eu feugiat pretium nibh ipsum. Lacus laoreet non curabitur gravida.</p>

                        </div>
                    </div>
                </div>
    );
}

export default Journey;