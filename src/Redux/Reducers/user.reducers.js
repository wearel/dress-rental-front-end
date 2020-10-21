import { REGISTER, LOGIN, GET_ERROR } from "../Actions/user.action";

// check token
const token = localStorage.getItem('token');

const initialState = token
    ? {
          isLogged: true,
          data: [],
          error: null,
      }
    : {
          isLogged: false,
          data: [],
          error: null,
      };

// reducer user
const user = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                registerData: action.payload,
            };
        case LOGIN:
            return {
                ...state,
                isLogged: true,
            };
        case GET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        // case GET_USER_INFO:
        //     return {
        //         ...state,
        //         data: action.payload,
        //     };
        default:
            return state;
    }
};

export default user;