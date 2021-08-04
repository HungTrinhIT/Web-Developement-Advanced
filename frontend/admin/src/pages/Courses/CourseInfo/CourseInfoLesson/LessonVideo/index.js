import React, { useState, useEffect } from "react";
import { Button, message } from "antd";
import { useParams } from "react-router-dom";

import { CloudUploadOutlined } from "@ant-design/icons";
import courseApi from "../../../../../api/courseApi";
const LessonVideo = (props) => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

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
      const response = await courseApi.uploadImage(
        id,
        JSON.stringify({ data: base64EncodedImage })
      );
      message.success("Upload course successfully");
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
      <h3>Upload course image</h3>
      <form onSubmit={handleSubmitFile} className="form">
        <div className="course-upload">
          <div className="course-edit">
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
          <div className="course-preview">
            <div
              id="imagePreview"
              style={{
                backgroundImage: `url(${previewSource})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LessonVideo;
