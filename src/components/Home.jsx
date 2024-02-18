import React from 'react';
import Team from './Team';
import Events from './Events';
import Journey from './Journey';
import Wwd from './Wwd';
import About from './About';
import heroImage from '../images/hero.png';
import ProjectSlider from './ProjectSlider';

const Home = () => {
  return (
    <div>
      <div className="rectangle">
        {/* hero image */}
        <div className="hero-image-box">
          <img className="hero-img" src={heroImage} alt="hero" />
        </div>
        {/* about us */}
        <About />
      </div>
      <div>
        {/* What we do */}
        <Wwd />
        {/* Our Journey */}
        <Journey />
        {/* Projects */}
        <ProjectSlider />
        {/* Events */}
        <Events />
        {/* Team */}
        <Team
          offset={3}
          showArrows={true}
          height="500px"
          width="30%"
          margin="0 auto"
        />
      </div>
    </div>
  );
};

export default Home;
