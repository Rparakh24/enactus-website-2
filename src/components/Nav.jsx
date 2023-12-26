import React from "react";
import logoImage from "../images/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import Handles from "./Handles";
function Nav(){
    return(
        <div className="navbar overlay">
                        <div className="logo">
                            <img className="logo-img" src={logoImage} alt="LOGO"/>
                        </div>
                        <div className="nav-box">
                            <ul className="nav">
                                <Item page="index.html" pageName="HOME"/>
                                <Item page="about.html" pageName="ABOUT"/>
                                <Item page="events.html" pageName="EVENT"/>
                                <Item page="projects.html" pageName="PROJECTS"/>
                            </ul>
                        </div>
                        <Handles/>
            
                        <div className="contact">
                            <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                            <a href="#contact" className="contact-text"> CONTACT US</a>
                        </div>
                    </div>
    );
}

export default Nav;