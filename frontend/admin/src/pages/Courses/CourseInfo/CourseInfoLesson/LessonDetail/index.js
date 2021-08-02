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

import { useParams } from "react-router-dom";
import lessonApi from "../../../../../api/lessonApi";

const LessonDetail = (props) => {
    const [form] = Form.useForm();
    const { lesson_id } = useParams();
    const [lesson, setLesson] = useState([]);
    const lessonRef = useRef();
    const executeScroll = () => lessonRef.current.scrollIntoView();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchLessonDetail = async () => {
            try {
                const lessonData = await lessonApi.getbyID(lesson_id);
                setLesson(lessonData.data);
            } catch (error) {
                throw error;
            }
        };
        fetchLessonDetail();

    }, []);

    useEffect(() => {
        form.setFieldsValue({
            ...lesson,
        });
    }, [lesson]);

    const onFinish = async (values) => {
        const lessonID = lesson_id;
        setLoading(true);
        try {
            const data = await lessonApi.update(lessonID, values);
            message.success(data.data.msg);
            executeScroll();
            setLoading(false);
        } catch (error) {
            throw error;
            setLoading(false);
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
        <div ref={lessonRef}>
            <Form
                form={form}
                name="addLesson"
                onFinish={onFinish}
                scrollToFirstError
                {...formItemLayout}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Lesson Name"
                            name="lessonName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the course ID!",
                                },
                            ]}
                        >
                            <Input placeholder="Lesson" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="Lesson Content"
                            name="lessonContent"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the Lesson Content!",
                                },
                            ]}
                        >
                            <Input placeholder="Lesson Content" />

                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="Lesson Video"
                            name="video"
                        >
                            <Input placeholder="https://youtu.be/CCOLMsvZ5dQ" />

                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Update lesson
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LessonDetail;
