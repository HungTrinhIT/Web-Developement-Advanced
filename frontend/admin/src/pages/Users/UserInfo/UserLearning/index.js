import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import purchaseApi from '../../../../api/purchaseApi';

const UserLearning = ({ user, ...props }) => {
  const [learning, setLearning] = useState([]);
  useEffect(() => {
    const fetchLearning = async () => {
      try {
        const learningData = await purchaseApi.getByUserID(user.id);
        console.log(learningData.data);
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

  ];
  return (
    <div>
      <Table columns={columns} dataSource={learning} pagination={{ pageSize: "10" }} />
    </div>
  );
};
export default UserLearning;
