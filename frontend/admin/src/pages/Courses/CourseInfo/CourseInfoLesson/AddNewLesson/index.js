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
import PageTitle from "../../../../../components/PageTitle";
import { RollbackOutlined } from "@ant-design/icons";

const AddNewLesson = (props) => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const [lesson, setLesson] = useState([]);
  const lessonRef = useRef();
  const executeScroll = () => lessonRef.current.scrollIntoView();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const newValues = {
      ...values,
      course_id: id,
    };
    setLoading(true);
    try {
      const data = await lessonApi.add(newValues);
      message.success("Add new lesson successfully");
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
    props.history.push(`/courses/${id}`);
  };

  return (
    <div ref={lessonRef}>
      <PageTitle title="Add new category">
        <Button
          type="primary"
          icon={<RollbackOutlined />}
          style={{ marginRight: "8px" }}
          onClick={goBack}
          size="large"
          className="icon"
        >
          Back to lessons
        </Button>
      </PageTitle>
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
                  message: "Please input the Lesson Name!",
                },
              ]}
            >
              <Input placeholder="Lesson Name" />
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
            <Form.Item label="Lesson Video" name="video">
              <Input placeholder="https://youtu.be/CCOLMsvZ5dQ" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add lesson
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNewLesson;
