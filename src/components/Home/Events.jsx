import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import crCover from './images/cr-cover.jpg';
import deepCover from './images/deepotsav-cover.jpg';
import sbcCover from './images/sbc-cover.jpg';
export default function Events() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const events = [
    {
      name: 'Deepotsav',
      image: deepCover,
      url: '',
    },
    {
      name: 'Corporate Roadies',
      image: crCover,
      url: '',
    },
    {
      name: 'SBC',
      image: sbcCover,
      url: '',
    },
  ];
  return (
    <div className="events-bg" id="event">
      <div className="events-head-container">
        <div className="events-head-content">OUR EVENTS</div>
      </div>

      <div className="events-carousel-container">
        <Slider className="events-slider-container" {...settings}>
          {events.map((item, index) => (
            <div key={index} className="events-card">
              <div style={{ backgroundImage: `url(${item.image})` }}>
                <div className="slide-linear">
                  <div className="events-card-content">
                    <div className="events-card-name">{item.name}</div>
                    <div className="learn-more">
                      <a href={item.url}>LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
