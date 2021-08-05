import React, { useEffect, useState } from 'react';
import wishListApi from '../../../api/wishlistAPI'
import { useParams } from 'react-router-dom';

const CoursePayment = ({ course, ...props }) => {
    const { id } = useParams();
    const user_id = "e99f5201-0c27-4c8e-922b-1a3da363d347";
    const [wish, setWish] = useState(null);
    const [status, setStatus] = useState(false);
    const onHandleWishList = async () => {
        if (status === true) {

            await wishListApi.delete(wish.id);
            setStatus(false);
        }
        else {

            await wishListApi.add({
                "user_id": user_id,
                "course_id": id
            });
            setStatus(true);
        }

    };

    useEffect(() => {
        const fetchWishListByID = async () => {
            try {
                const wishData = await wishListApi.singleByBothID(id, user_id);
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
                <a href="#0" className="btn_1 full-width">Purchase</a>

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
export default CoursePayment;