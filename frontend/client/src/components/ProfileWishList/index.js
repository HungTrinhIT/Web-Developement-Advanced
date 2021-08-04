import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import wishListApi from '../../api/wishlistAPI';

const ProfileWishList = () => {
  const [wishlist, setWishList] = useState([]);
    const user_id = 1;
    useEffect(() => {
        const fetchWishListByID = async () => {
            try {
                const wishListData = await wishListApi.getAllByUserID(user_id);
                console.log(wishListData.data);
                setWishList(wishListData.data);
              } catch (error) {
                throw error;
              }
        };

        fetchWishListByID();
    }, []);
  const onDeleteWishlistConfirm = async (id) => {
    try {
      await wishListApi.delete(id);
      const data = await wishListApi.getAllByUserID(user_id);
      setWishList(data.data);
      message.success("Course is deleted successfully!");
    } catch (error) {
      throw error;
    }
  };  
    const columns = [
        {
            title: 'Course Name',
            width: 500,
            dataIndex: 'courseName',
            key: 'courseName',
            render: (text, record) => (
              <Link to={`/course-detail/${record.course_id}`}>{text}</Link>
            ),
        },
        {
            title: "Action",
            key: "action",
            width: 30,
            fixed: "right",
            render: (text, record) => (
              <Space size="middle">
                <Popconfirm
                  title="Are you sure to delete this course?"
                  onConfirm={() => onDeleteWishlistConfirm(record.id)}
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
        <Table columns={columns} dataSource={wishlist} pagination={{ pageSize: "10" }}/>
    );
};
export default ProfileWishList;