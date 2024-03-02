import React from 'react';
import weDo from './images/weDo.png';
import wd from './images/wd.png';
function Wwd() {
  return (
    <div className="what-we-do">
      <div className="wd-img-box">
        <img className="wd-img" src={weDo} alt="what we do" />
      </div>

      <div className="wd-content-box" style={{ backgroundImage: `url(${wd})` }}>
        {/* <div className="wd-content-img">
                            <img className="wda-img" src={wd}/>
                        </div> */}
        <div className="wd-content">
          <h1 className="wd-content-head">WHAT WE DO</h1>
          <div className="underline wd-underline"></div>
          <p className="wd-content-text">
            Enactus Thapar unites students, academic professionals, and business
            leaders in a shared commitment to leveraging entrepreneurial action
            for social impact. As part of a global organization, Enactus Thapar
            is guided by a set of core values and beliefs that underpin its
            mission and activities. We undertake projects tailored to address
            social, economic, and environmental challenges. These initiatives
            often entail applying innovative business solutions and
            entrepreneurial thinking to bring about sustainable and impactful
            change. In essence, Enactus Thapar aims to empower individuals and
            communities, promoting self-sufficiency and creating a positive
            ripple effect that extends far beyond the immediate impact of each
            endeavor.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Wwd;
