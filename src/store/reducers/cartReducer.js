import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload.product;
      const product = state.cartItems.find((x) => x.product._id === item._id);

      if (product) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { product: item, quantity: action.payload.qty },
        ],
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.product._id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export { cartReducer };
