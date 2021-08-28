import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Row, Col, Button, message, Radio, Avatar } from "antd";
import {
    UserOutlined,
} from "@ant-design/icons";
import userApi from "../../../api/userApi";
import {connect} from "react-redux";

const ProfileDescription = ({ user, ...props }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userData = await userApi.getById(user.id);
                setUserProfile(userData.data);
            } catch (error) {
                throw error;
            }
        }
        fetchUserInfo();
    }, [user]);
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

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    return (
        <div>


            <aside className="center col-lg-24">
                <div className="d-flex align-items-center">
                    {userProfile.avatar ? (
                        <img src={`${userProfile.avatar}`} className="rounded-circle center" style={{ maxWidth: "250px", maxHeight: "250px", marginBottom: "25px"}} />
                    ) : (
                        <Avatar size="large" icon={<UserOutlined />} className="icon" />
                    )}
                </div>
            </aside>

            <div className="col-lg-24">
                <Form
                    {...layout}
                    form={form}
                    name="userProfile"
                    onFinish={onFinish}
                >
                    
                        <Form.Item
                            className="col-lg-24"
                            label="UserName"
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
                    
                        <Form.Item label="Address" name="address">
                            <Input placeholder="255 Nguyen Van Cu, F.12, Binh Thanh district, Ho Chi Minh" />
                        </Form.Item>
                    
                        <Form.Item label="Phone" name="phone">
                            <Input placeholder="012335245" />
                        </Form.Item>
                    
                        <Form.Item
                            name="description"
                            label="User description"
                            tooltip="Here is a brief description about user"
                        >
                            <Input.TextArea rows={4}></Input.TextArea>
                        </Form.Item>
                    

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Update user
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );
};
export default ProfileDescription;