import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header";
import HeroIn from "../../components/HeroIn";
import CourseInformation from "../../components/CourseInformation";
import { useParams } from 'react-router-dom';
import HeroSingle from "../../components/HeroSingle";
import Features from "../../components/Features";
import Footer from "../../layouts/Footer";
import courseApi from "../../api/courseApi";

const CourseDetail = () => {
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

    const updateCourseView = async () => {
      try {
        const courseData = await courseApi.updateView(id);
      } catch (error) {
        throw error;
      }
    };

    fetchCourseDetail();
    updateCourseView();
  }, []);
  return (
    <div id="page" className="theia-exception">
      <main>
        <HeroIn />
        {/*/hero_in*/}
        <CourseInformation course={course} />
      </main>
      {/*/main*/}
    </div>
  );
};

export default CourseDetail;
