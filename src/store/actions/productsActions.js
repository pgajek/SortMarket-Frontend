import Axios from "axios";
import Cookie from "js-cookie";
import {
  PRODUCTS_GET,
  PRODUCTS_REQUEST,
  PRODUCT_GET,
  PRODUCT_REQUEST,
  SET_PRODUCTS_OPTIONS,
} from "constants/productsConstants";

export const getProducts = (offset = 0, per_page = 10) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await Axios.get(
      `http://localhost:9000/api/v1/products?offset=${offset}&per_page=${per_page}`
    );

    dispatch({
      type: PRODUCTS_GET,
      payload: {
        products: data.products,
        productsCount: data.productsCount,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const { data } = await Axios.get(
      `http://localhost:9000/api/v1/products/${id}`
    );
    console.log(data);
    dispatch({
      type: PRODUCT_GET,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setProductsOptions = (offset, per_page) => (dispatch) => {
  dispatch({
    type: SET_PRODUCTS_OPTIONS,
    payload: {
      offset,
      per_page,
    },
  });
};
