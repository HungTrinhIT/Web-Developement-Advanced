import React from "react";
import categoryApi from "../../../api/categoryApi";
import { RollbackOutlined } from "@ant-design/icons";
import PageTitle from "../../../components/PageTitle";
import { Form, Input, Button, Select, message } from "antd";
import { connect } from "react-redux";
import createAction from "../../../redux/action/createAction";
import { FETCH_ALL_CATEGORIES } from "../../../redux/action/type";
const { Option } = Select;

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { span: 16 },
};

const AddNewCategory = (props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    if (values.catType === "root") {
      values.catType = null;
    }

    try {
      const data = await categoryApi.add({
        catName: values.catName,
        catParent: values.catType,
      });

      switch (data.status) {
        case 201:
          message.success(data.data.msg);
          form.resetFields();
          const response = await categoryApi.getAll();
          props.dispatch(createAction(FETCH_ALL_CATEGORIES, response.data));
          break;
        case 200:
          message.warning(data.data.msg);
          break;
        default:
          return;
      }
    } catch (err) {
      message.error(err.msg);
      throw err;
    }
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div>
      <PageTitle title="Add new category">
        <Button
          type="primary"
          icon={<RollbackOutlined />}
          style={{ marginRight: "8px" }}
          onClick={goBack}
          size="large"
          className="icon"
        >
          Back to categories
        </Button>
      </PageTitle>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="catName"
          label="Category name"
          labelAlign="left"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="catType"
          labelAlign="left"
          label="Category type"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select category type" allowClear>
            <Option value="root">Root category</Option>
            {props.rootCategories &&
              props.rootCategories.map((item, index) => {
                return (
                  <Option key={index} value={item.id}>
                    {item.catName}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    rootCategories: state.categories.rootCategories,
  };
};
export default connect(mapStateToProps)(AddNewCategory);
