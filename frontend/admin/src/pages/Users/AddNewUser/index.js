import React, { useState, useRef } from "react";
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  InputNumber,
  message,
  Radio,
} from "antd";

import PageTitle from "../../../components/PageTitle";
import { RollbackOutlined } from "@ant-design/icons";
import courseApi from "../../../api/courseApi";
import userApi from "../../../api/userApi";
const { Option } = Select;

const AddUser = (props) => {
  const [form] = Form.useForm();
  const addUser = useRef();
  const executeScroll = () => addUser.current.scrollIntoView();

  const onFinish = async (values) => {
    try {
      const response = await userApi.add(values);
      switch (response.status) {
        case 202:
          message.error(response.data.msg);
          break;
        case 201:
          form.resetFields();
          message.success("Add new user successfully!");
          executeScroll();
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

  const goBack = () => {
    props.history.push("/users");
  };
  const { categories } = props;

  return (
    <div ref={addUser}>
      <PageTitle title="Add new user">
        <Button
          type="primary"
          icon={<RollbackOutlined />}
          style={{ marginRight: "8px" }}
          onClick={goBack}
          size="large"
          className="icon"
        >
          Back to user
        </Button>
      </PageTitle>
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
        <Row gutter={16}>
          <Col span={12}>
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
              name="role"
              label="User type"
              rules={[
                {
                  required: true,
                  message: "Please choose the user type!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="0">Admin</Radio>
                <Radio value="1">Teacher</Radio>
                <Radio value="2">Student</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="description"
              label="User description"
              tooltip="Here is a brief description about user"
            >
              <Input.TextArea rows={4}></Input.TextArea>
            </Form.Item>
          </Col>
          <Col span={12}>
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
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add user
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;
