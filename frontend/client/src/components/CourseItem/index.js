import React from "react";


const CourseItem = () => {
  return (
    <div className="item">
      <div className="box_grid">
        <figure>
          <a href="#0" className="wish_bt" />
          <a href="course-detail.html">
            <img
              src="http://via.placeholder.com/800x533/ccc/fff/course__list_2.jpg"
              className="img-fluid"
              alt
            />
          </a>
          <div className="price">$45</div>
          <div className="preview">
            <span>Preview course</span>
          </div>
        </figure>
        <div className="wrapper">
          <small>Category</small>
          <h3>Persius delenit has cu</h3>
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
            <a href="course-detail.html" class="main-btn">
              Enroll now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseItem;

