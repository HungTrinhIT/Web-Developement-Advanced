import React, { useEffect, useState } from "react";
import { Table, Button, Space, Popconfirm, message, Tooltip } from "antd";
import PageTitle from "../../../../components/PageTitle";
import { Link, useParams } from "react-router-dom";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import lessonApi from "../../../../api/lessonApi";

const CourseInfoLesson = () => {
  let { id } = useParams();
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const lessonData = await lessonApi.getAllForTeacher(id);
        console.log(lessonData.data);
        setLessons(lessonData.data);
      } catch (error) {
        throw error;
      }
    };

    fetchLessons();
  }, []);
  const onDeleteCourseConfirm = async (id) => {
    try {
      await lessonApi.delete(id);
      const data = await lessonApi.getAllForTeacher(id);
      setLessons(data.data);
      message.success("Lesson is deleted successfully!");
    } catch (error) {
      throw error;
    }
  };
  const columns = [
    {
      title: 'Lesson Name',
      width: 500,
      dataIndex: 'lessonName',
      key: 'lessonName',
      render: (text, record) => (
        <Link to={`/courses/${id}/lessons/${record.id}`}>{text}</Link>
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
            onConfirm={() => onDeleteCourseConfirm(record.id)}
            okText="Delete"
            cancelText="Cancle"
          >
            <Button
              type="danger"
              shape="circle"
              icon={<DeleteOutlined className="icon" />}
            />
          </Popconfirm>

          <Link to={`/courses/${id}/lessons/${record.id}`}>
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined className="icon" />}
            />
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageTitle title="Lesson Management">
        <Link to = {`/courses/${id}/add-lesson`}>
          <Tooltip title="Add new lesson">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              className="icon"
            ></Button>
          </Tooltip>
        </Link>
      </PageTitle>
      <Table columns={columns} dataSource={lessons} pagination={{ pageSize: "10" }} />
    </div>

  );
};

export default CourseInfoLesson;
