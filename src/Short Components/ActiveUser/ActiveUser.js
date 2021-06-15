import React, { useContext, useEffect, useRef, useState } from "react";
import "./ActiveUser.css";
import { FirebaseContext } from "../../Store/Context";

function ActiveUser() {
  const { Firebase } = useContext(FirebaseContext);
  const [isClicked, setIsClicked] = useState(false);
  const userBoxRef = useRef();
  const outsideClickHandle = (event) => {
    if (!userBoxRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        console.log("Signed Out");
      });
    setIsClicked(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandle);
    // CLeanup fn
    return () => {
      document.removeEventListener("mousedown", outsideClickHandle);
    };
  });
  return (
    <div ref={userBoxRef} className="active-user">
      <div
        className="active-user_icon"
        onClick={() => setIsClicked(!isClicked)}
      >
        <h2>B</h2>
      </div>
      {isClicked && (
        <div className="content">
          <h2 onClick={() => setIsClicked(false)}>Bimal S Kumar</h2>
          <h2 style={{ color: "red" }} onClick={signOut}>
            Sign Out
          </h2>
        </div>
      )}
    </div>
  );
}

export default ActiveUser;
