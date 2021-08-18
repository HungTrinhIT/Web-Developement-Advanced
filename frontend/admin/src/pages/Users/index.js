import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Tooltip,
  Avatar,
  Tag,
  Space,
  Popconfirm,
  message,
} from "antd";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import {
  DeleteOutlined,
  EditOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  UnlockOutlined,
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
  const onDeleteUserConfirm = async (id) => {
    try {
      const data = await userApi.delete(id);
      switch (data.status) {
        case 200:
          message.success(data.data.msg);
          const newUsers = await userApi.getAll();
          setUsers(newUsers.data);
          break;
        case 202:
          message.warning(data.data.msg);
          break;
        default:
          break;
      }
    } catch (error) {
      throw error;
    }
  };
  const onLockUser = async (id, isBlocked) => {
    if (isBlocked.data[0] === 0) {
      const res = await userApi.lockUser(id);
      const data = await userApi.getAll();
      setUsers(data.data);
      message.success(res.data.msg);
    } else {
      const res = await userApi.unLockUser(id);
      const data = await userApi.getAll();
      setUsers(data.data);
      message.success(res.data.msg);
    }
  };
  const columns = [
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
      render: (fullname, record) => {
        return (
          <Link to={`/users/${record.id}`}>
            <div className="d-flex align-items-center">
              {record.avatar ? (
                <img src={`${record.avatar}`} className="img-small" alt="img" />
              ) : (
                <Avatar size="large" icon={<UserOutlined />} className="icon" />
              )}
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
      width: 120,
    },
    {
      title: "Status",
      dataIndex: "isBlocked",
      key: "isBlocked",
      width: 100,
      render: (isBlocked) =>
        isBlocked.data[0] === 0 ? (
          <Tag color="#87d068">Enable</Tag>
        ) : (
          <Tag color="gold">Blocked</Tag>
        ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 250,
      render: (email) => (
        <Tooltip title={email}>
          <div
            className="d-flex align-items-center "
            style={{ color: "#1890ff", cursor: "pointer" }}
          >
            <MailOutlined />
            <span className="mx-1">
              {email && email.length > 24 ? email.slice(0, 24) + "..." : email}
            </span>
          </div>
        </Tooltip>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 200,
      render: (phone) => {
        return (
          <div className="d-flex align-items-center">
            <PhoneOutlined />
            <span className="mx-2">{phone}</span>
          </div>
        );
      },
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
      width: 100,
      render: (role, record) => {
        switch (+role) {
          case 0:
            return <Tag color="magenta">Admin</Tag>;
          case 1:
            return <Tag color="gold">Teacher</Tag>;
          case 2:
            return <Tag color="blue">Student</Tag>;
          default:
            return;
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
      width: 150,
      fixed: "right",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this course?"
            onConfirm={() => onDeleteUserConfirm(record.id)}
            okText="Delete"
            cancelText="Cancel"
          >
            <Button
              type="danger"
              shape="circle"
              icon={<DeleteOutlined className="icon" />}
            />
          </Popconfirm>
          <Popconfirm
            title={
              record.isBlocked.data[0] === 0
                ? "Are you sure to lock this user?"
                : "Are you sure to unlock this user?"
            }
            onConfirm={() => onLockUser(record.id, record.isBlocked)}
            okText={record.isBlocked.data[0] === 0 ? "Lock" : "Unlock"}
            cancelText="Cancel"
          >
            {record.isBlocked.data[0] === 0 ? (
              <Tooltip title="Lock User">
                <Button
                  shape="circle"
                  icon={<LockOutlined className="icon" />}
                />
              </Tooltip>
            ) : (
              <Tooltip title="Unlock User">
                <Button
                  shape="circle"
                  icon={<UnlockOutlined className="icon" />}
                />
              </Tooltip>
            )}
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
