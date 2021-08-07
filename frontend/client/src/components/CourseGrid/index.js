import react from 'react';
import CourseGridItem from './CourseGridItem';

const CourseGrid = (props) => {
    const {courses} = props;
    return (
        <div className="col-lg-9">
            <div className="row">
                {courses.map((courseGridItem, index)=>{
                    return <CourseGridItem course={courseGridItem} key={index}/>;
                })}
                {/* /box_grid */}
            </div>
            {/* /row */}
            <p className="text-center"><a href="#0" className="btn_1 rounded add_top_30">Load more</a></p>
        </div>
    );
};
export default CourseGrid;