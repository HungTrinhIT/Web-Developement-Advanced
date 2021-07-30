import React from 'react'
import { Table, Button, Space, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ProfileWishList = (props) => {
    const {wishlist} = props;
    const columns = [
        {
            title: 'Course Name',
            width: 500,
            dataIndex: 'courseName',
            key: 'courseName',
        },
        {
            title: "Action",
            key: "action",
            width: 30,
            fixed: "right",
            render: () => (
              <Space size="middle">
                <Popconfirm
                  title="Are you sure to delete this course?"
                  okText="Delete"
                  cancelText="Cancle"
                >
                  <Button
                    type="danger"
                    shape="circle"
                    icon={<DeleteOutlined className="icon" />}
                  />
                </Popconfirm>
              </Space>
            ),
          },
    ];
    return (
        <Table columns={columns} dataSource={wishlist} pagination={{ pageSize: "2" }}/>
    );
};
export default ProfileWishList;