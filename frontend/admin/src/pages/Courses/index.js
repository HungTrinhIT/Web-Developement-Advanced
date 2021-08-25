import React, { useEffect, useState } from "react";
import courseApi from "../../api/courseApi";
import { connect } from "react-redux";
import PageTitle from "../../components/PageTitle";
import queryString from "query-string";
import {
  Button,
  Tooltip,
  Table,
  Tag,
  Space,
  Popconfirm,
  message,
  Pagination,
  Input,
  Select,
} from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import "./course.css";
const { Option } = Select;
const Courses = ({ user, ...props }) => {
  const [courses, setCourses] = useState({
    courses: [],
    totalCourses: 0,
    currentPage: 1,
    totalPage: 1,
  });
  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
    search: "",
    categories: "",
  });

  const location = useLocation();
  const history = useHistory();
  const { userInfo, isAuthenticated } = user;
  const onDeleteCourseConfirm = async (id) => {
    try {
      await courseApi.delete(id);
      const data = await courseApi.getAll();
      setCourses(data.data.courses);
      message.success("Course is deleted successfully!");
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    const query = queryString.parse(location.search);
    const categories = query && query.categories ? query.categories : "";
    setFilter({
      ...filter,
      categories: [categories],
    });
  }, []);
  useEffect(() => {
    const fetchAllCourses = async () => {
      for (let key in filter) {
        if (!filter[key]) {
          delete filter[key];
        }
      }
      if (filter.categories !== "") {
        history.push("/courses");
      }
      const data = await courseApi.getAll(filter);
      setCourses(data.data);
    };
    fetchAllCourses();
  }, [filter]);
  const onCompleteCourse = async (id, isCompleted, teacher_id) => {
    if (userInfo.role !== 0 && userInfo.id !== teacher_id) {
      message.error({
        content: "You don't have power to do this!",
        style: {
          marginTop: "15vh",
        }
      });

    }
    else if (isCompleted.data[0] === 0) {
      const res = await courseApi.completeCourse(id);
      const data = await courseApi.getAll();
      setCourses(data.data);
      message.success({
        content: "Complete Course!",
        style: {
          marginTop: "15vh",
        }
      });
    }
    else {
      const res = await courseApi.incompleteCourse(id);
      const data = await courseApi.getAll();
      setCourses(data.data);
      message.success({
        content: "Incomplete Course!",
        style: {
          marginTop: "15vh",
        }
      });
    }
  };
  const columns = [
    {
      title: "Course name",
      width: 400,
      dataIndex: "courseName",
      key: "courseName",
      fixed: "left",
      render: (text, record) => (
        <Link to={`/courses/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Category",
      width: 200,
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Teacher",
      dataIndex: "fullname",
      key: "fullname",
      width: 150,
      render: (text, record) => (
        <Link to={`/users/${record.teacher_id}`}>{text}</Link>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 150,
      render: (text) => (
        <Tag color={"magenta"}>
          <b>{text}</b> $
        </Tag>
      ),
    },

    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      width: 150,
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      width: 150,
    },
    {
      title: "No. Students",
      dataIndex: "currentStudent",
      key: "currentStudent",
      width: 150,
    },
    {
      title: "Create at",
      dataIndex: "logCreatedDate",
      key: "logCreatedDate",
      width: 150,
      render: (logCreatedDate) => {
        return (
          <Tag color={"geekblue"}>
            {moment(logCreatedDate).format("MMMM Do YYYY")}
          </Tag>
        );
      },
    },
    {
      title: "Last updated",
      dataIndex: "logUpdatedDate",
      key: "logUpdatedDate",
      width: 150,
      render: (logUpdatedDate) => (
        <Tag color={"geekblue"}>
          {moment(logUpdatedDate).format("MMMM Do YYYY")}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      fixed: "right",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this course?"
            onConfirm={() => onDeleteCourseConfirm(record.id)}
            okText="Delete"
            cancelText="Cancle"
          >
            <Button
              type="danger"
              shape="circle"
              icon={<DeleteOutlined className="icon" />}
            />
          </Popconfirm>
          <Popconfirm
            title={
              record.isCompleted.data[0] === 0
                ? "Are you sure to complete this course?"
                : "Are you sure to uncomplete this course?"
            }
            onConfirm={() => onCompleteCourse(record.id, record.isCompleted, record.teacher_id)}
            okText={record.isCompleted.data[0] === 0 ? "Complete" : "Incomplete"}
            cancelText="Cancel"
          >
            {record.isCompleted.data[0] === 0 ? (
              <Tooltip title="Complete Course">
                <Button
                  shape="circle"
                  icon={<CheckCircleOutlined className="icon" />}
                />
              </Tooltip>
            ) : (
              <Tooltip title="Incomplete Course">
                <Button
                  shape="circle"
                  icon={<CloseCircleOutlined className="icon" />}
                />
              </Tooltip>
            )}
          </Popconfirm>

          <Link to={`/courses/${record.id}`}>
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined className="icon" />}
            />
          </Link>
        </Space>
      ),
    },
  ];
  const onPaginateHandleChange = (selectedPage) => {
    setFilter({
      ...filter,
      page: selectedPage,
    });
  };

  const categoryHandleChange = (value) => {
    const categoriesConcat = value.join(".");

    setFilter({
      ...filter,
      search: "",
      categories: categoriesConcat,
    });
  };
  const onSearchHandler = (e) => {
    setFilter({
      ...filter,
      categories: "",
      search: e.target.value,
    });
  };
  const { categories } = props;
  return (
    <div>
      <PageTitle title="Courses Management">
        <Link to="/courses/add">
          <Tooltip title="Add course">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              className="icon"
            ></Button>
          </Tooltip>
        </Link>
      </PageTitle>

      <div className="course-filter mb-3 d-flex align-items-center justify-content-between">
        <Input.Search
          placeholder="Search course"
          name="search"
          enterButton
          style={{ width: "250px" }}
          onChange={onSearchHandler}
          value={filter.search}
        />
        <Select
          mode="multiple"
          allowClear
          name="cagories"
          placeholder="Select category"
          onChange={categoryHandleChange}
          style={{ width: "400px" }}
          showSearch
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          {categories &&
            categories
              .filter((cat) => cat.cat_id !== null)
              .map((cat) => (
                <Option value={cat.id} key={cat.id}>
                  {cat.catName}
                </Option>
              ))}
        </Select>
      </div>

      <Table
        columns={columns}
        dataSource={courses.courses}
        scroll={{ x: 1500 }}
        pagination={false}
      />
      <div className="d-flex justify-content-center align-items-center mt-3">
        <Pagination
          total={courses.totalCourses}
          showQuickJumper
          showSizeChanger={false}
          showTotal={(total) => `Total ${total} courses`}
          defaultCurrent={1}
          onChange={onPaginateHandleChange}
          defaultPageSize={filter.limit}
          current={courses.currentPage}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    user: state.users,
  };
};
export default connect(mapStateToProps)(Courses);
