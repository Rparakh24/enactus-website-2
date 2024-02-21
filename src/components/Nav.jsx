import React from "react";
import logoImage from "../images/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import Handles from "./Handles";
function Nav(){
    return(
        <div className="navbar ">
                        <div className="logo">
                            <img className="logo-img" src={logoImage} alt="LOGO"/>
                        </div>
                        <div className="nav-box">
                            <ul className="nav">
                                <Item link="/" name="HOME"/>
                                <Item link="/#about" name="ABOUT"/>
                                <Item link="/team" name="TEAM"/>
                                <Item link="/projects" name="PROJECTS"/>
                            </ul>
                        </div>
                        <Handles/>
            
                        <div className="contact">
                            <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                            <a href="#contact" className="contact-text"><p>CONTACT US</p></a>
                        </div>
                    </div>
    );
}

export default Nav;