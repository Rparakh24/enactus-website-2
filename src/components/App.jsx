import React from "react";
import Nav from "./Nav";
import heroImage from "../images/hero.png";
import About from "./About";
import Wwd from "./Wwd";
import JourneyIcon from "./JourneyIcon";
function App(){
    return(
        <div className="app-container">
            <div className="rectangle"></div>
                {/* navbar */}
                <header>
                   <Nav/> 
                </header>
                {/* hero image */}
                <div className="hero-image-box">
                    <img className="hero-img" src={heroImage}/>
                </div>
                {/* about us */}
                <About />
                {/* What we do */}
                <Wwd/>
                {/* Our Journey */}
                <div className="journey">
                    <h1 className="journey-head">OUR JOURNEY</h1>
                    <div className="journey-icon-box">
                        <JourneyIcon/>
                        <JourneyIcon/>
                        <JourneyIcon/>
                        <JourneyIcon/>
                    </div>
                    <p className="journey-text"></p>
                </div>
        </div>

    )
}

export default App;