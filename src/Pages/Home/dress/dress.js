import React from "react";
import Grid from "@material-ui/core/Grid";

// CSS
import "./dress.css";

// Assets
import DressOne from "../../../Assets/dress-1.jpg";
import Dresstwo from "../../../Assets/dress-2.jpg";
import DressThree from "../../../Assets/dress-3.jpg";
import DressFour from "../../../Assets/dress-4.jpg";

function dress() {
  return (
    <div className="cont-dress">
      {/* Grid 1 */}
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <div className="cont-one">
            <p className="title-text-sec-2">500+ Dress High Quality</p>
            <p className="desc-text-sec-2">
              Explore lebih dari 500 dress untuk keperluan wedding anda
            </p>
          </div>
        </Grid>

        {/* Grid 2 */}
        <Grid item xs={6} sm={2}>
          <div>
            <div className="cont-img1-sec-2">
              <img className="img-sec-2" src={DressOne} alt="dress one" />
            </div>
            <div className="cont-img2-sec-2">
              <img className="img-sec-2" src={Dresstwo} alt="dress two" />
            </div>
          </div>
        </Grid>

        {/* Grid 3 */}
        <Grid item xs={6} sm={3}>
          <div className="cont-two">
            <div className="cont-img3-sec-2">
              <img className="img-sec-2" src={DressThree} alt="dress three" />
            </div>
            <div className="cont-img4-sec-2">
              <img className="img-sec-2" src={DressFour} alt="dress four" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default dress;
