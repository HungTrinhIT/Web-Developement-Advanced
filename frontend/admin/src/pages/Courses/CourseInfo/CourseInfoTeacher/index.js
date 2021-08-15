import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import userApi from '../../../../api/userApi';

const CourseInfoTeacher = ({ course, ...props }) => {
    const [teacher, setTeacher] = useState({});
    const [form] = Form.useForm();
    useEffect(() => {
        const fetchTeacherInfo = async () => {
            try {
                const teacherData = await userApi.getById(course.teacher_id);
                setTeacher(teacherData.data);
            } catch (error) {
                throw (error)
            }
        }


        form.setFieldsValue({
            ...teacher,
        });

        fetchTeacherInfo();
    }, []);

    return (
        <div>
            <div className="profile">
                <div className="d-flex align-items-center" >
                    {teacher.avatar ? (
                        <img src={`${teacher.avatar}`} style={{ width: "150px", height: "150px" }} />
                    ) : (
                        <Avatar style={{ width: "150px", height: "150px" }} icon={<UserOutlined />} className="icon" />
                    )}
                </div>
            </div>
            <Form
                form={form}
                name="showUser"
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
            </Form>
        </div>
    )
}
export default CourseInfoTeacher;
