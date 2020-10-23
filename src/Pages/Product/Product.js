import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getProductAction } from "../../Redux/Actions/product.action";
import "./Product.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10%",
  },
  paper: {
    padding: theme.spacing(3),
    width: "250px",
    marginLeft: "15px",
    marginBottom: 30,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    textAlign: "left",
  },
  button: {
    width: "120px",
  },
}));

function Product() {
  const dispatch = useDispatch();
  const history = useHistory();
  const listProduct = useSelector((state) => state.product.data);
  console.log("Ini product di view", listProduct);

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  const handleClick = (id) => {
    history.push(`/detail-product/${id}`);
  };

  const classes = useStyles();

  return (
    <div className="cont-product">
      <div className={classes.root}>
        {/* <Filter /> */}
        <Grid container className={classes.container} spacing={3}>
          {listProduct !== undefined && listProduct.length > 0 ? (
            listProduct.map((item, index) => (
              <div key={index}>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            onClick={() => handleClick(item.id)}
                            src={`${item.imageId}`}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid
                          item
                          xs
                          container
                          className={classes.text}
                          direction="column"
                          spacing={2}
                        >
                          <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                              {item.category}
                            </Typography>
                            <Typography
                              variant="body2"
                              gutterBottom
                              onClick={() => handleClick(item.id)}
                            >
                              {item.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              Rp {item.price}
                            </Typography>
                          </Grid>
                          <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            onClick={() => handleClick(item.id)}
                          >
                            Rent Now
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </div>
            ))
          ) : (
            <div className="load-product">
              <CircularProgress />
              <CircularProgress color="secondary" />
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Product;
