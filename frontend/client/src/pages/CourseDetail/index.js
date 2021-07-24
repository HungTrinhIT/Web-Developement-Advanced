import React from "react";
import Header from "../../layouts/Header";
import HeroIn from "../../components/HeroIn";
import Information from "../../components/Information";
import HeroSingle from "../../components/HeroSingle";
import Features from "../../components/Features";
import Footer from "../../layouts/Footer";

const CourseDetail = () => {
  return (
    <div id="page" className="theia-exception">
      <main>
        <HeroIn />
        {/*/hero_in*/}
        <Information />
      </main>
      {/*/main*/}
    </div>
  );
};

export default CourseDetail;
