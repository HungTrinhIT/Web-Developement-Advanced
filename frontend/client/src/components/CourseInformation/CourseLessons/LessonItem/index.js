import React, { useEffect, useState } from 'react';
import { message, Modal } from 'antd';
import { connect } from "react-redux";
import ReactPlayer from 'react-player'
import purchaseApi from '../../../../api/purchaseApi';
import { useParams  , useHistory} from 'react-router-dom';

const LessonItem = ({ lesson, user, purchase, ...props }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const { isAuthenticated } = user;
    const history = useHistory();

    const showModal = () => {
        if(isAuthenticated === true && purchase === true)
        {
            setIsModalVisible(true);
        }
        else if(isAuthenticated === true && purchase === false)
        {
            message.error({
                content:"Let enroll this course to learn!!!",
                style:{
                marginTop:"15vh",
                }
                });
        }
        else
        history.push("/login");
    };

    const handleCancel = () => {
        setIsPlaying(false);
        setIsModalVisible(false);
    };

    const onPlayHandler = () => {
        console.log("Playing")
        setIsPlaying(true);
    };
    const onPauseHandler = () => {
        console.log("Pause")
        setIsPlaying(false);
    };
    const onEndedHandler = () => {
        console.log("End");
        setIsPlaying(false);
    };
    const onReadyHandler = () => {
        console.log("Ready");
        setIsPlaying(true);
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
                <ReactPlayer url={`${lesson.video}`} controls={true} volume={0.8} 
                playing = {isPlaying} onPlay = {onPlayHandler} onPause = {onPauseHandler} onEnded = {onEndedHandler} onReady = {onReadyHandler}/>
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
