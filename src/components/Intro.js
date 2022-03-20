import React from 'react';

const Intro = ({socials}) => {
  return (
    <section className="section intro">
    <div className="">
      <h1>Hi, I'm Laura 👋🏼</h1>
      <h4>Full Stack Developer</h4>
      <div className="socials-list">
        {socials
        .filter(social => social.url)
        .map((social) => {
          return <a key={social.id} href={social.url} target="_blank">{social.icon}</a>
        })}
      </div>
    </div>
    </section>
  );
};

export default Intro;