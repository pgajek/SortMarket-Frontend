import Axios from "axios";
import Cookie from "js-cookie";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_QUANTITY,
} from "constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(
      `http://localhost:9000/api/v1/products/${productId}`
    );

    dispatch({
      type: CART_ADD_ITEM,
      payload: { product: data[0], qty },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.log(error);
  }
};
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
const updateQuantity = (productId, qty) => (dispatch, getState) => {
  dispatch({
    type: CART_UPDATE_QUANTITY,
    payload: { productId, quantity: qty },
  });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
export { addToCart, removeFromCart, updateQuantity };
