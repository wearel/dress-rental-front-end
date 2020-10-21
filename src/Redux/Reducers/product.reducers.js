import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_DETAIL
} from "../Actions/product.action";

const intialState = [];

export function getProductReducers(state = intialState, action) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        data: action.payload,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.result,
      };
    case GET_PRODUCT_DETAIL: 
    return {
      ...state,
      data: action.result,
    }
    case GET_PRODUCT_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
