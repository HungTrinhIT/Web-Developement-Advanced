import React from 'react';
import parse from 'html-react-parser';

const CourseDescription = (props) => {
    const {course} = props;
    return (
        <section id="description">
            <h2>Description</h2>
            <p>{course.shortDescription}</p>
            <h5>What will you learn</h5>
            <p>{parse(`${course.fullDescription}`)}</p>
            {/* /row */}
        </section>

    );
};
export default CourseDescription;