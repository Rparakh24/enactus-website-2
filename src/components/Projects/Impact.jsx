import React from "react";

function Impact(props){
    return(
        <div className="impact-box">
            <div className="impact-subbox">
                <div className="impact-number">{props.number}</div>
                <div className="impact-text">
                    <div className="impact-text-head">{props.texthead}</div>
                    <div className="impact-text-content">{props.text}</div>
                </div>
            </div>
            <div className="underline"></div>
        </div>
    )
}

export default Impact;