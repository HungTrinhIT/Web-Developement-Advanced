import React from 'react';

const CourseDetailNavbar = () => {
    return (
        <nav className="secondary_nav sticky_horizontal">
            <div className="container">
                <ul className="clearfix">
                    <li><a href="#description" className="active">Description</a></li>
                    <li><a href="#lessons">Lessons</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                </ul>
            </div>
        </nav>
    );
};
export default CourseDetailNavbar;