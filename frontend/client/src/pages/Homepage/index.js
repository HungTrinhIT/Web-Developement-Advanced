import React from "react";
import Header from "../../layouts/Header";
import CategoryList from "../../components/CategoryList";
import HeroSingle from "../../components/HeroSingle";
import Features from "../../components/Features"
import Carousel from "../../components/Carousel";
import NewsList from "../../components/NewsList";
import Footer from "../../layouts/Footer";
const Homepage = () => {
  
  return (
    <div id="page">
      <Header />
      <main>
        <HeroSingle />
        {/* /hero_single */}
        <Features />
        {/* /features */}
        <div className="container-fluid margin_120_0">
          <div className="main_title_2">
            <span>
              <em />
            </span>
            <h2>Udema Popular Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
        <Carousel />
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
        {/* /carousel Popular Course*/}
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
            <NewsList />
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

      <Footer />
    </div>
  );
};
export default Homepage;
