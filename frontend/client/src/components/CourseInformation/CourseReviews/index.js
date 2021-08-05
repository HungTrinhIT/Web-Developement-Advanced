import React, { useEffect, useState } from 'react';
import rateApi from '../../../api/rateApi';
import { Avatar, Comment, Form, Rate, Input } from 'antd';
import CourseComment from './CourseComment';
import { Button } from 'antd/lib/radio';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


const CourseReviews = () => {
    const [form] = Form.useForm();
    const [rates, setRates] = useState([]);
    const [value, setValue] = useState([]);
    useEffect(() => {
        const fetchAllRate = async () => {
            try {
                const rateData = await rateApi.getAll();
                setRates(rateData.data);
            } catch (error) {
                throw error;
            }
        };
        fetchAllRate();
    }, [])

    const onFinish = (values) => {
        console.log(values);
    };

    const onHandleRateChange = (value) => {
        setValue(value);
    };
    return (
        <div>

            <Form
                form={form}
                name="addReview"
                onFinish={onFinish}
            >
                <Form.Item>
                    <Rate tooltips={desc} onChange={onHandleRateChange} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </Form.Item>
                <Form.Item
                    name="content"
                    label="Your Review"
                >
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Post your review
                    </Button>
                </Form.Item>
            </Form>

            {rates.map((rate, index) => {
                return <CourseComment rate={rate} key={index} />;
            })}
        </div>
    );
};
export default CourseReviews