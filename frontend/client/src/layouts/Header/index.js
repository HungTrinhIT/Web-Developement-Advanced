import React from "react";

export const Header = () => {
  return (
    <header className="header menu_2">
      <div id="logo">
        <a href="index.html">
          <img src="assets/img/logo.png" width={149} height={42} alt />
        </a>
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
              <a href="#0">Home</a>
            </span>
            <ul>
              <li>
                <a href="index.html">Home version 1</a>
              </li>
              <li>
                <a href="index-2.html">Home version 2</a>
              </li>
              <li>
                <a href="index-6.html">Home version 3</a>
              </li>
              <li>
                <a href="index-3.html">Home version 4</a>
              </li>
              <li>
                <a href="index-4.html">Home version 5</a>
              </li>
              <li>
                <a href="index-5.html">With Cookie bar (EU law)</a>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <a href="#0">Courses</a>
            </span>
            <ul>
              <li>
                <a href="courses-grid.html">Courses grid</a>
              </li>
              <li>
                <a href="courses-grid-sidebar.html">Courses grid sidebar</a>
              </li>
              <li>
                <a href="courses-list.html">Courses list</a>
              </li>
              <li>
                <a href="courses-list-sidebar.html">Courses list sidebar</a>
              </li>
              <li>
                <a href="course-detail.html">Course detail</a>
              </li>
              <li>
                <a href="course-detail-2.html">Course detail working form</a>
              </li>
              <li>
                <a href="admission.html">Admission wizard</a>
              </li>
              <li>
                <a href="teacher-detail.html">Teacher detail</a>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <a href="#0">Pages</a>
            </span>
            <ul>
              <li>
                <a href="#0">Menu 2</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="register.html">Register</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="404.html">404 page</a>
              </li>
              <li>
                <a href="agenda-calendar.html">Agenda Calendar</a>
              </li>
              <li>
                <a href="faq.html">Faq</a>
              </li>
              <li>
                <a href="help.html">Help</a>
              </li>
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

export default Header;
