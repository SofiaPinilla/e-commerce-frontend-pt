const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "CREATE_PRODUCT":
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case "GET_PRODUCT_BY_ID":
      return {
        ...state,
        product: action.payload,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload.product._id
        ),
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.payload.product._id) {
            product = action.payload.product;
          }
          return product;
        }),
      };

    case "ADD_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
export default products;
