import { Empty } from "antd";
import React, { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  if (cart.length <= 0) {
    return <Empty />;
  }

  return (
    <div>
      {cart.map((product) => {
        return (
          <div key={product._id}>
            <p>{product.name}</p>
            <p>{product.price} €</p>
          </div>
        );
      })}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createOrder(cart)}>Buy</button>
    </div>
  );
};

export default Cart;
