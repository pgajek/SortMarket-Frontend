import { PRODUCTS_GET, PRODUCTS_REQUEST } from "constants/productsConstants";

function productsReducer(state = { products: [] }, action) {
  switch (action.type) {
    case PRODUCTS_GET:
      console.log("elo");
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

export { productsReducer };
