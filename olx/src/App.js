import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { useContext, useEffect } from "react";
import { AuthenticateUser, FirebaseContext } from "./Store/Context";

function App() {
  // State for whether loggded in or not
  // Setup authentication context
  const { setUser } = useContext(AuthenticateUser);
  // Setup Firebase Context
  const Firebase = useContext(FirebaseContext);
  // useEffect(() => {
  //   Firebase.auth().onAuthStateChanged((userDetails) => {
  //     console.log(`This is the ${userDetails.displayName}`);
  //     setUser(userDetails);
  //   });
  // });
  // For login, a popup rises and the url will change to /login and it must be on top of home
  // For signup, a popup rises and the url will change to /signup and it must be on top of home
  // For other pages they must show as a seperate page
  return (
    <>
      <div className="App" style={{ zIndex: "1" }}>
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
        </Router>
      </div>
    </>
  );
}

export default App;
