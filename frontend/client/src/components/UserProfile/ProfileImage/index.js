import React, { useState, useEffect } from "react";
import { Button, message } from "antd";
import userApi from "../../../api/userApi";

const ProfileImage = ({ user, ...props }) => {
    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };
    useEffect(() => {
        setImgSrc(user.avatar);
    }, []);
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            message.error("Something went wrong");
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        setLoading(true);
        try {
            const response = await userApi.uploadAvatar(
                user.id,
                JSON.stringify({ data: base64EncodedImage })
            );
            setImgSrc(response.data.avatar);
            message.success("Upload avatar successfully");
            setLoading(false);
            setFileInputState("");
            setPreviewSource("");
        } catch (err) {
            throw err;
            setLoading(false);
        }
    };
    return (
        <div>
            <h3>Upload avartar</h3>
            <form onSubmit={handleSubmitFile} className="form">
                <div className="avatar-upload">
                    <div className="avatar-edit">
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            id="fileInput"
                            name="image"
                            onChange={handleFileInputChange}
                            value={fileInputState}
                        />
                        <label htmlFor="fileInput"></label>
                    </div>
                    <div className="avatar-preview">
                        {previewSource ? (
                            <div
                                id="imagePreview"
                                style={{
                                    backgroundImage: `url(${previewSource})`,
                                }}
                            ></div>
                        ) : (
                            <div
                                id="imagePreview"
                                style={{
                                    backgroundImage: `url(${imgSrc ||
                                        "https://res.cloudinary.com/dawbc3ysp/image/upload/v1627813510/elearning/SeekPng.com_blue-circle-icon-png_4287240_yzwqdv.png"
                                        })`,
                                }}
                            ></div>
                        )}
                    </div>
                </div>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Upload
                </Button>
            </form>
        </div>
    )
}
export default ProfileImage;
