import React, { useEffect, useState } from "react";
import courseApi from "../../api/courseApi";
import CourseGrid from "../../components/CourseGrid";

const AllCourse = () => {
    const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const courseData = await courseApi.getAll();
        setCourses(courseData.data.courses);
      } catch (error) {
        throw error;
      }
    };

    fetchAllCourses();
  }, []);
    return (
        <main>
            <section id="hero_in" className="courses">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span />Online courses</h1>
                    </div>
                </div>
            </section>
            {/*/hero_in*/}
            <div className="filters_listing sticky_horizontal">
                <div className="container">
                    <ul className="clearfix">
                        <li>
                            <div className="switch-field">
                                <input type="radio" id="all" name="listing_filter" defaultValue="all" defaultChecked />
                                <label htmlFor="all">All</label>
                                <input type="radio" id="popular" name="listing_filter" defaultValue="popular" />
                                <label htmlFor="popular">Popular</label>
                                <input type="radio" id="latest" name="listing_filter" defaultValue="latest" />
                                <label htmlFor="latest">Latest</label>
                            </div>
                        </li>
                        <li>
                            <div className="layout_view">
                                <a href="#0" className="active"><i className="icon-th" /></a>
                                <a href="courses-list.html"><i className="icon-th-list" /></a>
                            </div>
                        </li>
                        <li>
                            <select name="orderby" className="selectbox">
                                <option value="category">Category</option>
                                <option value="category 2">Literature</option>
                                <option value="category 3">Architecture</option>
                                <option value="category 4">Economy</option>
                            </select>
                        </li>
                    </ul>
                </div>
                {/* /container */}
            </div>
            {/* /filters */}
            <div className="container margin_60_35">
                <div className="row">
                    <aside className="col-lg-3" id="sidebar">
                        <div id="filters_col"> <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters </a>
                            <div className="collapse show" id="collapseFilters">
                                <div className="filter_type">
                                    <h6>Category</h6>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" defaultChecked />all <small>(945)</small>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />Architecture <small>(45)</small>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />Managment <small>(30)</small>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />Business <small>(25)</small>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />Litterature <small>(56)</small>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />Biology <small>(10)</small>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter_type">
                                    <h6>Rating</h6>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />
                                                <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /> <small>(145)</small></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />
                                                <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /> <small>(25)</small></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />
                                                <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /> <small>(68)</small></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />
                                                <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /> <small>(34)</small></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="icheck" />
                                                <span className="rating"><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /> <small>(10)</small></span>
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
                    <CourseGrid courses= {courses}/>
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

export default AllCourse;