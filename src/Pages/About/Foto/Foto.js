import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Foto
import Foto1 from "../../../Assets/about-foto/Gaun jawa 2.png";
import Foto2 from "../../../Assets/about-foto/Gaun jawa 3.png";
import Foto3 from "../../../Assets/about-foto/Gaun jawa 4.png";
import Foto4 from "../../../Assets/about-foto/Gaun jawa 5.png";

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
    fontSize: 36,
    fontWeight: 900,
  },
  itemGrid2: {
    fontSize: 30,
    fontWeight: 700,
  },
  itemGrid3: {
    fontSize: 24,
  },
  itemGrid4: {
    fontSize: 26,
    fontWeight: 900,
  },
  button: {
    backgroundColor: "#FF667A",
    fontFamily: "Mulish",
    color: "#555555",
    "&:hover": {
      backgroundColor: "#FFACB7",
    },
  },
}));

export default function Foto() {
  const classes = useStyles();

  return (
    <div className="root">
      <Grid container style={{ marginLeft: "3rem" }}>
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
          <Grid container spacing={2} className={classes.Grid}>
            <Grid item xs={6} sm={3}>
              <img src={Foto2} alt="gaun jawa 2" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src={Foto3} alt="gaun jawa 3" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src={Foto4} alt="gaun jawa 4" />
            </Grid>
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
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.itemGrid}
              >
                Javanese Dress
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.itemGrid2}
              >
                Product Description
              </Typography>
              <Typography variant="body2" className={classes.itemGrid3}>
                Pakaian adalah bahan tekstil dan serat yang digunakan sebagai
                penutup tubuh. Pakaian adalah kebutuhan pokok manusia selain
                makanan dan tempat berteduh/tempat tinggal (rumah). Manusia
                membutuhkan pakaian untuk melindungi dan menutup dirinya.
              </Typography>
            </Grid>
            <Grid container style={{ textAlign: "left" }}>
              <Grid sm={6}>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.itemGrid4}
                  style={{ marginTop: "1rem" }}
                >
                  Price Per Day
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.itemGrid3}
                >
                  Rp 20.000.000
                </Typography>
              </Grid>
              <Grid sm={4} style={{ marginTop: "2rem", marginLeft: "4rem" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Rent Now
                </Button>
              </Grid>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.itemGrid3}
                style={{ marginTop: "2rem" }}
              >
                by Uluwatu Handmade Balinese Lace — Wedding Dress
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
