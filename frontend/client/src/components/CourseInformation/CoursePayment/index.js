import React, { useEffect, useState } from 'react';
import wishListApi from '../../../api/wishlistAPI'
import purchaseApi from '../../../api/purchaseApi'
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { message } from 'antd';

const CoursePayment = ({ course, user, onChangePurchaseStatus, purchaseStatus, ...props }) => {
    const { id } = useParams();
    const [wish, setWish] = useState(null);
    const [status, setStatus] = useState(false);
    const { userInfo, isAuthenticated } = user;
    const onHandleWishList = async () => {
        if (status === true) {
            await wishListApi.delete(wish.id);
            setStatus(false);
        }
        else {
            await wishListApi.add({
                "user_id": userInfo.id,
                "course_id": id
            });
            setStatus(true);
        }
    };

    const onHandlePurchase = async () => {
        await purchaseApi.add({
            "user_id": userInfo.id,
            "course_id": id
        });
        onChangePurchaseStatus();
        message.success({
            content:"You have just enrolled this course!!! Let's Learn",
            style:{
            marginTop:"15vh",
            }
            });
    };

    useEffect(() => {
        const fetchWishListByID = async () => {
            try {
                const wishData = await wishListApi.singleByBothID(id, userInfo.id);
                if (wishData.data.isExist === true) {
                    if (wishData.data.wish.isDeleted.data[0] === 0) {
                        setStatus(true);
                        setWish(wishData.data.wish);
                    }
                    else {
                        setStatus(false);
                    }
                }
                else {
                    setStatus(false);
                }
            } catch (error) {
                throw error;
            }
        };

        fetchWishListByID();
    }, [status]);

    return (
        <aside className="col-lg-4" id="sidebar">
            <div className="box_detail">
                <figure>
                    <a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video"><i className="arrow_triangle-right" /><img src="http://via.placeholder.com/800x533/ccc/fff/course_1.jpg" alt className="img-fluid" /><span>View course preview</span></a>
                </figure>
                <div className="price">
                    ${course.sale ? (course.price * (100 - course.sale) / 100) : course.price}<span className="original_price">
                        <em>{course.sale ? '$' + course.price : ''}</em>
                        {course.sale ? course.sale : 0}% discount price</span>

                </div>
                {purchaseStatus
                    ? <a className="btn_1 full-width">Purchased</a>
                    : <a className="btn_1 full-width" onClick={onHandlePurchase}>Purchase</a>
                }

                <a className="btn_1 full-width outline" onClick={onHandleWishList}><i className="icon_heart" />{status ? "Remove from wishlist" : "Add to wishlist"}</a>
                <div id="list_feat">
                    <h3>What's includes</h3>
                    <ul>
                        <li><i className="icon_mobile" />Mobile support</li>
                        <li><i className="icon_archive_alt" />Lesson archive</li>
                        <li><i className="icon_mobile" />Mobile support</li>
                        <li><i className="icon_chat_alt" />Tutor chat</li>
                        <li><i className="icon_document_alt" />Course certificate</li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.users,
    };
};
export default connect(mapStateToProps)(CoursePayment);