import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../../Store/Context";
import "./Signup.css";

function Signup() {
  const history = useHistory();
  const { Firebase } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState("");
  // To get files from cloud storage
  const storageRef = Firebase.storage().ref("Images");
  storageRef
    .child("android-chrome-192x192.png")
    .getDownloadURL()
    .then((url) => {
      setLogo(url);
    });
  // Create a user
  // To handle the form submission
  const store = (userDetails) => {
    Firebase.firestore()
      .collection("Users")
      .add({
        id: userDetails.user.uid,
        userName: username,
        phone: phone,
      })
      .then(() => {
        history.push("/login");
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userDetails) => {
        console.log(userDetails);
        userDetails.user
          .updateProfile({ displayName: username })
          .then(() => {
            store(userDetails);
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signup">
      <div className="signup-modal">
        <Link to="/">
          <button className="close-modal-btn">
            <i className="fas fa-times"></i>
          </button>
        </Link>
        <img src={logo} alt="" className="signup_olx_logo" />
        <form action="" className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="login__form">Full Name</label>
          <input
            type="text"
            className="input_box"
            name="name"
            placeholder="Enter your Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="login__form">Phone</label>
          <input
            type="number"
            className="input_box"
            name="phone"
            placeholder="Enter your Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="signup__form">Email</label>
          <input
            type="email"
            className="input_box"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="login__form">Password</label>
          <input
            type="password"
            className="input_box"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            className="input__form_submit"
            value="Create Account"
          />
        </form>
        <div className="no-account">
          <h1 id="or">OR</h1>
          <h1 className="no-account-indication">
            Have an Account?
            <Link to="/login">Login</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Signup;

// On Progress

// If i reload the page no data is storing in firestore.
