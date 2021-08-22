import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CourseItem = (props) => {
  const { course } = props;
  return (
    <div className="item">
      <div className="box_grid">
        <figure>
          <a href="#0" className="wish_bt" />
          <Link to={`/courses/${course.id}`}>
            <img
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
              src={
                course.image ??
                "http://via.placeholder.com/800x533/ccc/fff/course__list_2.jpg"
              }
              className="img-fluid"
              alt
            />
          </Link>
          <div className="price">${course.price}</div>
          <div className="preview">
            <span>Preview course</span>
          </div>
        </figure>
        <div className="wrapper" style={{ height: "220px" }}>
          <h3>{course.courseName}</h3>
          <p>
            {course.shortDescription.length > 110
              ? course.shortDescription.slice(0, 110) + "..."
              : course.shortDescription}
          </p>
          <div className="rating">
            <Rate disabled value={course.rate} allowHalf />
          </div>
        </div>
        <ul>
          <li>
            <i className="icon_clock_alt" /> 1h 30min
          </li>
          <li>
            <i className="icon_like" /> 890
          </li>
          <li>
            <Link to={`/courses/${course.id}`} class="main-btn">
              Enroll now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseItem;
