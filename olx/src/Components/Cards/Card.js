import React, {  useState } from "react";
import "./Card.css";

function Card() {
  const [state, setState] = useState(false);
  const addToWishList = () => {
    setState(!state);
  };
  return (
    <div className="card">
      <img
        src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?cs=srgb&dl=pexels-alexgtacar-1592384.jpg&fm=jpg"
        alt=""
      />
      <i
        className={state ? "fas fa-heart" : "far fa-heart"}
        onClick={addToWishList}
      ></i>
      <div className="card-content">
        <h1 className="price">Price</h1>
        <h5 className="product-description">Description</h5>
        <p className="details">Details</p>
        <p className="place">Place</p>
        <p className="date">Date</p>
      </div>
    </div>
  );
}

export default Card;
