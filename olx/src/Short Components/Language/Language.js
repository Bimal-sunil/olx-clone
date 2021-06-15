import React, { useEffect, useRef, useState } from "react";
import "./Language.css";

function Language() {
  const [language, setLanguage] = useState("English"); //To set the language
  const [state, setState] = useState(false);
  //To show or hide dropdown menu
  const updateLanguage = (e) => {
    setLanguage(e.target.innerHTML);
    setState(false);
    revertArrow("F");
  };
  // To update the language

  const arrowRef = useRef();

  const revertArrow = (value) => {
    if (value === "T") {
      if (state) {
        arrowRef.current.style.transform = "rotate(180deg)";
        arrowRef.current.style.transition = "400ms";
      } 
      else{
        arrowRef.current.style.transform = "rotate(0deg)";
        arrowRef.current.style.transition = "400ms";
      }
    }
    // If selected outside
    else if (value === "F") {
      if (!state) {
        arrowRef.current.style.transform = "rotate(180deg)";
        arrowRef.current.style.transition = "400ms";
      } 
      else {
        arrowRef.current.style.transform = "rotate(0deg)";
        arrowRef.current.style.transition = "400ms";
      }
    }
    // If selected inside
  };
  // Function to rotate arrow
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
  }, []);
  // To hide dropdown only when clicking outside the component
  const onClickFunction = () => {
    setState(!state);
    revertArrow("F");
  };
  return (
    <div ref={dropDownRef} className="dropdown">
      <div className="heading" onClick={onClickFunction} value="click">
        <h1>{language}</h1>
        <i ref={arrowRef} className="fas fa-chevron-down"></i>
      </div>
      {state && (
        <div className="content">
          <h2 onClick={updateLanguage}>English</h2>
          <h2 onClick={updateLanguage}>हिंदी</h2>
        </div>
      )}
    </div>
  );
}

export default Language;
