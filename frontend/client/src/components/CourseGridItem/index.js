import react from 'react';

const CourseGridItem = (props) => {
    const {course} = props;
    return (
        <div className="col-md-6">
            <div className="box_grid wow">
                <figure className="block-reveal">
                    <div className="block-horizzontal" />
                    <a href="#0" className="wish_bt" />
                    <a href="course-detail.html"><img src="http://via.placeholder.com/800x533/ccc/fff/course__list_1.jpg" className="img-fluid" alt /></a>
                    <div className="price">$54</div>
                    <div className="preview"><span>Preview course</span></div>
                </figure>
                <div className="wrapper">
                    <small>Category</small>
                    <h3>{course.courseName}</h3>
                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                    <div className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /> <small>(145)</small></div>
                </div>
                <ul>
                    <li><i className="icon_clock_alt" /> 1h 30min</li>
                    <li><i className="icon_like" /> 890</li>
                    <li><a href="course-detail.html">Enroll now</a></li>
                </ul>
            </div>
        </div>
    );
};
export default CourseGridItem;