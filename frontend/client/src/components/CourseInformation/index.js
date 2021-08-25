import React, { useEffect, useState } from 'react';
import CourseDescription from './CourseDescription';
import CourseDetailNavbar from '../CourseDetailNavbar';
import CourseLessons from './CourseLessons';
import CoursePayment from './CoursePayment';
import CourseReviews from './CourseReviews';
import { Tabs } from 'antd';
import CourseTeacherDetail from './CourseTeacherDetail';
import purchaseApi from '../../api/purchaseApi';
import { connect } from "react-redux";
const { TabPane } = Tabs;

const CourseInformation = ({ course, user, ...props }) => {
    const [purchaseStatus, setPurchaseStatus] = useState(false);
    const { userInfo, isAuthenticated } = user;
    const { id } = course;

    useEffect(() => {
        const fetchPurchase = async () => {
            try {
                if (isAuthenticated) {
                    const purchaseData = await purchaseApi.singleByBothID(id, userInfo.id);
                    if (purchaseData.data.isExist === true) {
                        setPurchaseStatus(true);
                    }
                    else {
                        setPurchaseStatus(false);
                    }
                }
                else { }
            } catch (error) {
                throw error;
            }
        };
        fetchPurchase();
    }, [purchaseStatus]);

    const onChangePurchaseStatus = () => {
        setPurchaseStatus(true);
    };
    return (
        <div className="bg_color_1">

            <div className="container margin_60_35">
                <div className="row">
                    <div className="col-lg-8">
                        <Tabs type="card">
                            <TabPane tab="Description" key="1">
                                <CourseDescription course={course} />
                                <CourseLessons course={course} purchaseStatus={purchaseStatus} />
                                <CourseReviews course={course} purchaseStatus={purchaseStatus} />
                            </TabPane>
                            <TabPane tab="Teacher Detail" key="2">
                                <CourseTeacherDetail course={course} />
                            </TabPane>
                            

                        </Tabs>
                    </div>
                    {/* /col */}
                    <CoursePayment course={course} onChangePurchaseStatus={onChangePurchaseStatus} purchaseStatus={purchaseStatus} />
                </div>
                {/* /row */}
            </div>
            {/* /container */}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.users,
    };
};
export default connect(mapStateToProps)(CourseInformation);