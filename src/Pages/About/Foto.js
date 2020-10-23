import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Foto1 from "../../Assets/about us 1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Grid: {
    justifyContent: "center",
  },
  itemGrid: {
    color: "#555555",
    fontFamily: "Mulish",
    fontSize: 30,
    fontWeight: 900,
    marginTop: "1rem",
  },
  itemGrid2: {
    fontSize: 26,
    fontWeight: 700,
  },
  itemGrid3: {
    fontSize: 19,
  },
  itemGrid4: {
    fontSize: 26,
    fontWeight: 900,
  },
}));

export default function Foto() {
  const classes = useStyles();

  return (
    <div className="root">
      <Grid container style={{ marginLeft: "3rem" }}>
        {/* Gambar 1 */}
        <Grid sm={6}>
          <Grid
            item
            xs={6}
            sm={12}
            className={classes.Grid}
            style={{ marginTop: "2rem" }}
          >
            <img src={Foto1} alt="gaun jawa 1" />
          </Grid>
        </Grid>
        <Grid
          sm={4}
          container
          style={{ marginTop: "1rem", marginLeft: "3rem" }}
          className={classes.itemGrid}
        >
          <Grid spacing={2}>
            <Grid style={{ textAlign: "left" }}>
              {/* Teks 1 */}
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.itemGrid}
              >
                A few words about our <br />
                mission and company
              </Typography>

              {/* Teks 2 */}
              <Typography
                variant="body2"
                gutterBottom
                className={classes.itemGrid3}
                style={{ marginTop: "3rem" }}
              >
                The Emerald Buddha is a figure of a sitting Buddha, <br />
                is the palladium of the kingdom of thailand. The <br />
                Buddha is made of green jade, suprisingly not of emerald <br />
                clothed in gold is approximately 45 cm tall.
              </Typography>

              {/* Teks 3 */}
              <Typography
                variant="body2"
                className={classes.itemGrid2}
                style={{ marginTop: "3rem" }}
              >
                Modern UI design incorporates various devices such as <br />
                expanding panels, hovers
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
