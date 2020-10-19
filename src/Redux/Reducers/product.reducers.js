import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} from "../Actions/product.action";

const intialState = {
  data: [],
  error: null,
  isLoading: false,
};

export function getProductReducers(state = intialState, action) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_PRODUCT_FAILED:
      return {
        ...state,
        isloading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
