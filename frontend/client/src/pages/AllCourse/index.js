import React, { useEffect, useRef, useState } from "react";
import courseApi from "../../api/courseApi";
import CourseGrid from "../../components/CourseGrid";
import "./AllCourse.css";
import { Pagination, Checkbox, Form, Collapse, Row, Col } from "antd";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
const plainOptions = [];
const { Panel } = Collapse;
const AllCourse = (props) => {
  const [courseData, setCourseData] = useState({
    courses: [],
    totalCourses: 0,
    currentPage: 1,
    totalPage: 1,
  });
  const coursesRef = useRef();

  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
    search: "",
    categories: "",
  });
  const [checkedList, setCheckedList] = React.useState([]);

  const history = useHistory();
  const location = useLocation();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  useEffect(async () => {
    const categories = query.get("categories");
    const search = query.get("search");
    setFilter({
      ...filter,
      search: search !== null ? search : "",
      categories: categories !== null ? categories : "",
    });
    const response = await courseApi.getAll(filter);
    setCourseData(response.data);
  }, []);
  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        for (let key in filter) {
          if (!filter[key]) {
            delete filter[key];
          }
        }
        const response = await courseApi.getAll(filter);
        setCourseData(response.data);

        executeScroll();
      } catch (error) {
        throw error;
      }
    };

    fetchAllCourses();
  }, [filter, location]);

  const onPaginateHandleChange = (selectedPage) => {
    setFilter({
      ...filter,
      page: selectedPage,
    });
  };

  const concatCategories = (listCategory) => listCategory.join(".");
  const onCategoryChange = (list) => {
    const stringCategories = concatCategories(list);
    setCheckedList(list);
    setFilter({
      ...filter,
      categories: stringCategories,
    });
    if (stringCategories.length !== 0) {
      history.replace(`?categories=${stringCategories}`);
    } else {
      history.replace(history.location.pathname);
    }
  };
  const executeScroll = () => coursesRef.current.scrollIntoView();

  const { totalCourses, courses, currentPage, totalPage } = courseData;

  const { categories } = props;
  const viewFilterByCategories = (
    <Checkbox.Group onChange={onCategoryChange} style={{ width: "100%" }}>
      <Collapse defaultActiveKey={["1"]} ghost>
        {categories.map((cat) => {
          const { catName, children } = cat;
          return (
            <Panel header={catName} key={cat.id}>
              {children.length > 0 ? (
                <Row>
                  {children.map((cat) => {
                    return (
                      <Col span={24}>
                        <Checkbox value={cat.id}>{cat.catName}</Checkbox>
                      </Col>
                    );
                  })}
                </Row>
              ) : null}
            </Panel>
          );
        })}
      </Collapse>
    </Checkbox.Group>
  );

  return (
    <main>
      <section id="hero_in" className="courses">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Online courses
            </h1>
          </div>
        </div>
      </section>

      {/* /filters */}
      <div className="container margin_60_35" ref={coursesRef}>
        <div className="row">
          <aside className="col-lg-3" id="sidebar">
            <div id="filters_col">
              <a
                data-toggle="collapse"
                href="#collapseFilters"
                aria-expanded="false"
                aria-controls="collapseFilters"
                id="filters_col_bt"
              >
                Filters{" "}
              </a>
              <div className="collapse show" id="collapseFilters">
                <div className="filter_type">
                  <h6>Category</h6>
                  {viewFilterByCategories}
                </div>
                <div className="filter_type">
                  <h6>Rating</h6>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" className="icheck" />
                        <span className="rating">
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star voted" /> <small>(145)</small>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" className="icheck" />
                        <span className="rating">
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star" /> <small>(25)</small>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" className="icheck" />
                        <span className="rating">
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star" />
                          <i className="icon_star" /> <small>(68)</small>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" className="icheck" />
                        <span className="rating">
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" /> <small>(34)</small>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" className="icheck" />
                        <span className="rating">
                          <i className="icon_star voted" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" /> <small>(10)</small>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {/*/collapse */}
            </div>
            {/*/filters col*/}
          </aside>
          {/* /aside */}
          <div className="col-lg-9">
            <CourseGrid courses={courses} />
            <div className="d-flex justify-content-center align-items-center mt-3">
              <Pagination
                total={totalCourses}
                showQuickJumper
                showSizeChanger={false}
                showTotal={(total) => `Total ${total} courses`}
                defaultCurrent={1}
                onChange={onPaginateHandleChange}
                defaultPageSize={filter.limit}
                current={currentPage}
              />
            </div>
          </div>
          {/* /col */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
      <div className="bg_color_1">
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-md-4">
              <a href="#0" className="boxed_list">
                <i className="pe-7s-help2" />
                <h4>Need Help? Contact us</h4>
                <p>Cum appareat maiestatis interpretaris et, et sit.</p>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#0" className="boxed_list">
                <i className="pe-7s-wallet" />
                <h4>Payments and Refunds</h4>
                <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#0" className="boxed_list">
                <i className="pe-7s-note2" />
                <h4>Quality Standards</h4>
                <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
              </a>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /bg_color_1 */}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps)(AllCourse);
