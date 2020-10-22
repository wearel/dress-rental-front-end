import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import Axios from "axios";
import { registerActions } from '../../Redux/Actions/user.action';

// Style CSS
import "./Register.css";

// --------------- material ui core component ---------------
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

// --------------- material ui icon ---------------
import { AccountCircle, LockRounded, AddIcCall } from "@material-ui/icons";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    nohandphone: "",
  });

  const isLogged = useSelector((state) => state.user);
  console.log('isLogged', isLogged);

  // handleChange form
  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   Axios.post("https://gaun-rental.herokuapp.com/register", register)
  //     .then((response) => alert(response.data.message))
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="cont-register">
      <div>
        <Grid container spacing={0} justify="center" style={{ marginTop: 130 }}>
          <Grid item>
            <Paper
              style={{ height: 500, width: 800, padding: 20, display: "flex" }}
            >
              {/* --------------- form register --------------- */}
              <div style={{ height: 500, width: 400 }}>
                <h3>Register</h3>

                <form onSubmit={(event) => {
                    dispatch(registerActions(register, event, history));
                }}>
                  
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
                    {/* --------------- input Full Name --------------- */}
                    <TextField
                      label="Full Name"
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      name="name"
                      value={register.name}
                      onChange={(event) => handleChange(event)}
                    />

                    {/* --------------- input email --------------- */}
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
                      value={register.email}
                      onChange={(event) => handleChange(event)}
                    />

                    {/* --------------- input password --------------- */}
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
                      value={register.password}
                      onChange={(event) => handleChange(event)}
                    />

                    {/* --------------- input Phone Number --------------- */}
                    <TextField
                      label="Phone Number"
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AddIcCall />
                          </InputAdornment>
                        ),
                      }}
                      name="nohandphone"
                      value={register.nohandphone}
                      onChange={(event) => handleChange(event)}
                    />

                    <Button
                      type="submit"
                      style={{ backgroundColor: "#f1a3ad" }}
                    >
                      Sign up
                    </Button>
                  </div>
                </form>

                <h6 style={{ marginTop: 0 }}>
                  Already have an account ? please
                  <Button style={{ color: "#fia3ad" }}>login</Button>
                </h6>
              </div>

              {/* --------------- section gambar --------------- */}
              <div></div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Register;
