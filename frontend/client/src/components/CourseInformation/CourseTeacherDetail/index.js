import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Row, Col, Button, message, Radio, Avatar } from "antd";
import {
    UserOutlined,
} from "@ant-design/icons";
import userApi from "../../../api/userApi";

const CourseTeacherDetail = ({course, ...props}) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [teacher, setTeacher] = useState({});
    useEffect(() => {
        const fetchTeacherDetail = async () => {
            try {
                const teacherData = await userApi.getById(course.teacher_id);
                setTeacher(teacherData.data);
            } catch (error) {
                throw error;
            }
        };

        fetchTeacherDetail();
    }, []);
    useEffect(() => {
        form.setFieldsValue({
            ...teacher,
        });
    }, [teacher]);
    
    return (
        <div>
            <div className="row">
                <aside className="col-lg-4" id="sidebar">
                    <div className="d-flex align-items-center">
                        {teacher.avatar ? (
                            <img src={`${teacher.avatar}`} style={{ maxWidth: "300px", maxHeight: "300px" }} />
                        ) : (
                            <Avatar size="large" icon={<UserOutlined />} className="icon" />
                        )}
                    </div>
                </aside>
                <Form className="col-lg-8"
                    form={form}
                    name="userProfile"
                >
                    
                        <Col span={20}>
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
                                <Input placeholder="255 Nguyen Van Cu, F.12, Binh Thanh district, Ho Chi Minh" disabled />
                            </Form.Item>
                            <Form.Item label="Phone" name="phone">
                                <Input placeholder="012335245" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={20}>
                            <Form.Item
                                label="Fullname"
                                name="fullname"
                                rules={[
                                    {
                                        required: false,
                                        message: "Please input your fullname!",
                                    },
                                ]}
                            >
                                <Input placeholder="Cristian Ronaldo" disabled />
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
                        </Col>    
                </Form>
            </div>
        </div>
    );
};
export default CourseTeacherDetail;