import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    

    <div className="experience" id='experience'>
      <div className="awesomes">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}></span>
        <p className="p">Education</p>
        
      
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="achieve">
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Full-Stack Web Development</div>
        <span  style={{color: darkMode?'white':''}}>2021-2022 </span>
        <span>Masai School</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Accounting</div>
        <span  style={{color: darkMode?'white':''}}>2019-2021 </span>
        <span>ACME</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Bsc Mathematics</div>
        <span  style={{color: darkMode?'white':''}}>2016-2019 </span>
        <span>Calicut University</span>
      </div>
      </div>
     
    </div>
  );
};

export default Experience;
