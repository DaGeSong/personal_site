import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am SongSong</h2>
        <div className="prompt">
          <p>A Cloud Software Developer with a passion for creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Cloud Computing</h2>
            <span>
              Cloud Solution, DevOps, Cloud Migration, Serverless Architecture, Containers, Cloud Security
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Flash
              MySQL, MongoDB, DynamoDB
            </span>
          </li>
          <li className="item">
            <h2>Front-End</h2>
            <span>React, BootStrap, Html, CSS, NPM, MaterialUI</span>
          </li>
          <li className="item">
            <h2>Electrical Engineering</h2>
            <span>Power Electronics, Internet of Things, Computer Network</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
