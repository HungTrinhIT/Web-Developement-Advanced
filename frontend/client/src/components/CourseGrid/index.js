import react from "react";
import CourseGridItem from "./CourseGridItem";

const CourseGrid = (props) => {
  const { courses } = props;
  return (
    <>
      <div className="row">
        {courses.map((courseGridItem, index) => {
          return <CourseGridItem course={courseGridItem} key={index} />;
        })}
      </div>
    </>
  );
};
export default CourseGrid;
