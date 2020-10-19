import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Product.css";

// Data Category Dress
const category = [
  { title: "Club Dresses", year: 2020 },
  { title: "Casual Dresses", year: 2019 },
  { title: "Little Black Dresses", year: 2018 },
  { title: "Backless dresses", year: 2020 },
  { title: "BodyCon Dresses", year: 2020 },
  { title: "Formal Dresses", year: 2019 },
  { title: "Lace Dresses", year: 2018 },
  { title: "Long Sleeve Dresses", year: 2020 },
];

function ProductPage() {
  const options = category.map((options) => {
    const firstLetter = options.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...options,
    };
  });

  return (
    <div className="cont-product">
      <Grid container spacing={5}>
        {" "}
        <Grid className="teks" item xs={6} sm={3}>
          <Autocomplete
            id="grouped-demo"
            options={options.sort(
              (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            )}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="With categories"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            id="grouped-demo"
            options={options.sort(
              (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            )}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Harga" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <p></p>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="secondary">
            Find Dress
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductPage;
