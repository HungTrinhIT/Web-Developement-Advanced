import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import lessonApi from "../../../api/lessonApi";
import LessonItem from "./LessonItem";
import purchaseApi from "../../../api/purchaseApi";

const CourseLessons = ({ course, user, purchaseStatus, ...props }) => {
  const [lessons, setLesson] = useState([]);

  useEffect(() => {
    const fetchAllLesson = async () => {
      try {
        const lessonData = await lessonApi.getAllForTeacher(course.id);
        setLesson(lessonData.data);
      } catch (error) {
        throw error;
      }
    };
    fetchAllLesson();
  }, []);

  return (
    <div>
      <div className="intro_title">
        <h2>Lessons</h2>
      </div>
      <div className="card-body">
        <div className="list_lessons">
          <ul>
            {lessons.map((lessonItem, index) => {
              return (
                <LessonItem
                  purchase={purchaseStatus}
                  lesson={lessonItem}
                  key={index}
                />
              );
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
