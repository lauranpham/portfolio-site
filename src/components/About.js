import React from 'react';

const About = ({bio, image}) => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>{bio}</p>
      <img src={image} alt="Profile Photo" />
    </div>
  );
};

export default About;