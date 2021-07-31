import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import bcrypt from "bcryptjs";
import { useParams } from "react-router-dom";
import userApi from "../../../../api/userApi";
const ChangePassword = () => {
  const { id } = useParams();
  const onFinish = async (values) => {
    const { oldPassword, newPassword, confirmPassword } = values;
    try {
      if (newPassword !== confirmPassword) {
        message.error("Your confirm password is not correct");
        return;
      }
      const userCredential = {
        oldPassword: bcrypt.hashSync(oldPassword, 10),
        newPassword: bcrypt.hashSync(newPassword, 10),
      };
      const data = await userApi.updatePassword(userCredential, id);
      switch (data.status) {
        case 202:
          message.error(data.data.msg);
          break;
        case 200:
          message.success(data.data.msg);
          break;
        default:
          break;
      }
    } catch (error) {
      throw error;
    }
  };
  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };
  return (
    <div>
      <Row>
        <Col span={12}>
          <Form
            name="change-password"
            className="login-form"
            onFinish={onFinish}
            {...formItemLayout}
          >
            <Form.Item
              name="oldPassword"
              label="Old password"
              rules={[{ required: true, message: "Please input old password" }]}
            >
              <Input.Password type="password" />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label="New password"
              rules={[{ required: true, message: "Please input new password" }]}
            >
              <Input.Password type="password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm password"
              rules={[
                { required: true, message: "Please input confirm password" },
              ]}
            >
              <Input.Password type="password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Change password
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default ChangePassword;