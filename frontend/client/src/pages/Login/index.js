import React from "react";
import { Input, Form, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import parseJwt from "../../utils/parseJWT";
import createAction from "../../redux/action/createAction";
import { FETCH_USER } from "../../redux/action/type";
import authApi from "../../api/auth";
import { connect } from "react-redux";
const Login = (props) => {
  const history = useHistory();

  const onFinish = async ({ username, password, ...values }) => {
    try {
      const res = await authApi.auth({
        username,
        password,
      });

      if (res.status === 206) {
        console.log(res.data.msg);
        message.warning(res.data.msg);
        return;
      }
      const { isAuthenticated } = res.data;
      if (isAuthenticated) {
        const { accessToken } = res.data;
        localStorage.setItem("elearning_accessToken", accessToken);
        const userInfo = parseJwt(accessToken);
        props.dispatch(
          createAction(FETCH_USER, {
            userInfo: userInfo.responseUser,
            token: accessToken,
          })
        );

        history.goBack();
      } else {
        message.error("Invalid credentials");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

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
          onFinish={onFinish}
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
};
export default connect()(Login);
