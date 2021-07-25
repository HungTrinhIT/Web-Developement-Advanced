import React from 'react';

const CoursePayment = (props) => {
    const {course} = props;
    return (
        <aside className="col-lg-4" id="sidebar">
            <div className="box_detail">
                <figure>
                    <a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video"><i className="arrow_triangle-right" /><img src="http://via.placeholder.com/800x533/ccc/fff/course_1.jpg" alt className="img-fluid" /><span>View course preview</span></a>
                </figure>
                <div className="price">
                    ${(course.price*(100-course.sale)/100)}<span className="original_price"><em>${course.price}</em>{course.sale}% discount price</span>
                </div>
                <a href="#0" className="btn_1 full-width">Purchase</a>
                <a href="#0" className="btn_1 full-width outline"><i className="icon_heart" /> Add to wishlist</a>
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