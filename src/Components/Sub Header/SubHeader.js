import React, { useRef, useState, useEffect } from "react";
import "./SubHeader.css";

function SubHeader() {
  const [state, setState] = useState(false);
  const arrowRef = useRef();
  const revertArrow = (value) => {
    if (value === "T") {
      if (state) {
        arrowRef.current.style.transform = "rotate(180deg)";
        arrowRef.current.style.transition = "400ms";
      } else {
        arrowRef.current.style.transform = "rotate(0deg)";
        arrowRef.current.style.transition = "400ms";
      }
    }
    // If selected outside
    else if (value === "F") {
      if (!state) {
        arrowRef.current.style.transform = "rotate(180deg)";
        arrowRef.current.style.transition = "400ms";
      } else {
        arrowRef.current.style.transform = "rotate(0deg)";
        arrowRef.current.style.transition = "400ms";
      }
    }
    // If selected inside
  };
  // Function to rotate arrow

  const onSelection = () => {
    setState(!state);
    revertArrow("F");
  };

  const dropDownRef = useRef();
  const handleArrow = (e) => {
    if (!dropDownRef.current.contains(e.target)) {
      setState(false);
      revertArrow("T");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleArrow);
    // Cleanup fn
    return () => {
      document.removeEventListener("mousedown", handleArrow);
    };
  });
  // To prevent touch outside

  return (
    <div className="sub-header container">
      <div
        ref={dropDownRef}
        className="heading"
        onClick={onSelection}
      >
        <h1>All Categories</h1>
        <i ref={arrowRef} className="fas fa-chevron-down"></i>
      </div>
      <div className="contents">
        <p>Cars</p>
        <p>Motorcycles</p>
        <p>Mobile Phones</p>
        <p>For Sale: Houses & Apartments</p>
        <p>Scooters</p>
        <p>Commercial & Other Vehicles</p>
        <p>For Rent: Houses & Apartments</p>
      </div>
    </div>
  );
}

export default SubHeader;
