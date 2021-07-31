import React, { useState, useEffect } from "react";
import { Button, Table, Tooltip, Avatar, Tag, Space, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import userApi from "../../api/userApi";
import moment from "moment";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const data = await userApi.getAll();
        setUsers(data.data);
      } catch (error) {
        throw error;
      }
    };
    fetchAllUser();
  }, []);
  const onDeleteUserConfirm = (id) => {};
  const columns = [
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
      render: (fullname, record) => {
        return (
          <Link to={`/${record.id}`}>
            <div className="d-flex align-items-center">
              <Avatar size="large" icon={<UserOutlined />} className="icon" />
              <span className="mx-3">{record.fullname}</span>
            </div>
          </Link>
        );
      },
      fixed: "left",
      width: 250,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
      render: (email) => (
        <Tooltip title={email}>
          <span>
            {email && email.length > 24 ? email.slice(0, 24) + "..." : email}
          </span>
        </Tooltip>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address) => {
        return (
          <Tooltip title={address}>
            <span>
              {address && address.length > 20
                ? address.slice(0, 25) + "..."
                : address}
            </span>
          </Tooltip>
        );
      },
      width: 200,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role, record) => {
        switch (+role) {
          case 0:
            return <Tag color="magenta">Admin</Tag>;
          case 1:
            return <Tag color="gold">Teacher</Tag>;
          case 2:
            return <Tag color="blue">Student</Tag>;
        }
      },
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
      title: "Update at",
      dataIndex: "logUpdatedDate",
      key: "logUpdatedDate",
      width: 150,
      render: (logUpdatedDate) => {
        return (
          <Tag color={"purple"}>
            {moment(logUpdatedDate).format("MMMM Do YYYY")}
          </Tag>
        );
      },
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
            onConfirm={() => onDeleteUserConfirm(record.id)}
            okText="Delete"
            cancelText="Cancle"
          >
            <Button
              type="danger"
              shape="circle"
              icon={<DeleteOutlined className="icon" />}
            />
          </Popconfirm>
          <Link to={`/users/${record.id}`}>
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
  return (
    <div>
      <PageTitle title="Users">
        <Link to="/users/add">
          <Tooltip title="Add new user">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              className="icon"
            ></Button>
          </Tooltip>
        </Link>
      </PageTitle>

      {/* User table */}
      <Table
        dataSource={users}
        columns={columns}
        scroll={{ x: 1500 }}
        pagination={{ pageSize: "15" }}
      />
    </div>
  );
};

export default Users;
