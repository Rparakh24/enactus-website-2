import React from "react";

function SDG(props){
    return(
        <div className='sdg'>
              <img className="sdg-img" src={props.img}></img>
            <div className='sdg-text'>
              <p className='sdg-head'>{props.head}</p>
              <p className='sdg-subhead'>{props.subhead}</p>
              <div className='sdg-content-box'>
                <p className='sdg-content'>{props.content}</p>
              </div>
            </div>
            {/* <div className='sdg-images'> */}
              {/* <img className="sdg-overlap" style={} src={}></img> */}
            {/* </div> */}
          </div>
    )
}

export default SDG;