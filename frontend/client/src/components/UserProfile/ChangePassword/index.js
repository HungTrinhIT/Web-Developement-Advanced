import React from 'react'
import userApi from "../../../api/userApi";
import { Form, Input, Row, Col, Button, message } from "antd";

const ChangePassword = ({ user, ...props }) => {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        const { oldPassword, newPassword, confirmPassword } = values;
        try {
            if (newPassword !== confirmPassword) {
                message.error("Your confirm password is not correct");
                return;
            }
            const userCredential = {
                oldPassword,
                newPassword,
            };
            const data = await userApi.updatePassword(userCredential, user.id);
            switch (data.status) {
                case 202:
                    message.error({
                        content: "Wrong password",
                        style: {
                          marginTop: "15vh",
                        },
                      });
                    break;
                case 200:
                    form.resetFields();
                    message.success({
                        content: "Change password successfully!",
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
                        form={form}
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
                            rules={[
                                { required: true, message: "Please input new password" },
                                {
                                    min: 6,
                                    message: "New password cannot be shorter than 6 characters",
                                },
                            ]}
                        >
                            <Input.Password type="password" />
                        </Form.Item>
                        <Form.Item
                            name="confirmPassword"
                            label="Confirm password"
                            rules={[
                                { required: true, message: "Please input confirm password" },
                                {
                                    min: 6,
                                    message:
                                        "Confirm password cannot be shorter than 6 characters",
                                },
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
    )
}
export default ChangePassword;