import React from 'react';

const About = ({bio, image}) => {
  return (
    <section className="section about">
      <div className='title'>
				<h2>About</h2>
				<div className='underline'></div>
			</div>
      <div className="content">
        <p>{bio}</p>
        <img src={image} alt="Profile Photo" id="profile-photo" />
      </div>
    </section>
  );
};

export default About;