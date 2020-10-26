import React from "react";
import "./dress.css";
import DressOne from "../../../Assets/dress-1.jpg";
import Dresstwo from "../../../Assets/dress-2.jpg";
import DressThree from "../../../Assets/dress-3.jpg";
import DressFour from "../../../Assets/dress-4.jpg";

function dress() {
  return (
    <div className="cont-dress">
      <div>
        <div>
          <p className="title-dress">500+ Dress High Quality</p>
          <p className="desc-dress">
            Explore lebih dari 500 dress untuk keperluan wedding anda
          </p>
        </div>
      </div>

      <div className="cont-dress-two">
        <div className="img-space">
          <img className="img-dress-in " src={DressOne} alt="dress one" />
        </div>
        <div className="img-space">
          <img className="img-dress-in " src={Dresstwo} alt="dress two" />
        </div>
      </div>

      <div>
        <div>
          <div className="img-space">
            <img className="img-dress-in" src={DressThree} alt="dress three" />
          </div>
          <div className="img-space">
            <img className="img-dress-in " src={DressFour} alt="dress four" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default dress;
