import React, { useState } from "react";

// import { useHistory } from "react-router-dom";

// Style CSS
import "./Login.css";

// material ui component
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import InputAdornment from "@material-ui/core/InputAdornment";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import Axios from "axios";

function Login() {
  // const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // handleChange form
  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post("https://gaun-rental.herokuapp.com/login", login)
      .then((response) => {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="cont-login">
      <Grid container spacing={0} justify="center" style={{ marginTop: 130 }}>
        <Grid item>
          <Paper
            style={{ height: 500, width: 800, padding: 20, display: "flex" }}
          >
            {/* section gambar */}
            <div></div>

            {/* form login */}
            <div style={{ height: 500, width: 400 }}>
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 70,
                    marginRight: 70,
                  }}
                >
                  {/* input email */}
                  <TextField
                    label="E-mail"
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    name="email"
                    value={login.email}
                    onChange={(event) => handleChange(event)}
                  />

                  {/* input password */}
                  <TextField
                    label="Password"
                    margin="normal"
                    type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockRounded />
                        </InputAdornment>
                      ),
                    }}
                    name="password"
                    value={login.password}
                    onChange={(event) => handleChange(event)}
                  />
                  <Button type="submit" style={{ backgroundColor: "#f1a3ad" }}>
                    Login
                  </Button>
                </div>
              </form>

              {/* bukan button form */}
              <h6>
                Don't have an account ? please
                <Button style={{ color: "#fia3ad" }}>Sign up</Button>
              </h6>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
