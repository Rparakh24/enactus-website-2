import React from "react";
import logoImage from './Home/images/LOGO.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import Item from "./Home/Item";
import Handles from "./Home/Handles";
function Nav(){
    return (
      <div className="navbar ">
        <div className="nav-box">
          <div className="logo">
            <img className="logo-img" src={logoImage} alt="LOGO" />
          </div>
          <ul className="nav">
            <Item link="/" name="HOME" />
            <Item link="/#about" name="ABOUT" />
            <Item link="/team" name="TEAM" />
            <Item link="/projects" name="PROJECTS" />
          </ul>
        </div>
        <div className="social-handle-cover">
          <Handles />

          <div className="contact">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <a href="#contact" className="contact-text">
              <p>CONTACT US</p>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Nav;