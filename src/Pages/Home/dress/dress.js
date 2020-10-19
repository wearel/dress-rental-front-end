import React from "react";
import Grid from "@material-ui/core/Grid";
import "./dress.css";
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
          <div>
            <p className="title-dress">500+ Dress High Quality</p>
            <p className="desc-dress">
              Explore lebih dari 500 dress untuk keperluan wedding anda
            </p>
          </div>
        </Grid>

        {/* Grid 2 */}
        <Grid item xs={6} sm={2}>
          <div>
            <div className="img-dress">
              <img className="img-dress-in " src={DressOne} alt="dress one" />
            </div>
            <div>
              <img className="img-dress-in " src={Dresstwo} alt="dress two" />
            </div>
          </div>
        </Grid>

        {/* Grid 3 */}
        <Grid item xs={6} sm={3}>
          <div>
            <div className="img-space">
              <img
                className="img-dress-in"
                src={DressThree}
                alt="dress three"
              />
            </div>
            <div className="img-space">
              <img className="img-dress-in " src={DressFour} alt="dress four" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default dress;
