import React, { useEffect, useState } from "react";
import rateApi from "../../../api/rateApi";
import courseApi from "../../../api/courseApi";
import { Avatar, Comment, Form, Rate, Input, Button, message } from "antd";
import CourseComment from "./CourseComment";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const CourseReviews = ({ course, user, ...props }) => {
  const [form] = Form.useForm();
  const { id } = useParams()
  const [rate, setRate] = useState();
  const [avgRate, setAvgRate] = useState();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const history = useHistory();
  const {userInfo, isAuthenticated} = user;

  useEffect(() => {
    const fetchAllRate = async () => {
      try {
        const rateData = await rateApi.getAllByCourseID(id);
        setReviews(rateData.data);
        const courseData = await courseApi.getById(id);
        setAvgRate(courseData.data.rate);
      } catch (error) {
        throw error;
      }
    };
    fetchAllRate();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      if (isAuthenticated) {
        const newValues = {
          ...values,
          "course_id": course.id,
          "user_id": userInfo.id
        }
        const data = await rateApi.add(newValues);
        message.success(data.data.msg);

        const rateData = await rateApi.getAllByCourseID(id);
        setReviews(rateData.data);

        const courseData = await courseApi.getById(id);
        setAvgRate(courseData.data.rate);
      }
      else {
        history.push("/login");
      }
      setLoading(false);
    } catch (error) {
      throw error;
      setLoading(false);
    }
  };

  const onReviewHandleChange = (value) => {
    setRate(value);
  };
  const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];

  return (
    <div>
      <Form form={form} onFinish={onFinish} name="addNewReview">
        <Form.Item name="value">
          <Rate allowHalf tooltips={desc} onChange={onReviewHandleChange} />
        </Form.Item>
        <Form.Item name="content" label="Your review">
          <Input.TextArea></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Post your review
          </Button>
        </Form.Item>
      </Form>

      <div className="col-lg-3">
        <div id="review_summary">
          <strong>{avgRate ? Number.parseFloat(avgRate).toFixed(1) : 0}</strong>
          <div className="rating">
            <Rate disabled value={avgRate} allowHalf />
          </div>
          <small>Based on {reviews.length} reviews</small>
        </div>
      </div>

      {/* List of review */}
      {reviews.map((rate) => (
        <CourseComment rate={rate} key={rate.id} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};
export default connect(mapStateToProps)(CourseReviews);
