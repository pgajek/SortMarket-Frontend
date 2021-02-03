import {
  PRODUCTS_GET,
  PRODUCTS_REQUEST,
  SET_PRODUCTS_OPTIONS,
} from "constants/productsConstants";

function productsReducer(
  state = { products: [], offset: 0, per_page: 10 },
  action
) {
  switch (action.type) {
    case PRODUCTS_GET:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };
    case PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_GET:
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };
    case PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_PRODUCTS_OPTIONS:
      return {
        ...state,
        loading: false,
        per_page: action.payload.per_page,
        offset: action.payload.offset,
      };
    default:
      return state;
  }
}

export { productsReducer };
