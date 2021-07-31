import React from "react";
import { Tabs } from "antd";

import UserDetail from "./UserDetail";
import UserImage from "./UserImage";
import UserLearning from "./UserLearning";
import UserWishlist from "./UserWishlist";
import ChangePassword from "./ChangePassword";

const { TabPane } = Tabs;
const UserInfo = (props) => {
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Basic Infomation" key="1">
          <UserDetail />
        </TabPane>
        <TabPane tab="Change password" key="2">
          <ChangePassword />
        </TabPane>
        <TabPane tab="User Image" key="3">
          <UserImage />
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
