import React from 'react';

const HeroIn = ({course, ...props}) => {
    return (
        <section id="hero_in" style = {{backgroundImage:`url(${course.image})`, backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} className="courses">
            <div className="wrapper">
                <div className="container">
                    <h1 className="fadeInUp"><span />{course.courseName}</h1>
                </div>
            </div>
        </section>
    );
};
export default HeroIn;