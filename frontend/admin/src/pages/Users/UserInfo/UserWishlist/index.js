import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import wishListApi from '../../../../api/wishlistApi';

const UserWishlist = ({ user, ...props }) => {
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    const fetchWishListByID = async () => {
      try {
        const wishListData = await wishListApi.getAllByUserID(user.id);
        console.log(wishListData.data);
        setWishList(wishListData.data);
      } catch (error) {
        throw error;
      }
    };

    fetchWishListByID();
  }, []);
  
  const columns = [
    {
      title: 'Course Name',
      width: 500,
      dataIndex: 'courseName',
      key: 'courseName',
      render: (text, record) => (
        <Link to={`/courses/${record.course_id}`}>{text}</Link>
      ),
    },
    
  ];
  return (
    <div>
      <Table columns={columns} dataSource={wishlist} pagination={{ pageSize: "10" }} />
    </div>
  );
};
export default UserWishlist;
