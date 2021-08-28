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
import { connect } from "react-redux";
const { TabPane } = Tabs;

const Profile = ({user, ...props}) => {
    const [userProfile, setUserProfile] = useState({});
    const { userInfo } = user;
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userData = await userApi.getById(userInfo.id);
                setUserProfile(userData.data);
            } catch (error) {
                throw error;
            }
        }
        fetchUserInfo();
    }, []);
    const onChangeImage = (changeAvatar) => {
        setUserProfile({
            ...userProfile,
            avatar : changeAvatar
        });
        
    };
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
                            <ProfileDescription user={userProfile}/>
                        </TabPane>
                        <TabPane tab="Change Password" key="2">
                            <ChangePassword user={userProfile}/>
                        </TabPane>
                        <TabPane tab="Avatar" key="3">
                            <ProfileImage user={userProfile} onChangeImage={onChangeImage}/>
                        </TabPane>
                        <TabPane tab="My Learning" key="4">
                            <ProfileLearning user={userProfile} />
                        </TabPane>
                        <TabPane tab="Wishlist" key="5">
                            <ProfileWishList user={userProfile} />
                        </TabPane>
                    </Tabs>

                    {/* /col */}
                {/* /row */}
            </div>
            {/* /container */}
        </main>

    );
};
const mapStateToProps = (state) => {
    return {
      user: state.users,
    };
  };
  export default connect(mapStateToProps)(Profile);
  