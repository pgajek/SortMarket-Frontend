import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { userReducer } from "store/reducers/userReducer";
import { cartReducer } from "store/reducers/cartReducer";
import { productsReducer } from "store/reducers/productsReducer";

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };
const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
