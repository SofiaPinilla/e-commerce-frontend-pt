import {  Modal, Form } from "antd";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import ProductForm from "../ProductForm/ProductForm";

const EditProduct = ({ visible, setVisible }) => {
  const { product,editProduct } = useContext(ProductsContext);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(product);
  }, [product]);

  const onFinish = (values) => {
    editProduct(values,product._id);
    setVisible(false);
  };

  return (
    <Modal
      title="Edit Product"
      open={visible}
      footer={[]}
      onCancel={() => setVisible(false)}
    >
     <ProductForm form={form} onFinish={onFinish}/>
    </Modal>
  );
};

export default EditProduct;
