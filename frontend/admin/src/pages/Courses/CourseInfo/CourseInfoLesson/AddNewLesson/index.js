import React, { useState, useEffect, useRef } from "react";
import { Form, Input, sRow, Col, Button, Upload, Row, message } from "antd";

import { useParams } from "react-router-dom";
import lessonApi from "../../../../../api/lessonApi";
import PageTitle from "../../../../../components/PageTitle";
import { RollbackOutlined, UploadOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddNewLesson = (props) => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const lessonRef = useRef();
  const executeScroll = () => lessonRef.current.scrollIntoView();
  const [loading, setLoading] = useState(false);
  const [lessonContent, setLessonContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const onFinish = async (values) => {
    // Convert video to base 64

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = async () => {
      const videoBase64 = await reader.result;
      const newValues = {
        ...values,
        course_id: id,
        video: videoBase64,
        lessonContent: lessonContent,
      };
      uploadLesson(newValues);
    };
    reader.onerror = () => {
      message.error("Something went wrong");
    };
  };

  const uploadLesson = async (lesson) => {
    setLoading(true);
    try {
      const response = await lessonApi.add(lesson);
      console.log(response.data);
      message.success("Upload lesson successfully!");
      form.resetFields();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Upload failed!");
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

  const videoProps = {
    onRemove: (file) => {
      setSelectedFile(null);
    },
    beforeUpload: (file) => {
      if (file.type !== "video/mp4") {
        message.error(`${file.name} is not a video file`);
        return Upload.LIST_IGNORE;
      }
      return false;
    },
    onChange: (info) => {
      setSelectedFile(info.file);
    },
  };

  return (
    <div ref={lessonRef}>
      <PageTitle title="Add new lesson">
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
                  message: "Please input the lesson name!",
                },
              ]}
            >
              <Input placeholder="Lesson Name" />
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
                  message: "Please input th lesson content",
                },
              ]}
            >
              <Upload {...videoProps}>
                <Button icon={<UploadOutlined />} className="icon">
                  Upload lesson video
                </Button>
              </Upload>
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
