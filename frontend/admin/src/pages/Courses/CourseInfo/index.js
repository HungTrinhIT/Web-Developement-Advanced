import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseApi from "../../../api/courseApi";
import { Tabs } from "antd";
import CourseInfoDetail from "./CourseInfoDetail";
import CourseInfoImage from "./CourseInfoImage";
import CourseInfoLesson from "./CourseInfoLesson";

const { TabPane } = Tabs;
const CourseInfo = ({ activeTab, ...props }) => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const courseData = await courseApi.getById(id);
        setCourse(courseData.data);
      } catch (error) {
        throw error;
      }
    };
    fetchCourseDetail();
  }, []);

  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Course Information" key="1">
          <CourseInfoDetail course={course} />
        </TabPane>
        <TabPane tab="Course Image" key="2">
          <CourseInfoImage course={course} />
        </TabPane>
        <TabPane tab="Lessons" key="3">
          <CourseInfoLesson />
        </TabPane>
        <TabPane tab="Teacher" key="4"></TabPane>
        <TabPane tab="Reviews" key="5"></TabPane>
      </Tabs>
    </div>
  );
};

export default CourseInfo;
