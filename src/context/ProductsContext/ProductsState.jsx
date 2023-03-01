import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const cart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  products: [],
  cart: cart ? cart : [],
  product: {},
};

const API_URL = "http://localhost:8080";
export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "/products/getAllProducts");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };
  const getProductById = async (id) => {
    const res = await axios.get(API_URL + "/products/getById/" + id);
    dispatch({
      type: "GET_PRODUCT_BY_ID",
      payload: res.data,
    });
    return res;
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  const deleteProduct = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(
      API_URL + "/products/deleteProductById/" + id,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({
      type: "DELETE_PRODUCT",
      payload: res.data,
    });
  };
  const editProduct = async (formProduct, id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.put(
      API_URL + "/products/updateProductById/" + id,
      formProduct,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({
      type: "EDIT_PRODUCT",
      payload: res.data,
    });
  };
  const createProduct = async (formProduct) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.post(
      API_URL + "/products/createProduct/" ,
      formProduct,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({
      type: "CREATE_PRODUCT",
      payload: res.data,
    });
  };
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        product: state.product,
        getProducts,
        addCart,
        clearCart,
        deleteProduct,
        getProductById,
        editProduct,
        createProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
