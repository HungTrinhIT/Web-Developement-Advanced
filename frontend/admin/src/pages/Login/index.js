import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import authApi from "../../api/auth";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import parseJwt from "../../utils/parseJWT";
import createAction from "../../redux/action/createAction";
import { FETCH_USER } from "../../redux/action/type";
const Login = (props) => {
  const history = useHistory();

  const onFinish = async ({ username, password, ...values }) => {
    try {
      const res = await authApi.auth({
        username,
        password,
      });

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

        history.push("/");
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
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        size="large"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
        size="large"
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect()(Login);
