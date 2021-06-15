import React, { useContext, useState } from "react";
import "./ImageUpload.css";

function ImageUpload(props) {
  const [image, setImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  // To select the corresponding img tag
  const uploadImage = () => {
    document.getElementById("upload-img").click();
  };
  const handleUpload = (event) => {
    setImage(event.target.files[0]);
    setIsUploaded(true);
    console.log(document.getElementById(props.item));
  };
  return (
    <div className="add-photo_wrapper">
      <div className="add-photo_image">
        <img src="" alt="" id={props.item} />
      </div>
      {!isUploaded && (
        <div className="add-photo_icon" onClick={uploadImage}>
          <i className="fas fa-cloud-upload-alt"></i>
          <p>Upload Image</p>
        </div>
      )}
      <div className="delete-photo">
        <i className="fas fa-times"></i>
      </div>
      <input type="file" id="upload-img" hidden onChange={handleUpload} />
    </div>
  );
}

export default ImageUpload;
