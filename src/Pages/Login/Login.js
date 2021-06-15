import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../../Store/Context";
import "./Login.css";

function Login() {
  // Setup useHistory
  const history = useHistory();
  // Setting firebase context
  const { Firebase } = useContext(FirebaseContext);
  // State for email
  const [email, setEmail] = useState("");
  // State for password
  const [password, setPassword] = useState("");
  // State for keeping logo url
  const [logo, setLogo] = useState("");
  const storageRef = Firebase.storage().ref("Images");
  storageRef
    .child("android-chrome-192x192.png")
    .getDownloadURL()
    .then((url) => {
      setLogo(url);
    });
  // Function for handling login

  const handleLogin = (event) => {
    event.preventDefault();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("LoggedIn");
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login-modal">
        <Link to="/">
          <button className="close-modal-btn">
            <i className="fas fa-times"></i>
          </button>
        </Link>
        <img src={logo} alt="" className="login_olx_logo" />
        <form action="" className="login__form" onSubmit={handleLogin}>
          <label htmlFor="login__form">Email</label>
          <input
            type="email"
            className="input_box"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="login__form">Password</label>
          <input
            type="password"
            className="input_box"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input type="submit" className="input__form_submit" value="Log In" />
        </form>
        <div className="no-account">
          <h1 id="or">OR</h1>

          <h1 className="no-account-indication">
            Don't Have an Account?
            <Link to="/signup">SignUp</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;

// Finished
