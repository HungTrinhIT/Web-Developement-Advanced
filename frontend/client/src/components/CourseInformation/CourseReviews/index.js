import React, { useEffect, useState } from "react";
import rateApi from "../../../api/rateApi";
import { Avatar, Comment, Form, Rate, Input, Button } from "antd";
import CourseComment from "./CourseComment";

const CourseReviews = () => {
  const [form] = Form.useForm();
  const [rate, setRate] = useState();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchAllRate = async () => {
      try {
        const rateData = await rateApi.getAll();
        setReviews(rateData.data);
      } catch (error) {
        throw error;
      }
    };
    fetchAllRate();
  }, []);

  const onFinish = (values) => {
    // Call API post o day
  };

  const onReviewHandleChange = (value) => {
    setRate(value);
  };
  const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];

  return (
    <div>
      <Form form={form} onFinish={onFinish} name="addNewReview">
        <Form.Item name="rate">
          <Rate allowHalf tooltips={desc} onChange={onReviewHandleChange} />
        </Form.Item>
        <Form.Item name="content" label="Your review">
          <Input.TextArea></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post your review
          </Button>
        </Form.Item>
      </Form>

      {/* List of review */}
      {reviews.map((rate) => (
        <CourseComment rate={rate} key={rate.id} />
      ))}
    </div>
  );
};
export default CourseReviews;
