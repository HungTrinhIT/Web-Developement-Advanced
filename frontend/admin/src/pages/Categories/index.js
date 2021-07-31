import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import categoryApi from "../../api/categoryApi";
import {
  Tag,
  Button,
  Tooltip,
  Row,
  Col,
  Modal,
  Input,
  Typography,
  Table,
  message,
  Popconfirm,
} from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import createAction from "../../redux/action/createAction";
import { FETCH_ALL_CATEGORIES } from "../../redux/action/type";

const Categories = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [categorySelected, setCategorySelected] = useState({});
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await categoryApi.getAll();
        props.dispatch(createAction(FETCH_ALL_CATEGORIES, response.data));
      } catch (error) {
        throw error;
      }
    };
    fetchAllCategories();
  }, []);

  const columnRootCategoriesTable = [
    {
      title: "Category Name",
      dataIndex: "catName",
      key: "catName",
    },
    {
      title: "Parent Category",
      dataIndex: "parentCatName",
      key: "parentCatName",
      render: (parentCatName) => <Tag color={"geekblue"}>{parentCatName}</Tag>,
    },
    {
      title: "Created Date",
      dataIndex: "logCreatedDate",
      key: "logCreatedDate",
      render: (logCreatedDate) => (
        <Tag color={"geekblue"}>
          {moment(logCreatedDate).format("MMMM Do YYYY")}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "id",
      render: (id, record) => {
        return (
          <>
            <Popconfirm
              title="Are you sure to delete this category?"
              onConfirm={() => onDeleteCategory(record.id)}
              okText="Delete"
              cancelText="Cancel"
            >
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined className="icon" />}
                style={{
                  marginRight: "8px",
                }}
              />
            </Popconfirm>
            <Tooltip title="Edit category">
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined className="icon" />}
                onClick={() => showModal(id)}
              />
            </Tooltip>
          </>
        );
      },
    },
  ];

  const showModal = (id) => {
    let catIndex = props.categories.findIndex((cat) => cat.id === id);
    if (catIndex !== -1) {
      setCategorySelected(props.categories[catIndex]);
    }
    setVisible(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    try {
      const response = await categoryApi.update(
        {
          catName: categorySelected.catName,
        },
        categorySelected.id
      );
      setConfirmLoading(false);
      switch (response.data.code) {
        case 1: {
          message.success(response.data.msg);
          const allCat = await categoryApi.getAll();
          props.dispatch(createAction(FETCH_ALL_CATEGORIES, allCat.data));
          setCategorySelected({});
          setVisible(false);
          break;
        }
        case -1:
          message.warning(response.data.msg);
          break;
        default:
          return;
      }
    } catch (err) {
      throw err;
    }
  };

  const handleCancel = () => {
    setCategorySelected({});
    setVisible(false);
  };

  const onDeleteCategory = async (id) => {
    try {
      const data = await categoryApi.delete(id);
      switch (data.status) {
        case 202:
          message.warning(data.data.msg);
          break;
        case 200:
          const allCat = await categoryApi.getAll();
          props.dispatch(createAction(FETCH_ALL_CATEGORIES, allCat.data));
          message.success(data.data.msg);
          break;
      }
    } catch (error) {
      throw error;
    }
  };
  const handleCatEditChange = (e) => {
    setCategorySelected({
      ...categorySelected,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <PageTitle title="Categories">
        <Link to="/add-category">
          <Tooltip title="Add new category">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              className="icon"
            ></Button>
          </Tooltip>
        </Link>
      </PageTitle>
      <Row gutter={16}>
        <Col span={24}>
          <Table
            dataSource={props.categories}
            columns={columnRootCategoriesTable}
            bordered
          />
        </Col>
      </Row>

      <Modal
        title="Edit category"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="mb-2">
          <Typography.Title level={5}>Category name</Typography.Title>
          <Input
            onChange={handleCatEditChange}
            name="catName"
            value={categorySelected.catName}
          />
        </div>
        {categorySelected.cat_id && (
          <>
            <Typography.Title level={5}>Category name</Typography.Title>
            <Input
              onChange={handleCatEditChange}
              name="catName"
              value={categorySelected.parentCatName}
              disabled={true}
            />
          </>
        )}
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    rootCategories: state.categories.rootCategories,
  };
};
export default connect(mapStateToProps)(Categories);
