import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_QUANTITY,
} from "constants/cartConstants";
import Cookie from "js-cookie";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload.product;
      const product = state.cartItems.find((x) => x.product._id === item._id);

      if (product) {
        return {
          ...state,
          cartItems: [...state.cartItems],
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
    case CART_UPDATE_QUANTITY:
      const chosenItem = state.cartItems.filter(
        (x) => x.product._id === action.payload
      );
      const index = state.cartItems.indexOf(chosenItem);
      const newCartItems = state.cartItems;
      cartItems[index].quantity = action.payload.quantity;
      return {
        ...state,
        cartItems: newCartItems,
      };
    default:
      return state;
  }
}

export { cartReducer };
