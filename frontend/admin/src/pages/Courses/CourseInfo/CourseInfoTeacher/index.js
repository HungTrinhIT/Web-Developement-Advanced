import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Row, Col, Button, message, Radio, Avatar } from "antd";
import {
    UserOutlined,
} from "@ant-design/icons";
import userApi from "../../../../api/userApi";

const CourseInfoTeacher = ({ course, ...props }) => {
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
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <div className="profile">
                        <div className="d-flex align-items-center" >
                            {teacher.avatar ? (
                                <img className="rounded-circle center" src={`${teacher.avatar}`} style={{ width: "150px", height: "150px", marginBottom: "25px" }} />

                            ) : (
                                <Avatar size="large" icon={<UserOutlined />} className="icon" />
                            )}
                        </div>
                        <ul>
                            <li>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <span style={{ fontWeight: 'bold' }}>User Name:</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span>{teacher.username}</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <span style={{ fontWeight: 'bold' }}>Full Name:</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span>{teacher.fullname}</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <span style={{ fontWeight: 'bold' }}>Address:</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span>{teacher.address}</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <span style={{ fontWeight: 'bold' }}>Phone:</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span>{teacher.phone}</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <span style={{ fontWeight: 'bold' }}>Email:</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span>{teacher.email}</span>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </Col>
                <Col span={8}></Col>
            </Row>


        </div>
    );
};
export default CourseInfoTeacher;