import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import createAction from "../../redux/action/createAction";
import { FETCH_ALL_CATEGORIES } from "../../redux/action/type";
import { Table } from "antd";
import categoryApi from "../../api/categoryApi";
import { Tag, Button, Tooltip, Row, Col, Typography } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Categories = (props) => {
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await categoryApi.getAll();
        props.dispatch(createAction(FETCH_ALL_CATEGORIES, response.data));
      } catch (error) {}
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
      render: (id) => {
        return (
          <>
            <Tooltip title="Delete category">
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                style={{ marginRight: "8px" }}
              />
            </Tooltip>

            <Tooltip title="Edit category">
              <Button type="primary" shape="circle" icon={<EditOutlined />} />
            </Tooltip>
          </>
        );
      },
    },
  ];
  const addCategoryHandler = () => {};
  return (
    <div>
      <Link to="/add-category">
        <Tooltip title="Add new category">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={addCategoryHandler}
            size="large"
            style={{ marginBottom: "24px" }}
          >
            Add new category
          </Button>
        </Tooltip>
      </Link>
      <Row gutter={16}>
        <Col span={24}>
          <Table
            dataSource={props.categories}
            columns={columnRootCategoriesTable}
            bordered
            title={() => (
              <Typography.Title level={2}>Categort List</Typography.Title>
            )}
          />
        </Col>
      </Row>
      ;
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
