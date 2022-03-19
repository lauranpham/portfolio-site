import React, { useState } from 'react';
import {socials} from './data'

const Project = ({id, image, desc, languages, title, links}) => {
  // const [readMore, setReadMore] = useState(false);
  console.log("links", links)
  return <article className="single-project">
    <img src={image} alt={title} />
    <footer>
      <div className="project-desc">
        <h4>{title}</h4>
        <div className="project-languages">
          {languages.map((language) => {
            return <h4 className="project-language">{language}</h4>
          })}
        </div>
      </div>
      <p> {desc} </p>
      {/* list of links and maps to socials icons */}
      <div className="socials-list">
        {links.map((link) => {
          console.log(socials.find((social) => social.type === link.type))
          return <a key={link.id} href={link.url} target="_blank">
            {socials.find((social) => social.type === link.type).icon}
            </a>
        })}
      </div>
      {/* <button className="delete-btn">not interested</button> */}
    </footer>
  </article>;
};

export default Project;
