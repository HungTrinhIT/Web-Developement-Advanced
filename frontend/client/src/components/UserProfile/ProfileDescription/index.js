import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Row, Col, Button, message, Radio } from "antd";
import userApi from "../../../api/userApi";

const ProfileDescription = ({user, ...props}) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        form.setFieldsValue({
          ...user,
        });
      }, [user]);
    const onFinish = async (values) => {
        const userID = user.id;
        setLoading(true);
        try {
            const data = await userApi.update(values, userID);
            message.success(data.data.msg);
            setLoading(false);
        } catch (error) {
            throw error;
            setLoading(false);
        }
    };
    return (
        <div>
            <Form
                form={form}
                name="userProfile"
                onFinish={onFinish}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: false,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input placeholder="Username" disabled />
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
                                    required: false,
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
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Update user
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default ProfileDescription;