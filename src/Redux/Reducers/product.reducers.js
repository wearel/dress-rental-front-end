import { GET_PRODUCT } from "../Actions/product.action";

const intialState = {
  data: [],
  error: null,
  isLoading: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
