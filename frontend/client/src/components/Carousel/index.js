import React from "react";
import Slider from "react-slick";
import CourseItem from "../CourseItem"

const Carousel = () => {
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
    );
};

export default Carousel;