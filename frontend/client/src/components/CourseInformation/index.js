import React from 'react';
import CourseDescription from './CourseDescription';
import CourseDetailNavbar from '../CourseDetailNavbar';
import CourseLessons from './CourseLessons';
import CoursePayment from './CoursePayment';
import CourseReviews from './CourseReviews';
import { Tabs } from 'antd';
import CourseTeacherDetail from './CourseTeacherDetail';
const { TabPane } = Tabs;

const CourseInformation = (props) => {
    const { course } = props;
    return (
        <div className="bg_color_1">

            <div className="container margin_60_35">
                <div className="row">
                    <div className="col-lg-8">
                        <Tabs type="card">
                            <TabPane tab="Description" key="1">
                                <CourseDescription course={course} />
                            </TabPane>
                            <TabPane tab="Course Lesson" key="2">
                                <CourseLessons />
                            </TabPane>
                            <TabPane tab="Course Review" key="3">
                                <CourseReviews course={course} />
                            </TabPane>
                            <TabPane tab="Teacher Detail" key="4">
                                <CourseTeacherDetail course={course}/>
                            </TabPane>

                        </Tabs>
                    </div>
                    {/* /col */}
                    <CoursePayment course={course} />
                </div>
                {/* /row */}
            </div>
            {/* /container */}
        </div>
    );
};
export default CourseInformation;