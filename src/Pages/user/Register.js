import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { registerActions } from "../../Redux/Actions/user.action";

// --------------- Style CSS ---------------
import "../user/Register.css";
import GambarRegister from "../../Assets/gambar-login-register.jpg";

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
  console.log("isLogged", isLogged);

  // --------------- handleChange form ---------------
  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  // --------------- code handle submit tanpa redux ---------------
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
              style={{ height: 500, width: 800,  display: "flex" }}
            >
              {/* --------------- section register --------------- */}
              <div style={{ height: 500, width: 400 }}>
                {/* -------------- judul register --------------- */}
                <h3 style={{
                  color: "#2e505e"
                }}>Register</h3>
                {/* -------------- form register -------------- */}
                <form
                  onSubmit={(event) => {
                    dispatch(registerActions(register, event, history));
                  }}
                >
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
                    {/* --------------- input Full Name pada form --------------- */}
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

                    {/* --------------- input email pada form --------------- */}
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

                    {/* --------------- input password pada form --------------- */}
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

                    {/* --------------- input Phone Number pada form --------------- */}
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

                <h6 style={{ marginTop: 0, marginBottom: 0, color: "#2e505e" }}>
                  Already have an account ? please
                  <Button style={{ color: "#fia3ad" }}>
                    <Link to="/login" style={{ textDecoration: "none", color: "#2e505e" }}>
                      Login
                    </Link>
                  </Button>
                </h6>
                <h6 style={{ marginTop: 0, color: "#2e505e" }}>
                  More info ? please back to
                  <Button style={{ color: "#fia3ad" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "#2e505e" }}>
                      Home
                    </Link>
                  </Button>
                </h6>
              </div>

              {/* --------------- section gambar --------------- */}
              <div>
              <img 
              style={{
                height:500,
                width:400,
              }}
              src={GambarRegister} alt="gambar register" />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Register;
