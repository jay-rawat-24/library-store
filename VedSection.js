import React from "react";
import {Link} from 'react-router-dom'
import './VedSection.css'


const vedSection = () => {
  return (
    <>
    <div className="ved">
      <video src="./vedio/library.mp4" autoPlay loop muted />
      <h1>BOOK-TOWN</h1>
      <p>Find your own book </p>
      <div className="ved-btn">
      <Link to ='/Main'>
      <button className="btns">GET STARTED</button>
      </Link>
      <button className="btns1">READ IT</button>
      </div>
    </div>
    </>
  );
};

export default vedSection;
