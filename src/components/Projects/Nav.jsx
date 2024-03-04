import React from "react";
import Item from "../Home/Item"
import { Link } from 'react-router-dom';
function Nav(){
    return(
        <div>
            <ul className="p-nav-ul">
            <li className="p-nav-item"><Link className="main-item-text" to="/">Home</Link></li>
            <li className="p-nav-item"><Link className="main-item-text" to="/about">About</Link></li>
            <li className="p-nav-item"><Link className="main-item-text" to="/team">Team</Link></li>
            </ul>
        </div>
    )
}

export default Nav;