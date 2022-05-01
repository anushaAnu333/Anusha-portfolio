import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkdIn from "@iconscout/react-unicons/icons/uil-linkedin";

import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>anushasurendrankp333@gmail.com</span>
        <div className="f-icons">
          <LinkdIn color="white" size={"3rem"} />
        
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
