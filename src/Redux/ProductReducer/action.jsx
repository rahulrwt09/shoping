import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType";
import axios from "axios";

export const getsuccess = () => {
  return {
    type: GET_PRODUCT_SUCCESS
  };
};

export const postsuccess = (payload) => {
  return {
    type: POST_PRODUCT_SUCCESS,
    payload
  };
};

export const productrequest = () => {
  return {
    type: PRODUCT_REQUEST
  };
};

export const productfailure = () => {
  return {
    type: PRODUCT_FAILURE,
  
  };
};

export const addproduct = (payload) => (dispatch) => {
  dispatch(productrequest());
  axios
    .post("http://localhost:8080/products", payload)
    .then(() => {
      dispatch(postsuccess());
    })
    .catch((err) => {
      dispatch(productfailure(err));
    });
};

export const getproduct = (dispatch) => {
  dispatch(productrequest());
  axios
    .get("http://localhost:8080/products")
    .then((res) => {
      dispatch(getsuccess(res.data));
    })
    .catch((err) => {
      dispatch(productfailure(err));
    });
};
