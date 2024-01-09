import React from "react";
import Nav from "./Nav";
import heroImage from "../images/hero.png";
import About from "./About";
import Wwd from "./Wwd";
import Journey from "./Journey";
import Project from "./Project";
import Events from "./Events";
import Team from "./Team";
import { Footer } from "./Footer";


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
                    {/* Projects */}
                    <Project/>
                    {/* Events */}
                    <Events/>
                    {/* Team */}
                    <Team offset={3} showArrows={true} height="500px" width="30%" margin="0 auto"/>
                    {/* Footer */}
                    <Footer/>

            </div>
        </div>

    )
}

export default App;