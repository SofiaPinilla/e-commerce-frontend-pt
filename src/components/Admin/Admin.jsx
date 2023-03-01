import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditProduct from "../EditProduct/EditProduct";
import CreateProduct from "../CreateProduct/CreateProduct";
const Admin = () => {
  const { getProducts, products, deleteProduct, getProductById } =
    useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (id) => {
    getProductById(id);
    setIsModalVisible(true);
  };

  return (
    <div>
      <CreateProduct />
      {products.map((product) => {
        return (
          <div className="product" key={product._id}>
            <p>{product.name}</p>
            <p> {product.price} €</p>
            <DeleteOutlined onClick={() => deleteProduct(product._id)} />
            <EditOutlined onClick={() => showModal(product._id)} />
          </div>
        );
      })}
      <EditProduct visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};

export default Admin;
