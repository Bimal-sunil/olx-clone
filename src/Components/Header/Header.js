import React, { useRef, useState, useEffect, useContext } from "react";
import Language from "../../Short Components/Language/Language";
import { AuthenticateUser, FirebaseContext } from "../../Store/Context";
import "./Header.css";
import { Link } from "react-router-dom";
import ActiveUser from "../../Short Components/ActiveUser/ActiveUser";

function Header() {
  // Set the context for current user
  const { user } = useContext(AuthenticateUser);
  const [mainLogo, setMainLogo] = useState("");
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const arrowRef = useRef();
  const { Firebase } = useContext(FirebaseContext);
  const storageRef = Firebase.storage().ref("Images");
  storageRef
    .child("apple-touch-icon.png")
    .getDownloadURL()
    .then((url) => {
      setMainLogo(url);
    })
    .catch((error) => {
      alert(`Detected error ${error}`);
    });
  // To download image from cloud storage

  const revertArrow = (value) => {
    if (value === "T") {
      if (isArrowRotated) {
        arrowRef.current.style.transform = "rotate(180deg)";
        arrowRef.current.style.transition = "400ms";
      } else {
        arrowRef.current.style.transform = "rotate(0deg)";
        arrowRef.current.style.transition = "400ms";
      }
    }
    // If selected outside
    else if (value === "F") {
      if (!isArrowRotated) {
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
  const dropDownRef = useRef();
  const handleArrow = (e) => {
    if (!dropDownRef.current.contains(e.target)) {
      setIsArrowRotated(false);
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

  const onSelection = () => {
    setIsArrowRotated(!isArrowRotated);
    revertArrow("F");
  };

  return (
    <div className="container header">
      <img src={mainLogo} alt="Olx-logo" className="logo" />
      <div className="location">
        <i className="fas fa-search"></i>
        <select
          ref={dropDownRef}
          name=""
          id="set-location"
          onClick={onSelection}
        >
          <option value="">India</option>
        </select>
        <i ref={arrowRef} className="fas fa-chevron-down"></i>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Find Cars, Mobile Phones and more..."
          id="search-bar"
        />
        <div className="icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <Language />

      {/* Check whether user is logged in or not */}

      {user ? (
        <ActiveUser/>
      ) : (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <h5 className="login_header-title">LogIn</h5>
        </Link>
      )}
      <Link to="/post" style={{textDecoration:"none"}}>
      <div className="sell">
        <i className="fas fa-plus"></i>
        <h2 className="sell-h2">Sell</h2>
      </div>
      </Link>
    </div>
  );
}

export default Header;
