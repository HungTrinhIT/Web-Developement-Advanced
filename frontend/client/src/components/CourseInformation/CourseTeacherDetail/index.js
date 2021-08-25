import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Row, Col, Button, message, Radio, Avatar } from "antd";
import {
    UserOutlined,
} from "@ant-design/icons";
import userApi from "../../../api/userApi";

const CourseTeacherDetail = ({ course, ...props }) => {
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
            <div className="intro_title">
                <h2>Teacher Information</h2>
            </div>
            <div className="row">

                <aside className="center col-lg-12" id="sidebar">
                    <div className="profile">
                        <div className="d-flex align-items-center" >
                            {teacher.avatar ? (
                                <img className="rounded-circle center" src={`${teacher.avatar}`} style={{ width: "150px", height: "150px", marginBottom: "25px"}} />
                                
                            ) : (
                                <Avatar size="large" icon={<UserOutlined />} className="icon" />
                            )}
                        </div>
                        <ul>
                            <li>User Name: <span className="float-right">{teacher.username}</span> </li>
                            <li>Full Name: <span className="float-right">{teacher.fullname}</span></li>
                            <li>Address: <span className="float-right">{teacher.address}</span></li>
                            <li>Phone: <span className="float-right"> {teacher.phone}</span></li>
                            <li>Email: <span className="float-right"> {teacher.email}</span></li>
                        </ul>
                    </div>

                </aside>
            </div>
        </div>
    );
};
export default CourseTeacherDetail;