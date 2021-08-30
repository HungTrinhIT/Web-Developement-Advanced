import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Row, Col, Button, message } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import lessonApi from "../../../../../api/lessonApi";
import PageTitle from "../../../../../components/PageTitle";
import { RollbackOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";

const LessonDetail = (props) => {
  const [form] = Form.useForm();
  const { lesson_id } = useParams();
  const [lesson, setLesson] = useState({});
  const lessonRef = useRef();
  const executeScroll = () => lessonRef.current.scrollIntoView();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [lessonContent, setLessonContent] = useState("");
  useEffect(() => {
    const fetchLessonDetail = async () => {
      try {
        const lessonData = await lessonApi.getByID(lesson_id);
        setLesson(lessonData.data);
        setLessonContent(lessonData.data.lessonContent);
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
    values = {
      ...values, lessonContent
    }
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

  return (
    <div ref={lessonRef}>
      <PageTitle title="Lesson Management">
        <Button
          type="primary"
          icon={<RollbackOutlined />}
          size="large"
          className="icon"
          onClick={() => history.goBack()}
        >
          Back
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
                  message: "Please input the lesson name!",
                },
              ]}
            >
              <Input placeholder="Lesson" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="lessonContent"
              label="Lesson content"
              rules={[
                {
                  required: true,
                  message: "Please input th lesson content",
                },
              ]}
            >
              <CKEditor
                editor={ClassicEditor}
                onChange={(e, editor) => setLessonContent(editor.getData())}
                data={lessonContent}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Lesson Video"
              name="video"
              rules={[
                {
                  required: true,
                  message: "Please import lesson video",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <ReactPlayer url={`${lesson.video}`} controls={true} volume={0.8} />
          </Col>
        </Row>

        <Form.Item style={{ marginTop: "24px" }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update lesson
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LessonDetail;
