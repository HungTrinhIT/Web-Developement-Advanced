import react from 'react';
import {Link} from 'react-router-dom';

const CourseGridItem = (props) => {
    const {course} = props;
    return (
        <div className="col-md-6">
            <div className="box_grid wow">
                <figure className="block-reveal">
                    <div className="block-horizzontal" />
                    <a href="#0" className="wish_bt" />
                    <Link to={`/course-detail/${course.id}`}><img style = {{height : "300px", objectFit : "cover"}}
                    src={course.image??"http://via.placeholder.com/800x533/ccc/fff/course__list_2.jpg"} className="img-fluid" alt /></Link>
                    <div className="price">${course.sale?(course.price*(100-course.sale)/100):course.price}</div>
                    <div className="preview"><span>Preview course</span></div>
                </figure>
                <div className="wrapper" style= {{minHeight: "220px"}}>
                    <h3>{course.courseName}</h3>
                    <p>{course.shortDescription}</p>
                    <div className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /> <small>(145)</small></div>
                </div>
                <ul>
                    <li><i className="icon_clock_alt" /> 1h 30min</li>
                    <li><i className="icon_like" /> 890</li>
                    <li><Link to={`/course-detail/${course.id}`}>Enroll now</Link></li>
                </ul>
            </div>
        </div>
    );
};
export default CourseGridItem;