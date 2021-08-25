import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import lessonApi from '../../../api/lessonApi';
import LessonItem from './LessonItem';
import purchaseApi from '../../../api/purchaseApi';

const CourseLessons = ({ course, user, ...props }) => {
    const [lesson, setLesson] = useState([]);
    const {id} = useParams();
    const { userInfo, isAuthenticated } = user;
    const [purchaseStatus, setPurchaseStatus] = useState(false);
    useEffect(() => {
        const fetchAllLesson = async () => {
            try {
                const lessonData = await lessonApi.getAllForTeacher(id);
                setLesson(lessonData.data);
            } catch (error) {
                throw error;
            }
        };
        fetchAllLesson();
    }, []);

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
    }, []);
    return (
        <div>
            <div className="intro_title">
                <h2>Lessons</h2>
            </div>
            <div className="card-body">
                <div className="list_lessons">
                    <ul>
                        {lesson.map((lessonItem, index) => {
                            return <LessonItem purchase={purchaseStatus} lesson={lessonItem} key={index} />;
                        })}
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.users,
    };
};
export default connect(mapStateToProps)(CourseLessons);