import React, { Component } from "react";
import { Input, Form, Button } from "antd";
import { Link } from "react-router-dom";
import "./login.css";
class Login extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <main className="login-wrp">
        <section className="login-container">
          <div className="mt-3 register__title">
            <p>Log in to your Udema account</p>
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <div className="access_social">
              <a href="#0" className="social_bt facebook">
                Login with Facebook
              </a>
              <a href="#0" className="social_bt google">
                Login with Google
              </a>
              <a href="#0" className="social_bt linkedin">
                Login with Linkedin
              </a>
            </div>

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
                span: 24,
              }}
            >
              <button className="btn_1 rounded full-width mt-2" type="submit">
                Login to Udema
              </button>
            </Form.Item>

            <div className="text-center add_top_10">
              New to Udema?{" "}
              <strong>
                <Link to="/register">Sign up!</Link>
              </strong>
            </div>
          </Form>
        </section>
      </main>
    );
  }
}
export default Login;
