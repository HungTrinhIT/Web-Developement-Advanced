import { Avatar, Comment, Rate, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react'
import {
    UserOutlined,
} from "@ant-design/icons";

const CourseComment = ({ rate, ...props }) => {
    return (
        <div className="review-box clearfix" style={{ border: '1px solid rgba(0, 0, 0, 0.05)', marginTop: '10px' }}>
            <div className="rating" style={{ marginLeft: '10px' }}>
                <Rate disabled defaultValue={rate.value} />
                <Comment
                    author={<a>{rate.fullname}</a>}
                    avatar={
                        <div className="d-flex align-items-center">
                            {rate.avatar ? (
                                <img src={`${rate.avatar}`} className="img-small" style={{ maxWidth: "70px", maxHeight: "70px" }} />
                            ) : (
                                <Avatar size="large" icon={<UserOutlined />} className="icon" />
                            )}
                        </div>
                    }
                    content={
                        <p>
                            {rate.content}
                        </p>
                    }
                    datetime={
                        <Tooltip title={rate.logCreatedDate}>
                            <span>{rate.logCreatedDate}</span>
                        </Tooltip>
                    }
                />
            </div>
        </div>

    )
}
export default CourseComment;