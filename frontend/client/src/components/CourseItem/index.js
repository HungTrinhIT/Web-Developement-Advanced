import React from "react";
import { Link } from "react-router-dom";

const CourseItem = (props) => {
  const { course } = props;
  return (
    <div className="item">
      <div className="box_grid">
        <figure>
          <a href="#0" className="wish_bt" />
          <Link to={`/course-detail/${course.id}`}>
            <img
              src="http://via.placeholder.com/800x533/ccc/fff/course__list_2.jpg"
              className="img-fluid"
              alt
            />
          </Link>
          <div className="price">${course.price}</div>
          <div className="preview">
            <span>Preview course</span>
          </div>
        </figure>
        <div className="wrapper">
          <small>Category</small>
          <h3>{course.courseName}</h3>
          <p>
            Id placerat tacimates definitionem sea, prima quidam vim no. Duo
            nobis persecuti cu.
          </p>
          <div className="rating">
            <i className="icon_star voted" />
            <i className="icon_star voted" />
            <i className="icon_star voted" />
            <i className="icon_star" />
            <i className="icon_star" /> <small>(145)</small>
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
            <Link to={`/course-detail`} class="main-btn">
              Enroll now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseItem;
