import React from "react";

const Homepage = () => {
  return (
    <div id="page">
      <header className="header menu_2">
        {/* /Preload */}
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
                  <a href="icon-pack-4.html">Icon pack 4</a>
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
            <input
              defaultValue
              name="q"
              type="search"
              placeholder="Search..."
            />
            <button type="submit">
              <i className="icon_search" />
            </button>
          </form>
        </div>
        {/* End Search Menu */}
      </header>
      {/* /header */}
      <main>
        <section className="hero_single version_2">
          <div className="wrapper">
            <div className="container">
              <h3>What would you learn?</h3>
              <p>
                Increase your expertise in business, technology and personal
                development
              </p>
              <form>
                <div id="custom-search-input">
                  <div className="input-group">
                    <input
                      type="text"
                      className=" search-query"
                      placeholder="Ex. Architecture, Specialization..."
                    />
                    <input
                      type="submit"
                      className="btn_search"
                      defaultValue="Search"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* /hero_single */}
        <div className="features clearfix">
          <div className="container">
            <ul>
              <li>
                <i className="pe-7s-study" />
                <h4>+200 courses</h4>
                <span>Explore a variety of fresh topics</span>
              </li>
              <li>
                <i className="pe-7s-cup" />
                <h4>Expert teachers</h4>
                <span>Find the right instructor for you</span>
              </li>
              <li>
                <i className="pe-7s-target" />
                <h4>Focus on target</h4>
                <span>Increase your personal expertise</span>
              </li>
            </ul>
          </div>
        </div>
        {/* /features */}
        <div className="container-fluid margin_120_0">
          <div className="main_title_2">
            <span>
              <em />
            </span>
            <h2>Udema Popular Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div id="reccomended" className="owl-carousel owl-theme">
            <div className="item">
              <div className="box_grid">
                <figure>
                  <a href="#0" className="wish_bt" />
                  <a href="course-detail.html">
                    <div className="preview">
                      <span>Preview course</span>
                    </div>
                    <img
                      src="http://via.placeholder.com/800x533/ccc/fff/course__list_1.jpg"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="price">$39</div>
                </figure>
                <div className="wrapper">
                  <small>Category</small>
                  <h3>Persius delenit has cu</h3>
                  <p>
                    Id placerat tacimates definitionem sea, prima quidam vim no.
                    Duo nobis persecuti cu.
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
                    <a href="course-detail.html">Enroll now</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /item */}
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
                    Id placerat tacimates definitionem sea, prima quidam vim no.
                    Duo nobis persecuti cu.
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
                    <a href="course-detail.html">Enroll now</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /item */}
            <div className="item">
              <div className="box_grid">
                <figure>
                  <a href="#0" className="wish_bt" />
                  <a href="course-detail.html">
                    <img
                      src="http://via.placeholder.com/800x533/ccc/fff/course__list_3.jpg"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="price">$54</div>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                </figure>
                <div className="wrapper">
                  <small>Category</small>
                  <h3>Persius delenit has cu</h3>
                  <p>
                    Id placerat tacimates definitionem sea, prima quidam vim no.
                    Duo nobis persecuti cu.
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
                    <a href="course-detail.html">Enroll now</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /item */}
            <div className="item">
              <div className="box_grid">
                <figure>
                  <a href="#0" className="wish_bt" />
                  <a href="course-detail.html">
                    <img
                      src="http://via.placeholder.com/800x533/ccc/fff/course__list_4.jpg"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="price">$27</div>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                </figure>
                <div className="wrapper">
                  <small>Category</small>
                  <h3>Persius delenit has cu</h3>
                  <p>
                    Id placerat tacimates definitionem sea, prima quidam vim no.
                    Duo nobis persecuti cu.
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
                    <a href="course-detail.html">Enroll now</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /item */}
            <div className="item">
              <div className="box_grid">
                <figure>
                  <a href="#0" className="wish_bt" />
                  <a href="course-detail.html">
                    <img
                      src="http://via.placeholder.com/800x533/ccc/fff/course__list_5.jpg"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="price">$35</div>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                </figure>
                <div className="wrapper">
                  <small>Category</small>
                  <h3>Persius delenit has cu</h3>
                  <p>
                    Id placerat tacimates definitionem sea, prima quidam vim no.
                    Duo nobis persecuti cu.
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
                    <a href="course-detail.html">Enroll now</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /item */}
            <div className="item">
              <div className="box_grid">
                <figure>
                  <a href="#0" className="wish_bt" />
                  <a href="course-detail.html">
                    <img
                      src="http://via.placeholder.com/800x533/ccc/fff/course__list_6.jpg"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="price">$54</div>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                </figure>
                <div className="wrapper">
                  <small>Category</small>
                  <h3>Persius delenit has cu</h3>
                  <p>
                    Id placerat tacimates definitionem sea, prima quidam vim no.
                    Duo nobis persecuti cu.
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
                    <a href="course-detail.html">Enroll now</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /item */}
          </div>
          {/* /carousel */}
          <div className="container">
            <p className="btn_home_align">
              <a href="courses-grid.html" className="btn_1 rounded">
                View all courses
              </a>
            </p>
          </div>
          {/* /container */}
          <hr />
        </div>
        {/* /container */}
        <div className="container margin_30_95">
          <div className="main_title_2">
            <span>
              <em />
            </span>
            <h2>Udema Categories Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 wow" data-wow-offset={150}>
              <a href="#0" className="grid_item">
                <figure className="block-reveal">
                  <div className="block-horizzontal" />
                  <img
                    src="http://via.placeholder.com/800x533/ccc/fff/course_1.jpg"
                    className="img-fluid"
                    alt
                  />
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
                  <img
                    src="http://via.placeholder.com/800x533/ccc/fff/course_2.jpg"
                    className="img-fluid"
                    alt
                  />
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
                  <img
                    src="http://via.placeholder.com/800x533/ccc/fff/course_3.jpg"
                    className="img-fluid"
                    alt
                  />
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
                  <img
                    src="http://via.placeholder.com/800x533/ccc/fff/course_4.jpg"
                    className="img-fluid"
                    alt
                  />
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
                  <img
                    src="http://via.placeholder.com/800x533/ccc/fff/course_5.jpg"
                    className="img-fluid"
                    alt
                  />
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
                  <img
                    src="http://via.placeholder.com/800x533/ccc/fff/course_6.jpg"
                    className="img-fluid"
                    alt
                  />
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
          {/* /row */}
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
            <div className="row">
              <div className="col-lg-6">
                <a className="box_news" href="#0">
                  <figure>
                    <img
                      src="http://via.placeholder.com/500x333/ccc/fff/news_home_1.jpg"
                      alt
                    />
                    <figcaption>
                      <strong>28</strong>Dec
                    </figcaption>
                  </figure>
                  <ul>
                    <li>Mark Twain</li>
                    <li>20.11.2017</li>
                  </ul>
                  <h4>Pri oportere scribentur eu</h4>
                  <p>
                    Cu eum alia elit, usu in eius appareat, deleniti sapientem
                    honestatis eos ex. In ius esse ullum vidisse....
                  </p>
                </a>
              </div>
              {/* /box_news */}
              <div className="col-lg-6">
                <a className="box_news" href="#0">
                  <figure>
                    <img
                      src="http://via.placeholder.com/500x333/ccc/fff/news_home_2.jpg"
                      alt
                    />
                    <figcaption>
                      <strong>28</strong>Dec
                    </figcaption>
                  </figure>
                  <ul>
                    <li>Jhon Doe</li>
                    <li>20.11.2017</li>
                  </ul>
                  <h4>Duo eius postea suscipit ad</h4>
                  <p>
                    Cu eum alia elit, usu in eius appareat, deleniti sapientem
                    honestatis eos ex. In ius esse ullum vidisse....
                  </p>
                </a>
              </div>
              {/* /box_news */}
              <div className="col-lg-6">
                <a className="box_news" href="#0">
                  <figure>
                    <img
                      src="http://via.placeholder.com/500x333/ccc/fff/news_home_3.jpg"
                      alt
                    />
                    <figcaption>
                      <strong>28</strong>Dec
                    </figcaption>
                  </figure>
                  <ul>
                    <li>Luca Robinson</li>
                    <li>20.11.2017</li>
                  </ul>
                  <h4>Elitr mandamus cu has</h4>
                  <p>
                    Cu eum alia elit, usu in eius appareat, deleniti sapientem
                    honestatis eos ex. In ius esse ullum vidisse....
                  </p>
                </a>
              </div>
              {/* /box_news */}
              <div className="col-lg-6">
                <a className="box_news" href="#0">
                  <figure>
                    <img
                      src="http://via.placeholder.com/500x333/ccc/fff/news_home_4.jpg"
                      alt
                    />
                    <figcaption>
                      <strong>28</strong>Dec
                    </figcaption>
                  </figure>
                  <ul>
                    <li>Paula Rodrigez</li>
                    <li>20.11.2017</li>
                  </ul>
                  <h4>Id est adhuc ignota delenit</h4>
                  <p>
                    Cu eum alia elit, usu in eius appareat, deleniti sapientem
                    honestatis eos ex. In ius esse ullum vidisse....
                  </p>
                </a>
              </div>
              {/* /box_news */}
            </div>
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
        <div className="call_section">
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
                    disputationi. Menandri erroribus cu per, duo solet congue
                    ut.{" "}
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
      {/* /main */}
      <footer>
        <div className="container margin_120_95">
          <div className="row">
            <div className="col-lg-5 col-md-12 p-r-5">
              <p>
                <img src="assets/img/logo.png" width={149} height={42} alt />
              </p>
              <p>
                Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea.
                Id placerat tacimates definitionem sea, prima quidam vim no. Duo
                nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus
                expetendis vis.
              </p>
              <div className="follow_us">
                <ul>
                  <li>Follow us</li>
                  <li>
                    <a href="#0">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ml-lg-auto">
              <h5>Useful links</h5>
              <ul className="links">
                <li>
                  <a href="#0">Admission</a>
                </li>
                <li>
                  <a href="#0">About</a>
                </li>
                <li>
                  <a href="#0">Login</a>
                </li>
                <li>
                  <a href="#0">Register</a>
                </li>
                <li>
                  <a href="#0">News &amp; Events</a>
                </li>
                <li>
                  <a href="#0">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Contact with Us</h5>
              <ul className="contacts">
                <li>
                  <a href="tel://61280932400">
                    <i className="ti-mobile" /> + 61 23 8093 3400
                  </a>
                </li>
                <li>
                  <a href="mailto:info@udema.com">
                    <i className="ti-email" /> info@udema.com
                  </a>
                </li>
              </ul>
              <div id="newsletter">
                <h6>Newsletter</h6>
                <div id="message-newsletter" />
                <form
                  method="post"
                  action="assets/newsletter.php"
                  name="newsletter_form"
                  id="newsletter_form"
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email_newsletter"
                      id="email_newsletter"
                      className="form-control"
                      placeholder="Your email"
                    />
                    <input
                      type="submit"
                      defaultValue="Submit"
                      id="submit-newsletter"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*/row*/}
          <hr />
          <div className="row">
            <div className="col-md-8">
              <ul id="additional_links">
                <li>
                  <a href="#0">Terms and conditions</a>
                </li>
                <li>
                  <a href="#0">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div id="copy">© Udema</div>
            </div>
          </div>
        </div>
      </footer>
      {/*/footer*/}
    </div>
  );
};
export default Homepage;
