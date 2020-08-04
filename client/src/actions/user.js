import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const SET_USER_DATA = "SET_USER_DATA"
const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export function setUserData(name, value) {
  return {
    type: SET_USER_DATA,
    payload: { [name]: value },
  };
}

// Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post("/api/auth/sign-up", userData)
    .then(res => {
      toast.success("Registered successfully")
      setTimeout(() => {
        dispatch(setUserData('redirect', '/'));
      }, 2000);

    })
    .catch(err => {
      dispatch({
        type: SET_USER_DATA,
        payload: err.response.data
      })
      if (err.response.data.description) {
        toast.error(err.response.data.description);
      }
    }
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/auth/token", userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { accessToken } = res.data;
      localStorage.setItem("jwtToken", accessToken);
      // Set token to Auth header
      setAuthToken(accessToken);
      // Set current user as authenticated
      dispatch(setUserData('redirect', '/'))
      dispatch(setUserData('auth', true));
      toast.success("Logged")
    })
    .catch(err => {
      dispatch({
        type: SET_USER_DATA,
        payload: err.response.data
      })
      if (err.response.data.description) {
        toast.error(err.response.data.description);
      }
    }
    );
}

export const forgotPassword = userData => dispatch => {
  axios
    .post("/api/auth/forgot-password", userData)
    .then(res => {
      if (res.data && res.data.message) {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }

    })
    .catch(err => {
      dispatch({
        type: SET_USER_DATA,
        payload: err.response.data
      })
      if (err.response.data.description) {
        toast.error(err.response.data.description);
      }
    }
    );
}

export const resetPassword = userData => dispatch => {
  axios
    .post("/api/auth/reset-password", userData)
    .then(res => {
      if (res.data && res.data.message) {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
      setTimeout(() => {
        dispatch(setUserData('redirect', '/'));
      }, 2000);
    })
    .catch(err => {
      toast.error("Invalid Credentials");
    }
    );
}

export const fetchEmployees = search => dispatch => {
  axios
    .post("/api/employees/list", { search })
    .then(res => {
      console.log("res,", res)
      if (res.data && res.data.employees) {
        dispatch(setUserData('employees', res.data.employees));
      }
    })
    .catch(err => {
      console.log("err,", err)
      // toast.error("Invalid Credentials");
    }
    );
}


// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch({
    type: SET_USER_DATA, payload: { auth: false }
  });
}