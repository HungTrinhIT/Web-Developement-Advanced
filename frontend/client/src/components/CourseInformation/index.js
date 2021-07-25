import React from 'react';
import CourseDescription from '../CourseDescription';
import CourseDetailNavbar from '../CourseDetailNavbar';
import CourseLessons from '../CourseLessons';
import CoursePayment from '../CoursePayment';
import CourseReviews from '../CourseReviews';

const CourseInformation = (props) => {
    const {course} = props;
    return (
        <div className="bg_color_1">
            <CourseDetailNavbar />
            <div className="container margin_60_35">
                <div className="row">
                    <div className="col-lg-8">
                        <CourseDescription course = {course}/>
                        {/* /section */}
                        <CourseLessons />
                        {/* /section */}
                        <CourseReviews />
                        {/* /section */}
                    </div>
                    {/* /col */}
                    <CoursePayment course = {course}/>
                </div>
                {/* /row */}
            </div>
            {/* /container */}
        </div>
    );
};
export default CourseInformation;