import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Hello! I'm a passionate developer who enjoys building web applications.
        I love exploring new technologies and constantly learning to improve my skills.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}


export default About;
