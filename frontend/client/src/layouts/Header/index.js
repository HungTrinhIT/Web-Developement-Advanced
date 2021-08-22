import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Header = ({ categories, ...props }) => {
  return (
    <header className="header menu_2">
      <div id="logo">
        <Link to="/">
          <img
            src="assets/img/logo.png"
            width={149}
            height={42}
            alt="hinh ne"
          />
        </Link>
      </div>
      <ul id="top_menu">
        <li>
          <a href="#0" className="search-overlay-menu-btn">
            Search
          </a>
        </li>
        <li className="hidden_tablet">
          <Link to="/login" className="btn_1 rounded">
            LOG IN
          </Link>
        </li>
        <li className="hidden_tablet">
          <Link to="/register" className="btn_1 rounded">
            SIGN UP
          </Link>
        </li>
      </ul>
      {/* /top_menu */}
      <a href="#menu" className="btn_mobile">
        <div className="hamburger hamburger--spin" id="hamburger">
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </div>
      </a>
      <nav id="menu" className="main-menu">
        <ul>
          <li>
            <span>
              <Link to="/">Home</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/courses">Courses</Link>
            </span>
          </li>
          <li>
            <span>
              <a href="#0">Categories</a>
            </span>
            <ul>
              {props.rootCategories.map((item, index) => {
                return (
                  <li key={item.id}>
                    <Link to={`/courses?cat=${item.id}`}>{item.catName}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
      {/* Search Menu */}
      <div className="search-overlay-menu">
        <span className="search-overlay-close">
          <span className="closebt">
            <i className="ti-close" />
          </span>
        </span>
        <form role="search" id="searchform" method="get">
          <input defaultValue name="q" type="search" placeholder="Search..." />
          <button type="submit">
            <i className="icon_search" />
          </button>
        </form>
      </div>
      {/* End Search Menu */}
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    rootCategories: state.categories.rootCategories,
  };
};
export default connect(mapStateToProps)(Header);
