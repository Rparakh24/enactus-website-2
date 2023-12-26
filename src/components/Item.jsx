import React from "react";


function Item(props){
    return(
        <div>
            <li className="main-item"><a className="main-item-text" href={props.page}>{props.pageName}</a></li>
        </div>
    )
}

export default Item;