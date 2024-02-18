import React from "react";

function Head(props){
    return(
            <div className={props.className}>
                <p className='head-text'>{props.letter}</p>
            </div>
    )
}
export default Head;