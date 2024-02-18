import React from "react";

function Impact(props){
    return(
        <div className="impact-box">
            <div className="impact-subbox">
                <p className="impact-number">{props.number}</p>
                <div className="impact-text">
                    <p className="impact-text-head">{props.texthead}</p>
                    <p className="impact-text-content">{props.text}</p>
                </div>
            </div>
            <div className="underline"></div>
        </div>
    )
}

export default Impact;