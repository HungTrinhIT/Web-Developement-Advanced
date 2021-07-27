import React, { useState } from "react";
import courseApi from "../../../../api/courseApi";
const CourseInfoImage = () => {
  const [img, setImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", img);
    const data = await courseApi.updateImg(1, fd);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
          name="image"
          accept="image/*"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseInfoImage;
