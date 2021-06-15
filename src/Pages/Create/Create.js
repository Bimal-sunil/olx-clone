import React from "react";
import ImageUpload from "../../Short Components/ImageUpload/ImageUpload";
import "./Create.css";

function Create() {
  return (
    <div className="create">
      <form action="" className="create_form">
        <h1 className="create_main_title">Post Your AD</h1>
        <fieldset className="create__product">
          <legend className="create__title">Product</legend>
          <label htmlFor="create__product_category">Category</label>
          <select name="product_category" id="create__product_category">
            <option value="">Choose Category</option>
            <option value="">Cars</option>
            <option value="">Mobiles</option>
            <option value="">Electronics & Appliances</option>
            <option value="">Jobs</option>
            <option value="">Bikes</option>
            <option value="">Commercial Vehicles & Spares</option>
            <option value="">Furniture</option>
            <option value="">Fashion</option>
            <option value="">Books, Sports & Hobbies</option>
            <option value="">Pets</option>
            <option value="">Services</option>
          </select>
          <label htmlFor="create__product_title">Title</label>
          <input
            type="text"
            id="create__product_title"
            placeholder="Product Title"
          />
          <label htmlFor="create__product_details">Details</label>
          <textarea
            name=""
            id="create__product_details"
            placeholder="Product Details"
          ></textarea>
          <label htmlFor="create__product_description">Description</label>
          <textarea
            name=""
            id="create__product_description"
            placeholder="Description"
          ></textarea>
          <label htmlFor="create__product_price">Price</label>
          <input
            type="number"
            id="create__product_price"
            placeholder="₹ Price"
          />
        </fieldset>
        <fieldset className="create_product_photos">
          <legend className="create__title">Add Photos</legend>
          <div className="create_add-photo_container">
            <ImageUpload item="item1" />
            <ImageUpload item="item2" />
            <ImageUpload item="item3" />
            <ImageUpload item="item4" />
            <ImageUpload item="item5" />
            <ImageUpload item="item6" />
          </div>
          <button
            className="create_upload-photo_btn"
            onClick={(event) => event.preventDefault()}
          >
            Upload Image
          </button>
        </fieldset>
        <fieldset className="create_product_location">
          <legend className="create__title">Location</legend>
          <label htmlFor="create_product_location_landmark">Landmark</label>
          <input type="text" id="create_product_location_landmark" />
          <label htmlFor="create_product_location_city">City</label>
          <input type="text" id="create_product_location_city" />
          <div className="create_product_location_area">
            <div className="create_product_location_district">
              <label htmlFor="create_product_location_district">District</label>
              <input type="text" id="create_product_location_district" />
            </div>
            <div className="create_product_location_state">
              <label htmlFor="create_product_location_state">State</label>
              <input type="text" id="create_product_location_state" />
            </div>
          </div>
        </fieldset>
        <fieldset className="create_product_user">
          <legend className="create__title">Edit Your Details</legend>
          <label htmlFor="create_product_user_name">Name</label>
          <input type="text" id="create_product_user_name" />
          <label htmlFor="create_product_user_phone">Phone</label>
          <input type="text" id="create_product_user_phone" />
        </fieldset>
        <input type="submit" value="Post" className="create_form_submit" />
      </form>
    </div>
  );
}

export default Create;
