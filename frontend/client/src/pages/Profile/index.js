import React from 'react-router-dom'
import ProfileDescription from '../../components/UserProfile/ProfileDescription'
import { Avatar, Tabs } from "antd";
import { useEffect, useState } from 'react';
import wishListApi from '../../api/wishlistAPI';
import ProfileWishList from '../../components/UserProfile/ProfileWishList';
import userApi from '../../api/userApi';
import {
    UserOutlined,
} from "@ant-design/icons";
import ProfileLearning from '../../components/UserProfile/ProfileLearning';
import ChangePassword from '../../components/UserProfile/ChangePassword';
import ProfileImage from '../../components/UserProfile/ProfileImage';
const { TabPane } = Tabs;

const Profile = () => {
    const [user, setUser] = useState({});
    const tmpUserID = "e99f5201-0c27-4c8e-922b-1a3da363d347";
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userData = await userApi.getById(tmpUserID);
                setUser(userData.data);
            } catch (error) {
                throw error;
            }
        }
        fetchUserInfo();
    }, []);
    return (
        <main>
            <section id="hero_in" className="general">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span />User Profile</h1>
                    </div>
                </div>
            </section>
            {/*/hero_in*/}
            <div className="container margin_60_35">
                    
                    {/*/aside */}
                    <Tabs type="card">
                        <TabPane tab="Profile" key="1">
                            <ProfileDescription user={user} />
                        </TabPane>
                        <TabPane tab="Change Password" key="2">
                            <ChangePassword user={user}/>
                        </TabPane>
                        <TabPane tab="Avatar" key="3">
                            <ProfileImage user={user} />
                        </TabPane>
                        <TabPane tab="My Learning" key="4">
                            <ProfileLearning user={user} />
                        </TabPane>
                        <TabPane tab="Wishlist" key="5">
                            <ProfileWishList user={user} />
                        </TabPane>
                    </Tabs>

                    {/* /col */}
                {/* /row */}
            </div>
            {/* /container */}
        </main>

    );
};
export default Profile;