import React, { useEffect, useState } from "react";
import courseApi from "../../api/courseApi";
import { connect } from "react-redux";
import PageTitle from "../../components/PageTitle";
import { Button, Tooltip, Table, Tag, Space, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchAllCourses = async () => {
      const data = await courseApi.getAll();
      setCourses(data.data);
    };
    fetchAllCourses();
  }, []);
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
      dataIndex: "teacher_id",
      key: "teacher_id",
      width: 150,
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
  const onDeleteCourseConfirm = async (id) => {
    try {
      await courseApi.delete(id);
      message.success("Course is deleted successfully!");
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <PageTitle title="Courses Management">
        <Link to="/add-course">
          <Tooltip title="Add new courses">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              className="icon"
            ></Button>
          </Tooltip>
        </Link>
      </PageTitle>

      <Table
        columns={columns}
        dataSource={courses}
        scroll={{ x: 1500, y: 300 }}
        pagination={{ pageSize: "15" }}
      />
    </div>
  );
};

export default connect()(Courses);
