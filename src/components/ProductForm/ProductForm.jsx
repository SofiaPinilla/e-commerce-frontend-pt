import { Button, Form, InputNumber, Input } from "antd";

const ProductForm = ({form,onFinish}) => {
  return (
    <Form onFinish={onFinish} form={form}>
    <Form.Item label="Product Name" name="name">
      <Input placeholder="Product name" />
    </Form.Item>
    <Form.Item label="Price">
      <Form.Item name="price" noStyle>
        <InputNumber />
      </Form.Item>
      <span className="ant-form-text"> €</span>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default ProductForm