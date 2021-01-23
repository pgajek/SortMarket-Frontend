import Axios from "axios";
import Cookie from "js-cookie";
import { PRODUCTS_GET, PRODUCTS_REQUEST } from "constants/productsConstants";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await Axios.get("http://localhost:9000/api/v1/products/");

    dispatch({
      type: PRODUCTS_GET,
      payload: {
        products: data,
      },
    });
  } catch (error) {}
};
