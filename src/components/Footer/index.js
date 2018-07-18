import React from "react";
import "./Footer.css";

const Footer = () =>
  <footer className="footer text-center navbar-fixed-bottom">
    <div>
    © 2018 Katie Wang
    </div>
      <div>
        <a href={"https://www.linkedin.com/in/ktwang/"}>
          <img className="socialmedia" src="../assets/images/linkedin.png" alt="LinkedIn"/>
        </a>
        <a href={"https://github.com/KTWangster"}>
          <img className="socialmedia" src="../assets/images/github.png" alt="Github"/>
        </a>
        <a href={"https://twitter.com/ktwangster"}>
          <img className="socialmedia" src="../assets/images/twitter.png" alt="Twitter"/>
        </a>
    </div>
  </footer>

export default Footer;