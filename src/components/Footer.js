import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../styles/Footer.css";
// import English from '../images/kingdom_united_icon.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <p>Find me at:</p>
        <a
          href="https://www.linkedin.com/in/andrijcsuhran/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer" />
        </a>
        <a
          href="https://github.com/fairycreator"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsGithub className="icon-footer" />
        </a>
      </div>

      <p className="text-footer">Developed with ❤ by Andrij Csuhran</p>
      {/* <select className="select-language">
        <option>da-DA</option>
        <option>en-US</option>
      </select> */}
    </footer>
  );
}

export default Footer;
