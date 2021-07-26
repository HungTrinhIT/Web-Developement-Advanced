import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseApi from "../../../api/courseApi";
import { Tabs } from "antd";
import CourseInfoDetail from "./CourseInfoDetail";
import CourseInfoImage from "./CourseInfoImage";
import CourseInfoLesson from "./CourseInfoLesson";

const { TabPane } = Tabs;
const CourseInfo = (props) => {
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Course Infomation" key="1">
          <CourseInfoDetail />
        </TabPane>
        <TabPane tab="Course Image" key="2">
          <CourseInfoImage />
        </TabPane>
        <TabPane tab="Lessons" key="3">
          <CourseInfoLesson />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CourseInfo;
