import React from "react";
import CourseItem from "../../components/CourseItem";
import Slider from "react-slick";
import Header from "../../layouts/Header";
import CategoryList from "../../components/CategoryList";
const Homepage = () => {
  // Config for course carousel
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="page">
      <Header />
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
          <div id="reccomended">
            <Slider {...settings}>
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
            </Slider>
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

          <CategoryList />
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
    </div>
  );
};
export default Homepage;
