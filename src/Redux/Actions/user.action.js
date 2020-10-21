import axios from "axios";
import Swal from "sweetalert2";

// --------------- constant ----------------
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const GET_ERROR = "GET_ERROR";
// export const GET_USER_INFO = "GET_USER_INFO"

// --------------- function dari constant ----------------
export const setRegister = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const setLogin = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const getError = (data) => {
  return {
    type: GET_ERROR,
    payload: data,
  };
};

// export const getUserInfo = (data) =>{
//     return {
//         type : GET_USER_INFO,
//         payload : data,
//     };
// };

// --------------- function isi dari set ---------------
// --------------- function register ---------------
export const registerActions = (values, event, history) => (dispatch) => {
  event.preventDefault();
  // console.log('tes param', values);

  return axios
    .post("https://gaun-rental.herokuapp.com/register", values)
    .then((response) => {
      //   console.log("res", response);

      if (response.data !== "Email Sudah Tersedia") {
        dispatch(setRegister(response.data.user));
        Swal.fire({
          title: "Berhasil Mendaftar",
          text: "Silahkan Login",
          icon: "success",
          confirmButtonText: "ok",
        });
        history.push("/login");
      } else {
        Swal.fire({
          title: "Gagal Mendaftar",
          text: `${response.data}`,
          icon: "error",
          confirmButtonText: "ok",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// --------------- function login ---------------
export const loginActions = (values, event, history) => {
  return (dispatch) => {
    event.preventDefault();
    // console.log("tes berhasil", values);

    return axios
      .post("https://gaun-rental.herokuapp.com/login", values)
      .then((response) => {
        console.log(response);

        if (response.data.token !== undefined) {
          console.log("benar tokennya ada");
          localStorage.setItem("token", response.data.token);

          Swal.fire({
            title: "Berhasil Login",
            text: "Selamat Datang",
            icon: "success",
            confirmButtonText: "ok",
          });

          dispatch(setLogin(response.data.token));
          history.push("/");
        } else {
          Swal.fire({
            title: "Gagal Login",
            text: `${response.data}`,
            icon: "error",
            confirmButtonText: "ok",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getError(error.response.data));
      });
  };
};

// --------------- function get user info ---------------
// export const getUserInfoAction = () => async (dispatch) => {
//     const url = "";
//     const config = {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//     };

//     const userInfo = await axios.get(url, config);

//     dispatch(getUserInfo(userInfo.data.user));
// };
