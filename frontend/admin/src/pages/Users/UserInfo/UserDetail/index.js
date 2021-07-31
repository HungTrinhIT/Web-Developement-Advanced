import React, { useState, useEffect, useRef } from "react";
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

import { RollbackOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import userApi from "../../../../api/userApi";

const UserDetail = (props) => {
  const [form] = Form.useForm();
  const userRef = useRef();
  const executeScroll = () => userRef.current.scrollIntoView();
  const { id } = useParams();

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const userData = await userApi.getById(id);
        setUser(userData.data);
      } catch (error) {
        throw error;
      }
    };
    fetchUserDetail();
  }, []);
  useEffect(() => {
    form.setFieldsValue({
      ...user,
      role: user.role + "",
    });
  }, [user]);
  const onFinish = async (values) => {
    const userID = user.id;

    try {
      const data = await userApi.update(values, userID);
      message.success(data.data.msg);
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

  return (
    <div ref={userRef}>
      <Form
        form={form}
        name="addUser"
        onFinish={onFinish}
        scrollToFirstError
        {...formItemLayout}
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
              <Input placeholder="Username" disabled />
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

            <Form.Item label="Address" name="address">
              <Input placeholder="255 Nguyen Van Cu, F.12, Binh Thanh district, Ho Chi Minh" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="012335245" />
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
                { type: "email" },
                {
                  required: true,
                  message: "Please enter email!",
                },
              ]}
            >
              <Input placeholder="example@gamil.com" disabled />
            </Form.Item>
            <Form.Item
              name="description"
              label="User description"
              tooltip="Here is a brief description about user"
            >
              <Input.TextArea rows={4}></Input.TextArea>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update user
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserDetail;
