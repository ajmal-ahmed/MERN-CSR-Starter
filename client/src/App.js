import React from 'react';
import Layout from "./containers/Layout"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import Home from "./pages/Home"
import { connect } from "react-redux";
import { setUserData } from "./actions/user"
function App(props) {
  let isLoggedIn = false;
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    // setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    // store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    let currentTime = new Date().getTime();
    let expiry = new Date(decoded.iat).getTime();
    expiry += 1000 * 60 * 59//expires by an hour
    if (expiry < currentTime) {
      // Logout user
      // store.dispatch(logoutUser());

      // Redirect to login
      window.location.href = "./sign-in";
    }
    if (!props.user.auth) {
      props.setData("auth", true)
    }
    isLoggedIn = true;
  } else {
    // console.log("path", window.location.pathname)
    if (window.location.pathname === "/") {
      window.location.href = "./sign-in";
      return null;
    }

  }
  if (isLoggedIn) {
    return <Router><Layout ><Home /></Layout></Router>
  }

  return (
    <>
      <Router>
        <Layout >
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/resetpassword" component={ResetPassword} />
          </Switch>
        </Layout>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

const mapStoreToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => ({
  setData: (name, val) => dispatch(setUserData(name, val))
})

export default connect(mapStoreToProps, mapDispatchToProps)(App)