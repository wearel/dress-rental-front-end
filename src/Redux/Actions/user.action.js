import axios from "axios";
import Swal from "sweetalert2"; 

// constant
export const REGISTER = 'REGISTER';
export const LOGIN = "LOGIN";
export const GET_ERROR = "GET_ERROR";
export const GET_USER_INFO = "GET_USER_INFO";
export const LOGOUT = "LOGOUT"


// function dari constant
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
    }
};

export const getError = (data) =>{
    return {
        type : GET_ERROR,
        payload: data,
    };
};

export const getUserInfo = (data) =>{
    return {
        type : GET_USER_INFO,
        payload : data,
    };
};

export const getLogout = () => {
    return {
        type: LOGOUT,    
    }
}


// function isi dari set
export const registerActions = (values, event, history) => (dispatch) => {
    event.preventDefault();
    // console.log('tes param', values);

    return axios
        .post("http://localhost:8080/register", values)
        .then((response) => {
            console.log('res', response);
            dispatch(setRegister(response.data.user));
            Swal.fire({
                title: "Berhasil Mendaftar",
                text: "Silahkan Login",
                icon: "success",
                confirmButtonText: "ok"
            })
            history.push('/login');
        })
        .catch((error) => {
            console.log(error);
        });
};

export const loginActions = (values, event, history) => {
    return (dispatch) => {
        event.preventDefault()
        // console.log("tes berhasil", values);

        return axios
        .post("http://localhost:8080/login", values)
        .then((response)=>{
            // console.log(response);

            if(response.data.token !== undefined) {
                console.log("benar tokennya ada")
                localStorage.setItem("token", response.data.token);

                Swal.fire({
                    title: "Berhasil Login",
                    text: "Selamat Datang",
                    icon: "success",
                    confirmButtonText: "ok"
                })

                dispatch(setLogin(response.data.token));
                history.push("/");

            } else {
                Swal.fire({
                    title: " TIDAK Berhasil Login",
                    text: "Selamat Datang",
                    icon: "warning",
                    confirmButtonText: "ok"
                })
            }

        })
        .catch((error)=>{
            console.log(error);
            // dispatch(getError(error.response.data));
        }); 

    };

};


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


export const getUserInfoAction = () => {
        return async(dispatch) => {
            const url = 'http://localhost:8080/user/member';
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };
        
            const userInfo = await axios.get(url, config);
            console.log('user info', userInfo)
            dispatch(getUserInfo(userInfo.data.user));
        }
    }

export const userLogout = (history) => {
   return dispatch => {
       localStorage.removeItem('token');
       dispatch(getLogout());
       history.push('/');
   } 
};

