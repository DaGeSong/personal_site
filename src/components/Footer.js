import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon onClick={event => window.location.href = "https://www.linkedin.com/in/songsongyu/"} />
        <a href="mailto:yuqidkj@gmail.com"><EmailIcon /></a>
        <GithubIcon onClick={event => window.location.href = 'https://github.com/DaGeSong'} />
      </div>
      <p> 2022 songsongyu.com</p>
    </div>
  );
}

export default Footer;
