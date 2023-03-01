import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import ProductForm from "../ProductForm/ProductForm";

const CreateProduct = () => {
  const { createProduct } = useContext(ProductsContext);
  const onFinish = (values) => {
    createProduct(values);
  };
  return (
    <div>
      <h1>Create Product</h1>
      <ProductForm onFinish={onFinish} />
    </div>
  );
};

export default CreateProduct;
