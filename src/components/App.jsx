import React from "react";
import Nav from "./Nav";
import heroImage from "../images/hero.png";
import About from "./About";
import Wwd from "./Wwd";
import Journey from "./Journey";
function App(){
    return(
        <div className="app-container">
            <div className="rectangle ">
            <header>
                    {/* navbar */}
                    <Nav/> 
                    </header>
                    {/* hero image */}
                    <div className="hero-image-box">
                        <img className="hero-img" src={heroImage}/>
                    </div>
                    {/* about us */}
                    <About />
            </div>
                
                <div>
                    
                    {/* What we do */}
                    <Wwd/>
                    {/* Our Journey */}
                    <Journey/>
                </div>
        </div>

    )
}

export default App;