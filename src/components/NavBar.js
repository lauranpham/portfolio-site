import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { social } from './data';
// import logo from './logo.svg';

const Navbar = ({links, setSelectedPage, selectedPage}) => {
  return (
    <div className="btn-container">
    {links.map((item, index) => {
      return (
        <button
          key={item.id}
          onClick={() => setSelectedPage(index)}
          className={`job-btn ${index === selectedPage && 'active-btn'}`}
        >
          {item.text}
        </button>
      )
    })}
  </div>
  )
};

export default Navbar;
