import React, { useEffect } from "react";
import courseApi from "../../api/courseApi";
import { connect } from "react-redux";
import PageTitle from "../../components/PageTitle";
import { Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
const Courses = () => {
  useEffect(() => {
    const fetchAllCourses = async () => {
      const data = await courseApi.getAll();
      console.log(data);
    };
    fetchAllCourses();
  }, []);
  return (
    <div>
      <PageTitle title="Courses Management">
        <Link to="/add-course">
          <Tooltip title="Add new courses">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              className="icon"
            ></Button>
          </Tooltip>
        </Link>
      </PageTitle>
    </div>
  );
};

export default connect()(Courses);
