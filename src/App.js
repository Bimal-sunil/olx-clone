import React, { useContext, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { AuthenticateUser, FirebaseContext } from "./Store/Context";
import Create from "./Pages/Create/Create";

function App() {
  // State for whether logged in or not
  // Setup authentication context
  const { setUser } = useContext(AuthenticateUser);
  const { Firebase } = useContext(FirebaseContext);
  // Setup Firebase Context
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((userDetails) => {
      setUser(userDetails);
    });
  });
  // For login, a popup rises and the url will change to /login and it must be on top of home
  // For signup, a popup rises and the url will change to /signup and it must be on top of home
  // For other pages they must show as a seperate page
  TODO: return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/post">
          <Create />
        </Route>
      </Router>
    </div>
  );
}

export default App;
