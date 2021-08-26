import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";
import HeroSingle from "../../components/HeroSingle";
import { connect } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import userApi from "../../api/userApi";
import purchaseApi from "../../api/purchaseApi";
import { message } from "antd";
import courseApi from "../../api/courseApi";

const Cart = ({ user, ...props }) => {
    const { userInfo } = user;
    const [userProfile, setUserProfile] = useState({});
    const history = useHistory();
    const [course, setCourse] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                const userData = await userApi.getById(userInfo.id);
                setUserProfile(userData.data);
            } catch (error) {
                throw error;
            }
        };

        const fetchCourseDetail = async () => {
            try {
                const courseData = await courseApi.getById(id);
                setCourse(courseData.data);
            } catch (error) {
                throw error;
            }
        };


        fetchUserDetail();
        fetchCourseDetail();
    }, []);

    const onHandlePurchase = async () => {
        await purchaseApi.add({
            "user_id": userInfo.id,
            "course_id": id,
        });
        message.success({
            content: "You have just enrolled this course!!! Let's Learn",
            style: {
                marginTop: "15vh",
            }
        });
        history.goBack();
    };

    const onHandleCancel = () => {
        history.goBack();
    };

    return (
        <main>
            <HeroSingle />
            <div className="bg_color_1">
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="box_cart">
                                <div>
                                    <div className="form_title">
                                        <h3>Your Details</h3>
                                    </div>
                                    <div className="step">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <span style={{ fontWeight: "bold" }}>
                                                    User Name
                                                </span>
                                            </div>
                                            <div className="col-sm-6">
                                                <span style={{ fontWeight: "bold" }}>
                                                    Full Name
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <span className="input">
                                                    <input className="input_field" type="text" disabled="true" />
                                                    <label className="input_label">
                                                        <span className="input__label-content">{userProfile.username}</span>
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="col-sm-6">
                                                <span className="input">
                                                    <input className="input_field" type="text" disabled="true" />
                                                    <label className="input_label">
                                                        <span className="input__label-content">{userProfile.fullname}</span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <span style={{ fontWeight: "bold" }}>
                                                    Email
                                                </span>
                                            </div>
                                            <div className="col-sm-6">
                                                <span style={{ fontWeight: "bold" }}>
                                                    Telephone
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <span className="input">
                                                    <input className="input_field" type="email" disabled="true" />
                                                    <label className="input_label">
                                                        <span className="input__label-content">{userProfile.email}</span>
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="col-sm-6">
                                                <span className="input">
                                                    <input className="input_field" type="text" disabled="true" />
                                                    <label className="input_label">
                                                        <span className="input__label-content">{userProfile.phone}</span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* /cart-options */}
                            </div>
                        </div>
                        {/* /col */}
                        <aside className="col-lg-4" id="sidebar">
                            <div className="box_detail">
                                <div className="price">
                                    ${course.sale ? (course.price * (100 - course.sale) / 100) : course.price}<span className="original_price">
                                        <em>{course.sale ? '$' + course.price : ''}</em>
                                        {course.sale ? course.sale : 0}% discount price</span>
                                </div>
                                <div>
                                    <h3>Purchase Course</h3>
                                    <h4>{course.courseName}</h4>
                                </div>
                                <a onClick={onHandlePurchase} className="btn_1 full-width">Checkout</a>
                                <a onClick={onHandleCancel} className="btn_1 full-width outline"><i className="icon-right" /> Go Back</a>
                            </div>
                        </aside>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /bg_color_1 */}
        </main>

    );
};
const mapStateToProps = (state) => {
    return {
        user: state.users,
    };
};
export default connect(mapStateToProps)(Cart);