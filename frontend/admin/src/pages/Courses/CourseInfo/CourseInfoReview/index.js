import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import rateApi from '../../../../api/rateApi';

const CourseInfoReview = ({course, ...props}
) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchAllReviewByCourse = async () => {
            try{
                const reviewData = await rateApi.getAllByCourseID(course.id);
                setReviews(reviewData.data);
            }
            catch (error) {
                throw error;
            }
        };
        fetchAllReviewByCourse();
        
    }, []);
    const columns = [
        {
            title: "User name",
            width: 400,
            dataIndex: "fullname",
            key: "fullname",
            
        },
        {
            title: "Content",
            width: 600,
            dataIndex: "content",
            key: "content",
        },
        
        
    ];
    return (
        <div>
            <Table
                columns={columns}
                dataSource={reviews}
                scroll={{ x: 1500 }}
                pagination={false}
            />
            
        </div>
    );
};
export default CourseInfoReview;
