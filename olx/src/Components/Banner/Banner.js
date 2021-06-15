import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../Store/Context";
import "./Banner.css";

function Banner() {
  const [bannerUrl, setBannerUrl] = useState("");
  const Firebase = useContext(FirebaseContext);
  const storageRef = Firebase.storage().ref("Images");
  storageRef
    .child("banner copy.png")
    .getDownloadURL()
    .then((url) => {
      setBannerUrl(url);
    });
  return (
    <div className="banner">
      <img src={bannerUrl} alt="olx-banner" />
    </div>
  );
}

export default Banner;
