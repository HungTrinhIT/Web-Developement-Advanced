import React from "react";
import { Form, Input, message } from "antd";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import userApi from "../../api/userApi";
const Register = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };
  const onFinish = async (values) => {
    try {
      // Role student
      values.role = 2;
      const response = await userApi.add(values);
      switch (response.status) {
        case 202:
          message.error(response.data.msg);
          break;
        case 201:
          form.resetFields();
          history.push("/login");
          message.success({
            content: "Add new user successfully, let log in to Udema!",
            style: {
              marginTop: "15vh",
            },
          });

          break;
        default:
          break;
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="register-wrp">
      <div className="register-container">
        <div className="mt-3 register__title">
          <p>Sign up and start learning</p>
        </div>
        <Form
          form={form}
          name="addUser"
          onFinish={onFinish}
          scrollToFirstError
          {...formItemLayout}
          initialValues={{
            role: "0",
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Fullname"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your fullname!",
              },
            ]}
          >
            <Input placeholder="Cristian Ronaldo" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: "email", message: "Email is not valid" },
              {
                required: true,
                message: "Please enter email",
              },
            ]}
          >
            <Input placeholder="example@gamil.com" />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input placeholder="255 Nguyen Van Cu, F.12, Binh Thanh district, Ho Chi Minh" />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input placeholder="012335245" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <button class="btn_1 rounded full-width mt-2" type="submit">
              Register
            </button>
          </Form.Item>

          <div class="text-center add_top_10">
            Go to log in
            <strong>
              <Link to="/login">Login to Udema!</Link>
            </strong>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Register;
