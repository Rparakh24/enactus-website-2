import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import nyra from "../images/nyra-cover.svg";
import atrangi from "../images/atrangi-cover.svg";

const indicators = (index) => <div className="indicator"></div>;

const Project = () => {
  const projects = [
    {
      name: 'Atrangi',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      image: atrangi,
      url: '',
    },
    {
      name: 'Nyra',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      image: nyra,
      url: '',
    },
  ];
  return (
    <div className='project-container'>
      <Slide vertical slidesToShow={1} indicators={indicators}>
        {projects.map((item, index) => (
          <div key={index} className="each-slide-effect">
            <div style={{ backgroundImage: `url(${item.image})` }}>
              <div className="slide-radial">
                <div className="slide-content">
                  <div className="slide-name">
                    <div>Project</div> <>{item.name}</>
                  </div>
                  <div className="slide-desc">{item.desc}</div>
                  <div className="learn-more">
                    <a href={item.url}>LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Project;