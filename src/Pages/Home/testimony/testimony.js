import React from "react";
// Assets
import impactByte from "../../../Assets/seen/impactbyte.png";
import skilvul from "../../../Assets/seen/skilvul.png";
import google from "../../../Assets/seen/google.png";
import yahoo from "../../../Assets/seen/yahoo.png";
import youtube from "../../../Assets/seen/youtube.png";
// CSS
import "./testimony.css";

// Components
import Slide from "../Slideshow/SlideShow";

function testimony() {
  return (
    <div className="container-sec-3">
      <h1>How Our customer say</h1>
      <Slide />
      <p className="text-testi">As Seen On</p>
      <div className="cont-seen-sec-3">
        <div className="cont-seen">
          <img className="img-sec-3" src={impactByte} alt="impactbyte" />
          <img className="img-sec-3" src={skilvul} alt="skilvul" />
          <img className="img-sec-3" src={google} alt="google" />
          <img className="img-sec-3" src={yahoo} alt="yahoo" />
          <img className="img-sec-3" src={youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
}

export default testimony;
