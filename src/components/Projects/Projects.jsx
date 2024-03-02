import React from 'react';
import './Projects.css';
import about_img from './assets/about_bg.svg';
import Head from './Head';
import sdg from './assets/sdg.svg';
import About from './About';
import SDG from './SDG';
import ImpactB from './ImpactB';
const Projects = () => {
  return (
    <div className="container">
      <div className="landing-page">
        <Head className="head one" letter="A" />
        <Head className="head two" letter="T" />
        <Head className="head three" letter="R" />
        <Head className="head four" letter="A" />
        <Head className="head five" letter="N" />
        <Head className="head six" letter="G" />
        <Head className="head seven" letter="I" />
      </div>
      {/* about */}
      <About
        head="ABOUT ATRANGI"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        img={about_img}
      />
      {/* sdg */}
      <SDG
        img={sdg}
        head="SDG"
        subhead="INCLUDED IN ATRANGI"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      {/* impact */}
      <ImpactB head="IMPACT" subhead="ON PEOPLE'S LIFE" />
    </div>
  );
};
export default Projects;
