import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";

import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import resume from "../../img/Anusha.pdf";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Anusha Surendran</span>
          <span>
          Aspiring Full-Stack Web Developer
          </span>
        </div>
        
     
        <a href={resume} target="_blank"	><button className="button i-button">Resume</button></a>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/anushaAnu333" target="_blank"><img src={Github} alt="" /></a>
        <a href="https://www.linkedin.com/in/anusha-surendran-324642225" target="_blank"><img src={LinkedIn} alt="" /></a>
         
          
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
       
       
        {/* animation */}
       
        
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
