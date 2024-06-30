import React from 'react'
import logo from './Home/images/LOGO.png'
import Handles from './Home/Handles'
import thapar from './Home/images/thapar.svg'
export const Footer = () => {
  return (
    <footer>
      <div className="enactus">
        <div className="enact-img-box">
          <img className="footer-logo" src={logo}></img>
        </div>
        <p className="enact-text">
          <span className="enact-span">
            <span className="enact-span-small">En</span>trepreneurial
          </span>
          <br /> Having the vision to recognise an opportunity and the ability
          to
          <br /> create value from that opportunity.
        </p>
        <p className="enact-text">
          <span className="enact-span">
            <span className="enact-span-small">Act</span>ion
          </span>{' '}
          <br /> refers to the actual steps that student entrepreneurs take to
          plan <br /> and carry out projects that helps the community.
        </p>
        <p className="enact-text">
          <span className="enact-span enact-span-small">Us</span>
          <br />A group of people who believe they have something in common
          <br /> that will help them succeed in their entrepreneurial venture.
        </p>
      </div>
      <div className="v-line"></div>
      <div className="quick-link">
        <p className="qlink-head">Quick Links</p>
        <div className="qlink-box">
          <a className="qlinks" href="#">
            Atrangi
          </a>
          <a className="qlinks" href="#">
            Projects
          </a>
          <a className="qlinks" href="#">
            Events
          </a>
          <a className="qlinks" href="#">
            Team
          </a>

        </div>
        <Handles />
      </div>
      <div className="v-line"></div>
      <div className="address">
        <p className="add-head">Address</p>
        <div className="add-div">
          <img src={thapar} className="add-img" alt="thapar" />
          <p className="add-name">
            THAPAR INSTITUTE OF ENGINEERING AND TECHNOLOGY
          </p>
        </div>
        <p className="add-text">
          Bhadson Rd, Adarsh Nagar, Prem Nagar, Patiala, Punjab 147004
        </p>
      </div>
    </footer>
  );
}
