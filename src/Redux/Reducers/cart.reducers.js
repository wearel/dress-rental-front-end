import { ADD_TO_CART } from "../Actions/cart.action";

const initialState = {
  products: [],
  cart: 0,
  totalBelanja: 0,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
}
