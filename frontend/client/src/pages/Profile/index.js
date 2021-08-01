import React from 'react-router-dom'
import ProfileDescription from '../../components/ProfileDescription'
import { Tabs } from "antd";
import { useEffect, useState } from 'react';
import wishListApi from '../../api/wishlistAPI';
import ProfileWishList from '../../components/ProfileWishList';
const { TabPane } = Tabs;

const Profile = () => {
    
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
                        <div className="profile">
                            <figure><img src="http://via.placeholder.com/150x150/ccc/fff/teacher_2_small.jpg" alt="Teacher" className="rounded-circle" /></figure>
                            <ul className="social_teacher">
                                <li><a href="#"><i className="icon-facebook" /></a></li>
                                <li><a href="#"><i className="icon-twitter" /></a></li>
                                <li><a href="#"><i className="icon-linkedin" /></a></li>
                                <li><a href="#"><i className="icon-email" /></a></li>
                            </ul>
                            <ul>
                                <li>Name <span className="float-right">Silvia Doe</span> </li>
                                <li>Students <span className="float-right">42</span></li>
                                <li>Lessons <span className="float-right">12</span></li>
                                <li>Courses <span className="float-right">15</span></li>
                            </ul>
                        </div>
                    </aside>
                    {/*/aside */}
                    <Tabs type="card" className="col-lg-9">
                        <TabPane tab="Profile" key="1">
                            <ProfileDescription />
                        </TabPane>
                        <TabPane tab="Wishlist" key="2">
                            <ProfileWishList/>
                        </TabPane>
                        <TabPane tab="Unknow" key="3">
                            Content of Tab Pane 3
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