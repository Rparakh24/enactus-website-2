import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import atirek from "../images/atirek.jpeg";
export default function Team(props) {
    const slides = [{
        key: uuidv4(),
        content: <img src={atirek} alt="1" />
      },
      {
        key: uuidv4(),
        content: <img src={atirek} alt="2" />
      },
      {
        key: uuidv4(),
        content: <img src={atirek} alt="3" />
      },
      {
        key: uuidv4(),
        content: <img src={atirek} alt="4" />
      },
      {
        key: uuidv4(),
        content: <img src={atirek} alt="5" />
      },
      {
        key: uuidv4(),
        content: <img src={atirek} alt="6" />
      },
      {
        key: uuidv4(),
        content: <img src={atirek} alt="7" />
      },
      {
        key: uuidv4(),
        content: <img src={atirek} alt="8" />
      }
      ]
     const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div style={{width:"100%", height:"100%",position:"relative"}}>
        <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
    </div>
  );
}
