import React, { useState } from 'react';

const Project = ({id, image, desc, languages, title}) => {
  // const [readMore, setReadMore] = useState(false);

  return <article className="single-project">
    <img src={image} alt={title} />
    <footer>
      <div className="project-desc">
        <h4>{title}</h4>
        <h4 className="project-price">${languages}</h4>
      </div>
      <p> {desc} </p>
      {/* <button className="delete-btn">not interested</button> */}
    </footer>
  </article>;
};

export default Project;
