import React from "react";
import "./testimony.css";
import impactByte from "../../../Assets/seen/impactbyte.png";
import skilvul from "../../../Assets/seen/skilvul.png";
import google from "../../../Assets/seen/google.png";
import yahoo from "../../../Assets/seen/yahoo.png";
import youtube from "../../../Assets/seen/youtube.png";
import Slide from "../Slideshow/SlideShow";

function testimony() {
  return (
    <div className="cont-testi">
      <h1>How Our customer say</h1>
      <Slide />
      <p className="text-testi">As Seen On</p>
      <div className="cont-img">
        <div className="cont-seen">
          <img className="img-in" src={impactByte} alt="impactbyte" />
          <img className="img-in" src={skilvul} alt="skilvul" />
          <img className="img-in" src={google} alt="google" />
          <img className="img-in" src={yahoo} alt="yahoo" />
          <img className="img-in" src={youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
}

export default testimony;
