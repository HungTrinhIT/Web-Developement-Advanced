import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import courseApi from "../../../api/courseApi";
import { message, Tabs } from "antd";
import CourseInfoDetail from "./CourseInfoDetail";
import CourseInfoImage from "./CourseInfoImage";
import CourseInfoLesson from "./CourseInfoLesson";
import CourseInfoTeacher from "./CourseInfoTeacher";
import CourseInfoReview from "./CourseInfoReview";
import {connect} from "react-redux"

const { TabPane } = Tabs;
const CourseInfo = ({ activeTab, user, ...props }) => {
  const [course, setCourse] = useState({});
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    
    const fetchCourseDetail = async () => {
      try {
        const courseData = await courseApi.getById(id);
        if(user.userInfo.role !== 0 && user.userInfo.id !== courseData.data.teacher_id)
        {
          history.goBack();
          message.error("You don't have power to do this!");
        }
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
        <TabPane tab="Teacher" key="4">
          <CourseInfoTeacher course={course} />
        </TabPane>
        <TabPane tab="Reviews" key="5">
          <CourseInfoReview course={course} />
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};
export default connect(mapStateToProps)(CourseInfo);
