import React, { useEffect, useState } from "react";
import "./Homepage.css";
import CategoryList from "../../components/CategoryList";
import HeroSingle from "../../components/HeroSingle";
import Features from "../../components/Features";
import Carousel from "../../components/Carousel";
import NewsList from "../../components/NewsList";
import courseApi from "../../api/courseApi";
import { Link } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import { connect } from "react-redux";
import createAction from "../../redux/action/createAction";
import {
  FETCH_ALL_CATEGORIES,
  FETCH_ALL_COURSE,
} from "../../redux/action/type";
const Homepage = (props) => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [mostViewCourse, setMostViewCourse] = useState([]);
  const limit = 10;
  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const courseData = await courseApi.getAll();
        setCourses(courseData.data.courses);
        props.dispatch(createAction(FETCH_ALL_COURSE, courseData.data));
      } catch (error) {
        throw error;
      }
    };

    const fetchAllCategories = async () => {
      try {
        const categoryData = await categoryApi.getAllParents();
        setCategories(categoryData.data);
        props.dispatch(createAction(FETCH_ALL_CATEGORIES, categoryData.data));
      } catch (error) {
        throw error;
      }
    };

    const fetchNewCourses = async () => {
      try {
        const courseData = await courseApi.getNewest(limit);
        setNewCourses(courseData.data);
      } catch (error) {
        throw error;
      }
    };

    const fetchMostViewCourses = async () => {
      try {
        const courseData = await courseApi.getMostView(limit);
        setMostViewCourse(courseData.data);
      } catch (error) {
        throw error;
      }
    };

    fetchAllCourses();
    fetchAllCategories();
    fetchNewCourses();
    fetchMostViewCourses();
  }, []);
  return (
    <main>
      <HeroSingle />
      {/* /hero_single */}
      <Features />
      {/* /features */}

      <div className="container-fluid margin_120_0">
        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>All Courses</h2>
        </div>

        <Carousel courses={courses} />
        <div className="container">
          <p className="btn_home_align">
            <Link to={`/courses`} className="btn_1 rounded">
              View all courses
            </Link>
          </p>
        </div>

        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Newest Courses</h2>
        </div>

        <Carousel courses={newCourses} />

        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Most View Courses</h2>
        </div>

        <Carousel courses={mostViewCourse} />

        {/* /carousel */}

        {/* /container */}
        <hr />
      </div>
      {/* /carousel Popular Course*/}
      <div className="container margin_30_95">
        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Categories</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>

        <CategoryList categories={categories} />
      </div>
      {/* /container */}
      <div className="bg_color_1">
        <div className="container margin_120_95">
          <div className="main_title_2">
            <span>
              <em />
            </span>
            <h2>News and Events</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <NewsList />
          {/* /row */}
          <p className="btn_home_align">
            <a href="blog.html" className="btn_1 rounded">
              View all news
            </a>
          </p>
        </div>
        {/* /container */}
      </div>
      {/* /bg_color_1 */}
      <div
        className="call_section"
        style={{
          background:
            "url(assets/img/bg_call_section.jpg) center center no-repeat fixed",
          minHeight: "400px",
          padding: "10% 0",
          backgroundSize: "cover",
        }}
      >
        <div className="container clearfix">
          <div
            className="col-lg-5 col-md-6 float-right wow"
            data-wow-offset={250}
          >
            <div className="block-reveal">
              <div className="block-vertical" />
              <div className="box_1">
                <h3>Enjoy a great students community</h3>
                <p>
                  Ius cu tamquam persequeris, eu veniam apeirian platonem qui,
                  id aliquip voluptatibus pri. Ei mea primis ornatus
                  disputationi. Menandri erroribus cu per, duo solet congue ut.{" "}
                </p>
                <a href="#0" className="btn_1 rounded">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/call_section*/}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(Homepage);
