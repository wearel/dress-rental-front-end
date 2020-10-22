
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginActions } from "../../Redux/Actions/user.action";

// ---------------- Style CSS ---------------
import "./Login.css";

// --------------- material ui core component ---------------
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

// --------------- material ui icon ---------------
import { AccountCircle, LockRounded } from "@material-ui/icons";

// import Axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  
  const [error, setError] = useState(null);

  useEffect(() => {
    // do stuff
    if (user.error !== null) {
      setError(user.error);
    }
  }, [user]);

  // handleChange form

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  // --------------- handleSubmit form ---------------
  const handleSubmit = (event) => {
    dispatch(loginActions(login, event, history));

    if (user.error !== null) {
      setError(user.error);
    };


    // event.preventDefault();

    // Axios.post("https://gaun-rental.herokuapp.com/login", login)
    //   .then((response) => {
    //     alert(response.data.message);
    //     localStorage.setItem("token", response.data.token);
    //   })
    //   .catch((error) => console.log(error));
  };

  // console.log("state error", error);

  return (
    <div className="cont-login">
      <Grid container spacing={0} justify="center" style={{ marginTop: 130 }}>
        <Grid item>
          <Paper
            style={{ height: 500, width: 800, padding: 20, display: "flex" }}
          >
            {/* --------------- section gambar --------------- */}
            <div></div>

            {/* --------------- form login --------------- */}
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
                  {/* -------------- input email pada form --------------- */}
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
                    value={login.password}
                    onChange={(event) => handleChange(event)}
                  />
                  <Button type="submit" style={{ backgroundColor: "#f1a3ad" }}>
                    Login
                  </Button>
                </div>
              </form>

              {/* --------------- bukan button form --------------- */}
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
