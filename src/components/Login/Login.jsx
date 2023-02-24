import React, { useContext, useEffect } from "react";
import { Button, Form, Input } from "antd";
import "./Login.scss";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import {notification } from 'antd';

const Login = () => {
  const { login } = useContext(UserContext);
  const onFinish = (values) => {
    login(values)
    notification.success({
      message: 'Bienvenid@'
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem("token"));
      if (foundToken) {
      navigate("/profile")
    }
    },2000)

}, [login])
  return (
    <div className="login-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Login</h1>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "regexp",
              pattern: "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$",
              message: "Format is wrong",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div className="btn-container">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
