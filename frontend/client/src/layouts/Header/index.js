import React from "react";
import { Link } from "react-router-dom";
import { connect } from "redux-react";
export const Header = ({ categories, ...props }) => {
  return (
    <header className="header menu_2">
      <div id="logo">
        <Link to="/">
          <img src="assets/img/logo.png" width={149} height={42} alt />
        </Link>
      </div>
      <ul id="top_menu">
        <li>
          <a href="login.html" className="login">
            Login
          </a>
        </li>
        <li>
          <a href="#0" className="search-overlay-menu-btn">
            Search
          </a>
        </li>
        <li className="hidden_tablet">
          <a href="admission.html" className="btn_1 rounded">
            Admission
          </a>
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
              {categories &&
                categories
                  .filter((cat, index) => {
                    return cat.cat_id !== null;
                  })
                  .map((item, index) => {
                    return (
                      <li>
                        <a>{item.catName}</a>
                      </li>
                    );
                  })}
            </ul>
          </li>
          <li>
            <span>
              <a href="#0">Extra Pages</a>
            </span>
            <ul>
              <li>
                <a href="media-gallery.html">Media gallery</a>
              </li>
              <li>
                <a href="cart-1.html">Cart page 1</a>
              </li>
              <li>
                <a href="cart-2.html">Cart page 2</a>
              </li>
              <li>
                <a href="cart-3.html">Cart page 3</a>
              </li>
              <li>
                <a href="pricing-tables.html">Responsive pricing tables</a>
              </li>
              <li>
                <a href="coming_soon/index.html">Coming soon</a>
              </li>
              <li>
                <a href="icon-pack-1.html">Icon pack 1</a>
              </li>
              <li>
                <a href="icon-pack-2.html">Icon pack 2</a>
              </li>
              <li>
                <a href="icon-pack-3.html">Icon pack 3</a>
              </li>
              <li>
                <a href="icon-pack-4.html">Icon pack 4</a>loca
              </li>
            </ul>
          </li>
          <li>
            <span>
              <a href="#0">Buy template</a>
            </span>
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
  };
};
export default connect(mapStateToProps)(Header);
