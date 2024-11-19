import React from "react";
import { image } from '../data/user'; 

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This was made.</p>
      <img src={image} alt="This was made" />
    </div>
  );
}

export default About;