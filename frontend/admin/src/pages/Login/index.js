import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import authApi from "../../api/auth";
import parseJWT from "../../utils/parseJWT";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();

  const onFinish = async ({ username, password, ...values }) => {
    try {
      const res = await authApi.auth({
        username,
        password,
      });
      if (res.data.authenticated) {
        localStorage.setItem("elearning_accessToken", res.data.accessToken);
        const obj = parseJWT(res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(obj.responseUser));
        history.push("/");
      } else {
        alert("Invalid login.");
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

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;
