import React from "react";
import Nav from "./Nav";
import heroImage from "../images/hero.png";
import aboutMap from "../images/aboutMap.png"
import AboutIcon from "./AboutIcon";
function App(){
    return(
        <div className="app-container">
            <div className="rectangle"></div>
                <header>
                   <Nav/> 
                </header>
                {/* hero image */}
                <div className="hero-image-box">
                    <img className="hero-img" src={heroImage}/>
                </div>
                {/* about us */}
                <div className="about">
                    <div className="content">
                        <h1 className="about-heading-one">ABOUT US</h1>
                        <h2 className="about-heading-two">WHAT WE BELIEVE IN</h2>
                        <div className="underline"></div>
                        <p className="about-text">Enactus Thapar unites students, academic professionals, and business leaders in a shared commitment to ities. We undertake projects tailored to address social, economic, and environmental challenges. These initiatives often entail applying innovative business solutions and entrepreneurial thinking to bring about sustainable and impactful change. In essence, Enactus Thapar aims to empower individuals and communities, promoting .</p>
                        <button className="about-btn"><p className="about-btn-text">LEARN MORE</p></button>
                    </div>
                    <div className="ref-image">
                        <img className="about-map" src={aboutMap} alt="Map" />
                        <div className="main-icon">
                            <AboutIcon />
                            <AboutIcon  />
                            <AboutIcon  />
                            <AboutIcon
                        </div>
                    </div>

                </div>
        </div>

    )
}

export default App;