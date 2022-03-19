import React from 'react';

const Intro = ({socials}) => {
  return (
    <div className="intro">
      <h1>Hi, I'm Laura</h1>
      <h4>Full Stack Developer</h4>
      {/* socials list */}
      {socials.map((social) => {
        return <a key={social.id} href={social.url}>{social.icon}</a>
      })}
    </div>
  );
};

export default Intro;