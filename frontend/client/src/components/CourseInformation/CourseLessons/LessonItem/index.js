import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { connect } from "react-redux";
import purchaseApi from '../../../../api/purchaseApi';
import { useParams  , useHistory} from 'react-router-dom';

const LessonItem = ({ lesson, user, purchase, ...props }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { isAuthenticated } = user;
    const history = useHistory();

    const showModal = () => {
        if(isAuthenticated === true && purchase === true)
        setIsModalVisible(true);
        else
        history.push("/login");
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <li><a onClick={showModal} className="video">{lesson.lessonName}</a></li>
            <Modal 
            title={lesson.lessonName}
            visible={isModalVisible} 
            onCancel={handleCancel}
            footer={null}
            width = {750}
            bodyStyle = {{height : "750px"}}
            >
                <iframe title={lesson.lessonName} width="100%" height="750px" src= {lesson.video}></iframe>
            </Modal>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.users,
    };
};
export default connect(mapStateToProps)(LessonItem);
