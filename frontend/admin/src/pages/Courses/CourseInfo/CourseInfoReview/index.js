import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import courseApi from '../../../../api/courseApi';
import rateApi from '../../../../api/rateApi';


const CourseInfoReview = ({ course, ...props }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchAllRate = async () => {
            try {
                const rateData = await rateApi.getAllByCourseID(course.id);
                setReviews(rateData.data);
            } catch (error) {
                throw error;
            }
        };
        fetchAllRate();
    }, []);


    const columns = [
        {
            title: 'Reviewer Name',
            width: 500,
            dataIndex: 'fullname',
            key: 'fullname',
        },
        {
            title: 'Rate Value',
            width: 500,
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Content',
            width: 500,
            dataIndex: 'content',
            key: 'content',
        },

    ];
    return (
        <div>
            <Table columns={columns} dataSource={reviews} pagination={{ pageSize: "10" }} />
        </div>
    );
};
export default CourseInfoReview;
