import { Button, message, Popconfirm, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import purchaseApi from '../../../api/purchaseApi';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const ProfileLearning = ({user, ...props}) => {
    const [learning, setLearning] = useState([]);
    useEffect(() => {
        const fetchLearning = async () => {
            try {
                const learningData = await purchaseApi.getByUserID(user.id);
                setLearning(learningData.data);
              } catch (error) {
                throw error;
              }
        };
        fetchLearning();
    }, []);
    
    const columns = [
        {
            title: 'Course Name',
            width: 500,
            dataIndex: 'courseName',
            key: 'courseName',
            render: (text, record) => (
              <Link to={`/courses/${record.course_id}`}>{text}</Link>
            ),
        },
        {
            title: 'Course Status',
            width: 500,
            dataIndex: 'isCompleted',
            key: 'isCompleted',
            render: (text, record) => (
                record.isCompleted.data[0]
                ?<a style={{color : "green"}}>Complete</a>
                :<a style={{color : "red"}}>Incomplete</a>
            ),
        },
        
    ];
    return (
        <div>
            <Table columns={columns} dataSource={learning} pagination={{ pageSize: "10" }}/>
        </div>
    )
}
export default ProfileLearning;