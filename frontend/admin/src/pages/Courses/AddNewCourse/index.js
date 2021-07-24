import React, { useState, useRef } from "react";
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  InputNumber,
  message,
} from "antd";
import { connect } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PageTitle from "../../../components/PageTitle";
import { RollbackOutlined } from "@ant-design/icons";
import courseApi from "../../../api/courseApi";
const { Option } = Select;

const AddCourse = (props) => {
  const [form] = Form.useForm();
  const [fullDescription, setFullDescription] = useState("");
  const addCourseRef = useRef();
  const executeScroll = () => addCourseRef.current.scrollIntoView();

  const onFinish = async (values) => {
    values = { ...values, fullDescription };
    try {
      const response = await courseApi.add(values);
      if (response.status === 201) {
        form.resetFields();
        setFullDescription("");
        message.success("Add new course successfully!");
        executeScroll();
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

  const goBack = () => {
    props.history.push("/courses");
  };
  const { categories } = props;

  return (
    <div ref={addCourseRef}>
      <PageTitle title="Add new course">
        <Button
          type="primary"
          icon={<RollbackOutlined />}
          style={{ marginRight: "8px" }}
          onClick={goBack}
          size="large"
          className="icon"
        >
          Back to course
        </Button>
      </PageTitle>
      <Form
        form={form}
        name="addCourse"
        onFinish={onFinish}
        scrollToFirstError
        {...formItemLayout}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="courseName"
              label="Course name"
              rules={[
                {
                  required: true,
                  message: "Please input course name!",
                },
              ]}
            >
              <Input placeholder="Java for web development" />
            </Form.Item>

            <Form.Item
              name="price"
              label="Price ($)"
              tooltip="Course prices are rounded to 2 decimal places, ex: 80.99"
              rules={[
                {
                  required: true,
                  message: "Please input the course price!",
                },
              ]}
            >
              <InputNumber placeholder="100.00" className="w-100" />
            </Form.Item>

            <Form.Item
              name="shortDescription"
              label="Short description"
              tooltip="Here is a brief description to help students understand your course content"
              rules={[
                {
                  required: true,
                  message: "Please choose the categories of course!",
                },
              ]}
            >
              <Input.TextArea rows={4}></Input.TextArea>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="category_id"
              label="Categories"
              rules={[
                {
                  required: true,
                  message: "Please choose the categories of course!",
                },
              ]}
            >
              <Select>
                {categories &&
                  categories.map((cat) => {
                    return (
                      cat.cat_id && (
                        <Option value={cat.id} key={cat.id}>
                          {cat.catName}
                        </Option>
                      )
                    );
                  })}
              </Select>
            </Form.Item>
            <Form.Item
              name="sale"
              label="Sale (%)"
              tooltip="Amount of course discount in %: ex: If you type 10, that's mean course will be discount 10% "
            >
              <InputNumber placeholder="15" className="w-100" />
            </Form.Item>
            <Form.Item
              name="saleInfo"
              label="Sale description"
              tooltip="Here is a brief description to help students understand your course discount"
            >
              <Input.TextArea rows={4}></Input.TextArea>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="fullDescription" label="Full description">
              <CKEditor
                editor={ClassicEditor}
                onChange={(e, editor) => setFullDescription(editor.getData())}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add course
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};
export default connect(mapStateToProps)(AddCourse);
