import React from "react";

const CategoryList = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 wow" data-wow-offset={150}>
        <a href="#0" className="grid_item">
          <figure className="block-reveal">
            <div className="block-horizzontal" />
            <img src="assets/img/course_1.jpg" className="img-fluid" alt />
            <div className="info">
              <small>
                <i className="ti-layers" />
                15 Programmes
              </small>
              <h3>Arts and Humanities</h3>
            </div>
          </figure>
        </a>
      </div>
      {/* /grid_item */}
      <div className="col-lg-4 col-md-6 wow" data-wow-offset={150}>
        <a href="#0" className="grid_item">
          <figure className="block-reveal">
            <div className="block-horizzontal" />
            <img src="assets/img/course_3.jpg" className="img-fluid" alt />
            <div className="info">
              <small>
                <i className="ti-layers" />
                23 Programmes
              </small>
              <h3>Engineering</h3>
            </div>
          </figure>
        </a>
      </div>
      {/* /grid_item */}
      <div className="col-lg-4 col-md-6 wow" data-wow-offset={150}>
        <a href="#0" className="grid_item">
          <figure className="block-reveal">
            <div className="block-horizzontal" />
            <img src="assets/img/course_2.jpg" className="img-fluid" alt />
            <div className="info">
              <small>
                <i className="ti-layers" />
                23 Programmes
              </small>
              <h3>Architecture</h3>
            </div>
          </figure>
        </a>
      </div>
      {/* /grid_item */}
      <div className="col-lg-4 col-md-6 wow" data-wow-offset={150}>
        <a href="#0" className="grid_item">
          <figure className="block-reveal">
            <div className="block-horizzontal" />
            <img src="assets/img/course_4.jpg" className="img-fluid" alt />
            <div className="info">
              <small>
                <i className="ti-layers" />
                23 Programmes
              </small>
              <h3>Science and Biology</h3>
            </div>
          </figure>
        </a>
      </div>
      {/* /grid_item */}
      <div className="col-lg-4 col-md-6 wow" data-wow-offset={150}>
        <a href="#0" className="grid_item">
          <figure className="block-reveal">
            <div className="block-horizzontal" />
            <img src="assets/img/course_1.jpg" className="img-fluid" alt />
            <div className="info">
              <small>
                <i className="ti-layers" />
                23 Programmes
              </small>
              <h3>Law and Criminology</h3>
            </div>
          </figure>
        </a>
      </div>
      {/* /grid_item */}
      <div className="col-lg-4 col-md-6 wow" data-wow-offset={150}>
        <a href="#0" className="grid_item">
          <figure className="block-reveal">
            <div className="block-horizzontal" />
            <img src="assets/img/course_2.jpg" className="img-fluid" alt />
            <div className="info">
              <small>
                <i className="ti-layers" />
                23 Programmes
              </small>
              <h3>Medical</h3>
            </div>
          </figure>
        </a>
      </div>
      {/* /grid_item */}
    </div>
  );
};

export default CategoryList;
