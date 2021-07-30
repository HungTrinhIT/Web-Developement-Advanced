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
            width: 50,
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
      
                <Link>
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
        <Table columns={columns} dataSource={wishlist} scroll={{ x: 1500, y: 300 }} />
    );
};
export default ProfileWishList;