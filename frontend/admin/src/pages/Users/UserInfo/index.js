import React, { useState, useEffect } from "react";
import { Tabs } from "antd";

import UserDetail from "./UserDetail";
import UserImage from "./UserImage";
import UserLearning from "./UserLearning";
import UserWishlist from "./UserWishlist";
import ChangePassword from "./ChangePassword";
import userApi from "../../../api/userApi";
import { useParams } from "react-router-dom";
const { TabPane } = Tabs;
const UserInfo = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const userData = await userApi.getById(id);
        setUser(userData.data);
      } catch (error) {
        throw error;
      }
    };
    fetchUserDetail();
  }, []);
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Basic Infomation" key="1">
          <UserDetail user={user} />
        </TabPane>
        <TabPane tab="Change password" key="2">
          <ChangePassword />
        </TabPane>
        <TabPane tab="Avatar" key="3">
          <UserImage user={user} />
        </TabPane>
        <TabPane tab="Learning" key="4">
          <UserLearning />
        </TabPane>
        <TabPane tab="Wishlist" key="5">
          <UserWishlist />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UserInfo;
