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
                console.log(learningData.data);
                setLearning(learningData.data);
              } catch (error) {
                throw error;
              }
        };
        fetchLearning();
    }, []);
    const onDeleteWishlistConfirm = async (id) => {
        try {
          await purchaseApi.delete(id);
          const data = await purchaseApi.getByUserID(user.id);
          setLearning(data.data);
          message.success("Course is deleted successfully!");
        } catch (error) {
          throw error;
        }
      };
    const columns = [
        {
            title: 'Course Name',
            width: 500,
            dataIndex: 'courseName',
            key: 'courseName',
            render: (text, record) => (
              <Link to={`/course-detail/${record.course_id}`}>{text}</Link>
            ),
        },
        {
            title: "Action",
            key: "action",
            width: 30,
            fixed: "right",
            render: (text, record) => (
              <Space size="middle">
                <Popconfirm
                  title="Are you sure to delete this course?"
                  onConfirm={() => onDeleteWishlistConfirm(record.id)}
                  okText="Delete"
                  cancelText="Cancle"
                >
                  <Button
                    type="danger"
                    shape="circle"
                    icon={<DeleteOutlined className="icon" />}
                  />
                </Popconfirm>
              </Space>
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