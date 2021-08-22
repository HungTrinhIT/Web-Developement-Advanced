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
                <div className="row">
                    <aside className="col-lg-3" id="sidebar">
                        <div className="d-flex align-items-center">
                            {user.avatar ? (
                                <img src={`${user.avatar}`} className="img-small" style={{ maxWidth: "300px", maxHeight: "300px" }} />
                            ) : (
                                <Avatar size="large" icon={<UserOutlined />} className="icon" />
                            )}
                        </div>
                    </aside>
                    {/*/aside */}
                    <Tabs type="card" className="col-lg-9">
                        <TabPane tab="Profile" key="1">
                            <ProfileDescription user={user} />
                        </TabPane>
                        <TabPane tab="Change Password" key="2">

                        </TabPane>
                        <TabPane tab="Avatar" key="3">

                        </TabPane>
                        <TabPane tab="My Learning" key="4">
                            <ProfileLearning user={user} />
                        </TabPane>
                        <TabPane tab="Wishlist" key="5">
                            <ProfileWishList user={user} />
                        </TabPane>
                    </Tabs>

                    {/* /col */}
                </div>
                {/* /row */}
            </div>
            {/* /container */}
        </main>

    );
};
export default Profile;